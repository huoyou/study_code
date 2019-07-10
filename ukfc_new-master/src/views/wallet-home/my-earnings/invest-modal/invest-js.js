import {investApi} from "../../../../common/api/userAccountApi";
import {mapGetters, mapActions} from "vuex";
import {tool} from "../../../../common/js/tool";

export default {
  name: "InvestModal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    future: {
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
        "name": "",
        "payPassword": "",
        "volume": ""
      },
      committing: false
    }
  },
  computed: {
    ...mapGetters(['get_accountBalance'])
  },
  watch: {
    show(newVal){
      this.modalVisible = newVal;
    },
    future: {
      immediate: true,
      handler(newVal){
        if(newVal.name){
          this.form.name = newVal.name;
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
      investApi.invest(this.form)
        .then(res => {
          this.committing = false;
          if(res.errcode === 0){
            this.$notify({
              title: this.$t('common.warmPrompt'), // 温馨提示
              message: this.$t('investModal.reservationSuccess'), // 投资成功！
              type: 'success'
            });
            this.getAccountBalance_action();
            this.$emit('update:show', false);
            tool.clearData(this.form);
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
