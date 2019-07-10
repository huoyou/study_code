<template>
  <section class="my-earnings" ref="my_earnings">
    <div class="flex align-items-center block-title">
      <h4 class="caption"><!--在投金额-->{{$t("accountBalancePage.amountOfInvestment")}}</h4>
      <!--<a href="javascript: void(0);"
         class="get-income-guide-btn"
          @click="showGetInocmeGuideModal">&lt;!&ndash;如何获取收益?&ndash;&gt;How to get incomes?</a>-->
    </div>
    <div>
      <strong class="earnings-value">{{!userInvestInfoGetted ? '--' : (userInvestInfo.investVolume || '0.00')}}</strong>
      <span class="earnings-unit">USDT</span>
    </div>
    <div class="earnings-detail">
      <router-link to="/myWallet" class="source-income">
        <div>
          <span><!--昨日投资收益-->{{$t("accountBalancePage.investmentIncomeYesterday")}}</span>
          <i class="play-icon"></i>
        </div>
        <div>{{!userInvestInfoGetted ? '--' : (userInvestInfo.staticReward || '0.00')}} USDT</div>
      </router-link>
      <router-link to="/myWallet" class="source-income">
        <div>
          <span><!--昨日邀请收益-->{{$t("accountBalancePage.invitedEarningsYesterday")}}</span>
          <i class="play-icon"></i>
        </div>
        <div>{{!userInvestInfoGetted ? '--' : (userInvestInfo.teamReward || '0.00')}} USDT</div>
      </router-link>
      <router-link to="/myWallet" class="source-income">
        <div>
          <span><!--昨日贡献收益-->{{$t("accountBalancePage.contributionRevenueYesterday")}}</span>
          <i class="play-icon"></i>
        </div>
        <div>{{!userInvestInfoGetted ? '--' : (userInvestInfo.contributionReward || '0.00')}} USDT</div>
      </router-link>
    </div>
    <div class="hr earnings-hr"></div>
    <!--<div class="operate-btns">
      <a href="javascript: void(0);"
         class="operate-btn invest-btn"
         @click="investModalVisible = true">投资</a>
      <a href="javascript: void(0);"
         class="operate-btn disinvestment-btn"
          @click="disinvestmentBtnClick">撤资</a>
      <a href="javascript: void(0);"
         class="operate-btn invite-friends-btn"
          @click="inviteFriendsModalVisible = true">邀请好友</a>
    </div>-->
    <ul class="futures-list flex flex-wrap justify-content-between" v-if="!futuresListInited">
      <li class="futures-item skeleton" v-for="item in 6" :key="item">
        <div class="futures-top clearfix">
          <div class="futures-coin-img"></div>
          <div class="overflow futures-top-right">
            <div class="flex">
              <div class="futures-name"></div>
              <div class="transaction-btn">
                --
              </div>
            </div>
          </div>
        </div>
        <p class="futures-yield-rate"></p>
        <div class="curve-graph"></div>
      </li>
    </ul>
    <ul class="futures-list flex flex-wrap justify-content-between" v-else>
      <li class="futures-item" v-for="item in futuresList" :key="item.id">
        <div class="futures-top clearfix">
          <img :src="item.imageUrl" alt="" class="futures-coin-img">
          <div class="overflow futures-top-right">
            <div class="flex">
              <div class="futures-name">{{item.name}}</div>
              <div class="transaction-btn" @click="reservationBtnClick(item)">
                <!--投资-->{{$t('common.invest')}}
              </div>
            </div>
          </div>
        </div>
        <p class="futures-yield-rate"><!--收益率-->{{$t("common.yieldRate")}}：{{$bigMath.eval(`${item.minRate} * 100`).valueOf()}}% - {{$bigMath.eval(`${item.maxRate} * 100`).valueOf()}}%</p>
        <div class="curve-graph">
          <vue-highcharts :options="item.curvuGraph"></vue-highcharts>
        </div>
      </li>
    </ul>

    <!--投资modal start-->
    <invest-modal
        :show.sync="investModalVisible"
        :future="reservationModalData"
        @investSuccess="onInvestSuccess"></invest-modal>
    <!--投资modal end-->

    <!--撤资modal start-->
    <!--<disinvestment-modal
        :show.sync="disinvestmentModalVisible"
        :order="unDisinvestmentOrder || {}"
        @disinvestmentSuccess="onDisinvestmentSuccess"></disinvestment-modal>-->
    <!--撤资modal end-->

    <!--邀请好友modal start-->
    <!--<invite-friends-modal :show.sync="inviteFriendsModalVisible"></invite-friends-modal>-->
    <!--邀请好友modal end-->

    <!--如何获取收益modal start-->
    <!--<get-income-guide-modal v-if="getIncomeGuideModalLoad" :show.sync="getIncomeGuideModalVisible"></get-income-guide-modal>-->
    <!--如何获取收益modal end-->

    <!--复利计算器modal start-->
    <!--<compound-calculator-modal :show.sync="compoundCalculatorModalVisible"></compound-calculator-modal>-->
    <!--复利计算器modal end-->

    <!--预约弹窗 start-->
    <!--<reservation-modal :show.sync="reservationModalVisible" :future="reservationModalData"></reservation-modal>-->
    <!--预约弹窗 end-->
  </section>
</template>

<script>
  import index from './my-earnings';

  export default index;
</script>

<style lang="scss" scoped>
  @import "./my-earnings.scope";
</style>
