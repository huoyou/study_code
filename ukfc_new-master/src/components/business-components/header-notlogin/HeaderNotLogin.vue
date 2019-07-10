<template>
  <header class="header header-not-login">
    <div class="container">
      <div class="row">
        <router-link to="/walletHome" class="web-brand">
          <img src="../../../assets/images/logo.png" alt="ukfc logo">
        </router-link>
        <div class="header-right">
          <router-link class="about-us-link" active-class="active" to="/aboutUs"><!--关于我们-->{{$t("common.aboutUs")}}</router-link>
          <div class="language-toggle">
            <!--<el-dropdown placement="bottom-start">
              <div>
                <img src="../../assets/images/temp/china-img.png" class="nationality-img" alt="">
                <i class="triangle triangle-bottom"></i>
              </div>
              <el-dropdown-menu class="header-menu-dropdown language-toggle-dropdown" slot="dropdown">
                <el-dropdown-item>
                  <a href="javascript: void(0);" class="header-menu-dropdown-link">
                    English
                  </a>
                </el-dropdown-item>
                <el-dropdown-item>
                  <a href="javascript: void(0);" class="header-menu-dropdown-link">
                    中文
                  </a>
                </el-dropdown-item>
                <el-dropdown-item>
                  <a href="javascript: void(0);" class="header-menu-dropdown-link">
                    韩文
                  </a>
                </el-dropdown-item>
                <el-dropdown-item>
                  <a href="javascript: void(0);" class="header-menu-dropdown-link">
                    日本语
                  </a>
                </el-dropdown-item>
                <el-dropdown-item>
                  <a href="javascript: void(0);" class="header-menu-dropdown-link">
                    俄语
                  </a>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>-->
            <header-lang-trigger></header-lang-trigger>
          </div>
          <!--<div class="sideslip-btn">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </div>-->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import HeaderLangTrigger from '../header-lang-trigger/HeaderLangTrigger'
  export default {
    name: "HeaderNotLogin",
    components: {
      'header-lang-trigger': HeaderLangTrigger
    }
  }
</script>

<style lang="scss">
@import "header-not-login";
@import "../../../common/css/break-points";
@media (max-width: $lg) {
  .header-not-login .language-toggle{
    display: block;
  }
}
</style>
