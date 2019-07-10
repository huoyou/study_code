import {walletRecordsApi} from "../../common/api/walletRecords.page";
import {tool} from "../../common/js/tool";
import {zhCN} from "../../common/lang/dict-i18n/zh";
import {mapGetters} from "vuex";

export default {
  name: "InvestManagement",
  data(){
    let that = this;
    return {
      zhCN,
      // 投资记录
      investTableData: [],
      investLoading: false,
      investPagination: {
        current: 1,
        size: 10,
        total: 0,
        pages: 0,
        onCurrentChange(page) {
          that.queryInvestRecord();
        },
      },
      investForm: {
        name: '',
        startDate: '',
        endDate: '',
      },
    };
  },
  computed: {
    ...mapGetters(['get_futuresList'])
  },
  methods: {
    // 投资记录：拉取列表
    async queryInvestRecord() {
      try {
        this.investLoading = true;                                                            // 加载框
        let investPagination = this.investPagination;
        const {data} = await walletRecordsApi.investRecords({                                 // 接口
          ...this.investForm,
          startDate: tool.formatDate_fromVueDateTime(this.investForm.startDate),
          endDate: tool.formatDate_fromVueDateTime(this.investForm.endDate),
          current: investPagination.current,
          size: investPagination.size,
        });
        this.investTableData = data.records;
        investPagination.pages = data.pages;
        investPagination.total = data.total;
      } finally {
        this.investLoading = false;
      }
    },
  },
  mounted() {
    this.queryInvestRecord();
  }
}
