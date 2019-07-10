import {userApi} from "../../../common/api/userAccountApi";
import {mapGetters} from "vuex";
import {tool} from "../../../common/js/tool";
import InvestRecords from "../wallet-records/WalletRecords";
import Incomes from "../incomes/Incomes";

export default {
  name: "MyWallet",
  components: {
    'invest-records': InvestRecords,
    'incomes': Incomes
  },
  data(){
    return {
      choosedCurrencyId: '', // 用户选择的法币id
      accountBalance: null // 用户账户资产列表
    };
  },
  methods: {
    // 获取用户账户资产
    async getAccountBalance(){
      let res = await userApi.getAccountBalance();
      if(res && res.data){
        let data = res.data;
        this.accountBalance = data;
        console.log('res',res)
      }
    },
  },
  computed: {
    ...mapGetters(['get_currencyList']),
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
      return this.$bigMath.eval(`${accountBalance.balance} * ${choosedCurrency.rate}`).valueOf();
    }
  },
  watch: {
    get_currencyList: {
      immediate: true,
      handler(newVal){
        if(!this.choosedCurrencyId){
          let index = tool.getIndex(newVal, item => {
            return item.name === 'USD';
          });
          if(index > -1){
            this.choosedCurrencyId = newVal[index].id;
          }else{
            this.choosedCurrencyId = newVal[0].id;
          }
        }
      }
    }
  },
  created(){
    this.getAccountBalance();
  }
}
