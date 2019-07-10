import {articleApi} from "../../common/api/articleApi";

export default {
  name: "HelpCenter",
  data(){
    return {
      articleList: [],
      articleLoading: true,
      articleDetail: {}
    };
  },
  methods: {
    getArticleList() {
      articleApi.getArticleList('help', 1, 10)
        .then(({data}) =>{
          this.articleList = data.records;
          this.articleLoading = false;

          if(this.$route.params.id){
            let article = this.findArticleDetailById(this.$route.params.id);
            if(article){
              this.articleDetail = article;
            }
          }else{
            if(data.records.length > 0){
              this.articleDetail = data.records[0];
              this.$router.replace(`/helpCenter/${data.records[0].id}`);
            }
          }
        })
        .then(() => {
          this.articleLoading = false;
        });
    },
    findArticleDetailById(id){
      let articleList = this.articleList;
      if(articleList.length > 0){
        for(let i = 0, len = articleList.length; i < len; i++){
          if(articleList[i].id === id){
            return articleList[i];
          }
        }
      }
    }
  },
  watch: {
    '$route'(newRoute){
      let id = newRoute.params.id;
      if(id && id !== this.articleDetail.id){
        let article = this.findArticleDetailById(id);
        if(article){
          this.articleDetail = article;
        }
      }else{
        if(this.articleList.length > 0){
          this.articleDetail = this.articleList[0];
          this.$router.replace(`/helpCenter/${this.articleList[0].id}`);
        }
      }
    }
  },
  created(){
    this.getArticleList();
  }
}
