import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'amfe-flexible'
import FastClick from 'fastclick'
import importVantComponents from './import-vant-components';
importVantComponents();                                           // 按需导入Vant组件


Vue.config.productionTip = false;
// 解决300ms延迟
FastClick.attach(document.body);
// 解决击穿bug
FastClick.prototype.onTouchEnd = function (event:any) {
  if (event.target.hasAttribute("type") && event.target.getAttribute("type") == "text") {
    event.preventDefault();
    return false;
  }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
