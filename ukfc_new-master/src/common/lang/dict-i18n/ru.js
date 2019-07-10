export const ruRU = {
  /* 所有的下拉框及各种状态值都存放于此 */

  selectOption: {
    YesOrNo: {
      1: 'да',
      0: 'нет',
    },
    investWithdrawStatus: {
      1: 'выполнено',
      0: 'не выполнено',
    },
    investStatus: {
      1: 'срок не истек',
      2: 'tсрок истек',
    },
    rechargeRecordStatus: {
      0: 'ожид.',
      1: 'успешно',
      2: 'ошибка',
    },
    withdrawRecordStatus: {
      0: 'проверка',
      1: 'успешно',
      2: 'отказ',
      3: 'отмена',
      4: 'успешно',
      5: 'выведение',
      6: 'ошибка кошелька, проверка…',
    },
// 预约投资状态		статус бронир. инвест.
    reservationInvestStatus: {
      0: 'ожидание',
      1: 'успешно',
      2: 'не успешно',
      3: 'завершение'
    },
// 发送验证码方式对应的文字描述  текст способов верификации
    verifyTypeText: {
      email: 'верификация по эл.почте',
      mobile: 'верификация по ном.тел.',
      gaCode: 'верификация по гугл'
    },
// 星级		ур. звезд
    starLevel: {
      1: '1 зв.',
      2: '2 зв.',
      3: '3 зв.',
      4: '4 зв.',
      5: '5 зв.',
      6: '6 зв.',
      7: 'акционер'
    }
  },
  /* 通用翻译 */
  common: {
    login: 'войти',
    regist: 'рег.',
    logout: 'выход',
    forgetPwd: 'забыли пароль?',
    findPwd: 'восст. пароль',
    confirm: 'ок',
    cancel: 'отмена',
    submit: 'внести',
    warmPrompt: 'напомин.',
    errorPrompt: 'увед. об ошибке',
    operatePrompt: 'увед. об эксплуатации',
    aboutUs: 'о нас',
    transfer: 'зачисл.',
    transferOut: 'вычисл.',
    addressBook: 'адр.. книга',
    noData: 'временно нет данных',
    dataLoading: 'загрузка данных',
    yieldRate: 'коэффициент доходности',
    earning: 'доходы',
    search: 'поиск',
    earningDetail: 'детали доходов',
    rechargeRecord: 'ист. пополнения',
    withdrawRecord: 'ист. вывода средств',
    rechargeId: 'ном. опер.',
    coinId: 'валюта',
    rechargeVolume: 'кол. пополнений',
    status: 'статус',
    rechargeTime: 'время опер.',
    receiveAddress: 'адр. получ.',
    transferAddress: 'адр. отпр.',
    withdrawVolume: 'кол. выводов средств',
    fee: 'комиссия',
    all: 'все',
    summation: 'итого',
    authTime: 'время проверки',
    confirmCommit: 'подтв. внесение',
    validateCode: 'код подтв.',
    sellPwd: 'пароль опер.',
    confirmPwd: 'подтв. пароля',
    pwdRule: 'Пароль должен составлять 6-20 латинских букв, цифры и символы!',
    sellPwdRule: '',
    copy: 'коп.',
    copySuccess: 'скоп.!',
    gaCode: 'код подтв. гугл',
    mobileVerifyCode: 'код подтв. с моб. тел.',
    emailVerifyCode: 'код подтв. элпочты',
    sendVerifyCode: 'отпр. код подтв.',
    timeRemaining: '{time} сек. повт. отпр.',
    reSend: 'отпр. повт.',
    verifySendSuccess: 'код подтв. отправлен',
    operate: 'опер.',
    home: 'гл.стр.',
    remark: 'заметки',
    update: 'редакт.',
    delete: 'уд.',
    announcement: 'сист. увед.',
    close: 'закр.',
    readed: 'проч.',
    unRead: 'не проч.',
    checkAll: 'см.все',
    checkDetail: 'подроб.',
    optional: 'заполнить',
    choose: 'выбр.',
    cancelChoose: 'отмен. выб',
    more: 'более',
    nodeSettings: 'настр.точки',
    userName: 'лог.',
    mobile: 'ном.моб.тел.',
    email: 'эл. почта',
    toggleLang: 'поменять яз.',
    balance: 'баланс',
    person: ' перс.',
    invest: 'инвестиции',
    auditAssets: 'актив.провер.',
    waitAuditAssets: 'проверка актив.',
    goBack: 'возвращение'
  },
  /* placeholder 通用 */
  placeholder: {
    email: 'введ. адр. эл.почты',
    mobile: 'введ. ном. моб.тел.',
    validateCode: 'введ. код подтв.',
    selectCoin: 'выб. валюту',
    gaCode: 'введ. код подтв. гугл аккаунта',
    sellPwd: 'введ. пароль опер.'
  },
// 登录页面		стр. входа
  loginPage: {
    placeholder: {
      username: 'введ. лог.',
      password: 'введ. пароль'
    },
    loginNow: 'войти сейчас'
  },
// 注册页面		стр. рег.
  registPage: {
    registNow: 'рег.',
    goPrevStep: 'вернуться к пред. шагу',
    serviceClause: 'усл. обслуживания',
    privacyProtect: 'защита конф.',
    readedAndAccept: 'ознакомлен и принимаю усл.',
    usdProtocol: 'протокол USD польз.',
    ukfRegistProtocol: `Пользователь должен иметь понимания определенного риска в сфере инвестиций и вложений. Вся информация и данные, предоставленные платформой, находятся в пользовании для исключительно одного польз.. Платформа не несет никакой отвественности за необдуманные действия польз., а также не несет экономической и правовой отвественности.`,
    registSuccessTip: 'рег. успешна!',
    emailVerify: 'подтв.эл.почты',
    mobileVerify: 'подтв.ном.тел.',
    chooseCountry: 'выберите страну',
    placeholder: {
      username: 'введ. Ваш лог.',
      inviteCode: 'введ. ном. Вашего приглашения',
      password: 'введ. Ваш пароль',
      secondPassword: 'повт. введ. Ваш пароль',
      mobile: 'введ. ном. Вашего тел.',
      validateCode: 'введ. код подтв. из СМС-сообщ.'
    }
  },
// 忘记密码页面		стр. восст. пароля
  forgetPwdPage: {
    findByMobile: 'восст. с помощью моб.тел.',
    findByEmail: 'восст. с помощью эл.почты',
    findPwdNow: 'восст.',
    pwdFindedTip: 'пароль восстановлен, выполните вход!',
    chooseCountry: 'выберите страну',
    placeholder: {
      password: 'введ. нов. пароль',
      rePwd: 'повт. введ. нов. пароль'
    }
  },
// 钱包首页		стр. кошелька
  accountBalancePage: {
    account: 'средства польз.',
		notOpen: 'Еще не открыт',
    globalRevenueRank: 'всемирный рейтинг приб.',
    person: 'персона',
    globalTotalUser: 'польз. по всему миру',
    liveNews: 'новости сейчас',
    amountOfInvestment: 'сумма вложения',
    howToGetIncomes: 'как получить приб.?',
    investmentIncomeYesterday: 'приб. с инвестиций за вч. день',
    invitedEarningsYesterday: 'приб. приглашения за вч. день',
    contributionRevenueYesterday: 'внесенные приглашения за вч. день',
    reservation: 'брон.',
    myTeam: 'моя команда',
    totalNumberOfTeams: 'кол. человек в команде',
    levelOneMembers: 'кол. польз. первого уровня',
    levelTwoMembers: 'кол. польз. второго уровня',
    MemberOfMyDevelopment: 'развитые мною участники'
  },
// 我的资产页面   стр. моих средств
  assetsPage: {
    account: 'мои средства',
    checkAccountBill: 'просмотреть счет',
    rechargeWithdrawRecord: 'ист. транзакций',
    placeholder: {
      rechargeId: 'поиск по ном.опер.',
      futureName: 'введ. название будущей опер.',
      rewardTimeStart: 'время начала раздачи награды',
      rewardTimeEnd: 'время окончания раздачи награды',
      investOrderId: 'ID заказа вложений',
      investUserName: 'ФИО инвестора',
      investOrderIdSearch: 'поиск по ID заказа вложений',
      timeStart: 'выб. время начала',
      timeEnd: 'выб. время завершения'
    },
    texid: 'txid',
    blockNumber: 'ном. блока',
    investEarningDetail: 'детали вложений и приб.',
    inviteEarningDetail: 'детали приглашений приб.',
    contributionEarningDetail: 'детали внесенной приб.',
    rewardId: 'ном. дохода',
    rewardDate: 'дата дохода',
    rewardRate: 'ежедневная доходность',
    earning: 'доходы',
    investVolume: 'кол. вложений',
    investOrderId: 'ID заказа вложения',
    futureName: 'будущ. название',
    releaseTime: 'время выдачи',
    rewardLevel: 'ур. дохода',
    investUserName: 'лог. инвестора',
    staticEarningRate: 'статическая доходность',
    releaseDate: 'дата выдачи',
    userStarLevel: 'ур. звезд польз.',
  },
// 投资管理页面
  investManagementPage: {
    investManagement: 'управление вложениями',
    placeholder: {
      futureNameSelect: 'выб. будущ. название',
      dateStart: 'выб. время начала',
      dateEnd: 'выб. время завершения'
    },
    reservationId: 'ном. брон.',
    futureName: 'будущ. название',
    investAmount: 'инвестиционная сумма',
    reservationTime: 'время брон.',
  },
// 意见反馈页面		стр. обратной связи
  feedbackPage: {
    feedback: 'обратная связь',
    feedbackType: 'тип отзыва',
    feedbackContent: 'содержание отзыва',
    realName: 'действительное ФИО',
    contact: 'контактные данные',
    myMessageRecord: 'ист. сообщ.',
    commitTime: 'время подачи',
    replyTime: 'время ответа',
    noMessage: 'на данный момент нет сообщ.!',
    feedbackDataCommitSuccessTip: 'Ваш отзыв успешно подан, ожидайте ответа!',
    placeholder: {
      feedbackTypeSelect: 'выб. тип отзыва',
      feedbackContentFill: 'введ. содержание отзыва',
      realNameFill: 'введ. Ваше действительно ФИО',
      contactFill: 'введ. Ваши контактные данные'
    }
  },
// 安全设置页面	стр. настройки безопас.
  securitySettingPage: {
    securitySetting: 'настройка безопас.',
    lastLoginTime: 'время последнего входа',
    lastLoginIp: 'IP  адр. последнего входа',
    sellPwdSetting: 'настройка пароля опер.',
    gaCodeSetting: 'настройка гугл кода подтв.',
    emailSetting: 'настройка эл. почты',
  },
// 设置易密码页面	стр. настройки изменения пароля
  sellPwdPage: {
    oldSellPwd: 'старый пароль',
    newSellPwd: 'нов. пароль',
    updateSellPwdTip: 'Примите к сведению, что сделки будут ограничены в течении 24 часов после изменения пароля!',
    setSellPwd: 'настр. пароль для опер.',
    updateSellPwd: 'изм. пароль для опер.',
    setSellPwdSuccessTip: 'пароль для опер. успешно настроен!',
    resetSellPwdSuccessTip: 'Пароль транзакции успешно сброшен!',
    updateSellPwdSuccessTip: 'пароль для опер. успешно изменен!',
    forgetSellPwd: 'Забыли свой торговый пароль? Пожалуйста, нажмите',
    here: 'здесь',
    resetNow: 'Сбросить сейчас'
  },
// 设置交易密码页面		стр. настройки пароля для опер.
  setGaCodePage: {
    whatIsGaCode: ' Гугл инструмент для подтв. является активным надежным инструментом, принцип работы которого идентичен с кодом подтв. через СМС-сообщ.. После привязки аккаунта, в течение 30 секунд будет создан активный код подтв., с помощью которого можно будет производить опер. по выведению средств, входа, изменения настройки безопас. и другие действия, связанные с безопасным подтв.м.',
    stepText1: 'скачать приложение',
    stepText2: 'сканировать  QR-код',
    stepText3: 'создать гугл код подтв.',
    step1Operate: 'скачать и установить приложение гугл валидатор',
    iosDownApp: 'польз.м Apple необходимо ввести в поисковой строке «App Store» \'гугл валидатор’, затем начать скачивание.',
    androidDownApp: 'польз.м Android необходимо ввести в поисковой строке «Play Market» \'гугл валидатор’, затем начать скачивание.',
    afterSetup: 'после установки необходимо нажать на кнопку «след. шаг»',
    nextStep: 'след. шаг',
    prevSet: 'пред. шаг',
    ste2Operate: 'используйте гугл валидатор для того, чтобы сканировать код ниже',
    canNotScanTip: 'Если у Вас нет возможности сканировать QR-код, можно вручную ввести 16-значный ключ для входа в приложение гугл валидатор',
    secretKeyPurposeExplain: 'Ключ будет использоваться при замене мобильного устройства или при необходимости восст. аккаунт. Перед тем, как привязать, необходимо сохранить запасную копию ключа ниже.',
    enterDynamicCodeTip: 'Введ. созданный код подтв. в окно ниже',
    secretKey: 'ключ',
    deviceName: 'название устройства',
    confirmBind: 'завершить',
    gaCodeBindSuccessTip: 'Гугл валидатор успешно привязан!',
    secretKeyCopySuccessTip: 'Ключ скопирован!',
    checkGaCode: 'Просмотреть гугл код',
    confirm: 'подать'
  },
// 绑定邮箱页面		Стр. привязки эл.почты
  setEamilPage: {
    needBindEmail: 'Эл.почта для привязки',
    emailPurposeExplain: 'Вы можете использовать подтвержденную эл.почту для подтв. безопас.',
    updateEmailTip: 'Примите к сведению, что сделки будут ограничены в течении 24 часов после изменения эл.почты!',
    emailBindSuccessTip: 'Эл.почта успешно привязана!',
    hasBindedEmail: 'Ваша эл.почта уже привязана, она может быть использована для получения кода подтв.',
    currentEmail: 'действительная эл.почта'
  },
// 个人资料页面   Стр. личной инф.
  userInfoPage: {
    userInfo: 'инф. польз.',
    uploadAvatar: 'загрузить фото проф.',
    updateAvatar: 'изм. фото проф.',
    userName: 'имя польз.',
    nickName: 'лог.',
    updateNickName: 'изм. лог.',
    mobilePhone: 'ном. моб.тел.',
    emailAddrses: 'адр. эл.почты',
    hasNotBindEmail: 'Вы еще не привязали эл.почту',
    bindEmail: 'Привязать эл.почту',
    registTime: 'Время рег.',
    inviteCode: 'Мой ном. приглашения',
    nickNameRule: 'Лог. должен составлять 2-20 латинских букв, цифры и символы!',
    nickNameUpdateSuccessTip: 'Лог. успешно изменен!',
    avatarUploadSuccess: 'Фото проф. успешно загружено!',
    avatarUploadFaild: 'Не удалось загрузить фото проф.!',
  },
// 地址薄页面   Стр. адр.ной книги
  addressBookPage: {
    addresBook: 'Адр.ная книга',
    addAddress: 'Доб. адр.',
    updateAddress: 'Изм. адр.',
    name: 'Имя',
    address: 'Адр.',
    delAddressTip: 'После удаления адр.а его нельзя будет восст., Вы уверены?',
    sellPWdErrorTip: 'Неправильно введен пароль для опер.',
    delAddressSuccess: 'Адр. успешно удален!',
    updateAddressSuccess: 'Адр. успешно изменен!',
    chooseAddress: 'Выбрать адр.'
  },
// 消息中心页面  Стр. сообщ.
  messagesPage: {
    title: 'Центр сообщ.',
    setReaded: 'Отметить как прочитанное'
  },
// 关于我们页面	Стр. о нас
  aboutUsPage: {
    bannerText2: 'Система управления опер. с электронной валютой',
    supervise: 'FCA мощнее всего осуществляет контроль по соблюдению противодействия отмыванию денег/ противодействию в сфере легализации',
    ukfGroup: `<p>
                UFK GROUP Система управления операциями с электронной валютой является платформой для осуществления финансовых опер. с интернет валютой и цифровой валютой, созданная господином Ричардом Холоувей, совместно с компанией Coin Shares.
              </p>
              <br>
              <p>
		Головной офис компания UKF GROUP размещается в Англии, городе Лондон. Капитал компании достигает 50млн английских футов стерлингов. Также компания имеет 10 функционирующих центров и отделений по всему миру, а также привлекла около тысячи профессиональных дилеров со всего мира и более сотни аналитиков наивысшего уровня, с огромным опытом работы в инвестиционных банках.
              </p>`,
    coinShares: `<p> CoinShares является первым в мире:</p> 
              <p>управляемый фонд хэджирования биткоин валюты (GABI), векселей опер. биткоин биржи (COINXBT и COINXBE)</p>  
              <p> Фонд（CS Fund 1), номинированный векселем биржи Etherium (COINETH и COINETHE), а также ehtercoin.</p> 
              <p>
                Являясь управляемой компанией в сфере финансов криптовалюты с высокой скоростью развития и капиталов более 1млрд долларов, Coin Shares является ведущей компанией в области блокчейн и развития криптовалюты в финансовом поле.
              </p>`,
    mission: 'Миссия',
    missionContent: `<p>UKF GROUP всеми силами с помощью высококвалифицированной технической команды предоставит инвестиционным клиентам</p> 

          <p>Удобную, быструю и наименее затратную услугу контроля средств, заметное повышение уровня функционирования и успешность финансовых опер., запуск процесса получения еще большей финансовой приб..</p>`,
    valueConceptValue1: `<li>1.пользователь первый </li> 
            <li>2. преданность работе</li>	
            <li>3.достижение целей</li>`,
    valueConceptValue2: `<li>4.конструктивный оптимизм </li>   
            <li>5.шаг впер.</li>  
            <li>6.шаг наз.</li>`,
    valueConceptText: 'система ценностей',
    valueConceptExplain: `Нашей первостепенной задачей является следовать всем необходимым для польз. требованиям и усл.м. Мы не останавливаемся на достигнутом и с энергией, успехом и всеми силами делаем каждое задание до самой крайней степени успеха. Мы считаем, что только с активным и позитивным настроем и взаимопомощью возможно сделать работу по высшему уровню, и в будущем получать более длительную и высокую обратную приб.. В UKF GROUP, мы каждый день создаем уникальную ценность.`
  },
// 添加地址弹窗   Всплывающее окно добавления адр.а
  addAddressModal: {
    title: 'Доб. нов. адр.',
    name: 'Имя',
    address: 'Подробный адр.',
    addressAddSuccess: 'Адр. успешно добавлен!',
  },
// 切换验证方式组件   Модуль замены способа подтв.
  changeVerifyTypeCom: {
    toggle: 'Изм. способ подтв.',
    canNotToggle: 'Невозможно изм.',
    justBindOne: 'На данный момент Вы привязали лишь один способ подтв., невозможно поменять',
    notBindAny: 'Вы не связаны ни с каким методом проверки и не можете отправить код подтверждения'
  },
// 头部组件  Компоненты шапки
  headerCom: {
    assets: 'средства',
    investment: 'управление средствами',
    customerService: 'клиентское обслуживание',
    helpCenter: 'центр поддержки',
    legallyRelevant: 'касательно закона и права',
    unReadMsg: 'непроч. сообщ.',
    securitySettings: 'настройки безопас.',
    myProfile: 'мой профиль',
    updatePwd: 'изм. пароль'
  },
// 节点设置弹窗	точка настройки всплывающего окна
  nodeSettingModal: {
    setNodeCaption: 'настр. точку ведения',
    currentNode: 'имющаяся точка ведения',
    inviteCodeRequired: 'введ. ном. приглашения точки ведения',
    nodeSetSuccess: 'настройка успешна!',
    placeholder: {
      inviteCode: 'введ. ном. приглашения партнера'
    }
  },
// 转入弹窗  всплывающее окно получения
  transferModal: {
    transferAddress: 'адр. получения',
    transferAddressCaption: 'Внесите Ваши USDT на адр. ниже',
    transferAddressAttention: 'Внимание: данный адр. может принимать только USDT, при внесении на другие адр.а будет невозможно вернуть.',
    addressTip: 'Данный адр. уже привязан к Вашему аккаунту, можно использовать снова.',
    copyAddress: 'Скопировать адр.',
    addressCopySuccess: 'Адр. транзакций скопирован!'
  },
// 转出弹窗  Всплывающее окно перечисл.
  transferOutModal: {
    assetsTransferOut: 'Перечисл. средств',
    transferOutCoin: 'Валюта для перечисл.',
    oppositeAddress: 'Адр. принимающей стороны',
    checkAddressBook: 'Посмотреть в адр.ной книге',
    transferOutVolume: 'Кол. перечисл.',
    transferVolumeRuleText1: 'Мин. кол. перечисл.',
    transferVolumeRuleText2: 'Кол. перечисл. должно быть',
    transferVolumeRuleText3: 'кратно',
    actualGetted: 'факт. приб.',
    allTransferOut: 'перечисл. все',
    waitText1: 'Вам необходимо еще подождать',
    waitText2: 'Гений сможет перечисл.!',
    confirmTransferOut: 'Подтв. перечисл.',
    securityCheck: 'Подтв. безопас.',
    transferOutSuccess: 'Перечисл. успешно',
    remitteeAddress: 'Адр. получения средств',
    saveToAddressBook: 'Сохр. в адр.ную книгу',
    remarkContent: 'Доп. инф.',
    iKnow: 'Я знаю',
    placeholder: {
      transferOutCoinSelect: 'Выб. валюту перечисл.',
      oppositeAddressFill: 'Введ. адр. перечисл.',
      transferVolumeFill: 'Введ. кол. перечисл.',
      remarkFill: 'Введ. доп. инф.',
    }
  },
// 修改登录密码弹窗	Всплывающее окно редактирования пароля для входа
  updatePwdModal: {
    title: 'Изм. пароль для входа',
    oldPassword: 'Старый пароль',
    newPassword: 'Нов. пароль',
    updatePwdSuccess: 'Пароль для входа успешно изменен!',
  },
// 会员详情弹窗  Всплывающее окно деталей польз.
  membersDetailModal: {
    membersDetail: 'Детали польз.',
    investAmount: 'Сумма вложений',
    registTime: 'Время рег.',
    hisMembers: 'Развитые им пользователи',
    level: 'Ур.',
  },
// 预约投资弹窗		Всплывающее окно брон. инвест.
  reservationModal: {
    reservationInvest: 'Брон. инвест.',
    futureName: 'Будущ. название',
    investAmount: 'Сумма инвест.',
    minInvestAmount: 'Мин. сумма вложения',
    reservationNow: 'Брон.',
    reservationSuccess: 'Успешно брон.!',
  },
  // 投资弹窗
  investModal: {
    reservationInvest: 'влож.',
    futureName: 'буд.назван.',
    investAmount: 'сумма влож.',
    minInvestAmount: 'мин.сумма влож.',
    reservationNow: 'вложить',
    reservationSuccess: 'влож.успешно!',
  },
  // 首页账户资产预约弹窗
  accountReservationModal: {
    reservationInvest: 'брон.',
    coinName: 'валюты',
    reservationAmount: 'Назначение суммы',
    futureName: 'буд.назван.',
    investAmount: 'сумма влож.',
    minInvestAmount: 'мин.сумма влож.',
    reservationNow: 'заброн.',
    reservationSuccess: 'брон.успешно!',
  },
// 公告详情弹窗		Всплывающее окно подр. оповещения
  announcementDetailModal: {
    title: 'Подр. оповещения'
  }
};
