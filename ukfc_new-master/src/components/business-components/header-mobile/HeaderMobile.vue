<template>
  <aside class="header-mobile" :class="{'header-show': visible}" :style="{zIndex: zIndex}">
    <div class="user-info mb-15">
      <router-link to="/walletHome" class="clearfix mb-15 block">
        <img :src="get_userInfo.imgUrl" v-if="get_userInfo.imgUrl" alt="" class="user-avatar">
        <div class="user-avatar-text" v-else>{{get_userInfo.username ? get_userInfo.username.substr(-2).toUpperCase() : '--'}}</div>
        <p class="username">{{get_userInfo.username}}</p>
      </router-link>
      <div class="flex mb-15">
        <el-button
            type="primary"
            class="security-setting-btn"
            size="medium"
            @click="$router.push('/securitySetting')">
          <!--安全设置-->{{$t('headerCom.securitySettings')}}
        </el-button>
        <el-button type="primary" class="ml-auto" plain size="medium" @click="logout">
          <!--退出-->{{$t('common.logout')}}
        </el-button>
      </div>
      <div class="lang-trigger" @click="toggleLangModalVisible = true">
        <img :src="get_lang.img" alt="" class="country-img">
        <span>{{get_lang.name || '--'}}</span>
        <i class="el-icon-arrow-down ml-5"></i>
      </div>
      <!--<el-dropdown
          class="toggle-lang-dropdown"
          trigger="click"
          type="primary"
          size="medium"
          placement="bottom-start">
        <div class="lang-trigger">
          <img :src="get_lang.img" alt="" class="country-img">
          <span>{{get_lang.name || '&#45;&#45;'}}</span>
          <i class="el-icon-arrow-down ml-5"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>-->
    </div>
    <div class="hr mb-15"></div>
    <div class="pl-15 pr-15 mb-15">
      <el-button
          type="primary"
          class="block width-100 mb-15"
          size="medium"
          @click="updatePwdModalVisible = true"><!--修改密码-->{{$t('headerCom.updatePwd')}}</el-button>
      <el-button
          type="primary"
          class="width-100 block no-ml mb-15"
          size="medium"
          plain
          @click="$router.push('/userInfo')"><!--我的资料-->{{$t('headerCom.myProfile')}}</el-button>
      <!--<el-button type="default" class="block width-100 mb-15 no-ml" plain size="medium">
        &lt;!&ndash;节点配置&ndash;&gt;{{$t('common.nodeSettings')}}
      </el-button>-->
    </div>
    <div class="hr"></div>
    <nav class="header-mobile-nav">
      <ul class="nav-list">
        <template v-for="(item,index) in navList">
          <li class="nav-item" v-if="!item.children" :key="item.name + index">
            <router-link :to="item.to" class="nav-link" active-class="active">{{item.name}}</router-link>
          </li>
          <li class="nav-item" v-else :key="item.name">
            <div class="nav-title" @click="item.spread = !item.spread">
              {{item.name}}
              <span>
              <i class="el-icon-arrow-down" v-show="!item.spread"></i>
              <i class="el-icon-arrow-up" v-show="item.spread"></i>
            </span>
            </div>
            <el-collapse-transition>
              <ul class="sub-nav" v-show="item.spread">
                <li class="sub-nav-item" v-for="(subItem,index2) in item.children" :key="subItem.name + index2">
                  <router-link :to="subItem.to" class="nav-link" active-class="active">{{subItem.name}}</router-link>
                </li>
              </ul>
            </el-collapse-transition>
          </li>
        </template>
      </ul>
    </nav>

    <!--修改登录密码弹窗-->
    <update-pwd-modal :show.sync="updatePwdModalVisible"></update-pwd-modal>
    <!--切换语言弹窗-->
    <toggle-lang-modal :show.sync="toggleLangModalVisible"></toggle-lang-modal>
    <!--节点设置弹窗-->
    <node-setting-modal :show.sync="nodeSettingModalVisible"></node-setting-modal>
  </aside>
</template>

<script>
  import {tool} from "../../../common/js/tool";
  import {logout} from "../../../router/accountUnit";
  import {mapGetters} from "vuex";
  import UploadPwdModal from "../update-pwd-modal/UpdatePwdModal";
  import ToggleLangModal from "../toggle-lang-modal/ToggleLangModal";
  import NodeSettingModal from "../node-setting-modal/NodeSetting";

  export default {
    name: "HeaderMobile",
    components: {
      'update-pwd-modal': UploadPwdModal,
      'toggle-lang-modal': ToggleLangModal,
      'node-setting-modal': NodeSettingModal
    },
    props: {
      display: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        visible: this.display || false,
        mask: null,
        zIndex: 200,
        scrollLocked: false, // body滚动条是否被锁住(即没有滚动条)
        updatePwdModalVisible: false,
        toggleLangModalVisible: false,
        nodeSettingModalVisible: false,
        navList: []
      }
    },
    methods: {
      show(){
        this.visible = true;
        this.mask = this.$mask({
          zIndex: this.zIndex - 1,
          onClick: () =>{
            this.hide();
          }
        });
        this.mask.show();
        this.doLockScroll();
        this.$emit('update:display', true);
      },
      hide(){
        this.visible = false;
        if(this.mask){
          this.mask.hide();
          this.mask = null;
        }
        if(this.scrollLocked){
          document.body.style.paddingRight = '';
          tool.removeClass(document.body, 'overflow');
          this.scrollLocked = false;
        }
        this.$emit('update:display', false);
      },
      // 锁定滚动条
      doLockScroll(){
        let $body = document.body;
        let $html = document.documentElement;
        let scrollWidth = tool.getScrollWidth();
        // 说明网页有滚动条
        if($html.clientHeight < $body.scrollHeight){
          if(scrollWidth > 0){
            $body.style.paddingRight = scrollWidth + 'px';
          }
          tool.addClass($body, 'overflow');
          this.scrollLocked = true;
        }
      },
      logout(){
        logout(() => {
          this.$router.push('/login');
        });
      }
    },
    computed: {
      ...mapGetters(['get_userInfo', 'get_lang']),
      navList2(){
        let arr = [
          {name: this.$t('common.home'), to: '/walletHome'}, // 首页
          {name: this.$t('headerCom.assets'), to: '/myWallet'}, // 资产
          {name: this.$t('headerCom.investment'), to: '/investManagement'}, // 投资管理
          {name: this.$t('headerCom.customerService'), to: '/feedback'}, // 客户服务
          {
            name: this.$t('common.more'), // 更多
            to: null,
            spread: false,
            children: [
              //{name: this.$t('headerCom.helpCenter'), to: '/helpCenter'}, // 帮助中心
              {name: this.$t('common.aboutUs'), to: '/aboutUs'}, // 关于我们
              //{name: this.$t('headerCom.legallyRelevant'), to: '/helpCenter'} // 法律相关
            ]
          },
        ];
        return arr;
      }
    },
    watch: {
      navList2: {
        immediate: true,
        handler(newVal){
          let arrStr = JSON.stringify(newVal);
          this.navList = JSON.parse(arrStr);
        }
      },
      display(newVal){
        if(newVal !== this.visible){
          this.visible = newVal;
          if(newVal){
            this.show();
          }else{
            this.hide();
          }
        }
      }
    },
    mounted() {
      if(this.visible){
        this.show();
      }
    }
  }
</script>

<style lang="scss">
@import "header-mobile";
</style>
