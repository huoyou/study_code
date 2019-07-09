<template>
    <div class="upload-contiaon">
        <slot v-if="!slotShow&&!watch">
            <div class="slotEvent" v-if="icoWith!=80">
                <a href="javascript:" class="styleShow" @click="showDemo">样式</a>
                <a href="javascript:" class="showPre" @click="showBig">预览</a>
                <a href="javascript:" class="changeImg" @click="handleClick">更换</a>
            </div>
        </slot>
        <slot v-if="slotShow&&!watch">
            <div class="slotEvent" v-if="icoWith!=80">
                <a href="javascript:" class="styleShow" @click="showDemo">样式</a>
            </div>
        </slot>
        <label v-if="showInit">
            <img @click="showBig" :style="{width:width+'px',height:height+'px'}" :src="srcOut"/>
        </label>
        <div :style="{width:icoWith+'px',height:icoHeight+'px'}" @click="showBig" v-if="showImg" class="div-img">
            <img v-show="src!=''" :src="src"/>
            <Icon v-show="isSuccess==1" class="upload-status statu-success" type="ios-checkmark-circle"></Icon>
            <Icon v-show="isSuccess==2" class="upload-status statu-error" type="ios-information-circle"></Icon>

            <div class="myprocess">
                <Progress v-show="processFlag" :percent="process" :stroke-width="5"></Progress>
            </div>
        </div>

        <div v-if="btnFlag" class="btn-check" @click="handleClick" :class="{watch:watch&&srcOut==''}">
            <input
                    ref="my-input-upload"
                    type="file"
                    :class="{minput:true}"
                    @change="handleChange"
                    :multiple="multiple"
                    :accept="accept"
            >
            <slot v-if="slotShow&&srcOut==''">
                <div :style="{width:icoWith+'px',height:icoHeight+'px',}" v-if="uploadType=='img'"
                     class="camera-contain">
                    <!--<Icon class="mycamera" size="40" type="camera"></Icon>-->
                    <div class="textTitle" v-if="flag==1">+营业执照</div>
                    <div class="textTitle" v-if="flag==2">+税务登记证</div>
                    <div class="textTitle" v-if="flag==3">+组织机构代码证</div>
                    <div class="textTitle" v-if="flag==4">+开户许可证</div>
                    <div class="textTitle" v-if="flag==5">+身份证正面(国徽)</div>
                    <div class="textTitle" v-if="flag==6">+身份证反面(头像)</div>
                    <div class="textTitle" v-if="flag==7">+公司Logo</div>
                    <div class="textTitle" v-if="flag==8">+转账截图</div>
                    <div class="textTitle" v-if="flag==9">+上传附件</div>
                    <div class="textContent">支持png、jpg、jpeg、bmp格式图片，其大小不可超过4M</div>

                </div>
                <Button v-if="uploadType=='file'" type="primary">选择文件</Button>
            </slot>
            <slot v-if="uploadType=='other'">上传附件</slot>

        </div>
        <div v-if="uploadType=='file'">
            <div v-show="filename!=''" class="file-contain">
                <div class="file-info">
                    <span>{{filename}}</span>
                    <label v-show="isSuccess==1" class="statu-success">上传成功</label>
                    <label class="statu-error" v-show="isSuccess==2">上传失败</label>
                    <label v-if="deleteFlag" @click="ondelete(1)" class="statu-error del-upload-file">删除</label>
                </div>
                <div v-show="!checkSize" class="myprocess process-file">
                    <Progress v-show="processFlag" :percent="process" :stroke-width="3"></Progress>
                </div>
            </div>
        </div>
        <div style="margin-top: 5px" v-if="fileShow">
            <div>
                <a target="_blank" :href="filePathOut" class="file-name-out">{{fileNameOut}}</a>
                <span v-if="deleteFlag" class="statu-error" @click="ondelete(2)">删除</span>
            </div>
        </div>
        <span v-show="checkSize" :class="{marginLeft:!tipsFlag}" class="statu-error fontType">{{msg}}</span>
        <span v-if="uploadType=='other'&&tipsFlag" class="fontType"
              style="color: #999 !important; ">文件大小4M内，支持所有格式</span>
    </div>
</template>

<script>
    import ajax from '@/utils/ajax.js'

    export default {
        name: "xrkUpload",
        props: {
            tipsFlag: {
                type: Boolean,
                default: true, //是否显示文字提示
            },
            btnFlag: {
                type: Boolean,
                default: true,
            },
            //是否显示删除
            deleteFlag: {
                type: Boolean,
                default: true,
            },
            //文件名
            fileNameOut: {
                type: String,
                default: '',
            },
            //文件路径
            filePathOut: {
                type: String,
                default: '',
            },
            //外部传入的img的src
            srcOut: {
                type: String,
                default: '',
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
                default: 109,
            },
            width: {
                type: [Number, String],
                default: 280,
            },
            scrollTop: {
                type: [Number, String],
                default: 0,
            },
            //1.营业执照2.税务登记证3.组织机构代码证4.开户许可证5.身份证正面6.身份证反面7.公司logo   -1,上传失败
            flag: {
                type: [String, Number],
                default: '1'
            },
            multiple: {
                type: Boolean,
                default: false
            },
            accept: {
                type: String
            },
            //文件大小限制，单位 kb
            maxSize: {
                type: Number,
                default: 4
            },
            //支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用
            format: {
                type: Array,
                default: function () {
                    return [];
                },
            },
            uploadType: {
                type: String,
                default: 'img',
            },
            pathUrl: {
                type: String,
                default: '',
            },
            withCredentials: {
                type: Boolean,
                default: false,
            },
            watch: {
                type: Boolean,
                default: false,
            }
        },
        mounted() {
            this.$nextTick(function () {
                console.log("srcOut:" + this.srcOut)
                if (this.srcOut != "" && this.watch == false) {
                    console.log(111);
                    this.slotShow = false
                }
            })
        },
        data() {
            return {
                viewFlag: 0, //查看时显示
                msg: '文件超出大小限制!',
                imgTemp: this.srcOut,
                _scrollTop: this.scrollTop,
                src: '',
                file: '',
                filename: '',
                params: {},
                action: '',
                fileList: [],
                isSuccess: 0,  //0未开始上传，1上传成功，2上传失败
                process: 0,  //上传进度
                processFlag: true,  //上传进度
                slotShow: true
            }
        },
        computed: {
            fileShow() {
                //不是文件不显示
                if (this.uploadType != 'file' || this.viewFlag > 0) {
                    return false;
                }
                //有路径就显示
                if (this.filePathOut != '' && this.filePathOut != undefined) {
                    return true;
                }
                return false;
            },
            checkSize() {
                if (this.maxSize) {
                    if (this.file.size > this.maxSize * 1024 * 1024) {
                        return true;
                    }
                    return false;
                }
            },
             showInit() {
                if ( this.srcOut != '' && this.src == '') {
                    return true;
                }
                return false;
            },
            showImg() {
                if (this.uploadType == 'img' && this.src != '') {
                    return true;
                }
                return false;
            },


        },

        methods: {
            ondelete(type) {
                if (type == 1) {
                    this.filename = '';
                } else {
                    this.filePathOut == '';
                }
                this.$emit('ondelete', this.flag, type);
            },
            showBig() {
                console.log(document.body.scrollTop)
                let config = {};
                //关闭图片回调
                config.onOk = () => {
                    console.log("this.scrollTop:" + this.scrollTop)
                    window.scrollTo(0, this._scrollTop);
                },
                    config.render = (h) => {
                        let msrc = this.src || this.srcOut
                        return h('img', {
                            domProps: {
                                src: msrc,
                            },
                        });
                    }
                this.$modal.modalImg(config);
            },
            showDemo() {
                let config = {};

                //关闭图片回调
                config.onOk = () => {
                    console.log("this.scrollTop:" + this.scrollTop)
                    window.scrollTo(0, this._scrollTop);
                },
                    config.render = (h) => {
                        let msrc = ''
                        if (this.flag == 1) {
                        } else if (this.flag == 5) {
                        } else if (this.flag == 6) {
                        }
                        return h('img', {
                            domProps: {
                                src: msrc,
                            },
                        });
                    }
                this.$modal.modalImg(config);
            },

            //获取凭证等信息
            getToken: function (file) {
                this.filename = file.name;
                this.file = file;
                let fileType = file.name;
                if (this.maxSize) {
                    if (file.size > this.maxSize * 1024 * 1024) {
                        this.msg = '文件超出大小限制';
                        return false;
                    }
                }
                let url = this.pathUrl;
                this.$http.get(url, null, this, false).then((resp) => {
                    console.log("凭证:" + JSON.stringify(resp.data))

                    if (resp.data && resp.data.code == 200) {
                        let rs = resp.data.data;
                        var params = {
                            "key": rs.dir + rs.key + "." + fileType.split(".")[1],
                            "policy": rs.policy,
                            "OSSAccessKeyId": rs.accessid,
                            "success_action_status": 200,
                            "callback": rs.callback,
                            "callback-var": rs.callbackVar,
                            "x:customer_id": rs["x:customer_id"],
                            "x:business_id": rs["x:business_id"],
                            "x:file_name": file.name,
                            "signature": rs.signature,
                            "name": file.name,
                        };

                        var option = {};
                        option.data = params;
                        option.file = file;
                        option.url = rs.host;
                        option.name = "file";
                        this.post(file, option)
                    }
                })
            },
            //解发事件
            handleClick() {
                if (!this.watch) {
                    this.$refs['my-input-upload'].click();
                }

            },
            //选择文件后改变事件
            handleChange(e) {
                this.slotShow = false
                this.$emit('on-change', this.flag)
                this.isSuccess = 0;
                this.process = 0;
                var url = window.URL || window.webkitURL || window.mozURL;
                var files = e.target.files;

                console.log("文件LEN：" + files.length)
                console.log(files)
                if (!files) {
                    return;
                }
                for (var i = 0, len = files.length; i < len; ++i) {
                    var file = files[i];
                    if (this.uploadType == 'img') {
                        if (url) {
                            this.src = url.createObjectURL(file);
                        } else {
                            this.src = e.target.result;
                        }
                        this.imgTemp = '';
                    }
                    //获取凭证
                    this.getToken(files[i]);
                }
                //值置空
                this.$refs['my-input-upload'].value = null;
            },
            //上传前
            handleStart(file) {
                file.uid = Date.now() + this.tempIndex++;
                const _file = {
                    status: 'uploading',
                    name: file.name,
                    size: file.size,
                    percentage: 0,
                    uid: file.uid,
                    showProgress: true
                };
                this.fileList.push(_file);
            },

            getFile(file) {
                const fileList = this.fileList;
                let target;
                fileList.every(item => {
                    target = file.uid === item.uid ? item : null;
                    return !target;
                });
                return target;
            },

            //上传进度
            handleProgress(e, file) {
                console.log("上传进度" + e.percent);
                this.process = e.percent.toFixed(2);
                //如果到了100，设置为99,成功后才100
                if (this.process >= 100) {
                    this.process = 99;
                }

            },
            //上传成功
            handleSuccess(res, file) {
                this.viewFlag += 1;
                let this_ = this;
                let status = 0;
                if (typeof(res) == 'object' && 'Status' in res && res.Status == 'OK') {
                    this.process = 100;
                    this.isSuccess = 1;
                } else {
                    //表示上传成功后阿里没成功回调
                    console.log("回调失败")
                    this.isSuccess = 2;
                    status = -1;
                }
                setTimeout(() => {
                    this_.processFlag = false;
                }, 100);
                this.$emit("onSuccess", res, this.filename, status);
                console.log("上传成功：" + JSON.stringify(res))
            },
            //上传失败
            handleError(err, response, file) {
                this.isSuccess = 2;
                this.$emit("onSuccess", res, this.flag, -1);
                console.log("上传失败：" + JSON.stringify(err))
            },

            post(file, option) {
                this.processFlag = true;
                console.log("参数：" + JSON.stringify(option))
                // check maxSize
                this.handleStart(file);
                ajax({
                    file: option.file,
                    data: option.data,
                    filename: option.name,
                    action: option.url,
                    onProgress: e => {
                        this.handleProgress(e, file);
                    },
                    onSuccess: res => {
                        this.handleSuccess(res, file);
                    },
                    onError: (err, response) => {
                        this.handleError(err, response, file);
                    }
                });
            },
        },
        watch: {
            srcOut: function (newV, oldV) {
                if (newV != '') {
                    this.slotShow = false
                }
            }
        },
    }


</script>

<style scoped lang="less">
    .upload-contiaon {
        position: relative;

        /*预览样式更换*/
        .slotEvent {
            position: absolute;
            right: 65px;
            top: 10px;
            display: flex;
            flex-direction: column;
            .styleShow {
                color: #FF6600;
            }
            a {
                color: white;
            }
        }

        .file-contain {
            margin-top: 15px;
            .file-info {
                height: 35px;
                span {
                    margin-right: 40px;
                    font-size: 14px;
                }
            }
            .myprocess {
                bottom: 0;
            }
            .process-file {
                bottom: -10px;
            }
        }
        .upload-status {
            z-index: 88;
            position: absolute;
            bottom: 0;
            right: 0;
        }
        .myprocess {
            position: absolute;
            width: 100%;
            bottom: -10px;
            z-index: 99;
        }
        .div-img {
            margin-right: 10px;
            vertical-align: top;
            display: inline-block;
            width: 280px;
            box-shadow: 0 0 1px 1px #c4d0e9;
            height: 150px;
            overflow: hidden;
            position: relative;

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

        .del-upload-file {
            margin-left: 40px;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }

        .file-name-out {
            color: #495060;
            margin-right: 30px;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
        .statu-success {
            color: red;
        }
        .statu-error {
            color: red;
        }

        .btn-check {
            /*vertical-align: top;*/
            display: inline-block;
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

            .textTitle {
                margin-top: 15px;
            }
            .textContent {
                padding: 0 10px;
                line-height: 20px;
                font-size: 12px;
            }

            .mycamera {
                z-index: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: red;
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

</style>
