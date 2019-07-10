import {investApi} from "../../../../common/api/userAccountApi";
import {mapGetters, mapActions} from "vuex";
import {tool} from "../../../../common/js/tool";

export default {
  name: "ReservationModal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    coin: {
      type: Object,
      default(){
        return {};
      }
    }
  },
  data(){
    return {
      modalVisible: this.show,
      form: {
        "coinName": '', // 币种名称（不需要传递后台）
        "coinId": "", // 币种ID
        "paymentPassword": "", // 交易密码
        "validateCode": "", // 短信验证码
        "verifyType": "", // 验证码类型
        "volume": "" // 预约数量(金额)
      },
      committing: false
    }
  },
  computed: {
    ...mapGetters(['get_accountBalance', 'get_coinList'])
  },
  watch: {
    show(newVal){
      this.modalVisible = newVal;
    },
    coin: {
      immediate: true,
      handler(newVal){
        if(newVal.id){
          this.form.coinId = newVal.id;
          this.form.coinName = newVal.name;
        }
      }
    },
    get_coinList: {
      immediate: true,
      handler(newVal){
        if(newVal.length > 0 && !this.coin.id){
          let coin = newVal[0];
          this.form.coinId = coin.id;
          this.form.coinName = coin.name;
        }
      }
    }
  },
  methods: {
    ...mapActions(['getAccountBalance_action']),
    // 提交预约数据
    async confirmReservation(){
      let valid = await this.$validator.validate();
      if(!valid || this.committing){
        return;
      }
      this.committing = true;
      let data = {
        ...this.form
      };
      delete data.coinName;
      investApi.accountReservation(data)
        .then(res => {
          this.committing = false;
          if(res.errcode === 0){
            this.$notify({
              title: this.$t('common.warmPrompt'), // 温馨提示
              message: this.$t('accountReservationModal.reservationSuccess'), // 预约成功！
              type: 'success'
            });
            this.getAccountBalance_action();
            this.$emit('update:show', false);
            tool.clearData(this.form, {
              coinId: this.form.coinId,
              coinName: this.form.coinName
            });
            this.$nextTick(() => {
              this.$validator.reset();
            });
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
