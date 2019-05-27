<template>
  <div class="in-editor-panel">
    <quill-editor ref="quillEditor"
                  theme="snow"
                  v-model="content"
                  :options="editorOption"
                  @change="onChange"
                  @blur="onEditorBlur($event)">
    </quill-editor>
  </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor, Quill } from 'vue-quill-editor'
  import { ImageExtend, QuillWatch, container } from 'quill-image-extend-module'
  import ImageResize from 'quill-image-resize-module'
  // import { ImageDrop } from 'quill-image-drop-module';

  //quill编辑器的字体
  var fonts = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman', 'sans-serif'];
  var Font = Quill.import('formats/font');
  Font.whitelist = fonts; //将字体加入到白名单 
  Quill.register(Font, true);

  Quill.register('modules/ImageExtend', ImageExtend)
  Quill.register('modules/ImageResize', ImageResize)
  // Quill.register('modules/ImageDrop', ImageDrop);
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
        default: 200
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
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],

            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': fonts }],       //把上面定义的字体数组放进来

            [{ 'align': [] }],

            ['clean'],
            ['image', 'video']
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
            // ImageDrop: true,
            ImageResize: {},
            ImageExtend: {
              loading: true,  // 可选参数 是否显示上传进度和提示语
              name: 'image',  // 图片参数名
              size: 2,   // 可选参数 图片大小，单位为M，1M = 1024kb
              action: ``,  // 服务器地址, 如果action为空，则采用base64插入图片
              // response 为一个函数用来获取服务器返回的具体图片地址
              // 例如服务器返回{code: 200; data:{ url: 'baidu.com'}}
              // 则 return res.data.url
              response: (res) => {
                return res.data
              },
              headers: (xhr) => { },  // 可选参数 设置请求头部
              start: () => { },  // 可选参数 自定义开始上传触发事件
              end: () => { },  // 可选参数 自定义上传结束触发的事件，无论成功或者失败
              error: () => { },  // 可选参数 自定义网络错误触发的事件
              change: (xhr, formData) => { } // 可选参数 选择图片触发，也可用来设置头部，但比headers多了一个参数，可设置formData
            },
            toolbar: {
              container: [],
              handlers: {
                'image': function () {    // 劫持原来的图片点击按钮事件
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          },
          theme: 'snow',
          placeholder: this.placeholder
        },
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
      },
      onEditorBlur: function () {
        console.log(this.content)
      }
    },
    components: {
      quillEditor
    }
  }
</script>