#### 
1. 非动态菜单设置
* 修改src/router/index.js
* store/module/app.js,修改如下
``` javascript
  // 修改前
  getters: {
    menuList: (state, getters, rootState) => getMenuByRouter(state.routers, rootState.user.access),
  }
  // 修改后
  getters: {
    menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.user.access),
  }
```