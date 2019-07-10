import {mapGetters} from 'vuex';
import {tool} from "../../../common/js/tool";
import {investApi} from "../../../common/api/userAccountApi";

export default {
  name: "InvestModal",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      modalVisible: this.show,
      modalContent: 'invest_form',
      form: {
        "compoundInterest": '', // 是否复利 0-不复利 1-复利
        "payPassword": "", // 交易密码
        "vipCode": "", // 投资级别
        "volume": '', // 投资数量
        "compoundInterestCheckbox": false
      },
      choosedVip: null, // 用户选择的vip级别
      investBalance: {}, // 用户可用投资金额
      investBalanceDataGetted: false,
      committing: false
    }
  },
  computed: {
    ...mapGetters(['get_futuresList']),
    // 计算投资期限
    allottedTime(){
      if(!this.form.vipCode){
        return {};
      }
      let index = tool.getIndex(this.get_futuresList, item => {
        return item.id === this.form.vipCode;
      });
      let vipDetail = this.get_futuresList[index];
      console.log('vipDetail',vipDetail)
      let obj = {};
      let now = new Date().getTime();
      let oneDay = 86400000; // 86400000 = 1天

      obj.generateRevenue = tool.formatDate(now, 'MM-dd'); // 产生收益
      obj.incomesToAccount = tool.formatDate(now + oneDay, 'MM-dd'); // 收益到账日期
      obj.freezeDay = vipDetail.freezeDay;
      if(vipDetail.freezeDay === -1){
        obj.allottedTime = '随进随出(随时提取)'; // 投资期限
        obj.expireDate = '随进随出(随时提取)'; // 到期时间
      }else{
        obj.allottedTime = vipDetail.freezeDay + '天';
        obj.expireDate = tool.formatDate(now + (vipDetail.freezeDay * oneDay), 'yyyy-MM-dd');
      }
      return obj;
    },
    // 计算预计收益
    anticipatedIncome(){
      let volume = this.form.volume;
      let choosedVip = this.choosedVip;
      if(('' + volume).length === 0 || isNaN(volume * 1) || !choosedVip){
        return '--';
      }
      let amount = 0;
      if(choosedVip.freezeDay !== -1){
        console.log('sddsd',`${volume} * ${choosedVip.freezeDay} * ${choosedVip.rate}`)
        //amount = this.$bigMath.eval(`${volume} * ${choosedVip.freezeDay} * ${choosedVip.rate}`).valueOf();
        // 暂时只计算一天的收益
        amount = this.$bigMath.eval(`${volume} * ${choosedVip.rate}`).valueOf();
      }else{
        // 如果选择的会员级别没有投资期限天数的，则预计收益为 数量 * 收益率
        amount = this.$bigMath.eval(`${volume} * ${choosedVip.rate}`).valueOf();
      }
      return amount;
    },
    // 计算是否余额不足
    balanceEnough(){
      let investBalance = this.investBalance;
      let choosedVip = this.choosedVip;
      if(typeof investBalance.balance === 'undefined' || !choosedVip){
        return false;
      }
      if(!investBalance.balance){
        return true;
      }
      if(investBalance.balance < choosedVip.startVolume){
        return true;
      }
      return false;
    },
    investFormModalContentTitle(){
      return '锁仓投资';
    },
    securityCheckModalContentTitle(){
      return '安全验证';
    }
  },
  watch:{
    show(newVal){
      this.modalVisible = newVal;
    },
    'form.vipCode'(newVal){
      if(!newVal){
        this.choosedVip = null;
        return;
      }
      let futuresList = this.get_futuresList;
      let index = tool.getIndex(futuresList, item => {
        return item.code === this.form.vipCode;
      });
      this.choosedVip = futuresList[index];
    }
  },
  methods: {
    // TODO 1、勾选复利计算预期收益 2、复利计算器
    // 提交投资数据
    async submitInvestData(){
      let valid = await this.$validator.validateAll('security_check');
      if(!valid || this.committing){
        return;
      }
      this.committing = true;
      let data = {
        ...this.form
      };
      data.compoundInterest = data.compoundInterestCheckbox ? 1 : 0;
      delete data.compoundInterestCheckbox;
      investApi.invest(data)
        .then(res => {
          this.committing = false;
          if(res.errcode !== 0){
            return;
          }
          this.modalVisible = false;
          this.$notify({
            title: '温馨提示',
            message: '投资成功！',
            type: 'success'
          });
          this.$emit('investSuccess');
          this.modalContent = 'invest_form';
          tool.clearData(this.form, {
            compoundInterestCheckbox: false
          });
          this.$validator.reset('invest_form');
        })
        .catch(() => {
          this.committing = false;
        });
      console.log('提交数据')
    },
    // 全部投资
    allIn(){
      let investBalance = this.investBalance;
      let maxVolume = this.choosedVip.endVolume;
      if(!maxVolume || !investBalance.balance){
        return;
      }
      let volume = 0;
      volume = investBalance.balance < maxVolume ? investBalance.balance : maxVolume;
      this.form.volume = volume;
      //return amount;
    },
    // 锁仓投资表单，立即投资按钮点击事件
    goNext(){
      this.$validator.validateAll('invest_form')
        .then(valid => {
          if(valid){
            this.modalContent = 'security_check';
          }else{
            console.log('表单校验不通过')
          }
        });
    },
    // 弹窗打开事件
    onModalOpen(){
      if(!this.investBalanceDataGetted){
        investApi.getInvestBalance()
          .then(res => {
            if(res.data){
              this.investBalance = res.data;
              this.investBalanceDataGetted = true;
            }
          });
      }
    },
    // 弹窗关闭事件
    onModalClosed(){
      this.$emit('update:show', false);
    }
  },
  mounted() {
  }
}
