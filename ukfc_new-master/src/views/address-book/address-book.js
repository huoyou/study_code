import {mapGetters} from "vuex";
import {walletAddressApi} from "../../common/api/walletAddressApi";
import {globalRules} from "../../common/validator/regexRules";
import TransferOutModal from "../../components/business-components/transfer-out-modal/TransferOut";
import AddAddressModal from "../../components/business-components/add-address-modal/AddAddressModal";
import UpdateAddressModal from "./update-address-modal/UpdateAddressModal";

export default {
  name: "AddressBook",
  components: {
    'transfer-out': TransferOutModal,
    'add-address-modal': AddAddressModal,
    'update-address-modal': UpdateAddressModal
  },
  data(){
    return {
      coinId: '',
      transferOutModalVisible: false, // 控制转出弹窗显示
      addAddressModalVisible: false, // 控制添加地址弹性显示
      updateAddressModalVisible: false, // 控制修改地址弹性显示
      addressList: [],
      pageData: {
        current: 1,
        size: 10,
        total: 0,
        pages: 1
      },
      loading: true,
      updateAddressForm: {} // 修改地址数据
    };
  },
  computed: {
    ...mapGetters(['get_coinList'])
  },
  watch: {
    get_coinList: {
      immediate: true,
      handler(coinList){
        if(coinList.length > 0){
          let coinId = coinList[0].id;
          this.coinId = coinId;
          this.getAddressList(coinId);
        }
      }
    }
  },
  methods: {
    // 获取地址列表
    getAddressList(coinId) {
      //let pageData = this.pageData;
      walletAddressApi.getAddressList(coinId || this.coinId)
        .then(({data}) => {
          this.addressList = data;
          this.loading = false;
        });
    },
    // 修改按钮点击事件
    updateBtnClick(address){
      this.updateAddressModalVisible = true;
      this.updateAddressForm = address;
    },
    // 删除按钮事件
    delBtnClick(address){
      let committing = false;
      let that = this;
      //this.$prompt('地址删除后不可恢复，您确定要删除?', '温馨提示', {
      this.$prompt(this.$t('addressBookPage.delAddressTip'), this.$t('common.warmPrompt'), {
        confirmButtonText: this.$t('common.confirm'), // 确定
        cancelButtonText: this.$t('common.cancel'), // 取消
        showInput: true,
        inputPlaceholder: this.$t('placeholder.sellPwd'), // 请输入交易密码
        inputType: 'password',
        inputPattern: globalRules.pwd,
        inputErrorMessage: this.$t('addressBookPage.sellPWdErrorTip'), // 交易密码输入不正确
        beforeClose(action, instance, done){
          //console.log(action, instance, done)
          if(committing){
            return;
          }
          if(action === 'cancel' || action === 'close'){
            done();
            return;
          }
          let data = {
            id: address.id,
            payPassword: instance.inputValue
          };
          committing = true;
          walletAddressApi.deleteAddress(data)
            .then(res => {
              committing = false;
              if(res.errcode === 0){
                done();
                this.$notify({
                  title: this.$t('common.warmPrompt'), // 温馨提示
                  message: this.$t('addressBookPage.delAddressSuccess'), // 地址删除成功！
                  type: 'success'
                });
                that.getAddressList(that.coinId);
              }
            })
            .catch(() => {
              committing = false;
            })
        }
      });
    },
    // 查询按钮点击事件
    searchBtnClick(){
      this.getAddressList(this.coinId);
    },
    // 添加地址成功回调事件
    onAddressAddSuccess(){
      this.getAddressList(this.coinId);
    },
    // 修改地址成功回调事件
    onAddressUpdateSuccess(){
      this.getAddressList(this.coinId);
    },
    // 分页按钮点击事件
    onCurrentChange(){

    }
  }
}
