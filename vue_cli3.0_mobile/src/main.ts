import Vue from 'vue'
import App from './App.vue'
import './plugins/index'
import router from './router/index'
import i18n from './common/lang/i18n.js';
import store from './store/index.js'
import FastClick from 'fastclick'
// @ts-ignore
import filters  from '_common/js/filters'
import 'amfe-flexible'
// import 'vant/lib/index.css';  // 引入vant全部样式,vue.config.js中按需引入失效.

// 导入vant组件
import initVantComponent from './vantComponent';
initVantComponent();


Vue.config.productionTip = false;

// 解决300ms延迟
(FastClick as any).attach(document.body);
// 解决击穿bug
FastClick.prototype.onTouchEnd = function (event:any) {
  if (event.target.hasAttribute("type") && event.target.getAttribute("type") == "text") {
    event.preventDefault();
    return false;
  }
}

// 全局过滤器
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
