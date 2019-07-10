import Vue from 'vue';
import Mask from './UMask.vue';
const MaskControl = Vue.extend(Mask);

const UMask = function (options) {
  options = options || {zIndex: 1000};
  if(typeof options.zIndex === 'undefined'){
    options.zIndex = 1000;
  }
  /* 这里传递给PMessageControl的data不会覆盖PMessage.vue中原有的data，而是与PMessage.vue中原有的data进行合并，类似
   * 与mixin，包括传递methods、生命周期函数也是一样 */
  let maskInstance = new MaskControl({
    data: options
  });
  // 渲染元素，随后使用原生appendChild将dom插入到页面中
  maskInstance.$mount();
  let $el = maskInstance.$el;
  document.body.appendChild($el);
  return maskInstance;
};

export default UMask;
