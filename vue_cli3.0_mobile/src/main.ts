import Vue from 'vue'
import App from './App.vue'
import './plugins/index'
import router from './router/index'
import i18n from './common/lang/i18n.js';
import store from './store/index.js'
import 'amfe-flexible'
import FastClick from 'fastclick'

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

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
