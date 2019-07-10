<template>
  <section class="account-layout">
    <div class="container">
      <div class="row">
        <div class="account-form">
          <div class="account-form-head">
            <h2 class="form-caption"><!--找回密码-->{{$t("common.findPwd")}}</h2>
            <router-link class="form-head-link" to="/login"><!--登录-->{{$t("common.login")}}</router-link>
          </div>
          <div class="account-form-body">
            <form @submit.prevent="submitFindPwd">
              <div class="form-group">
                <div>
                  <el-radio v-model="findPwdType" :label="1"><!--手机找回-->{{$t("forgetPwdPage.findByMobile")}}</el-radio>
                  <el-radio v-model="findPwdType" :label="2"><!--邮箱找回-->{{$t("forgetPwdPage.findByEmail")}}</el-radio>
                </div>
                <p class="error-tip"></p>
              </div>
              <div class="form-group" v-if="findPwdType === 1">
                <vue-country-intl
                    v-model="form.countryCode"
                    class="regist-country-select"
                    :placeholder="$t('forgetPwdPage.chooseCountry')"></vue-country-intl>
                <input type="hidden" v-model="form.countryCode" v-validate="'required'" name="forgetPwd_countryCode" key="forgetPwd_countryCode">
                <p class="error-tip">{{errors.first('forgetPwd_countryCode')}}</p>
              </div>
              <div class="form-group" v-if="findPwdType === 1">
                <input v-model="form.mobile"
                       v-validate="'required|checkMobile'"
                       name="common_mobile"
                       key="common_mobile"
                       type="number"
                       class="form-control"
                       data-placeholder="请输入手机号"
                       :placeholder="$t('placeholder.mobile')">
                <p class="error-tip">{{errors.first('common_mobile')}}</p>
              </div>
              <div class="form-group" v-if="findPwdType === 2">
                <input v-model="form.email"
                       v-validate="'required|email'"
                       name="common_email"
                       key="common_email"
                       type="text"
                       class="form-control"
                       data-placeholder="请输入邮箱"
                       :placeholder="$t('placeholder.email')">
                <p class="error-tip">{{errors.first('common_email')}}</p>
              </div>
              <div class="form-group">
                <div class="flex align-items-center">
                  <input
                      type="number"
                      class="form-control verify-code-input"
                      v-model="form.validateCode"
                      v-validate="'required|validateCode'"
                      name="common_validateCode"
                      data-placeholder="请输入验证码"
                      :placeholder="$t('placeholder.validateCode')">
                  <verify-btn
                      class="mobile-verify-btn"
                      :value="findPwdType === 1 ? form.mobile : form.email"
                      :country-code="form.countryCode"
                      :type="form.verifyType"
                      :condition="getVerifyCodeCondition"></verify-btn>
                </div>
                <p class="error-tip">{{errors.first('common_validateCode')}}</p>
              </div>
              <div class="form-group">
                <input v-model="form.password"
                       v-validate="'required|checkPwd'"
                       name="forgetPwd_password"
                       type="password"
                       class="form-control"
                       data-placeholder="请输入新密码"
                       :placeholder="$t('forgetPwdPage.placeholder.password')">
                <p class="error-tip">{{errors.first('forgetPwd_password')}}</p>
              </div>
              <div class="form-group">
                <input v-model="form.rePwd"
                       v-validate="{required: true, is: form.password}"
                       name="forgetPwd_rePwd"
                       type="password"
                       class="form-control"
                       data-placeholder="请再次输入新密码"
                       :placeholder="$t('forgetPwdPage.placeholder.rePwd')">
                <p class="error-tip">{{errors.first('forgetPwd_rePwd')}}</p>
              </div>
              <div class="form-group">
                <el-button
                    class="account-submit-btn"
                    native-type="submit"
                    :loading="committing"
                    :disabled="committing"
                    @click="submitFindPwd">
                  <!--立即找回-->{{$t("forgetPwdPage.findPwdNow")}}
                </el-button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import index from "./forget-pwd";
export default index;
</script>

<style lang="scss" scoped>
  @import "../../../common/css/mixin/account-common.scoped";
  @import "forget-pwd.scoped";
</style>
