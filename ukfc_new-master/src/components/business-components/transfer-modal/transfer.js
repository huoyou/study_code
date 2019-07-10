import {mapGetters} from 'vuex';
import {investApi} from "../../../common/api/userAccountApi";
import VueQrcode from '@chenfengyuan/vue-qrcode';

export default {
  name: "Transfer",
  components: {
    [VueQrcode.name]: VueQrcode
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    coinName: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      modalVisible: this.show,
      modalContent: 'transfer_address',
      choosedCoin: {
        name: this.coinName
      },
      addressData: {},
      opened: false,
      loading: true
    };
  },
  computed: {
    ...mapGetters(['get_coinList'])
  },
  watch: {
    show(newVal){
      this.modalVisible = newVal;
    },
    coinName(newVal){
      this.choosedCoin.name = newVal;
    },
    get_coinList: {
      immediate: true,
      handler(newVal){
        if(!this.coinName && newVal[0]){
          this.choosedCoin.name = newVal[0].name;
        }
      }
    }
  },
  methods: {
    // 获取充值地址
    getTransferInAddress(coinName){
      investApi.getTransferInAddress(coinName)
        .then(({data}) => {
          this.addressData = data;
          this.loading = false;
        });
    },
    // 币种点击事件
    coinItemClick(item){
      if(this.choosedCoin !== item){
        this.choosedCoin = item;
      }
      this.modalContent = 'transfer_address';
    },
    // 转入地址弹窗内容关闭前回调
    transferModalBeforeClose(com){
      com.closeModal();
      return false;
    },
    // 复制成功回调
    copySuccess(){
      this.$notify({
        title: this. $t('common.warmPrompt'), // 温馨提示
        message: this.$t('transferModal.addressCopySuccess'), // 转账地址已复制！
        type: 'success'
      });
    },
    // 弹窗打开事件
    onModalOpen(){
      if(!this.opened){
        this.opened = true;
        this.getTransferInAddress(this.choosedCoin.name);
      }
    },
    // 弹窗关闭事件
    onModalClosed(){
      this.$emit('update:show', false);
    }
  }
}
