<template>
  <div
      class="verify-btn"
      :class="{disabled: disable || committing, gaCode: type === 'gaCode'}"
      @click="verifyBtnClick">
    <i class="el-icon-loading" v-show="useGeetest && geetest.geetestLoading"></i>
    {{btnText}}
  </div>
</template>

<script>
import index from './verify-btn-js.js';
export default index;
</script>

<style lang="scss">
  @import "../../../common/css/break-points";
  .verify-btn{
    height: 45px;
    line-height: 43px;
    padding: 0 15px;
    border: 1px solid #e6e6e6;
    font-size: 16px;
    color: #ea5902;
    white-space: nowrap;
    cursor: pointer;
    transition: box-shadow .2s;
    &:hover{
      box-shadow: 0 0 6px 0 rgba(0,0,0,0.08);
    }
    &.disabled{
      color: #999;
      cursor: not-allowed;
    }
    &.gaCode{
      cursor: default;
      color: #999;
    }
  }
  @media (max-width: $lg) {
    .verify-btn{
      height: 40px;
      line-height: 38px;
      padding: 0 10px;
      font-size: 14px;
    }
  }
</style>
