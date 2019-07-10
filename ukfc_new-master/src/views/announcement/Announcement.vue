<template>
  <section class="announcement-page">
    <div class="container announcement-container">
      <div class="card">
        <div class="card-head flex justify-content-between align-items-center">
          <h4 class="card-title"><!--系统公告-->{{$t('common.announcement')}}</h4>
          <router-link to="/walletHome" class="color-999"><!--首页-->{{$t('common.home')}}</router-link>
        </div>
        <div class="card-body">
          <ul class="announcement-list" v-if="loading">
            <li class="announcement-item skeleton" v-for="item in 10" :key="item">
              <div class="announcement-top">
                <div class="announcement-title"></div>
                <p class="announcement-time"></p>
              </div>
              <div class="announcement-content"></div>
            </li>
          </ul>
          <ul class="announcement-list" v-else>
            <li class="announcement-item" v-for="item in announcementList" :key="item.id">
              <div class="announcement-top">
                <div class="announcement-title">
                  {{item.title}}
                  <!--<el-tag type="info" size="mini">已读</el-tag>
                  <el-tag size="mini">未读</el-tag>-->
                </div>
                <p class="announcement-time">{{item.time}}</p>
              </div>
              <div class="announcement-content">
                <router-link :to="`/articleDetail/notice/${item.id}`" v-html="item.content"></router-link>
              </div>
            </li>
          </ul>
          <div class="flex justify-content-end mb-20">
            <el-pagination
                class="ukfc-pagination"
                background
                layout="prev, pager, next"
                @current-change="getAnnouncementList"
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
    <boot-modal v-model="messageDetailModalVisible" :title="$t('announcementDetailModal.title')" size="lg" :backdrop="false">
      <div class="announcement-detail-modal-content">
        <div class="skeleton" v-if="!announcementDetail.id">
          <h4 class="modal-announcement-title"></h4>
          <p class="modal-announcement-time"></p>
          <div class="modal-announcement-content"></div>
        </div>
        <div v-else>
          <h4 class="modal-announcement-title">{{announcementDetail.title}}</h4>
          <p class="modal-announcement-time">{{announcementDetail.created}}</p>
          <div class="modal-announcement-content" v-html="announcementDetail.content"></div>
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
import index from './announcement-js';
export default index;
</script>

<style lang="scss" scoped>
@import "announcement.scoped";
</style>
