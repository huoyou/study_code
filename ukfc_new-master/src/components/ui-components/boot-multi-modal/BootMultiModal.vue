<!--<template>
  <transition
      name="modal-fade"
      @after-enter="afterEnter"
      @after-leave="afterEnter">
    <div class="modal boot-modal"
         :class="[{show: visibleContent}, customeClass]"
         role="dialog"
         v-show="visible"
         :style="{'z-index': zIndex}"
          @click.self="handleModalClick">
        <div class="modal-dialog"
             :class="modalDialogClass"
             role="document">
          <slot></slot>
        </div>
    </div>
  </transition>
</template>-->

<script>
  import index from './boot-multi-modal';
  export default index;
</script>

<!--<style lang="scss">-->
<!--@import "../../common/css/component-css/boot-modal";-->
<!--</style>-->
