<template>
  <boot-multi-modal
      class="invest-modal"
      v-model="modalVisible"
      :modal-content="modalContent"
      :backdrop="false"
      size="lg"
      @open="onModalOpen"
      @closed="onModalClosed">
    <modal-content name="invest_form" :title="investFormModalContentTitle">
      <form onsubmit="return false;" data-vv-scope="invest_form">
        <div class="invest-form">
          <div class="form-group">
            <label for="" class="form-label block">投资级别</label>
            <el-select
                v-model="form.vipCode"
                class="ukfc-select block"
                popper-class="ukfc-select-popover"
                placeholder="请选择投资级别">
              <el-option
                  v-for="item in get_futuresList"
                  :key="item.code"
                  :label="item.name"
                  :value="item.code">
              </el-option>
            </el-select>
            <input type="hidden" v-model="form.vipCode" v-validate="'required'" name="investForm_vip">
          </div>
          <div class="form-group">
            <label for="" class="form-label block">投资期限</label>
            <input type="text" :value="allottedTime.allottedTime" readonly class="form-control">
            <p class="font-14 mt-5">
              预计 <span class="color-primary">{{allottedTime.generateRevenue || '--'}}</span>产生收益，
              <span class="color-primary">{{allottedTime.incomesToAccount || '--'}}</span>收益到账，
              <span v-if="allottedTime.freezeDay != -1">
              <span class="color-primary">{{allottedTime.expireDate || '--'}}</span>到期
            </span>
              <span class="color-primary" v-else>{{allottedTime.expireDate}}</span>
            </p>
          </div>
          <div class="form-group">
            <label for="" class="form-label block">投资数量</label>
            <input type="number"
                   v-model="form.volume"
                   v-validate="{required: true, decimal: true, min_value: choosedVip ? choosedVip.startVolume : 0, max_value: choosedVip ? choosedVip.endVolume : 0}"
                   name="investForm_amount"
                   class="form-control">
            <div class="invest-count-bottom">
              <div>
                <el-checkbox class="ukfc-checkbox" v-model="form.compoundInterestCheckbox">是否复利</el-checkbox>
                <span class="calc-btn">复利计算器</span>
              </div>
              <div>
                <span>限额: {{choosedVip ? (choosedVip.startVolume + ' - ' + choosedVip.endVolume) : '--'}}</span>
                <span class="all-in" @click="allIn">全部投资</span>
              </div>
            </div>
            <div class="error-tip" v-show="balanceEnough">您的余额不足！</div>
          </div>
          <div class="form-group no-mb">
            <div class="yield-rate">
              <div>投资日收益率：{{choosedVip ? ($bigMath.eval(`${choosedVip.rate} * 100`).valueOf() + '%') : '--'}} <!--(年化利率: 292%)--></div>
              <div>预计收益: {{anticipatedIncome}} USD <small class="color-primary">(一天)</small></div>
            </div>
          </div>
          <p class="error-tip mt-5 mb-5">{{errors.all('invest_form')[0]}}</p>
          <div class="text-center">
            <el-button type="primary" class="primary-gradual" @click="goNext">立即投资</el-button>
          </div>
        </div>
      </form>
    </modal-content>
    <modal-content name="security_check" :title="securityCheckModalContentTitle">
      <form onsubmit="return false;" data-vv-scope="security_check">
        <div class="security-check-form">
          <input type="password"
                 class="form-control"
                 v-model="form.payPassword"
                 v-validate="{required: true, checkPwd: true}"
                 name="investForm_payPassword"
                 autocomplete="off"
                 placeholder="请输入交易密码">
          <p class="error-tip mb-5">{{errors.all('security_check')[0]}}</p>
          <div>
            <el-button
                type="primary"
                class="primary-gradual"
                :disabled="committing || typeof investBalance.balance === 'undefined'"
                :loading="committing"
                @click="submitInvestData">确定</el-button>
          </div>
        </div>
      </form>
    </modal-content>
  </boot-multi-modal>
</template>

<script>
import index from './invest-modal';
export default index;
</script>

<style lang="scss" scoped>
@import "invest-modal.scoped";
</style>
