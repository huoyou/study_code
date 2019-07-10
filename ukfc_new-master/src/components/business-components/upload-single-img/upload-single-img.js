import {commonApi} from "../../../common/api/commonApi";

export default {
  name: 'UploadSingleImg',
  props: {
    value: {
      type: String,
      default: ''
    },
    maxSize: { // 单个文件最大体积，默认5M
      type: Number,
      default: 5242880
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showPreview: { // 是否显示预览图
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      previewImg: '', // 预览图片地址
      disabled_inner: false,
      accept: 'image/jpg,image/jpeg,image/png,image/bmp,image/gif,image/webp',
      uploadData: {}, // 上传时的额外参数
      uploadHost: '', // 上传url
      preUploadFaild: false, // 预上传失败
      uploadFaild: false, // 上传失败
      uploading: false,
      currentFile: null,
      imgUri: '' // 最后一次上传成功后的图片地址
    };
  },
  watch: {
    disabled: {
      immediate: true,
      handler(newVal) {
        this.disabled_inner = newVal;
      }
    },
    value: {
      immediate: true,
      handler(newVal) {
        // 为了能够回显
        if (newVal && newVal != this.imgUri) {
          this.previewImg = newVal;
        }
      }
    }
  },
  methods: {
    // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
    _fileOnChange(file, fileList) {
      //console.log("添加文件了", file, fileList);
      // 文件状态为 ready 则表明是添加文件
      if (file.status === "ready") {
        // 文件大小超出
        if (file.size > this.maxSize) {
          this.$emit('error', 'MAX_SIZE_LIMIT');
          this.$refs.upload_single_img.uploadFiles.splice(0, 1);
          return;
        }

        this.disabled_inner = false;
        this.preUploadFaild = false;
        this.uploadFaild = false;
        this.uploading = false;
        this.currentFile = file;

        this.createPreviewImg(file.raw, (src) => {
          this.previewImg = src;
        });
        this._preUpload(file);
      }
    },
    // 预上传
    _preUpload(file) {
      this.disabled_inner = true;
      this.preUploadFaild = false;
      this.uploading = true;

      let arr = file.name.split(".");
      let suffix = arr[arr.length - 1];
      commonApi.preUpload()
        .then((res) => {
          let data = res.data;
          console.log(res);
          this.uploadHost = data.host;

          this.uploadData.name = data.signature;
          this.uploadData.key = `${data.dir}${new Date().getTime()}.${suffix}`;
          this.uploadData.policy = data.policy;
          this.uploadData.OSSAccessKeyId = data.accessid;
          this.uploadData.success_action_status = 200;
          this.uploadData.callback = data.callback;
          this.uploadData.signature = data.signature;

          this.upload();
        })
        .catch(() => {
          this.disabled_inner = false;
          this.preUploadFaild = true;
          this.uploading = false;
        });
    },
    // 上传图片
    upload(retry) {
      this.$nextTick(() => {
        // 上传重试，hack，element ui默认不支持重新上传
        if (retry) {
          this.currentFile.status = 'ready';
          this.$refs.upload_single_img.uploadFiles.push(this.currentFile);
        }
        this.uploading = true;
        this.$refs.upload_single_img.submit();
      });
    },
    // 删除图片
    clear() {
      this.disabled_inner = false;
      this.preUploadFaild = false;
      this.uploadFaild = false;
      this.currentFile = null;
      this.previewImg = '';
      this.imgUri = '';

      this.$emit('input', '');
    },
    // 创建预览图
    createPreviewImg(file, fn) {
      if (!fn || typeof fn !== 'function') {
        console.error('createPreviewImg函数第二个参数必须是一个函数!');
        return;
      }
      let img = document.createElement('img');

      if (window.URL) {
        let imgSrc = window.URL.createObjectURL(file);
        img.src = imgSrc;
        fn(img.src);
        img.onload = () => {
          window.URL.revokeObjectURL(imgSrc);
        };

      } else if (window.FileReader) {
        let reader = new FileReader();
        img.onload = () => {
          fn(img.src);
        };
        reader.onload = (e) => {
          e = e || window.event;
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
        // reader = null;
      }
    },
    // 图片上传成功回调
    _handleUploadSuccess(res, file) {

      /*this.currentFile.status = 'ready';
      this.$refs.upload_single_img.uploadFiles.push(this.currentFile);*/
      if(res.uri){
        this.disabled_inner = false;
        this.preUploadFaild = false;
        this.uploadFaild = false;
        this.uploading = false;
        this.currentFile = null;
        this.imgUri = res.uri;
        console.log('图片上传成功', res.uri);
        this.$emit('input', res.uri);
        this.$emit('uploadSuccess', res, file);
      }else{
      /*  this.currentFile.status = 'ready';
        this.$refs.upload_single_img.uploadFiles.push(this.currentFile);

        this.disabled_inner = false;
        this.preUploadFaild = false;
        this.uploading = false;
        this.uploadFaild = true;
        this.$emit('uploadError', res);*/
        this.$emit('uploadError', res);
      }


    },
    // 图片上传中回调
    _handleUploadProgress(event, file) {
      this.$emit('uploadProgress', event, file);
    },
    // 图片上传失败回调
    _handleUploadError(err) {
      this.disabled_inner = false;
      this.preUploadFaild = false;
      this.uploading = false;
      this.uploadFaild = true;
      this.$emit('uploadError', err);
      // console.log('图片上传失败', err);
    }
  }
}
