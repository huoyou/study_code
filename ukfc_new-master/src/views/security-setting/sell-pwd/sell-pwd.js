import ResetSellPwd from "./reset-sell-pwd/ResetSellPwd";
import {mapGetters, mapActions} from "vuex";
import {userSecurityApi} from "../../../common/api/userSecurityApi";
import {tool} from "../../../common/js/tool";

export default {
  name: "SellPwd",
  components: {
    'reset-sell-pwd': ResetSellPwd
  },
  data(){
    return {
      form: {
        "newPassword": "", // 新交易密码(修改交易密码时需要)
        "oldPassword": "", // 旧交易面(修改交易密码时需要)
        "payPassword": "", // 交易密码(设置交易密码时需要)
        "rePwd": "", // 不需要传递后台
        "validateCode": "", // 验证码
        "verifyType": "" // 验证码类型
      },
      committing: false,
      isResetSellPwd: false
    }
  },
  computed: {
    ...mapGetters(['get_userInfo'])
  },
  methods: {
    ...mapActions(['getUserInfo_action']),
    // 确定按钮点击事件
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
      if(this.get_userInfo.paymentPasswordStatus === 0){
        delete data.newPassword;
        delete data.oldPassword;
        this.setPayPassword(data);
      }else{
        delete data.payPassword;
        this.updatePayPassword(data);
      }
    },
    // 设置交易密码
    setPayPassword(data) {
      userSecurityApi.setPayPassword(data)
        .then(res => {
          this.committing = false;
          if(res.errcode === 0){
            this.$notify({
              title: this.$t('common.warmPrompt'), // 温馨提示
              message: this.$t('sellPwdPage.setSellPwdSuccessTip'), // 交易密码设置成功！
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
    // 修改交易密码
    updatePayPassword(data) {
      userSecurityApi.updatePayPassword(data)
        .then(res => {
          this.committing = false;
          if(res.errcode === 0){
            this.$notify({
              title: this.$t('common.warmPrompt'), // 温馨提示
              message: this.$t('sellPwdPage.updateSellPwdSuccessTip'), // 交易密码修改成功！
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
    onGoBack(){
      this.isResetSellPwd = false;
    }
  }
}
