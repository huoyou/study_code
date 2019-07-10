// 默认layout
//import UHeader from '../components/header/UHeader'
import DefaultLayout from '../views/layout/DefaultLayout';

// 登录
//import Login from "../views/account/login/Login";
/* 使用这种方式引入组件可以将同一个模块的代码打包到同一个文件中 /!* webpackChunkName: "account" *!/
* 中的 account 就是打包后的文件名称 */
let Login = () => import(/* webpackChunkName: "account" */ '../views/account/login/Login');
// 注册
//import Regist from "../views/account/regist/Regist";
let Regist = () => import(/* webpackChunkName: "account" */ '../views/account/regist/Regist');
// 忘记密码
//import ForgetPwd from "../views/account/forget-pwd/ForgetPwd";
let ForgetPwd = () => import(/* webpackChunkName: "account" */ '../views/account/forget-pwd/ForgetPwd');


// 钱包首页
import WalletHome from '../views/wallet-home/WalletHome';
// 收益
/*//import Incomes from "../views/incomes/Incomes";
let Incomes = () => import(/!* webpackChunkName: "incomes" *!/ '../views/wallet/incomes/Incomes');*/

// 钱包 -> 我的钱包页面
//import MyWallet from "../views/wallet/my-wallet/MyWallet";
let MyWallet = () => import(/* webpackChunkName: "wallet" */ '../views/wallet/my-wallet/MyWallet');
/*// 钱包 -> 记录页面
//import WalletRecords from "../views/address-book/WalletRecords";
let WalletRecords = () => import(/!* webpackChunkName: "wallet" *!/ '../views/wallet/wallet-records/WalletRecords');*/
// 钱包 -> 地址蒲页面
//import AddressBook from "../views/wallet-records/AddressBook";
let AddressBook = () => import(/* webpackChunkName: "wallet" */ '../views/address-book/AddressBook');

// 钱包 -> 投资管理
//import InvestManagement from "../views/wainvest-management/InvestManagement";
let InvestManagement = () => import(/* webpackChunkName: "wallet" */ '../views/invest-management/InvestManagement');

// 关于 -> 意见反馈
//import Feedback from "../views/feedbackds/Feedback";
let Feedback = () => import(/* webpackChunkName: "about" */ '../views/feedback/Feedback');

// 安全设置
//import SecuritySetting from "../views/security-setting/SecuritySetting";
let SecuritySetting = () => import(/* webpackChunkName: "security_setting" */ '../views/security-setting/SecuritySetting');

// 用户资料
//import UserInfo from "../views/userinfo/UserInfo";
let UserInfo = () => import(/* webpackChunkName: "security_setting" */ '../views/userinfo/UserInfo');


// 消息中心
//import Messages from "../views/messages/Messages";
let Messages = () => import(/* webpackChunkName: "other" */ '../views/messages/Messages.vue');

// 系统公告
//import Announcement from "../views/announcement/Announcement";
let Announcement = () => import(/* webpackChunkName: "other" */ '../views/announcement/Announcement.vue');

// 文章详情
//import ArticleDetail from "../views/article-detail/ArticleDetail";
let ArticleDetail = () => import(/* webpackChunkName: "other" */ '../views/article-detail/ArticleDetail.vue');

// 关于我们
//import AboutUs from "../views/about-us/AboutUs";
let AboutUs = () => import(/* webpackChunkName: "other" */ '../views/about-us/AboutUs.vue');

// 帮助中心
//import HelpCenter from "../views/help-center/HelpCenter";
let HelpCenter = () => import(/* webpackChunkName: "other" */ '../views/help-center/HelpCenter.vue');

let coms = [
  {
    path: '/',
    redirect: '/walletHome'
  },
  {
    path: '/defaultLayout', // 默认layout
    name: 'defaultLayout',
    component: DefaultLayout,
    children: [
      // 登录页面
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          header: 'header-notlogin', // 使用未登录时的header组件
          calMinHeight: false
        }
      },
      // 注册页面
      {
        path: '/regist',
        name: 'regist',
        component: Regist,
        meta: {
          header: 'header-notlogin', // 使用未登录时的header组件
          calMinHeight: false
        }
      },
      // 忘记密码页面
      {
        path: '/forgetPwd',
        name: 'forgetPwd',
        component: ForgetPwd,
        meta: {
          header: 'header-notlogin', // 使用未登录时的header组件
          calMinHeight: false
        }
      },
      // 首页
      {
        path: '/walletHome',
        name: 'walletHome',
        component: WalletHome,
        meta: {
          requireAuth: true
        }
      },
     /* // 收益页面
      {
        path: '/incomes',
        name: 'incomes',
        redirect: '/incomes/staticIncome',
        component: Incomes,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/incomes/:tab',
            component: Incomes,
            meta: {
              requireAuth: true
            },
          }
        ]
      },*/
      // 钱包 -> 我的钱包
      {
        path: '/myWallet',
        name: 'myWallet',
        component: MyWallet,
        meta: {
          requireAuth: true
        }
      },
      // 投资管理页面
      {
        path: '/investManagement',
        name: 'investManagement',
        component: InvestManagement,
        meta: {
          requireAuth: true
        }
      },
      /*// 钱包 -> 记录页面
      {
        path: '/walletRecords',
        name: 'walletRecords',
        redirect: '/walletRecords/recharge',
        component: WalletRecords,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/walletRecords/:tab',
            component: WalletRecords,
            meta: {
              requireAuth: true
            },
          }
        ]
      },*/
      // 地址蒲
      {
        path: '/addressBook',
        name: 'addressBook',
        component: AddressBook,
        meta: {
          requireAuth: true
        }
      },
      // 地址蒲
      {
        path: '/feedback',
        name: 'feedback',
        component: Feedback,
        meta: {
          requireAuth: true
        }
      },
      // 安全设置
      {
        path: '/securitySetting',
        name: 'securitySetting',
        component: SecuritySetting,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/securitySetting/:tab',
            component: SecuritySetting,
            meta: {
              requireAuth: true
            },
          }
        ]
      },
      // 用户资料
      {
        path: '/userInfo',
        name: 'userInfo',
        component: UserInfo,
        meta: {
          requireAuth: true
        }
      },
      // 消息中心
      {
        path: '/messages',
        name: 'messages',
        component: Messages,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/messages/:messageId',
            component: Messages,
            meta: {
              requireAuth: true
            },
          }
        ]
      },
      // 系统公告
      {
        path: '/announcement',
        name: 'announcement',
        component: Announcement,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/announcement/:announcementId',
            component: Announcement,
            meta: {
              requireAuth: true
            },
          }
        ]
      },
      // 文章详情
      {
        path: '/articleDetail/:category/:articleId',
        name: 'articleDetail',
        component: ArticleDetail,
        meta: {
          requireAuth: true
        },
				props: true
      },
      // 关于我们
      {
        path: '/aboutUs',
        name: 'aboutUs',
        component: AboutUs,
        meta: {
          header: 'auto' // 根据用户是否登录自动切换header
        }
      },
      // 帮助中心
      {
        path: '/helpCenter',
        name: 'helpCenter',
        component: HelpCenter,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/helpCenter/:id',
            component: HelpCenter,
            meta: {
              requireAuth: true
            },
          }
        ]
      }

    ]
  }
  /*{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
];

export default coms;
