<template>
  <div class="wallet-records">
    <el-tabs class="ukfc-tabs" v-model="activeCard">

      <!--TIP 充值记录,start-->
      <el-tab-pane :label="$t('common.rechargeRecord')" name="recharge">
        <div class="search-panel flex flex-wrap">
          <el-select
              v-model="rechargeForm.coinId"
              class="ukfc-select coin-list-select"
              popper-class="ukfc-select-popover"
              data-placeholder="请选择币种"
              :placeholder="$t('placeholder.selectCoin')">
            <el-option v-for=" (item) in get_coinList"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
          <div class="search-input-width">
            <div class="search-input-wrap">
              <i class="el-icon-search"></i>
              <input
                  v-model="rechargeForm.txid"
                  type="text"
                  class="form-control"
                  data-placeholder="输入交易编号搜索"
                  :placeholder="$t('assetsPage.placeholder.rechargeId')">
            </div>
          </div>
          <div>
            <el-button type="primary" class="search-btn" @click="queryRechargeRecord"><!--搜索-->{{$t("common.search")}}</el-button>
          </div>
        </div>
        <el-table
            class="ukfc-table text-left mb-20"
            :data="rechargeTableData"
            v-loading="rechargeLoading"
            style="width: 100%">
          <el-table-column
              prop="id"
              min-width="90px"
              :label="$t('common.rechargeId')">
          </el-table-column>
          <el-table-column
              prop="coinName"
              :label="$t('common.coinId')">
          </el-table-column>
          <el-table-column
              prop="volume"
              :label="$t('common.rechargeVolume')">
          </el-table-column>
          <el-table-column
              prop="txid"
              :label="$t('assetsPage.texid')">
          </el-table-column>
          <el-table-column
              prop="blockNumber"
              :label="$t('assetsPage.blockNumber')">
          </el-table-column>
          <el-table-column
              prop="receiveAddress"
              :label="$t('common.receiveAddress')">
          </el-table-column>
          <el-table-column
              prop="transferAddress"
              :label="$t('common.transferAddress')">
          </el-table-column>
          <el-table-column
              prop="created"
              :label="$t('common.rechargeTime')">
          </el-table-column>
          <el-table-column
              prop="status"
              :label="$t('common.status')">
            <template slot-scope="scope">
              {{zhCN.selectOption.rechargeRecordStatus[scope.row.status]}}
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-content-end mb-20">
          <el-pagination
              class="ukfc-pagination"
              background
              layout="prev, pager, next"

              @current-change="rechargePagination.onCurrentChange"
              :current-page.sync="rechargePagination.current"
              :total="rechargePagination.total"
              :page-size="rechargePagination.size"
              :pager-count="5">
          </el-pagination>
        </div>
      </el-tab-pane>
      <!--end，充值记录-->

      <!--TIP 提现记录,start-->
      <el-tab-pane :label="$t('common.withdrawRecord')" name="withdraw">
        <div class="search-panel flex flex-wrap">
          <el-select
              v-model="withdrawForm.coinId"
              class="ukfc-select coin-list-select"
              popper-class="ukfc-select-popover"
              data-placeholder="请选择币种"
              :placeholder="$t('placeholder.selectCoin')">
            <el-option v-for=" (item) in get_coinList"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id"
            >
            </el-option>

          </el-select>
          <div class="search-input-width">
            <div class="search-input-wrap">
              <i class="el-icon-search"></i>
              <input v-model="withdrawForm.txid" type="text" class="form-control" :placeholder="$t('assetsPage.placeholder.rechargeId')">
            </div>
          </div>
          <div>
            <el-button type="primary" class="search-btn" @click="queryWithdrawRecord">搜索</el-button>
          </div>
        </div>
        <el-table
            class="ukfc-table text-left mb-20"
            :data="withdrawTableData"
            v-loading="withdrawLoading"
            style="width: 100%">
          <el-table-column
              prop="id"
              min-width="90px"
              :label="$t('common.rechargeId')">
          </el-table-column>
          <el-table-column
              prop="coinName"
              :label="$t('common.coinId')">
          </el-table-column>
          <el-table-column
              prop="volume"
              :label="$t('common.withdrawVolume')">
          </el-table-column>
          <el-table-column
              prop="fee"
              :label="$t('common.fee')">
          </el-table-column>
          <el-table-column
              prop="txid"
              :label="$t('assetsPage.texid')">
          </el-table-column>
          <el-table-column
              prop="blockNum"
              :label="$t('assetsPage.blockNumber')">
          </el-table-column>
          <el-table-column
              prop="receiveAddress"
              :label="$t('common.receiveAddress')">
          </el-table-column>
          <el-table-column
              prop="transferAddress"
              :label="$t('common.transferAddress')">
          </el-table-column>
          <el-table-column
              prop="created"
              min-width="140px"
              :label="$t('common.rechargeTime')">
          </el-table-column>
          <el-table-column
              prop="status"
              :label="$t('common.status')">
            <template slot-scope="scope">
              {{zhCN.selectOption.withdrawRecordStatus[scope.row.status]}}
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-content-end mb-20">
          <el-pagination
              class="ukfc-pagination"
              background
              layout="prev, pager, next"

              @current-change="withdrawPagination.onCurrentChange"
              :current-page.sync="withdrawPagination.current"
              :total="withdrawPagination.total"
              :page-size="withdrawPagination.size"
              :pager-count="5">
          </el-pagination>
        </div>
      </el-tab-pane>
      <!--end，提现记录-->

      <!--TIP 投资记录,start-->
      <!--<el-tab-pane label="投资记录" name="invest">
        <div class="search-panel flex flex-wrap">
          <el-select
              v-model="investForm.compoundInterest"
              class="ukfc-select coin-list-select mb-20"
              popper-class="ukfc-select-popover"
              placeholder="是否复利">
            <el-option
                label="复利"
                value="1">
            </el-option>
            <el-option
                label="非复利"
                value="0">
            </el-option>
          </el-select>
          <el-select
              v-model="investForm.vipCode"
              class="ukfc-select coin-list-select mb-20"
              popper-class="ukfc-select-popover"
              placeholder="会员级别">
            <el-option v-for=" (item) in get_userVipList"
                       :key="item.code"
                       :label="item.name"
                       :value="item.code">
            </el-option>
          </el-select>

          <datetime v-model="investForm.startDate"
                    class="theme-primary time-select-input mb-20 "
                    type="date"
                    format="yyyy-MM-dd"
                    input-class="form-control"
                    placeholder="请选择日期范围起点"></datetime>
          <datetime v-model="investForm.endDate"
                    class="theme-primary time-select-input mb-20 "
                    type="date"
                    format="yyyy-MM-dd"
                    input-class="form-control"
                    placeholder="请选择日期范围终点"></datetime>
          <div>
            <el-button type="primary" class="search-btn" @click="queryInvestRecord">搜索</el-button>
          </div>
        </div>
        <el-table
            class="ukfc-table text-left mb-20"
            :data="investTableData"
            v-loading="investLoading"
            style="width: 100%">
          <el-table-column
              prop="id"
              min-width="90px"
              label="交易编号">
          </el-table-column>
          <el-table-column
              prop="vipName"
              min-width="90px"
              label="投资级别">
          </el-table-column>
          <el-table-column
              prop="coinName"
              min-width="60px"
              label="币种">
          </el-table-column>
          <el-table-column
              min-width="90px"
              label="日收益率">
            <template slot-scope="scope">
              {{scope.row.rate * 100 + '%'}}
            </template>
          </el-table-column>
          <el-table-column
              min-width="90px"
              label="投资期限">
            <template slot-scope="scope">
              {{scope.row.freezeDay + '天'}}
            </template>
          </el-table-column>
          <el-table-column
              prop="amount"
              min-width="90px"
              label="投资金额">
          </el-table-column>
          <el-table-column
              prop="compoundInterest"
              min-width="90px"
              label="是否复利">
            <template slot-scope="scope">
              {{ zhCN.selectOption.YesOrNo[scope.row.compoundInterest] }}
            </template>
          </el-table-column>
          <el-table-column
              prop="income"
              min-width="90px"
              label="累计收益">
          </el-table-column>
          <el-table-column
              prop="withdrawStatus"
              min-width="90px"
              label="提现状态">
            <template slot-scope="scope">
              {{ zhCN.selectOption.investWithdrawStatus[scope.row.withdrawStatus] }}
            </template>
          </el-table-column>
          <el-table-column
              prop="withdrawVolume"
              min-width="85px"
              label="提现数量">
          </el-table-column>
          <el-table-column
              prop="status"
              min-width="70px"
              label="状态">
            <template slot-scope="scope">
              {{ zhCN.selectOption.investStatus[scope.row.status] }}
            </template>
          </el-table-column>
          <el-table-column
              prop="created"
              min-width="180px"
              label="投资时间">
          </el-table-column>

        </el-table>
        <div class="flex justify-content-end mb-20">
          <el-pagination
              class="ukfc-pagination"
              background
              layout="prev, pager, next"

              @current-change="investPagination.onCurrentChange"
              :current-page.sync="investPagination.current"
              :total="investPagination.total"
              :pager-count="5">
          </el-pagination>
        </div>
      </el-tab-pane>-->
      <!--end，投资记录-->
    </el-tabs>
  </div>
</template>

<script>
  import index from './wallet-records';

  export default index;
</script>

<style lang="scss" scoped>
  @import "wallet-records.scoped";
</style>
