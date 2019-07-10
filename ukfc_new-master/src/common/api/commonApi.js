import {request} from "./request";

export const commonApi = {
  // 获取用户信息
  getUserInfo() {
    return request.get('/v2/w/user/info');
  },
  // 获取所有语言
  getLanguages() {
    return request.get('/v2/w/lang');
  },
  /**
   * 切换语言
   * @param lang
   * @returns {AxiosPromise<any>}
   */
  toggleLang(lang){
    return request.get(`/v2/w/lang/${lang}`);
  },
  /**
   * 极验预处理
   * @returns {AxiosPromise<any>}
   */
  geetestRegist(){
    return request.get('/v2/w/gt/register');
  },
  // 获取所有币种列表
  getCoinList() {
    return request.get('/v2/w/coin/list');
  },
  /**
   * 获取用户会员级别(投资级别)列表，如果传递了code，则是获取会员级别的详情数据
   * @param code
   * @returns {AxiosPromise<any>}
   */
  getUserVipList(code) {
    if (typeof code !== 'undefined') {
      return request.get(`/v2/w/config/vip?code=${code}`);
    } else {
      return request.get('/v2/w/config/vip');
    }
  },
  // 获取所有法币
  getCurrencyList(){
    return request.get('/v2/w/config/currency');
  },
  // 获取期货列表
  getFuturesList(){
    return request.get('/v2/w/config/futures')
  },
  /**
   * 发送验证码
   * @param data
   * data => {
   *  "code": "", // 不需要传递后台
      "countryCode": "",
      "email": "",
      "phone": "",
      "templateCode": ""
   * }
   * @param geetestData 极验数据
   * @returns {AxiosPromise<any>}
   */
  sendSMS(data, geetestData){
    if(geetestData){
      return request.post('/v2/w/dm/sendTo', data, {
        headers: geetestData
      });
    }else{
      return request.post('/v2/w/dm/sendTo', data);
    }
  },
  // 预上传接口
  preUpload(){
    return request.get('/v2/w/preupload');
  }
};
