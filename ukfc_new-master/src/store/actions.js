import types from "./mutation-types";
import {commonApi} from "../common/api/commonApi";
import {userApi} from "../common/api/userAccountApi";
import {messageApi} from "../common/api/messageApi";

export default {
  // action 获取用户详情信息
  getUserInfo_action({commit}) {
    return commonApi.getUserInfo()
      .then((res) => {
        commit(types.set_userInfo, res.data);
        return res;
      });
  },
  // 获取所有语言
  getLangs_action({commit}){
    return commonApi.getLanguages()
      .then((res) => {
        let data = res.data;
        if(data && data.length > 0){
          commit(types.set_langs, data);
        }
        return res;
      });
  },
  // 获取币种列表
  getCoinList_action({commit}){
    return commonApi.getCoinList()
      .then(res => {
        let data = res.data;
        if(data && data.length > 0){
          commit(types.set_coinList, data);
        }
        return res;
      });
  },
  // 获取会员级别列表(投资级别)
  getUserVipList_action({commit}){
    return commonApi.getUserVipList()
      .then(res => {
        let data = res.data;
        if(data && data.length > 0){
          commit(types.set_userVipList, data);
        }
        return res;
      });
  },
  // 获取法币列表
  getCurrencyList_action({commit}){
    return commonApi.getCurrencyList()
      .then(res => {
        let data = res.data;
        if(data && data.length > 0){
          commit(types.set_currencyList, data);
        }
        return res;
      });
  },
  // 获取期货列表
  getFuturesList_action({commit}){
    return commonApi.getFuturesList()
      .then(res => {
        let data = res.data;
        if(data && data.length > 0){
          commit(types.set_futuresList, data);
        }
        return res;
      });
  },
  // 获取账户余额
  getAccountBalance_action({commit}) {
    return userApi.getAccountBalance()
      .then(res => {
        let data = res.data;
        if(data){
          commit(types.set_accountBalance, data);
        }
        return res;
      });
  },
  // 获取用户未读消息数量
  getUnreadMessageCount_action({commit}) {
    return messageApi.getUnreadMessageCount()
      .then(res => {
        commit(types.set_unreadMessageCount, res.data);
        return res;
      });
  }
};
