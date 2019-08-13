<template>
  <div class="home">
    <img class="img"
         alt="Vue logo"
         src="../assets/logo.png" >
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div class="aaa">{{13177914213 | $formatPhone('start',8)}}</div>
    <van-button type="default" @click="$router.push({path: 'test'})">跳转至test</van-button>
    <van-button type="primary" @click="$router.push({path: 'about'})">跳转至about</van-button>

    <div style="margin-top: 20px">
      <button type="info" @click="changeLanguage('1')" class="btn">简体中文</button>
      <button type="info" @click="changeLanguage('2')" class="btn">繁体中文</button>
      <button type="info" @click="changeLanguage('3')" class="btn">英文</button>
    </div>
    <div style="margin-top: 20px;padding: 20px;font-size: 16px">显示内容,多语言切换: <span style="font-weight: 700;color: blue;">{{$t('common.language')}}</span></div>
<!--    <div class="img1"></div>-->
<!--    <div class="img2"></div>-->
<!--    <div class="img11"></div>-->
<!--    <div class="img12"></div>-->
<!--    <div class="img3"></div>-->
<!--    <div class="img4"></div>-->
<!--    <div class="img5"></div>-->
<!--    <div class="img6"></div>-->
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

  @Component({
    components: {
      HelloWorld
    },
  })
  export default class Home extends Vue {
    // TIP————————————————————————————————————————初始化Mixin的上下级关系————————————————————————————
    public initFunc() {
    }
    // TIP—————————————————————————————————————— props ,在类中的实现——————————————————————————————————————

    // TIP————————————————————————————————————Data，在类中的实现（@Model相关的除外）——————————————————————
    // TIP——————————————————————————————————————computed，在类中的实现——————————————————————————————————————
    // TIP——————————————————————————————————————Vuex，在类中的实现——————————————————————————————————————
    // @State((state: IRootState) => state . booking. currentStep) step!: number
    // @Getter( 'person/name') name!: name
    // TIP——————————————————————————————————————Method，在类中的实现——————————————————————————————————————
    public changeLanguage(val) {
      switch (val) {
        case '1':
          this.$i18n.locale = 'zh-CN'
          break;
        case '2':
          this.$i18n.locale = 'zh-TW'
          break;
        case '3':
          this.$i18n.locale = 'zh-US'
          break;
      }
    }
    // TIP——————————————————————————————————————Vue生命周期，在类中的实现——————————————————————————————————
    public created(): void {
      this.initFunc();
    };
    public mounted(): void {
      // this.$notify.warning('等待后台更改接口路径名字')
    };
    public activated(): void {
    };
    public updated(): void {
    };
    public destroyed(): void {
    };
  }

</script>
<style lang="scss" scoped>
  .home {
    .btn {
      margin-left: 30px;
      &:first-child {
        margin-left: 0;
      }
    }
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

