import {mapGetters} from "vuex";
import {commonApi} from "../../../common/api/commonApi";
import {geetestMixin} from "../../../mixins/geetest-mixin";

export default {
  name: "VerifyBtn",
  mixins: [geetestMixin],
  props: {
    type: { // 发送验证码方式，有email(邮箱)、mobile(手机)、gaCode(谷歌验证码)
      type: String,
      default: ''
    },
    userInsideValue: { // 是否使用内部的手机或邮箱，如果该值为true，则可以不需要传递value属性
      type: Boolean,
      default: false
    },
    time: { // 倒计时时间，以秒为单位
      type: Number,
      default: 60
    },
    text: { // 按钮文字
      type: String,
      default: ""
    },
    onStopedText: { // 倒计时结束后的按钮文字
      type: String,
      default: ""
    },
    disabled: { // 按钮是否禁用
      type: Boolean,
      default: false
    },
    templateCode: { // 短信/邮箱模板
      type: String,
      default: 'DYNAMIC_VERIFY_CODE'
    },
    value: { // 手机号或邮箱号
      type: [String, Number],
      default: ""
    },
    countryCode: { // 国际区号，只有当type = phone时有效
      type: String,
      default: ''
    },
    condition: { // 执行条件，函数返回true才会发送验证码，否则不会发送
      type: Function,
      default(){
        return function (){return true;};
      }
    },
    useGeetest: {
      type: Boolean, // 是否需要极验
      default: true
    }
  },
  data(){
    return {
      // 是否是第一次执行
      isFirstStart: true,
      // 倒计时是否开始了
      started: false,
      // 倒计时是否结束了
      stoped: false,
      disable: this.disabled,
      // 倒计时时间
      countTime: parseInt(this.time),
      btnLoading: false,
      timer: null,
      committing: false
    }
  },
  computed: {
    ...mapGetters(['get_userInfo', 'get_lang']),
    btnText(){
      if(this.type === 'gaCode'){
        return '--------';
      };
      if(this.isFirstStart){
        if(this.text){
          return this.text;
        }else{
          return this.$t('common.sendVerifyCode'); // 发送验证码
        }
      }
      if(this.started){
        return this.$t('common.timeRemaining').replace(/{(\w+)}/, this.countTime); // {time}秒后重发
      }
      if(this.stoped){
        if(this.onStopedText){
          return this.onStopedText;
        }else{
          return this.$t('common.reSend'); // 重新发送
        }
      }else{
        return this.$t('common.sendVerifyCode'); // 发送验证码
      }
    }
  },
  methods: {
    // 按钮点击事件
    async verifyBtnClick(){
      if(this.started || this.disabled || this.type === 'gaCode' || this.committing){
        return;
      }
      let valid = await this.condition();
      if(valid === false){
        return;
      }
      let userInfo = this.get_userInfo;
      if(this.userInsideValue){
        if(!userInfo.emailStatus && !userInfo.gaStatus && (!userInfo.mobileStatus)){
          this.$notify({
            title: this.$t('common.warmPrompt'), // 温馨提示
            message: this.$t('changeVerifyTypeCom.notBindAny'), // 您未绑定任何验证方式，无法发送验证码
            type: 'warning'
          });
          return;
        }
      }
      if(!this.type){
        console.error('没有传递type属性');
        return;
      }
      if(!this.userInsideValue && !this.value){
        console.error('没有传递value属性');
        return;
      }
      if(this.type === 'mobile' && !this.countryCode && !this.userInsideValue){
        console.error('没有传递countryCode属性');
        return;
      }
      let data = {
        templateCode: this.templateCode
      };
      if(this.type === 'mobile'){
        if(this.userInsideValue){
          data.phone = this.get_userInfo.mobile;
          let countryCode = this.get_userInfo.countryCode;
          if(countryCode.charAt(0) !== '+'){
            countryCode = '+' + countryCode;
          }
          data.countryCode = countryCode;
        }else{
          let countryCode = this.countryCode;
          if(countryCode.charAt(0) !== '+'){
            countryCode = '+' + countryCode;
          }
          data.phone = this.value;
          data.countryCode = countryCode;
        }
      }else if(this.type === 'email'){
        if(this.userInsideValue){
          data.email = this.get_userInfo.email;
        }else{
          data.email = this.value;
        }
      }
      if(this.useGeetest){
        if(!this.geetest.geetestObj){
          this.initGeetest({
            product: 'bind',
            lang: this.get_lang.code,
            callback: (successData) => {
              this.committing = true;
   
							//let geetestSuccessData = this.geetest.geetestSuccessData;
							let geetestData = {
							  //...this.geetest.geetestSuccessData,
								geetestChallenge: successData.geetest_challenge,
								geetestValidate: successData.geetest_validate,
								geetestSeccode: successData.geetest_seccode,
							  sign: this.geetest.sign
							};
              this.sendMsg(data, geetestData);
            }
          });
        }else{
          this.geetestShow();
        }
      }else{
        this.committing = true;
        this.sendMsg(data);
      }
    },
    sendMsg(data, geetestData){
      commonApi.sendSMS(data, geetestData)
        .then(() => {
          this.committing = false;
          this.isFirstStart = false;
          this.started = true;
          this.disable = true;
          this.stoped = false;

          this.$notify({
            title: this.$t('common.warmPrompt'), // 温馨提示
            message: this.$t('common.verifySendSuccess'), // 发送验证码成功
            type: 'success'
          });

          this.$emit("onstart", this.countTime);
          this.timer = setInterval(() => {
            if(this.countTime - 1 < 0){
              clearInterval(this.timer);
              this.started = false;
              this.stoped = true;
              this.disable = false;
              this.countTime = parseInt(this.time);
              this.$emit("onstop", this.countTime);
              return;
            }
            this.countTime--;
            this.$emit("onprogress", this.countTime);
          }, 1000);
        })
        .catch(() => {
          this.committing = false;
        });
    }
  }
}
