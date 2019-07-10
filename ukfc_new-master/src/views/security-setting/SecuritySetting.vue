<template>
  <section class="security-setting">
    <div class="container security-setting-container">
      <div class="card">
        <div class="card-head">
          <h6 class="card-title"><!--安全设置-->{{$t('securitySettingPage.securitySetting')}}</h6>
        </div>
        <div class="card-body">
          <div class="recently-login">
            <span>
              <!--最近登录时间-->{{$t('securitySettingPage.lastLoginTime')}}：{{get_userInfo.lastLoginTime || '--'}}
            </span>
            <span>
              <!--最近登录IP-->{{$t('securitySettingPage.lastLoginIp')}}：{{get_userInfo.lastLoginIp || '--'}}
            </span>
          </div>
          <el-tabs class="ukfc-tabs" v-model="currentTab" @tab-click="tabClick">
            <el-tab-pane :label="$t('securitySettingPage.sellPwdSetting')" name="sellPwd">
              <sell-pwd v-if="sellPwdInited"></sell-pwd>
            </el-tab-pane>
            <el-tab-pane :label="$t('securitySettingPage.gaCodeSetting')" name="gaCode">
              <ga-code v-if="gaCodeInited && get_userInfo.gaStatus === 0"></ga-code>
              <!--查看谷歌验证器-->
              <check-gacode v-if="gaCodeInited && get_userInfo.gaStatus === 1"></check-gacode>
            </el-tab-pane>
            <el-tab-pane :label="$t('securitySettingPage.emailSetting')" name="email">
              <email-setting v-if="emailInited && get_userInfo.emailStatus === 0"></email-setting>
              <check-email v-if="emailInited && get_userInfo.emailStatus === 1"></check-email>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  import SellPwd from "./sell-pwd/SellPwd";
  import GaCode from "./ga-code-setting/GaCodeSetting";
  import CheckGaCode from "./check-gacode/CheckGaCode";
  import EmailSetting from "./email-setting/EmailSetting";
  import CheckEmail from "./check-email/CheckEmail";
  import {mapGetters} from "vuex";
  export default {
    name: "SecuritySetting",
    components: {
      'sell-pwd': SellPwd,
      'ga-code': GaCode,
      'email-setting': EmailSetting,
      'check-gacode': CheckGaCode,
      'check-email': CheckEmail
    },
    data(){
      return {
        currentTab: this.$route.params.tab || 'sellPwd',
        sellPwdInited: false,
        gaCodeInited: false,
        emailInited: false
      };
    },
    computed: {
      ...mapGetters(['get_userInfo'])
    },
    methods: {
      tabClick(tabItem){
        let name = tabItem.name;
        this.$router.replace(`/securitySetting/${name}`);
        switch (name) {
          case 'sellPwd':
            if(!this.sellPwdInited){
              this.sellPwdInited = true;
            }
            break;
          case 'gaCode':
            if(!this.gaCodeInited){
              this.gaCodeInited = true;
            }
            break;
          case 'email':
            if(!this.emailInited){
              this.emailInited = true;
            }
            break;
        }
      }
    },
    created(){
      let name;
      if(!this.$route.params.tab){
        this.$router.replace('/securitySetting/sellPwd');
        name = 'sellPwd';
      }else{
        name = this.$route.params.tab;
      };
      switch (name) {
        case 'sellPwd':
          if(!this.sellPwdInited){
            this.sellPwdInited = true;
          }
          break;
        case 'gaCode':
          if(!this.gaCodeInited){
            this.gaCodeInited = true;
          }
          break;
        case 'email':
          if(!this.emailInited){
            this.emailInited = true;
          }
          break;
      }
    }
  }
</script>

<style lang="scss">
@import "security-setting";
</style>
<style lang="scss" scoped>
@import "security-setting.scoped";
</style>
