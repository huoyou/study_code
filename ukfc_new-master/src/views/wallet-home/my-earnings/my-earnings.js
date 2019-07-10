/*import InvestModal from '../../../components/business-components/invest-modal/InvestModal';*/
//import DisinvestmentModal from './disinvestment-modal/DisinvestmentModal';
//import InviteFriendsModal from './invite-friends-modal/InviteFriends';
/*import GetIncomeGuideModal from './get-income-guide-modal/GetIncomeGuideModal';
import CompoundCalculatorModal from './compound-calculator-modal/CompoundCalculatorModal';*/
import InvestModal from './invest-modal/InvestModal';
import ReservationModal from './reservation-modal/ReservationModal';
import VueHighcharts from 'vue2-highcharts';
import {Roll} from "../../../common/js/roll";
import {investApi} from "../../../common/api/userAccountApi";
import {mapGetters} from "vuex";

export default {
  name: "MyEarnings",
  components: {
    'vue-highcharts': VueHighcharts,
    'invest-modal': InvestModal,
    //'disinvestment-modal': DisinvestmentModal,
    //'invite-friends-modal': InviteFriendsModal,
    //'get-income-guide-modal': GetIncomeGuideModal,
    //'compound-calculator-modal': CompoundCalculatorModal,
    //'reservation-modal': ReservationModal
  },
  data(){
    return {
      investModalVisible: false, // 投资弹窗是否显示
      disinvestmentModalVisible: false, // 撤资弹窗是否显示
      inviteFriendsModalVisible: false, // 邀请好友弹窗是否显示
      getIncomeGuideModalVisible: false, // 如何获取收益弹窗是否显示
      getIncomeGuideModalLoad: false, // 控制如何获取收益弹窗是否加载
      compoundCalculatorModalVisible: false, // 复利计算器弹窗是否显示
      reservationModalVisible: false, // 预约弹窗是否显示
      futuresListInited: false, // 期货列表是否初始化
      futuresList: [], // 期货列表
      userInvestInfo: {
        contributionReward: 0, // 昨日贡献收益
        investVolume: 0, // 锁仓投资数量
        staticReward: 0, // 昨日静态收益
        teamReward: 0 // 昨日分享收益
      },
      userInvestInfoGetted: false, // 用户投资信息数据是否已经获取
      unDisinvestmentOrder: null, // 用户未撤资订单
      reservationModalData: {}, // 预约投资弹窗数据
      // highchart基础配置
      highchartsOptions: {
        chart: {
          type: 'areaspline',
          height: 54,
          spacing: [0,0,0,0],
          margin: 0,
          backgroundColor: 'transparent',
        },
        title: {
          text: ' ',
        },
        legend: {
          enabled: false,
        },
        xAxis: {
          visible: false,
        },
        yAxis: {
          visible: false,
        },
        tooltip: {
          enabled: false,
        },
        plotOptions: {
          // 针对areaspline面积图的配置
          areaspline: {
            fillColor: '#f9f9f9',
            lineColor: '#dfdfdf',
            enableMouseTracking: false, // 禁用鼠标跟踪
            lineWidth: 1.4,
            // 不显示数据点
            marker: {
              enabled: false,
            },
          },
        },
       /* // 数据列
        series: [{
          name: '热门交易',
          data: [],
        }],*/
         // 数据列
        /*series: [{
          name: '热门交易',
          data: [20, 4, 45, 12.5, 80, 10, 50],
        }],*/
      },
      roll: null
    };
  },
  methods: {
    // 获取用户投资信息
    async getUserInvestInfo(){
      let res = await investApi.getUserInvestInfo();
      if(res.data){
        this.userInvestInfo = res.data;
      }
      this.userInvestInfoGetted = true;
    },
    // 获取用户未撤资订单
   /* async getUnDisinvestmentOrder(){
      let res = await investApi.getUnDisinvestmentOrder();
      if(res.data){
        this.unDisinvestmentOrder = res.data;
      }else{
        this.unDisinvestmentOrder = null;
      }
    },*/
    // 初始化期货列表
   /* initFuturesList(futuresListStore){
      if(this.futuresListInited){

      }
    },*/
    // 撤资订单按钮点击事件
    /*disinvestmentBtnClick(){
      if(!this.unDisinvestmentOrder){
        this.$notify({
          title: '温馨提示',
          message: '没有可撤资的订单！',
          type: 'warning'
        });
      }else{
        this.disinvestmentModalVisible = true;
      }
    },*/
    // 预约按钮点击事件
    reservationBtnClick(item){
      this.reservationModalData = item;
      this.investModalVisible = true;
    },
    // 显示如何获取收益弹窗
    showGetInocmeGuideModal(){
      if(!this.getIncomeGuideModalLoad){
        this.getIncomeGuideModalLoad = true;
      }
      this.getIncomeGuideModalVisible = true;
    },
    // 锁仓投资成功回调
    onInvestSuccess(){
      this.getUserInvestInfo();
      //this.getUnDisinvestmentOrder();
    },
    // 撤资成功回调
    onDisinvestmentSuccess(){
      this.getUserInvestInfo();
      //this.getUnDisinvestmentOrder();
    }
  },
  computed: {
    ...mapGetters(['get_futuresList'])
  },
  watch: {
    // 从store中获取期货列表数据
    get_futuresList: {
      immediate: true,
      handler(newVal){
        if(newVal.length > 0){
          let newFuturesList = newVal.map(item => {
            let obj = Object.assign(item);
            let curvuGraph = Object.assign(this.highchartsOptions);
            curvuGraph.series = [{
              name: '收益曲线',
              data: item.earningTrend,
            }];

            obj.curvuGraph = curvuGraph;
            return obj;
          });
          this.futuresList = newFuturesList;
        }
      }
    }
  },
  mounted() {
    let that = this;
    let roll = new Roll({
      offsetTop: 50
    });
    // 元素出现在可视区后再获取数据
    roll.push(this.$refs.my_earnings, function (context, done) {
      that.getUserInvestInfo();
      //that.getUnDisinvestmentOrder();
      that.futuresListInited = true;
      done(this, context);
    });
    this.roll = roll;
  },
  beforeDestroy() {
    this.roll.destroy();
    this.roll = null;
  }
}
