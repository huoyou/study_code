<template>
  <div class="header-bar">
    <sider-trigger :collapsed="collapsed"
                   icon="md-menu"
                   @on-change="handleCollpasedChange"></sider-trigger>
    <!-- <custom-bread-crumb show-icon style="margin-left: 30px;" :list="breadCrumbList"></custom-bread-crumb> -->
    <div class="custom-content-con">
      <slot></slot>
    </div>

    <!--<div style="float: right;margin-right: 25%">
      <a href="javasrcipt:void(0)" style="font-size: 25px;">
        智能风控平台
      </a>
    </div>-->
  </div>

</template>
<script>
  import siderTrigger from './sider-trigger.vue'
  import customBreadCrumb from './custom-bread-crumb.vue'
  export default {
    name: 'HeaderBar',
    components: {
      siderTrigger,
      customBreadCrumb
    },
    props: {
      collapsed: Boolean
    },
    computed: {
      breadCrumbList() {
        return this.$store.state.app.breadCrumbList
      }
    },
    methods: {
      handleCollpasedChange(state) {
        this.$emit('on-coll-change', state)
      }
    }
  }
</script>
<style lang="less">
  .header-bar {
    width: 100%;
    height: 100%;
    position: relative;
    .custom-content-con {
      float: right;
      height: auto;
      padding-right: 20px;
      line-height: 64px;
      & > * {
        float: right;
      }
    }
  }
</style>

