<template>
  <section class="my-wallet">
    <div class="my-wallet-container container">
      <div class="card">
        <div class="card-head">
          <h6 class="card-title"><!--我的资产-->{{$t("assetsPage.account")}}</h6>
          <!--<router-link to="/walletRecords" class="to-account-bill-link">查看账单</router-link>-->
        </div>
        <div class="card-body assets-card-body">
          <div class="block-caption flex flex-wrap align-items-end">
<!--            <h6 class="caption-text">账户资产</h6>-->
            <!--<router-link to="/fsdf" class="to-trend-chart-link">KRC价格走势</router-link>-->
          </div>
          <div class="my-balance">
            <div>
              <strong class="balance-ukfc">{{!accountBalance ? '--.--' : (accountBalance.balance || '0.00')}}</strong>
              <span class="balance-ukfc-unit">USDT</span>
            </div>
            <div class="convert-into-usd">
              <span>≈</span>
              <b>$ {{usdtConvertToCurrency}}</b>
            </div>
          </div>
          <div class="wait-audit-account">
            <div class="child1">
              <!--已审核资产-->{{$t('common.auditAssets')}}：<span class="text-bold">{{!accountBalance ? '--' : accountBalance.auditVolume}}</span>
            </div>
            <div>
              <!--待审核资产-->{{$t('common.waitAuditAssets')}}：<span class="text-bold">{{!accountBalance ? '--' : accountBalance.reservationVolume}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-head no-mb">
          <h6 class="card-title"><!--充提记录-->{{$t("assetsPage.rechargeWithdrawRecord")}}</h6>
        </div>
        <div class="card-body">
          <invest-records></invest-records>
        </div>
      </div>

      <div class="card">
        <div class="card-head no-mb">
          <h6 class="card-title"><!--收益明细-->{{$t("common.earningDetail")}}</h6>
        </div>
        <div class="card-body">
          <incomes></incomes>
        </div>
      </div>

      <!--<div class="card">
        <div class="card-head no-mb">
          <h6 class="card-title">我的资产列表</h6>
        </div>
        <div class="card-body">
          <ul class="account-assets-list">
            <li class="account-assets-item" v-for="item in 5" :key="item">
              <div class="coin-info">
                <img src="../../../assets/images/temp/user-avater.png" class="coin-img">
                <div class="overflow">
                  <p class="coin-name">BTC</p>
                  <p class="coin-platform-name">Bitcoin</p>
                </div>
              </div>
              <div class="assets-balance">
                <div class="coin-balance">987.654321</div>
                <div class="coin-balance-convert-usd">≈$ 98765.65</div>
              </div>
              <div class="operate-btns">
                <div>
                  <el-button class="operate-btn" round>转入</el-button>
                  <el-button class="operate-btn" round>转出</el-button>
                  <el-button class="operate-btn" round>兑换</el-button>
                </div>
              </div>
            </li>
            &lt;!&ndash;<li class="no-data">暂无数据~</li>
            <li class="loading-data" v-loading="true" element-loading-text="数据加载中..."></li>&ndash;&gt;
          </ul>
          <div class="load-more-btn" title="加载更多数据">
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>
      </div>-->
    </div>
  </section>
</template>

<script>
  import index from './my-wallet';
  export default index;
</script>

<style lang="scss" scoped>
@import "my-wallet.scoped";
</style>
