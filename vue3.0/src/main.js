import Vue from 'vue'
import 'iview/dist/styles/iview.css'    // 使用 CSS
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import backTop from './components'

import vConsole from '@/utils/vconsole.js'
Vue.use(iView)
Vue.config.productionTip = false
Vue.use(backTop)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
