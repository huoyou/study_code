import {flatDictMap_outer} from "../flatVeeDictMap";

let common = {
  checkPWd: 'Пароль должен составлять 6-20 латинских букв, цифры и символы!',
  checkSellPWd: 'Пароль для опер. должен составлять 6-20 латинских букв, цифры и символы!',
  pwdNotEqual: 'Пароль, введенный два раза не совп.!',
  checkEmail: 'Невер. формат эл.почты',
  emailRequired: 'Введите эл.почту',
  checkMobile: 'Невер. формат ном.тел.',
  mobileRequired: 'Введите ном.моб.тел.'
};
const originZhDict = {
  common: {
    payPassword: {
      required: 'Введите пароль для опер.',
      checkPwd: common.checkSellPWd
    },
    password: {
      required: 'Поле пароля не должно быть пустым',
      checkPwd: common.checkPWd
    },
    validateCode: {
      required: 'Введите код подтв.',
      validateCode: 'Код подтв. должен составлять 6 цифр',
    },
    gaCode: {
      required: 'Введите гугл код подтв.',
      gaCode: 'Код подтв. гугл должен составлять 6 цифр'
    },
    email: {
      required: 'Введите эл.почту',
      email: 'Невер. формат эл.почты'
    },
    mobile: {
      required: 'Введите ном.моб.тел.',
      checkMobile: 'Невер. формат ном.тел.',
    }
  },
// 注册表单  Форма рег.
  regist: {
    username: {
      required: 'Введите им.польз.',
      checkAccount: 'Им.польз.  должно составлять 6-12 латинских букв, цифры и символы!',
    },
    password: {
      required: 'Поле пароля не должно быть пустым',
      checkPwd: common.checkPWd
    },
    secondPassword: {
      required: 'Поле повт. ввода пароля не должно быть пустым',
      checkRePwd: common.pwdNotEqual,
      is: common.pwdNotEqual,
    },
    inviteCode: {
      required: 'Поле номера приглашения не должно быть пустым',
      checkInviteCode: 'Неверно введенный номер приглашения!'
    },
    countryCode: {
      required: 'Выберите свое гражданство'
    },
    mobile: {
      required: common.mobileRequired,
      checkMobile: common.checkMobile
    }
  },
// 登录表单		Форма входа
  login: {
    username: {
      required: 'Поле имени польз. не должно быть пустым',
      checkAccount: 'Неверное им.польз.!',
    },
    password: {
      required: 'Поле пароля не должно быть пустым',
    }
  },
// 忘记密码表单	Форма восст. пароля
  forgetPwd: {
    countryCode: {
      required: 'свое гражданство',
    },
    password: {
      required: 'Введите нов. пароль',
      checkPWd: common.checkPWd
    },
    rePwd: {
      required: 'Повт. введите нов. пароль',
      is: common.pwdNotEqual
    }
  },
// 锁仓投资表单	Форма инвест.
  investForm: {
    vip: {
      required: 'Выберите тип инвест.'
    },
    amount: {
      required: 'Выберите кол. вложения',
      decimal: 'Кол. вложения должно быть введено корректно',
      min_value: 'Кол. вложения не должно быть меньше мин. кол-ва вложения',
      max_value: 'Кол. вложения не должно быть больше макс. кол-ва вложения',
    },
    payPassword: {
      required: 'Введите пароль для опер.',
      checkPwd: common.checkSellPWd
    }
  },
// 撤资表单  Форма отзыва средств
  disinvestmentForm: {
    payPassword: {
      required: 'Введите пароль для опер.',
      checkPwd: common.checkSellPWd
    }
  },
// 转出表单  Форма транзакций
  transferOut: {
    form1: { // 表单1  Форма 1
      coinId: {
        required: 'Выберите валюту'
      },
      address: {
        required: 'Выберите адр. транзакции'
      },
      volume: {
        required: 'Введите кол. перечисл.',
        min_value: 'Кол. перечисл. должно быть более или равно минимальному кол-ву перечисл.',
        max_value: 'Кол. перечисл. превышает макс.',
        decimal: 'Введите корректное кол. перечисл.'
      }
    }
  },
// 用户反馈表单  Форма отзыва польз.
  suggest: {
    categoryId: {
      required: 'Выберите тип отзыва'
    },
    content: {
      required: 'Введите содерж. польз.'
    },
    realName: {
      required: 'Введите действ. ФИО'
    },
    contact: {
      required: 'Введите конт.дан. (ном.моб.тел./эл.почта)'
    }
  },
// 设置交易密码表单  Форма настр. пароля для опер.
  sellPwdForm: {
    oldPassword: {
      required: 'Введите старый пароль для опер.'
    },
    rePassword: {
      required: 'Повт. введите пароль',
      is: common.pwdNotEqual
    }
  },
// 绑定邮箱表单  Форма привязки эл.почты
  bindEmailForm: {
    email: {
      required: common.emailRequired,
      email: common.checkEmail
    },
    validateCode1: {
      required: 'Введите код подтв.',
      validateCode: 'Код подтв. должен составлять 6 цифр'
    },
    validateCode2: {
      required: 'Введите код подтв.',
      validateCode: 'Код подтв. должен составлять 6 цифр'
    },
  },
// 修改密码表单  Форма изменения пароля
  updatePwdForm: {
    oldPassword: {
      required: 'Введите старый пароль'
    },
    rePwd: {
      required: 'Повт. введите пароль',
      is: common.pwdNotEqual
    }
  },
// 添加地址表单  Форма доб. адр.
  addAddressForm: {
    coinId: {
      required: 'Выберите валюту'
    },
    name: {
      required: 'Введите название адр.'
    },
    address: {
      required: 'Введите адр.'
    }
  },
// 预约投资表单  Форма брон. вложения
  reservationForm: {
    name: {
      required: 'Введите будущее название'
    },
    volume: {
      required: 'Введите сумму вложения',
      decimal: 'Необходимо, чтобы в сумме вложения было не больше 2 долей единицы',
      min_value: 'Сумма вложения не должна быть  меньше минимальной суммы вложения',
      max_value: 'Недост. средств'
    }
  }
};


export const zh_dictionary = flatDictMap_outer(originZhDict);
