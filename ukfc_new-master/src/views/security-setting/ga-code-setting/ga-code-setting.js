import VueQrcode from '@chenfengyuan/vue-qrcode';
import {gaAuthenticApi} from "../../../common/api/gaAuthenticApi";
import {mapActions} from "vuex";

export default {
  name: "GaCodeSetting",
  components: {
    [VueQrcode.name]: VueQrcode
  },
  data(){
    return {
      currentStep: 1,
      radio: '',
      gaGenerateData: { // ga秘钥数据
        "secret_key": "",
        "otpAuthTotpURL": "",
        "label": ""
      },
      gaCode: '',
      generateDataLoaded: false,
      committing: false
    }
  },
  methods: {
    ...mapActions(['getUserInfo_action']),
    // 获取ga秘钥数据
    getGaGenerateData(){
      gaAuthenticApi.generateGaSecurityKey()
        .then(({data}) => {
          this.gaGenerateData = data;
          this.generateDataLoaded = true;
        });
    },
    // 完成绑定提交数据
    async confirmBind(){
      let valid = await this.$validator.validate();
      if(!valid || this.committing){
        return;
      }
      this.committing = true;
      gaAuthenticApi.bindGaAuthentic({
        code: this.gaCode,
        secret: this.gaGenerateData.secret_key
      })
        .then(res => {
          this.committing = false;
          if(res.errcode === 0){
            this.currentStep = 4;
            let timer = setTimeout(() => {
              clearTimeout(timer);
              this.getUserInfo_action();
            }, 1500);
          }
          console.log('res',res);
        })
        .catch(() => {
          this.committing = false;
        });
    },
    // 前往第2步
    toStep2(){
      if(!this.generateDataLoaded){
        this.getGaGenerateData();
      }
      this.currentStep = 2;
    },
    // 复制成功提示
    copySuccess(){
      this.$notify({
        title: this.$t('common.warmPrompt'), // 温馨提示
        message: this.$t('setGaCodePage.secretKeyCopySuccessTip'), // 秘钥已复制！
        type: 'success'
      });
    }
  }
}
