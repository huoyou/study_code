export default {
  name: "ModalContent",
  props: {
    title:{ // 弹窗标题
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    showHeader: { // 是否显示弹窗头部
      type: Boolean,
      default: true
    },
    showClose: { // 是否显示关闭按钮
      type: Boolean,
      default: true
    },
    closeModowNow: { // 点击关闭是否立即关闭弹窗
      type: Boolean,
      default: false
    },
    beforeClose: { // 关闭前回调，若返回false则不会关闭
      type: Function,
      default(){
        return function () {};
      }
    },
    afterClose: { // 关闭后回调
      type: Function,
      default(){
        return function () {};
      }
    }
  },
  data(){
    return {
     // visible: false
    };
  },
  computed: {
    visible(){
      if(this.$parent.currentName == this.name){
        return true;
      }else{
        return false;
      }
    }
  },
  methods: {
    // 关闭弹窗
    closeModal(){
      this.$parent.close();
    },
    // 隐藏当前modal-content
    hide(){
      this.$parent.handleModalContentClose(this.name);
    },
    handleCloseBtnClick(){
      let flag = this.beforeClose(this);
      if(flag !== false){
        this.$parent.handleModalContentClose(this.name, this.closeModowNow);
      }
      this.afterClose();
    }
  },
  mounted(){
    //console.log('this.$parent.currentName',this.$parent.currentName);
  }
}
