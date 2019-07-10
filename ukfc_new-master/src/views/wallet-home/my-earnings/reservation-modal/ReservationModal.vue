<template>
  <boot-modal
      v-model="modalVisible"
      :title="$t('reservationModal.reservationInvest')"
      size="lg"
      @closed="onModalClosed">
    <div class="reservation-content">
      <form @submit.prevent="confirmReservation">
        <div class="form-group">
          <label for="" class="form-label block">
            <!--期货名称-->{{$t('reservationModal.futureName')}}
          </label>
          <input type="text" v-model="form.name" readonly class="form-control" v-validate="'required'" name="reservationForm_name">
          <p class="error-tip">{{errors.first('reservationForm_name')}}</p>
        </div>
        <div class="form-group">
          <label for="" class="form-label block">
            <!--投资金额-->{{$t('reservationModal.investAmount')}}
          </label>
          <input
              type="number"
              v-model="form.volume"
              class="form-control"
              v-validate="{required: true, decimal: 2, max_value: get_accountBalance.balance, min_value: future.minVolume || 0}"
              name="reservationForm_volume">
          <div class="flex flex-wrap mt-5">
            <span class="color-999 mr-15">
              <!--余额-->{{$t('common.balance')}}：{{get_accountBalance.balance}} USDT
            </span>
            <span class="color-999">
              <!--最小投资金额-->{{$t('reservationModal.minInvestAmount')}}：{{future.minVolume || 0}}
            </span>
          </div>
          <p class="error-tip">{{errors.first('reservationForm_volume')}}</p>
        </div>
        <div class="form-group">
          <label for="" class="form-label block"><!--交易密码-->{{$t('common.sellPwd')}}</label>
          <input type="password" v-model="form.payPassword" class="form-control" v-validate="'required|checkPwd'" name="common_payPassword">
          <p class="error-tip">{{errors.first('common_payPassword')}}</p>
        </div>
        <div class="form-group">
          <el-button
              type="primary"
              class="primary-gradual medium"
              native-type="submit"
              :loading="committing"
              :disabled="committing"
              @click="confirmReservation"><!--立即预约-->{{$t('reservationModal.reservationNow')}}</el-button>
        </div>
      </form>
    </div>
  </boot-modal>
</template>

<script>
import index from './reservation-js';
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
