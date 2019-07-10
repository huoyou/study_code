<template>
  <section class="account-balance container">
    <div class="flex align-items-center flex-wrap">
      <h3 class="block-caption"><!--账户资产-->{{$t("accountBalancePage.account")}}</h3>
      <!--<router-link class="view-bill-link coin-list-select-before" to="/walletRecords">
        View bill
        <i class="el-icon-arrow-right"></i>
      </router-link>-->
      <el-select
          v-model="choosedCurrencyId"
          class="ukfc-select coin-list-select"
          popper-class="ukfc-select-popover">
        <el-option
            v-for="item in get_currencyList"
            :key="item.id"
            :label="item.name + ' (' + item.symbol + ')'"
            :value="item.id">
        </el-option>
      </el-select>
      <!--<router-link class="view-bill-link coin-list-select-after" to="/walletRecords">
        View bill
        <i class="el-icon-arrow-right"></i>
      </router-link>-->
    </div>
    <div class="my-balance">
      <div>
        <strong class="balance-ukfc">{{!accountBalance ? '--.--' : (accountBalance.balance || '0.00')}}</strong>
        <span class="balance-ukfc-unit">USDT</span>
        <el-button
            class="transaction-btn"
            type="primary"
            size="medium"
            round
            @click="reservationModalVisible = true"><!--预约-->{{$t('accountBalancePage.reservation')}}</el-button>
      </div>
      <div class="convert-into-usd">
        <span>≈</span>
        <b>{{choosedCurrency.symbol ? choosedCurrency.symbol : '--'}} {{usdtConvertToCurrency == 0 ? '0.00' : usdtConvertToCurrency}}</b>
      </div>
    </div>
    <div class="wait-audit-account">
      <div class="child1">
        <!--已审核资产-->{{$t('common.auditAssets')}}：
        <span class="text-bold">{{!accountBalance ? '--' : accountBalance.auditVolume}}</span>
      </div>
      <div>
        <!--待审核资产-->{{$t('common.waitAuditAssets')}}：
        <span class="text-bold">{{!accountBalance ? '--' : accountBalance.reservationVolume}}</span></div>
    </div>
    <div class="hr"></div>
    <ul class="quick-actions flex flex-wrap">
      <li class="quick-action-item" @click="transferModalVisible = true" old-click="onTransferBtnClick">
          <!--<span class="active-item-icon action-icon transfer"></span>-->
        <img src="../../../assets/images/wallet-home/transfer.png" class="action-icon-img transfer" alt="">
          <span class="action-item-text"><!--转入-->{{$t("common.transfer")}}</span>
      </li>
      <li class="quick-action-item" @click="transferOutModalVisible = true">
          <!--<span class="active-item-icon action-icon transfer-out"></span>-->
        <img src="../../../assets/images/wallet-home/transfer-out.png" class="action-icon-img transfer-out" alt="">
          <span class="action-item-text"><!--转出-->{{$t("common.transferOut")}}</span>
      </li>
      <!--<li class="quick-action-item" @click="exchangeModalVisible = true">
          &lt;!&ndash;<span class="active-item-icon action-icon exchange"></span>&ndash;&gt;
        <img src="../../../assets/images/wallet-home/exchange.png" class="action-icon-img exchange" alt="">
          <span class="action-item-text">Exchange</span>
      </li>-->
      <!--<li class="quick-action-item" @click="investModalVisible = true">
          &lt;!&ndash;<span class="active-item-icon action-icon investment"></span>&ndash;&gt;
        <img src="../../../assets/images/wallet-home/investment.png" class="action-icon-img investment" alt="">
          <span class="action-item-text">Investment</span>
      </li>-->
      <li class="quick-action-item" @click="$router.push({name: 'addressBook'})">
          <!--<span class="active-item-icon action-icon address-book"></span>-->
        <img src="../../../assets/images/wallet-home/address-book.png" class="action-icon-img address-book" alt="">
          <span class="action-item-text"><!--地址薄-->{{$t("common.addressBook")}}</span>
      </li>
    </ul>

    <!--转入弹窗 start-->
    <transfer :show.sync="transferModalVisible"></transfer>
    <!--转入弹窗 end-->

    <!--转出弹窗 start-->
    <transfer-out :show.sync="transferOutModalVisible"></transfer-out>
    <!--转出弹窗 end-->

    <!--预约弹窗 start-->
    <reservation :show.sync="reservationModalVisible"></reservation>
    <!--预约弹窗 end-->

    <!--币种兑换 start-->
    <!--<exchange :show.sync="exchangeModalVisible"></exchange>-->
    <!--币种兑换 end-->

    <!--投资弹窗 start-->
    <!--<invest-modal :show.sync="investModalVisible"></invest-modal>-->
    <!--投资弹窗 end-->
  </section>
</template>

<script>
import index from './account-balance';
export default index;
</script>

<!--<style lang="scss">
@import "account-balance";
</style>-->

<style lang="scss" scoped>
  @import "account-balance.scoped";
</style>
