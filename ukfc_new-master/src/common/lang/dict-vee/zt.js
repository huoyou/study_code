import {flatDictMap_outer} from "../flatVeeDictMap";

let common = {
  checkPWd: '密碼必須為6-20位字母、數字、_的任意組合！ ',
  checkSellPWd: '交易密碼必須為6-20位字母、數字、_的任意組合',
  pwdNotEqual: '兩次密碼輸入不一致！ ',
  checkEmail: '郵箱格式不正確',
  emailRequired: '請輸入郵箱',
  checkMobile: '手機號格式不正確',
  mobileRequired: '請輸入手機號'
};
const originZtDict = {
  common: {
    payPassword: {
      required: '請輸入交易密碼',
      checkPwd: common.checkSellPWd
    },
    password: {
      required: '密碼不能為空',
      checkPwd: common.checkPWd
    },
    validateCode: {
      required: '請輸入驗證碼',
      validateCode: '驗證碼必須是6位數字',
    },
    gaCode: {
      required: '請輸入谷歌驗證碼',
      gaCode: '谷歌驗證碼必須是6位數字'
    },
    email: {
      required: '請輸入您的郵箱',
      email: '郵箱格式不正確'
    },
    mobile: {
      required: '請輸入手機號碼',
      checkMobile: '手機號輸入不正確'
    }
  },
  // 注册表单
  regist: {
    username: {
      required: '請輸入用戶名',
      checkAccount: '用戶名必須是6-12位的字母、數字、_的組合！ ',
    },
    password: {
      required: '密碼不能為空',
      checkPwd: common.checkPWd
    },
    secondPassword: {
      required: '二次密碼不能為空',
      checkRePwd: common.pwdNotEqual,
      is: common.pwdNotEqual,
    },
    inviteCode: {
      required: '邀請碼不能為空',
      checkInviteCode: '邀請碼輸入不正確！ '
    },
    countryCode: {
      required: '請選擇您的國籍'
    },
    mobile: {
      required: common.mobileRequired,
      checkMobile: common.checkMobile
    }
  },
  // 登录表单
  login: {
    username: {
      required: '用戶名不能為空',
      checkAccount: '用戶名輸入不正確！ ',
    },
    password: {
      required: '密碼不能為空',
    }
  },
  // 忘记密码表单
  forgetPwd: {
    countryCode: {
      required: '請選擇您的國籍'
    },
    password: {
      required: '請輸入新密碼',
      checkPWd: common.checkPWd
    },
    rePwd: {
      required: '請再次輸入密碼',
      is: common.pwdNotEqual
    }
  },
  // 锁仓投资表单
  investForm: {
    vip: {
      required: '請選擇投資級別'
    },
    amount: {
      required: '請輸入投資數量',
      decimal: '投資數量必須是一個正確的數字',
      min_value: '投資數量必須不能小於最小投資限額',
      max_value: '投資數量必須不能大於最大投資限額'
    },
    payPassword: {
      required: '請輸入交易密碼',
      checkPwd: common.checkSellPWd
    }
  },
  // 撤资表单
  disinvestmentForm: {
    payPassword: {
      required: '請輸入交易密碼',
      checkPwd: common.checkSellPWd
    }
  },
  // 转出表单
  transferOut: {
    form1: { // 表單1
      coinId: {
        required: '請選擇幣種'
      },
      address: {
        required: '請輸入轉賬地址'
      },
      volume: {
        required: '請輸入轉出數量',
        min_value: '轉出數量必須大於等於最小轉出數量',
        max_value: '轉出數量大於可轉數量',
        decimal: '請輸入正確的轉出數量'
      }
    }
  },
  // 用户反馈表单
  suggest: {
    categoryId: {
      required: '請選擇反饋類型'
    },
    content: {
      required: '請填寫反饋內容'
    },
    realName: {
      required: '請填寫真實姓名'
    },
    contact: {
      required: '請填寫聯繫方式(手機號/郵箱)'
    }
  },
  // 设置交易密码表单
  sellPwdForm: {
    oldPassword: {
      required: '請輸入舊交易密碼'
    },
    rePassword: {
      required: '請再次輸入密碼',
      is: common.pwdNotEqual
    }
  },
  // 绑定邮箱表单
  bindEmailForm: {
    email: {
      required: common.emailRequired,
      email: common.checkEmail
    },
    validateCode1: {
      required: '請輸入驗證碼',
      validateCode: '驗證碼必須是6位數字',
    },
    validateCode2: {
      required: '請輸入驗證碼',
      validateCode: '驗證碼必須是6位數字',
    },
  },
  // 修改密码表单
  updatePwdForm: {
    oldPassword: {
      required: '請輸入舊密碼'
    },
    rePwd: {
      required: '請再次輸入密碼',
      is: common.pwdNotEqual
    }
  },
  // 添加地址表单
  addAddressForm: {
    coinId: {
      required: '請選擇幣種'
    },
    name: {
      required: '請輸入地址名稱'
    },
    address: {
      required: '請輸入地址'
    }
  },
  // 预约投资表单
  reservationForm: {
    name: {
      required: '請輸入期貨名稱'
    },
    volume: {
      required: '請輸入投資金額',
      decimal: '投資金額最多2位小數',
      min_value: '投資金額不能小於最小投資金額',
      max_value: '餘額不足'
    },
    geetest: {
      required: '點擊按鈕進行驗證'
    }
  },
  // 首页账户资产预约表单
  accountReservationForm: {
    name: {
      required: '請選擇幣種'
    },
    volume: {
      required: '請輸入預約金額',
      decimal: '預約金額最多2位小數',
      //min_value: '投資金額不能小於最小投資金額',
      max_value: '餘額不足'
    }
  }
};

export const
  zt_dictionary = flatDictMap_outer(originZtDict);
