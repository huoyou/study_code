<template>
  <section class="help-center-page">
    <div class="container help-center-container clearfix">
      <div class="article-title-list clearfix">
        <div class="clear-margin" v-if="articleLoading">
          <div class="article-title skeleton" v-for="item in 8" :key="item"></div>
        </div>
        <div class="clear-margin" v-else-if="!articleLoading && articleList.length > 0">
          <router-link
              class="article-title"
              v-for="item in articleList"
              :key="item.id"
              :to="`/helpCenter/${item.id}`"
              active-class="active">{{item.title}}</router-link>
        </div>
      </div>
      <div class="no-article-list" v-if="!articleLoading && articleList.length === 0">暂无文章~</div>
      <div class="article-detail">
        <div class="article-loading" v-if="!articleDetail.id">文章加载中...</div>
        <article v-else v-html="articleDetail.content"></article>
      </div>
    </div>
  </section>
</template>

<script>
import index from "./help-center-js";
export default index;
</script>

<style lang="scss" scoped>
@import "help-center.scoped";
</style>
