/*
  全局指令
 */
import Vue from 'vue';
import Clipboard from 'clipboard';
// 存储clipboard对象
let _clipboards = {};
// 取消type=number的鼠标滚轮滚动设置值
Vue.directive('cancelScrollUpdate', {
  bind (el) {
    var cancelScrollEvent = function (e) {
      e = e || window.event;
      // 阻止默认事件就可以取消滚轮滚动设置值了
      if (e.preventDefault) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
        e.returnValue = true;
      }
      return false;
    };
    el.addEventListener('mousewheel', cancelScrollEvent, false);
    el.addEventListener('DOMMouseScroll', cancelScrollEvent, false);
  },
});

// 复制文字
Vue.directive('copy', {
  /*
  * copy指令传递的值需为一个对象，对象中可以有以下属性
  * {
  *   target: '', // 复制的目标(必填，如果元素设置了data-clipboard-text可以不填)
  *   success: function (){}, // 复制成功后的回调
  *   error: function (){}, // 复制失败的回调
  * }
  * */
  bind (el, binding) {
    if (({}).toString.call(binding.value) !== '[object Object]') {
      console.error('copy指令的参数须为一个对象！');
      return;
    }
    if (!('data-clipboard-text' in el.attributes) && !binding.value.target) {
      console.error('请指定需要复制的目标！您可以在对象添加一个target属性以指定目标(target需为一个字符串的css选择器)，或在当前元素中设置"data-clipboard-text"属性值！');
    }
    el._clipId = 'clipId_' + new Date().getTime() + '_' + Math.random().toString(32).substr(2);
    let onSuccess = binding.value.success;
    let onError = binding.value.error;
    let clipboard;
    if (binding.value.target) {
      clipboard = new Clipboard(el, {
        target () {
          return document.querySelector(binding.value.target);
        },
      });
    } else {
      clipboard = new Clipboard(el);
    }
    clipboard.on('success', () => {
      onSuccess && (typeof onSuccess === 'function') ? onSuccess() : 1;
    });
    clipboard.on('error', () => {
      // 不支持复制
      console.error('该浏览器不支持自动复制');
      onError && (typeof onError === 'function') ? onError() : 1;
    });
    _clipboards[el._clipId] = clipboard;
  },
  unbind (el) {
    try {
      // 释放内存
      _clipboards[el._clipId].destroy();
      _clipboards[el._clipId] = null;
    } catch (e) {
      console.log('指令解绑失败', e);
    }
  },
});
