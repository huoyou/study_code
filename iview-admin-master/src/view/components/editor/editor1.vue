<template>
  <div id="father">
    <wangeditor @catchData="catchData"></wangeditor>
  </div>
</template>

<script>
  import wangeditor from './aaa.vue'
  export default {
    name: 'VueQuillEditor',
    components: {
      wangeditor
    },
    data() {
      return {
        content: "",
        catchData: "",
      }
    },
    methods: {
      catchData(value) {
        this.content = value      //在这里接受子组件传过来的参数，赋值给data里的参数
      }
    },
  }
