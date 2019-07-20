<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <test-com></test-com>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
  data () {
    return {
      
    }
  },
  mounted () {
    console.log(22222)
  },
  methods: {
    
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  font-size: 12px;
  .img {
    width: 300px;
    height: 180px;
  }
}
</style>

