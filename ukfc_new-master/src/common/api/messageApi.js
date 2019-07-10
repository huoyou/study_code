import {request} from "./request";
export const messageApi = {
  /**
   * 获取所有消息列表
   * @param params
   * @returns {AxiosPromise<any>}
   */
  getMessageList(params){
    return request.get('/v2/w/message', {
      params
    });
  },
  // 获取最新消息
  getLatestMessage(){
    return request.get('/v2/w/message/latest');
  },
  // 获取消息详情(设置消息为已读)
  getMessageDetail(messageId){
    return request.get(`/v2/w/message/${messageId}`);
  },
  // 获取未读消息数量
  getUnreadMessageCount(){
    return request.get('/v2/w/message/count/unread');
  }
};
