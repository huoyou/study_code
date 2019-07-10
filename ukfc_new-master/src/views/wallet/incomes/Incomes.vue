<template>
  <section class="incomes">
    <el-tabs class="ukfc-tabs" v-model="activeCard">
      <!--TIP 投资收益明细,start-->
      <el-tab-pane :label="$t('assetsPage.investEarningDetail')" name="staticIncome">
        <div class="amount-total">
          <!--合计-->{{$t('common.summation')}}: {{staticIncome_totalRewardVolume || '0.00'}}
          <span class="monetary-unit">USDT</span>
        </div>
        <div class="search-panel flex flex-wrap">
          <el-select
              v-model="staticIncome_Form.futureId"
              class="ukfc-select search-input-item"
              popper-class="ukfc-select-popover"
              data-placeholder="请选择期货名称"
              :placeholder="$t('assetsPage.placeholder.futureName')">
            <el-option :label="$t('common.all')" value="">
            </el-option>
            <el-option v-for=" (item) in get_futuresList"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
          <datetime v-model="staticIncome_Form.beginDate"
                    class="theme-primary time-select-input search-input-item"
                    type="date"
                    format="yyyy-MM-dd"
                    input-class="form-control"
                    data-placeholder="奖励发放时间起点"
                    :placeholder="$t('assetsPage.placeholder.rewardTimeStart')"></datetime>
          <datetime v-model="staticIncome_Form.endDate"
                    class="theme-primary time-select-input search-input-item"
                    type="date"
                    format="yyyy-MM-dd"
                    input-class="form-control"
                    data-placeholder="奖励发放时间终点"
                    :placeholder="$t('assetsPage.placeholder.rewardTimeEnd')"></datetime>
          <div class="search-input-width">
            <div class="search-input-wrap">
              <i class="el-icon-search"></i>
              <input
                  v-model="staticIncome_Form.orderId"
                  type="text"
                  class="form-control"
                  data-placeholder="投资订单ID"
                  :placeholder="$t('assetsPage.placeholder.investOrderId')">
            </div>
          </div>
          <div class="search-btn-wrap">
            <el-button type="primary" class="search-btn" @click="queryStaticIncome_detail"><!--搜索-->{{$t('common.search')}}</el-button>
          </div>

        </div>
        <el-table
            class="ukfc-table mb-20"
            :data="staticIncome_TableData"
            v-loading="staticIncome_Loading"
            style="width: 100%">
          <el-table-column
              prop="id"
              :label="$t('assetsPage.rewardId')"
              min-width="140">
          </el-table-column>
          <el-table-column
              prop="rewardDate"
              :label="$t('assetsPage.rewardDate')"
              width="140">
          </el-table-column>
          <el-table-column
              prop="rate"
              :label="$t('assetsPage.rewardRate')"
              min-width="120">
            <template slot-scope="scope">
              {{scope.row ? ($bigMath.eval(`${scope.row.rate} * 100`).valueOf() + '%') : ''}}
            </template>
          </el-table-column>
          <el-table-column
              prop="rewardVolume"
              :label="$t('assetsPage.earning')"
              min-width="140">
          </el-table-column>
          <el-table-column
              prop="volume"
              :label="$t('assetsPage.investVolume')"
              min-width="140">
          </el-table-column>
          <el-table-column
              prop="orderId"
              :label="$t('assetsPage.investOrderId')"
              min-width="160">
          </el-table-column>
          <el-table-column
              prop="futureName"
              :label="$t('assetsPage.futureName')"
              width="140">
          </el-table-column>
          <el-table-column
              prop="created"
              :label="$t('assetsPage.releaseTime')"
              width="180">
          </el-table-column>
        </el-table>
        <div class="flex justify-content-end mb-20">
          <el-pagination
              class="ukfc-pagination"
              background
              layout="prev, pager, next"
              @current-change="staticIncome_Pagination.onCurrentChange"
              :current-page.sync="staticIncome_Pagination.current"
              :page-size="staticIncome_Pagination.size"
              :total="staticIncome_Pagination.total"
              :pager-count="5">
          </el-pagination>
        </div>
      </el-tab-pane>
      <!--end，投资收益明细-->

      <!--TIP 邀请收益明细,start-->
      <el-tab-pane :label="$t('assetsPage.inviteEarningDetail')" name="teamIncome">

        <div class="amount-total">
          <!--合计-->{{$t('common.summation')}}: {{teamIncome_totalRewardVolume || '0.00'}}
          <span class="monetary-unit">USDT</span>
        </div>
        <div class="search-panel flex flex-wrap">
          <datetime v-model="teamIncome_Form.beginDate"
                    class="theme-primary time-select-input search-input-item"
                    type="date"
                    format="yyyy-MM-dd"
                    input-class="form-control"
                    data-placeholder="奖励发放时间起点"
                    :placeholder="$t('assetsPage.placeholder.rewardTimeStart')"></datetime>
          <datetime v-model="teamIncome_Form.endDate"
                    class="theme-primary time-select-input search-input-item"
                    type="date"
                    format="yyyy-MM-dd"
                    input-class="form-control"
                    data-placeholder="奖励发放时间终点"
                    :placeholder="$t('assetsPage.placeholder.rewardTimeEnd')"></datetime>
          <input v-model="teamIncome_Form.userName" type="text"
                 class="form-control search-input-item"
                 data-placeholder="投资人姓名"
                 :placeholder="$t('assetsPage.placeholder.investUserName')">
          <div class="search-input-width">
            <div class="search-input-wrap">
              <i class="el-icon-search"></i>
              <input v-model="teamIncome_Form.orderId"
                     type="text"
                     class="form-control"
                     data-placeholder="输入投资订单ID搜索"
                     :placeholder="$t('assetsPage.placeholder.investOrderIdSearch')">
            </div>
          </div>
          <div class="search-btn-wrap">
            <el-button type="primary" class="search-btn" @click="queryTeamIncome_detail"><!--搜索-->{{$t('common.search')}}</el-button>
          </div>
        </div>
        <el-table
            class="ukfc-table mb-20"
            :data="teamIncome_TableData"
            v-loading="teamIncome_Loading"
            style="width: 100%">
          <el-table-column
              prop="id"
              :label="$t('assetsPage.rewardId')"
              min-width="120">
          </el-table-column>
          <el-table-column
              prop="rewardDate"
              :label="$t('assetsPage.rewardDate')"
              min-width="180">
          </el-table-column>
          <el-table-column
              prop="rewardLevel"
              :label="$t('assetsPage.rewardLevel')"
              min-width="100">
          </el-table-column>
          <el-table-column
              :label="$t('common.yieldRate')"
              min-width="90">
            <template v-slot="{row}">
              {{row.teamRewardRate ? ($bigMath.eval(`${row.teamRewardRate} * 100`).valueOf() + '%') : '--'}}
            </template>
          </el-table-column>
          <el-table-column
              prop="rewardVolume"
              :label="$t('assetsPage.earning')"
              min-width="120">
          </el-table-column>
          <el-table-column
              prop="userName"
              :label="$t('assetsPage.investUserName')"
              min-width="120">
          </el-table-column>
          <el-table-column
              prop="orderId"
              :label="$t('assetsPage.investOrderId')"
              min-width="120">
          </el-table-column>
          <el-table-column
              prop="userVolume"
              :label="$t('assetsPage.investVolume')"
              min-width="120">
          </el-table-column>
          <el-table-column
              prop="userVolume"
              :label="$t('assetsPage.staticEarningRate')"
              min-width="140">
            <template v-slot="{row}">
              {{row.staticRewardRate ? ($bigMath.eval(`${row.staticRewardRate} * 100`).valueOf() + '%') : '--'}}
            </template>
          </el-table-column>
          <el-table-column
              prop="created"
              :label="$t('assetsPage.releaseDate')"
              width="180">
          </el-table-column>
        </el-table>
        <div class="flex justify-content-end mb-20">
          <el-pagination
              class="ukfc-pagination"
              background
              layout="prev, pager, next"

              @current-change="teamIncome_Pagination.onCurrentChange"
              :current-page.sync="teamIncome_Pagination.current"
              :total="teamIncome_Pagination.total"
              :page-size="teamIncome_Pagination.size"
              :pager-count="5">
          </el-pagination>
        </div>
      </el-tab-pane>
      <!--end，邀请收益明细-->

      <!--TIP 贡献收益明细,start-->
      <el-tab-pane :label="$t('assetsPage.contributionEarningDetail')"  name="contributionIncome">

        <div class="amount-total">
          <!--合计-->{{$t('common.summation')}}: {{contributionIncome_totalRewardVolume || '0.00'}}
          <span class="monetary-unit">USDT</span>
        </div>
        <div class="search-panel flex flex-wrap">
          <datetime v-model="contributionIncome_Form.beginDate"
                    class="theme-primary time-select-input search-input-item"
                    type="date"
                    format="yyyy-MM-dd"
                    input-class="form-control"
                    data-placeholder="请选择时间范围起点"
                    :placeholder="$t('assetsPage.placeholder.timeStart')"></datetime>
          <datetime v-model="contributionIncome_Form.endDate"
                    class="theme-primary time-select-input search-input-item"
                    type="date"
                    format="yyyy-MM-dd"
                    input-class="form-control"
                    data-placeholder="请选择时间范围终点"
                    :placeholder="$t('assetsPage.placeholder.timeEnd')"></datetime>
          <!--<div class="search-input-width">
            <div class="search-input-wrap">
              <i class="el-icon-search"></i>
              <input v-model="contributionIncome_Form.vipOrderId" type="text" class="form-control"
                     placeholder="输入投资订单ID搜索">
            </div>
          </div>-->
          <div class="search-btn-wrap">
            <el-button type="primary" class="search-btn" @click="queryContributionIncome_detail"><!--搜索-->{{$t('common.search')}}</el-button>
          </div>
        </div>
        <el-table
            class="ukfc-table mb-20"
            :data="contributionIncome_TableData"
            v-loading="contributionIncome_Loading"
            style="width: 100%">
          <el-table-column
              prop="id"
              :label="$t('assetsPage.rewardId')"
              min-width="110">
          </el-table-column>

          <el-table-column
              prop="rewardVolume"
              :label="$t('assetsPage.earning')"
              min-width="120">
          </el-table-column>

          <el-table-column
              prop="starLevel"
              :label="$t('assetsPage.userStarLevel')"
              min-width="120">
            <template v-slot="{row}">
              {{$t("selectOption.starLevel")[row.starLevel] || '--'}}
            </template>
          </el-table-column>

          <el-table-column
              prop="rewardDate"
              :label="$t('assetsPage.rewardDate')"
              min-width="180">
          </el-table-column>

          <el-table-column
              prop="created"
              :label="$t('assetsPage.releaseDate')"
              width="180">
          </el-table-column>
        </el-table>
        <div class="flex justify-content-end mb-20">
          <el-pagination
              class="ukfc-pagination"
              background
              layout="prev, pager, next"

              @current-change="contributionIncome_Pagination.onCurrentChange"
              :current-page.sync="contributionIncome_Pagination.current"
              :total="contributionIncome_Pagination.total"
              :page-size="contributionIncome_Pagination.size"
              :pager-count="5">
          </el-pagination>
        </div>
      </el-tab-pane>
      <!--end，贡献收益明细-->
    </el-tabs>
  </section>
</template>

<script>
  import index from './incomes-js';

  export default index;
</script>

<style lang="scss" scoped>
  @import "incomes.scoped";
</style>
