<template>
    <div style="height: 100%">
        <Card style="height: 100%">
        <upload></upload>
<!-- 


         <upload-img
        browse_button="browse_button"
        :url="serverUrl"
        @inputUploader="inputUploader"
      />
      <div v-for="file in files">{{file.name}}</div>
      <button id="browse_button" type="primary">选择文件</button>
      <button type="danger" @click="up.start()">开始上传</button> -->
        </Card>
    </div>
</template>
<script>
import upload from '_c/common/upload'
import uploadImg from '_c/common/uploadImg'
export default {
    components: {
        upload,
        uploadImg
    },
    name: "FileUpload",
    data() {
      return {
        // server_config: this.global.server_config,
        files:[],
        up: {},
        serverUrl: 'http://192.168.1.115:8087/sys/getOSSPolicy'
      }
    },
    methods: {
      inputUploader(up) {
          console.log('---up---',up)
        this.up = up;
        this.files = up.files;
      }
    },
}
</script>
