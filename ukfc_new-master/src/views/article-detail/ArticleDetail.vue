<template>
  <section class="article-detail-page">
    <div class="container article-detail-container">
      <div class="card">
        <!--<div class="card-head">
          <a href="###" class="color-999">返回</a>
        </div>-->
        <div class="card-body">
          <h2 class="article-title">
            {{article.title || '--'}}
            <el-button type="primary" plain size="medium">{{article.categoryName || '--'}}</el-button>
          </h2>
          <!-- <div class="article-author">
            <span>作者：米明</span>
            <span>来源：UKF</span>
            <span>编辑：USDE小迷妹</span>
          </div> -->
          <div class="article-time">{{article.created || '--'}}</div>
          <div class="hr"></div>
					
          <div class="article-content skeleton" v-if="!article.content"></div>
          <div class="article-content" v-else v-html="article.content"></div>
          <!-- <div class="text-right mb-20">
            <el-button type="primary" plain>上一篇</el-button>
            <el-button type="primary">下一篇</el-button>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import index from './article-detail.js';
	export default index;
</script>

<style lang="scss" scoped>
@import "article-detail.scoped";
</style>
