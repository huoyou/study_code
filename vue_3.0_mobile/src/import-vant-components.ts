/*
  引入vant组件
*/
import Vue from 'vue';
import {
  Row,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  SwipeItem,
  NavBar,
  Panel,
  Field,
  Button,
  Lazyload,
  Tab,
  Tabs,
  List,
  PullRefresh,
  Popup,
  Picker,
  Toast,
  Collapse,
  CollapseItem,
  PasswordInput,
  NumberKeyboard,
  Notify,
  Loading
} from 'vant';

export default function () {
  Vue.use(Row).use(Col).use(Icon).use(Cell).use(CellGroup);
  Vue.use(Swipe).use(SwipeItem);
  Vue.use(NavBar);
  Vue.use(Panel);
  Vue.use(Field);
  Vue.use(Button);
  Vue.use(Lazyload);
  Vue.use(Tab).use(Tabs);
  Vue.use(List);
  Vue.use(PullRefresh);
  Vue.use(Popup);
  Vue.use(Picker);
  Vue.use(Toast);                       // 实际上Toast不需要全局use，因为具体使用时会在组件内导入
  Vue.use(Collapse);
  Vue.use(CollapseItem);
  Vue.use(PasswordInput).use(NumberKeyboard);
  Vue.use(Notify);
  Vue.use(Loading);
}
