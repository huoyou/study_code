<template>
  <transition
      name="modal-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave">
    <div class="modal boot-modal"
         :class="[{show: visibleContent}, customeClass]"
         role="dialog"
         v-show="visible"
         :style="{'z-index': zIndex}"
          @click.self="handleModalClick">
        <div class="modal-dialog"
             :class="modalDialogClass"
             role="document">
          <div class="modal-content">
            <div class="modal-header" v-if="showHeader">
              <slot name="title">
                <h5 class="modal-title">{{title}}</h5>
              </slot>
              <button
                  type="button"
                  class="close"
                  v-if="showClose"
                  @click="close"
                  data-dismiss="modal"
                  aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" v-if="rendered">
              <slot></slot>
            </div>
            <div class="modal-footer" v-if="$slots.footer">
              <!--<button type="button" class="btn btn-primary">Save changes</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">Close</button>-->
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
  import index from './boot-modal';

  export default index;
</script>

<!--
<style lang="scss">
@import "boot-modal";
</style>
-->
