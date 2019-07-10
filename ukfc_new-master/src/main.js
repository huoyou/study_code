import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import i18n from './common/lang/i18n'
// 解决ie不支持promise问题
import "babel-polyfill";
import ElementUI from 'element-ui';
import '../theme/index.css';
/*import 'element-ui/lib/theme-chalk/index.css';*/
// 引入vee-validate（vue表单验证插件）
import VeeValidate from 'vee-validate';
// 引入日期时间控件
import Datetime from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(ElementUI);
Vue.use(VeeValidate, {
  events: 'blur',                  // 仅input框，改变焦点时校验
  useConstraintAttrs: false // 禁用自动校验html5 type
});

Vue.use(Datetime);

// 导入自定义遮罩组件
import {Mask} from "./components/ui-components/mask";
// 将Mask绑定到Vue.prototype中。这样在组件中就可以通过this.$mask()的形式来使用了
Vue.prototype.$mask = Mask;
// 导入自定义bootstrap弹窗组件
import BootModal from './components/ui-components/boot-modal/BootModal';
Vue.component('boot-modal', BootModal);
// 导入自定义多内容bootstrap弹窗组件
import BootMultiModal from './components/ui-components/boot-multi-modal/BootMultiModal';
// 导入弹窗内容组件
import ModalContent from './components/ui-components/modal-content/ModalContent';
Vue.component('boot-multi-modal', BootMultiModal);
Vue.component('modal-content', ModalContent);
// 导入加载更多数据条组件
import LoadMoreDataBar from './components/ui-components/load-more-bar/LoadMoreBar';
Vue.component('load-data-bar', LoadMoreDataBar);
// 导入验证码组件
import VerifyBtn from './components/business-components/verify-btn/VerifyBtn';
Vue.component('verify-btn', VerifyBtn);
// 导入切换验证码方式组件
import ChangeVerifyType from './components/business-components/change-verify-type/ChangeVerifyType';
Vue.component('change-verify-type', ChangeVerifyType);

// 引入math.js
import math from 'mathjs';
/*
  创建一个BigNumber类型的数字输出，使用$bigNumber计算可以使得js计算更准确
  加法计算：
    this.$bigMath.eval('0.1 + 0.2').valueOf(); // 输出: 0.3
  减法计算:
    this.$bigMath.eval('0.3 - 0.2').valueOf();
  乘法计算：
    this.$bigMath.eval('0.1 * 0.2').valueOf(); // 输出：0.02
  除法计算：
    this.$bigMath.eval('0.3 / 0.1').valueOf(); // 输出：3
 */
Vue.prototype.$bigMath = math.create({
  number: 'BigNumber'
});

// 引入自定义指令
import './directive/directive.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n: i18n,
  render: h => h(App)
}).$mount('#app');
