<template>
    <div class="upload">
        <div v-if="uploadType == 'file'">
            <div v-if="fileList.length > 0">
                <p style="text-align:left;font-size: 12px;">待上传的文件列表：</p>
                <Table :data="fileList"
                       :columns="columns"
                       style="">
                </Table>
            </div>
            <p style="text-align:center;color:red;margin-top: 5px;"
               v-if="message != ''"
               id="console">{{message}}</p>
            <p style="text-align:center;color:red;margin-top: 5px;"
               v-if="errorMsg != ''"
               id="console">{{errorMsg}}</p>
            <div id="container"
                 class="file-container">
                <div id="selectfiles"
                     class='btn'>
                    <Icon style="font-size: 14px;margin-right: 5px;margin-top: -3px;"
                          type="ios-add-circle-outline" />点击选择附件</div>
                <div id="postfiles"
                     href="javascript:void(0);"
                     class='btn'
                     style="margin-left: 40px;">
                    <Icon style="border-radius:50%;border:1px solid #eee;margin-right: 5px;"
                          type="md-arrow-round-up" />开始上传</div>
            </div>
        </div>
        <div v-if="uploadType == 'img'"
             class="upload-contiaon">
            <div v-if="showInit"
                 :id="btnId">
                <img :style="{width:width+'px',height:height+'px'}"
                     :src="srcOut" />
            </div>
            <div :style="{width:width+'px',height:height+'px'}"
                 v-if="showImg"
                 class="div-img"
                 :id="btnId">
                <img v-show="src!=''"
                     :src="src" />
                <Icon v-show="isSuccess==1"
                      class="upload-status statu-success"
                      type="ios-checkmark-circle"></Icon>
                <Icon v-show="isSuccess==2"
                      class="upload-status statu-error"
                      type="ios-alert"></Icon>
                <div class="myprocess">
                    <Progress v-show="processFlag"
                              :percent="process"
                              :stroke-width="5"></Progress>
                </div>
            </div>
            <div class="btn-check"
                 :id="btnId"
                 v-if="!showImg">
                <slot v-if="slotShow&&srcOut==''">
                    <div :style="{width:width+'px',height:height+'px',}"
                         v-if="uploadType=='img'"
                         class="camera-contain">
                        <!-- <Icon type="ios-camera-outline" class="mycamera" /> -->
                        <div class="add">+</div>
                        <div class="textTitle"
                             v-if="flag==1">营业执照</div>
                        <div class="textTitle"
                             v-if="flag==2">税务登记证</div>
                        <div class="textTitle"
                             v-if="flag==3">组织机构代码证</div>
                        <div class="textTitle"
                             v-if="flag==4">开户许可证</div>
                        <div class="textTitle"
                             v-if="flag==5">身份证正面(国徽)</div>
                        <div class="textTitle"
                             v-if="flag==6">身份证反面(头像)</div>
                        <div class="textTitle"
                             v-if="flag==7">公司Logo</div>
                        <div class="textTitle"
                             v-if="flag==8">转账截图</div>
                        <div class="textTitle"
                             v-if="flag==9">上传附件</div>
                        <div class="textContent">支持png、jpg、jpeg、bmp格式</div>
                    </div>
                </slot>
            </div>
            <slot v-if="!slotShow&&!watch">
                <div class="slotEvent"
                     v-if="icoWith!=80">
                    <a href="javascript:"
                       class="styleShow"
                       @click="showDemo">示例</a>
                    <!-- <a href="javascript:"
                       class="showPre"
                       @click="showBig">预览</a> -->
                    <!-- <a href="javascript:"
                       class="changeImg">更换</a> -->
                </div>
            </slot>
            <slot v-if="slotShow&&!watch">
                <div class="slotEvent"
                     v-if="icoWith!=80">
                    <a href="javascript:"
                       class="styleShow"
                       @click="showDemo">示例</a>
                </div>
            </slot>
        </div>
        <slot v-if="uploadType=='other'">上传附件</slot>
        <Modal v-model="modalShow">
            <div slot="header"></div>
            <div style="text-align: center;"><img style="width: 100%" :src="showSrc"
                     alt=""></div>
            <div slot="footer"></div>
        </Modal>
    </div>
</template>
<script>
    // import plupload from 'plupload'
    window.mOxie = window.moxie = require('../../static/js/moxie')
    require('../../static/js/plupload.full.min')
    import Cookies from 'js-cookie'
    import { setTimeout } from 'timers'
    export default {
        name: 'upload',
        props: {
            fileId: '',
            beforeUpload: Function,
            onSuccess: Function,
            onError: Function,
            onProgress: Function,
            selectList: {
                type: Array,
                default: function () {
                    return []
                }
            },
            fileList1: {
                type: Array,
                default: function () {
                    return []
                }
            },
            errorMsg: {
                type: String,
                default: ''
            },
            saveOrCommit: {
                type: String,
                default: ''
            },
            statusType: {
                type: String,
                default: ''
            },
            businessApplicationId: {
                type: String,
                default: ''
            },
            canChooseMore: {
                type: Boolean,
                default: false
            },
            uploadType: {
                type: String,
                default: 'img'
            },
            flag: {
                type: String,
                default: '5'
            },
            icoWith: {
                type: [Number, String],
                default: 219,
            },
            icoHeight: {
                type: [Number, String],
                default: 102,
            },
            height: {
                type: [Number, String],
                default: 130,
            },
            width: {
                type: [Number, String],
                default: 219,
            },
            watch: {
                type: Boolean,
                default: false,
            },
            btnFlag: {
                type: Boolean,
                default: true,
            },
            btnId: {
                type: String,
                default: 'btn'
            },
            srcOut: {
                type: String,
                default: '',
            },
        },
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
                type: '',
                expire: 0,
                fileList: [],
                g_object_name: '',
                g_object_name_type: 'local_name',
                now: Date.parse(new Date()) / 1000,
                status: 'normal',
                message: '',
                columns: [
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
                        key: 'type',
                        wdith: '100',
                        render: (h, params) => {
                            return h('Select', {
                                props: {
                                    transfer: true,
                                    value: this.type
                                },
                                on: {
                                    'on-change': (event) => {
                                        this.fileList[params.index].fileType = event;
                                    }
                                }
                            },
                                this.selectList.map((item) => {
                                    return h('Option', {
                                        props: {
                                            value: item.id,
                                        }
                                    }, item.name)
                                })
                            )
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
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
                    },
                    {
                        title: '类型',
                        key: 'type',
                        wdith: '100',
                    },
                    {
                        title: '操作',
                        key: 'action',
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
                                    }
                                }
                            }, '下载')
                        }

                    }
                ],
                up: '',
                info: '',
                buttonSize: 'small',
                isSuccess: '',
                process: 0,
                src: '',
                processFlag: true,
                slotShow: true,
                modalShow: false,
                showSrc: ''
            }
        },

        beforeCreate() {
        },
        computed: {
            showImg() {
                if (this.uploadType == 'img' && this.src != '') {
                    return true;
                }
                return false;
            },
            showInit() {
                if (this.srcOut != '' && this.src == '') {
                    return true;
                }
                return false;
            },
        },
        mounted() {
            this.$nextTick(() => {
                if (this.srcOut != "" && this.watch == false) {
                    console.log(111);
                    this.slotShow = false
                }
                this.upload()
            })
        },
        watch: {
            srcOut: function (newV, oldV) {
                if (newV != '') {
                    this.slotShow = false
                }
            }
        },
        methods: {
            update() {
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
                const serverUrl = `http://192.168.3.56:8080/sys/getOSSPolicy?userId=111`
                xmlhttp.open('GET', serverUrl, false)
                xmlhttp.send(null)
                return xmlhttp.responseText
            },
            getSignature() {
                // 可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
                this.now = Date.parse(new Date()) / 1000;
                if (this.expire < this.now + 3) {
                    const body = this.sendRequest()
                    const data = JSON.parse(body)
                    var obj = JSON.parse(data)
                    if (obj.state) {
                        this.host = obj.data.host
                        this.policyBase64 = obj.data.policy
                        this.accessid = obj.data.accessid
                        this.signature = obj.data.signature
                        this.expire = parseInt(obj.data.expire, 10)
                        this.callbackbody = obj.data.callback
                        this.key = obj.data.dir
                    }
                    console.log('this.obj', obj)
                    return true
                } else {
                    return false
                }
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
                this.processFlag = true;
                if (ret == false) {
                    this.getSignature()
                }
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
            isExit(val) {
                if (val != undefined) {
                    return true;
                } else {
                    return false;
                }
            },
            commit(val) {
                this.$emit('commit', val)
            },
            showBig() {
                console.log('this.src', this.src)
                this.modalShow = true;
                this.showSrc = this.src || this.srcOut;
            },
            showDemo() {
                this.modalShow = true;
                let msrc = '';
                if (this.flag == 5) {
                    msrc = require('@/assets/IDCardFront.png');
                } else if (this.flag == 6) {
                    msrc = require('@/assets/IDCardBack.png');
                }
                this.showSrc = msrc;
            },
            previewImage(file, callback) {
                if (!file || !/image\//.test(file.type)) return; //确保文件是图片
                if (file.type == 'image/gif') { //gif使用FileReader进行预览,因为mOxie.Image只支持jpg和png
                    var gif = new moxie.file.FileReader();
                    gif.onload = function () {
                        callback(gif.result);
                        gif.destroy();
                        gif = null;
                    };
                    gif.readAsDataURL(file.getSource());
                } else {
                    var image = new moxie.image.Image();
                    image.onload = function () {
                        image.downsize(150, 150);//先压缩一下要预览的图片,宽300，高300
                        var imgsrc = image.type == 'image/jpeg' ? image.getAsDataURL('image/jpeg', 80) : image.getAsDataURL(); //得到图片src,实质为一个base64编码的数据
                        callback && callback(imgsrc); //callback传入的参数为预览图片的url
                        image.destroy();
                        image = null;
                    };
                    image.load(file.getSource());
                }
            },
            upload() {
                const that = this
                const uploader = new plupload.Uploader({
                    runtimes: 'html5,flash,silverlight,html4',
                    browse_button: ['selectfiles', this.btnId],
                    multi_selection: this.canChooseMore,
                    // container: document.getElementById('container'),
                    // flash_swf_url: '../../static/js/Moxie.swf',
                    // silverlight_xap_url: '../../static/js/Moxie.xap',
                    dragdrop: true, 
                    url: 'http://oss.aliyuncs.com',
                    filters: {
                        mime_types: [
                            {
                                title: '允许上传文件类型',
                                extensions: 'jpg,png,bmp,add',
                            }
                        ],
                        // 最大只能上传200mb的文件
                        max_file_size: '200mb',
                        // 不允许队列中存在重复文件
                        prevent_duplicates: true
                    },
                    init: {
                        PostInit: () => {
                            this.fileList = [];
                        },
                        FilesAdded: (up, files) => {
                            console.log('up', up)
                            console.log('files', files)
                            this.slotShow = false;
                            plupload.each(files, (e) => {
                                this.fileList.push({
                                    name: e.name,
                                    size: e.size,
                                    status: e.status,
                                    status1: 1,
                                    id: e.id,
                                    percent: e.percent
                                })
                                that.message = '';

                            })

                            var file = files[0];
                            var _this = this;
                            !function () {
                                _this.previewImage(file, function (imgSrc) {
                                    _this.src = imgSrc;
                                });
                            }();
                            that.setUploadParam(uploader, '', false); // 自动上传
                        },

                        BeforeUpload: (up, file) => {
                            console.log('BeforeUpload', file)
                            that.setUploadParam(up, file.name, true)
                        },
                        UploadProgress: (up, file) => {
                            var index = this.fileList.findIndex(el => el.id == file.id)
                            this.fileList[index].status1 = 2
                            this.fileList[index].percent = file.percent;
                            this.progress = file.percent;
                            //如果到了100，设置为99,成功后才100
                            if (this.process >= 100) {
                                this.process = 99;
                            }
                        },
                        FileUploaded: (up, file, info) => {
                            console.log('FileUploaded-up', up)
                            console.log('FileUploaded-file', file)
                            console.log('FileUploaded-info', info)
                            this.info = info
                            if (info.status == 200 && JSON.parse(info.response).Status == 'OK') {
                                var index = this.fileList.findIndex(el => el.id == file.id)
                                console.log('index', index)
                                this.fileList[index].status1 = 7;
                                this.process = 100;
                                this.isSuccess = 1;
                            } else {
                                var index = this.fileList.findIndex(el => el.id == file.id)
                                console.log('index', index)
                                this.fileList[index].status1 = 6;
                                this.isSuccess = 2;
                            }
                            setTimeout(() => {
                                this.processFlag = false;
                            }, 100);
                        },
                        UploadComplete: (up, file, info) => {
                            let obj = {};
                            obj.dir = this.key;
                            obj.val = this.saveOrCommit;
                            this.commit(obj);
                        },
                        Error: (up, err) => {
                            console.log('Error-上传失败：', err, that.onError, up);
                            this.isSuccess = 2;
                            if (err.code === -600) {
                                that.message = '文件大小超出限制，限制大小为200M'
                                this.$Message.error('文件大小超出限制，限制大小为200M')
                            } else if (err.status === 403) {
                                that.message = '页面失效，请刷新页面后重新上传文件!'
                                this.$Message.error('页面失效，请刷新页面后重新上传文件!')
                            } else if (err.code === -602) {
                                that.message = '上传失败，存在重复文件!'
                                this.$Message.error('上传失败，存在重复文件!')
                            } else {
                                that.message = '上传失败，请刷新页面后重新上传文件！'
                                this.$Message.error('上传失败，请刷新页面后重新上传文件！')
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
                uploader.init();
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
      .file-container {
        display: flex;
        justify-content: center;
        background-color: #eee;
        padding: 20px 0;
        margin-top: 40px;
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
          border-radius: 4px;
        }

        a.btn:hover {
          background-color: #29e0f9;
        }
      }
      .upload-contiaon {
        display: flex;
        .slotEvent {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          margin-left: 5px;
          padding-top: 20px;
          .styleShow {
            color: #ff6600;
          }
          a {
            display: inline-block;
            height: 32px;
            color: #000;
          }
        }

        .div-img {
          vertical-align: top;
          display: inline-block;
          width: 280px;
          box-shadow: 0 0 1px 1px #c4d0e9;
          height: 150px;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
          .myprocess {
            position: absolute;
            width: 100%;
            bottom: 0px;
            z-index: 99;
            .ivu-progress {
              display: flex;
              justify-content: center;
            }
          }
          img {
            width: 100%;
            height: 100%;
            max-height: 100%;
          }
          i {
            font-size: 26px;
            position: absolute;
            bottom: 5px;
            right: 5px;
          }
        }

        .statu-success {
          color: #19be6b;
        }
        .statu-error {
          color: #ed4014;
        }

        .btn-check {
          /*vertical-align: top;*/
          display: inline-block;
          box-sizing: border-box;
          cursor: pointer;
        }
        .camera-contain {
          border-radius: 5px;
          border: dashed 1px #dedede;
          display: inline-block;
          position: relative;
          background-color: white;
          font-size: 14px;
          color: #999;
          text-align: center;
          box-sizing: border-box;
          .add {
            font-size: 40px;
            color: #eee;
          }
          .textTitle {
            margin-top: -5px;
          }
          .textContent {
            padding: 0 10px;
            line-height: 20px;
            font-size: 12px;
          }

          .mycamera {
            font-size: 20px;
            // z-index: 0;
            // position: absolute;
            // top: 50%;
            // left: 50%;
            // transform: translate(-50%, -50%);
            // color: red;
          }
        }

        .minput {
          display: none;
        }
        .watch {
          cursor: not-allowed;
        }
        .marginLeft {
          margin-left: -16px !important;
        }
        .fontType {
          font-size: 12px !important;
          margin-left: 10px;
        }
      }
    }
    .v-transfer-dom {
      .ivu-modal-mask {
        // z-index: 30000 !important;
      }
      .ivu-modal-wrap {
        // z-index: 30001 !important;
        .ivu-modal {
          .ivu-modal-content {
            .ivu-modal-close {
              .ivu-icon.ivu-icon-ios-close {
                background-color: #ccc;
                border-radius: 50%;
                color: #fff;
                top: 0px;
              }
            }
            .ivu-modal-header {
              border: 0;
            }
            .ivu-modal-footer {
              border: 0;
            }
          }
        }
      }
    }
</style>
