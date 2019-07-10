let scrollWidth;
export const tool = {
  /**
   * 获取数组中符合条件的元素的索引
   * @param arr 数组
   * @param fn 一个函数，如果函数返回true，则返回该项的下标，如果没有找到则返回-1
   */
  getIndex: function (arr, fn) {
    if (!arr || arr.length == 0 || !fn || (typeof fn != "function")) {
      return -1;
    }

    if (arr.findIndex) {
      return arr.findIndex(fn);
    }
    var len = arr.length,
      i = 0,
      index = -1;
    for (; i < len; i++) {
      var item = arr[i];
      if (fn(item, index, arr) === true) {
        index = i;
        break;
      }
    }
    return index;
  },
  /**
   * 绑定事件
   * @param ele dom元素
   * @param eventName 事件名称
   * @param fn 事件回调函数
   */
  on: function (ele, eventName, fn) {
    if (!ele) {
      console.error('on(ele, eventName, fn)函数第一个参数必须是一个dom元素!');
      return this;
    }
    if (!eventName || typeof eventName !== 'string') {
      console.error('on(ele, eventName, fn)函数第二个参数必须是一个字符串!');
      return this;
    }
    if (!fn || typeof fn !== 'function') {
      console.error('on(ele, eventName, fn)函数第三个参数必须是一个函数!');
      return this;
    }
    if (!ele._events) {
      ele._events = {};
    }
    if (!(eventName in ele._events)) {
      ele._events[eventName] = [fn];
      if (document.addEventListener) {
        ele.addEventListener(eventName, function (e) {
          var events = ele._events[eventName];
          if (events && events.length > 0) {
            for (var i = 0, len = events.length; i < len; i++) {
              if (events[i]) {
                events[i].call(ele, e);
              }
            }
          }
        }, false);
      } else if (window.attachEvent) {
        ele.attachEvent('on' + eventName, function () {
          var events = ele._events[eventName];
          var e = window.event;
          e.preventDefault = function () {
            e.returnValue = false;
          };
          e.stopPropagation = function () {
            e.cancelBubble = true;
          };
          for (var i = 0, len = events.length; i < len; i++) {
            events[i].call(ele, e);
          }
        });
      }
    } else {
      var index = this.getIndex(ele._events[eventName], function (item) {
        return item === fn;
      });
      if (index < 0 || typeof index === 'undefined') {
        ele._events[eventName].push(fn);
      }
    }
    return this;
  },
  /**
   * 解绑事件
   * @param ele dom元素
   * @param eventName 事件名称
   * @param fn 事件回调函数
   */
  off: function (ele, eventName, fn) {
    if (!ele) {
      console.error('off(ele, eventName, fn)函数第一个参数必须是一个dom元素!');
      return;
    }
    if (!eventName || typeof eventName !== 'string') {
      console.error('off(ele, eventName, fn)函数第二个参数必须是一个字符串!');
      return;
    }
    if (!ele._events) {
      return this;
    }
    if (!eventName) {
      return this;
    }
    var events = ele._events[eventName];
    // 如果只传递了事件名称而未传递具体的事件，则将指定事件名称的所有回调函数全部清除
    if (eventName && !fn) {
      if (document.removeEventListener) {
        for (var i = 0, len = events.length; i < len; i++) {
          ele.removeEventListener(eventName, events[i], false);
        }
      } else if (window.detachEvent) {
        for (var i = 0, len = events.length; i < len; i++) {
          ele.detachEvent('on' + eventName, events[i]);
        }
      }
      delete ele._events[eventName];
    } else if (eventName && fn) {
      if (!events) {
        return;
      }
      if (document.removeEventListener) {
        if (events.length === 1) {
          ele.removeEventListener(eventName, fn, false);
          delete ele._events[eventName];
        } else {
          var index = this.getIndex(events, function (item) {
            return item === fn;
          });
          if (index > -1) {
            events.splice(index, 1);
          }
        }
      } else if (window.detachEvent) {
        if (!events) {
          return;
        }
        if (events.length === 1) {
          ele.detachEvent('on' + eventName, fn);
          delete ele._events[eventName];
        } else {
          var index = this.getIndex(events, function (item) {
            return item === fn;
          });
          if (index > -1) {
            events.splice(index, 1);
          }
        }
      }
    }
    events = null;
    return this;
  },
  /**
   * 数组去重
   * @param arr 需要去重的数组
   * @param isObjectValue 数组的值是否是引用类型
   */
  arrayNoReapeat: function (arr, isObjectValue) {
    if (!arr || arr.length === 0) {
      return arr;
    }
    isObjectValue = typeof isObjectValue === "undefined" ? false : !!isObjectValue;
    var arrLen = arr.length,
      newArr = [];
    // 值类型的数组，使用对象属性唯一的特性来去重
    if (!isObjectValue) {
      var obj = {};
      for (var i = 0; i < arrLen; i++) {
        obj[arr[i]] = 1;
      }
      for (var attr in obj) {
        newArr.push(attr);
      }
      return newArr;
    }

    newArr.push(arr[0]);
    for (var i = 1; i < arrLen; i++) {
      var item = arr[i],
        repeat = false;
      for (var j = 0; j < newArr.length; j++) {
        if (item === arr[j]) {
          repeat = true;
          break;
        }
      }
      if (!repeat) {
        newArr.push(item);
      }
    }
    return newArr;
  },
  /**
   * 获取元素的css属性值
   * @param ele dom元素
   * @param cssAttribute css属性名称
   */
  getStyle: function (ele, cssAttribute) {
    if (!ele || !ele.nodeName) {
      console.error("ele 必须是一个dom元素");
      return;
    }
    if (!cssAttribute) {
      console.error("cssAttribute 必须是一个字符串");
      return;
    }
    var val = "";
    if (window.getComputedStyle) {
      val = window.getComputedStyle(ele, null)[cssAttribute];
    } else if (ele.currentStyle) {
      val = ele.currentStyle[cssAttribute];
    }
    if (!isNaN(parseFloat(val))) {
      return parseFloat(val);
    } else {
      return val;
    }
  },
  /**
   * 给元素设置css属性
   * @param ele dom元素
   * @param attr css属性名
   * @param val css属性值，如果不传递attr参数，则该参数可以为一个对象，就像jquery的css()方法一样
   */
  setCss: function (ele, attrs, val) {
    if (!ele || !ele.nodeName) {
      console.error("ele 必须是一个dom元素");
      return;
    }
    var type1 = ({}).toString.call(attrs),
      // 需要字段加单位的css属性
      autoAddUnitAttr = {
        width: 1, height: 1, margin: 1, padding: 1, borderRadius: 1, top: 1, left: 1,
        marginLeft: 1, marginRight: 1, marginTop: 1, marginBottom: 1, right: 1, bottom: 1,
        paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1,
        borderTopLeftRadius: 1, borderTopRightRadius: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1,
        fontSize: 1, lineHeight: 1, textIndent: 1, minWidth: 1, maxWith: 1
      };
    if (type1 === "[object String]" && typeof val !== "undefined") {
      attrs = attrs.replace(/\-(\w)/g, function (matched, $1) {
        return $1.toUpperCase();
      });
      if (attrs in autoAddUnitAttr && !isNaN(Number(val))) {
        ele.style[attrs] = val + "px";
      } else {
        ele.style[attrs] = val;
      }
    } else if (type1 === "[object Object]") {
      var style = ele.style;
      for (var attr in attrs) {
        var val2 = attrs[attr],
          isNumber = Number(val2);

        attr = attr.replace(/\-(\w)/g, function (matched, $1) {
          return $1.toUpperCase();
        });

        if (attr in autoAddUnitAttr && !isNaN(isNumber)) {
          style[attr] = val2 + "px";
        } else {
          style[attr] = val2;
        }
      }
    }
    return this;
  },
  /**
   * 给指定元素添加class
   * @param ele
   * @param classname
   */
  addClass: function (ele, classname) {
    if (!ele || !classname || ele.nodeType !== 1) {
      return;
    }
    var classArr = classname.split(" ");
    if (ele.classList) {
      for (var i = 0, len = classArr.length; i < len; i++) {
        var item = classArr[i];
        if (!ele.classList.contains(item)) {
          ele.classList.add(item);
        }
      }
      return ele;
    } else {
      var classNameArr = ele.className && ele.className.length > 0 ? ele.className.split(" ") : [];
      if (classNameArr.length === 0) {
        ele.className = classname;
        return;
      }
      // 合并两个数组
      Array.prototype.push.apply(classNameArr, classArr);
      classNameArr = this.arrayNoReapeat(classNameArr);
      ele.className = classNameArr.join(" ");
      return ele;
    }
  },
  /**
   * 给指定元素移除class
   * @param ele
   * @param classname
   */
  removeClass: function (ele, classname) {
    if (!ele || !classname || ele.nodeType !== 1) {
      return;
    }
    var classArr = classname.split(" ");
    if (ele.classList) {
      for (var i = 0, len = classArr.length; i < len; i++) {
        var item = classArr[i];
        if (ele.classList.contains(item)) {
          ele.classList.remove(item);
        }
      }
      return ele;
    } else {
      var classNameArr = ele.className && ele.className.length > 0 ? ele.className.split(" ") : [];
      if (classNameArr.length === 0) {
        return;
      }
      for (var i = classNameArr.length; i >= 0; i--) {
        for (var j = 0, len2 = classArr.length; j < len2; j++) {
          if (classNameArr[i] == classArr[j]) {
            classNameArr.splice(i, 1);
          }
        }
      }
      ele.className = classNameArr.join(" ");
      return ele;
    }
  },
  /**
   * 判断元素是否包含指定className
   * @param ele dom元素
   * @param className className
   * @returns {boolean}
   */
  hasClass: function (ele, className) {
    if (!ele || !ele.nodeName) {
      console.error("ele 必须是一个dom元素");
      return;
    }
    if (!className) {
      console.error("className 必须是一个字符串");
      return;
    }
    if (ele.classList) {
      return ele.classList.contains(className);
    } else {
      var flag = false;
      var classNameArr = ele.className.split(" ");
      for (var i = 0, len = classNameArr.length; i < len; i++) {
        if (classNameArr[i] === className) {
          flag = true;
          break;
        }
      }
      return flag;
    }
  },
  /**
   * 判断两个元素是否是包含关系
   * @param ele 父元素
   * @param childEle 子元素
   * @returns {Boolean}
   */
  elementContains: function (ele, childEle) {
    if (ele == childEle) {
      return false;
    }
    if (typeof ele.contains == "function") {
      return ele.contains(childEle);
    } else {
      while (true) {
        if (!childEle) {
          return false;
        }
        if (childEle == ele) {
          return true;
        } else {
          childEle = childEle.parentNode;
        }
      }
      return false;
    }
  },
  /**
   * 获取元素的指定父级元素
   * @param el dom 元素
   * @param className 父元素的class name
   * @returns {dom、undefined}
   */
  parents: function (el, className) {
    if (!el || !el.nodeName || !className) {
      return;
    }
    var classNameArr = className.split(' ');
    var parent = el.parentElement;

    while (parent) {
      var flag = true;
      for (var i = 0, len = classNameArr.length; i < len; i++) {
        if (!this.hasClass(parent, classNameArr[i])) {
          flag = false;
          break;
        }
      }
      if (flag) {
        return parent;
      } else {
        parent = parent.parentElement;
      }
    }
  },
  /**
   * 判断对象是否是空对象
   * @param obj
   * @returns {boolean}
   */
  isEmptyObject: function (obj) {
    for (var attr in obj) {
      return false;
    }
    return true;
  },
  /**
   * 获取元素距浏览器最顶部及最左边的距离
   * @param ele dom元素
   */
  offset: function (ele) {
    var positon = {
        top: 0,
        left: 0
      },
      offsetParent = ele.offsetParent;
    positon.top = ele.offsetTop;
    positon.left = ele.offsetLeft;
    while (offsetParent != null) {
      positon.top += offsetParent.offsetTop;
      positon.left += offsetParent.offsetLeft;
      offsetParent = offsetParent.offsetParent;
    }
    return positon;
  },
  /**
   * 拷贝对象，可以深拷贝，也可以浅拷贝，如果第一个参数为true，则是深拷贝
   * @returns {*}
   */
  extend: function () {
    var deep, target = arguments[0], original, current, i = 0, args = arguments, argsLen = args.length;

    if (typeof args[0] !== "boolean" && !args[0]) {
      return this;
    }
    //如果只传递了一个参数，则目标对象就是this
    if (argsLen === 1 && typeof args[0] !== "boolean") {
      return this;
    }
    if (argsLen >= 2 && typeof args[0] !== "boolean") {
      target = args[0];
    }
    //如果传递了多个参数，并且第一个参数为boolean类型，那么用户可能是想进行深度合并
    if (argsLen >= 2 && typeof args[0] === "boolean") {
      deep = args[0];
      target = args[1];
      i = 2;
    }

    for (; i < argsLen; i++) {
      var tempobj = args[i];
      for (var attr in tempobj) {
        original = target[attr];
        current = tempobj[attr];
        var currentIsObject = typeof current === "object";

        if (original === current) {
          continue;
        }
        //进行深度合并
        if (deep && currentIsObject) {
          if (typeof original === 'undefined') {
            var currentType = ({}).toString.call(current);
            if (currentType === '[object Array]') {
              original = [];
            } else if (currentType === '[object Object]') {
              original = {};
            }
          }

          target[attr] = args.callee(deep, original, current);
        } else {
          target[attr] = current;
        }
      }
    }
    /*返回目标对象，如果目标对象是一个jQuery对象则可以链式编程，如果不是也可以方便操作*/
    return target;
  },
  /**
   * 获取浏览器类型
   * @returns {object} 返回一个对象
   */
  browser() {
    //取得浏览器的userAgent字符串
    var userAgent = navigator.userAgent,
      //判断是否Opera浏览器
      isOpera = userAgent.indexOf("Opera") > -1,
      //判断是否IE浏览器
      isIE = ((userAgent.indexOf("compatible") > -1) && userAgent.indexOf("MSIE") > -1 && !isOpera) || userAgent.indexOf("Trident") > -1,
      //判断是否IE的Edge浏览器
      isEdge = userAgent.indexOf("AppleWebKit") > -1 && userAgent.indexOf("Edge") > -1 && !isIE,
      //判断是否Firefox浏览器
      isFF = userAgent.indexOf("Firefox") > -1,
      //判断是否Safari浏览器
      isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1,
      //判断Chrome浏览器
      isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1,
      obj = {
        chrome: isChrome,
        firefox: isFF,
        safari: isSafari,
        opera: isOpera,
        edge: isEdge,
        ie: isIE,
        mobile: !!userAgent.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1, //android终端
        iPhone: userAgent.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: userAgent.indexOf('iPad') > -1, //是否iPad
        webApp: userAgent.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        weixin: userAgent.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
        qq: userAgent.match(/\sQQ/i) == " qq" //是否QQ
      };

    if (isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      obj.ieVersion = fIEVersion;
      // ie 11
      if (userAgent.indexOf("Trident") > -1 && /rv:(\w+)/.test(userAgent)) {
        obj.ieVersion = RegExp.$1;
      }
    }
    return obj;
  },
  // 滚动条平滑滚动到顶部
  scrollUp() {
    //IE10+/Android Browser4.4+/
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame
      || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
      || function (clb) {
        return setTimeout(clb, 1000 / 60);
      };

    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame
      || function (id) {
        clearTimeout(id);
      };

    var top = document.body.scrollTop || document.documentElement.scrollTop;

    //滚动时长
    var duration = 300; //300ms
    //计算步长
    var step = top / (duration / (1000 / 60)) >> 0; //取整

    function fn() {
      if (top >= 0) {
        top -= step;
        document.documentElement.scrollTop = document.body.scrollTop = top;
        fn.rafTimer = requestAnimationFrame(fn);
      } else {
        document.body.scrollTop = 0;
        cancelAnimationFrame(fn.rafTimer);
      }
    }

    fn.rafTimer = requestAnimationFrame(fn);
  },
  // 获取滚动条位置
  scroll() {
    //IE9+及其他高版本浏览器
    if (window.pageXOffset != null) {
      return {
        left: window.pageXOffset,
        top: window.pageYOffset
      }
    } else if (document.compatMode == "CSS1Compat") {
      //如果浏览器不是处于怪异模式，即网页有声明dtd（即有声明<!DOCTYPE html>）
      return {
        left: document.documentElement.scrollLeft,
        top: document.documentElement.scrollTop
      }
    }
    //如果浏览器处于怪异模式，即网页没有声明dtd
    return {
      left: document.body.scrollLeft,
      top: document.body.scrollTop
    }
  },
  /**
   * 获取浏览器滚动条宽度
   * @returns {number}
   */
  getScrollWidth() {
    if (typeof scrollWidth !== 'undefined') {
      return scrollWidth;
    }
    const outer = document.createElement('div');
    outer.style.overflow = 'auto';
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';

    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    scrollWidth = widthNoScroll - widthWithScroll;

    return scrollWidth;
  },
  /**
   * 节流函数
   * @param method 事件触发的操作
   * @param mustRunDelay 间隔多少毫秒需要触发一次事件
   */
  throttle(method, mustRunDelay) {
    let timer,
      args = arguments,
      start;
    return function loop() {
      let self = this;
      let now = Date.now();
      if (!start) {
        start = now;
      }
      if (timer) {
        clearTimeout(timer);
      }
      if (now - start >= mustRunDelay) {
        method.apply(self, args);
        start = now;
      } else {
        timer = setTimeout(function () {
          loop.apply(self, args);
        }, 50);
      }
    }
  },
  /**
   * 获取浏览器使用的语言
   */
  getBrowserLang() {
    var type = navigator.appName,
      lang = "";
    if (type === "Netscape") {
      //获取浏览器配置语言，支持非IE浏览器
      lang = navigator.language;
    } else {
      //获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
      lang = navigator.userLanguage;
    }
    return lang.toLowerCase();
  },
  /**
   * 格式化日期
   * 如：
   *  formatDate(new Date) => 2018-07-27 14:32:25
   *  formatDate(1532673162672) => 2018-07-27 14:32:25
   *  formatDate("abc1532673162672def") => 2018-07-27 14:32:25
   *  formatDate(new Date, "yyyy年MM月dd日 hh时mm分ss秒") => 2018年07月27日 14时32分25秒
   * @param dateTemp
   * @param format
   * @returns {string}
   */
  formatDate(dateTemp, format = 'yyyy-MM-dd hh:mm:ss') {
    if (typeof dateTemp === "object" && !(/Date/.test(({}).toString.call(dateTemp)))) {
      console.error("dateTemp不是一个Date对象，请检查dateTemp数据类型！");
      return;
    }
    let date;
    if (typeof dateTemp !== "object") {
      let dateStr = dateTemp + "";
      dateStr = /\d{13,}/.exec(dateStr);
      if (!dateStr) {
        console.error(dateTemp + " 不是一个合法的时间戳！");
        return;
      }
      date = new Date(dateStr * 1);
    } else {
      date = dateTemp;
    }
    if (/(y{0,4})/.test(format)) {
      format = format.replace(/y{0,4}/, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    let obj = {
      "M+": (date.getMonth() + 1 + ""),
      "d+": (date.getDate() + ""),
      "h+": (date.getHours() + ""),
      "m+": (date.getMinutes() + ""),
      "s+": (date.getSeconds() + "")
    };
    for (let attr in obj) {
      if (new RegExp("(" + attr + ")").test(format)) {
        format = format.replace(new RegExp(attr), tool.padStartZero(obj[attr]).substr(2 - RegExp.$1.length));
      }
    }
    return format;
  },
  /**
   * 针对<datetime>组件的v-model返回值，进行格式转换。
   */
  formatDate_fromVueDateTime(originStr, format = 'yyyy-MM-dd') {
    return originStr && tool.formatDate(new Date(originStr), format)
  },
  /**
   * 给数字前面补零
   * 如：padStartZero(10) => 10
   *    padStartZero(5) => 05
   * @param num
   * @returns {string}
   */
  padStartZero(num) {
    return ("00" + num).substr((num + "").length);
  },
  /**
   * 清空一个对象的数据，默认将对象中的每一项的值都设为空
   * 如：clearData({name: "张三", age: 23}) => {name: "", age: ""}
   *     clearData({name: "张三", age: 23}, {age: 0}) => {name: "", age: 0}
   * @param datas
   * @param specially
   */
  clearData(datas, specially) {
    if (!datas || ({}).toString.call(datas) != "[object Object]") {
      return;
    }
    if (!specially) {
      specially = {};
    }
    for (var attr in datas) {
      if (attr in specially) {
        datas[attr] = specially[attr];
      } else {
        datas[attr] = "";
      }
    }
    return datas;
  },
  /**
   * 计算两个日期之间的时间差
   * @param startDate 开始时间，可以为时间戳、日期对象、时间字符串
   * @param endDate 结束时间，可以为时间戳、日期对象、时间字符串
   * @returns {{hours: number, seconds: number, months: number, minutes: number, days: number, years: number}}
   */
  dateSubtract(startDate, endDate){
    if(typeof startDate === 'string'){
      //startDate = startDate.replace('-', '/');
      startDate = new Date(startDate.replace('-', '/')).getTime();
    }else if(typeof startDate === 'object'){
      startDate = startDate.getTime();
    }
    if(typeof endDate === 'string'){
      //endDate = endDate.replace('-', '/');
      endDate = new Date(endDate.replace('-', '/')).getTime();
    }else if(typeof endDate === 'object'){
      endDate = endDate.getTime();
    }
    let diff = (endDate - startDate) / 1000;
    let obj = {
      years: Math.floor(diff / 31556926),  //年份，按回归年365天5时48分46秒算
      months: Math.floor(diff / 2629744) ? (Math.floor(diff / 2629744) % 12) : 0, //月份，以实际平均每月秒数计算
      days: Math.floor(diff / 3600 /24),
      hours: Math.floor(diff / 3600 % 24),
      minutes: Math.floor(diff / 60 % 60),
      seconds: Math.floor(diff % 60)
    };
    return obj;
  }
};
