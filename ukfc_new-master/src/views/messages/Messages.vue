<template>
  <section class="messages-page">
    <div class="container message-container">
      <div class="card">
        <div class="card-head flex justify-content-between align-items-center">
          <h4 class="card-title"><!--消息中心-->{{$t('messagesPage.title')}}</h4>
          <router-link to="/walletHome" class="color-999"><!--首页-->{{$t('common.home')}}</router-link>
        </div>
        <div class="card-body">
          <!--<div class="search-panel">
            <el-select
                v-model="form.type"
                class="ukfc-select search-input-item"
                popper-class="ukfc-select-popover"
                placeholder="交易类型">
              <el-option label="转入" value="转入"></el-option>
              <el-option label="转出" value="转出"></el-option>
            </el-select>
            <datetime v-model="form.startDate"
                      class="theme-primary search-input-item"
                      type="date"
                      format="yyyy-MM-dd"
                      input-class="form-control"
                      placeholder="请选择日期范围起点"></datetime>
            <datetime v-model="form.endDate"
                      class="theme-primary search-input-item"
                      type="date"
                      format="yyyy-MM-dd"
                      input-class="form-control"
                      placeholder="请选择日期范围终点"></datetime>
            <div>
              <el-button type="primary" class="search-btn">搜索</el-button>
            </div>
          </div>
          <div class="hr"></div>-->
          <ul class="message-list" v-if="loading">
            <li class="message-item skeleton" v-for="item in 10" :key="item">
              <div class="message-top">
                <div class="message-title"></div>
                <p class="message-time"></p>
              </div>
              <div class="message-content"></div>
              <div class="flex justify-content-end">
                <div class="message-item-btn"></div>
                <div class="message-item-btn"></div>
              </div>
            </li>
          </ul>
          <ul class="message-list" v-else>
            <li class="message-item" v-for="item in messageList" :key="item.id">
              <div class="message-top">
                <div class="message-title">
                  {{item.title}}
                  <el-tag type="info" size="mini" v-if="item.status === 1"><!--已读-->{{$t('common.readed')}}</el-tag>
                  <el-tag size="mini" v-else><!--未读-->{{$t('common.unRead')}}</el-tag>
                </div>
                <p class="message-time">{{formatDate(item.created)}}</p>
              </div>
              <div class="message-content" v-html="item.content"></div>
              <div class="flex justify-content-end">
                <el-button
                    type="primary"
                    size="mini"
                    plain
                    v-if="item.status === 0"
                    @click="setMessageReaded(item)">
                  <!--标为已读-->{{$t('messagesPage.setReaded')}}
                </el-button>
                <el-button type="primary" size="mini" @click="viewDetail(item)">
                  <!--查看全部-->{{$t('common.checkAll')}}
                </el-button>
              </div>
            </li>
          </ul>

          <div class="flex justify-content-end mb-20">
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
          </div>
        </div>
      </div>
    </div>

    <!--查看详情modal start-->
    <boot-modal v-model="messageDetailModalVisible" :title="$t('common.checkDetail')" size="lg" :backdrop="false">
      <div class="message-detail-modal-content">
        <div class="skeleton" v-if="!messageDetail.id">
          <h4 class="modal-message-title"></h4>
          <p class="modal-message-time"></p>
          <div class="modal-message-content"></div>
        </div>

        <div v-else>
          <h4 class="modal-message-title">{{messageDetail.title}}</h4>
          <p class="modal-message-time">{{messageDetail.created}}</p>
          <div class="modal-message-content" v-html="messageDetail.content"></div>
        </div>

        <div class="text-right mt-15">
          <el-button type="default" @click="messageDetailModalVisible = false"><!--关闭-->{{$t('common.close')}}</el-button>
        </div>
      </div>
    </boot-modal>
    <!--查看详情modal end-->
  </section>
</template>

<script>
import index from './messages.js';
export default index;
</script>

<style lang="scss" scoped>
@import "messages.scoped";
</style>
