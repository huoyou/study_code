import MembersDetail from './members-detail-modal/MembersDetail';
import NodeSettingModal from '../../../components/business-components/node-setting-modal/NodeSetting';
import {Roll} from "../../../common/js/roll";
import {userApi} from "../../../common/api/userAccountApi";
import {mapGetters} from "vuex";

export default {
  name: 'MyTeam',
  components: {
    'members-detail': MembersDetail,
    'node-setting-modal': NodeSettingModal
  },
  data(){
    return {
      membersDetailModalVisible: false, // 会员详情弹窗是否显示
      nodeSettingModalVisible: false, // 控制节点设置弹窗显示
      nodeSettingModalShow: false,
      dataLoading: true,
      showLoadMoreDataBar: false,
      myMembers: [], // 我发展的会员
      membersCountInfo: {}, // 发展的会员数量信息
      choosedMemberUserId: '',
      roll: null
    };
  },
  computed: {
    ...mapGetters(['get_userInfo'])
  },
  methods: {
    // 获取用户发展的会员
    async getMyMembers(userId){
      let res = await userApi.getUserMembers(userId);
      this.dataLoading = false;
      if(res && res.data){
        let data = res.data;

        this.myMembers = data.referrals;
        this.membersCountInfo = data;
        delete this.membersCountInfo.referrals;

        this.showMoreMembers();
      }
    },
    // 会员点击事件
    openMembersDetailModal(e){
      e = e || window.event;
      let target = e.target || e.srcElement;
      if(!target.getAttribute('data-uid')){
        return;
      }
      this.choosedMemberUserId = target.getAttribute('data-uid');
      this.membersDetailModalVisible = true;
    },
    // 显示加载更多会员
    showMoreMembers(){
      this.$nextTick(() => {
        if(!this.showLoadMoreDataBar){
          let clearMargin = this.$refs.clear_margin;
          let myMembersList = this.$refs.my_members_list;
          if(!this.dataLoading && clearMargin.offsetHeight > myMembersList.offsetHeight){
            this.showLoadMoreDataBar = true;
          }
        }
      });
    },
    // 加载更多会员控制条点击事件
    loadMoreDataBarClick(){
      this.$refs.my_members_list.style.maxHeight = 'none';
    },
    nodeSettingBtnClick(){
      if(!this.nodeSettingModalShow){
        this.nodeSettingModalShow = true;
      }
      this.nodeSettingModalVisible = true;
    }
  },
  mounted(){
    let roll = new Roll({offsetTop: 50});
    let that = this;
    roll.push(this.$refs.my_team, function (context, done) {
      let timer = setInterval(() => {
        if(that.get_userInfo.id){
          clearInterval(timer);
          that.getMyMembers(that.get_userInfo.id);
        }
      }, 500);
      done(this, context);
    });
    this.roll = roll;
  },
  beforeDestroy() {
    this.roll.destroy();
  }
}
