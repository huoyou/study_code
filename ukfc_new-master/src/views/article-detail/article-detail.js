import {articleApi} from "../../common/api/articleApi";
export default {
	name: "ArticleDetail",
	props: {
		category: {
			type: [String, Number],
			default: ''
		},
		articleId: {
			type: [String, Number],
			default: ''
		}
	},
	data(){
		return {
			article: {}
		}
	},
	methods: {
		// 获取文章
		getArticle(articleId){
			articleApi.getArticleDetail(articleId || this.articleId)
			  .then(({data}) => {
			    console.log('data',data)
			    this.article = data;
			  });
		}
	},
	mounted(){
		this.getArticle();
		console.log(this.category);
	}
}