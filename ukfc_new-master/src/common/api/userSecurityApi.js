/*
  用户安全设置相关api
 */
import {request} from "./request";
import md5 from "js-md5";
export const userSecurityApi = {
  /**
   * 设置交易密码
   * @param form
   * @returns {AxiosPromise<any>}
   */
  setPayPassword(form){
    let data = {
      ...form
    };
    data.payPassword = md5(data.payPassword);
    return request.post('/v2/w/user/security/setPayPassword', data);
  },
  /**
   * 修改交易密码
   * @param form
   * @returns {AxiosPromise<any>}
   */
  updatePayPassword(form){
    let data = {
      ...form
    };
    data.newPassword = md5(data.newPassword);
    data.oldPassword = md5(data.oldPassword);
    return request.post('/v2/w/user/security/modifyPayPassword', data);
  },
  /**
   * 重置交易密码
   * @param form
   * @returns {AxiosPromise<any>}
   */
  resetPayPassword(form){
    let data = {
      ...form
    };
    data.password = md5(data.password);
    return request.post('/v2/w/user/security/forgotPayPassword', data);
  },
  /**
   * 绑定邮箱
   * @param data
   * @returns {AxiosPromise<any>}
   */
  bindEmail(data){
    return request.post('/v2/w/user/bindingEmail', data);
  },
  /**
   * 修改登录密码
   * @param form
   * form => {
   *   "newPassword": "",
        "oldPassword": "",
        "validateCode": "",
        "verifyType": ""
   * }
   * @returns {AxiosPromise<any>}
   */
  updateLoginPwd(form){
    let data = {
      ...form
    };
    data.newPassword = md5(form.newPassword);
    data.oldPassword = md5(form.oldPassword);
    return request.post('/v2/w/user/security/modifyLoginPassword', data);
  },
  /**
   * 修改用户资料
   * @param data
   * @returns {AxiosPromise<any>}
   */
  updateUserProfile(data){
    return request.post('/v2/w/user/profile', data);
  },
  // 查询用户当前节点
  getUserNode(){
    return request('/v2/w/user/nodeUser');
  },
  /**
   * 设置用户节点
   * @param inviteCode
   * @returns {AxiosPromise<any>}
   */
  setUserNode(inviteCode){
    return request({
      method: 'post',
      url: '/v2/w/user/nodeUser',
      params: {
        inviteCode
      }
    })
  }
};
