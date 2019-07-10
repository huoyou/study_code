const zhTW = {
  /* 所有的下拉框及各种状态值都存放于此 */
  selectOption: {
    YesOrNo: {
      1: '是',
      0: '否',
    },
    investWithdrawStatus: {
      1: '已提現',
      0: '未提現',
    },
    investStatus: {
      1: '未到期',
      2: '已到期',
    },
    rechargeRecordStatus: {
      0: '待確認',
      1: '成功',
      2: '失敗',
    },
    withdrawRecordStatus: {
      0: '審核中',
      1: '成功',
      2: '拒絕',
      3: '撤銷',
      4: '審核通過',
      5: '打幣中',
      6: '錢包異常，審核中',
    },
    // 预约投资状态
    reservationInvestStatus: {
      0: '待審核',
      1: '審核通過',
      2: '審核拒絕',
      3: '已結束'
    },
    // 发送验证码方式对应的文字描述
    verifyTypeText: {
      email: '郵箱驗證碼',
      mobile: '手機驗證碼',
      gaCode: '谷歌驗證碼'
    },
    // 星级
    starLevel: {
      1: '一星',
      2: '二星',
      3: '三星',
      4: '四星',
      5: '五星',
      6: '六星',
      7: '股東'
    }
  },
  /* 通用翻译 */
  common: {
    login: '登錄',
    regist: '註冊',
    logout: '退出',
    forgetPwd: '忘記密碼',
    findPwd: '找回密碼',
    confirm: '確定',
    cancel: '取消',
    submit: '提交',
    warmPrompt: '溫馨提示',
    errorPrompt: '錯誤提示',
    operatePrompt: '操作提示',
    aboutUs: '關於我們',
    transfer: '轉入',
    transferOut: '轉出',
    addressBook: '地址薄',
    noData: '暫無數據~',
    dataLoading: '數據加載中...',
    yieldRate: '收益率',
    earning: '收益',
    search: '搜索',
    earningDetail: '收益明細',
    rechargeRecord: '充值記錄',
    withdrawRecord: '提現記錄',
    rechargeId: '交易編號',
    coinId: '幣種',
    rechargeVolume: '充值數量',
    status: '狀態',
    rechargeTime: '交易時間',
    receiveAddress: '入賬地址',
    transferAddress: '出賬地址',
    withdrawVolume: '提現數量',
    fee: '手續費',
    all: '全部',
    summation: '合計',
    authTime: '審核時間',
    confirmCommit: '確定提交',
    validateCode: '驗證碼',
    sellPwd: '交易密碼',
    confirmPwd: '確認密碼',
    pwdRule: '密碼必須為6-20位字母、數字、_的任意組合！ ',
    sellPwdRule: '',
    copy: '複製',
    copySuccess: '複製成功！ ',
    gaCode: '谷歌驗證碼',
    mobileVerifyCode: '手機驗證碼',
    emailVerifyCode: '郵箱驗證碼',
    sendVerifyCode: '發送驗證碼',
    timeRemaining: '{time}秒後重發',
    reSend: '重新發送',
    verifySendSuccess: '發送驗證碼成功',
    operate: '操作',
    home: '首頁',
    remark: '備註',
    update: '修改',
    delete: '刪除',
    announcement: '系統公告',
    close: '關閉',
    readed: '已讀',
    unRead: '未讀',
    checkAll: '查看全部',
    checkDetail: '查看詳情',
    optional: '選填',
    choose: '選擇',
    cancelChoose: '取消選擇',
    more: '更多',
    nodeSettings: '節點配置',
    userName: '用戶名',
    mobile: '手機號',
    email: '郵箱',
    toggleLang: '切換語言',
    balance: '餘額',
    person: '人',
    invest: '投資',
    auditAssets: '已審核資產',
    waitAuditAssets: '待審核資產',
    goBack: '返 回'
  },
  /* placeholder 通用 */
  placeholder: {
    email: '請輸入郵箱',
    mobile: '請輸入手機號',
    validateCode: '請輸入驗證碼',
    selectCoin: '請選擇幣種',
    gaCode: '請輸入谷歌驗證碼',
    sellPwd: '請輸入交易密碼'
  },
  // 登录页面
  loginPage: {
    placeholder: {
      username: '請輸入用戶名',
      password: '請輸入登錄密碼'
    },
    loginNow: '立即登錄'
  },
  // 注册页面
  registPage: {
    registNow: '立即註冊',
    goPrevStep: '返回上一步',
    serviceClause: '服務條款',
    privacyProtect: '隱私保護',
    readedAndAccept: '閱讀並接受',
    usdProtocol: 'USD用戶協議',
    ukfRegistProtocol: `用戶應充分認識到期貨投資的風險。平台所提供的所有數據與信息，僅供用戶參考使用，不構成用戶進行投資操作的直接依據，用戶據此操作，風險自擔，平台不承擔任何經濟與法律責任。 `,
    registSuccessTip: '註冊成功！ ',
    emailVerify: '郵箱驗證',
    mobileVerify: '手機驗證',
    chooseCountry: '請選擇國家',
    placeholder: {
      username: '請輸入您的用戶名',
      inviteCode: '請輸入您的邀請碼',
      password: '請輸入您的登錄密碼',
      secondPassword: '請再次輸入您的登錄密碼',
      mobile: '請輸入您的手機號',
      validateCode: '請輸入短信驗證碼'
    }
  },
  // 忘记密码页面
  forgetPwdPage: {
    findByMobile: '手機找回',
    findByEmail: '郵箱找回',
    findPwdNow: '立即找回',
    pwdFindedTip: '您的密碼已找回，請登錄！ ',
    chooseCountry: '請選擇國家',
    placeholder: {
      password: '請輸入新密碼',
      rePwd: '請再次輸入新密碼'
    }
  },
  // 钱包首页
  accountBalancePage: {
    account: '賬戶資產',
		notOpen: '暫未開放',
    globalRevenueRank: '全球收益排名',
    person: '人',
    globalTotalUser: '全球總用戶',
    liveNews: '實時動態',
    amountOfInvestment: '在投金額',
    howToGetIncomes: '如何獲取收益?',
    investmentIncomeYesterday: '昨日投資收益',
    invitedEarningsYesterday: '昨日邀請收益',
    contributionRevenueYesterday: '昨日貢獻收益',
    reservation: '預約',
    myTeam: '我的團隊',
    totalNumberOfTeams: '團隊總人數',
    levelOneMembers: '一代會員總人數',
    levelTwoMembers: '二代會員總人數',
    MemberOfMyDevelopment: '我發展的會員'
  },
  // 我的资产页面
  assetsPage: {
    account: '我的資產',
    checkAccountBill: '查看賬單',
    rechargeWithdrawRecord: '充提記錄',
    placeholder: {
      rechargeId: '輸入交易編號搜索',
      futureName: '請選擇期貨名稱',
      rewardTimeStart: '獎勵發放時間起點',
      rewardTimeEnd: '獎勵發放時間終點',
      investOrderId: '投資訂單ID',
      investUserName: '投資人姓名',
      investOrderIdSearch: '輸入投資訂單ID搜索',
      timeStart: '請選擇時間範圍起點',
      timeEnd: '請選擇時間範圍終點'
    },
    texid: 'txid',
    blockNumber: '區塊高度',
    investEarningDetail: '投資收益明細',
    inviteEarningDetail: '邀請收益明細',
    contributionEarningDetail: '貢獻收益明細',
    rewardId: '收益編號',
    rewardDate: '收益日期',
    rewardRate: '日收益率',
    earning: '收益',
    investVolume: '投資數量',
    investOrderId: '投資訂單ID',
    futureName: '期貨名稱',
    releaseTime: '發放時間',
    rewardLevel: '收益代數',
    investUserName: '投資用戶名',
    staticEarningRate: '靜態收益率',
    releaseDate: '發放日期',
    userStarLevel: '用戶星級',
  },
  // 投资管理页面
  investManagementPage: {
    investManagement: '投資管理',
    placeholder: {
      futureNameSelect: '請選擇期貨名稱',
      dateStart: '請選擇日期範圍起點',
      dateEnd: '請選擇日期範圍終點'
    },
    reservationId: '預約編號',
    futureName: '期貨名稱',
    investAmount: '投資額',
    reservationTime: '預約時間',
  },
  // 意见反馈页面
  feedbackPage: {
    feedback: '意見反饋',
    feedbackType: '反饋類型',
    feedbackContent: '反饋內容',
    realName: '真實姓名',
    contact: '聯繫方式',
    myMessageRecord: '我的消息記錄',
    commitTime: '提交時間',
    replyTime: '回复時間',
    noMessage: '暫無消息！ ',
    feedbackDataCommitSuccessTip: '您的反饋已成功提交，請靜待回复！ ',
    placeholder: {
      feedbackTypeSelect: '請選擇反饋類型',
      feedbackContentFill: '請輸入反饋內容',
      realNameFill: '請輸入您的真實姓名',
      contactFill: '請輸入您的聯繫方式'
    }
  },
  // 安全设置页面
  securitySettingPage: {
    securitySetting: '安全設置',
    lastLoginTime: '最近登錄時間',
    lastLoginIp: '最近登錄IP',
    sellPwdSetting: '交易密碼設置',
    gaCodeSetting: '谷歌驗證碼設置',
    emailSetting: '郵箱設置',
  },
  // 设置易密码页面
  sellPwdPage: {
    oldSellPwd: '原交易密碼',
    newSellPwd: '新交易密碼',
    updateSellPwdTip: '修改交易密碼後24小時內將被限制交易，請知悉！ ',
    setSellPwd: '設置交易密碼',
    updateSellPwd: '修改交易密碼',
    setSellPwdSuccessTip: '交易密碼設置成功！ ',
    resetSellPwdSuccessTip: '交易密碼重置成功！ ',
    updateSellPwdSuccessTip: '交易密碼修改成功！ ',
    forgetSellPwd: '忘記交易密碼？請點擊',
    here: '這裡',
    resetNow: '立即重置'
  },
  // 设置交易密码页面
  setGaCodePage: {
    whatIsGaCode: '谷歌身份驗證器是一款動態口令工具，工作原理類似短信動態驗證。綁定後每30s生成一個動態驗證碼，驗證碼可用於登錄、提現、修改安全設置等操作的安全驗證。 ',
    stepText1: '下載APP',
    stepText2: '掃描二維碼',
    stepText3: '開啟谷歌驗證碼',
    step1Operate: '下載並安裝谷歌驗證器APP',
    iosDownApp: '蘋果用戶在"App Store"中搜索"谷歌驗證器"，下載並安裝；',
    androidDownApp: '安卓用戶在"應用市場"中搜索"谷歌驗證器"，下載並安裝；',
    afterSetup: '安裝完成後點擊"下一步"按鈕',
    nextStep: '下一步',
    prevSet: '上一步',
    ste2Operate: '使用谷歌驗證器掃描一以下維碼',
    canNotScanTip: '如果您無法掃描二維碼，可以將以下16位密鑰手動輸入到谷歌驗證APP中',
    secretKeyPurposeExplain: '密鑰用於手機更換或遺失時找回谷歌驗證器，綁定前請務必將下述密鑰備份保存',
    enterDynamicCodeTip: '將生成的動態驗證碼填寫到如下輸入框中',
    secretKey: '秘鑰',
    deviceName: '設備名稱',
    confirmBind: '完成綁定',
    gaCodeBindSuccessTip: '谷歌驗證器綁定成功！ ',
    secretKeyCopySuccessTip: '秘鑰已復制！ ',
    checkGaCode: '查看谷歌驗證器',
    confirm: '提交'
  },
  // 绑定邮箱页面
  setEamilPage: {
    needBindEmail: '需綁定的郵箱',
    emailPurposeExplain: '您可以用驗證通過的郵箱來做安全驗證',
    updateEmailTip: '修改郵箱後24小時內將被限制交易，請知悉！ ',
    emailBindSuccessTip: '郵箱綁定成功！ ',
    hasBindedEmail: '您已綁定過郵箱，郵箱綁定後可用於接收驗證碼',
    currentEmail: '當前郵箱'
  },
  // 个人资料页面
  userInfoPage: {
    userInfo: '用戶資料',
    uploadAvatar: '上傳頭像',
    updateAvatar: '修改頭像',
    userName: '用戶名',
    nickName: '暱稱',
    updateNickName: '修改暱名',
    mobilePhone: '手機號碼',
    emailAddrses: '郵箱地址',
    hasNotBindEmail: '您還未綁定郵箱',
    bindEmail: '綁定郵箱',
    registTime: '註冊時間',
    inviteCode: '我的邀請碼',
    nickNameRule: '暱名必須是2-12位的字母、數字、_的組合！ ',
    nickNameUpdateSuccessTip: '暱稱修改成功！ ',
    avatarUploadSuccess: '頭像上傳成功！ ',
    avatarUploadFaild: '頭像上傳失敗！ ',
  },
  // 地址薄页面
  addressBookPage: {
    addresBook: '地址簿',
    addAddress: '添加地址',
    updateAddress: '修改地址',
    name: '名稱',
    address: '地址',
    delAddressTip: '地址刪除後不可恢復，您確定要刪除?',
    sellPWdErrorTip: '交易密碼輸入不正確',
    delAddressSuccess: '地址刪除成功！ ',
    updateAddressSuccess: '地址修改成功！ ',
    chooseAddress: '選擇地址'
  },
  // 消息中心页面
  messagesPage: {
    title: '消息中心',
    setReaded: '標為已讀'
  },
  // 关于我们页面
  aboutUsPage: {
    bannerText2: '數字貨幣期貨交易託管系統',
    supervise: 'FCA最強監管 遵守反洗錢/反恐融資法',
    ukfGroup: `<p>
                UKF GROUP數字貨幣期貨交易託管系統是由 Richard Holloway 先生聯合Coin Shares公司創建的一家綜合數字貨幣複利理財、
                互聯網及數字貨幣期貨交易的交易託管平台。
              </p>
              <br>
              <p>
                UKF GROUP公司總部設立在英國倫敦城，註冊資本總額達5000萬英鎊，在全球擁有超過10家運營中心和分部，並在全球範圍內吸納了近千名專業交易員
                和超百位擁有投行背景的高級分析師。在加密數字資產高速增漲的近幾年，UKF GROUP在世界頂級金融監管機構英國FAC的嚴格監管下為來自歐洲、
                北美洲的客戶實現了高回報的加密貨幣理財服務，借助其在傳統外匯市場豐富的實操經驗以及嚴謹的分析技術，精準把握了BTC和ETH以及多個主
                流加密貨幣發展趨勢，為全球客戶捕獲了豐厚的回報和收益，並在業內擁有加密貨幣市場“狙擊手”的美譽。
              </p>`,
    coinShares: `<p>CoinShares代表世界上第一個：</p>
              <p>受管制的比特幣對沖基金（GABI），比特幣交易所交易票據（COINXBT和COINXBE），</p>
              <p>以太坊交易所交易票據（COINETH和COINETHE）以及以太幣計價的基金（CS Fund 1）。 </p>
              <p>
                作為一家擁有超過10億美元資產管理規模的高增長加密金融公司，CoinShares在區塊鍊和加密貨幣領域開發金融解決方案方面處於領先地位。
              </p>`,
    mission: '使命',
    missionContent: `<p>UKF GROUP致力於通過專業的技術團隊為全球投資客戶提供</p>
          <p>更便捷、成本更低的資產管理服務，顯著提升交易運行效率，驅動更高的資產收益。 </p>`,
    valueConceptValue1: `<li>1.用戶第一</li>
            <li>2.勤勉敬業</li>
            <li>3.使命必達</li>`,
    valueConceptValue2: `<li>4.積極樂觀</li>
            <li>5.向前一步</li>
            <li>6.退後一步</li>`,
    valueConceptText: '價值觀',
    valueConceptExplain: `我們以滿足用戶需求為首要任務。我們精益求精，激情，高效，全力做好每一件事情，做到極致。我們認為保持積極快樂的心態，勇於探索，
          包容互助才能夠高產出地工作，獲得長期更高的回報。在UKF GROUP，我們每天都在創造獨一無二的價值。 `
  },
  // 添加地址弹窗
  addAddressModal: {
    title: '新增地址',
    name: '名稱',
    address: '地址詳情',
    addressAddSuccess: '地址添加成功！ '
  },
  // 切换验证方式组件
  changeVerifyTypeCom: {
    toggle: '切換驗證方式',
    canNotToggle: '無法切換',
    justBindOne: '您目前只綁定了一種校驗方式，無法切換',
    notBindAny: '您未綁定任何驗證方式，無法發送驗證碼'
  },
  // 头部组件
  headerCom: {
    assets: '資產',
    investment: '投資管理',
    customerService: '客戶服務',
    helpCenter: '幫助中心',
    legallyRelevant: '法律相關',
    unReadMsg: '未讀消息',
    securitySettings: '安全設置',
    myProfile: '我的資料',
    updatePwd: '修改密碼'
  },
  // 节点设置弹窗
  nodeSettingModal: {
    setNodeCaption: '設置挂靠節點',
    currentNode: '當前挂靠節點',
    inviteCodeRequired: '請輸入挂靠節點的邀請碼',
    nodeSetSuccess: '節點設置成功！ ',
    placeholder: {
      inviteCode: '請輸入對方邀請碼'
    }
  },
  // 转入弹窗
  transferModal: {
    transferAddress: '轉入地址',
    transferAddressCaption: '請將您的USDT轉入以下地址',
    transferAddressAttention: '注意：該地址只能接收USDT，轉入其他地址將無法找回',
    addressTip: '該地址已與您的賬戶綁定，可重複使用',
    copyAddress: '複製地址',
    addressCopySuccess: '轉賬地址已復制！ '
  },
  // 转出弹窗
  transferOutModal: {
    assetsTransferOut: '資產轉出',
    transferOutCoin: '轉出幣種',
    oppositeAddress: '對方地址',
    checkAddressBook: '查看地址蒲',
    transferOutVolume: '轉出數量',
    transferVolumeRuleText1: '最小轉出數量: ',
    transferVolumeRuleText2: '轉出數量必須是',
    transferVolumeRuleText3: '的整數倍',
    actualGetted: '實際可得',
    allTransferOut: '全部轉出',
    waitText1: '您需再等待',
    waitText2: '天才能轉出！ ',
    confirmTransferOut: '確定轉出',
    securityCheck: '安全驗證',
    transferOutSuccess: '轉出成功',
    remitteeAddress: '收款地址',
    saveToAddressBook: '保存到地址簿',
    remarkContent: '備註內容',
    iKnow: '知道了',
    placeholder: {
      transferOutCoinSelect: '請選擇轉出幣種',
      oppositeAddressFill: '請輸入對方地址',
      transferVolumeFill: '請輸入轉出數量',
      remarkFill: '請輸入備註內容'
    }
  },
  // 修改登录密码弹窗
  updatePwdModal: {
    title: '修改登錄密碼',
    oldPassword: '原登錄密碼',
    newPassword: '新密碼',
    updatePwdSuccess: '登錄密碼修改成功！ '
  },
  // 会员详情弹窗
  membersDetailModal: {
    membersDetail: '會員詳情',
    investAmount: '投資金額',
    registTime: '註冊時間',
    hisMembers: '他發展的會員',
    level: '等級'
  },
  // 预约投资弹窗
  reservationModal: {
    reservationInvest: '預約投資',
    futureName: '期貨名稱',
    investAmount: '投資金額',
    minInvestAmount: '最小投資金額',
    reservationNow: '立即預約',
    reservationSuccess: '預約成功！ '
  },
  // 投资弹窗
  investModal: {
    reservationInvest: '投資',
    futureName: '期貨名稱',
    investAmount: '投資金額',
    minInvestAmount: '最小投資金額',
    reservationNow: '立即投資',
    reservationSuccess: '投資成功！ '
  },
  // 首页账户资产预约弹窗
  accountReservationModal: {
    reservationInvest: '預約',
    coinName: '幣種',
    reservationAmount: '預約金額',
    futureName: '期貨名稱',
    investAmount: '投資金額',
    minInvestAmount: '最小投資金額',
    reservationNow: '立即預約',
    reservationSuccess: '預約成功！ '
  },
  // 公告详情弹窗
  announcementDetailModal: {
    title: '公告詳情'
  }
};

export {
  zhTW,
  zhTW as zhHK,
}
