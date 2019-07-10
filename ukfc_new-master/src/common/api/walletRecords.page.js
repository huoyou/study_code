import {request} from "./request";

export const walletRecordsApi = {
  // 充值记录
  rechargeRecords(params) {
    return request({
      url: '/v2/w/recharge/records',
      method: 'get',
      params
    })
  },
  // 提现记录
  withdrawRecords(params) {
    return request({
      url: '/v2/w/withdraw/records',
      method: 'get',
      params
    })
  },
  // 兑换记录
  coin2coin_Records(params) {
    return request({
      url: '/v2/w/coin2coin/records',
      method: 'get',
      params
    })
  },

  // 投资记录
  investRecords(params) {
    return request({
      url: '/v2/w/invest/records',
      method: 'get',
      params
    })
  },

};
