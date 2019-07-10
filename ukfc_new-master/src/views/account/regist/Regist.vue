<template>
  <section class="regist account-layout" ref="regist_layout">
    <div class="container">
      <div class="row">
        <div class="account-form">
          <div class="account-form-head">
            <h2 class="form-caption"><!--注册-->{{$t("common.regist")}}</h2>
            <router-link class="form-head-link" to="/login"><!--登录-->{{$t("common.login")}}</router-link>
          </div>
          <div class="account-form-body">
            <form @submit.prevent="toNextStep" data-vv-scope="regist_form" v-show="currentStep === 1">
              <div class="form-group">
                <input
                    v-model="form.username"
                    v-validate="'required|checkAccount'"
                    name="regist_username"
                    type="text"
                    class="form-control"
                    data-placeholder="请输入您的用户名"
                    :placeholder="$t('registPage.placeholder.username')">
                <p class="error-tip">{{errors.first('regist_username', 'regist_form')}}</p>
              </div>
              <div class="form-group">
                <input
                    v-model="form.inviteCode"
                    v-validate="'required|checkInviteCode'"
                    name="regist_inviteCode"
                    type="text"
                    class="form-control"
                    data-placeholder="请输入您的邀请码"
                    :placeholder="$t('registPage.placeholder.inviteCode')">
                <p class="error-tip">{{errors.first('regist_inviteCode', 'regist_form')}}</p>
              </div>
              <div class="form-group">
                <input
                    v-model="form.password"
                    v-validate="'required|checkPwd'"
                    name="regist_password"
                    type="password"
                    class="form-control"
                    data-placeholder="请输入您的登录密码"
                    :placeholder="$t('registPage.placeholder.password')">
                <p class="error-tip">{{errors.first('regist_password', 'regist_form')}}</p>
              </div>
              <div class="form-group">
                <input
                    v-model="form.secondPassword"
                    v-validate="{required: true, is: form.password}"
                    name="regist_secondPassword"
                    type="password"
                    class="form-control"
                    data-placeholder="请再次输入您的登录密码"
                    :placeholder="$t('registPage.placeholder.secondPassword')">
                <p class="error-tip">{{errors.first('regist_secondPassword', 'regist_form')}}</p>
              </div>
              <div class="form-group">
                <div>
                  <el-checkbox class="ukfc-checkbox" size="medium" v-model="checked">
                    <!--阅读并接受-->{{$t("registPage.readedAndAccept")}}
                  </el-checkbox>
                  <div class="open-ukf-protocol">
                    <!--《USD用户协议》--><!--《{{$t("registPage.usdProtocol")}}》-->
                    <!--用户应充分认识到期货投资的风险。平台所提供的所有数据与信息，仅供用户参考使用，不构成用户进行投资操作的直接依据，
                    用户据此操作，风险自担，平台不承担任何经济与法律责任。-->
                    {{$t("registPage.ukfRegistProtocol")}}
                  </div>
                </div>
                <p class="error-tip"></p>
              </div>
              <div class="form-group">
                <el-button
                    class="account-submit-btn"
                    native-type="submit"
                    :disabled="!checked"
                    @click="toNextStep">
                  <!--确定-->{{$t("common.confirm")}}
                </el-button>
              </div>
            </form>
            <form @submit.prevent="submitRegist" data-vv-scope="regist_form2" v-show="currentStep === 2">
              <div class="form-group">
                <div class="form-group">
                  <div>
                    <el-radio v-model="registType" :label="2"><!--邮箱验证-->{{$t('registPage.emailVerify')}}</el-radio>
                    <el-radio v-model="registType" :label="1"><!--手机验证-->{{$t('registPage.mobileVerify')}}</el-radio>
                  </div>
                  <p class="error-tip"></p>
                </div>
              </div>
              <div class="form-group" v-if="registType === 1">
                <vue-country-intl
                    v-model="form.countryCode"
                    class="regist-country-select"
                    :placeholder="$t('registPage.chooseCountry')"></vue-country-intl>
                <input
                    type="hidden"
                    v-model="form.countryCode"
                    v-validate="'required'"
                    name="regist_countryCode">
                <p class="error-tip">{{errors.first('regist_countryCode', 'regist_form2')}}</p>
              </div>
              <div class="form-group" v-if="registType === 1">
                <input type="number"
                       class="form-control"
                       v-model="form.mobile"
                       v-validate="'required|checkMobile'"
                       name="regist_mobile"
                       data-placeholder="请输入您的手机号"
                       :placeholder="$t('registPage.placeholder.mobile')">
                <p class="error-tip">{{errors.first('regist_mobile', 'regist_form2')}}</p>
              </div>
              <div class="form-group" v-if="registType === 2">
                <input type="text"
                       class="form-control"
                       v-model="form.email"
                       v-validate="'required|email'"
                       name="common_email"
                       data-placeholder="请输入邮箱"
                       :placeholder="$t('placeholder.email')">
                <p class="error-tip">{{errors.first('common_email', 'regist_form2')}}</p>
              </div>
              <div class="form-group">
                <div class="flex align-items-center">
                  <input
                      type="number"
                      class="form-control verify-code-input"
                      v-model="form.validateCode"
                      v-validate="'required|validateCode'"
                      name="common_validateCode"
                      data-placeholder="请输入证码"
                      :placeholder="$t('placeholder.validateCode')">
                  <verify-btn
                      class="mobile-verify-btn"
                      :value="registType === 1 ? form.mobile : form.email"
                      :country-code="form.countryCode"
                      :type="form.verifyType"
                      :condition="getVerifyCodeCondition"></verify-btn>
                </div>
                <p class="error-tip">{{errors.first('common_validateCode', 'regist_form2')}}</p>
              </div>
              <div class="form-group">
                <div id="geetest_box"></div>
                <input type="hidden"
                       :value="geetest.geetestSuccessData ? (geetest.geetestSuccessData.geetest_challenge || '') : ''"
                       v-validate="'required'"
                       name="common_geetest">
                <p class="error-tip">{{errors.first('common_geetest', 'regist_form2')}}</p>
              </div>
              <div class="form-group">
                <el-button
                    class="account-submit-btn"
                    native-type="submit"
                    :loading="committing"
                    :disabled="committing"
                    @click="submitRegist">
                  <!--立即注册-->{{$t("registPage.registNow")}}
                </el-button>
              </div>
            </form>
            <div class="flex mt-10">
              <span class="origin-btn cursor-point" v-if="currentStep === 2" @click="currentStep = 1">
                <!--返回上一步-->{{$t("registPage.goPrevStep")}}
              </span>
              <!--<a class="origin-btn ml-auto mr-15" href="javascript: void(0);">
                &lt;!&ndash;服务条款&ndash;&gt;{{$t("registPage.serviceClause")}}
              </a>
              <a class="origin-btn" href="javascript: void(0);">&lt;!&ndash;隐私保护&ndash;&gt;{{$t("registPage.privacyProtect")}}</a>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import index from "./regist-js";
export default index;
</script>

<style lang="scss" scoped>
  /*@import "./login.scoped";*/
  @import "../../../common/css/mixin/account-common.scoped";
  @import "regist.scoped";
</style>
