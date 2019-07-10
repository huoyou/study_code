<template>
  <boot-modal
      v-model="modalVisible"
      title="我要撤资"
      :backdrop="false"
      size="lg"
      @closed="onModalClose">
    <div class="disinvestment-form">
      <div class="order-info">
        <ul>
          <li class="clearfix">
            <div class="field-caption">在投金额: </div>
            <div class="view-field-value">{{order.amount}} USD</div>
          </li>
          <li class="clearfix">
            <div class="field-caption">会员级别: </div>
            <div class="view-field-value">
              <span class="color-primary">{{currentVip.name}}</span>
            </div>
          </li>
          <li class="clearfix">
            <div class="field-caption">日收益率: </div>
            <div class="view-field-value">{{incomesRate}}%</div>
          </li>
          <li class="clearfix">
            <div class="field-caption">操作权限: </div>
            <div class="view-field-value" v-show="order.freezeDay > -1">
              <span class="color-primary">已锁定</span>
              <span>({{expireDay}}天后解锁)</span>
            </div>
            <div class="view-field-value color-primary" v-show="order.freezeDay === -1">
              随进随出(随时提取)
            </div>
          </li>
        </ul>
      </div>
      <div class="disinvestment-forbidden-tip" v-show="order.freezeDay > -1">您的订单{{expireDay}}天后解锁，暂时无法撤资！</div>
      <div class="form-group disinvestment-amount-form-group">
        <label class="form-label">撤资数量</label>
        <div class="relative">
          <input type="text" :value="order.amount" readonly class="form-control">
          <span class="monetory-unit">USD</span>
        </div>
      </div>
      <div class="form-group">
        <label for="" class="form-label">交易密码</label>
        <input
            type="password"
            autocomplete="off"
            v-model="payPassword"
            v-validate="{required: true, checkPwd: true}"
            :disabled="order.freezeDay > -1"
            name="disinvestmentForm_payPassword"
            class="form-control"
            placeholder="请输入交易密码">
      </div>
      <p class="error-tip">{{errors.all()[0]}}</p>
      <div class="text-center mt-30">
        <el-button
            type="primary"
            class="primary-gradual"
            :disabled="committing || order.freezeDay > -1"
            :loading="committing"
            @click="submitDisinvestmentData">确定撤资</el-button>
      </div>
    </div>
  </boot-modal>
</template>

<script>
  import {tool} from "../../../../common/js/tool";
  import {investApi} from "../../../../common/api/userAccountApi";
  import {mapGetters} from "vuex";

  export default {
    name: "DisinvestmentModal",
    props: {
      show: {
        type: Boolean,
        default: false
      },
      // 需要撤资的订单
      order: {
        type: Object,
        default(){
          return {};
        }
      }
    },
    data(){
      return {
        modalVisible: this.show,
        committing: false,
        payPassword: ''
      };
    },
    computed: {
      ...mapGetters(['get_userVipList']),
      // 获取日收益率
      incomesRate(){
        let rate = this.order.rate;
        if(rate){
          return this.$bigMath.eval(`${rate} * 100`).valueOf();
        }else{
          return '0.00';
        }
      },
      // 计算到期天数
      expireDay(){
        let endDate = this.order.endDate;
        if(endDate){
          let diff = tool.dateSubtract(new Date(), endDate);
          console.log('时间差',diff)
          return diff.days;
        }else{
          return '--';
        }
      },
      // 获取用户选择的会员级别
      currentVip(){
        let vipCode = this.order.vipCode;
        if(vipCode){
          let index = tool.getIndex(this.get_userVipList, item => {
            return item.code === vipCode;
          });
          let vip = this.get_userVipList[index];
          return vip ? vip : {};
        }else{
          return {};
        }
      }
    },
    watch: {
      show(newVal){
        this.modalVisible = newVal;
      }
    },
    methods: {
      // 提交撤资数据
      async submitDisinvestmentData(){
        let valid = await this.$validator.validate();
        if(!valid || this.committing || this.order.freezeDay > -1){
          return;
        }
        this.committing = true;
        investApi.disInvestment({
          orderId: this.order.id,
          payPassword: this.payPassword
        })
          .then(res => {
            this.committing = false;
            if(res.errcode === 0){
              this.modalVisible = false;
              this.$notify({
                title: '温馨提示',
                message: '撤资成功！',
                type: 'success'
              });
              this.$emit('disinvestmentSuccess');
              this.payPassword = '';
            }
          })
          .catch(() => {
            this.committing = false;
          })
      },
      // 弹窗关闭事件
      onModalClose(){
        this.$emit('update:show', false);
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "disinvestment-modal.scoped";
</style>
