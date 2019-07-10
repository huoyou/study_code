<template>
  <div class="default-layout-com">
    <!--<u-header></u-header>-->
    <!--动态切换header-->
    <component :is="headerCom" ref="header_com"></component>
    <section class="default-layout-main" ref="layout_main">
      <router-view></router-view>
    </section>
    <u-footer ref="footer_com"></u-footer>

    <!--移动端导航-->
    <header-mobile :display.sync="headerMobileShow" ref="header_mobile"></header-mobile>
  </div>
</template>

<script>
  // @ is an alias to /src
  import UHeader from '../../components/business-components/header/UHeader';
  import HeaderNotLogin from '../../components/business-components/header-notlogin/HeaderNotLogin';
  import HeaderMobile from '../../components/business-components/header-mobile/HeaderMobile';
  import UFooter from '../../components/business-components/footer/UFooter';
  import {tool} from "../../common/js/tool";
  import {isLogin} from "../../router/accountUnit";

  export default {
    name: "DefaultLayout",
    provide(){
      return {
        showMobileNav: this.showMobileNav
      }
    },
    components: {
      'u-header': UHeader,
      'header-notlogin': HeaderNotLogin,
      'header-mobile': HeaderMobile,
      'u-footer': UFooter
    },
    data(){
      return {
        headerMobileShow: false
      }
    },
    methods: {
      // 显示移动端导航
      showMobileNav(flag){
        //let $header_mobile = this.$refs.header_mobile;
        if(typeof flag === 'undefined'){
//          flag = !$header_mobile.visible;
          flag = !this.headerMobileShow;
        }else{
          flag = !!flag;
        }
        this.headerMobileShow = flag;
        /*if(flag){
          this.$refs.header_mobile.show();
        }else{
          this.$refs.header_mobile.hide();
        }*/
      },
      // 计算中心内容的最小高度
      calcLayoutMainMinHeight(){
        this.$nextTick(() => {
          let $refs = this.$refs;
          if(this.$route.meta.calMinHeight === false){
            $refs.layout_main.style.minHeight = '';
            return;
          }
          let wh = window.innerHeight;
          let headerH = $refs.header_com.$el.offsetHeight;
          let footerH = $refs.footer_com.$el.offsetHeight;
          let res = wh - headerH - footerH;
          let originMinH = parseFloat($refs.layout_main.style.minHeight);
          if(!originMinH || res !== originMinH){
            $refs.layout_main.style.minHeight = res + 'px';
            //console.log('高度', wh, headerH, footerH);
          }
        });
      }
    },
    computed: {
      headerCom(){
        let meta = this.$route.meta;
        // 根据路由中meta.header的值来切换header，如果未传递，则默认是'u-header'
        if(meta && meta.header){
          // 如果meta.header的值为auto，则根据用户是否登录，自动切换header
          if(meta.header === 'auto'){
            if(isLogin()){
              return 'u-header';
            }else{
              return 'header-notlogin';
            }
          }else{
            return meta.header;
          }
        }else{
          return 'u-header';
        }
      }
    },
    watch: {
      '$route'(){
        let $header_mobile = this.$refs.header_mobile;
        // 路由改变时如果移动端导航栏显示出来了，则将其隐藏
        if($header_mobile.visible){
          //this.$refs.header_mobile.hide();
          this.headerMobileShow = false;
        }
        this.calcLayoutMainMinHeight();
      }
    },
    mounted() {
      this.calcLayoutMainMinHeight();
      tool.on(window, 'resize', this.calcLayoutMainMinHeight);
    },
    beforeDestroy() {
      tool.off(window, 'resize', this.calcLayoutMainMinHeight);
    }
  }
</script>
