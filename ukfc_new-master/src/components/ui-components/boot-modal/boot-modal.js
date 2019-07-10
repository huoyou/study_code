import {popupManager} from "../../../common/js/popup-management";
import {tool} from "../../../common/js/tool";

export default {
  name: "BootModal",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title:{ // 弹窗标题
      type: String,
      default: ''
    },
    backdrop: { // 点击灰色遮罩是否关闭弹窗
      type: Boolean,
      default: true
    },
    lockScroll: { // 是否锁定滚动条
      type: Boolean,
      default: true
    },
    appendToBody: { // 弹窗是否插入到body节点中
      type: Boolean,
      default: true
    },
    keyboard: { // 按esc键是否可以关闭弹窗
      type: Boolean,
      default: true
    },
    center: { // 弹窗是否垂直居中
      type: Boolean,
      default: false
    },
    showHeader: { // 是否显示弹窗头部
      type: Boolean,
      default: true
    },
    showClose: { // 是否显示关闭按钮
      type: Boolean,
      default: true
    },
    needShade: { // 是否需要遮罩
      type: Boolean,
      default: true
    },
    customeClass: { // 自定义class
      type: String,
      default: ''
    },
    size: { // 弹窗大小 可用值 lg(大弹窗)、sm(小弹窗)
      type: String,
      default: ''
    }
  },
  data(){
    return {
      visible: false,
      visibleContent: false,
      rendered: false,
      zIndex: 0,
      mask: null,
      appendedToBody: false,
      scrollLocked: false // 判断浏览器滚动条是否被锁定
    }
  },
  methods: {
    /**
     *  显示弹窗
     * @param emitInput 是否触发父组件的v-modal更新
     */
    open(emitInput){
      if(!this.rendered){
        this.rendered = true;
      }
      let zIndex = popupManager.getNextZIndex();
      this.zIndex = zIndex;
      if(this.needShade){
        this.mask = this.$mask({
          zIndex: zIndex - 1
        });
      }


      if(this.appendToBody && !this.appendedToBody){
        document.body.appendChild(this.$el);
        this.appendedToBody = true;
      }

      if(this.needShade){
        this.mask.show();
      }
      this.visible = true;
      if(this.lockScroll){
        this.doLockScroll();
      }
      // 延迟以后才会有从上往下移动的效果
      let timer = setTimeout(() => {
        this.visibleContent = true;
        clearTimeout(timer);
      }, 100);


      if(typeof emitInput === 'undefined' || emitInput){
        this.$emit('input', true);
      }
      this.$emit('open');
    },
    /**
     *  关闭弹窗
     * @param emitInput 是否触发父组件的v-modal更新
     */
    close(emitInput){
      this.visibleContent = false;
      // 关闭弹窗时要先执行 this.visibleContent = false; 这样才会有弹窗从下往上移动退出的效果
      let timer = setTimeout(() => {
        if(this.needShade){
          if(this.mask){
            this.mask.hide();
          }
        }

        this.visible = false;

        if(this.lockScroll && this.scrollLocked){
          document.body.style.paddingRight = '';
          tool.removeClass(document.body, 'modal-open');
          this.scrollLocked = false;
        }

        if(typeof emitInput === 'undefined' || emitInput){
          this.$emit('input', false);
        }
        this.$emit('close');
        clearTimeout(timer);
      }, 150);
    },
    // 锁定滚动条
    doLockScroll(){
      let $body = document.body;
      let $html = document.documentElement;
      let scrollWidth = tool.getScrollWidth();
      // 说明网页有滚动条
      if($html.clientHeight < $body.scrollHeight){
        if(scrollWidth > 0){
          $body.style.paddingRight = scrollWidth + 'px';
        }
        tool.addClass($body, 'modal-open');
        this.scrollLocked = true;
      }
    },
    afterEnter(){
      this.$emit('opened');
    },
    afterLeave(){
      this.$emit('closed');
    },
    handleModalClick(){
      if(this.backdrop){
        this.close();
      }
    }
  },
  computed: {
    // 计算.modal-dialog元素 的class
    modalDialogClass(){
      let className = '';
      let size = this.size;
      if(this.center){
        className += 'modal-dialog-centered';
      }
      if(size){
        className += ' modal-' + size;
      }
      return className;
    }
  },
  watch: {
    value(newVal){
      if(newVal){
        this.open(false);
      }else{
        this.close(false);
      }
    }
  },
  mounted(){
    if(this.value){
      this.open(false);
    }
  },
  beforeDestroy() {
    this.close();
    if(this.appendToBody && this.appendedToBody){
      if(this.$el && this.$el.parentNode){
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
}
