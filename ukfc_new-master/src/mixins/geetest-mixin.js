/*
  极验mixin
 */
import gt from "../common/js/geetest/geetest.gt";
import {commonApi} from "../common/api/commonApi";
// 自定义语言与极验语言对应表
const geetestLangMap = {
  "zh_CN": "zh-cn",
  "zh_TW": "zh-tw",
  "en_US": "en",
  "ja_JP": "ja",
  "ko_KR": "ko",
  "ru_RU": "ru"
};
console.log('gt',gt)
// 极验默认配置
const geetestOptions = {
  product: 'popup', // 极验展现形式 可选值有 float、popup、custom、bind
  width: '100%',
  lang: 'zh_CN',
  autoShow: true, // 当product为bind时，如果次参数为true，则在极验加载完成后立即显示极验弹窗
  area: null, // 极验绑定的元素，仅在 product为 custom、float、popup时需要传递
  callback: function () {} // 用户行为验证通过后的回调函数
};
export const geetestMixin = {
  data(){
    return {
      geetest: {
        geetestSuccessData: null, // 极验用户行为操作成功后的数据
        geetestObj: null, // 极验对象
        geetestLoading: false,
        useGeetest: false, // 是否使用极验
        sign: "", // 极验降级 用的签名
        geetestRestartCountMax: 5, // 极验重试最大此时
        count: 1,
        geetestOptions: {}
      }
    }
  },
  methods: {
    // 初始化极验
    initGeetest(options){
      if(!options || ({}).toString.call(options) !== '[object Object]'){
        console.error('initGeetest方法的参数options必须是一个对象！');
        return;
      }
      let newOptions = Object.assign({}, geetestOptions, options);
      if((newOptions.product === 'popup' || newOptions.product === 'custom' || newOptions.product === 'float') && !newOptions.area){
        console.error('product为popup、custom、float时options参数中必须有area属性，area属性值可以为css选择器或dom元素！');
        return;
      }
      this.geetest.geetestOptions = newOptions;
      this._geetestRegist_(newOptions);
    },
    // 重置极验
    geetestReset(cb){
      if(this.geetest.geetestObj){
        this.geetest.geetestSuccessData = {};
        this.geetest.geetestObj.reset();
        if(typeof cb === 'function'){
          cb();
        }
      }else{
        console.error('极验不存在!');
      }
    },
    // 显示极验弹窗，此方法只有在product为bind时才有效
    geetestShow(){
      if(this.geetest.geetestObj){
        if(this.geetest.geetestOptions.product === 'bind'){
          this.geetest.geetestObj.verify();
        }else{
          console.error('极验的product值非bind，无法调用show！');
        }
      }else{
        console.error('极验不存在!');
      }
    },
    // 初始化极验，内部使用
    _initGeetestInternal_(data, options){
      let that = this;
      let geetest = this.geetest;
     
      window.initGeetest({
        // 以下 4 个配置参数为必须，不能缺少
        gt: data.gt,
        challenge: data.challenge,
        offline: !data.success, // 表示用户后台检测极验服务器是否宕机
        new_captcha: true, // 用于宕机时表示是新验证码的宕机
        product: options.product, // 产品形式，包括：float，popup，bind
        width: options.width,
        lang: geetestLangMap[options.lang]
      }, function (captchaObj) {
				if(geetest.geetestObj){
				  try {
				    // 如果之前已经初始化过了，则线将之前生成的dom移除掉
				    geetest.geetestObj.destroy();
				  }catch (e) {
				    console.error('极验销毁失败', e);
				  }
				}
        geetest.geetestObj = captchaObj;
        if((options.product === 'popup' || options.product === 'custom' || options.product === 'float')){
          captchaObj.appendTo(options.area);
        }
        if(options.autoShow && options.product === 'bind'){
          captchaObj.onReady(() => {
            captchaObj.verify();
          });
        }
        geetest.geetestSuccessData = {};
        // 当用户操作后并且通过验证后的回调
        captchaObj.onSuccess(function () {
          let successData = captchaObj.getValidate();
          geetest.geetestSuccessData = successData;
          console.log('用户行为验证通过数据', successData);
          if (typeof options.callback === 'function') {
            options.callback(successData);
          }
        });
        captchaObj.onError(function (e) {
          console.error("极验出错了", e);
        });
        console.log('极验实例', captchaObj);
      });
    },
    // 调用接口，获取极验数据
    _geetestRegist_(options){
      this.geetest.geetestLoading = true;
      commonApi.geetestRegist()
        .then(res => {
          let data = res.data;
          // TIP 后台需要控制是否开启极验，因此需要判断 enable===true && success===1 才显示极限
          this.geetest.sign = data.sign;
          if(typeof data.enable == "undefined"){
            this.geetest.showGeetest = true;
          }
          if(data.enable === true && data.success === 1) {
            this.geetest.showGeetest = true;
          }else{
            this.geetest.showGeetest = false;
            return
          }
          this.geetest.geetestLoading = false;
          this._initGeetestInternal_(data, options);
        })
        .catch((err) => {
          console.error('极验初始化失败', err);
          if(this.geetest.count > this.geetest.geetestRestartCountMax){
            this.geetest.geetestLoading = false;
            return;
          }
          console.log('正在重试初始化极验！当前次数：' + this.geetest.count);
          this.geetest.count++;
          this._geetestRegist_(options);
        });
    }
  },
  beforeDestroy(){
    if(this.geetest.geetestObj){
      this.geetest.geetestObj.destroy();
    }
  }
};
