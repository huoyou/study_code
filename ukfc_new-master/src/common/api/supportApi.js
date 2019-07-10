import {request} from "./request";

export const supportApi = {
  // 获取全球收益排名
  getGlobalRank(){
    return request.get('/v2/w/support/global_ranking');
  },
  // 获取全球总用户数
  getTotalUsers(){
    return request.get('/v2/w/support/total_users');
  },
  // 获取用户反馈类型
  getSuggestType(){
    return request.get('/v2/w/dictionary/QUESTION_TYPE');
  },
  // 获取实时动态
  getLivenews(){
    return request.get('/v2/w/support/reals');
  },
  /**
   * 用户意见反馈
   * @param data
   * @returns {AxiosPromise<any>}
   */
  suggest(data){
    return request.post('/v2/w/user/suggestion', data);
  },
  /**
   * 获取用户反馈
   * @param params
   * params => {
   *   current: 1, // 当前页码
   *   size: 10 // 每页显示数据条数
   * }
   * @returns {AxiosPromise<any>}
   */
  getUserSuggests(params){
    return request.get('/v2/w/user/suggestion/records', {
      params
    });
  }
};
