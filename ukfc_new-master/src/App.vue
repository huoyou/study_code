<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {isLogin, logout} from "./router/accountUnit";
  import {tool} from "./common/js/tool";
  import {mapActions, mapMutations, mapGetters} from "vuex";
  import {updateVeeLang} from "./common/lang/vee-i18n";
  import {commonApi} from "./common/api/commonApi";

  export default {
    name: "App",
    data(){
      return {
        getLangsCount: 0,
        getLangsCountMax: 5
      }
    },
    methods: {
      ...mapMutations(['set_lang', 'set_langs']),
      ...mapActions(['getUserInfo_action', 'getLangs_action',
        'getCoinList_action', 'getFuturesList_action', 'getCurrencyList_action', 'getAccountBalance_action']),
      // 获取浏览器语言
      browserLang(){
        let lang = tool.getBrowserLang();
        if (/\w+-(\w+)/.test(lang)) {
          let arr = lang.split("-");
          arr[1] = RegExp.$1.toUpperCase();

          lang = arr.join("_");
        }
        return lang;
      },
      // 设置默认语言
      setDefaultLang(langs){
        let langItem;
        if(this.get_lang.code){
          /* this.set_lang(this.get_lang);
           this.$i18n.locale = this.get_lang.code.replace("_","-");*/
          langItem = this.get_lang;
          updateVeeLang(langItem.code);
          this.$i18n.locale = langItem.code.replace("_","-");
          commonApi.toggleLang(langItem.code);
          return true;
        }else{
          if(langs){
            //let browserLang = this.browserLang();
            let browserLang = 'en_US'; // 强制默认英文
            console.log('浏览器语言', browserLang)
            let index = tool.getIndex(langs, item => {
              return item.code === browserLang;
            });
            let squareWithBrowserLang = langs[index];
            if(squareWithBrowserLang){
              langItem = squareWithBrowserLang;
            }else{
              //langItem = langs[0];
              // 强制默认英文
              let index = tool.getIndex(langs, item => {
                return item.code === 'en_US';
              });
              if(index > -1){
                langItem = langs[index];
              }else{
                langItem = langs[0];
              }
            }
          }
        }

        /*为了让他们演示 start*/
        /*let index = tool.getIndex(langs, item => {
          return item.code === "en_US";
        });
        if(index > -1){
          this.set_lang(langs[index]);
          this.$i18n.locale = "en-US";
          return true;
        }else{
          return  false;
        }*/
        /*为了让他们演示 end*/


        if(langItem){
          this.set_lang(langItem);
          updateVeeLang(langItem.code);
          this.$i18n.locale = langItem.code.replace("_","-");
          commonApi.toggleLang(langItem.code);
          return true;
        }else{
          return false;
        }
      }
    },
    computed:{
      ...mapGetters(['get_langs', 'get_lang','get_coinList', 'get_futuresList', 'get_currencyList']),
    },
    created() {
      let browser = tool.browser();
      let className = '';
      /*页面进来强制刷新语言，后台有可能会改配置，后面可删掉 start*/
      //this.set_lang({});
      //this.set_langs([]);
      /*页面进来强制刷新语言，后台有可能会改配置，后面可删掉 end*/
      let langSetted = this.setDefaultLang();

      if(browser.mobile){
        className = 'mobile';
      }else{
        className = 'pc';
      }
      if(browser.ios){
        className += ' ios';
      }
      if(browser.android){
        className += ' android';
      }
      if(browser.safari){
        className += ' safari';
      }
      if(browser.safari){
        className += ' safari';
      }
      if(browser.ie){
        className += ' ie';
      }
      if(browser.edge){
        className += ' edge';
      }
      this.$nextTick(() => {
        tool.addClass(document.body, className);
      });

      // 如果从store中获取不到语言列表，则从接口中获取，最多重试5次
      if(this.get_langs.length === 0){
        this.getLangsCount++;
        this.getLangs_action()
          .then(res => {
            if(res && res.data){
              let langs = res.data;
              if(!langSetted){
                langSetted = this.setDefaultLang(langs);
              }
            }
          })
          .catch(() => {
            if(this.getLangsCount <= this.getLangsCountMax){
              this.getLangsCount++;
              this.getLangs_action();
            }
          });
      }else{
        if(!langSetted){
          langSetted = this.setDefaultLang(this.get_langs);
        }
      }
      if(isLogin()){
        this.getUserInfo_action();
        if(this.get_coinList.length === 0){
          this.getCoinList_action();
        }
       /* if(this.get_userVipList.length === 0){
          this.getUserVipList_action();
        }*/
        if(this.get_futuresList.length === 0){
          this.getFuturesList_action();
        }
        if(this.get_currencyList.length === 0){
          this.getCurrencyList_action();
        }
        this.getAccountBalance_action();
      }else{
        logout();
      }

    },

  }
</script>

<style lang="scss">
  /* scss中如果.scss文件中引用了背景图，则需要使用这种方式引入，否则会报图片找不到错误，
   并且在.scss文件中引入图片只需要使用./assess引入即可
    参考文章：https://blog.csdn.net/qq_38188485/article/details/80707084
    */
  @import "~@/common/css/index";
</style>
