/*import {userApi} from "../../../common/api/userAccountApi";*/
import {mapGetters, mapActions} from "vuex";
import {tool} from "../../../common/js/tool";
import Transfer from "../../../components/business-components/transfer-modal/Transfer.vue";
import TransferOut from "../../../components/business-components/transfer-out-modal/TransferOut";
import Reservation from "./reservation-modal/ReservationModal";
//import Exchange from "./exchange-modal/Exchange";
//import InvestModal from "../../../components/business-components/invest-modal/InvestModal";

export default {
  name: "AccountBalance",
  components: {
    'transfer': Transfer,
    'transfer-out': TransferOut,
    'reservation': Reservation
    /*'exchange': Exchange,*/
    //'invest-modal': InvestModal
  },
  data(){
    return {
      transferModalVisible: false, // 控制转入弹窗是否显示
      transferOutModalVisible: false, // 控制转出弹窗是否显示
      exchangeModalVisible: false, // 币种兑换弹窗是否显示
      investModalVisible: false, // 投资弹窗是否显示
      reservationModalVisible: false, // 预约弹窗是否显示
      choosedCurrencyId: '', // 用户选择的法币id
      //choosedAccountId: '', // 用户选择的资产id
      //choosedAccount: {}, // 用户选择的资产
      accountBalance: null // 用户账户资产列表
    }
  },
  methods: {
    ...mapActions(['getAccountBalance_action']),
    // 获取用户账户资产
    /*async getAccountBalance(){
      let res = await userApi.getAccountBalance();
      if(res && res.data){
        let data = res.data;
        this.accountBalance = data;
        console.log('res',res)
      }
    },*/
    /*getAccountById(accountId){
      let choosedAccountId = this.choosedAccountId;
      let index = tool.getIndex(this.accountBalance, item => {
        return item.id ==
      })
    }*/
		onTransferBtnClick(){
			this.$notify.warning({
				title: this.$t('common.warmPrompt'), // 温馨提示
				message: this.$t('accountBalancePage.notOpen') // 暂未开放
			})
		}
  },
  computed: {
    ...mapGetters(['get_currencyList', 'get_accountBalance']),
    // 获取用户选择的法币
    choosedCurrency(){
      let choosedCurrencyId = this.choosedCurrencyId;
      if(!choosedCurrencyId){
        return {};
      }
      let index = tool.getIndex(this.get_currencyList, item => {
        return item.id === choosedCurrencyId;
      });
      if(index > -1){
        return this.get_currencyList[index];
      }else{
        return {};
      }
    },
    // usdt折算成法币
    usdtConvertToCurrency(){
      let accountBalance = this.accountBalance;
      let choosedCurrency = this.choosedCurrency;
      if(!accountBalance || !choosedCurrency.id){
        return 0;
      }
      /*
        usdt转换成法币：usdt * 法币.rate
       */
      return this.$bigMath.eval(`${accountBalance.balance || 0} * ${choosedCurrency.rate}`).valueOf();
    }
    // 用户选择的资产
    /*choosedAccount(){
      let choosedAccountId = this.choosedAccountId;
      if(!choosedAccountId){
        return {};
      }
      let index = tool.getIndex(this.accountBalance, item => {
        return item.id === choosedAccountId;
      });
      if(index > -1){
        return this.accountBalance[index];
      }else{
        return {};
      }
    }*/
  },
  watch: {
    get_currencyList: {
      immediate: true,
      handler(newVal){
        if(!this.choosedCurrencyId){
          this.choosedCurrencyId = newVal[0].id;
        }
      }
    },
    get_accountBalance: {
      immediate: true,
      handler(newVal){
        this.accountBalance = Object.assign({}, newVal);
      }
    }
  }
}
