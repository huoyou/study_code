import {userApi} from "../../../../common/api/userAccountApi";

export default {
  name: "MembersDetail",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    userId: {
      type: [String, Number],
      default: ''
    }
  },
  data(){
    return {
      modalVisible: this.show,
      userInfo: {},
      userMembers: [],
      dataLoading: true,
      value: 3.5
    }
  },
  watch: {
    show(newVal){
      this.modalVisible = newVal;
    }
  },
  methods: {
    // 获取用户发展的会员
    async getUserMembers(userId){
      let res = await userApi.getUserMembers(userId);
      this.dataLoading = false;
      if(res && res.data){
        let data = res.data;

        this.userMembers = data.referrals;
        this.userInfo = data;
        delete this.userInfo.referrals;
      }
    },
    // 弹窗打开事件
    onModalOpen(){
      if(this.userId){
        this.getUserMembers(this.userId);
      }
    },
    // 弹窗关闭事件
    onModalClosed(){
      this.$emit('update:show', false);
      this.userInfo = {};
      this.userMembers = [];
      this.dataLoading = false;
    }
  }
}
