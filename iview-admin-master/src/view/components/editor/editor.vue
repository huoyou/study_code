<template>
  <div class="in-editor-panel">
    <quill-editor ref="quillEditor"
                  theme="snow"
                  v-model="content"
                  :options="editorOption"
                  @change="onChange">
    </quill-editor>
  </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import { quillEditor, Quill } from 'vue-quill-editor'
  import { ImageExtend, QuillWatch } from 'quill-image-extend-module'
  import ImageResize from 'quill-image-resize-module'
  // import { ImageDrop } from 'quill-image-drop-module';

 //quill编辑器的字体
    var fonts = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];  
    var Font = Quill.import('formats/font');  
    Font.whitelist = fonts; //将字体加入到白名单 
    Quill.register(Font, true);

  Quill.register('modules/ImageExtend', ImageExtend)
  // Quill.register('modules/ImageResize', ImageResize)
  // Quill.register('modules/imageDrop', ImageDrop);
  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      toolbarMode: {
        type: Number,
        default: 0
      },
      placeholder: {
        type: String,
        default: '请输入内容'
      },
      height: {
        type: Number,
        default: 170
      },
      imagePath: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        content: '',
        toolbars: [
          [
            ['bold', 'italic', 'underline', 'strike'],        //加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'],         //引用，代码块
            [{ 'header': 1 }, { 'header': 2 }],               // 标题，键值对的形式；1、2表示字体大小
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],          //列表
            [{ 'script': 'sub' }, { 'script': 'super' }],      // 上下标
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // 缩进
            [{ 'direction': 'rtl' }],                         // 文本方向
            [{ 'size': ['small', false, 'large', 'huge'] }],  // 字体大小
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],         //几级标题
            [{ 'color': [] }, { 'background': [] }],          // 字体颜色，字体背景颜色
            [{ 'font': [] }],         //字体
            [{ 'align': [] }],        //对齐方式
            ['clean'],        //清除字体样式
            ['image', 'video']        //上传图片、上传视频

          ],
          [
            ['bold', 'italic', 'underline'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image', 'video']
          ],
          [
            ['bold', 'italic', 'underline'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            ['insert']
          ]
        ],
        editorOption: {
          modules: {
            // imageDrop: true,
            // imageResize: {},
            ImageExtend: {
              loading: true,
              name: 'image',
              size: 2,
              action: ``,
              response: (res) => {
                return res.data
              }
            },
            toolbar: {
              container: [],
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          },
          theme:'snow',
          placeholder: this.placeholder
        }
      }
    },
    computed: {
      editor() {
        return this.$refs.quillEditor.quill
      }
    },
    watch: {
      // 监听父组件传入的内容
      value(newVal) {
        this.$nextTick(() => {
          this._listenerImage()
        })

        if (newVal === this.content) {
          return false
        }

        // 传入的内容不等于编辑器自身内容，则更新
        this.content = newVal
      },
      'content'() {
        this._listenerImage()
      }
    },
    created() {
      // 指定工具栏
      this.editorOption.modules.toolbar.container = this.toolbars[this.toolbarMode]
    },
    mounted() {
      // 设置编辑器高度
      this.editor.container.style.height = `${this.height}px`
    },
    methods: {
      // 显示宽度修改框
      _showWidthBox(event) {
        // 获取当前图片对象
        let currentImg = event.target

        // 弹出宽度输入框
        this.$prompt('请输入宽度', '提示', {
          inputValue: currentImg.width,
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          // 赋值新宽度
          currentImg.width = value
        }).catch(() => { })
      },
      // 监听图片点击
      _listenerImage() {
        // 获取DOM对象
        let editor = document.getElementsByClassName('ql-editor')[0]
        let img = editor.getElementsByTagName('img')
        console.log('editor', editor)
        console.log('img', img)

        // 非空验证
        if (img.length === 0) {
          return
        }

        for (let i = 0; i < img.length; i++) {
          let currentImg = img[i]

          // 绑定且防止重复绑定
          currentImg.removeEventListener('dblclick', this._showWidthBox, false)
          currentImg.addEventListener('dblclick', this._showWidthBox, false)
        }
      },
      onChange() {
        // 告知父组件内容发生变化
        console.log('this.content', this.content)
        this.$emit('input', this.content)
      }
    },
    components: {
      quillEditor
    }
  }
</script>