<template>
    <div>
        <div>
            <div class="upload-pic-item"
                 :id="item.id"
                 v-for="(item,index) in tableData"
                 :key="index">
                {{item.name}} {{item.size}}
                <div class="progress">
                    <div class="progress-bar"
                         style="width: 0">
                    </div>
                </div>
                <!-- <Progress  :percent="item.percent">
                    <Icon type="checkmark-circled"></Icon>
                    <span>成功</span>
                </Progress> -->
                <b v-if="item.status === 1">准备上传</b>
                <b v-if="item.status === 4"
                   style="color: brown">上传失败</b>
                <b v-if="item.status === 5"
                   style="color: chartreuse">已上传</b>
                <image />
                <div class="upload-delete"
                     @click="dteFile(item.id)">
                    删除
                </div>
            </div>
        </div>
        <Table :data="tableData"
               :columns="columns1"
               style="width: 100%; margin: 10px 10px;">
        </Table>
        <br />
        <uploader ref="uploader"
                  browse_button="browse_button"
                  :filters="{prevent_duplicates:true}"
                  @inputUploader="inputUploader" />
    </div>
</template>

<script>
    import Uploader from '_c/common/uploadImg'
    export default {
        name: "MultiFileUpload",
        data() {
            return {
                files: [],
                up: {},
                tableData: [],
                columns1: [
                    {
                        title: '文件名',
                        key: 'name'
                    },
                    {
                        title: '大小',
                        key: 'size'
                    },
                    {
                        title: '状态',
                        key: 'status',
                        render: (h, params) => {
                            let res = params.row.status;
                            if (res == 1) {
                                return h("span", '准备上传');
                            } else if (res == 4) {
                                return h("span", '上传失败');
                            } else if (res == 5) {
                                return h("span", '已上传');
                            } else if (res == 2) {
                                return h("progress :percentage='res.percent'");
                            }
                        }
                    },
                    {
                        title: '操作',
                        key: 'status',
                        render: (h, params) => {
                            let res = params.row;
                            return h('button', {
                                props: {
                                    type: "text",
                                    size: "small"
                                },
                                style: {
                                    color: "#5cadff"
                                },
                                on: {
                                    click: () => {
                                        this.dteFile(res.id)
                                    }
                                }
                            }, '删除')
                        }

                    }
                ],
                serverUrl: 'http://192.168.1.115:8087/sys/getOSSPolicy',

            }
        },
        watch: {
            files: {
                handler() {
                    this.tableData = [];
                    this.files.forEach((e) => {
                        this.tableData.push({
                            name: e.name,
                            size: e.size,
                            status: e.status,
                            id: e.id,
                            percent: e.percent
                        });
                    });
                    console.log('this.tableData', this.tableData)
                },
                deep: true
            }
        },
        methods: {
            inputUploader(up) {
                this.up = up;
                this.files = up.files;
            },
            dteFile(id) {
                let file = this.up.getFile(id);
                this.up.removeFile(file);
            }
        },
        components: {
            'uploader': Uploader
        }
    }
</script>

<style lang="less">
    .upload-pic-item {
      display: flex;
      align-items: center;
      b {
        margin-left: 5px;
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
        display: inline-block;
        color: blue;
        margin-left: 5px;
      }
      .progress-bar {
        background-color: rgb(84, 185, 249);
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
    #container {
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
</style>

