<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <router-link to="/walletHome" class="web-brand">
          <img src="../../../assets/images/logo.png" alt="ukfc logo">
          <!--<img src="../../../assets/images/KRC_LOGO.png" alt="ukfc logo">-->
        </router-link>
        <nav class="header-nav">
          <ul class="nav-menu-list clearfix">
            <li class="nav-menu-item">
              <router-link to="/walletHome" active-class="active" class="nav-menu-link"><!--首页-->{{$t('common.home')}}</router-link>
            </li>
            <li class="nav-menu-item">
              <router-link to="/myWallet" active-class="active" class="nav-menu-link"><!--资产-->{{$t('headerCom.assets')}}</router-link>
            </li>
            <li class="nav-menu-item">
              <router-link to="/investManagement" active-class="active" class="nav-menu-link"><!--投资管理-->{{$t('headerCom.investment')}}</router-link>
            </li>
            <li class="nav-menu-item">
              <router-link to="/feedback" active-class="active" class="nav-menu-link"><!--客户服务-->{{$t('headerCom.customerService')}}</router-link>
            </li>
            <li class="nav-menu-item">
              <el-dropdown placement="bottom-start">
                <a href="javascript: void(0);" class="nav-menu-link">
                  <!--更多-->{{$t('common.more')}}
                  <i class="triangle triangle-bottom"></i>
                </a>
                <el-dropdown-menu class="header-menu-dropdown header-nav-dropdown" slot="dropdown">
                  <!--<el-dropdown-item>
                    <router-link to="/helpCenter" active-class="active" class="header-menu-dropdown-link">
                      &lt;!&ndash;帮助中心&ndash;&gt;{{$t('headerCom.helpCenter')}}
                    </router-link>
                  </el-dropdown-item>-->
                  <el-dropdown-item>
                    <router-link to="/aboutUs" active-class="active" class="header-menu-dropdown-link">
                      <!--关于我们-->{{$t('common.aboutUs')}}
                    </router-link>
                  </el-dropdown-item>
                  <!--<el-dropdown-item>
                    <router-link to="/feedback" active-class="active" class="header-menu-dropdown-link">
                      意见反馈
                    </router-link>
                  </el-dropdown-item>-->
                  <!--<el-dropdown-item>
                    <router-link to="/helpCenter" active-class="active" class="header-menu-dropdown-link">
                      &lt;!&ndash;法律相关&ndash;&gt;{{$t('headerCom.legallyRelevant')}}
                    </router-link>
                  </el-dropdown-item>-->
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
        </nav>
        <div class="header-right">
          <!--<a href="javascript: void(0);" class="buy-tickets-btn">Buy tickets</a>-->
          <div class="user-login-info">
            <sup
                class="message-badge"
                :title="$t('headerCom.unReadMsg')"
                v-show="get_unreadMessageCount > 0"
                @click="$router.push('/messages')">{{get_unreadMessageCount > 10 ? '9+' : get_unreadMessageCount}}</sup>
            <el-dropdown placement="bottom-start">
              <div>
                <img :src="get_userInfo.imgUrl" v-if="get_userInfo.imgUrl" class="user-avater-img" alt="">
                <div class="user-avatar-text" v-else>{{get_userInfo.username ? get_userInfo.username.substr(-2) : '--'}}</div>
                <i class="triangle triangle-bottom"></i>
                <span class="user-name">{{get_userInfo.username || '----'}}</span>
              </div>

              <el-dropdown-menu class="header-menu-dropdown user-login-info-dropdown" slot="dropdown">
                <el-dropdown-item>
                  <router-link to="/securitySetting" active-class="active" class="header-menu-dropdown-link">
                    <!--安全设置-->{{$t('headerCom.securitySettings')}}
                  </router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="/userInfo" active-class="active" class="header-menu-dropdown-link">
                    <!--我的资料-->{{$t('headerCom.myProfile')}}
                  </router-link>
                </el-dropdown-item>
                <!--<el-dropdown-item>
                  <a href="javascript: void(0);" active-class="active" class="header-menu-dropdown-link" @click="nodeSettingBtnClick">
                    &lt;!&ndash;节点配置&ndash;&gt;{{$t('common.nodeSettings')}}
                  </a>
                </el-dropdown-item>-->
                <el-dropdown-item>
                  <a href="javascript: void(0);" class="header-menu-dropdown-link" @click="updatePwdModalVisible = true">
                    <!--修改密码-->{{ $t('headerCom.updatePwd')}}
                  </a>
                </el-dropdown-item>
                <el-dropdown-item>
                  <a href="javascript: void(0)" @click="logout" class="header-menu-dropdown-link">
                    <!--退出-->{{$t('common.logout')}}
                  </a>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
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
					<div class="sideslip-btn" @click="sideslipBtnClick">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</div>
        </div>
      </div>
    </div>

    <!--修改登录密码弹窗 start-->
    <update-pwd-modal :show.sync="updatePwdModalVisible"></update-pwd-modal>
    <!--修改登录密码弹窗 end-->

    <!--节点设置弹窗-->
    <node-setting-modal v-if="nodeSettingModalVisible" :show.sync="nodeSettingModalVisible"></node-setting-modal>
  </header>
</template>

<script>
  import {logout} from "../../../router/accountUnit";
  import {mapGetters} from 'vuex';
  import HeaderLangTrigger from '../header-lang-trigger/HeaderLangTrigger';
  import UpdatePwdModal from "../update-pwd-modal/UpdatePwdModal";
  import NodeSettingModal from "../node-setting-modal/NodeSetting";

  export default {
    name: "UHeader",
    inject: ['showMobileNav'],
    components:{
      'header-lang-trigger': HeaderLangTrigger,
      'update-pwd-modal': UpdatePwdModal,
      'node-setting-modal': NodeSettingModal
    },
    data(){
      return {
        updatePwdModalVisible: false, // 控制修改登录密码弹窗显示
        nodeSettingModalVisible: false, // 控制节点设置弹窗显示
        nodeSettingModalShow: false
      };
    },
    computed: {
      ...mapGetters(['get_userInfo', 'get_unreadMessageCount'])
    },
    methods: {
      // 退出
      logout(){
        logout(() => {
          this.$router.push({name: 'login'});
        });
      },
      // 节点设置按钮点击事件
      nodeSettingBtnClick(){
        if(!this.nodeSettingModalShow){
          this.nodeSettingModalShow = true;
        }
        this.nodeSettingModalVisible = true;
      },
      sideslipBtnClick(){
        console.log('fsdfsd')
        this.showMobileNav();
      }
    },
    mounted() {
      console.log('showMobileNav',this.showMobileNav)
    }
  }
</script>

<!--<style lang="scss">
  @import "uheader";
</style>-->
