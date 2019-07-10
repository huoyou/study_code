<template>
  <transition name="fade">
    <div class="u-mask" v-show="visible" :style="{'z-index': zIndex}" @click="onClick"></div>
  </transition>
</template>

<script>
  import {tool} from "../../../common/js/tool";

  export default {
    name: "UMask",
    data(){
      return {
        visible: false,
        closed: false,
        onClick: function () {}
        //inserted: false
      }
    },
    methods: {
      show(){
        this.visible = true;
      },
      hide(){
        this.closed = true;
      },
      // 销毁组件
      destroyEle(){
        if(!this.closed){
          this.closed = true;
          return;
        }
        tool.off(this.$el, 'transitionend', this.destroyEle);
        // 手动销毁组件
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
    },
    watch: {
      closed(newVal){
        if(newVal){
          this.visible = false;
          tool.on(this.$el, 'transitionend', this.destroyEle);
        }
      }
    }
  }
</script>

<style lang="scss">
.u-mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .3;
  background-color: #000;
  /*transition: opacity .2s;*/
  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity .3s;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
}
</style>
