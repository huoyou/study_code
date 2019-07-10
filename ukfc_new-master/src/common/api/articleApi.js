/**
 * 文章相关api
 */
import {request} from "./request";
export const articleApi = {
  // 获取文章分类
  getArticleCategory(){
    return request.get('/v2/w/article/category');
  },
  /**
   * 根据category获取文章列表
   * @param category 文章分类，如果category为notice，则是获取公告
   * @param current
   * @param size
   * @returns {AxiosPromise<any>}
   */
  getArticleList(category, current = 1, size = 10){
    return request.get(`/v2/w/article/${category}/${current}/${size}`);
  },
  /**
   * 根据文章id获取文章详情
   * @param articleId
   * @returns {AxiosPromise<any>}
   */
  getArticleDetail(articleId){
    return request.get(`/v2/w/article/${articleId}`);
  }
};
