<template>
    <div class="Test">
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="标题1" name="1"></van-collapse-item>
            <van-collapse-item title="标题2" name="2">
                <div class="aaa">1111111111</div>
                <div class="aaa">2222222222</div>
                <div class="aaa">33333333333333</div>
            </van-collapse-item>
            <van-collapse-item
                    title="标题2"
                    name="3"
                    value="66"
                    icon="shop-o"
                    right-icon = "arrow-down"
            >
                内容
            </van-collapse-item>
        </van-collapse>
    </div>
  </template>
  <script>
      // import Vue from 'vue';
      // import { Collapse, CollapseItem } from 'vant';
      // Vue.use(Collapse).use(CollapseItem);
  export default {
    name: "Test",
    props: {},
    data() {
      return {
          activeName: '1'
      };
    },
    created () {
    },
    mounted() {
    },
    methods: {}
  }
  </script>
  <style lang="scss">
  .Test {
  }
      .aaa {
          height: 50px;
          border-top: 1px solid #eee;
          line-height: 50px;
          margin-left: 15px;
          &:first-child {
              border-top: 0;
          }
      }
      .van-collapse-item__content {
          padding: 0 !important;
      }
  </style>
