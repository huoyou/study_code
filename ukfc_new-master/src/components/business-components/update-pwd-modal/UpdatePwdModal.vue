<template>
  <boot-modal
      v-model="modalVisible"
      :title="$t('updatePwdModal.title')"
      @closed="onModalClosed">
    <div class="update-pwd-form">
      <form @submit.prevent="confirmSubmit">
        <div class="form-group">
          <label for="" class="form-label block"><!--原登录密码-->{{$t('updatePwdModal.oldPassword')}}</label>
          <input type="password"
                 v-model="form.oldPassword"
                 class="form-control"
                 v-validate="'required'"
                 name="updatePwdForm_oldPassword">
          <p class="color-999 mt-5">
            <!--密码必须为6-20位字母、数字、_的任意组合！-->{{$t('common.pwdRule')}}
          </p>
          <p class="error-tip">{{errors.first('updatePwdForm_oldPassword')}}</p>
        </div>
        <div class="form-group">
          <label for="" class="form-label block"><!--新密码-->{{$t('updatePwdModal.newPassword')}}</label>
          <input type="password"
                 v-model="form.newPassword"
                 class="form-control"
                 v-validate="'required|checkPwd'"
                 name="common_password">
          <p class="error-tip">{{errors.first('common_password')}}</p>
        </div>
        <div class="form-group">
          <label for="" class="form-label block"><!--确认密码-->{{$t('common.confirmPwd')}}</label>
          <input type="password"
                 v-model="form.rePwd"
                 class="form-control"
                 v-validate="{required: true, is: form.newPassword}"
                 name="updatePwdForm_rePwd">
          <p class="error-tip">{{errors.first('updatePwdForm_rePwd')}}</p>
        </div>
        <div class="form-group">
          <label for="" class="form-label block"><!--验证码-->{{$t('common.validateCode')}}</label>
          <div class="flex">
            <input type="number"
                   v-model="form.validateCode"
                   class="form-control"
                   v-validate="'required|validateCode'"
                   name="common_validateCode">
            <verify-btn :type="form.verifyType" :user-inside-value="form.verifyType !== 'gaCode'" class="no-bl"></verify-btn>
          </div>
          <div class="text-right mt-5">
            <change-verify-type v-model="form.verifyType"></change-verify-type>
          </div>
          <p class="error-tip">{{errors.first('common_validateCode')}}</p>
        </div>
        <div class="text-center">
          <el-button
              type="primary"
              class="primary-gradual medium"
              :loading="committing"
              :disabled="committing"
              native-type="submit"
              @click="confirmSubmit"><!--确定-->{{$t('common.confirm')}}</el-button>
        </div>
      </form>
    </div>
  </boot-modal>
</template>

<script>
import index from './update-pwd';
export default index;
</script>

<style lang="scss" scoped>
  @import "../../../common/css/break-points";
  .update-pwd-form{
    padding: 0 30px 10px 30px;
  }

  @media (max-width: $lg) {
    .update-pwd-form{
      padding: 0 15px;
    }
  }
</style>
