<template>
  <section class="invest-management">
    <div class="container invest-management-container">
      <div class="card">
        <div class="card-head">
          <h3 class="card-title"><!--投资管理-->{{$t('investManagementPage.investManagement')}}</h3>
        </div>
        <div class="card-body">
          <div class="search-panel">
            <el-select
                v-model="investForm.name"
                class="ukfc-select search-input-item"
                popper-class="ukfc-select-popover"
                data-placeholder="请选择期货名称"
                :placeholder="$t('investManagementPage.placeholder.futureNameSelect')">
              <el-option :label="$t('common.all')" value="">
              </el-option>
              <el-option v-for=" (item) in get_futuresList"
                         :key="item.name"
                         :label="item.name"
                         :value="item.name">
              </el-option>
            </el-select>
            <datetime v-model="investForm.startDate"
                      class="theme-primary search-input-item"
                      type="date"
                      format="yyyy-MM-dd"
                      input-class="form-control"
                      data-placeholder="请选择日期范围起点"
                      :placeholder="$t('investManagementPage.placeholder.dateStart')"></datetime>
            <datetime v-model="investForm.endDate"
                      class="theme-primary search-input-item"
                      type="date"
                      format="yyyy-MM-dd"
                      input-class="form-control"
                      data-placeholder="请选择日期范围终点"
                      :placeholder="$t('investManagementPage.placeholder.dateEnd')"></datetime>
            <div>
              <el-button type="primary" class="search-btn" @click="queryInvestRecord"><!--搜索-->{{$t('common.search')}}</el-button>
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
                :label="$t('investManagementPage.reservationId')">
            </el-table-column>
            <el-table-column
                prop="futureName"
                min-width="60px"
                :label="$t('investManagementPage.placeholder.futureNameSelect')" >
            </el-table-column>
            <el-table-column
                prop="amount"
                min-width="60px"
                :label="$t('investManagementPage.investAmount')">
            </el-table-column>
            <el-table-column
                min-width="90px"
                :label="$t('common.yieldRate')">
              <template slot-scope="scope">
                {{scope.row.rate ? ($bigMath.eval(`${scope.row.rate} * 100`).valueOf() + '%') : '--'}}
              </template>
            </el-table-column>
            <el-table-column
                prop="income"
                min-width="90px"
                :label="$t('common.earning')">
            </el-table-column>
            <el-table-column
                prop="status"
                min-width="90px"
                :label="$t('common.status')">
              <template slot-scope="scope">
                {{ $t("selectOption.reservationInvestStatus")[scope.row.status] }}
              </template>
            </el-table-column>
            <el-table-column
                prop="created"
                width="160"
                :label="$t('investManagementPage.reservationTime')">
            </el-table-column>
            <el-table-column
                prop="auditTime"
                width="160"
                :label="$t('common.authTime')">
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
                :page-size="investPagination.size"
                :pager-count="5">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import index from "./invest-management";
export default index;
</script>

<style lang="scss" scoped>
.invest-management{
  padding-top: 20px;
}
.invest-management-container{
  padding-left: 0;
  padding-right: 0;
  background-color: #fff;
}
</style>
