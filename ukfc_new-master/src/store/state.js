export default {
  /*
    存储用户信息

    withdrawConfig: { // withdrawConfig字段说明
      allowWithdraw: 0, // 是否可提现（1-可提现；0-不可提现）
      withdrawFeeRate: 0, // 提现手续费费率
      minVolume: 100, // 最小提现数量
      //  最小单位(表示提现数量必须是这个数的整数倍数，如有105个币，那么只能提现100个币) 提现数量=（提现数量/10）取整 * 10
      scale: 10,
      days: 6 // 转账等待天数（即还剩多少天可转账）
    }
   */
  userInfo: {},
  lang: {}, // 存储当前语言
  langs: [], // 存储所有语言列表
  expireTime: "", // token过期时间
  lastUpdateTime: "", // 最进获取/刷新token时间
  token: "", // token值
  coinList: [], // 币种列表
  userVipList: [], // 会员级别（投资级别）列表
  currencyList: [], // 法币列表（即人民币、美元、欧元等）
  futuresList: [], // 期货列表
  accountBalance: {}, // 账户余额信息
  unReadMessageCount: 0, // 用户未读消息数量
};
