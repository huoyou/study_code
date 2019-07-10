import {mapGetters} from "vuex";
import {walletAddressApi} from "../../../common/api/walletAddressApi";
import {tool} from "../../../common/js/tool";

export default {
  name: "AddAddressModal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    externalData: { // 传递过来的值，改对象的属性与下面form的属性一至
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
        "address": "",
        "coinId": "",
        "name": "",
        "remark": "",
        "payPassword": ""
      },
      committing: false
    }
  },
  computed: {
    ...mapGetters(['get_coinList'])
  },
  watch: {
    show(newVal){
      this.modalVisible = newVal;
    },
    get_coinList: {
      immediate: true,
      handler(coinList){
        if(coinList.length > 0){
          this.form.coinId = coinList[0].id;
        }
      }
    },
    externalData: {
      immediate: true,
      deep: true,
      handler(newVal){
        let form = this.form;
        for(let attr in newVal){
          if(attr in form){
            form[attr] = newVal[attr];
          }
        }
      }
    }
  },
  methods: {
    // 确定提交数据
    async confirmAdd(){
      let valid = await this.$validator.validate();
      if(!valid || this.committing){
        return;
      }
      this.committing = true;
      walletAddressApi.addAddress(this.form)
        .then(res => {
          if(res.errcode === 0){
            this.$emit('update:show', false);
            this.$notify({
              title: this.$t('common.warmPrompt'), // 温馨提示
              message: this.$t('addAddressModal.addressAddSuccess'), // 地址添加成功！
              type: 'success'
            });
            tool.clearData(this.form, {
              coinId: this.form.coinId
            });
            this.$emit('addressAddSuccess');
          }
          this.committing = false;
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
