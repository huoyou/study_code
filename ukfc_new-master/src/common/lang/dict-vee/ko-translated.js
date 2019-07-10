import {flatDictMap_outer} from "../flatVeeDictMap";
let common = {
  checkPWd: '비밀번호는 반드시 6-20자리수의 자모、숫자、_의 임의 조합이여야 합니다！',
  checkSellPWd: '거래비밀번호는 반드시 6-20자리수의 자모、숫자、_의 임의 조합이여야 합니다',
  pwdNotEqual: '두번 입력한 비밀번호가 일치하지 않습니다！',
  checkEmail: '메일양식이 정확하지 않습니다',
  emailRequired: '메일을 입력하여 주세요',
  checkMobile: '휴대폰번호 양식이 정확하지 않습니다',
  mobileRequired: '휴대폰번호를 입력하여 주세요'
};
const originZhDict = {
  common: {
    payPassword: {
      required: '거래 비밀번호를 입력하여 주세요',
      checkPwd: common.checkSellPWd
    },
    password: {
      required: '비밀번호는 빈공간이 될수 없습니다',
      checkPwd: common.checkPWd
    },
    validateCode: {
      required: '인증번호를 입력하여 주세요',
      validateCode: '인증번호는 반드시 6자리 숫자여야 합니다',
    },
    gaCode: {
      required: '구글 인증번호를 입력하여 주세요',
      gaCode: '구글인증번호는 반드시 6자리 숫자여야 합니다'
    },
    email: {
      required: '귀하의 메일을 입력하여 주세요',
      email: '메일양식이 정확하지 않습니다'
    },
    mobile: {
      required: '휴대폰번호를 입력하여 주세요',
      checkMobile: '휴대폰번호 입력이 정확하지 않습니다'
    }
  },
  // 등록 리스트
  regist: {
    username: {
      required: '사용자이름을 입력하여 주세요',
      checkAccount: '사용자이름은 반드시 6-12자리수의 자모、 숫자、_의 조합이여야 합니다！',
    },
    password: {
      required: '비밀번호는 빈공간이 될수 없습니다',
      checkPwd: common.checkPWd
    },
    secondPassword: {
      required: '2차 비밀번호는 빈공간이 될수 없습니다',
      checkRePwd: common.pwdNotEqual,
      is: common.pwdNotEqual,
    },
    inviteCode: {
      required: '요청 코드는 빈공간이 될수 없습니다',
      checkInviteCode: '요청코드 입력이 정확하지 않습니다！'
    },
    countryCode: {
      required: '귀하의 국적을 선택하여 주세요'
    },
    mobile: {
      required: common.mobileRequired,
      checkMobile: common.checkMobile
    }
  },
  // 등록 리스트
  login: {
    username: {
      required: '사용자이름은 빈공간으로 할수 없습니다',
      checkAccount: '사용자이름 입력은 정확하지 않습니다！',
    },
    password: {
      required: '비밀번호는 빈공간으로 할수 없습니다',
    }
  },
  // 비밀번호 리스트 잊음
  forgetPwd: {
    countryCode: {
      required: '귀하의 국적을 선택하여 주세요'
    },
    password: {
      required: '새로운 비밀번호를 입력하여 주세요',
      checkPWd: common.checkPWd
    },
    rePwd: {
      required: '비밀번호를 다시 입력하여 주세요',
      is: common.pwdNotEqual
    }
  },
  // 고정포지션 투자 리스트
  investForm: {
    vip: {
      required: '투자등급을 선택하여 주세요'
    },
    amount: {
      required: '투자수량을 입력하여 주세요',
      decimal: '투자수량은 반드시 정확한 숫자여야 합니다',
      min_value: '투자수량은 반드시 최소투자한도보다 작아서는 안됩니다',
      max_value: '투자수량은 반드시 최대투자한도보다 커서는 안됩니다.'
    },
    payPassword: {
      required: '거래비밀번호를 입력하여 주세요',
      checkPwd: common.checkSellPWd
    }
  },
  // 자금회수 리스트
  disinvestmentForm: {
    payPassword: {
      required: '비밀번호를 입력하여 주세요',
      checkPwd: common.checkSellPWd
    }
  },
  // 이체 리스트
  transferOut: {
    form1: { // 리스트1
      coinId: {
        required: '화폐종류를 선택하여 주세요'
      },
      address: {
        required: '계좌이체 주소를 입력하여 주세요'
      },
      volume: {
        required: '이체수량을 입력하여 주세요',
        min_value: '이체수량은 반드시 최소 이체수량보다 크거나 같아야 합니다',
        max_value: '이체수량은 이체가능한 수량보다 큽니다.',
        decimal: '정확한 이체수량을 입력하여 주세요'
      }
    }
  },
  // 사용자 피드백 리스트
  suggest: {
    categoryId: {
      required: '피드백유형을 선택하여 주세요'
    },
    content: {
      required: '피드백 내역을 기입하여 주세요'
    },
    realName: {
      required: '실제 본명을 기입하여 주세요'
    },
    contact: {
      required: '연락방식을 기입하여 주세요(휴대폰 번호/메일)'
    }
  },
  // 거래 비밀번호 리스트 설정
  sellPwdForm: {
    oldPassword: {
      required: '기존 거래비밀번호를 입력하여 주세요'
    },
    rePassword: {
      required: '비밀번호를 다시 입력하여 주세요',
      is: common.pwdNotEqual
    }
  },
  // 바인드 메일 리스트
  bindEmailForm: {
    email: {
      required: common.emailRequired,
      email: common.checkEmail
    },
    validateCode1: {
      required: '인증번호를 입력하여 주세요',
      validateCode: '인증번호는 반드시 6자리 숫자여야 합니다',
    },
    validateCode2: {
      required: '인증번호를 입력하여 주세요',
      validateCode: '인증번호는 반드시 6자리 숫자여야 합니다',
    },
  },
  // 비밀번호 수정 리스트
  updatePwdForm: {
    oldPassword: {
      required: '원래 비밀번호를 입력하여 주세요'
    },
    rePwd: {
      required: '비밀버호를 다시 입력하여 주세요',
      is: common.pwdNotEqual
    }
  },
  // 추가 주소 리스트
  addAddressForm: {
    coinId: {
      required: '화페 종류를 선택하여 주세요'
    },
    name: {
      required: '주소이름을 입력하여 주세요'
    },
    address: {
      required: '주소를 입력하여 주세요'
    }
  },
  // 투자예약 리스트
  reservationForm: {
    name: {
      required: '선물 명칭을 입력하여 주세요'
    },
    volume: {
      required: '투자금액을 입력하여 주세요',
      decimal: '투자금액은 최대 2자리 소수입니다',
      min_value: '투자금액은 최소투자금액보다 작아서는 안됩니다',
      max_value: '잔액부족'
    }
  }
};


export const zh_dictionary = flatDictMap_outer(originZhDict);
