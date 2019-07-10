export default {
  name: "InviteFriends",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      modalVisible: this.show,
      value: 3.5
    }
  },
  watch: {
    show(newVal){
      this.modalVisible = newVal;
    }
  },
  methods: {
    // 弹窗关闭事件
    onModalClosed(){
      this.$emit('update:show', false);
    }
  }
};
