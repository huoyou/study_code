<template>
  <boot-modal
      v-model="modalVisible"
      size="lg"
      title="如何获取收益？"
      @closed="onModalClosed">
    <div class="get-income-guide-content">
      <div class="alert-wrap">
        <div class="alert-text">收益主要来源于投资收益、邀请收益和贡献收益。</div>
      </div>
      <el-tabs v-model="activeTab" class="ukfc-tabs">
        <el-tab-pane label="投资收益" name="first">
          <div class="tabs-content">
            <p>获取投资收益指南</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="邀请收益" name="second">
          <div class="tabs-content">
            <p>获取邀请收益指南</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="贡献收益" name="third">
          <div class="tabs-content">
            <p>获取贡献收益指南</p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </boot-modal>
</template>

<script>
  export default {
    name: "GetIncomeGuideModal",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        modalVisible: this.show,
        activeTab: 'first'
      }
    },
    watch: {
      show(newVal){
        this.modalVisible = newVal;
      }
    },
    methods: {
      // 弹窗关闭事件
      onModalClosed(){
        this.$emit('update:show', false);
      }
    }
  }
</script>

<!--<style lang="scss">
  @import "get-income-guide";
</style>-->
<style lang="scss" scoped>
@import "get-income-guide.scoped";
</style>
