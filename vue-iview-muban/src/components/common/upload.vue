/*jshint -W065 */
<template lang="html">
  <div class="upload" >
    <form style="display: none" name=theform>
      <a type="radio" name="myradio" ></a> 上传文件名字保持本地文件名字
      <a type="radio" name="myradio" ></a> 上传文件名字是随机文件名, 后缀保留
    </form>
    <div v-if="fileList.length > 0">
      <p style="text-align:left;font-size: 12px;">您所选择的文件列表：</p>
          <!-- <div id="ossfile">
            <div class="upload-pic-item" :id="item.id" v-for="(item,index) in fileList" :key="index">
                  {{item.name}} <span style="margin-left: 2px;"> ({{renderSize(item.size)}})</span>
                  <div class="progress">
                      <div class="progress-bar" style="width: 0">
                      </div>
                  </div>
                  <Progress :status="status" :hide-info="true"  :percent="item.percent">
                          <Icon type="checkmark-circled"></Icon>
                          <span>成功</span>
                      </Progress>
                  <b></b>
                  <image/>
                  <div type="error" size="small" class="upload-delete" @click="dodel(item.id)">
                      删除
                  </div>
              </div>
          </div> -->
          <Table :data="fileList"
                    :columns="columns1"
                    style="">
          </Table>
    </div>

    <div id="container">
      <div id="selectfiles"  class='btn'><Icon style="font-size: 14px;margin-right: 5px;margin-top: -3px;" type="ios-add-circle-outline" />点击上传附件</div>
      <!-- <div id="postfiles" href="javascript:void(0);" class='btn' style="margin-left: 40px;"><Icon style="border-radius:50%;border:1px solid #eee;margin-right: 5px;" type="md-arrow-round-up" />开始上传</div> -->
    </div>
    <p style="text-align:center;color:red;margin-top: 5px;" v-if="message != ''" id="console">{{message}}</p>
    <div>
    </div>
  </div>
</template>
<script>
  import plupload from 'plupload'
  import Cookies from 'js-cookie'
  import { setTimeout } from 'timers'
  import config from '@/config'
  export default {
    name: 'upload',
    data() {
      return {
        buttonSize: 'small',
        uploadMethod: '',
        accessid: '',
        accesskey: '',
        host: '',
        policyBase64: '',
        signature: '',
        callbackbody: '',
        filename: '',
        key: '',
        expire: 0,
        g_object_name: '',
        g_object_name_type: 'local_name',
        now: Date.parse(new Date()) / 1000,
        message: '',
        status: 'normal',
        fileList: [],
        columns1: [
          {
            title: '文件名',
            key: 'name',
             width: 250,
          },
          {
            title: '大小',
            key: 'size',
            width: 100,
            render: (h, params) => {
              let res = this.renderSize(params.row.size)
              return h('div', res)
            }
          },
          {
            title: '状态',
            key: 'status',
             width: 200,
            render: (h, params) => {
              let res = params.row.status1
              if (res == 1) {
                return h('span', '准备上传')
              } else if (res == 2) {
                return h('div', {
                  style: {
                    display: 'flex'
                  }
                }, [
                    h('Progress', {
                      props: {
                        percent: params.row.percent,
                        hideInfo: true
                      },
                      style: {
                        width: '100px'
                      }
                    }),
                    h('span', params.row.percent + '%')
                  ])
              } else if (res == 6) {
                return h('span', {
                  style: {
                    color: 'red'
                  }
                }, '上传失败')
              } else if (res == 7) {
                return h('span', {
                  style: {
                    color: 'green'
                  }
                }, '上传成功')
              } else {
                return h('span', progress)
              }
            }
          },
          {
            title: '类型',
            key: 'size',
            wdith: '100',
            render: (h, params) => {
              return h('Select', {
                props: {
                  transfer: true
                },
                on: {
                  'on-change': (event) => {
                    this.fileList[params.index].volumeTypes = event || ''
                  }
                }
              },
                this.selectList.map((item) => {
                  // 这个数组需要在data中定义,里面是一个个对象,每个对象里面应当包含value属性(因为要用到)
                  return h('Option', {
                    props: {
                      value: item.name,
                    }
                  })
                })
              )
            }
          },
          {
            title: '操作',
            key: 'status',
             width: 100,
            render: (h, params) => {
              console.log('params', params)
              let res = params.row
              return h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                style: {
                },
                on: {
                  click: () => {
                    this.dodel(res.id)
                  }
                }
              }, '删除')
            }

          }
        ],
        up: '',
        info: '',
        buttonSize: 'small'
      }
    },
    props: {
      fileId: '',
      beforeUpload: Function,
      onSuccess: Function,
      onError: Function,
      onProgress: Function,
      selectList: Array
    },
    beforeCreate() {
    },
    mounted() {
      this.$nextTick(() => {
        this.upload()
      })
    },
    // watch: {
    //   selectList: {
    //     handler(newVal, oldVal) {
    //       console.log('newVal', newVal)
    //       this.selectList1 = newVal
    //     },
    //     deep: true
    //   }
    // },
    methods: {
      update() {
        console.log('this.fileList', this.fileList)
        this.setUploadParam(this.up, '', false)
      },
      renderSize(value) {
        if (value == null || value == '') {
          return '0 B'
        }
        var unitArr = new Array('B', 'K', 'M', 'G', 'T', 'PB', 'EB', 'ZB', 'YB')
        var index = 0
        var srcsize = parseFloat(value)
        index = Math.floor(Math.log(srcsize) / Math.log(1024))
        var size = srcsize / Math.pow(1024, index)
        size = size.toFixed(1)// 保留的小数位数
        return size + unitArr[index]
      },
      sendRequest() {
        const token = Cookies.get('token')
        const xmlhttp = new XMLHttpRequest()
        // 你的服务端接口地址:  参考demo:http://oss-demo.aliyuncs.com/oss-h5-upload-js-php/
        // 服务端签名后直传文档:  https://help.aliyun.com/document_detail/31926.html
        const serverUrl = `${config.baseUrl}/api/sys/getOSSPolicy?userId=111`
        xmlhttp.open('GET', serverUrl, false)
        xmlhttp.send(null)
        return xmlhttp.responseText
      },
      getSignature() {
        // 可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
        this.now = Date.parse(new Date()) / 1000
        if (this.expire < this.now + 3) {
          const body = this.sendRequest()
          console.log('this.sendRequest', body)
          const data = JSON.parse(body)
          var obj = JSON.parse(data)
          console.log('obj', obj)
          if (obj.state) {
            this.host = obj.data.host
            this.policyBase64 = obj.data.policy
            this.accessid = obj.data.accessid
            this.signature = obj.data.signature
            this.expire = parseInt(obj.data.expire, 10)
            this.callbackbody = obj.data.callback
            this.key = obj.data.dir
          }
          return true
        }
        return false
      },
      randomString(len = 32) {
        const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
        const maxPos = chars.length
        let pwd = ''
        for (let i = 0; i < len; i += 1) {
          pwd += chars.charAt(Math.floor(Math.random() * maxPos))
        }
        return pwd
      },
      getSuffix(filename) {
        const pos = filename.lastIndexOf('.')
        let suffix = ''
        if (pos !== -1) {
          suffix = filename.substring(pos)
        }
        return suffix
      },
      calculateObjectName(filename) {
        console.log('this.g_object_name_type', this.g_object_name_type)
        if (this.g_object_name_type == 'local_name') {
          this.g_object_name += "${filename}"
        } else if (this.g_object_name_type == 'random_name') {
          const suffix = this.getSuffix(filename)
          this.g_object_name = this.key + this.randomString(10) + suffix
        }
        console.log('this.g_object_name', this.g_object_name)
        return ''
      },
      getUploadedObjectName(filename) {
        if (this.g_object_name_type === 'local_name') {
          let tmpName = this.g_object_name
          tmpName = tmpName.replace(`${filename}`, filename)
          return tmpName
        } else if (this.g_object_name_type === 'random_name') {
          return this.g_object_name
        }
        return ''
      },
      setUploadParam(up, filename, ret) {
        console.log('filename', filename)
        if (ret == false) {
          this.getSignature()
        }
        console.log('this.key', this.key)
        this.g_object_name = this.key
        if (filename !== '') {
          this.calculateObjectName(filename)
        }
        const newMultipartParams = {
          'key': this.g_object_name,
          'policy': this.policyBase64,
          'OSSAccessKeyId': this.accessid,
          // 让服务端返回200,不然，默认会返回204
          'success_action_status': '200',
          'callback': this.callbackbody,
          'signature': this.signature
        }
        console.log('host', this.host)
        console.log('newMultipartParams', newMultipartParams)
        up.setOption({
          'url': this.host,
          'multipart_params': newMultipartParams
        })
        up.start()
      },
      dodel(id) {
        this.fileList = this.fileList.filter(el => el.id != id)
        let file = this.up.getFile(id)
        this.up.removeFile(file)
      },
      upload() {
        const that = this
        const uploader = new plupload.Uploader({
          runtimes: 'html5,flash,silverlight,html4',
          browse_button: 'selectfiles',
          multi_selection: true,
          container: document.getElementById('container'),
          // flash_swf_url: '../../static/pupload/plupload-2.1.2/js/Moxie.swf',
          // silverlight_xap_url: '../../static/pupload/plupload-2.1.2/js/Moxie.xap',
          url: 'http://oss.aliyuncs.com',
          filters: {
            mime_types: [
              // {
              //   title: '允许上传文件类型',
              //   extensions: 'jpg,gif,png,bmp',
              // }
            ],
            // 最大只能上传200mb的文件
            max_file_size: '200mb',
            // 不允许队列中存在重复文件
            prevent_duplicates: true
          },
          init: {
            PostInit: () => {
              this.fileList = []
              // document.getElementById('ossfile').innerHTML = '';
              // document.getElementById('postfiles').onclick = () => {
              //   that.setUploadParam(uploader, '', false);
              //   return false;
              // };
              // 删除
              // $(document).on('click','.upload-delete',function () {
              //     console.log(uploaded.files)
              //     var _fileid=$(this).parents('.upload-pic-item').attr('id');
              //     $(this).parents('.upload-pic-item').remove();
              //     deleteImg(_fileid);
              // });
            },

            FilesAdded: (up, files) => {
              plupload.each(files, (e) => {
                this.fileList.push({
                  name: e.name,
                  size: e.size,
                  status: e.status,
                  status1: 1,
                  id: e.id,
                  percent: e.percent
                })
                // console.log('file_name: ', file.name, ',    ', 'file_size:  ', file.size);
                // document.getElementById('ossfile').innerHTML += `<div class="upload-pic-item" id="${file.id}">${file.name} (${plupload.formatSize(file.size)})<b></b><div class="progress"><div class="progress-bar" style="width: 0"></div></div><image/></image><div class="upload-delete" @click="dodel(${file.id})"><Icon type="md-close-circle" />删除</div></div>`;
                that.message = ''
              })
            },

            BeforeUpload: (up, file) => {
              console.log('BeforeUpload', file)
              that.setUploadParam(up, file.name, true)
            },
            UploadProgress: (up, file) => {
              // const d = document.getElementById(file.id)
              // d.getElementsByTagName('b')[0].innerHTML = `<span>${file.percent}%</span>`
              // const prog = d.getElementsByTagName('div')[0]
              // const progBar = prog.getElementsByTagName('div')[0]
              // progBar.style.width = `${2 * file.percent}px`
              // progBar.setAttribute('aria-valuenow', file.percent)
              var index = this.fileList.findIndex(el => el.id == file.id)
              this.fileList[index].status1 = 2
              this.fileList[index].percent = file.percent
            },
            FileUploaded: (up, file, info) => {
              console.log('FileUploaded-info', info)
              this.info = info
              if (info.status === 200) {
                var index = this.fileList.findIndex(el => el.id == file.id)
                console.log('index', index)
                this.fileList[index].status1 = 7
                // document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML =
                //   `<span style="color:green">上传成功</span>`
                // document.getElementById(file.id).getElementsByClassName('progress')[0].getElementsByTagName('div')[0].className = ''
                // document.getElementById(file.id).getElementsByClassName('progress')[0].getElementsByTagName('div')[0].classList.add('progress-bar')
              } else {
                var index = this.fileList.findIndex(el => el.id == file.id)
                console.log('index', index)
                this.fileList[index].status1 = 6
                // document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = `<span style="color:red">上传失败</span>`
                // document.getElementById(file.id).getElementsByClassName('progress')[0].getElementsByTagName('div')[0].className = ''
                // document.getElementById(file.id).getElementsByClassName('progress')[0].getElementsByTagName('div')[0].classList.add('progress-bar1')
              }
            },
            UploadComplete: (up, file, info) => {
              console.log('UploadComplete-up',up)
              console.log('UploadComplete-file',file)
              console.log('UploadComplete-info',info)
            },
            Error: (up, err) => {
              console.log('Error-上传失败：', err, that.onError, up)
              if (err.code === -600) {
                that.message = '文件大小超出限制，限制大小为200M'
              } else if (err.status === 403) {
                that.message = '页面失效，请刷新页面后重新上传文件!'
              } else if (err.code === -602) {
                that.message = '上传失败，存在重复文件!'
              } else {
                that.message = '上传失败，请刷新页面后重新上传文件！'
              }
              setTimeout(() => {
                that.message = ''
              }, 3000)
              if (that.onError) {
                that.onError(err.message, up, err)
              }
            }
          }
        })
        this.up = uploader
        uploader.init()
      }
    }
  }
</script>
<style lang="less">
  .upload {
    #ossfile {
      .upload-pic-item {
        display: flex;
        align-items: center;
        margin-top: 5px;
        .ivu-progress {
          width: 300px;
          margin-left: 10px;
          .ivu-progress-outer {
            width: 300px !important;
          }
          .ivu-progress-bg {
          }
        }
        b {
          margin-left: 10px;
        }
        .progress {
          width: 200px;
          height: 14px;
          margin-left: 10px;
          display: inline-block;
          margin-bottom: 0;
          overflow: hidden;
          background-color: #f5f5f5;
          border-radius: 4px;
          -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        .upload-delete {
          margin-left: 10px;
          color: blue;
        }
        .progress-bar {
          background-color: rgb(84, 185, 249);
          // background-color: rgb(249, 84, 120);
          background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.14902) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.14902) 50%,
            rgba(255, 255, 255, 0.14902) 75%,
            transparent 75%,
            transparent
          );
          background-size: 40px 40px;
          box-shadow: rgba(0, 0, 0, 0.14902) 0 -1px 0 0 inset;
          box-sizing: border-box;
          color: rgb(255, 255, 255);
          display: block;
          float: none;
          font-size: 12px;
          height: 20px;
          text-align: center;
          transition-delay: 0s;
          transition-duration: 0.6s;
          transition-property: width;
          transition-timing-function: ease;
          width: 266px;
        }
        .progress-bar1 {
          // background-color: rgb(84, 185, 249);
          background-color: rgb(245, 21, 69);
          background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.14902) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.14902) 50%,
            rgba(255, 255, 255, 0.14902) 75%,
            transparent 75%,
            transparent
          );
          background-size: 40px 40px;
          box-shadow: rgba(0, 0, 0, 0.14902) 0 -1px 0 0 inset;
          box-sizing: border-box;
          color: rgb(255, 255, 255);
          display: block;
          float: none;
          font-size: 12px;
          height: 20px;
          text-align: center;
          transition-delay: 0s;
          transition-duration: 0.6s;
          transition-property: width;
          transition-timing-function: ease;
          width: 266px;
        }
      }
    }
    #container {
      display: flex;
      justify-content: center;
      background-color: #eee;
      padding: 20px 0;
      margin-top: 10px;
      .btn {
        color: #fff;
        background-color: #54b9f9;
        border-color: #54b9f9;
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        text-decoration: none;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        /*border: 1px solid transparent;*/
        border-radius: 4px;
      }

      a.btn:hover {
        background-color: #29e0f9;
      }
    }
  }
</style>
