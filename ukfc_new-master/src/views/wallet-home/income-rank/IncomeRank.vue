<template>
  <section class="income-rank" ref="income_rank">
    <h4 class="caption"><!--全球收益排名-->{{$t("accountBalancePage.globalRevenueRank")}}</h4>
    <ol class="ranking-list skeleton mb-20" v-if="loading">
      <li class="ranking-item" v-for="index in 10" :key="'skeleton_' + index">
        <div class="fl">
          <div class="skeleton-div1"></div>
        </div>
        <div class="overflow">
          <div class="skeleton-div2"></div>
        </div>
      </li>
    </ol>
    <!--<el-tabs class="income-rank-tabs" v-model="activeCard" tab-position="bottom" v-else>
      <el-tab-pane :name="'card' + index" v-for="(item, index) in rankData" :key="index">
        <div slot="label">
          <span class="tab-slot-label"></span>
        </div>
        <ol class="ranking-list">
          <li class="ranking-item"
              :class="{'rank-flag-img': lankItem.lank < 4}"
              v-for="(lankItem, index2) in item"
              :key="lankItem.userName + index2">
            <div class="fl">
              <img src="../../../assets/images/rank-first.png" v-if="lankItem.lank === 1" class="rank-img">
              <img src="../../../assets/images/rank-second.png" v-else-if="lankItem.lank === 2" class="rank-img">
              <img src="../../../assets/images/rank-third.png" v-else-if="lankItem.lank === 3" class="rank-img">
              <i class="rank-num" v-else>{{lankItem.lank}}</i>
              <img :src="lankItem.countryImg" alt="" class="country-img">
            </div>
            <div class="overflow pt-5">
              <span class="country-name">{{lankItem.userName}}</span>
              <span class="amount">{{lankItem.reward}} UTF</span>
            </div>
          </li>
        </ol>
      </el-tab-pane>
    </el-tabs>-->
    <ol class="ranking-list" ref="ranking_list" v-else>
      <li class="ranking-item"
          :class="{'rank-flag-img': lankItem.lank < 4}"
          v-for="(lankItem, index2) in rankData"
          :key="lankItem.userName + index2">
        <div class="fl">
          <img src="../../../assets/images/rank-first.png" v-if="lankItem.lank === 1" class="rank-img">
          <img src="../../../assets/images/rank-second.png" v-else-if="lankItem.lank === 2" class="rank-img">
          <img src="../../../assets/images/rank-third.png" v-else-if="lankItem.lank === 3" class="rank-img">
          <i class="rank-num" v-else>{{lankItem.lank}}</i>
          <img :src="lankItem.countryImg" alt="" class="country-img">
        </div>
        <div class="overflow pt-5">
          <span class="country-name">{{lankItem.userName}}</span>
          <span class="amount">{{lankItem.reward}} USDT</span>
        </div>
      </li>
    </ol>
    <p class="people-worldwide">
      <span class="people-numbers">{{totalUsers < 0 ? '--' : (totalUsers || '0.00')}}</span>
       <!--(人)&lt;!&ndash;全球总用户&ndash;&gt;-->
      ({{$t("accountBalancePage.person")}}){{$t("accountBalancePage.globalTotalUser")}}
    </p>
  </section>
</template>

<script>
  import {supportApi} from "../../../common/api/supportApi";
  import {Roll} from "../../../common/js/roll";

  export default {
    name: "IncomeRank",
    data(){
      return {
        activeCard: 'card0',
        loading: true,
        rankData: [], // 排名数据
        totalUsers: -1, // 全球总用户
        roll: null
      }
    },
    methods: {
      // 获取排名数据
      async getRankData(){
        let res = await supportApi.getGlobalRank();
        let data = res.data;
        this.loading = false;
        let arr = [];
        let len = data.length;
        data.forEach((item, index) => {
          item.lank = index + 1;
        });
        if(len <= 10){
          arr = data;
        }else{
          /*arr.push(data.splice(0, 5));
          len = data.length;
          arr.push(data.splice(0, len >= 5 ? 5 : len));*/
          arr= data.splice(0, 10);
        }
        this.rankData = arr;
        this.$nextTick(() => {
          this.$refs.ranking_list.offsetWidth;
        });

        //this.$forceUpdate();
      },
      // 获取全球总用户
      async getTotalUsers(){
        let res = await supportApi.getTotalUsers();
        this.totalUsers = res.data;
      }
    },
    mounted() {
      let roll = new Roll({
        offsetTop: 50
      });
      let that = this;
      roll.push(this.$refs.income_rank, function (context, done) {
        that.getRankData();
        that.getTotalUsers();
        done(this, context);
      });
      this.roll = roll;
    },
    beforeDestroy() {
      this.roll.destroy();
      this.roll = null;
    }
  }
</script>

<style lang="scss">
@import "income-rank";
</style>
<style lang="scss" scoped>
@import "income-rank.scope";
</style>
