/*
  谷歌验证器相关api
 */
import {request} from "./request";
export const gaAuthenticApi = {
  // 生成GA秘钥
  generateGaSecurityKey(){
    return request.get('/v2/w/ga/generate');
  },
  /**
   * 绑定谷歌验证器
   * @param data
   * data => {
   *   "code": "",
       "secret": ""
   * }
   * @returns {AxiosPromise<any>}
   */
  bindGaAuthentic(data){
    return request.post('/v2/w/ga/verify', data);
  },
  /**
   * 查看谷歌验证器
   * @param code
   * @returns {AxiosPromise<any>}
   */
  checkGaCodeGaCode(code) {
    return request.get('/v2/w/ga', {
      params: {
        code
      }
    });
  }
};
