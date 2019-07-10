import {walletRecordsApi} from "../../../common/api/walletRecords.page";
import {mapGetters} from "vuex";
//import {tool} from "../../../common/js/tool";
import {zhCN} from "../../../common/lang/dict-i18n/zh";

export default {
  name: "WalletRecords",
  data() {
    const that = this;

    return {
      zhCN: zhCN,

      activeCard: this.$route.params['tab'] || 'recharge', // 路由无值情况下，默认充值记录页
      choosedCoin: '',
      value1: '',
      // 充值记录
      rechargeTableData: [],
      rechargeLoading: false,
      rechargePagination: {
        current: 1,
        size: 10,
        total: 0,
        pages: 0,
        onCurrentChange(page) {
          that.queryRechargeRecord();
        },
      },
      rechargeForm: {
        coinId: '',
        txid: '',
      },
      // 提现记录
      withdrawTableData: [],
      withdrawLoading: false,
      withdrawPagination: {
        current: 1,
        size: 10,
        total: 0,
        pages: 0,
        onCurrentChange(page) {
          that.queryWithdrawRecord();
        },
      },
      withdrawForm: {
        coinId: '',
        txid: '',
      },
      /*// 兑换记录
      coin2coin_TableData: [],
      coin2coin_Loading: false,
      coin2coin_Pagination: {
        current: 1,
        size: 10,
        total: 0,
        onCurrentChange(page) {
          that.queryCoin2Coin_Record();
        },
      },
      coin2coin_Form: {
        beginDate: '',
        endDate: '',
        //
        baseCoinId: '',
        exchangeCoinId: '',
      },*/
      // 投资记录
      /*investTableData: [],
      investLoading: false,
      investPagination: {
        current: 1,
        size: 10,
        total: 0,
        onCurrentChange(page) {
          that.queryInvestRecord();
        },
      },
      investForm: {
        vipCode: '',
        compoundInterest: '',
        //
        startDate: '',
        endDate: '',
      },*/


    }
  },
  watch: {
    activeCard: {                                                   // 当切换选项卡时
      immediate: true,
      handler(newVal) {
        /*this.$router.replace({                                      // 选项卡切换，路由params也变
          params: {tab: newVal,}
        });*/
        switch (newVal) {
          case'recharge': {
            this.rechargeTableData.length === 0 && this.queryRechargeRecord();
            break;
          }
          case'withdraw': {
            this.withdrawTableData.length === 0 && this.queryWithdrawRecord();
            break;
          }
          /*    case'coin2coin': {
                this.coin2coin_TableData.length === 0 && this.queryCoin2Coin_Record();
                break;
              }*/
          /*case'invest': {
            this.investTableData.length === 0 && this.queryInvestRecord();
            break;
          }*/
          default: {
            console.error('未命中任何一种情况');
            break;
          }
        }
      }
    },
  },
  computed: {
    ...mapGetters(['get_coinList', 'get_userVipList']),
  },
  methods: {
    // 充值记录：拉取列表
    async queryRechargeRecord() {
      try {
        this.rechargeLoading = true;                                                          // 加载框
        let rechargePagination = this.rechargePagination;
        const {data} = await walletRecordsApi.rechargeRecords({                               // 接口
          ...this.rechargeForm,
          current: rechargePagination.current,
          size: rechargePagination.size,
        });
        this.rechargeTableData = data.records;
        rechargePagination.pages = data.pages;
        rechargePagination.total = data.total;
      } finally {
        this.rechargeLoading = false;
      }
    },
    // 提现记录：拉取列表
    async queryWithdrawRecord() {
      try {
        this.withdrawLoading = true;                                                          // 加载框
        let withdrawPagination = this.withdrawPagination;
        const {data} = await walletRecordsApi.withdrawRecords({                               // 接口
          ...this.withdrawForm,
          current: this.withdrawPagination.current,
          size: this.withdrawPagination.size,
        });
        this.withdrawTableData = data.records;
        withdrawPagination.pages = data.pages;
        withdrawPagination.total = data.total;
      } finally {
        this.withdrawLoading = false;
      }
    },
    /* // 兑换记录：拉取列表
     async queryCoin2Coin_Record() {
       try {
         this.coin2coin_Loading = true;                                                        // 加载框
         const {data} = await walletRecordsApi.coin2coin_Records({                             // 接口
           ...this.coin2coin_Form,
           beginDate: tool.formatDate_fromVueDateTime(this.coin2coin_Form.beginDate),
           endDate: tool.formatDate_fromVueDateTime(this.coin2coin_Form.endDate),
           current: this.coin2coin_Pagination.current,
           size: this.coin2coin_Pagination.size,
         });
         this.coin2coin_TableData = data.records;
       } finally {
         this.coin2coin_Loading = false;
       }
     },*/
    // 投资记录：拉取列表
    /*async queryInvestRecord() {
      try {
        this.investLoading = true;                                                            // 加载框
        const {data} = await walletRecordsApi.investRecords({                                 // 接口
          ...this.investForm,
          startDate: tool.formatDate_fromVueDateTime(this.investForm.startDate),
          endDate: tool.formatDate_fromVueDateTime(this.investForm.endDate),
          current: this.investPagination.current,
          size: this.investPagination.size,
        });
        this.investTableData = data.records;
      } finally {
        this.investLoading = false;
      }
    },*/
  },
}
