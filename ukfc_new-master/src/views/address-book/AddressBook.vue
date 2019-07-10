<template>
  <section class="address-book">
    <div class="container address-book-container">
      <div class="top-title">
        <h2 class="title-text"><!--地址簿-->{{$t('addressBookPage.addresBook')}}</h2>
        <router-link to="/walletHome" class="go-home-link"><!--首页-->{{$t('common.home')}}</router-link>
      </div>
      <div class="search-panel">
        <el-select
            v-model="coinId"
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
          <el-button type="primary" class="search-btn" @click="searchBtnClick"><!--搜索-->{{$t('common.search')}}</el-button>
          <el-button
              type="danger"
              plain
              icon="el-icon-plus"
              class="search-panel-btn add-address-btn"
              @click="addAddressModalVisible = true"><!--添加地址-->{{$t('addressBookPage.addAddress')}}</el-button>
        </div>
      </div>
      <div class="data-table"
           v-loading="loading"
           :element-loading-text="$t('common.dataLoading')">
        <el-table
            class="ukfc-table text-left mb-20"
            :data="addressList"
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
          <el-table-column
              prop="remark"
              :label="$t('common.remark')"
              min-width="120">
          </el-table-column>
          <el-table-column
              :label="$t('common.operate')"
              min-width="180">
            <template v-slot="{row}">
              <el-button class="operate-btn" type="info" size="small" @click="updateBtnClick(row)">
                <!--修改-->{{$t('common.update')}}
              </el-button>
              <el-button class="operate-btn" type="danger" size="small" @click="delBtnClick(row)">
                <!--删除-->{{$t('common.delete')}}
              </el-button>
              <el-button class="operate-btn" type="primary" size="small" @click="transferOutModalVisible = true">
                <!--转出-->{{$t('common.transferOut')}}
              </el-button>
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
    </div>

    <!--转出弹窗 start-->
    <transfer-out :show.sync="transferOutModalVisible"></transfer-out>
    <!--转出弹窗 end-->

    <!--添加地址弹窗 start-->
    <add-address-modal :show.sync="addAddressModalVisible" @addressAddSuccess="onAddressAddSuccess"></add-address-modal>
    <!--添加地址弹窗 end-->

    <!--修改地址弹窗 start-->
    <update-address-modal
        :show.sync="updateAddressModalVisible"
        :external-data="updateAddressForm"
        @addressUpdateSuccess="onAddressUpdateSuccess"></update-address-modal>
    <!--修改地址弹窗 end-->
  </section>
</template>

<script>
import index from './address-book';
export default index;
</script>

<style lang="scss" scoped>
@import "address-book.scoped";
</style>
