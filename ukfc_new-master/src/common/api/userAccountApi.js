/**
 * 用户账户相关api
 */
import {request} from "./request";
import md5 from 'js-md5';
/**
 * 用户相关api
 * @type {{}}
 */
export const userApi = {
  /**
   * 获取用户账户资产列表(用户添加的币种列表)
   * @param params
   * params => {
   *  current: 1, // 当前页码
   *   size: 10 // 每页显示条数
   * }
   * @returns {AxiosPromise<any>}
   */
  getAccountBalance(){
    return request.get('/v2/w/account');
  },
  /**
   * 获取指定账户资产详情(即获取用户添加的指定币种的详情)
   * @param accountId
   * @returns {AxiosPromise<any>}
   */
  getAccountDetail(accountId){
    return request.get(`/v2/w/account/${accountId}`);
  },
  /**
   * 获取用户发展的会员
   * @param userId
   * @returns {AxiosPromise<any>}
   */
  getUserMembers(userId){
    return request.get('/v2/w/team/info', {
      params: {
        userId
      }
    });
  }
};

/**
 * 锁仓投资
 * @type {{}}
 */
export const investApi = {
  // 首页账户资产预约
  accountReservation(form){
    let data = {
      ...form
    };
    data.paymentPassword = md5(data.paymentPassword);
    return request.post('/v2/w/reservation', data);
  },
  // 预约投资
  reservationInvest(form){
    let data = {
      ...form
    };
    data.payPassword = md5(data.payPassword);
    return request.post('/v2/w/invest', data);
  },
  // 投资
  invest(form){
    let data = {
      ...form
    };
    data.payPassword = md5(data.payPassword);
    return request.post('/v2/w/invest', data);
  },
  /**
   * 撤资
   * @param form
   * form => {
      "orderId": 0,
      "payPassword": "string"
    }
   * @returns {AxiosPromise<any>}
   */
  disInvestment(form){
    let data = {
      ...form
    };
    data.payPassword = md5(data.payPassword);
    return request.post('/v2/w/invest/withdraw', data);
  },
  /**
   * 资产转出
   * @param form
   * @returns {AxiosPromise<any>}
   */
  transferOut(form){
    let data = {
      ...form
    };
    data.payPassword = md5(form.payPassword);
    return request.post('/v2/w/withdraw', data);
  },
  /**
   * 获取用户转入地址（即获取用户充值地址）
   * @param coinName
   * @returns {AxiosPromise<any>}
   */
  getTransferInAddress(coinName){
    return request.get('/v2/w/user/address', {
      params: {
        coinName
      }
    });
  },
 /* // 投资记录
  getInvestRecord(params){
    return request.get('/v2/w/invest/records', {
      params
    });
  },*/
  // 获取用户投资信息
  getUserInvestInfo(){
    return request.get('/v2/w/invest/info');
  },
  // 获取用户可用投资金额
  getInvestBalance(){
    return request.get('/v2/w/account/invest');
  },
  // 获取用户未撤资的订单
  getUnDisinvestmentOrder(){
    return request.get('/v2/w/invest/order');
  }

};
