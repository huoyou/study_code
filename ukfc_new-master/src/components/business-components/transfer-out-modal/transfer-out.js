import {mapGetters, mapActions} from "vuex";
import {investApi} from "../../../common/api/userAccountApi";
import {walletAddressApi} from "../../../common/api/walletAddressApi";
import {tool} from "../../../common/js/tool";
import ChooseAddressModal from "../choose-address-modal/ChooseAddressModal";
import AddAddressModal from "../add-address-modal/AddAddressModal";

export default {
  name: "TransferOut",
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
  components: {
    'choose-address-modal': ChooseAddressModal,
    'add-address-modal': AddAddressModal
  },
  data(){
    return {
      modalVisible: this.show,
      chooseAddressModalVisible: false, // 选择地址弹窗是否显示
      addAddressModalVisible: false, // 添加地址弹窗是否显示
      modalContent: 'transferOut_form1',
      form: {
        "address": "",
        "coinId": "",
        "payPassword": "",
        "volume": "",
        "remark": "",
        "validateCode": "",
        "verifyType": ""
      },
      addressList: [], // 地址列表
      choosedAddress: {}, // 选择的地址
      addressForm: {}, // 需要添加到地址薄中的数据
      committing: false
    }
  },
  computed: {
    ...mapGetters(['get_coinList', 'get_accountBalance', 'get_userInfo']),
    // 判断输入的地址是否在地址列表中
    addressInList(){
      let addressList = this.addressList;
      let address = this.form.address;
      if(addressList.length === 0){
        return false;
      }
      for(let i = 0, len = addressList.length; i < len; i++){
        if(addressList[i].address === address){
          return true;
        }
      }
      return false;
    },
    // 提现配置
    withdrawConfig(){
      if(this.get_userInfo && this.get_userInfo.withdrawConfig){
        return this.get_userInfo.withdrawConfig;
      }else{
        return {};
      }
    },
    // 计算手续费
    fee(){
      let fee = 0;
      let volume = this.form.volume;
      if(isNaN(Number(volume))){
        return '--';
      }
      fee = this.$bigMath.eval(`${volume || 0} * ${this.withdrawConfig.withdrawFeeRate || 0}`).valueOf();
      return fee;
    },
    // 计算实际可得
    actualGetted(){
      let volume = this.form.volume;
      if(isNaN(Number(volume))){
        return '--';
      }
      let res = this.$bigMath.eval(`${volume || 0} - ${this.fee}`).valueOf();
      return res;
    }
  },
  watch: {
    show(newVal){
      this.modalVisible = newVal;
    },
    get_coinList: {
      immediate: true,
      handler(newVal){
        if(newVal.length > 0){
          this.form.coinId = newVal[0].id;
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
    ...mapActions(['getUserInfo_action', 'getAccountBalance_action']),
    toNext(){
      // allowWithdraw为0则不允许转账
      if(this.withdrawConfig.allowWithdraw === 0){
        return;
      }
      this.$validator.validateAll('transferOut_form1')
        .then(valid => {
          if(valid){
            this.modalContent = 'security_check';
          }
        });
    },
    // 确定转出
    confirmTransferOut(){
      if(this.committing || this.withdrawConfig.allowWithdraw === 0){
        return;
      }
      this.$validator.validateAll('transferOut_form2')
        .then(valid => {
          if(valid){
            this.committing = true;
            this.getAddressList(this.form.coinId);
            investApi.transferOut(this.form)
              .then(res => {
                this.committing = false;
                if(res.errcode === 0){
                  this.modalContent = 'transferOut_success';
                  // 转出完成后立即重新获取用户数据，有可能转出后就不然再转了
                  this.getUserInfo_action();
                  // 转出完成后获取用户账户余额
                  this.getAccountBalance_action();
                  this.$emit('transferOutSuccess');
                  if(!this.addressInList){
                    this.addressForm.address = this.form.address;
                    this.addressForm.coinId = this.form.coinId;
                  }
                }
              })
              .catch(() => {
                this.committing = false;
              });
          }
        });
    },
    // 获取地址列表
    getAddressList(coinId) {
      walletAddressApi.getAddressList(coinId || this.coinId)
        .then(({data}) => {
          this.addressList = data;
        });
    },
    // 格式化转出数量
    formatVolume(volume){
      if(!volume || isNaN(Number(volume))){
        return volume;
      }
      let res = this.$bigMath.eval(`${volume} / ${this.withdrawConfig.scale}`).valueOf();
      res = this.$bigMath.eval(`${Math.floor(res)} * ${this.withdrawConfig.scale}`).valueOf();
      return Number(res);
    },
    // 全部转出
    allTransferOut(){
      if(this.get_accountBalance.balance < this.withdrawConfig.minVolume){
        return;
      }
      let volume = this.formatVolume(this.get_accountBalance.balance);
      this.form.volume = volume;
      //let fee = this.fee;
    },
    // 选择的地址change事件
    onChoosedAddressChange(address){
      this.form.address = address.address;
    },
    // 转出数量输入框change事件
    volumeInputChange(){
      this.form.volume = this.formatVolume(this.form.volume);
    },
    // 转入地址弹窗内容关闭前回调
    transferModalBeforeClose(com){
      com.closeModal();
      return false;
    },
    // 知道了 按钮点击事件
    closeModalBtnClick(){
      this.$refs.transferOutSuccess_content.closeModal();
    },
    // 弹窗关闭事件
    onModalClosed(){
      this.$emit('update:show', false);
      this.modalContent = 'transferOut_form1';
      // 重置数据
      tool.clearData(this.form, {
        coinId: this.form.coinId
      });
      tool.clearData(this.addressForm);
      this.choosedAddress = {};
    }
  }
}
