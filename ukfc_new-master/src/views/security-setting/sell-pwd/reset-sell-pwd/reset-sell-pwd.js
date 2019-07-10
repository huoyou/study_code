import {userSecurityApi} from "../../../../common/api/userSecurityApi";
import {tool} from "../../../../common/js/tool";
import {mapActions} from "vuex";

export default {
  name: "ResetSellPwd",
  data(){
    return {
      form: {
        "password": "",
        "validateCode": "",
        "verifyType": "",
        "rePwd": "" // 不需要传递后台
      },
      committing: false
    }
  },
  methods: {
    ...mapActions(['getUserInfo_action']),
    // 确定提交数据
    async confirmSubmit(){
      let valid = await this.$validator.validate();
      if(!valid || this.committing){
        return;
      }
      this.committing = true;
      let data = {
        ...this.form
      };
      delete data.rePwd;
      userSecurityApi.resetPayPassword(data)
        .then(res => {
          this.committing = false;
          if(res.errcode === 0){
            this.$notify({
              title: this.$t('common.warmPrompt'), // 温馨提示
              message: this.$t('sellPwdPage.resetSellPwdSuccessTip'), // 交易密码设置成功！
              type: 'success'
            });
            tool.clearData(this.form);
            this.$validator.reset();
            this.getUserInfo_action();
          }
        })
        .catch(() => {
          this.committing = false;
        });
    },
    goBack(){
      this.$emit('goBack');
    }
  }
}
