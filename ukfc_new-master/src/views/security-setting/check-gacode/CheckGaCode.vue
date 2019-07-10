<template>
  <div class="check-gacode">
    <h3 class="page-title"><!--查看谷歌验证器-->{{$t('setGaCodePage.checkGaCode')}}</h3>
    <div class="form-box" v-show="!checkDataLoaded">
      <form onsubmit="return false;" data-vv-scope="check_gaCode_form">
        <div class="form-group clearfix">
          <label for="" class="form-label"><!--谷歌验证码-->{{$t('common.gaCode')}}</label>
          <div class="input-wrap">
            <input type="number" class="form-control" v-model="gaCode" v-validate="'required|gaCode'" name="common_gaCode">
            <p class="error-tip">{{errors.first('common_gaCode', 'check_gaCode_form')}}</p>
          </div>
        </div>
        <!--<div class="form-group clearfix">
          <label for="" class="form-label">短信验证码</label>
          <div class="input-wrap">
            <div class="flex">
              <input type="password" class="form-control">
              <verify-btn class="no-bl"></verify-btn>
            </div>
            <div class="text-right">
              <span class="toggle-verify-type pt-5">切换验证方式</span>
            </div>
            <p class="error-tip">fasfsd</p>
          </div>
        </div>-->
        <div class="form-group clearfix mt-10">
          <label for="" class="form-label">&nbsp;</label>
          <div class="input-wrap">
            <el-button
                type="primary"
                class="primary-gradual medium"
                :loading="loading"
                :disabled="loading"
                @click="checkGaCode"><!--提交-->{{$t('setGaCodePage.confirm')}}</el-button>
          </div>
        </div>
      </form>
    </div>

    <div class="check-gacode-box" v-show="checkDataLoaded">
      <div class="qrcode-box">
        <qrcode v-if="checkDataLoaded" :value="checkData.otpAuthTotpURL" :options="{width: 120, margin: 0}"></qrcode>
      </div>
      <div class="form-group clearfix">
        <label for="" class="form-label"><!--秘钥-->{{$t('setGaCodePage.secretKey')}}</label>
        <div class="input-wrap">
          <div class="flex">
            <input type="text" :value="checkData.secret_key" readonly class="form-control">
            <span class="copy-btn" :data-clipboard-text="checkData.secret_key" v-copy="{success: copySuccess}">
              <!--复制-->{{ $t('common.copy')}}
            </span>
          </div>

        </div>
      </div>
      <div class="form-group clearfix mt-15">
        <label for="" class="form-label"><!--设备名称-->{{$t('setGaCodePage.deviceName')}}</label>
        <div class="input-wrap">
          <div class="flex">
            <input type="text" :value="checkData.label" readonly class="form-control">
            <span class="copy-btn" :data-clipboard-text="checkData.label" v-copy="{success: copySuccess}">
              <!--复制-->{{$t('common.copy')}}
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {gaAuthenticApi} from "../../../common/api/gaAuthenticApi";
  import VueQrcode from '@chenfengyuan/vue-qrcode';

  export default {
    name: "CheckGaCode",
    components: {
      [VueQrcode.name]: VueQrcode
    },
    data(){
      return {
        gaCode: '',
        loading: false,
        checkData: {
          label: "",
          otpAuthTotpURL: "",
          secret_key: ""
        },
        checkDataLoaded: false
      }
    },
    methods: {
      async checkGaCode(){
        let valid = await this.$validator.validateAll('check_gaCode_form');
        if(!valid || this.loading){
          return;
        }
        this.loading = true;
        gaAuthenticApi.checkGaCodeGaCode(this.gaCode)
          .then(({data}) => {
            this.checkData = data;
            this.loading = false;
            this.checkDataLoaded = true;
          })
          .catch(() => {
            this.loading = false;
          });
      },
      // 复制成功提示
      copySuccess(){
        this.$notify({
          title: this.$t('common.warmPrompt'), // 温馨提示
          message: this.$t('common.copySuccess'), // 复制成功！
          type: 'success'
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../common/css/break-points";
  .check-gacode{
    padding-top: 20px;
  }
  .page-title{
    font-size: 20px;
    color: #333;
  }
  .check-gacode-box{
    width: 60%;
    margin-top: 20px;
  }
  .qrcode-box{
    width: 140px;
    height: 140px;
    padding: 10px;
    margin-left: 5px;
    margin-bottom: 10px;
    box-shadow: 0px 1px 4px 0px rgba(176,176,176,0.47);
  }
  .copy-btn{
    display: block;
    line-height: 40px;
    padding: 0 10px;
    white-space: nowrap;
    cursor: pointer;
    color: #ea5902;
  }
  @media (max-width: $lg) {
    .check-gacode-box{
      width: 100%;
    }
  }
</style>
