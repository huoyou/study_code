<template>
  <div class="wallet-home">
    <!--账户资产 start-->
    <acctoun-balance></acctoun-balance>
    <!--账户资产 end-->

    <!--实时消息 start-->
    <live-news></live-news>
    <!--实时消息 end-->

    <!--我的收益与全球收益排名 start-->
    <section class="earings-wrap container">
      <div class="row">
        <div class="my-earnings-wrap">
          <my-earnings></my-earnings>
        </div>
        <div class="income-rank-wrap">
          <income-rank></income-rank>
        </div>
      </div>
    </section>
    <!--我的收益与全球收益排名 end-->

		<!-- 我的团队 start -->
		<my-team></my-team>
		<!-- 我的团队 end -->
  </div>
</template>

<script>
  import AccountBalance from './account-balance/AccountBalance';
  import LiveNews from './live-news/LiveNews';
  import MyEarnings from './my-earnings/MyEarnings';
  import IncomeRank from './income-rank/IncomeRank';
	import MyTeam from './my-team/MyTeam';
  export default {
    name: "WalletHome",
    components: {
      'acctoun-balance': AccountBalance,
      'live-news': LiveNews,
      'my-earnings': MyEarnings,
      'income-rank': IncomeRank,
			'my-team': MyTeam
    },
    data(){
      return {
      }
    },
    mounted() {
      /*let mask = this.$mask({
        onClick(){
          console.log(123)
        }
      });
      setTimeout(() => {
        mask.show();
      }, 1500)*/
     /* setTimeout(() => {
        mask.close();
      }, 3000);*/
     // setTimeout(() => {
     //    this.modalVisible = true;
     // }, 1500);
    }
  }
</script>

<style lang="scss" scoped>
@import "./wallet-home";
</style>
