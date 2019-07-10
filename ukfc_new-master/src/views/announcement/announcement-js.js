import {articleApi} from "../../common/api/articleApi";
import {format} from "timeago.js";
import {mapGetters} from "vuex";

export default {
  name: "Announcement",
  data(){
    return {
      messageDetailModalVisible: false,
      announcementList: [], // 公告列表
      pageData: {
        current: 1,
        size: 10,
        total: 1,
        pages: 1,
      },
      announcementDetail: {}, // 详情数据
      loading: true
    }
  },
  methods: {
    // 获取公告列表
    getAnnouncementList(){
      let pageData = this.pageData;
      articleApi.getArticleList('notice', pageData.current, pageData.size)
        .then(({data}) => {
          this.loading = false;
          console.log(data.records.length >0)
          if(data.records.length > 0){
            console.log(111)
            data.records.forEach(item => {
              item.time = this.formatDate(item.created);
              item.content = item.content.replace(/<\w+>|<\/\w+>/g, '');
            });
            console.log(222)
            this.announcementList = data.records;
          }
          pageData.total = data.total;
          pageData.pages = data.pages;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    // 获取公告详情
    getAnnouncementDetail(announcementId){
      articleApi.getArticleDetail(announcementId)
        .then(({data}) => {
          console.log('data',data)
          this.announcementDetail = data;
        });
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
    }
  },
  computed: {
    ...mapGetters(['get_lang'])
  },
  mounted() {
    let announcementId = this.$route.params.announcementId;
    if(announcementId){
      this.getAnnouncementDetail(announcementId);
      this.messageDetailModalVisible = true;
    }
    this.getAnnouncementList();
  }
}
