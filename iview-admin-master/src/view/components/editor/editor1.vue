<template>
  <div class="vue-quill-editor">
    <quill-editor v-model="editorContent"
                  :options="editorOption"
                  @change="onEditorChange($event)">
    </quill-editor>
  </div>
</template>

<script>
  // require styles
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor, Quill } from 'vue-quill-editor'
  // img upload plugin
  import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
  Quill.register('modules/ImageExtend', ImageExtend)

  export default {
    name: 'VueQuillEditor',
    components: {
      quillEditor
    },
    data() {
      return {
        editorOption: {  // 富文本框参数设置
          modules: {
            ImageExtend: {
              loading: true,
              name: 'img',
              action: updateUrl,
              response: (res) => {
                return res.info
              }
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
        },
        editorContent: '',
      }
    },
    methods: {
      onEditorChange() { },
    }
  }
