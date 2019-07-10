/*
  用户钱包地址相关api
 */
import {request} from "./request";
import md5 from "js-md5";

export const walletAddressApi = {
  /**
   * 添加地址
   * @param form
   * @returns {AxiosPromise<any>}
   */
  addAddress(form){
    let data = {
      ...form
    };
    if(data.payPassword){
      data.payPassword = md5(form.payPassword);
    }
    return request.post('/v2/w/user/wallet', data);
  },
  /**
   * 修改地址
   * @param form
   * @returns {AxiosPromise}
   */
  updateAddress(form){
    let data = {
      ...form
    };
    if(data.payPassword){
      data.payPassword = md5(form.payPassword);
    }
    return request({
      method: 'put',
      url: '/v2/w/user/wallet',
      data
    });
  },
  /**
   * 删除地址
   * @param form
   * @returns {AxiosPromise}
   */
  deleteAddress(form){
    let data = {
      ...form
    };
    data.payPassword = md5(form.payPassword);
    return request({
      method: 'delete',
      url: '/v2/w/user/wallet',
      data
    });
  },
  /**
   * 获取地址列表
   * @param coinId
   * @returns {AxiosPromise<any>}
   */
  getAddressList(coinId){
    return request.get(`/v2/w/user/wallet/${coinId}`);
  }
};
