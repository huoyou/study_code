import {userSecurityApi} from "../../../common/api/userSecurityApi";
//import {tool} from "../../../common/js/tool";
import {logout} from "../../../router/accountUnit";

export default {
  name: "UpdatePwdModal",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      modalVisible: this.show,
      form: {
        "newPassword": "",
        "oldPassword": "",
        "validateCode": "",
        "rePwd": "",
        "verifyType": ""
      },
      committing: false
    }
  },
  watch: {
    show(newVal){
      this.modalVisible = newVal;
    }
  },
  methods: {
    // 确定提交数据
    async confirmSubmit(){
      let valid = await this.$validator.validate();
      if(!valid || this.committing){
        return;
      }
      let data = {
        ...this.form
      };
      this.committing = true;
      userSecurityApi.updateLoginPwd(data)
        .then(res => {
          this.committing = false;
          if(res.errcode === 0){
            this.$emit('update:show', false);
            this.$notify({
              title: this.$t('common.warmPrompt'), // 温馨提示
              message: this.$t('updatePwdModal.updatePwdSuccess'), // '登录密码修改成功！'
              type: 'success'
            });
            let timer = setTimeout(() => {
              clearTimeout(timer);
              logout(() => {
                this.$router.push('/login');
              });
            }, 1000);
          }
        })
        .catch(() => {
          this.committing = false;
        });
    },
    // 弹窗关闭事件
    onModalClosed(){
      this.$emit('update:show', false);
    }
  }
}
