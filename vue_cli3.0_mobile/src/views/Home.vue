<template>
  <div class="home">
    <img class="img"
         alt="Vue logo"
         src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div class="aaa">{{13177914213 | $formatPhone('start',8)}}</div>
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
    data() {
      return {};
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
      @include ct();
    }
    .aaa {
      @include border-bottom();
    }
  }
</style>

