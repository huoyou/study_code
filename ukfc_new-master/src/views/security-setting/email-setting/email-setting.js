import {userSecurityApi} from "../../../common/api/userSecurityApi";
import {mapActions} from "vuex";

export default {
  name: "EmailSetting",
  data(){
    return {
      form: {
        "email": "",
        "validateCode": "",
        //"validateCode2": "",
        "verifyType": "email"
      },
      committing: false
    }
  },
  methods: {
    ...mapActions(['getUserInfo_action']),
    // 提交绑定邮箱数据
    async confirmSubmit() {
      let valid = await this.$validator.validateAll('bindEmailForm');
      if(!valid || this.committing){
        return;
      }
      this.committing = true;

      userSecurityApi.bindEmail(this.form)
        .then(res => {
          if(res.errcode === 0){
            this.$notify({
              title: this.$t('common.warmPrompt'), // 温馨提示
              message: this.$t('setEamilPage.emailBindSuccessTip'), // 邮箱绑定成功！
              type: 'success'
            });
            this.getUserInfo_action();
          }
          this.committing = false;
        })
        .catch(() => {
          this.committing = false;
        });
    },
    // 发送邮箱验证码条件
    async sendEmailVerifyCodeCondition(){
      let valid = await this.$validator.validate('bindEmailForm.bindEmailForm_email');
      return valid;
    }
  }
}
