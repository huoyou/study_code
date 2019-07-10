<template>
  <div class="email-setting">
    <div class="form-box">
      <form @submit.prevent="confirmSubmit" data-vv-scope="bindEmailForm">
        <div class="form-group clearfix">
          <label for="" class="form-label"><!--需绑定的邮箱-->{{$t('setEamilPage.needBindEmail')}}</label>
          <div class="input-wrap">
            <input type="text" v-model="form.email" class="form-control" v-validate="'required|email'" name="bindEmailForm_email">
            <p class="color-999 mt-5">
              <!--您可以用验证通过的邮箱来做安全验证-->{{$t('setEamilPage.emailPurposeExplain')}}
            </p>
            <p class="error-tip">{{errors.first('bindEmailForm_email', 'bindEmailForm')}}</p>
          </div>
        </div>
        <div class="form-group clearfix">
          <label for="" class="form-label"><!--验证码-->{{$t('common.validateCode')}}</label>
          <div class="input-wrap">
            <div class="flex">
              <input type="number" v-model="form.validateCode" class="form-control" v-validate="'required|validateCode'" name="bindEmailForm_validateCode1">
              <verify-btn
                  :type="form.verifyType"
                  :value="form.email"
                  :condition="sendEmailVerifyCodeCondition"
                  class="no-bl"></verify-btn>
            </div>
            <p class="error-tip">{{errors.first('bindEmailForm_validateCode1', 'bindEmailForm')}}</p>
          </div>
        </div>
        <!--<div class="form-group clearfix">
          <label for="" class="form-label">短信验证码</label>
          <div class="input-wrap">
            <div class="flex">
              <input type="number" v-model="form.validateCode2" class="form-control" v-validate="'required|validateCode'" name="bindEmailForm_validateCode2">
              <verify-btn :type="form.verifyType" class="no-bl"></verify-btn>
            </div>
              <div class="text-right">
                <span class="toggle-verify-type pt-5">切换验证方式</span>
              </div>
            <p class="error-tip">{{errors.first('bindEmailForm_validateCode2', 'bindEmailForm')}}</p>
          </div>
        </div>-->
        <!--<div class="form-group clearfix">
          <label for="" class="form-label">是否开启验证</label>
          <div class="input-wrap">
            <div class="pt-10">
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </div>
&lt;!&ndash;            <p class="error-tip"></p>&ndash;&gt;
          </div>
        </div>-->
        <div class="form-group mt-10">
          <label for="" class="form-label">&nbsp;</label>
          <div class="input-wrap">
            <p class="alert-text mt-5 mb-15 color-f00" v-show="false">
              <!--修改邮箱后24小时内将被限制交易，请知悉！-->{{$t('setEamilPage.updateEmailTip')}}
            </p>
            <el-button
                type="primary"
                class="primary-gradual"
                :loading="committing"
                :disabled="committing"
                native-type="submit"
                @click="confirmSubmit"><!--提交-->{{$t('common.submit')}}</el-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import index from './email-setting';
export default index;
</script>

<style lang="scss" scoped>
@import "email-setting.scoped";
</style>
