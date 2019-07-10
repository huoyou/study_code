import VueCountryIntel from "../../../components/ui-components/vue-country-intl/";
import {accountApi} from "../../../common/api/account.module";


export default {
  name: "ForgetPwd",
  components: {
    'vue-country-intl': VueCountryIntel
  },
  data(){
    return {
      findPwdType: 1,
      form: {
        "countryCode": "",
        "email": "",
        "mobile": "",
        "password": "",
        "validateCode": "",
        "verifyType": "",
        "rePwd": "" // 不需要传递给后台
      },
      committing: false
    }
  },
  watch: {
    findPwdType: {
      immediate: true,
      handler(newVal){
        if(newVal === 1){
          this.form.verifyType = 'mobile';
        }else{
          this.form.verifyType = 'email';
        }
      }
    }
  },
  methods: {
    // 提交找回密码数据
    async submitFindPwd(){
      let valid = await this.$validator.validate();
      if(!valid || this.committing){
        return;
      }
      let data = {
        ...this.form
      };
      delete data.rePwd;
      if(this.findPwdType === 1){
        delete data.email;
      }else{
        delete data.mobile;
        delete data.countryCode;
      }
      this.committing = true;
      accountApi.forgetPwd(data)
        .then(res => {
          this.committing = false;
          if(res.errcode === 0){
            this.$notify.success({
              title: this.$t('common.warmPrompt'), // 温馨提示
              message: this.$t('forgetPwdPage.pwdFindedTip') // 您的密码已找回，请登录！
            });
            let timer = setTimeout(() => {
              clearTimeout(timer);
              this.$router.push('/login');
            }, 100);
          }
        })
        .catch(() => {
          this.committing = false;
        })
    },
    async getVerifyCodeCondition(){
      let valid = false;
      if(this.findPwdType === 1){
        let valid1 = await this.$validator.validate('forgetPwd_countryCode');
        let valid2 = await this.$validator.validate('common_mobile');
        valid = valid1 && valid2;
      }else{
        valid = await this.$validator.validate('common_email');
      }
      return valid;
    }
  }
}
