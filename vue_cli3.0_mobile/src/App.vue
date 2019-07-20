<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "_common/css/reset.scss";
  @import "_common/css/common.scss";
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: $font-size-base;
    color: $color-common;
  }
</style>
