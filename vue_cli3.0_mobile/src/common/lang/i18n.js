/*
  该文件主要用于国际化配置
 */
import Vue from "vue";
import VueI18n from 'vue-i18n';    // 引入vue国际化插件

// 引入自定义的语言包
import {zhCN} from "./dict-i18n/zh.js";
import {zhTW} from "./dict-i18n/zt.js";
import {enUS} from './dict-i18n/en.js';
Vue.use(VueI18n);

// 定义所有语言
let messages = {
  'zh-CN': {
    ...zhCN,
  },
  'zh-TW': {
    ...zhTW
  },
  'en-US': {
    ...enUS
  },
};
const defaultLang = 'zh-CN';
const i18n = new VueI18n({
  locale: defaultLang, // 语言标识
  messages,
});

export default i18n;
