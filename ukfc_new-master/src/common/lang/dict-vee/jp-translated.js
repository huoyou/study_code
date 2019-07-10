import {flatDictMap_outer} from "../flatVeeDictMap";
let common = {
  checkPWd: 'パスワードは6-20桁の英数字の組み合わせである必要があります！',
  checkSellPWd: '取引パスワードは6-20桁の英数字の組み合わせである必要があります',
  pwdNotEqual: '2回入力されたパスワードが不一致です！',
  checkEmail: 'メールアドレスのフォーマットが正しくありません',
  emailRequired: 'メールアドレスを入力してください',
  checkMobile: '携帯電話番号のフォーマットが正しくありません',
  mobileRequired: '携帯電話番号を入力してください'
};
const originZhDict = {
  common: {
    payPassword: {
      required: '取引パスワードを入力してください',
      checkPwd: common.checkSellPWd
    },
    password: {
      required: 'パスワードは空にできません',
      checkPwd: common.checkPWd
    },
    validateCode: {
      required: '検証コードを入力してください',
      validateCode: '検証コードは6桁の数字でなければなりません',
    },
    gaCode: {
      required: 'Google検証コードを入力してください',
      gaCode: 'Google検証コードは6桁の数字でなければなりません'
    },
    email: {
      required: 'メールアドレスを入力してください',
      email: 'メールアドレスのフォーマットが正しくありません'
    },
    mobile: {
      required: '携帯電話番号を入力してください',
      checkMobile: '携帯電話番号が正しく入力されていません'
    }
  },
  // 登録フォーム
  regist: {
    username: {
      required: 'ユーザー名を入力してください',
      checkAccount: 'ユーザー名は6-12桁の英数字の組み合わせである必要があります！',
    },
    password: {
      required: 'パスワードは空にできません',
      checkPwd: common.checkPWd
    },
    secondPassword: {
      required: '二つのパスワードは空にできません',
      checkRePwd: common.pwdNotEqual,
      is: common.pwdNotEqual,
    },
    inviteCode: {
      required: '招待コードは空にできません',
      checkInviteCode: '招待コードが間違って入力されました！'
    },
    countryCode: {
      required: '国籍を選択してください'
    },
    mobile: {
      required: common.mobileRequired,
      checkMobile: common.checkMobile
    }
  },
  // ログインフォーム
  login: {
    username: {
      required: 'ユーザー名は空にできません',
      checkAccount: 'ユーザー名が間違って入力されました！',
    },
    password: {
      required: 'パスワードは空にできません',
    }
  },
  // パスワードを忘れたフォーム
  forgetPwd: {
    countryCode: {
      required: '国籍を選択してください'
    },
    password: {
      required: '新しいパスワードを入力してください',
      checkPWd: common.checkPWd
    },
    rePwd: {
      required: 'パスワードを再入力してください',
      is: common.pwdNotEqual
    }
  },
  // ロックアップ投資フォーム
  investForm: {
    vip: {
      required: '投資レベルを選択してください'
    },
    amount: {
      required: '投資数を入力してください',
      decimal: '投資数は正しい数でなければなりません',
      min_value: '投資数は最小投資限度を下回ってはいけません',
      max_value: '投資数は最大投資限度を超えてはいけません'
    },
    payPassword: {
      required: '取引パスワードを入力してください',
      checkPwd: common.checkSellPWd
    }
  },
  // 投資資金引き揚げフォーム
  disinvestmentForm: {
    payPassword: {
      required: '取引パスワードを入力してください',
      checkPwd: common.checkSellPWd
    }
  },
  // 転出フォーム
  transferOut: {
    form1: { // フォーム1
      coinId: {
        required: '通貨を選択してください'
      },
      address: {
        required: '振替先を入力してください'
      },
      volume: {
        required: '転出数を入力してください',
        min_value: '転出数は最小転出数以上でなければなりません',
        max_value: '転出数は譲渡可能な数を超えます',
        decimal: '正しい転出数を入力してください'
      }
    }
  },
  // ユーザーフィードバックフォーム
  suggest: {
    categoryId: {
      required: 'フィードバックタイプを選択してください'
    },
    content: {
      required: 'フィードバック内容を記入してください'
    },
    realName: {
      required: '本名を記入してください'
    },
    contact: {
      required: '連絡先(携帯電話番号/メールアドレスを記入してください)'
    }
  },
  //取引パスワード設定フォーム
  sellPwdForm: {
    oldPassword: {
      required: '古い取引パスワードを入力してください'
    },
    rePassword: {
      required: 'もう一度パスワードを入力してください',
      is: common.pwdNotEqual
    }
  },
  //メールアドレスバインドフォーム
  bindEmailForm: {
    email: {
      required: common.emailRequired,
      email: common.checkEmail
    },
    validateCode1: {
      required: '検証コードを入力してください',
      validateCode: '検証コードは6桁の数字でなければなりません',
    },
    validateCode2: {
      required: '検証コードを入力してください',
      validateCode: '検証コードは6桁の数字でなければなりません',
    },
  },
  //パスワード変更フォーム
  updatePwdForm: {
    oldPassword: {
      required: '古いパスワードを入力してください'
    },
    rePwd: {
      required: 'もう一度パスワードを入力してください',
      is: common.pwdNotEqual
    }
  },
  //アドレス追加フォーム
  addAddressForm: {
    coinId: {
      required: '通貨を選択してください'
    },
    name: {
      required: '住所名を入力してください'
    },
    address: {
      required: '住所を入力してください'
    }
  },
  // 予約投資フォーム
  reservationForm: {
    name: {
      required: '先物名を入力してください'
    },
    volume: {
      required: '投資金額を入力してください',
      decimal: '投資金額は小数点以下2桁までです',
      min_value: '投資金額は最小投資金額より小さくなることはできません',
      max_value: '残高不足'
    }
  }
};


export const zh_dictionary = flatDictMap_outer(originZhDict);

