<template>
  <div class="modal-content" v-show="visible">
    <div class="modal-header" v-if="showHeader">
      <slot name="title">
        <h5 class="modal-title">{{title}}</h5>
      </slot>
      <button
          type="button"
          class="close"
          v-if="showClose"
          @click="handleCloseBtnClick"
          data-dismiss="modal"
          aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <slot></slot>
    </div>
    <div class="modal-footer" v-if="$slots.footer">
      <!--<button type="button" class="btn btn-primary">Save changes</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">Close</button>-->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import index from './modal-content';
export default index;
</script>
