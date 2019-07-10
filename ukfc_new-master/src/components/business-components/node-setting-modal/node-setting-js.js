import {mapGetters, mapActions} from "vuex";
import {userSecurityApi} from "../../../common/api/userSecurityApi";

export default {
  name: "NodeSetting",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      modalVisible: this.show,
      modalOpened: false,
      form: {
        inviteCode: ''
      },
      userCurrentNode: {}, // 用户当前挂靠的节点
      errMsg: '',
      committing: false
    }
  },
  computed: {
    ...mapGetters(['get_userInfo'])
  },
  watch:{
    show(newVal){
      this.modalVisible = newVal;
    },
    get_userInfo(newVal){
      if(newVal.parentUserId && this.modalOpened){
        this.getUserCurrentNode();
      }
    }
  },
  methods: {
    ...mapActions(['getUserInfo_action']),
    // 提交设置用户节点数据
    confirmSetNode(){
      if(this.committing){
        return;
      }
      if(!this.form.inviteCode){
        this.errMsg = this.$t('nodeSettingModal.inviteCodeRequired'); // 请输入挂靠节点的邀请码
        return;
      }else{
        this.errMsg = '';
      }
      this.committing = true;
      userSecurityApi.setUserNode(this.form.inviteCode)
        .then(res => {
          this.committing = false;
          if(res.errcode === 0){
            this.$notify.success({
              title: this.$t('common.warmPrompt'), // 温馨提示
              message: this.$t('nodeSettingModal.nodeSetSuccess') // 节点设置成功！
            });
            this.form.inviteCode = '';
            this.getUserInfo_action();
          }
        })
        .catch(() => {
          this.committing = false;
        });
    },
    // 获取用户当前挂靠节点
    getUserCurrentNode(){
      userSecurityApi.getUserNode()
        .then(({data}) => {
          this.userCurrentNode = data;
        });
    },
    onModalOpen(){
      if(!this.modalOpened){
        this.modalOpened = true;
        if(this.get_userInfo.parentUserId){
          this.getUserCurrentNode();
        }
      }
    },
    // 弹窗关闭事件
    onModalClosed(){
      this.$emit('update:show', false);
    }
  }
}
