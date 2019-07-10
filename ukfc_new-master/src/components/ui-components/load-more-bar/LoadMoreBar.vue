<template>
  <div
      class="load-more-bar"
      :class="{loading: isLoading, 'no-more-data': noMoreData}"
      :title="title"
      @click="handleClick">
    <span v-show="isLoading">
      <i class="el-icon-loading"></i>
      {{loadingText}}
    </span>
    <i class="el-icon-arrow-down" v-show="!isLoading || (current === -1 && pages === -1) || (current < pages)"></i>
    <span class="no-more-text" v-show="(current > -1 && pages > -1) && (current >= pages)">{{noDataText}}</span>
  </div>
</template>

<script>
  export default {
    name: "LoadMoreBar",
    props: {
      current: { // 当前页码
        type: Number,
        default: -1
      },
      pages: { // 总页数
        type: Number,
        default: -1
      },
      isLoading: { // 是否正在加载数据
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '加载更多数据'
      },
      noDataText: {
        type: String,
        default: '没有更多数据了'
      },
      loadingText: {
        type: String,
        default: '加载中...'
      },
      justUi: { // 只作为ui使用
        type: Boolean,
        default: false
      }
    },
    computed: {
      noMoreData(){
        if(this.current === -1 || this.pages === -1){
          return false;
        }
        return  this.current >= this.pages;
      }
    },
    methods: {
      handleClick(){
        if(this.justUi){
          this.$emit('onClick');
          return;
        }
        if(!this.isLoading && this.current < this.pages){
          this.$emit('onClick');
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../common/css/break-points";
  /* 加载更多条 start */
  .load-more-bar{
    padding: 20px 0;
    text-align: center;
    color: #666;
    cursor: pointer;
    .el-icon-arrow-down,
    .el-icon-loading{
      font-size: 18px;
      &:hover{
        color: #000;
      }
    }
    .el-icon-loading{
      margin-right: 5px;
    }
    &.loading{
      opacity: .8;
      cursor: default;
    }
    &.no-more-data{
      cursor: default;
      color: #999;
    }
  }
  /* 加载更多条 start */
  @media (max-width: $md) {
    .load-more-bar {
      padding: 15px 0;
      .el-icon-arrow-down,
      .el-icon-loading{
        font-size: 16px;
      }
    }
  }
</style>
