export const zhCN = {
  /* 所有的下拉框及各种状态值都存放于此 */
  selectOption: {
    YesOrNo: {
      1: '是',
      0: '否',
    },
    investWithdrawStatus: {
      1: '已提现',
      0: '未提现',
    },
    investStatus: {
      1: '未到期',
      2: '已到期',
    },
    rechargeRecordStatus: {
      0: '待确认',
      1: '成功',
      2: '失败',
    },
    withdrawRecordStatus: {
      0: '审核中',
      1: '成功',
      2: '拒绝',
      3: '撤销',
      4: '审核通过',
      5: '打币中',
      6: '钱包异常，审核中',
    },
    // 预约投资状态
    reservationInvestStatus: {
      0: '待审核',
      1: '审核通过',
      2: '审核拒绝',
      3: '已结束'
    },
    // 发送验证码方式对应的文字描述
    verifyTypeText: {
      email: '邮箱验证码',
      mobile: '手机验证码',
      gaCode: '谷歌验证码'
    },
    // 星级
    starLevel: {
      1: '一星',
      2: '二星',
      3: '三星',
      4: '四星',
      5: '五星',
      6: '六星',
      7: '股东'
    }
  },
  /* 通用翻译 */
  common: {
    login: '登录',
    regist: '注册',
    logout: '退出',
    forgetPwd: '忘记密码',
    findPwd: '找回密码',
    confirm: '确定',
    cancel: '取消',
    submit: '提交',
    warmPrompt: '温馨提示',
    errorPrompt: '错误提示',
    operatePrompt: '操作提示',
    aboutUs: '关于我们',
    transfer: '转入',
    transferOut: '转出',
    addressBook: '地址薄',
    noData: '暂无数据~',
    dataLoading: '数据加载中...',
    yieldRate: '收益率',
    earning: '收益',
    search: '搜索',
    earningDetail: '收益明细',
    rechargeRecord: '充值记录',
    withdrawRecord: '提现记录',
    rechargeId: '交易编号',
    coinId: '币种',
    rechargeVolume: '充值数量',
    status: '状态',
    rechargeTime: '交易时间',
    receiveAddress: '入账地址',
    transferAddress: '出账地址',
    withdrawVolume: '提现数量',
    fee: '手续费',
    all: '全部',
    summation: '合计',
    authTime: '审核时间',
    confirmCommit: '确定提交',
    validateCode: '验证码',
    sellPwd: '交易密码',
    confirmPwd: '确认密码',
    pwdRule: '密码必须为6-20位字母、数字、_的任意组合！',
    sellPwdRule: '',
    copy: '复制',
    copySuccess: '复制成功！',
    gaCode: '谷歌验证码',
    mobileVerifyCode: '手机验证码',
    emailVerifyCode: '邮箱验证码',
    sendVerifyCode: '发送验证码',
    timeRemaining: '{time}秒后重发',
    reSend: '重新发送',
    verifySendSuccess: '发送验证码成功',
    operate: '操作',
    home: '首页',
    remark: '备注',
    update: '修改',
    delete: '删除',
    announcement: '系统公告',
    close: '关闭',
    readed: '已读',
    unRead: '未读',
    checkAll: '查看全部',
    checkDetail: '查看详情',
    optional: '选填',
    choose: '选择',
    cancelChoose: '取消选择',
    more: '更多',
    nodeSettings: '节点配置',
    userName: '用户名',
    mobile: '手机号',
    email: '邮箱',
    toggleLang: '切换语言',
    balance: '余额',
    person: '人',
    invest: '投资',
    auditAssets: '已审核资产',
    waitAuditAssets: '待审核资产',
    goBack: '返 回'
  },
  /* placeholder 通用 */
  placeholder: {
    email: '请输入邮箱',
    mobile: '请输入手机号',
    validateCode: '请输入验证码',
    selectCoin: '请选择币种',
    gaCode: '请输入谷歌验证码',
    sellPwd: '请输入交易密码'
  },
  // 登录页面
  loginPage: {
    placeholder: {
      username: '请输入用户名',
      password: '请输入登录密码'
    },
    loginNow: '立即登录'
  },
  // 注册页面
  registPage: {
    registNow: '立即注册',
    goPrevStep: '返回上一步',
    serviceClause: '服务条款',
    privacyProtect: '隐私保护',
    readedAndAccept: '阅读并接受',
    usdProtocol: 'USD用户协议',
    ukfRegistProtocol: `用户应充分认识到期货投资的风险。平台所提供的所有数据与信息，仅供用户参考使用，不构成用户进行投资操作的直接依据，用户据此操作，风险自担，平台不承担任何经济与法律责任。`,
    registSuccessTip: '注册成功！',
    emailVerify: '邮箱验证',
    mobileVerify: '手机验证',
    chooseCountry: '请选择国家',
    placeholder: {
      username: '请输入您的用户名',
      inviteCode: '请输入您的邀请码',
      password: '请输入您的登录密码',
      secondPassword: '请再次输入您的登录密码',
      mobile: '请输入您的手机号',
      validateCode: '请输入短信验证码'
    }
  },
  // 忘记密码页面
  forgetPwdPage: {
    findByMobile: '手机找回',
    findByEmail: '邮箱找回',
    findPwdNow: '立即找回',
    pwdFindedTip: '您的密码已找回，请登录！',
    chooseCountry: '请选择国家',
    placeholder: {
      password: '请输入新密码',
      rePwd: '请再次输入新密码'
    }
  },
  // 钱包首页
  accountBalancePage: {
    account: '账户资产',
		notOpen: '暂未开放',
    globalRevenueRank: '全球收益排名',
    person: '人',
    globalTotalUser: '全球总用户',
    liveNews: '实时动态',
    amountOfInvestment: '在投金额',
    howToGetIncomes: '如何获取收益?',
    investmentIncomeYesterday: '昨日投资收益',
    invitedEarningsYesterday: '昨日邀请收益',
    contributionRevenueYesterday: '昨日贡献收益',
    reservation: '预约',
    myTeam: '我的团队',
    totalNumberOfTeams: '团队总人数',
    levelOneMembers: '一代会员总人数',
    levelTwoMembers: '二代会员总人数',
    MemberOfMyDevelopment: '我发展的会员'
  },
  // 我的资产页面
  assetsPage: {
    account: '我的资产',
    checkAccountBill: '查看账单',
    rechargeWithdrawRecord: '充提记录',
    placeholder: {
      rechargeId: '输入交易编号搜索',
      futureName: '请选择期货名称',
      rewardTimeStart: '奖励发放时间起点',
      rewardTimeEnd: '奖励发放时间终点',
      investOrderId: '投资订单ID',
      investUserName: '投资人姓名',
      investOrderIdSearch: '输入投资订单ID搜索',
      timeStart: '请选择时间范围起点',
      timeEnd: '请选择时间范围终点'
    },
    texid: 'txid',
    blockNumber: '区块高度',
    investEarningDetail: '投资收益明细',
    inviteEarningDetail: '邀请收益明细',
    contributionEarningDetail: '贡献收益明细',
    rewardId: '收益编号',
    rewardDate: '收益日期',
    rewardRate: '日收益率',
    earning: '收益',
    investVolume: '投资数量',
    investOrderId: '投资订单ID',
    futureName: '期货名称',
    releaseTime: '发放时间',
    rewardLevel: '收益代数',
    investUserName: '投资用户名',
    staticEarningRate: '静态收益率',
    releaseDate: '发放日期',
    userStarLevel: '用户星级',
  },
  // 投资管理页面
  investManagementPage: {
    investManagement: '投资管理',
    placeholder: {
      futureNameSelect: '请选择期货名称',
      dateStart: '请选择日期范围起点',
      dateEnd: '请选择日期范围终点'
    },
    reservationId: '预约编号',
    futureName: '期货名称',
    investAmount: '投资额',
    reservationTime: '预约时间',
  },
  // 意见反馈页面
  feedbackPage: {
    feedback: '意见反馈',
    feedbackType: '反馈类型',
    feedbackContent: '反馈内容',
    realName: '真实姓名',
    contact: '联系方式',
    myMessageRecord: '我的消息记录',
    commitTime: '提交时间',
    replyTime: '回复时间',
    noMessage: '暂无消息！',
    feedbackDataCommitSuccessTip: '您的反馈已成功提交，请静待回复！',
    placeholder: {
      feedbackTypeSelect: '请选择反馈类型',
      feedbackContentFill: '请输入反馈内容',
      realNameFill: '请输入您的真实姓名',
      contactFill: '请输入您的联系方式'
    }
  },
  // 安全设置页面
  securitySettingPage: {
    securitySetting: '安全设置',
    lastLoginTime: '最近登录时间',
    lastLoginIp: '最近登录IP',
    sellPwdSetting: '交易密码设置',
    gaCodeSetting: '谷歌验证码设置',
    emailSetting: '邮箱设置',
  },
  // 设置易密码页面
  sellPwdPage: {
    oldSellPwd: '原交易密码',
    newSellPwd: '新交易密码',
    updateSellPwdTip: '修改交易密码后24小时内将被限制交易，请知悉！',
    setSellPwd: '设置交易密码',
    updateSellPwd: '修改交易密码',
    setSellPwdSuccessTip: '交易密码设置成功！',
    resetSellPwdSuccessTip: '交易密码重置成功！',
    updateSellPwdSuccessTip: '交易密码修改成功！',
    forgetSellPwd: '忘记交易密码？请点击',
    here: '这里',
    resetNow: '立即重置'
  },
  // 设置交易密码页面
  setGaCodePage: {
    whatIsGaCode: '谷歌身份验证器是一款动态口令工具，工作原理类似短信动态验证。绑定后每30s生成一个动态验证码，验证码可用于登录、提现、修改安全设置等操作的安全验证。',
    stepText1: '下载APP',
    stepText2: '扫描二维码',
    stepText3: '开启谷歌验证码',
    step1Operate: '下载并安装谷歌验证器APP',
    iosDownApp: '苹果用户在"App Store"中搜索"谷歌验证器"，下载并安装；',
    androidDownApp: '安卓用户在"应用市场"中搜索"谷歌验证器"，下载并安装；',
    afterSetup: '安装完成后点击"下一步"按钮',
    nextStep: '下一步',
    prevSet: '上一步',
    ste2Operate: '使用谷歌验证器扫描一以下维码',
    canNotScanTip: '如果您无法扫描二维码，可以将以下16位密钥手动输入到谷歌验证APP中',
    secretKeyPurposeExplain: '密钥用于手机更换或遗失时找回谷歌验证器，绑定前请务必将下述密钥备份保存',
    enterDynamicCodeTip: '将生成的动态验证码填写到如下输入框中',
    secretKey: '秘钥',
    deviceName: '设备名称',
    confirmBind: '完成绑定',
    gaCodeBindSuccessTip: '谷歌验证器绑定成功！',
    secretKeyCopySuccessTip: '秘钥已复制！',
    checkGaCode: '查看谷歌验证器',
    confirm: '提交'
  },
  // 绑定邮箱页面
  setEamilPage: {
    needBindEmail: '需绑定的邮箱',
    emailPurposeExplain: '您可以用验证通过的邮箱来做安全验证',
    updateEmailTip: '修改邮箱后24小时内将被限制交易，请知悉！',
    emailBindSuccessTip: '邮箱绑定成功！',
    hasBindedEmail: '您已绑定过邮箱，邮箱绑定后可用于接收验证码',
    currentEmail: '当前邮箱'
  },
  // 个人资料页面
  userInfoPage: {
    userInfo: '用户资料',
    uploadAvatar: '上传头像',
    updateAvatar: '修改头像',
    userName: '用户名',
    nickName: '昵称',
    updateNickName: '修改昵名',
    mobilePhone: '手机号码',
    emailAddrses: '邮箱地址',
    hasNotBindEmail: '您还未绑定邮箱',
    bindEmail: '绑定邮箱',
    registTime: '注册时间',
    inviteCode: '我的邀请码',
    nickNameRule: '昵名必须是2-12位的字母、数字、_的组合！',
    nickNameUpdateSuccessTip: '昵称修改成功！',
    avatarUploadSuccess: '头像上传成功！',
    avatarUploadFaild: '头像上传失败！',
  },
  // 地址薄页面
  addressBookPage: {
    addresBook: '地址簿',
    addAddress: '添加地址',
    updateAddress: '修改地址',
    name: '名称',
    address: '地址',
    delAddressTip: '地址删除后不可恢复，您确定要删除?',
    sellPWdErrorTip: '交易密码输入不正确',
    delAddressSuccess: '地址删除成功！',
    updateAddressSuccess: '地址修改成功！',
    chooseAddress: '选择地址'
  },
  // 消息中心页面
  messagesPage: {
    title: '消息中心',
    setReaded: '标为已读'
  },
  // 关于我们页面
  aboutUsPage: {
    bannerText2: '数字货币期货交易托管系统',
    supervise: 'FCA最强监管 遵守反洗钱/反恐融资法',
    ukfGroup: `<p>
                UKF GROUP数字货币期货交易托管系统是由 Richard Holloway 先生联合Coin Shares公司创建的一家综合数字货币复利理财、
                互联网及数字货币期货交易的交易托管平台。
              </p>
              <br>
              <p>
                UKF GROUP公司总部设立在英国伦敦城，注册资本总额达5000万英镑，在全球拥有超过10家运营中心和分部，并在全球范围内吸纳了近千名专业交易员
                和超百位拥有投行背景的高级分析师。在加密数字资产高速增涨的近几年，UKF GROUP在世界顶级金融监管机构英国FAC的严格监管下为来自欧洲、
                北美洲的客户实现了高回报的加密货币理财服务，借助其在传统外汇市场丰富的实操经验以及严谨的分析技术，精准把握了BTC和ETH以及多个主
                流加密货币发展趋势，为全球客户捕获了丰厚的回报和收益，并在业内拥有加密货币市场“狙击手”的美誉。
              </p>`,
    coinShares: `<p>CoinShares代表世界上第一个：</p>
              <p>受管制的比特币对冲基金（GABI），比特币交易所交易票据（COINXBT和COINXBE），</p>
              <p>以太坊交易所交易票据（COINETH和COINETHE）以及以太币计价的基金（CS Fund 1）。</p>
              <p>
                作为一家拥有超过10亿美元资产管理规模的高增长加密金融公司，CoinShares在区块链和加密货币领域开发金融解决方案方面处于领先地位。
              </p>`,
    mission: '使命',
    missionContent: `<p>UKF GROUP致力于通过专业的技术团队为全球投资客户提供</p>
          <p>更便捷、成本更低的资产管理服务，显著提升交易运行效率，驱动更高的资产收益。</p>`,
    valueConceptValue1: `<li>1.用户第一</li>
            <li>2.勤勉敬业</li>
            <li>3.使命必达</li>` ,
    valueConceptValue2: `<li>4.积极乐观</li>
            <li>5.向前一步</li>
            <li>6.退后一步</li>`,
    valueConceptText: '价值观',
    valueConceptExplain: `我们以满足用户需求为首要任务。我们精益求精，激情，高效，全力做好每一件事情，做到极致。我们认为保持积极快乐的心态，勇于探索，
          包容互助才能够高产出地工作，获得长期更高的回报。在UKF GROUP，我们每天都在创造独一无二的价值。`
  },
  // 添加地址弹窗
  addAddressModal: {
    title: '新增地址',
    name: '名称',
    address: '地址详情',
    addressAddSuccess: '地址添加成功！'
  },
  // 切换验证方式组件
  changeVerifyTypeCom: {
    toggle: '切换验证方式',
    canNotToggle: '无法切换',
    justBindOne: '您目前只绑定了一种校验方式，无法切换',
    notBindAny: '您未绑定任何验证方式，无法发送验证码'
  },
  // 头部组件
  headerCom: {
    assets: '资产',
    investment: '投资管理',
    customerService: '客户服务',
    helpCenter: '帮助中心',
    legallyRelevant: '法律相关',
    unReadMsg: '未读消息',
    securitySettings: '安全设置',
    myProfile: '我的资料',
    updatePwd: '修改密码'
  },
  // 节点设置弹窗
  nodeSettingModal: {
    setNodeCaption: '设置挂靠节点',
    currentNode: '当前挂靠节点',
    inviteCodeRequired: '请输入挂靠节点的邀请码',
    nodeSetSuccess: '节点设置成功！',
    placeholder: {
      inviteCode: '请输入对方邀请码'
    }
  },
  // 转入弹窗
  transferModal: {
    transferAddress: '转入地址',
    transferAddressCaption: '请将您的USDT转入以下地址',
    transferAddressAttention: '注意：该地址只能接收USDT，转入其他地址将无法找回',
    addressTip: '该地址已与您的账户绑定，可重复使用',
    copyAddress: '复制地址',
    addressCopySuccess: '转账地址已复制！'
  },
  // 转出弹窗
  transferOutModal: {
    assetsTransferOut: '资产转出',
    transferOutCoin: '转出币种',
    oppositeAddress: '对方地址',
    checkAddressBook: '查看地址蒲',
    transferOutVolume: '转出数量',
    transferVolumeRuleText1: '最小转出数量: ',
    transferVolumeRuleText2: '转出数量必须是',
    transferVolumeRuleText3: '的整数倍',
    actualGetted: '实际可得',
    allTransferOut: '全部转出',
    waitText1: '您需再等待',
    waitText2: '天才能转出！',
    confirmTransferOut: '确定转出',
    securityCheck: '安全验证',
    transferOutSuccess: '转出成功',
    remitteeAddress: '收款地址',
    saveToAddressBook: '保存到地址簿',
    remarkContent: '备注内容',
    iKnow: '知道了',
    placeholder: {
      transferOutCoinSelect: '请选择转出币种',
      oppositeAddressFill: '请输入对方地址',
      transferVolumeFill: '请输入转出数量',
      remarkFill: '请输入备注内容'
    }
  },
  // 修改登录密码弹窗
  updatePwdModal: {
    title: '修改登录密码',
    oldPassword: '原登录密码',
    newPassword: '新密码',
    updatePwdSuccess: '登录密码修改成功！'
  },
  // 会员详情弹窗
  membersDetailModal: {
    membersDetail: '会员详情',
    investAmount: '投资金额',
    registTime: '注册时间',
    hisMembers: '他发展的会员',
    level: '等级'
  },
  // 预约投资弹窗
  reservationModal: {
    reservationInvest: '预约投资',
    futureName: '期货名称',
    investAmount: '投资金额',
    minInvestAmount: '最小投资金额',
    reservationNow: '立即预约',
    reservationSuccess: '预约成功！'
  },
  // 投资弹窗
  investModal: {
    reservationInvest: '投资',
    futureName: '期货名称',
    investAmount: '投资金额',
    minInvestAmount: '最小投资金额',
    reservationNow: '立即投资',
    reservationSuccess: '投资成功！'
  },
  // 首页账户资产预约弹窗
  accountReservationModal: {
    reservationInvest: '预约',
    coinName: '币种',
    reservationAmount: '预约金额',
    futureName: '期货名称',
    investAmount: '投资金额',
    minInvestAmount: '最小投资金额',
    reservationNow: '立即预约',
    reservationSuccess: '预约成功！'
  },
  // 公告详情弹窗
  announcementDetailModal: {
    title: '公告详情'
  }
};
