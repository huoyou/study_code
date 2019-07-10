import {flatDictMap_outer} from "../flatVeeDictMap";

let common = {
  checkPWd: 'Password must contain 6-20 digits and be a combination of letters, numbers and _!',
  checkSellPWd: 'Transaction password must contain 6-20 digits and be a combination of letters, numbers and _',
  pwdNotEqual: 'The two passwords you typed do not match!',
  checkEmail: 'The format of the email address is incorrect',
  emailRequired: 'Please input an email address ',
  checkMobile: 'The format of the mobile number is incorrect',
  mobileRequired: 'Please input a mobile number '
};
const originEnDict = {
  common: {
    payPassword: {
      required: 'Please input a transaction password',
      checkPwd: common.checkSellPWd
    },
    password: {
      required: 'Password cannot be empty ',
      checkPwd: common.checkPWd
    },
    validateCode: {
      required: 'Please input the validate code',
      validateCode: 'Validate code must contain 6 numbers',
    },
    gaCode: {
      required: 'Please input the Google authentication code',
      gaCode: 'Google authentication code must contain 6 numbers '
    },
    email: {
      required: 'Please input your email address',
      email: 'The format of the email address is incorrect'
    },
    mobile: {
      required: 'Please input a mobile number',
      checkMobile: 'The mobile number input is incorrect'
    },
    geetest: {
      required: 'Click the button to verify'
    }
  },
  // 注册表单
  regist: {
    username: {
      required: 'Please input a username',
      checkAccount: 'Username must contain 6-12 digits and be a combination of letters, numbers and _!',
    },
    password: {
      required: 'Password cannot be empty',
      checkPwd: common.checkPWd
    },
    secondPassword: {
      required: 'Second password cannot be empty',
      checkRePwd: common.pwdNotEqual,
      is: common.pwdNotEqual,
    },
    inviteCode: {
      required: 'Invite code cannot be empty',
      checkInviteCode: 'The invite code input is incorrect!'
    },
    countryCode: {
      required: 'Please select your nationality'
    },
    mobile: {
      required: common.mobileRequired,
      checkMobile: common.checkMobile
    }
  },
  // 登录表单
  login: {
    username: {
      required: 'Username cannot be empty',
      checkAccount: 'The username input is incorrect!',
    },
    password: {
      required: 'Password cannot be empty',
    }
  },
  // 忘记密码表单
  forgetPwd: {
    countryCode: {
      required: 'Please select your nationality'
    },
    password: {
      required: 'Please input a new password',
      checkPWd: common.checkPWd
    },
    rePwd: {
      required: 'Please input the password again',
      is: common.pwdNotEqual
    }
  },
  // 锁仓投资表单
  investForm: {
    vip: {
      required: 'Please select an investment grade'
    },
    amount: {
      required: 'Please input the investment amount',
      decimal: 'Investment amount must be a correct number',
      min_value: 'Investment amount must not be less than the lower limit of investment',
      max_value: 'Investment amount must not be greater than the upper limit of investment'
    },
    payPassword: {
      required: 'Please input the transaction password',
      checkPwd: common.checkSellPWd
    }
  },
  // 撤资表单
  disinvestmentForm: {
    payPassword: {
      required: 'Please input the transaction password',
      checkPwd: common.checkSellPWd
    }
  },
  // 转出表单
  transferOut: {
    form1: { // Form 1
      coinId: {
        required: 'Please select a coin ID'
      },
      address: {
        required: 'Please input the transfer address'
      },
      volume: {
        required: 'Please input the transfer-out volume',
        min_value: 'Transfer-out volume must be greater than or equal to the lower limit of transfer-out volume',
        max_value: 'The transfer-out volume is greater than the volume that can be transferred out ',
        decimal: 'Please input a correct transfer-out volume'
      }
    }
  },
  // 用户反馈表单
  suggest: {
    categoryId: {
      required: 'Please select a feedback type'
    },
    content: {
      required: 'Please fill in the feedback content'
    },
    realName: {
      required: 'Please fill in the true name'
    },
    contact: {
      required: 'Please fill in the contact information (mobile number/email address)'
    }
  },
  // 设置交易密码表单
  sellPwdForm: {
    oldPassword: {
      required: 'Please input the old transaction password'
    },
    rePassword: {
      required: 'Please input the password again',
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
      required: 'Please input the validate code',
      validateCode: 'Validate code must contain 6 numbers',
    },
    validateCode2: {
      required: 'Please input the validate code',
      validateCode: 'Validate code must contain 6 numbers',
    },
  },
  // 修改密码表单
  updatePwdForm: {
    oldPassword: {
      required: 'Please input the old password'
    },
    rePwd: {
      required: 'Please input the password again',
      is: common.pwdNotEqual
    }
  },
  // 添加地址表单
  addAddressForm: {
    coinId: {
      required: 'Please select a coin ID'
    },
    name: {
      required: 'Please input the address name'
    },
    address: {
      required: 'Please input an address'
    }
  },
  // 预约投资表单
  reservationForm: {
    name: {
      required: 'Please input the name of futures'
    },
    volume: {
      required: 'Please input the investment amount',
      decimal: 'Investment amount must be rounded to the nearest tenth or hundredth',
      min_value: 'Investment amount must not be less than the lower limit of investment amount',
      max_value: 'Balance is insufficient'
    }
  }
};

export const
  en_dictionary = flatDictMap_outer(originEnDict);
