<template>
  <section class="login account-layout" ref="login_layout">
    <div class="container">
      <div class="row">
        <div class="account-form">
          <div class="account-form-head">
            <h2 class="form-caption"><!--登录-->{{$t("common.login")}}</h2>
            <router-link class="form-head-link" to="/regist"><!--注册-->{{$t("common.regist")}}</router-link>
          </div>
          <div class="account-form-body">
            <form @submit.prevent="submitLogin">
              <div class="form-group">
                <input
                    v-model="form.username"
                    v-validate="'required'"
                    name="login_username"
                    type="text"
                    class="form-control"
                    data-placeholder="请输入用户名"
                    :placeholder="$t('loginPage.placeholder.username')">
                <p class="error-tip">{{errors.first('login_username') || '&nbsp;'}}</p>
              </div>
              <div class="form-group">
                <input
                    v-model="form.password"
                    autocomplete="on"
                    v-validate="'required'"
                    name="login_password"
                    type="password"
                    class="form-control"
                    data-placeholder="请输入登录密码"
                    :placeholder="$t('loginPage.placeholder.password')">
                <p class="error-tip">{{errors.first('login_password') || '&nbsp;'}}</p>
                <!--<div class="flex justify-content-between mb-10">
                  &lt;!&ndash;<el-checkbox class="ukfc-checkbox" size="medium" v-model="checked">&lt;!&ndash;记住密码&ndash;&gt;Remember password</el-checkbox>&ndash;&gt;
                  <router-link to="/forgetPwd" class="origin-btn">&lt;!&ndash;忘记密码？&ndash;&gt;{{$t("common.forgetPwd")}}?</router-link>
                </div>-->
              </div>
              <div class="form-group">
                <div id="geetest_box" class="geetest-box"></div>
                <input type="hidden"
                       :value="geetest.geetestSuccessData ? (geetest.geetestSuccessData.geetest_challenge || '') : ''"
                       v-validate="'required'"
                       name="common_geetest">
                <p class="error-tip">{{errors.first('common_geetest') || '&nbsp;'}}</p>
                <div class="flex justify-content-between mb-10">
                  <!--<el-checkbox class="ukfc-checkbox" size="medium" v-model="checked">&lt;!&ndash;记住密码&ndash;&gt;Remember password</el-checkbox>-->
                  <router-link to="/forgetPwd" class="origin-btn"><!--忘记密码？-->{{$t("common.forgetPwd")}}?</router-link>
                </div>
              </div>
              <div class="form-group">
                <el-button
                    class="account-submit-btn"
                    native-type="submit"
                    :loading="committing"
                    :disabled="committing">
                  <!--立即登录-->{{$t("loginPage.loginNow")}}
                </el-button>
                <!--<div class="flex justify-content-end mt-10">
                  <a class="origin-btn" href="javascript: void(0);">&lt;!&ndash;验证码登录&ndash;&gt;Verification code login</a>
                </div>-->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {accountApi} from "../../../common/api/account.module";
  import {simpleCookie} from "../../../common/js/simpleCookie";
  import {tool} from "../../../common/js/tool";
  import {mapActions, mapMutations, mapGetters} from "vuex";
  import {geetestMixin} from "../../../mixins/geetest-mixin";

  export default {
    name: "Login",
    mixins: [geetestMixin],
    data() {
      return {
        checked: false,
        form: {
          username: '',
          password: ''
        },
        committing: false
      };
    },
    computed: {
      ...mapGetters(['get_lang'])
    },
    watch: {
      get_lang: {
        immediate: true,
        handler(lang){
          this.initGeetest({
            area: '#geetest_box',
            lang: lang.code
          });
        }
      }
    },
    methods: {
      ...mapMutations(["set_token", "set_expireTime", "set_lastUpdateTime"]),
      ...mapActions([
        'getUserInfo_action', 'getCoinList_action', 'getFuturesList_action', 'getCurrencyList_action',
        'getAccountBalance_action', 'getUnreadMessageCount_action'
      ]),
      // 提交登录
      async submitLogin() {
        const valid = await this.$validator.validate();
        if(this.committing){
          return;
        }
        if (valid) {
          let form = this.form;
          const data = {
            username: form.username.trim(),
            password: form.password,
            lang: this.get_lang.code || 'en_US',
          };
          this.committing = true;
					let geetestSuccessData = this.geetest.geetestSuccessData;
          let geetestData = {
            //...this.geetest.geetestSuccessData,
						geetestChallenge: geetestSuccessData.geetest_challenge,
						geetestValidate: geetestSuccessData.geetest_validate,
						geetestSeccode: geetestSuccessData.geetest_seccode,
            sign: this.geetest.sign
          };
          accountApi.login(data, geetestData)
            .then(res => {
              this.committing = false;
              if(res.errcode === 0){
                this._processLoginSuccess(res.data);
              }
              console.log('login', res);
            })
            .catch(() => {
              this.geetestReset();
              this.committing = false;
            });
        } else {
          console.error('validate失败')
        }
      },

      // 处理登录成功后续逻辑
      _processLoginSuccess(data) {
        //this.$notify.success('登录成功！');

        simpleCookie.setItem("isLogin", true);                      // 使用Cookie：浏览器关闭，则Cookie清除，且处于未登录状态

        this.set_expireTime(data.expire);
        // 以秒为单位
        this.set_lastUpdateTime(new Date().getTime() / 1000);
        this.set_token(data.access_token);
        this.getUserInfo_action();                                  // 获取用户详情信息（action）
        this.getCoinList_action(); // 获取币种列表
        this.getFuturesList_action(); // 获取会员级别列表
        this.getCurrencyList_action(); // 获取法币列表
        this.getAccountBalance_action(); // 获取用户资产
        this.getUnreadMessageCount_action(); // 获取用户未读消息数


        let nextJump = this.$route.query.redirect;                  // 根据重定向参数，判断登录页面的跳转来源
        if (nextJump !== undefined) {
          this.$router.replace({
            path: nextJump,     // 跳转  nextJump页
          });
        } else {
          this.$router.push({
            name: 'walletHome',          // 跳转  首页
          });
        }
      }
    },
    mounted() {
      if(window.innerWidth >= 992){
        tool.addClass(this.$refs.login_layout, 'img-bg');
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*@import "./login.scoped";*/
  @import "../../../common/css/mixin/account-common.scoped";
</style>
