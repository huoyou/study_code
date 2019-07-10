<template>
  <div class="reset-sell-pwd">
    <form @submit.prevent="confirmSubmit">
      <div class="form-group clearfix">
        <label for="" class="form-label"><!--交易密码-->{{$t('common.sellPwd')}}</label>
        <div class="input-wrap">
          <input
              type="password"
              v-model="form.password"
              class="form-control"
              v-validate="'required|checkPwd'"
              name="common_payPassword">
          <p class="color-999 mt-5">
            <!--密码必须为6-20位字母、数字、_的任意组合！-->{{$t('common.pwdRule')}}
          </p>
          <p class="error-tip">{{errors.first('common_payPassword')}}</p>
        </div>
      </div>
      <div class="form-group clearfix">
        <label for="" class="form-label"><!--确认密码-->{{$t('common.confirmPwd')}}</label>
        <div class="input-wrap">
          <input
              type="password"
              class="form-control"
              v-model="form.rePwd"
              v-validate="{required: true, is: form.password}"
              name="sellPwdForm_rePassword">
          <p class="error-tip">{{errors.first('sellPwdForm_rePassword')}}</p>
        </div>
      </div>
      <div class="form-group clearfix">
        <label for="" class="form-label"><!--验证码-->{{$t('common.validateCode')}}</label>
        <div class="input-wrap">
          <div class="flex">
            <input
                type="number"
                v-model="form.validateCode"
                v-validate="'required|validateCode'"
                name="common_validateCode"
                class="form-control">
            <verify-btn :type="form.verifyType" :userInsideValue="form.verifyType !== 'gaCode'"
                        class="no-bl"></verify-btn>
          </div>
          <div class="text-right">
            <!--<span class="toggle-verify-type pt-5">切换验证方式</span>-->
            <change-verify-type v-model="form.verifyType" class="mt-5"></change-verify-type>
          </div>
          <p class="error-tip">{{errors.first('common_validateCode')}}</p>
        </div>
      </div>
      <div class="form-group mt-10">
        <label for="" class="form-label">&nbsp;</label>
        <div class="input-wrap">
          <!--<el-button
              type="primary"
              class="primary-gradual"
              @click="confirmSubmit">
            返回
          </el-button>-->
          <el-button
              type="primary"
              class="primary-gradual"
              :loading="committing"
              :disabled="committing"
              native-type="submit"
              @click="confirmSubmit">
            <!--立即重置-->{{$t('sellPwdPage.resetNow')}}
          </el-button>
          <span class="color-primary go-back" @click="goBack"><!--返 回-->{{$t('common.goBack')}}</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import index from "./reset-sell-pwd";

  export default index;
</script>

<style lang="scss" scoped>
.go-back{
  display: inline-block;
  vertical-align: bottom;
  margin-left: 10px;
  cursor: pointer;
}
</style>
