<template>
  <div class="check-email-page">
    <p class="mb-5">
      <!--您已绑定过邮箱，邮箱绑定后可用于接收验证码-->{{$t('setEamilPage.hasBindedEmail')}}
    </p>
    <p class="view-email">
      <!--当前邮箱-->{{$t('setEamilPage.currentEmail')}}：
      <span class="color-primary text-bold">{{get_userInfo.email || '----'}}</span></p>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  export default {
    name: "CheckEmail",
    computed: {
      ...mapGetters(['get_userInfo'])
    }
  }
</script>

<style lang="scss" scoped>
.check-email-page{
  min-height: 150px;
  padding: 40px 0;
}
</style>
