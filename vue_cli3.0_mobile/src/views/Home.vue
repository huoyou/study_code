<template>
  <div class="home">
    <img class="img"
         alt="Vue logo"
         src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div class="aaa">{{13177914213 | $formatPhone('start',8)}}</div>
    <div class="img1"></div>
    <div class="img2"></div>
    <div class="img11"></div>
    <div class="img12"></div>
    <div class="img3"></div>
    <div class="img4"></div>
    <div class="img5"></div>
    <div class="img6"></div>
    <test-com></test-com>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

  @Component({
    components: {
      HelloWorld
    },
    props: {},
    data() {
      return {};
    },
    created () {
    },
    mounted() {
    },
    methods: {}
  })
  export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
  .home {
    .img {
      @include wh(300px,300px);
      // @include ct();
    }
    .aaa {
      @include border-bottom();
    }
    .img1 {
      width: 200px;
      height: 200px;
      background: url('~_assets/images/sprites/success.png') no-repeat;
    }
     .img2 {
      width: 100px;
      height: 100px;
      background: url('~_assets/images/sprites/circleyes.png') no-repeat;
    }
    .img11 {
      width: 200px;
      height: 200px;
      background: url('~_assets/images/sprites/success.png') no-repeat;
    }
     .img12 {
      width: 100px;
      height: 100px;
      background: url('~_assets/images/sprites/circleyes.png') no-repeat;
    }
     .img6 {
      width: 100px;
      height: 100px;
      background: url('~_assets/images/sprites/log1.png') no-repeat;
    }
     .img3 {
      width: 100px;
      height: 100px;
      background: url('~_assets/images/sprites/login.jpg') no-repeat;
    }
     .img4 {
      width: 100px;
      height: 100px;
      background: url('~_assets/images/sprites/login-bg.jpg') no-repeat;
    }
     .img5 {
      width: 100px;
      height: 100px;
      background: url('~_assets/images/sprites/login-bg1.jpg') no-repeat;
    }
  }
</style>

