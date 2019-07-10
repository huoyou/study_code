<template>
  <boot-modal
      v-model="modalVisible"
      size="lg"
      :center="true"
      title="邀请好友"
      @closed="onModalClosed">
    <div class="my-info clearfix">
      <img src="../../../../assets/images/temp/user-avater.png" class="my-avatar" alt="">
      <div class="overflow relative">
        <h6 class="my-username">佛系小韭菜</h6>
        <el-rate
            class="ukfc-el-rate"
            v-model="value"
            disabled>
        </el-rate>
        <div class="my-invite-code">
          <p class="invite-code-label">我的推荐码</p>
          <p class="invite-code-value">GTDAJK535</p>
        </div>
      </div>
    </div>
    <div class="hr"></div>
    <div class="content-bottom">
      <div class="qrcode-wrap">
        <div class="qrcode-box"></div>
      </div>
      <p class="text">我在USD钱包每天赚收益，来不及解释了，快上车！</p>
      <div class="text-center">
        <el-button type="default" round class="bottom-btn save-img-btn">保存图片</el-button>
        <el-button type="primary" class="bottom-btn primary-gradual medium">分析给好友</el-button>
      </div>
    </div>
  </boot-modal>
</template>

<script>
import index from "./invite-friends";
export default index;
</script>

<style lang="scss" scoped>
@import "invite-friends.scoped";
</style>
