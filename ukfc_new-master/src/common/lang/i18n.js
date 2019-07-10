/*
  该文件主要用于国际化配置
 */
import Vue from "vue"
import VueI18n from 'vue-i18n';    // 引入vue国际化插件

// 引入自定义的语言包
import {zhCN} from "./dict-i18n/zh";
import {zhHK} from "./dict-i18n/zt";
import {zhTW} from "./dict-i18n/zt";
import {enUS} from "./dict-i18n/en";
import {jaJP} from "./dict-i18n/jp";
import {koKR} from "./dict-i18n/ko";
import {ruRU} from "./dict-i18n/ru";
// element ui语言包
import eleLocaleZhCn from 'element-ui/lib/locale/lang/zh-CN';
import eleLocaleEnUs from 'element-ui/lib/locale/lang/en';
import eleLocaleZhHk from 'element-ui/lib/locale/lang/zh-TW';
import eleLocaleZhTW from 'element-ui/lib/locale/lang/zh-TW';
import eleLocaleJaJP from 'element-ui/lib/locale/lang/ja';
import eleLocaleKoKR from 'element-ui/lib/locale/lang/ko';
import eleLocaleRuRU from 'element-ui/lib/locale/lang/ru-RU';
import locale from 'element-ui/lib/locale';
// vee
import {updateVeeLang} from "./vee-i18n";
import {initVee_validationRules} from "../validator/regexRules";

updateVeeLang();              // Vee自动获取语言
initVee_validationRules();    // Vee-Rules规则
Vue.use(VueI18n);

// 定义所有语言
let messages = {
  'zh-CN': {
    ...zhCN,
    // element ui语言包
    ...eleLocaleZhCn
  },
  'zh-HK': {
    ...zhHK,
    ...eleLocaleZhHk
  },
  'zh-TW': {
    ...zhTW,
    ...eleLocaleZhTW
  },
  'en-US': {
    ...enUS,
    ...eleLocaleEnUs
  },
  'ja-JP': {
    ...jaJP,
    ...eleLocaleJaJP
  },
  'ko-KR': {
    ...koKR,
    ...eleLocaleKoKR
  },
  'ru-RU': {
    ...ruRU,
    ...eleLocaleRuRU
  }
};
const defaultLang = 'en-US';
const i18n = new VueI18n({
  locale: defaultLang, // 语言标识
  messages,
});
locale.i18n((key, value) => i18n.t(key, value)); //为了实现element插件的多语言切换

export default i18n;
