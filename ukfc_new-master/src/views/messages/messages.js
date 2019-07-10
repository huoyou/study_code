import {format} from "timeago.js";
import {messageApi} from "../../common/api/messageApi";
import {mapGetters} from "vuex";

export default {
  name: "Messages",
  data(){
    return {
      messageDetailModalVisible: false, // 控制消息详情弹窗显示
      form: {
        startDate: '',
        endDate: '',
        type: ''
      },
      messageList: [], // 消息列表
      messageDetail: {}, // 消息详情
      pageData: {
        current: 1,
        size: 10,
        pages: 0,
        total: 0
      },
      loading: true
    }
  },
  methods: {
    // 获取消息列表
    getMessageList() {
      let pageData = this.pageData;
      messageApi.getMessageList({
        current: pageData.current,
        size: pageData.size
      })
        .then(({data}) => {
          this.messageList = data.records;
          pageData.pages = data.pages;
          pageData.total = data.total;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    // 设置消息为已读
    setMessageReaded(message){
      messageApi.getMessageDetail(message.id)
        .then(() => {
          message.status = 1;
        });
    },
    // 查看全部
    viewDetail(message){
      this.messageDetail = message;
      if(message.status === 0){
        this.setMessageReaded(message);
      }
      this.messageDetailModalVisible = true;
    },
    // 格式时间
    formatDate(dateTime){
      let time = new Date(dateTime.replace('-', '/')).getTime();
      let now = new Date().getTime();
      // 86400000 毫秒 === 1天
      if(now - time <= 86400000){
        return format(dateTime, this.get_lang.code);
      }else{
        return dateTime;
      }
    },
    onCurrentChange(){
      this.getMessageList();
    }
  },
  computed: {
    ...mapGetters(['get_lang'])
  },
  created(){
    this.getMessageList();
  },
  mounted() {
    let messageId = this.$route.params.messageId;
    if(messageId){
      this.messageDetailModalVisible = true;
      messageApi.getMessageDetail(messageId)
        .then(({data}) => {
          this.messageDetail = data;
        });
    }
    console.log(format('2019-06-14 12:46:21', 'zh_CN'));
  }
}
