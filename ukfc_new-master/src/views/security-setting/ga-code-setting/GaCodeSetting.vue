<template>
  <div class="ga-code-setting">
    <p class="top-alert">
      <!--谷歌身份验证器是一款动态口令工具，工作原理类似短信动态验证。绑定后每30s生成一个动态验证码，验证码可用于登录、提现、修改安全设置等操
      作的安全验证。-->
      {{$t('setGaCodePage.whatIsGaCode')}}
    </p>
    <div class="gacode-setting-step-bar clearfix">
      <div class="step-item" :class="{active: currentStep === 1}">
        <div class="step-icon step-icon1" :class="{active: currentStep === 1}"></div>
        <p class="step-text">1、<!--下载APP-->{{$t('setGaCodePage.stepText1')}}</p>
      </div>
      <div class="step-item" :class="{active: currentStep === 2}">
        <div class="step-icon step-icon2" :class="{active: currentStep === 2}"></div>
        <p class="step-text">2、<!--扫描二维码-->{{$t('setGaCodePage.stepText2')}}</p>
      </div>
      <div class="step-item" :class="{active: currentStep === 3 || currentStep === 4}">
        <div class="step-icon step-icon3" :class="{active: currentStep === 3 || currentStep === 4}"></div>
        <p class="step-text">3、<!--开启谷歌验证码-->{{$t('setGaCodePage.stepText3')}}</p>
      </div>
    </div>
    <div class="step step1" v-show="currentStep === 1">
      <div class="step-explain">
        <i class="step-serial">1</i>
        <span><!--下载并安装谷歌验证器APP-->{{$t('setGaCodePage.step1Operate')}}</span>
      </div>
      <div class="step-body">
        <div class="clearfix">
          <div class="fl">1、</div>
          <div class="overflow">
            <p class="mb-5">
              <!--苹果用户在"App Store"中搜索"谷歌验证器"，下载并安装；-->
              {{$t('setGaCodePage.iosDownApp')}}
            </p>
            <p>
              <!--安卓用户在"应用市场"中搜索"谷歌验证器"，下载并安装；-->
              {{$t('setGaCodePage.androidDownApp')}}
            </p>
          </div>
        </div>
        <p class="mt-15 mb-25">
          2、{{$t('setGaCodePage.afterSetup')}}<!--安装完成后点击"下一步"按钮-->
        </p>
        <!--<a href="javascript: void(0);" target="_blank" class="download-btn">
          <img src="../../../assets/images/ios_app_store.png" alt="">
        </a>
        <a href="javascript: void(0);" target="_blank" class="download-btn">
          <img src="../../../assets/images/google_play.png" alt="">
        </a>-->
        <div>
          <el-button type="primary" @click="toStep2"><!--下一步-->{{$t('setGaCodePage.nextStep')}}</el-button>
        </div>
      </div>
    </div>
    <div class="step step2" v-show="currentStep === 2">
      <div class="step-explain">
        <i class="step-serial">2</i>
        <span><!--使用谷歌验证器扫描一以下维码-->{{$t('setGaCodePage.ste2Operate')}}</span>
      </div>
      <div class="step-body">
        <div class="qrcode-box">
          <qrcode v-if="generateDataLoaded" :value="gaGenerateData.otpAuthTotpURL" :options="{width: 120, margin: 0}"></qrcode>
        </div>
        <p class="color-333 mt-30 mb-15">
          <!--如果您无法扫描二维码，可以将以下16位密钥手动输入到谷歌验证APP中-->{{$t('setGaCodePage.canNotScanTip')}}
        </p>
        <div class="flex">
          <input type="text" :value="gaGenerateData.secret_key" readonly class="form-control">
          <div class="copy-btn" :data-clipboard-text="gaGenerateData.secret_key" v-copy="{success: copySuccess}">复制</div>
        </div>
        <p class="color-999 mt-10">
          <!--密钥用于手机更换或遗失时找回谷歌验证器，绑定前请务必将下述密钥备份保存-->{{$t('setGaCodePage.secretKeyPurposeExplain')}}
        </p>
        <div class="mt-30">
          <el-button type="primary" plain @click="currentStep = 1"><!--上一步-->{{$t('setGaCodePage.prevSet')}}</el-button>
          <el-button type="primary" @click="currentStep = 3"><!--下一步-->{{$t('setGaCodePage.nextStep')}}</el-button>
        </div>
      </div>
    </div>
    <div class="step step3" v-show="currentStep === 3">
      <div class="step-explain">
        <i class="step-serial">3</i>
        <span><!--将生成的动态验证码填写到如下输入框中-->{{$t('setGaCodePage.enterDynamicCodeTip')}}</span>
      </div>
      <div class="step-body">
        <form onsubmit="return false;" class="form-box">
          <div class="form-group mb-20 clearfix">
            <label for="" class="form-label"><!--秘钥-->{{$t('setGaCodePage.secretKey')}}</label>
            <div class="input-wrap">
              <input type="text" :value="gaGenerateData.secret_key" class="form-control" readonly>
            </div>
          </div>
          <div class="form-group mb-20 clearfix">
            <label for="" class="form-label"><!--设备名称-->{{$t('setGaCodePage.deviceName')}}</label>
            <div class="input-wrap">
              <input type="text" :value="gaGenerateData.label" class="form-control" readonly>
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
              <p class="error-tip"></p>
            </div>
          </div>-->
          <div class="form-group clearfix">
            <label for="" class="form-label"><!--谷歌验证码-->{{$t('common.gaCode')}}</label>
            <div class="input-wrap">
              <input type="number"
                     v-model="gaCode"
                     class="form-control"
                     v-validate="'required|gaCode'"
                     name="common_gaCode"
                     data-placeholder="请输入谷歌验证码"
                     :placeholder="$t('placeholder.gaCode')">
              <p class="error-tip">{{errors.first('common_gaCode')}}</p>
            </div>
          </div>
          <!--<div class="form-group clearfix">
            <label for="" class="form-label">是否开启验证</label>
            <div class="input-wrap">
              <div class="pt-10">
                <el-radio v-model="radio" label="1">是</el-radio>
                <el-radio v-model="radio" label="2">否</el-radio>
              </div>
              <p class="error-tip"></p>
            </div>
          </div>-->
        </form>
        <div class="mt-30">
          <el-button type="primary" plain @click="currentStep = 2"><!--上一步-->{{$t('setGaCodePage.prevSet')}}</el-button>
          <el-button
              type="primary"
              :loading="committing"
              :disabled="committing"
              @click="confirmBind"><!--完成绑定-->{{$t('setGaCodePage.confirmBind')}}</el-button>
        </div>
      </div>
    </div>
    <div class="step step4 text-center" v-show="currentStep === 4">
      <img src="../../../assets/images/success-tip.png" class="success-img" alt="">
      <p class="success-tip-text"><!--谷歌验证器绑定成功！-->{{$t('setGaCodePage.gaCodeBindSuccessTip')}}</p>
    </div>
  </div>
</template>

<script>
import index from './ga-code-setting.js';
export default index;
</script>

<style lang="scss" scoped>
@import "ga-code-setting.scoped";
</style>
