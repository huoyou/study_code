import {mapGetters} from "vuex";
import {walletAddressApi} from "../../../common/api/walletAddressApi";

export default {
  name: "ChooseAddressModal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      modalVisible: this.show,
      firstOpened: false,
      form: {
        coinId: ''
      },
      loading: true,
      addressList: [], // 地址列表
      choosedAddress: this.value
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
      handler(newVal){
        if(newVal.length > 0){
          // 默认选中第一个选项
          this.form.coinId = newVal[0].id;
          this.getAddressList(this.form.coinId);
        }
      }
    },
    value(newVal){
      if(newVal !== this.choosedAddress){
        this.choosedAddress = newVal;
      }
    }
  },
  methods: {
    // 获取地址列表
    getAddressList(coinId) {
      walletAddressApi.getAddressList(coinId || this.coinId)
        .then(({data}) => {
          this.addressList = data;
          this.loading = false;
        });
    },
    // 选择地址
    chooseAddress(address, type){
      if(type === 0){
        this.choosedAddress = {};
      }else if(type === 1){
        this.choosedAddress = address;
      }
    },
    // 确定按钮点击事件
    confirmBtnClick(){
      this.$emit('update:show', false); // 关闭弹窗
      this.$emit('input', this.choosedAddress); // 赋值
      this.$emit('onchange', this.choosedAddress); // 发送自定事件
    },
    // 搜索按钮点击事件
    searchBtnClick(){
      this.getAddressList(this.form.coinId);
    },
    onModalOpen(){
      // 只在第一次打开弹窗时获取数据
      if(!this.firstOpened){
        this.firstOpened = true;
        this.getAddressList(this.form.coinId);
      }
    },
    onModalClose(){
      this.$emit('update:show', false);
    }
  }
}
