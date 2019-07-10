<template>
  <div class="form-box">
    <form v-show="!isResetSellPwd" @submit.prevent="confirmSubmit">
      <div class="form-group clearfix" v-if="get_userInfo.paymentPasswordStatus === 1">
        <label for="" class="form-label">&nbsp;</label>
        <div class="input-wrap">
          <!--忘记交易密码？请点击-->
          {{$t('sellPwdPage.forgetSellPwd')}}
          <span class="font-20 color-primary cursor-point ml-5" @click="isResetSellPwd = true">
            <!--这里-->
            {{$t('sellPwdPage.here')}}
          </span>
        </div>
      </div>
      <div class="form-group clearfix" v-if="get_userInfo.paymentPasswordStatus === 1">
        <label for="" class="form-label"><!--原交易密码-->{{$t('sellPwdPage.oldSellPwd')}}</label>
        <div class="input-wrap">
          <input
              type="password"
              v-model="form.oldPassword"
              v-validate="'required'"
              name="sellPwdForm_oldPassword"
              class="form-control">
          <p class="error-tip">{{errors.first('sellPwdForm_oldPassword')}}</p>
        </div>
      </div>
      <div class="form-group clearfix" v-if="get_userInfo.paymentPasswordStatus === 1">
        <label for="" class="form-label"><!--新交易密码-->{{$t('sellPwdPage.newSellPwd')}}</label>
        <div class="input-wrap">
          <input
              type="password"
              v-model="form.newPassword"
              v-validate="'required|checkPwd'"
              name="common_payPassword"
              class="form-control">
          <p class="color-999 mt-5">
            <!--密码必须为6-20位字母、数字、_的任意组合！-->{{$t('common.pwdRule')}}
          </p>
          <p class="error-tip">{{errors.first('common_payPassword')}}</p>
        </div>
      </div>
      <div class="form-group clearfix" v-if="get_userInfo.paymentPasswordStatus === 0">
        <label for="" class="form-label"><!--交易密码-->{{$t('common.sellPwd')}}</label>
        <div class="input-wrap">
          <input
              type="password"
              v-model="form.payPassword"
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
              v-validate="{required: true, is: get_userInfo.paymentPasswordStatus === 0 ? form.payPassword : form.newPassword}"
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
            <verify-btn :type="form.verifyType" :userInsideValue="form.verifyType !== 'gaCode'" class="no-bl"></verify-btn>
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
          <p class="alert-text mt-5 mb-15 color-f00" v-show="false">
            <!--修改交易密码后24小时内将被限制交易，请知悉！-->{{$t('sellPwdPage.updateSellPwdTip')}}
          </p>
          <el-button
              type="primary"
              class="primary-gradual"
              :loading="committing"
              :disabled="committing"
              native-type="submit"
              @click="confirmSubmit">
            {{get_userInfo.paymentPasswordStatus === 0 ? $t('sellPwdPage.setSellPwd') : $t('sellPwdPage.updateSellPwd')}}
          </el-button>
        </div>
      </div>
    </form>

    <!--重置交易密码 start-->
    <reset-sell-pwd v-show="isResetSellPwd" @goBack="onGoBack"></reset-sell-pwd>
    <!--重置交易密码 end-->
  </div>
</template>

<script>
import index from './sell-pwd';
export default index;
</script>
