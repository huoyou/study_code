<template>
  <boot-modal
      v-model="modalVisible"
      size="lg"
      :title="$t('addressBookPage.chooseAddress')"
      @open="onModalOpen"
      @close="onModalClose">
    <div class="choose-address-modal-content">
      <div class="search-panel">
        <el-select
            v-model="form.coinId"
            class="ukfc-select search-input-item"
            popper-class="ukfc-select-popover"
            data-placeholder="请选择币种"
            :placeholder="$t('placeholder.selectCoin')">
          <el-option v-for=" (item) in get_coinList"
                     :key="item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
        <!--<input type="text" class="form-control search-input-item" placeholder="请输入名称">-->
        <div>
          <el-button type="primary" class="search-btn" @click="searchBtnClick">
            <!--搜索-->{{$t('common.search')}}
          </el-button>
        </div>
      </div>
      <div class="data-table"
           v-loading="loading"
           :element-loading-text="$t('common.dataLoading')">
        <el-table
            class="ukfc-table text-left mb-20"
            :data="addressList"
            height="300"
            style="width: 100%">
          <el-table-column
              prop="coinName"
              min-width="90"
              :label="$t('common.coinId')">
            <!-- <template v-slot="{row}">
               <img src="../../assets/images/temp/user-avater.png" alt="" class="coin-img">
               <span class="coin-name">BTC</span>
             </template>-->
          </el-table-column>
          <el-table-column
              prop="name"
              :label="$t('addressBookPage.name')"
              min-width="140">
          </el-table-column>
          <el-table-column
              prop="address"
              :label="$t('addressBookPage.address')"
              min-width="200">
          </el-table-column>
          <!--<el-table-column
              prop="remark"
              label="备注"
              min-width="120">
          </el-table-column>-->
          <el-table-column
              prop="blockNumber"
              :label="$t('common.operate')"
              min-width="110">
            <template v-slot="{row}">
              <el-button
                  type="primary"
                  size="small"
                  v-show="choosedAddress.id !== row.id"
                  @click="chooseAddress(row, 1)"><!--选择-->{{$t('common.choose')}}</el-button>
              <el-button
                  type="primary"
                  size="small"
                  plain v-show="choosedAddress.id === row.id"
                  @click="chooseAddress(row, 0)"><!--取消选择-->{{$t('common.cancelChoose')}}</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!--<div class="flex justify-content-end mb-20">
          <el-pagination
              class="ukfc-pagination"
              background
              layout="prev, pager, next"
              @current-change="onCurrentChange"
              :current-page.sync="pageData.current"
              :page-size="pageData.size"
              :total="pageData.total"
              :pager-count="5">
          </el-pagination>
        </div>-->
      </div>
      <div class="text-right">
        <el-button type="default"><!--取消-->{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="confirmBtnClick"><!--确定-->{{$t('common.confirm')}}</el-button>
      </div>
    </div>
  </boot-modal>
</template>

<script>
import index from './choose-address-modal';
export default index;
</script>

<style lang="scss" scoped>
@import "../../../common/css/break-points";
.choose-address-modal-content{
  padding: 0 30px;
}
@media (max-width: $lg) {
  .choose-address-modal-content{
    padding: 0 15px;
  }
}
</style>
