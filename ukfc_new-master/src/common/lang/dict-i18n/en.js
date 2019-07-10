export const enUS = {
  /* 所有的下拉框及各种状态值都存放于此 */
  selectOption: {
    YesOrNo: {
      1: 'Yes',
      0: 'No',
    },
    investWithdrawStatus: {
      1: 'Withdrawn ',
      0: 'Not withdrawn',
    },
    investStatus: {
      1: 'Not expired',
      2: 'Expired',
    },
    rechargeRecordStatus: {
      0: 'To be confirmed',
      1: 'Succeeded',
      2: 'Failed',
    },
    withdrawRecordStatus: {
      0: 'Under authentication',
      1: 'Succeeded',
      2: 'Refused',
      3: 'Cancelled',
      4: 'Passed',
      5: 'Playing for coins',
      6: 'Abnormal wallet. Under authentication',
    },
    // 预约投资状态
    reservationInvestStatus: {
      0: 'To be authenticated',
      1: 'Passed',
      2: 'Refused',
      3: 'Ended'
    },
    // 发送验证码方式对应的文字描述
    verifyTypeText: {
      email: 'Email Validate Code',
      mobile: 'Mobile Validate Code',
      gaCode: 'Google Code'
    },
    // 星级
    starLevel: {
      1: 'One-star',
      2: 'Two-star',
      3: 'Three-star',
      4: 'Four-star',
      5: 'Five-star',
      6: 'Six-star',
      7: 'Shareholder'
    }
  },
  /* 通用翻译 */
  common: {
    login: 'Login',
    regist: 'Register',
    logout: 'Logout',
    forgetPwd: 'Forgot Password',
    findPwd: 'Find Password',
    confirm: 'Confirm',
    cancel: 'Cancel',
    submit: 'Submit',
    warmPrompt: 'Warm Prompt',
    errorPrompt: 'Error Prompt',
    operatePrompt: 'Operation Prompt',
    aboutUs: 'About Us',
    transfer: 'Transfer',
    transferOut: 'Transfer-out',
    addressBook: 'Address Book',
    noData: 'No data~',
    dataLoading: 'Loading data...',
    yieldRate: 'Yield Rate',
    earning: 'Earning',
    search: 'Search',
    earningDetail: 'Earning Detail',
    rechargeRecord: 'Recharge Record',
    withdrawRecord: 'Withdrawal Record',
    rechargeId: 'Recharge ID',
    coinId: 'Coin ID',
    rechargeVolume: 'Recharge Volume',
    status: 'Status',
    rechargeTime: 'Recharge Time',
    receiveAddress: 'Receiving Address',
    transferAddress: 'Transfer-out Address ',
    withdrawVolume: 'Withdrawal Volume',
    fee: 'Fee',
    all: 'All',
    summation: 'Total',
    authTime: 'Authentication Time',
    confirmCommit: 'Confirm Submission',
    validateCode: 'Validate Code',
    sellPwd: 'Transaction Password',
    confirmPwd: 'Confirm Password',
    pwdRule: 'Password must contain 6-20 digits and be a combination of letters, numbers and _!',
    sellPwdRule: '',
    copy: 'Copy',
    copySuccess: 'Copied successfully!',
    gaCode: 'Google Authentication Code',
    mobileVerifyCode: 'Verification Code Sent to Mobile Phone',
    emailVerifyCode: 'Verification Code Sent via Email',
    sendVerifyCode: 'Send Verification Code',
    timeRemaining: 'Resend {time} sec. later',
    reSend: 'Resend',
    verifySendSuccess: 'Verification code sent successfully',
    operate: 'Operation',
    home: 'Home',
    remark: 'Remark',
    update: 'Update',
    delete: 'Delete',
    announcement: 'Announcement',
    close: 'Close',
    readed: 'Already read',
    unRead: 'Unread',
    checkAll: 'Check All',
    checkDetail: 'Check Detail',
    optional: 'Optional',
    choose: 'Select',
    cancelChoose: 'Deselect',
    more: 'More',
    nodeSettings: 'Node Settings',
    userName: 'Username',
    mobile: 'Mobile',
    email: 'Email',
    toggleLang: 'Toggle Language',
    balance: 'Balance',
    person: 'person(s)',
    invest: 'Invest',
    auditAssets: 'Audited Assets',
    waitAuditAssets: 'Assets to be Audited',
    goBack: 'Go back'
  },
  /* placeholder 通用 */
  placeholder: {
    email: 'Please input an email address',
    mobile: 'Please input a mobile number',
    validateCode: 'Please input the validate code',
    selectCoin: 'Please select as coin ID',
    gaCode: 'Please input the Google authentication code',
    sellPwd: 'Please input the transaction password'
  },
  // 登录页面
  loginPage: {
    placeholder: {
      username: 'Please input the username',
      password: 'Please input the password'
    },
    loginNow: 'Login Now'
  },
  // 注册页面
  registPage: {
    registNow: 'Register Now',
    goPrevStep: 'Go to Previous Step',
    serviceClause: 'Service Clause',
    privacyProtect: 'Privacy Protection',
    readedAndAccept: 'Read and Accept',
    usdProtocol: 'USD Protocol',
    ukfRegistProtocol: `You should fully realize the risk of investment in futures. All the data and information provided by the platform are for reference only and do not constitute the direct basis for your investment operation. If you operate based on the same, you should undertake the risk yourself and the platform will not bear any economic and legal liabilities.`,
    registSuccessTip: 'Registered successfully!',
    emailVerify: 'Verification via Email',
    mobileVerify: ' Verification via Mobile',
    chooseCountry: 'Please select a country',
    placeholder: {
      username: 'Please input your username',
      inviteCode: 'Please input your invite code',
      password: 'Please input your password',
      secondPassword: 'Please input your password again',
      mobile: 'Please input your mobile phone number',
      validateCode: 'Please input the validate code sent via SMS'
    }
  },
  // 忘记密码页面
  forgetPwdPage: {
    findByMobile: 'Find by Mobile',
    findByEmail: 'Find by Email',
    findPwdNow: 'Find Password Now',
    pwdFindedTip: 'Your password has been found. Please login!',
    chooseCountry: 'Please select a country',
    placeholder: {
      password: 'Please input a new password',
      rePwd: 'Please input the new password again'
    }
  },
  // 钱包首页
  accountBalancePage: {
    account: 'Account Assets',
		notOpen: 'Not yet open',
    globalRevenueRank: 'Global Revenue Rank',
    person: 'Person',
    globalTotalUser: 'Global Total Users',
    liveNews: 'Live News',
    amountOfInvestment: 'Amount of Investment',
    howToGetIncomes: 'How to Get Incomes?',
    investmentIncomeYesterday: 'Investment Income Yesterday',
    invitedEarningsYesterday: 'Invited Earnings Yesterday',
    contributionRevenueYesterday: 'Contribution Revenue Yesterday',
    reservation: 'Reservation',
    myTeam: 'My Team',
    totalNumberOfTeams: 'Total No. of Persons in the Team ',
    levelOneMembers: 'Total No. of Members at Level One',
    levelTwoMembers: 'Total No. of Members at Level Two',
    MemberOfMyDevelopment: 'Members Developed by Me'
  },
  // 我的资产页面
  assetsPage: {
    account: 'My Assets',
    checkAccountBill: 'Check Bill',
    rechargeWithdrawRecord: 'Recharge and Withdrawal Record',
    placeholder: {
      rechargeId: 'Input the transaction number for search',
      futureName: 'Please select the name of futures',
      rewardTimeStart: 'Start Time of Reward Distribution',
      rewardTimeEnd: 'End Time of Reward Distribution',
      investOrderId: 'Investment Order ID',
      investUserName: 'Investor’s Name',
      investOrderIdSearch: 'Input an investment order ID for search ',
      timeStart: 'Please select the starting point of the time range',
      timeEnd: 'Please select the ending point of the time range'
    },
    texid: 'txid',
    blockNumber: 'Block Height',
    investEarningDetail: 'Investment Earning Detail',
    inviteEarningDetail: 'Invite Earning Detail',
    contributionEarningDetail: 'Contribution Earning Detail',
    rewardId: 'Reward ID',
    rewardDate: 'Reward Date',
    rewardRate: 'Daily Reward Rate',
    earning: 'Earning',
    investVolume: 'Investment Volume',
    investOrderId: 'Investment Order ID',
    futureName: 'Name of Futures',
    releaseTime: 'Release Time',
    rewardLevel: 'Reward Level',
    investUserName: 'Investment Username',
    staticEarningRate: 'Static Earning Rate',
    releaseDate: 'Release Date',
    userStarLevel: 'User’s Star Level',
  },
  // 投资管理页面
  investManagementPage: {
    investManagement: 'Investment Management',
    placeholder: {
      futureNameSelect: 'Please select the name of futures',
      dateStart: 'Please select the starting point of the date range',
      dateEnd: 'Please select the ending point of the date range'
    },
    reservationId: 'Reservation ID',
    futureName: 'Name of Futures',
    investAmount: 'Investment Amount',
    reservationTime: 'Reservation Time',
  },
  // 意见反馈页面
  feedbackPage: {
    feedback: 'Feedback',
    feedbackType: 'Feedback Type',
    feedbackContent: 'Feedback Content',
    realName: 'Real Name',
    contact: 'Contact Info',
    myMessageRecord: 'My Message Record',
    commitTime: 'Time Submitted',
    replyTime: 'Reply Time',
    noMessage: 'No message!',
    feedbackDataCommitSuccessTip: 'Your feedback has been submitted successfully. Please wait for your reply!',
    placeholder: {
      feedbackTypeSelect: 'Please select the feedback type',
      feedbackContentFill: 'Please fill in the feedback content',
      realNameFill: 'Please input your real name',
      contactFill: 'Please input your contact information'
    }
  },
  // 安全设置页面
  securitySettingPage: {
    securitySetting: 'Security Setting',
    lastLoginTime: 'Last Login Time',
    lastLoginIp: 'Last Login IP',
    sellPwdSetting: 'Transaction Password Setting',
    gaCodeSetting: 'Google Authentication Code Setting',
    emailSetting: 'Email Setting',
  },
  // 设置易密码页面
  sellPwdPage: {
    oldSellPwd: 'Old Transaction Password',
    newSellPwd: 'New Transaction Password',
    updateSellPwdTip: 'Please be aware that transactions will be restricted within 24 hours after the transaction password is updated!',
    setSellPwd: 'Set Transaction Password',
    updateSellPwd: 'Update Transaction Password',
    setSellPwdSuccessTip: 'Transaction password set successfully!',
    resetSellPwdSuccessTip: 'Transaction password reset successfully!',
    updateSellPwdSuccessTip: 'Transaction password updated successfully!',
    forgetSellPwd: 'Forgot your Transaction password? Please click',
    here: 'Here',
    resetNow: 'Reset now'
  },
  // 设置交易密码页面
  setGaCodePage: {
    whatIsGaCode: 'Google Authenticator is a dynamic password tool. The working principle is similar to that for dynamic authentication via SMS. After Google Authenticator is bound, a dynamic authentication code will be generated every 30s. The authentication code can be used for security authentication for login, cash withdrawal, modification of security settings, etc.',
    stepText1: 'Download APP',
    stepText2: 'Scan QR Code',
    stepText3: 'Switch on Google Authentication Code',
    step1Operate: 'Download and Install Google Authenticator APP',
    iosDownApp: 'Apple users may search “Google Authenticator” on the “App Store”. Download and install the App;',
    androidDownApp: 'Android users may search “Google Authenticator” on the App Market. Download and install the App;',
    afterSetup: 'After the installation is finished, click the “Next” button',
    nextStep: 'Next',
    prevSet: 'Previous',
    ste2Operate: 'Use Google Authenticator to scan the QR code',
    canNotScanTip: 'If you cannot scan the QR code, you can input the following 16-digit key in the Google Authenticator App manually',
    secretKeyPurposeExplain: 'The key is used to find Google Authenticator when the mobile phone is replaced or lost. Before binding Google Authenticator, be sure to make a backup of the following key',
    enterDynamicCodeTip: 'Input the dynamic authentication code generated in the following input box',
    secretKey: 'Key',
    deviceName: 'Device Name',
    confirmBind: 'Confirm Binding',
    gaCodeBindSuccessTip: 'Google Authenticator bound successfully!',
    secretKeyCopySuccessTip: 'Key copied successfully!',
    checkGaCode: 'Check Google Authenticator',
    confirm: 'Submit'
  },
  // 绑定邮箱页面
  setEamilPage: {
    needBindEmail: 'Email Address to be Bound',
    emailPurposeExplain: 'You can use the email address that has passed authentication for security authentication',
    updateEmailTip: 'Please be aware that transactions will be restricted within 24 hours after the email address is updated!',
    emailBindSuccessTip: 'Email address bound successfully!',
    hasBindedEmail: 'You have bound the email address. After bound, the email address can be used to receive authentication codes',
    currentEmail: 'Current Email'
  },
  // 个人资料页面
  userInfoPage: {
    userInfo: 'User Info',
    uploadAvatar: 'Upload Avatar',
    updateAvatar: 'Update Avatar',
    userName: 'Username',
    nickName: 'Nickname',
    updateNickName: 'Update Nickname',
    mobilePhone: 'Mobile Phone',
    emailAddrses: 'Email Address',
    hasNotBindEmail: 'You have not bound an email address',
    bindEmail: 'Bind Email',
    registTime: 'Registration Time',
    inviteCode: 'My Invite Code',
    nickNameRule: 'Nickname must contain 2-12 digits and be a combination of letters, numbers and _!',
    nickNameUpdateSuccessTip: 'Nickname updated successfully!',
    avatarUploadSuccess: 'Avatar uploaded successfully!',
    avatarUploadFaild: 'Avatar uploading failed!',
  },
  // 地址薄页面
  addressBookPage: {
    addresBook: 'Address Book',
    addAddress: 'Add Address',
    updateAddress: 'Update Address',
    name: 'Name',
    address: 'Address',
    delAddressTip: 'The address cannot be recovered after deleted. Are you sure to delete it?',
    sellPWdErrorTip: 'The transaction password input is incorrect',
    delAddressSuccess: 'Address deleted successfully!',
    updateAddressSuccess: 'Address updated successfully!',
    chooseAddress: 'Select an address'
  },
  // 消息中心页面
  messagesPage: {
    title: 'Message Center',
    setReaded: 'Marked as Already Read'
  },
  // 关于我们页面
  aboutUsPage: {
    bannerText2: 'Digital currency futures transaction custody system',
    supervise: 'The strongest supervision of FCA, complying with the AML-CFT strategy',
    ukfGroup: `<p>
                UKF GROUP digital currency futures transaction custody system is a transaction custody system integrating comprehensive digital currency compound interest wealth management and Internet and digital currency futures transaction created by Mr. Richard Holloway together with Coin Shares.
              </p>
              <br>
              <p>
                UKF GROUP, based in London, UK, with the total registered capital of GBP 50 million, has more than 10 operating centers and divisions worldwide and has attracted nearly 1000 professional traders and more than 100 senior analysts with experience in working for investment banks from all over the world. In the recent years when crypto-digital assets grew rapidly, UKF GROUP has provided high-return crypto-currency wealth management services for customers from Europe and North America under the strict supervision of the world’s top financial regulator FAC. By right of its extensive practical experience in the traditional foreign exchange market and rigorous analytical techniques, UKF GROUP fully understands the development trend of BTC, ETH and mainstream crypto-currencies, makes the global customers rewarded handsomely, and enjoys the reputation of “sniper” in the crypto-currency market.
              </p>`,
    coinShares: `<p>CoinShares represents the world’s first:</p>
              <p>regulated Bitcoin hedge fund (GABI), a fund (CS Fund 1) valuated with Bitcoin exchange-traded notes (COINXBT and COINXBE),</p>
              <p>Ethereum exchange-traded notes (COINETH and COINETHE) and Ethereum.</p>
              <p>
                As a high-growth crypto-financial company with the assets management scale exceeding USD 1 billion, CoinShares takes the leading position in respect of financial solution development in the fields of blockchain and crypto-currencies.
              </p>`,
    mission: 'Mission',
    missionContent: `<p>UKF GROUP is devoted to provide more convenient, lower-cost assets management services for global investment customers</p>
          <p>through a professional technical team, thus significantly improves the efficiency of transaction and drives higher assets income.</p>`,
    valueConceptValue1: `<li>1. User First</li>
            <li>2. Diligent and Dedicated</li>
            <li>3. Mission Accomplished</li>`,
    valueConceptValue2: `<li>4. Positive and Optimistic</li>
            <li>5. Step Forward</li>
            <li>6. Step Backward</li>`,
    valueConceptText: 'Values',
    valueConceptExplain: `Meeting users’ needs is our  primary task. We keep improving, are passionate and efficient, and try our best to do everything extraordinarily well. We believe that we are able to wok productively and get higher long-term returns only when we keep active and happy state of mind, dare to explore, are encompassing and help each other. In UKF GROUP, we create unique value every day.`
  },
  // 添加地址弹窗
  addAddressModal: {
    title: 'Add Address',
    name: 'Name',
    address: 'Address',
    addressAddSuccess: 'Address added successfully!'
  },
  // 切换验证方式组件
  changeVerifyTypeCom: {
    toggle: 'Toggle',
    canNotToggle: 'Cannot toggle',
    justBindOne: 'You have currently bound one verification mode only, so you cannot toggle verification modes',
    notBindAny: 'You are not bound to any verification method and cannot send a verification code'
  },
  // 头部组件
  headerCom: {
    assets: 'Assets',
    investment: 'Investment',
    customerService: 'Customer Service',
    helpCenter: 'Help Center',
    legallyRelevant: 'Legally Relevant',
    unReadMsg: 'Unread Message',
    securitySettings: 'Security Settings',
    myProfile: 'My Profile',
    updatePwd: 'Update Password'
  },
  // 节点设置弹窗
  nodeSettingModal: {
    setNodeCaption: 'Set Attached Nodes',
    currentNode: 'Current Attached Nodes',
    inviteCodeRequired: 'Please input the invite code of the attached node',
    nodeSetSuccess: 'Node set successfully!',
    placeholder: {
      inviteCode: 'Please input the invite code of the opposite side'
    }
  },
  // 转入弹窗
  transferModal: {
    transferAddress: 'Transfer Address',
    transferAddressCaption: 'Please transfer your USDT to the following address',
    transferAddressAttention: 'Note: The address can receive USDT only. If the USDT is transferred to another address, it cannot be found',
    addressTip: 'The address has been bound with your account and can be used repeatedly',
    copyAddress: 'Copy Address',
    addressCopySuccess: 'Transfer address copied successfully!'
  },
  // 转出弹窗
  transferOutModal: {
    assetsTransferOut: 'Assets Transfer-out',
    transferOutCoin: 'Transfer-out Coin',
    oppositeAddress: 'Opposite Address',
    checkAddressBook: 'Check Address Book',
    transferOutVolume: 'Transfer-out Volume',
    transferVolumeRuleText1: 'Minimum Transfer-out Volume: ',
    transferVolumeRuleText2: 'The transfer-out volume must be',
    transferVolumeRuleText3: 'integer multiples of',
    actualGetted: 'Actual Available',
    allTransferOut: 'All Transfer-out',
    waitText1: 'You need to wait',
    waitText2: 'day(s) before transfer-out!',
    confirmTransferOut: 'Confirm Transfer-out',
    securityCheck: 'Security Check',
    transferOutSuccess: 'Transfer-out succeeded',
    remitteeAddress: 'Remittee’s Address',
    saveToAddressBook: 'Save To Address Book',
    remarkContent: 'Remark Content',
    iKnow: 'I know',
    placeholder: {
      transferOutCoinSelect: 'Please select the transfer-out coin',
      oppositeAddressFill: 'Please input the opposite address',
      transferVolumeFill: 'Please input the transfer-out volume',
      remarkFill: 'Please input the remark content'
    }
  },
  // 修改登录密码弹窗
  updatePwdModal: {
    title: 'Update Password',
    oldPassword: 'Old Password',
    newPassword: 'New Password',
    updatePwdSuccess: 'Password updated successfully!'
  },
  // 会员详情弹窗
  membersDetailModal: {
    membersDetail: 'Members Detail',
    investAmount: 'Investment Amount',
    registTime: 'Registration Time',
    hisMembers: 'Members Developed by Him',
    level: 'Level'
  },
  // 预约投资弹窗
  reservationModal: {
    reservationInvest: 'Reservation Investment',
    futureName: 'Name of Futures',
    investAmount: 'Investment Amount',
    minInvestAmount: 'Minimum Investment Amount',
    reservationNow: 'Reserve Now',
    reservationSuccess: 'Reserved successfully!'
  },
  // 投资弹窗
  investModal: {
    reservationInvest: 'Investment',
    futureName: 'Name of Futures',
    investAmount: 'Investment Amount',
    minInvestAmount: 'Min. Investment Amount',
    reservationNow: 'Invest Now',
    reservationSuccess: 'Invested successfully!'
  },
  // 首页账户资产预约弹窗
  accountReservationModal: {
    reservationInvest: 'Reservation',
    coinName: 'Coin',
    reservationAmount: 'Reservation Amount',
    futureName: 'Name of Futures',
    investAmount: 'Investment Amount',
    minInvestAmount: 'Min. Investment Amount',
    reservationNow: 'Reserve Now',
    reservationSuccess: 'Reserved successfully!'
  },
  // 公告详情弹窗
  announcementDetailModal: {
    title: 'Announcement Detail'
  }
};
