<template>
  <div class="page">
    <Card style="">
      <p class="title">企业基本资料</p>
      <Form ref="queryItem"
            :model="queryItem"
            :rules="ruleValidate">
        <FormItem label="客户全称"
                  prop="name">
          <Input style="width: 300px;"
                 placeholder="客户全称"
                 v-model="queryItem.name" />
        </FormItem>
      </Form>
    </Card>
    <Card style="">
      <p class="title">附件上传</p>
      <upload ref="uploadFile"></upload>
      <Button @click="commit">点击上传</Button>  
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
  import upload from '_c/common/upload1'
  import uploadImg from '_c/common/uploadImg'
  export default {
    components: {
      upload,
      uploadImg
    },
    name: "FileUpload",
    data() {
      return {
        queryItem: {
          name: ''
        },
        ruleValidate: {
          name: [{ required: true, message: "客户名称不能为空", trigger: "blur" }]
        }
      }
    },
    methods: {
      commit() {
        this.$refs.uploadFile.update();
      }
    },
  }
</script>
<style lang="less">
  .page {
  }
</style>

