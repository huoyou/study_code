// 引入vee-validate（vue表单验证插件）
import {Validator} from 'vee-validate';
// 引入vue国际化插件
//import VueI18n from 'vue-i18n';
//import en from 'vee-validate/dist/locale/en';
import store from "../../store";
import {tool} from "../../common/js/tool";


// import {zh_dictionary} from "./dict-vee/zh";
// import {hk_dictionary} from "./dict-vee/zt";
// import {zt_dictionary} from "./dict-vee/zt";
// import {en_dictionary} from "./dict-vee/en";
// import {ko_dictionary} from "./dict-vee/ko";
// import {jp_dictionary} from "./dict-vee/jp";

const LangMap = {
  en_US: 'en_US',
  zh_CN: 'zh_CN',
  zh_TW: 'zh_TW',
  zh_HK: 'zh_HK',
  ko_KR: 'ko_KR',
  ja_JP: 'ja_JP',
  ru_RU: 'ru_RU'
};

const VeeLocalMap = {
  en_US: 'en',
  zh_CN: 'cn',
  zh_TW: 'zt',
  zh_HK: 'hk',
  ko_KR: 'ko',
  ja_JP: 'jp',
  ru_RU: 'ru'
};


// const DefaultVeeLang = LangMap.zh_CN;
// 加载【Vee-Validator】自带的缺省语言
// function vee_SystemLocale_init(lang) {
//   import zh_CN from 'vee-validate/dist/locale/zh_CN';
//   Validator.localize(lang, zh_CN);       // 默认验证规则 - 内置词典
// }

// // 加载【Vee-Validator】用户自己的语言包
// function vee_UserCustomLocale_init() {
//
// }

// 获取使用中语种
function getLang() {
// 获取当前语言
  let lang = store.getters.getLang;
  if (!lang || !lang.code) {
    lang = tool.getBrowserLang();
    if (/\w+-(\w+)/.test(lang)) {
      let arr = lang.split("-");
      arr[1] = RegExp.$1.toUpperCase();

      lang = arr.join("_");
      arr = null;
    }
  } else {
    lang = lang.code;
  }
  return lang;
}

/**
 * 动态改变Vee语言
 * @param targetLang 可选。  不传则自动从store、浏览器获取语言。
 */
export function updateVeeLang(targetLang) {
  const lang = targetLang || getLang();
  switch (lang) {
    case LangMap.en_US:
      import('./dict-vee/en').then(dict => {
        setLocal(dict.en_dictionary);
      });
      break;
    case LangMap.zh_CN:
      import('./dict-vee/zh').then(dict => {
        setLocal(dict.zh_dictionary);
      });
      break;
    case LangMap.zh_TW:
      import('./dict-vee/zt').then(dict => {
        setLocal(dict.zt_dictionary);
      });
      break;
    case LangMap.zh_HK:
      import('./dict-vee/zt').then(dict => {
        setLocal(dict.hk_dictionary);
      });
      break;
    case LangMap.ko_KR:
      import('./dict-vee/ko').then(dict => {
        setLocal(dict.ko_dictionary);
      });
      break;
    case LangMap.ja_JP:
      import('./dict-vee/jp').then(dict => {
        setLocal(dict.jp_dictionary);
      });
      break;
    case LangMap.ru_RU:
      import('./dict-vee/ru').then(dict => {
        setLocal(dict.ru_dictionary);
      });
      break;
  }

  function setLocal(customDict) {
    let option = {
      messages: {},
      custom: {
        ...customDict
      }
    };

    console.log('当前语言', lang, '查看vee', option);
    Validator.localize(VeeLocalMap[lang], option);
  }

}
