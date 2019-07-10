import {supportApi} from "../../../common/api/supportApi";
import {articleApi} from "../../../common/api/articleApi";
import {format} from "timeago.js";
import {mapGetters} from "vuex";
export default {
  name: "LiveNews",
  data(){
    return {
      liveNews: [], //实时动态数据
      liveNewsLoading: true, // 实时动态数据加载中
      noticeList: [], // 公告列表
      noticeListLoading: true
    };
  },
  methods: {
    // 获取实时动态数据
    getLivenews() {
      supportApi.getLivenews()
        .then(({data}) => {
          this.liveNewsLoading = false;
          this.liveNews = data;
        })
        .catch(() => {
          this.liveNewsLoading = false;
        });
    },
    // 获取公告列表
    getNoticeList(){
      articleApi.getArticleList('notice', 1, 10)
        .then(res => {
          this.noticeListLoading = false;
          if(res.errcode === 0){
            let data = res.data.records;
            if(data.length > 0){
              data.forEach(item => {
                let time = new Date(item.created.replace('-', '/')).getTime();
                let now = new Date().getTime();
                let time2;
                // 86400000 毫秒 === 1天
                if(now - time <= 86400000){
                  time2 = format(item.created, this.get_lang.code);
                }else{
                  time2 = item.created.split(' ')[0];
                }
                item.time = time2;
                //item.time = format(new Date(item.created.replace('-', '/')).getTime(), this.get_lang.code);
              });
              this.noticeList = data;
            }
          }
        })
        .catch(() => {
          this.noticeListLoading = false;
        });
    }
  },
  computed: {
    ...mapGetters(['get_lang'])
  },
  mounted(){
    this.getLivenews();
    this.getNoticeList();
  }
}
