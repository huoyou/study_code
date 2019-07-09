<template>
  <div class="betterScroll">
    <div class="title">
      <input type="text" />
    </div>
    <div class="box">
      <better-scroll
        class="wrapper"
        :data="data"
        :pulldown="pulldown"
        :pullup="pullup"
        :loadingStatusNum="loadingStatusNum"
        :loadingPosClass="loadingPosClass"
        @downLoadData="loadData"
        @upLoadData="loadData1"
      >
        <ul class="content">
          <li v-for="(item,index) in data" :key="index">{{item}}</li>
        </ul>
      </better-scroll>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import betterScroll from "_c/common/betterScroll";
import { setTimeout } from "timers";
var originalHeight =
  document.documentElement.clientHeight || document.body.clientHeight;
export default {
  components: {
    betterScroll
  },
  data() {
    return {
      data: [],
      pulldown: true,
      pullup: true,
      loadingStatusNum: "",
      loadingPosClass: "loading-pos"
    };
  },
  created() {},
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      for (var i = 0; i < 15; i++) {
        this.data.push(`我是第${i}个`);
      }
    },
    onresize() {
      //键盘弹起与隐藏都会引起窗口的高度发生变化
      var resizeHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      if (resizeHeight - 0 < originalHeight - 0) {
        //当软键盘弹起，在此处操作
        console.log("软键盘弹起，在此处操作");
      } else {
        //当软键盘收起，在此处操作
        console.log("当软键盘收起，在此处操作");
      }
    },
    loadData() {
      console.log("down");
      this.loadingPosClass = "loading-pos";
      this.loadingStatusNum = "loading";
      setTimeout(() => {
        this.loadingStatusNum = "downLoadingSuccess";
      }, 1000);
      setTimeout(() => {
        this.loadingStatusNum = "removeLoading";
      }, 2000);
      // requestData().then((res) => {
      //   this.data = res.data.concat(this.data)
      // })
    },
    loadData1() {
      console.log("up");
      this.loadingPosClass = "loading-pos1";
      this.loadingStatusNum = "loading";
      this.getData();
      setTimeout(() => {
        this.loadingStatusNum = "upLoadingFail";
      }, 1000);
      setTimeout(() => {
        this.loadingStatusNum = "removeLoading";
      }, 2000);
    }
  }
};
</script>
<style lang="less">
.betterScroll {
  .title {
    height: 80px;
    background-color: #aaa;
  }
  .box {
    position: relative;
    height: calc(100vh - 80px);
    .wrapper {
      position: absolute;
      top: 0; // 与bottom同理
      left: 0;
      right: 0;
      bottom: 0; // 底部有footer，没有的话设置为0
      overflow: hidden;
      .content {
        // height: calc(100vh - 79px);
        li {
          height: 50px;
          line-height: 50px;
          background-color: #eee;
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
}
</style>
