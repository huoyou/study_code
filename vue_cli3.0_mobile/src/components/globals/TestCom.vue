<template>
  <div>
    <div @click="aaa">点我</div>
    <div class="test">{{$t('common.title')}}</div>
  </div>
</template>
<script>
export default {
  methods: {
    aaa() {
      this.$i18n.locale = 'en-US';
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  font-size: 18px;
}
</style>


