<template>
  <boot-modal
      v-model="modalVisible"
      :title="$t('accountReservationModal.reservationInvest')"
      size="lg"
      @closed="onModalClosed">
    <div class="reservation-content">
      <form @submit.prevent="confirmReservation">
        <div class="form-group">
          <label for="" class="form-label block">
            <!--币种-->{{$t('accountReservationModal.coinName')}}
          </label>
          <input type="text" v-model="form.coinName" readonly class="form-control" v-validate="'required'" name="accountReservationForm_name">
          <p class="error-tip">{{errors.first('accountReservationForm_name')}}</p>
        </div>
        <div class="form-group">
          <label for="" class="form-label block">
            <!--预约金额-->{{$t('accountReservationModal.reservationAmount')}}
          </label>
          <input
              type="number"
              v-model="form.volume"
              class="form-control"
              v-validate="{required: true, decimal: 2, max_value: get_accountBalance.balance}"
              name="accountReservationForm_volume">
          <!--<div class="flex flex-wrap mt-5">
            <span class="color-999 mr-15">
              &lt;!&ndash;余额&ndash;&gt;{{$t('common.balance')}}：{{get_accountBalance.balance}} USDT
            </span>
            <span class="color-999">
              &lt;!&ndash;最小投资金额&ndash;&gt;{{$t('accountReservationModal.minInvestAmount')}}：{{future.minVolume || 0}}
            </span>
          </div>-->
          <p class="error-tip">{{errors.first('accountReservationForm_volume')}}</p>
        </div>
        <div class="form-group">
          <label for="" class="form-label block"><!--验证码-->{{$t('common.validateCode')}}</label>
          <div class="flex">
            <input type="number"
                   class="form-control"
                   v-model="form.validateCode"
                   v-validate="'required|validateCode'"
                   name="common_validateCode"
                   data-placeholder="请输入验证码"
                   :placeholder="$t('placeholder.validateCode')">
            <verify-btn :type="form.verifyType" :user-inside-value="form.verifyType !== 'gaCode'" class="no-bl"></verify-btn>
          </div>
          <div class="text-right">
            <change-verify-type v-model="form.verifyType" class="mt-5"></change-verify-type>
          </div>
          <p class="error-tip">{{errors.first('common_validateCode')}}</p>
        </div>
        <div class="form-group">
          <label for="" class="form-label block"><!--交易密码-->{{$t('common.sellPwd')}}</label>
          <input type="password" v-model="form.paymentPassword" class="form-control" v-validate="'required|checkPwd'" name="common_payPassword">
          <p class="error-tip">{{errors.first('common_payPassword')}}</p>
        </div>
        <div class="form-group">
          <el-button
              type="primary"
              class="primary-gradual medium"
              native-type="submit"
              :loading="committing"
              :disabled="committing"
              @click="confirmReservation"><!--立即预约-->{{$t('accountReservationModal.reservationNow')}}</el-button>
        </div>
      </form>
    </div>
  </boot-modal>
</template>

<script>
  import index from "./reservation-js";
  export default index;
</script>

<style lang="scss" scoped>
  @import "../../../../common/css/break-points";
  .reservation-content{
    padding: 0 30px 15px 30px;
  }
  @media (max-width: $lg) {
    .reservation-content{
      padding: 0 15px;
    }
  }
</style>
