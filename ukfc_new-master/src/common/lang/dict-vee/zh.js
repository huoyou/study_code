import {flatDictMap_outer} from "../flatVeeDictMap";
let common = {
  checkPWd: '密码必须为6-20位字母、数字、_的任意组合！',
  checkSellPWd: '交易密码必须为6-20位字母、数字、_的任意组合',
  pwdNotEqual: '两次密码输入不一致！',
  checkEmail: '邮箱格式不正确',
  emailRequired: '请输入邮箱',
  checkMobile: '手机号格式不正确',
  mobileRequired: '请输入手机号'
};
const originZhDict = {
  common: {
    payPassword: {
      required: '请输入交易密码',
      checkPwd: common.checkSellPWd
    },
    password: {
      required: '密码不能为空',
      checkPwd: common.checkPWd
    },
    validateCode: {
      required: '请输入验证码',
      validateCode: '验证码必须是6位数字',
    },
    gaCode: {
      required: '请输入谷歌验证码',
      gaCode: '谷歌验证码必须是6位数字'
    },
    email: {
      required: '请输入您的邮箱',
      email: '邮箱格式不正确'
    },
    mobile: {
      required: '请输入手机号码',
      checkMobile: '手机号输入不正确'
    },
    geetest: {
      required: '点击按钮进行验证'
    }
  },
  // 注册表单
  regist: {
    username: {
      required: '请输入用户名',
      checkAccount: '用户名必须是6-12位的字母、数字、_的组合！',
    },
    password: {
      required: '密码不能为空',
      checkPwd: common.checkPWd
    },
    secondPassword: {
      required: '二次密码不能为空',
      checkRePwd: common.pwdNotEqual,
      is: common.pwdNotEqual,
    },
    inviteCode: {
      required: '邀请码不能为空',
      checkInviteCode: '邀请码输入不正确！'
    },
    countryCode: {
      required: '请选择您的国籍'
    },
    mobile: {
      required: common.mobileRequired,
      checkMobile: common.checkMobile
    }
  },
  // 登录表单
  login: {
    username: {
      required: '用户名不能为空',
      checkAccount: '用户名输入不正确！',
    },
    password: {
      required: '密码不能为空',
    }
  },
  // 忘记密码表单
  forgetPwd: {
    countryCode: {
      required: '请选择您的国籍'
    },
    password: {
      required: '请输入新密码',
      checkPWd: common.checkPWd
    },
    rePwd: {
      required: '请再次输入密码',
      is: common.pwdNotEqual
    }
  },
  // 锁仓投资表单
  investForm: {
    vip: {
      required: '请选择投资级别'
    },
    amount: {
      required: '请输入投资数量',
      decimal: '投资数量必须是一个正确的数字',
      min_value: '投资数量必须不能小于最小投资限额',
      max_value: '投资数量必须不能大于最大投资限额'
    },
    payPassword: {
      required: '请输入交易密码',
      checkPwd: common.checkSellPWd
    }
  },
  // 撤资表单
  disinvestmentForm: {
    payPassword: {
      required: '请输入交易密码',
      checkPwd: common.checkSellPWd
    }
  },
  // 转出表单
  transferOut: {
    form1: { // 表单1
      coinId: {
        required: '请选择币种'
      },
      address: {
        required: '请输入转账地址'
      },
      volume: {
        required: '请输入转出数量',
        min_value: '转出数量必须大于等于最小转出数量',
        max_value: '转出数量大于可转数量',
        decimal: '请输入正确的转出数量'
      }
    }
  },
  // 用户反馈表单
  suggest: {
    categoryId: {
      required: '请选择反馈类型'
    },
    content: {
      required: '请填写反馈内容'
    },
    realName: {
      required: '请填写真实姓名'
    },
    contact: {
      required: '请填写联系方式(手机号/邮箱)'
    }
  },
  // 设置交易密码表单
  sellPwdForm: {
    oldPassword: {
      required: '请输入旧交易密码'
    },
    rePassword: {
      required: '请再次输入密码',
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
      required: '请输入验证码',
      validateCode: '验证码必须是6位数字',
    },
    validateCode2: {
      required: '请输入验证码',
      validateCode: '验证码必须是6位数字',
    },
  },
  // 修改密码表单
  updatePwdForm: {
    oldPassword: {
      required: '请输入旧密码'
    },
    rePwd: {
      required: '请再次输入密码',
      is: common.pwdNotEqual
    }
  },
  // 添加地址表单
  addAddressForm: {
    coinId: {
      required: '请选择币种'
    },
    name: {
      required: '请输入地址名称'
    },
    address: {
      required: '请输入地址'
    }
  },
  // 预约投资表单
  reservationForm: {
    name: {
      required: '请输入期货名称'
    },
    volume: {
      required: '请输入投资金额',
      decimal: '投资金额最多2位小数',
      min_value: '投资金额不能小于最小投资金额',
      max_value: '余额不足'
    }
  },
  // 首页账户资产预约表单
  accountReservationForm: {
    name: {
      required: '请选择币种'
    },
    volume: {
      required: '请输入预约金额',
      decimal: '预约金额最多2位小数',
      //min_value: '投资金额不能小于最小投资金额',
      max_value: '余额不足'
    }
  }
};


export const zh_dictionary = flatDictMap_outer(originZhDict);
