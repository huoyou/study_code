import {popupManager} from "../../../common/js/popup-management";
import {tool} from "../../../common/js/tool";

export default {
  name: "BootMultiModal",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    modalContent: { // 弹窗内容的name属性值，用于切换多个弹窗内容
      type: String,
      default:''
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
      zIndex: 0, // 当前弹窗z-index
      mask: null,
      appendedToBody: false, // 弹窗是否已经添加到body中
      scrollLocked: false, // 判断浏览器滚动条是否被锁定
      currentName: '',
      prevModalContentName: '', // 关闭modal-content时的上一个modal-content的name
      modalContentShowSequence: [] // modal-content的显示顺序
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
    /**
     * 将显示的modal-content的name属性值添加进显示顺序队列中
     * @param name
     */
    pushToSequence(name){
      this.modalContentShowSequence.push(name);
    },
    /**
     * 将name从显示顺序队列中移除
     * @param name
     */
    removeInSequence(name){
      let index = tool.getIndex(this.modalContentShowSequence, item => {
        return item == name;
      });
      if(index > -1){
        this.modalContentShowSequence.splice(index, 1);
      }
    },
    /**
     * 处理modal-content的关闭事件
     * @param name
     */
    handleModalContentClose(name, closeModalNow){
      let modalContentShowSequence = this.modalContentShowSequence;
      if(modalContentShowSequence.length > 1){
        if(closeModalNow){
          this.close();
          return;
        }
        /* 当显示队列中不只一个modal-content的时候，先移除当前需要关闭的modal-content，然后再显示当前关闭的
        * modal-content的前一个 */
        let index = tool.getIndex(modalContentShowSequence, item => {
          return item == name;
        });
        let prevModalContentName = modalContentShowSequence[index - 1];
        this.removeInSequence(name);

        this.prevModalContentName = prevModalContentName;
        this.$emit('update:modalContent', prevModalContentName);
      }else{
        this.prevModalContentName = '';
        this.close();
      }
    },
    afterEnter(){
      this.$emit('opened');
    },
    afterLeave(){
      this.$emit('closed');
    },
    handleModalClick(e){
      if(this.backdrop){
        if(e.target === this.$refs.boot_modal){
          this.close();
        }
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
    },
    modalContent: {
      immediate: true,
      handler(newVal){
        if(!this.prevModalContentName || newVal != this.prevModalContentName){
          let index = tool.getIndex(this.modalContentShowSequence, item => {
            return item == newVal;
          });
          /* 如果modal-content已经打开过了，现在又重新打开之前打开过的modal-content，则先从显示顺序中移除之前的name，
          * 然后将name添加到显示顺序末尾中，以保证不会出现弹窗关闭不了的bug */
          if(index > -1){
            this.removeInSequence(newVal);
          }
          this.pushToSequence(newVal);
        }
        this.currentName = newVal;
      }
    }
  },
  render(h){
    let $scopedSlots = this.$scopedSlots;
    let $default = $scopedSlots.default ? $scopedSlots.default() : null;
    let modalContents = [];
    if($default){
      modalContents = $default.filter(item =>{
        /* 过滤<BootModal>xxx</BootModal>中传递的xxx内容。这里只接收<ModalContent>组件 */
        if(item.componentOptions && item.componentOptions.tag === 'modal-content'){
          return item;
        }
      });
    }

   // console.log('$default', $default)
    return h('transition', {
      props: {
        name: 'modal-fade'
      },
      on: {
        afterEnter: this.afterEnter,
        afterLeave: this.afterLeave
      }
    }, [
      h('div', {
        staticClass: 'modal boot-multi-modal boot-modal', // 静态的class
        'class': [ // 与 `v-bind:class` 的 API 相同，
          {
            show: this.visibleContent,
          },
          this.customeClass,
        ],
        // 普通的 HTML 特性
        attrs: {
          role: 'dialog'
        },
        style: {
          'z-index': this.zIndex
        },
        on: {
          'click': this.handleModalClick
        },
        directives: [
          {
            name: 'show',
            value: this.visible
          }
        ],
        ref: 'boot_modal',
      }, [
        h('div', {
          staticClass: 'modal-dialog',
          'class': [this.modalDialogClass],
          attrs: {
            role: 'document'
          },
        }, modalContents)
      ])
    ]);
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
