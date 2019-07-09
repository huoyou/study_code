<template>
  <!--该节点需要定位，内容以此节点的盒模型为基础滚动。另外，该节点的背景色配合上拉加载、下拉刷新的UI，正常情况下不可作它用。-->
  <div ref="wrapper" class="better-scroll-root" :style="{height: wrapperHeight+'px'}">
    <!--如果需要调滚动内容的背景色，则改该节点的背景色-->
    <div class="content-bg better-scroll-container">
      <!--不太需要，待优化-->
      <div>
        <div v-if="pulldown" class="pulldown-tip">
          <i class="pull-icon indexicon icon-pull-down" :class="[pulldownTip.rotate]"></i>
          <span class="tip-content">{{pulldownTip.text}}</span>
        </div>
        <div v-show="loadingStatus.showIcon || loadingStatus.status" :class="loadingPosClass">
          <div v-show="loadingStatus.showIcon" class="loading-container">
            <div class="cube">
              <div class="side side1"></div>
              <div class="side side2"></div>
              <div class="side side3"></div>
              <div class="side side4"></div>
              <div class="side side5"></div>
              <div class="side side6"></div>
            </div>
          </div>
          <span class="loading-connecting">{{loadingStatus.status}}</span>
        </div>
        <div v-if="pullup" class="pullup-tip">
          <i class="pull-icon indexicon icon-pull-down" :class="[pullupTip.rotate]"></i>
          <span class="tip-content">{{pullupTip.text}}</span>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 3
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: true
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: true
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: true
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    },

    pullDownRefresh: {
      type: Object,
      default: function() {
        return {
          threshold: 50,
          stop: 20
        };
      }
    },
    /**
     * 是否启用下拉刷新的交互
     */
    pulldownUI: {
      type: Boolean,
      default: true
    },
    /**
     * 是否启用上拉加载的交互
     */
    pullupUI: {
      type: Boolean,
      default: true
    },
    loadingStatusNum: {
      type: String,
      default: ""
    },
    loadingPosClass: {
      type: String,
      default: "pulldown-tip"
    },
    wrapperHeight: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      loadingConnecting: false,
      pulldownTip: {
        text: "下拉刷新", // 松开立即刷新
        rotate: "" // icon-rotate
      },
      pullupTip: {
        text: "上拉加载", // 松开立即刷新
        rotate: "" // icon-rotate
      },
      loadingStatus: {
        showIcon: false,
        status: ""
      }
    };
  },
  mounted() {
    // 保证在DOM渲染完毕后初始化better-scroll
    this.$nextTick(() => {
      this._initScroll();
    });
    // setTimeout(() => {
    //   this._initScroll();
    // }, 20);
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click, //默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件
        scrollX: this.scrollX, //当设置为 true 的时候，可以开启纵向滚动
        mouseWheel: {
          // pc端同样能滑动
          speed: 0.1,
          invert: false
        },
        pullUpLoad: {
          threshold: -50 // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，
        }
        // useTransition: false,
      });
      console.log('this.scroll',this.scroll)
      // 是否派发滚动事件
      if (this.listenScroll || this.pulldown || this.pullup) {
        let me = this;
        this.scroll.on("scroll", pos => {
          if (this.listenScroll) {
            me.$emit("scroll", pos);
          }
          if (this.pulldown) {
            // 下拉动作
            if (pos.y > 50) {
              this.pulldownTip = {
                text: "松开立即刷新",
                rotate: "icon-rotate"
              };
            } else {
              this.pulldownTip = {
                text: "下拉刷新", // 松开立即刷新
                rotate: "" // icon-rotate
              };
            }
          }

          if (this.pullup) {
            // 上拉动作
            if (this.scroll.y <= this.scroll.maxScrollY + 50) {
              this.pullupTip = {
                text: "上拉加载",
                rotate: "icon-rotate"
              };
            } else {
              this.pullupTip = {
                text: "松开立即刷新", // 松开立即刷新
                rotate: "" // icon-rotate
              };
            }
          }
        });
      }

      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          // 滚动到底部
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit("upLoadData");
          }
        });
      }

      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on("touchend", pos => {
          // 下拉动作
          if (pos.y > 50) {
            // setTimeout(() => {
            //   // 重置提示信息
            //   this.pulldownTip = {
            //     text: "下拉刷新", // 松开立即刷新
            //     rotate: "" // icon-rotate
            //   };
            // }, 600);
            this.$emit("downLoadData");
          }
        });
      }

      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on("beforeScrollStart", () => {
          this.$emit("beforeScroll");
        });
      }
    },
    disable() {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable();
    },
    enable() {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable();
    },
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data() {
    //   this.scroll.finishPullDown();
    //   this.scroll.finishPullUp();
    //   this.refresh();
        setTimeout(() => {
          this.refresh();
        }, this.refreshDelay);
    },
    loadingStatusNum(newVal, oldVal) {
      switch (newVal) {
        case "loading":
          this.loadingStatus.showIcon = true;
          this.loadingStatus.status = "正在加载...";
          break;
        case "downLoadingSuccess":
          this.loadingStatus.showIcon = false;
          this.loadingStatus.status = "刷新成功";
          break;
        case "downLoadingFail":
          this.loadingStatus.showIcon = false;
          this.loadingStatus.status = "刷新失败";
          break;
        case "upLoadingSuccess":
          this.loadingStatus.showIcon = false;
          this.loadingStatus.status = "加载成功";
          break;
        case "upLoadingFail":
          this.loadingStatus.showIcon = false;
          this.loadingStatus.status = "加载失败";
          break;
        case "removeLoading":
          this.loadingStatus.showIcon = false;
          this.loadingStatus.status = "";
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less">
@cube-size: 10px;
.better-scroll-root {
  background-color: rgba(7, 17, 27, 0.7);
  height: 100%;
  .content-bg {
    background-color: #fff;
  }
  .loading-pos {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 35px;
    color: #fcfcfc;
    text-align: center;
    z-index: 2000;
  }
  .loading-pos1 {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 35px;
    color: #fcfcfc;
    text-align: center;
    z-index: 2000;
  }
  .pulldown-tip {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 35px;
    color: #fcfcfc;
    text-align: center;
    z-index: 2000;
    background-color: rgba(7, 17, 27, 0.7);
  }
  .pullup-tip {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 35px;
    color: #fcfcfc;
    text-align: center;
    z-index: 2000;
  }
  .loading-pos {
    background-color: rgba(7, 17, 27, 0.7);
  }
  .loading-pos1 {
    background-color: rgba(7, 17, 27, 0.7);
  }
  .pulldown-tip {
    top: -50px;
    height: 50px;
    line-height: 50px;
    z-index: 1;
  }
  .pullup-tip {
    bottom: -50px;
    height: 50px;
    line-height: 50px;
    z-index: 1;
  }
  .pull-icon {
    position: absolute;
    top: 0;
    left: 30%;
    color: #a5a1a1;
    font-size: 1.5em;
    transition: all 0.15s ease-in-out;
  }
  .pull-icon.icon-rotate {
    transform: rotate(180deg);
  }

  .loading-container {
    position: absolute;
    height: @cube-size;
    width: @cube-size;
    left: 35%;
    top: 50%;
    transform: translate(-50%, -50%);
    perspective: 40px;
  }
  .loading-connecting {
    line-height: 35px;
  }
  .cube {
    height: @cube-size;
    width: @cube-size;
    transform-origin: 50% 50%;
    transform-style: preserve-3d;
    animation: rotate 3s infinite ease-in-out;
  }
  .side {
    position: absolute;
    height: @cube-size;
    width: @cube-size;
    border-radius: 50%;
  }
  .side1 {
    background: #4bc393;
    transform: translateZ(@cube-size);
  }
  .side2 {
    background: #ff884d;
    transform: rotateY(90deg) translateZ(@cube-size);
  }
  .side3 {
    background: #32526e;
    transform: rotateY(180deg) translateZ(@cube-size);
  }
  .side4 {
    background: #c53fa3;
    transform: rotateY(-90deg) translateZ(@cube-size);
  }
  .side5 {
    background: #ffcc5c;
    transform: rotateX(90deg) translateZ(@cube-size);
  }
  .side6 {
    background: #ff6b57;
    transform: rotateX(-90deg) translateZ(@cube-size);
  }
  @keyframes rotate {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: rotateX(360deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
}
</style>