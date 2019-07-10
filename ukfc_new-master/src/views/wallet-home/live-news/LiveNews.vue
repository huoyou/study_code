<template>
  <section class="news-box container">
    <div class="clearfix">
      <div class="live-news clearfix">
        <img src="../../../assets/images/message.png" alt="" class="news-icon">
        <div class="news-list-wrap">
          <ol v-if="liveNewsLoading">
            <li class="news-item skeleton clearfix">
              <div class="news-title"></div>
              <time class="news-time"></time>
            </li>
          </ol>
          <el-carousel
              v-if="!liveNewsLoading && liveNews.length > 0"
              height="24px"
              direction="vertical"
              :autoplay="true"
              indicator-position="none"
              :interval="2000">
            <el-carousel-item v-for="item in liveNews" :key="item.id">
              <div class="news-item clearfix" :title="$t('accountBalancePage.liveNews')">
                <div class="news-title no-hover">
                  <img :src="item.countryImg" class="news-country-img" alt="">
                  <!--[Live News] -->{{item.content}}
                </div>
                <time class="news-time">{{item.created}}</time>
              </div>
            </el-carousel-item>
          </el-carousel>
          <ol v-if="!liveNewsLoading && liveNews.length === 0">
            <li class="news-item clearfix">
              <div class="news-title"><!--暂无数据~-->{{$t("common.noData")}}</div>
            </li>
          </ol>
        </div>
      </div>
      <div class="hr"></div>
      <div class="my-messages clearfix">
        <div class="news-list-wrap">
          <ol v-if="noticeListLoading">
            <li class="news-item skeleton clearfix">
              <div class="news-title"></div>
              <time class="news-time"></time>
            </li>
          </ol>
          <el-carousel
              v-if="!noticeListLoading && noticeList.length > 0"
              height="24px"
              direction="vertical"
              :autoplay="true"
              indicator-position="none"
              :interval="2000">
            <el-carousel-item v-for="item in noticeList" :key="item.id">
              <div class="news-item clearfix">
                <router-link :to="`/announcement/${item.id}`" class="news-title">
                  <!--[Live News] -->{{item.title}}
                </router-link>
                <time class="news-time">{{item.time}}</time>
              </div>
            </el-carousel-item>
          </el-carousel>
          <ol v-if="!noticeListLoading && noticeList.length === 0">
            <li class="news-item clearfix">
              <div class="news-title"><!--暂无数据~-->{{$t("common.noData")}}</div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import index from './live-news';
export default index;
</script>

<style lang="scss" scoped>
  @import "live-news.scoped";
</style>
