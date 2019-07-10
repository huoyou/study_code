import {rewardRecordApi} from "../../../common/api/rewardRecordApi";
import {mapGetters} from "vuex";
import {tool} from "../../../common/js/tool";

export default {
  name: "Incomes",
  data() {
    const that = this;

    return {
      activeCard: 'staticIncome', // 路由无值情况下，默认投资收益明细页
      choosedCoin: '',
      value1: '',
      // 投资（静态）收益明细
      staticIncome_TableData: [],
      staticIncome_totalRewardVolume: '--',
      staticIncome_Loading: false,
      staticIncome_Pagination: {
        current: 1,
        size: 10,
        total: 0,
        pages: 0,
        onCurrentChange(page) {
          that.queryStaticIncome_detail();
        },
      },
      staticIncome_Form: {
        futureId: '',
        orderId: '',
        beginDate: '',
        endDate: '',
      },
      // 邀请（团队）收益明细
      teamIncome_TableData: [],
      teamIncome_totalRewardVolume: '--',
      teamIncome_Loading: false,
      teamIncome_Pagination: {
        current: 1,
        size: 10,
        total: 0,
        pages: 0,
        onCurrentChange(page) {
          that.queryTeamIncome_detail();
        },
      },
      teamIncome_Form: {
        userName: '',
        beginDate: '',
        endDate: '',
        orderId: '',
      },
      // 贡献收益明细
      contributionIncome_TableData: [],
      contributionIncome_totalRewardVolume: '--',
      contributionIncome_Loading: false,
      contributionIncome_Pagination: {
        current: 1,
        size: 10,
        total: 0,
        pages: 0,
        onCurrentChange(page) {
          that.queryContributionIncome_detail();
        },
      },
      contributionIncome_Form: {
        vipCode: '',
        beginDate: '',
        endDate: '',
        vipOrderId: '',
      },
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
          case'staticIncome': {
            this.staticIncome_TableData.length === 0 && this.queryStaticIncome_detail();
            break;
          }
          case'teamIncome': {
            this.teamIncome_TableData.length === 0 && this.queryTeamIncome_detail();
            break;
          }
          case'contributionIncome': {
            this.contributionIncome_TableData.length === 0 && this.queryContributionIncome_detail();
            break;
          }
          default: {
            console.error('未命中任何一种情况');
            break;
          }
        }
      }
    },
  },
  computed: {
    ...mapGetters(['get_coinList', 'get_futuresList']),
  },
  methods: {
    // 投资（静态）收益明细：拉取列表
    async queryStaticIncome_detail() {
      try {
        this.staticIncome_Loading = true;                                               // 加载框
        let staticIncome_Pagination = this.staticIncome_Pagination;
        const {data, extras} = await rewardRecordApi.staticIncomeDetail({                     // 接口
          ...this.staticIncome_Form,
          beginDate: tool.formatDate_fromVueDateTime(this.staticIncome_Form.beginDate),
          endDate: tool.formatDate_fromVueDateTime(this.staticIncome_Form.endDate),
          current: staticIncome_Pagination.current,
          size: staticIncome_Pagination.size,
        });
        this.staticIncome_TableData = data.records;
        staticIncome_Pagination.total = data.total;
        staticIncome_Pagination.pages = data.pages;
        this.staticIncome_totalRewardVolume = extras.totalRewardVolume;
      } finally {
        this.staticIncome_Loading = false;
      }

    },
    // 邀请（团队）收益明细：拉取列表
    async queryTeamIncome_detail() {
      try {
        this.teamIncome_Loading = true;                                                 // 加载框
        let teamIncome_Pagination = this.teamIncome_Pagination;
        const {data, extras} = await rewardRecordApi.teamIncomeDetail({                       // 接口
          ...this.teamIncome_Form,
          beginDate: tool.formatDate_fromVueDateTime(this.teamIncome_Form.beginDate),
          endDate: tool.formatDate_fromVueDateTime(this.teamIncome_Form.endDate),
          current: teamIncome_Pagination.current,
          size: teamIncome_Pagination.size,
        });
        this.teamIncome_TableData = data.records;
        teamIncome_Pagination.pages = data.pages;
        teamIncome_Pagination.total = data.total;
        this.teamIncome_totalRewardVolume = extras.totalRewardVolume;
      } finally {
        this.teamIncome_Loading = false;
      }
    },
    // 贡献收益明细：拉取列表
    async queryContributionIncome_detail() {
      try {
        this.contributionIncome_Loading = true;                                         // 加载框
        let contributionIncome_Pagination = this.contributionIncome_Pagination;
        const {data, extras} = await rewardRecordApi.contributionIncomeDetail({               // 接口
          ...this.contributionIncome_Form,
          beginDate: tool.formatDate_fromVueDateTime(this.contributionIncome_Form.beginDate),
          endDate: tool.formatDate_fromVueDateTime(this.contributionIncome_Form.endDate),
          current: contributionIncome_Pagination.current,
          size: contributionIncome_Pagination.size,
        });
        this.contributionIncome_TableData = data.records;
        contributionIncome_Pagination.total = data.total;
        contributionIncome_Pagination.pages = data.pages;
        this.contributionIncome_totalRewardVolume = extras.totalRewardVolume;
      } finally {
        this.contributionIncome_Loading = false;
      }
    },
  },
}
