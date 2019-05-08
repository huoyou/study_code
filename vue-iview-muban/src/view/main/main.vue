<template>
  <Layout style="height: 100%"
          class="main">
    <Sider hide-trigger
           collapsible
           :width="256"
           :collapsed-width="64"
           v-model="collapsed"
           class="left-sider"
           :style="{overflow: 'hidden'}">
      <side-menu accordion
                 ref="sideMenu"
                 :active-name="$route.name"
                 :collapsed="collapsed"
                 :theme = "theme"
                 @on-select="turnToPage"
                 :menu-list="menuList">
        <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
        <div class="logo-con">
          <img v-show="!collapsed"
               :src="maxLogo"
               key="max-logo" />
          <img v-show="collapsed"
               :src="minLogo"
               key="min-logo" />
        </div>
      </side-menu>
    </Sider>
    <Layout>
      <Header class="header-con">
        <header-bar :collapsed="collapsed"
                    @on-coll-change="handleCollapsedChange">
          <user :user-avatar="userAvator" />
          <fullscreen v-model="isFullscreen"
                      style="margin-right: 10px;" />
        </header-bar>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <div class="tag-nav-wrapper">
            <tags-nav :value="$route"
                      @input="handleClick"
                      :list="tagNavList"
                      :showClose="showClose"
                      @on-close="handleCloseTag" />
          </div>
          <Content class="content-wrapper">
            <keep-alive :include="cacheList">
              <router-view />
            </keep-alive>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
  import config from '@/config'
  import SideMenu from './components/side-menu'
  import HeaderBar from './components/header-bar'
  import TagsNav from './components/tags-nav.vue'
  import User from './components/user.vue'
  import Fullscreen from './components/fullscreen'
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import { getNewTagList, routeEqual, getNextRoute } from '@/libs/util'
  import minLogo from '@/assets/images/log1.png'
  import maxLogo from '@/assets/images/logo2.png'
  export default {
    name: 'Main',
    components: {
      SideMenu,
      HeaderBar,
      TagsNav,
      Fullscreen,
      User,
    },
    data() {
      return {
        collapsed: false,
        minLogo,
        maxLogo,
        isFullscreen: false,
        theme: config.theme,
        showClose: true
      }
    },
    computed: {
      tagNavList() {
        return this.$store.state.app.tagNavList
      },
      tagRouter() {
        return this.$store.state.app.tagRouter
      },
      userAvator() {
        return this.$store.state.user.avatorImgPath
      },
      cacheList() {
        return this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []
      },
      menuList() {
        return this.$store.getters.menuList
      },
      local() {
        return this.$store.state.app.local
      }
    },
    methods: {
      ...mapMutations([
        'setBreadCrumb',
        'setTagNavList',
        'addTag',
        'setLocal',
        'closeTag'
      ]),
      ...mapActions([
        'handleLogin'
      ]),
      turnToPage(route) {
        let { name, params, query } = {}
        if (typeof route === 'string') name = route
        else {
          name = route.name
          params = route.params
          query = route.query
        }
        if (name.indexOf('isTurnByHref_') > -1) {
          window.open(name.split('_')[1])
          return
        }
        this.$router.push({
          name,
          params,
          query
        })
      },
      handleCollapsedChange(state) {
        this.collapsed = state
      },
      handleCloseTag(res, type, route) {
        let openName = ''
        if (type === 'all') {
          this.turnToPage('home')
          openName = 'home'
        } else if (routeEqual(this.$route, route)) {
          if (type === 'others') {
            openName = route.name
          } else {
            const nextRoute = getNextRoute(this.tagNavList, route)
            this.$router.push(nextRoute)
            openName = nextRoute.name
          }
        }
        this.setTagNavList(res)
        this.$refs.sideMenu.updateOpenName(openName)
      },
      handleClick(item) {
        this.turnToPage(item)
      }
    },
    watch: {
      '$route'(newRoute) {
        this.setBreadCrumb(newRoute.matched)
        this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
      }
    },
    mounted() {
      /**
       * @description 初始化设置面包屑导航和标签导航
       */
      this.setTagNavList()
      this.addTag({
        route: this.$store.state.app.homeRoute
      })
      this.setBreadCrumb(this.$route.matched)
      // 设置初始语言
      this.setLocal(this.$i18n.locale)
    }
  }
</script>
<style lang="less">
  .main {
    .logo-con {
      height: 64px;
      padding: 10px;
      img {
        height: 44px;
        width: auto;
        display: block;
        margin: 0 auto;
      }
    }
    .header-con {
      background: #fff;
      padding: 0 20px;
      width: 100%;
    }
    .main-layout-con {
      height: 100%;
      overflow: hidden;
    }
    .main-content-con {
      height: ~"calc(100% - 60px)";
      overflow: hidden;
    }
    .tag-nav-wrapper {
      padding: 0;
      height: 40px;
      background: #f0f0f0;
    }
    .content-wrapper {
      padding: 18px;
      height: ~"calc(100% - 80px)";
      overflow: auto;
    }
    .left-sider {
      .ivu-layout-sider-children {
        overflow-y: scroll;
        margin-right: -18px;
      }
    }
  }
  .ivu-menu-item > i {
    margin-right: 12px !important;
  }
  .ivu-menu-submenu > .ivu-menu > .ivu-menu-item > i {
    margin-right: 8px !important;
  }
  .collased-menu-dropdown {
    width: 100%;
    margin: 0;
    line-height: normal;
    padding: 7px 0 6px 16px;
    clear: both;
    font-size: 12px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    &:hover {
      background: rgba(100, 100, 100, 0.1);
    }
    & * {
      color: #515a6e;
    }
    .ivu-menu-item > i {
      margin-right: 12px !important;
    }
    .ivu-menu-submenu > .ivu-menu > .ivu-menu-item > i {
      margin-right: 8px !important;
    }
  }

  .ivu-select-dropdown.ivu-dropdown-transfer {
    max-height: 400px;
  }
</style>

