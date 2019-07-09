<template>
  <div ref="editorElem"
       id="wangeditor"
       style="text-align:left"></div>
</template>
 
<script>
  import E from 'wangeditor'
  export default {
    name: 'editorElem',
    data() {
      return {
        editorContent: '',
      }
    },
    props: {
      data: String
    },  //接收父组件的方法
    watch: {
      data: {
        handler(newVal, oldVal) {
          this.init();
        },
        deep: true
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        var editor = new E(this.$refs.editorElem)    //创建富文本实例
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
          // this.catchData(html) //把这个html通过catchData的方法传入父组件
        }
        // 关闭粘贴样式的过滤
        // editor.customConfig.pasteFilterStyle = false
        // 忽略粘贴内容中的图片
        // editor.customConfig.pasteIgnoreImg = true

        // 使用 base64 保存图片
        editor.customConfig.uploadImgShowBase64 = true
        // 隐藏“网络图片”tab
        editor.customConfig.showLinkImg = false
        // 将图片大小限制为 3M(默认限制图片大小是 5M)
        editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024
        //  限制一次最多上传 5 张图片(默认为 10000 张（即不限制），需要限制可自己配置)
        editor.customConfig.uploadImgMaxLength = 5
        //如果还需要将参数拼接到 url 中，可再加上如下配置
        // editor.customConfig.uploadImgParamsWithUrl = true
        // 跨域上传中如果需要传递 cookie 需设置 withCredentials
        // editor.customConfig.withCredentials = true
        // 将 timeout 时间改为 3s(默认的 timeout 时间是 10 秒钟)
        // editor.customConfig.uploadImgTimeout = 3000
        // 上传图片的错误提示默认使用alert弹出，你也可以自定义用户体验更好的提示方式
        // editor.customConfig.customAlert = function (info) {
        //   alert('自定义提示：' + info)
        // }

        //  editor.customConfig.uploadImgServer = '你的上传图片的接口'
        //  editor.customConfig.uploadFileName = '你自定义的文件名'
        //  editor.customConfig.uploadImgHeaders = {
        //    'Accept': '*/*',
        //    'Authorization':'Bearer ' + token  //头部token
        //  }
        //上传图片时可自定义传递一些参数，例如传递验证的token等。参数会被添加到formdata中。
        // editor.customConfig.uploadImgParams = {
        //   // 如果版本 <=v3.1.0 ，属性值会自动进行 encode ，此处无需 encode
        //   // 如果版本 >=v3.1.1 ，属性值不会自动 encode ，如有需要自己手动 encode
        //   token: 'abcdef12345'
        // }



        editor.customConfig.menus = [     //菜单配置
          'head',  // 标题
          'bold',  // 粗体
          'fontSize',  // 字号
          'fontName',  // 字体
          'italic',  // 斜体
          'underline',  // 下划线
          'strikeThrough',  // 删除线
          'foreColor',  // 文字颜色
          'backColor',  // 背景颜色
          'link',  // 插入链接
          'list',  // 列表
          'justify',  // 对齐方式
          'quote',  // 引用
          'emoticon',  // 表情
          'image',  // 插入图片
          'table',  // 表格
          'video',  // 插入视频
          'code',  // 插入代码
          'undo',  // 撤销
          'redo'  // 重复
        ],
          // 自定义配置颜色（字体颜色、背景色）
          editor.customConfig.colors = [
            '#000000',
            '#eeece0',
            '#1c487f',
            '#4d80bf',
            '#c24f4a',
            '#8baa4a',
            '#7b5ba1',
            '#46acc8',
            '#f9963b',
            '#ffffff'
          ],
          // 自定义字体
          editor.customConfig.fontNames = [
            '宋体',
            '微软雅黑',
            'Arial',
            'Tahoma',
            'Verdana'
          ]
        //下面是最重要的的方法
        editor.customConfig.uploadImgHooks = {
          before: function (xhr, editor, files) {
            // 图片上传之前触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件

            // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
            // return {
            //   prevent: true,
            //   msg: '放弃上传'
            // }
          },
          success: function (xhr, editor, result) {
            // 图片上传并返回结果，图片插入成功之后触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
            this.imgUrl = Object.values(result.data).toString()
          },
          fail: function (xhr, editor, result) {
            // 图片上传并返回结果，但图片插入错误时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
          },
          error: function (xhr, editor) {
            // 图片上传出错时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
          },
          timeout: function (xhr, editor) {
            // 图片上传超时时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
          },

          // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
          // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
          customInsert: function (insertImg, result, editor) {
            // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
            // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

            // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
            let url = Object.values(result.data)   //result.data就是服务器返回的图片名字和链接
            JSON.stringify(url)  //在这里转成JSON格式
            insertImg(url)
            // result 必须是一个 JSON 格式字符串！！！否则报错
          }
        }
        editor.customConfig.zIndex = 100
        editor.create();
        editor.txt.html(this.data);
      }
    }
  }
</script>