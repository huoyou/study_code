<template>
  <div class="upload-single-img-com">
    <el-upload
        ref="upload_single_img"
        class="avatar-uploader"
        :action="uploadHost"
        :show-file-list="false"
        :accept="accept"
        :on-success="_handleUploadSuccess"
        :on-progress="_handleUploadProgress"
        :on-error="_handleUploadError"
        :data="uploadData"
        :auto-upload="false"
        :disabled="disabled_inner"
        :on-change="_fileOnChange">
      <div class="preview-box" v-if="showPreview" v-show="previewImg">
        <img :src="previewImg"
             class="preview-img"
             title="点击更换图片">
        <div class="tool-bar" @click.stop="1+2" v-show="preUploadFaild || uploadFaild">
          <el-button v-show="preUploadFaild" type="primary" size="mini" icon="el-icon-refresh" circle title="重试" @click="_preUpload(currentFile)"></el-button>
          <el-button v-show="uploadFaild" type="primary" size="mini" icon="el-icon-refresh" circle title="重试" @click="upload(true)"></el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" circle title="删除" @click="clear"></el-button>
        </div>
        <div class="uploading-tip" v-show="uploading">上传中...</div>
      </div>
      <slot v-else></slot>
      <i v-show="!showPreview || !previewImg" class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import index from "./upload-single-img";
export default index;
</script>

<style lang="scss">
  .upload-single-img-com {
    .avatar-uploader .el-upload {
      width: 180px;
      height: 120px;
    }

    .preview-box {
      position: relative;
      height: 100%;
    }

    .preview-img {
      max-width: 100%;
    }

    .tool-bar {
      position: absolute;
      top: 0;
      left: 0;
      padding: 5px 5px;
      width: 100%;
      text-align: right;
    }

    .avatar-uploader-icon {
      width: 180px;
      height: 120px;
      line-height: 120px;
    }

    .uploading-tip {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 5;
      width: 100%;
      padding: 5px 10px;
      color: #fff;
      font-size: 14px;
      text-align: left;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
</style>
