import {tool} from "../../../common/js/tool";
import {accountApi} from "../../../common/api/account.module";
import {geetestMixin} from "../../../mixins/geetest-mixin";
import {mapGetters} from "vuex";
import VueCountryIntl from "../../../components/ui-components/vue-country-intl/index";

export default {
  name: "Regist",
  components: {
    'vue-country-intl': VueCountryIntl
  },
  mixins: [geetestMixin],
  data() {
    return {
      checked: true, // 是否勾选用户协议
      currentStep: 1,
      registType: 1,
      form: {
        //"email": '',
        'inviteCode': '', // 5C3WUA
        'email': '',
        'mobile': '',
        'password': '',
        'username': '',
        'countryCode': '',
        'verifyType': 'email',
        'validateCode': '',
        'secondPassword': '', // 不需要传递后台
      },
      committing: false,
    };
  },
  computed: {
    ...mapGetters(['get_lang'])
  },
  watch: {
    registType: {
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
    // 跳到下一步
    async toNextStep(){
      const valid = await this.$validator.validateAll('regist_form');
      if(!valid || !this.checked){
        return;
      }
      this.currentStep = 2;
      if(!this.geetest.geetestObj && !this.geetest.geetestLoading){
        this.initGeetest({
          area: '#geetest_box',
          lang: this.get_lang.code
        });
      }
    },
    // 提交注册
    async submitRegist() {
      const valid = await this.$validator.validateAll('regist_form2');
      if(this.committing || !valid){
        return;
      }
      const data = {
        ...this.form
      };
      delete data.secondPassword;
      if(this.registType === 1){
        delete data.email;
      }else{
        delete data.mobile;
        delete data.countryCode;
      }

      this.committing = true;
      let geetestSuccessData = this.geetest.geetestSuccessData;
      let geetestData = {
        //...this.geetest.geetestSuccessData,
      	geetestChallenge: geetestSuccessData.geetest_challenge,
      	geetestValidate: geetestSuccessData.geetest_validate,
      	geetestSeccode: geetestSuccessData.geetest_seccode,
        sign: this.geetest.sign
      };
      accountApi.regist(data, geetestData)
        .then(res => {
          this.committing = false;
          if(res.errcode === 0){
            this.$notify.success(this.$t("registPage.registSuccessTip")); // 注册成功！
            this.$router.push({
              name: 'login',
            });
          }
        })
        .catch(() => {
          this.geetestReset();
          this.committing = false;
        });
    },
    // 获取验证码条件
    async getVerifyCodeCondition(){
      if(this.registType === 1){
        let countryCodeValid = await this.$validator.validate('regist_form2.regist_countryCode');
        let valid = await this.$validator.validate('regist_form2.regist_mobile');

        return countryCodeValid && valid;
      }else{
        let valid = await this.$validator.validate('regist_form2.common_email');

        return valid;
      }
    }
  },
  mounted() {
    if(window.innerWidth >= 992){
      tool.addClass(this.$refs.regist_layout, 'img-bg');
    }
  }
}
