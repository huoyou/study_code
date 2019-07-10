export const zhCN = {
  /* 모든 드롭다운 메뉴 및 각종 상태 값은 모두 여기에 저장합니다 */
  selectOption: {
    YesOrNo: {
      1: '예',
      0: '아니요',
    },
    investWithdrawStatus: {
      1: '출금 완료',
      0: '미 출금',
    },
    investStatus: {
      1: '기한 미달',
      2: '기한 도달',
    },
    rechargeRecordStatus: {
      0: '확인 대기',
      1: '성공',
      2: '실패',
    },
    withdrawRecordStatus: {
      0: '심사 중',
      1: '성공',
      2: '거절',
      3: '취소',
      4: '심사통과',
      5: '송금 중',
      6: '캐시백이상 심사 중',
    },
    // 투자예약 상태
    reservationInvestStatus: {
      0: '심사대기',
      1: '심사통과',
      2: '심사 거절',
      3: '기 종료'
    },
    // 인증번호 발송방식에 대응되는 문자 기술
    verifyTypeText: {
      email: '메일 인증번호',
      mobile: '휴대폰 인증번호',
      gaCode: '구글 인증번호'
    },
    // 스타 레벨
    starLevel: {
      1: '일성',
      2: '이성',
      3: '삼성',
      4: '사성',
      5: '오성',
      6: '육성',
      7: '주주'
    }
  },
  /* 일반번역 */
  common: {
    login: '로그인',
    regist: '등록',
    logout: '로그아웃',
    forgetPwd: '비밀번호 잊음',
    findPwd: '비밀번호 찾기',
    confirm: '확정',
    cancel: '취소',
    submit: '제출',
    warmPrompt: '참고 제시',
    errorPrompt: '에라 제시',
    operatePrompt: '조작 제시',
    aboutUs: '우리 관련하여',
    transfer: '전입',
    transferOut: '전출',
    addressBook: '주소록',
    noData: '잠시 데이터 없음~',
    dataLoading: '데이터 로딩 중...',
    yieldRate: '수익율',
    earning: '수익',
    search: '검색',
    earningDetail: '수익명세',
    rechargeRecord: '충전기록',
    withdrawRecord: '현금인출기록',
    rechargeId: '거래 번호',
    coinId: '화폐종류',
    rechargeVolume: '충전수량',
    status: '상태',
    rechargeTime: '거래시간',
    receiveAddress: '입금주소',
    transferAddress: '출금주소',
    withdrawVolume: '출금수량',
    fee: '수속비',
    all: '전부',
    summation: '합계',
    authTime: '심사시간',
    confirmCommit: '제출확정',
    validateCode: '인증번호',
    sellPwd: '거래 비밀번호',
    confirmPwd: '비밀번호 확인',
    pwdRule: '비밀번호는 반드시 6-20자리의 자모、숫자、_의 임의조합이여야 합니다.！',
    sellPwdRule: '',
    copy: '복사',
    copySuccess: '복사 성공！',
    gaCode: '구글 인증번호',
    mobileVerifyCode: '휴대폰 인증번호',
    emailVerifyCode: '메일 인증번호',
    sendVerifyCode: '인증번호 발송',
    timeRemaining: '{time}초후 재발송',
    reSend: '재발송',
    verifySendSuccess: '인증번호발송성공',
    operate: '조작',
    home: '홈',
    remark: '비고',
    update: '수정',
    delete: '삭제',
    announcement: '시스템공고',
    close: '닫음',
    readed: '이미 읽음',
    unRead: '읽지 않음',
    checkAll: '전체 보기 ',
    checkDetail: '상세 보기',
    optional: '옵션',
    choose: '선택',
    cancelChoose: '선택 취소',
    more: '모어',
    nodeSettings: '노드 셋팅',
    userName: '사용자이름',
    mobile: '휴대폰번호',
    email: '메일',
    toggleLang: '언어전환',
    balance: '잔액'
  },
  /* placeholder 일반 */
  placeholder: {
    email: '메일 입력하여 주세요',
    mobile: '휴대폰번호 입력하여 주세요',
    validateCode: '인증번호 입력하여 주세요',
    selectCoin: '화폐종류 선택하여 주세요',
    gaCode: '구글 인증번호 입력하여 주세요',
    sellPwd: '거래 비밀번호 입력하여 주세요'
  },
  // 로그인 화면
  loginPage: {
    placeholder: {
      username: '사용자이름 입력하여 주세요',
      password: '로그인 비밀번호 입력하여 주세요'
    },
    loginNow: '즉시 로그인'
  },
  // 등록화면
  registPage: {
    registNow: '즉시 등록',
    goPrevStep: '이전화면으로 돌아가기',
    serviceClause: '서비스 조약',
    privacyProtect: '프라이버시 보호',
    readedAndAccept: '읽음 및 동의',
    usdProtocol: 'USD사용자 협의',
    ukfRegistProtocol: `사용자는 반드시 선물투자에 대한 리스크를 충분히 인식하여야 합니다. 프로그램에서 제공하는 모든 데이터와 소식은 사용자 참고용으로만 제공하고 사용자가 진행한 투자조작의 직접적근거를 구성하지 않습니다. 사용자가 이에 의거한 조작 리스크는 자기가 책임을 져야 하고 본 프로그램은 어떠한 경제와 법적책임을 지지 않습니다. `,
    registSuccessTip: '등록 성공！',
    placeholder: {
      username: '귀하의 사용자이름을 입력하여 주세요',
      inviteCode: '귀하의 요청코드를 입력하여 주세요',
      password: '귀하의 등록 비밀번호를 입력하여 주세요',
      secondPassword: '귀하의 등록 비밀번호를 다시 입력하여 주세요',
      mobile: '귀하의 휴대폰번호를 입력하여 주세요',
      validateCode: '귀하의 메시지인증번호를 입력하여 주세요'
    }
  },
  // 비밀번호 분실 화면
  forgetPwdPage: {
    findByMobile: '휴대폰으로 찾기',
    findByEmail: '메일로 찾기',
    findPwdNow: '즉시 찾기',
    pwdFindedTip: '귀하의 비밀번호를 찾았습니다. 등록하여 주세요！',
    placeholder: {
      password: '새로운 비밀번호를 입력하여 주세요',
      rePwd: '새로운 비밀번호를 다시 입력하여 주세요'
    }
  },
  // 캐시백 홈
  accountBalancePage: {
    account: '계좌자산',
    globalRevenueRank: '글로벌 수익 순위',
    person: '인',
    globalTotalUser: '글로벌 총 사용자',
    liveNews: '실시간 동향',
    amountOfInvestment: '투자중 금액',
    howToGetIncomes: '어떻게 수익을 취득합니까?',
    investmentIncomeYesterday: '어제의 투자수익',
    invitedEarningsYesterday: '어제의 요청수익',
    contributionRevenueYesterday: '어제의 기여수익',
    reservation: '예약',
    myTeam: '우리 팀',
    totalNumberOfTeams: '단체 총 인원수',
    levelOneMembers: '1대회원 총 인원수',
    levelTwoMembers: '2대회원 총인원수',
    MemberOfMyDevelopment: '내가 발전한 회원'
  },
  // 나의 자산화면
  assetsPage: {
    account: '나의 자산',
    checkAccountBill: '명세서 보기',
    rechargeWithdrawRecord: '충전지출기록',
    placeholder: {
      rechargeId: '거래번호검색을 입력하여 주세요',
      futureName: '선물명을 선택하여 주세요',
      rewardTimeStart: '장려 발급시간 시점',
      rewardTimeEnd: '장려 발급 종점',
      investOrderId: '투자 오다ID ',
      investUserName: '투자자 이름',
      investOrderIdSearch: '투자오다 ID검색을 입력하여 주세요',
      timeStart: '시간 범위의 시점을 선택하여 주세요',
      timeEnd: '시간범위의 종점을 선택하여 주세요'
    },
    texid: 'txid',
    blockNumber: '블룩 레벨',
    investEarningDetail: '투자 수익 명세',
    inviteEarningDetail: '수익 명세 요청',
    contributionEarningDetail: '기여수익 명세',
    rewardId: '수익 번호',
    rewardDate: '수익일자',
    rewardRate: '일 수익율',
    earning: '수익',
    investVolume: '투자수량',
    investOrderId: '투자오다 ID',
    futureName: '선물 명칭',
    releaseTime: '발급시간',
    rewardLevel: '수익레벨 ',
    investUserName: '투자사용자이름',
    staticEarningRate: '정태수익율',
    releaseDate: '발급일자',
    userStarLevel: '사용자 스타 레벨',
  },
  // 투자관리 화면
  investManagementPage: {
    investManagement: '투자관리',
    placeholder: {
      futureNameSelect: '선물명칭을 선택하여 주세요',
      dateStart: '일자범위의 시점을 선택하여 주세요',
      dateEnd: '일자법위의 종점을 선택하여 주세요'
    },
    reservationId: '예약번호',
    futureName: '선물명칭',
    investAmount: '투자액',
    reservationTime: '예약시간',
  },
  // 의견 피드백 화면
  feedbackPage: {
    feedback: '의견 피드백',
    feedbackType: '피드백 유형',
    feedbackContent: '피드백 내역',
    realName: '실제 본명',
    contact: '연락방식',
    myMessageRecord: '나의 메세지기록',
    commitTime: '제출시간',
    replyTime: '답장시간',
    noMessage: '메시지가 없음！',
    feedbackDataCommitSuccessTip: '귀하의 피드백은 이미 성공 제출하였습니다. 조용히 회신을 기다려주세요.！',
    placeholder: {
      feedbackTypeSelect: '피드백유형을 선택하여 주세요',
      feedbackContentFill: '피드백 내역을 입력하여 주세요',
      realNameFill: '귀하의 실제 본명을 입력하여 주세요',
      contactFill: '귀하의 연락방식을 입력하여 주세요'
    }
  },
  // 안전설정 화면
  securitySettingPage: {
    securitySetting: '안전 설정',
    lastLoginTime: '최근 등록시간',
    lastLoginIp: '최근 등록 IP',
    sellPwdSetting: '거래 비밀번호 설정',
    gaCodeSetting: '구글 인증번호 설정',
    emailSetting: '메일 설정',
  },
  // 거래 비밀번호 설정
  sellPwdPage: {
    oldSellPwd: '기존 거래 비밀번호',
    newSellPwd: '새로운 거래 비밀번호 ',
    updateSellPwdTip: '거래비밀번호 수정 후 24시간내에는 거래가 제한됨을 알아주세요！ ',
    setSellPwd: '거래 비밀번호 설정',
    updateSellPwd: '거래 비밀번호 수정',
    setSellPwdSuccessTip: '거래 비밀번호 설정 성공！',
    updateSellPwdSuccessTip: '거래 비밀번호 수정 성공！'
  },
  // 거래 비밀번호 설정 화면
  setGaCodePage: {
    whatIsGaCode: '구글신원검증기는 하나의  일회성 비밀번호 공구로 동작원리는 메시지의 실시간검증과 유사합니다. 연동 된후 매 30s에 하나의 일회성 비밀번호를 생성하고 인증번호는 등록, 현금지출, 안전설정 수정 등 조작의 안전검증에 사용됩니다 ',
    stepText1: ' APP로딩',
    stepText2: 'QR코드 스캔',
    stepText3: '구글 인증번호 오픈',
    step1Operate: '구글 검증기 APP로딩 및 설치',
    iosDownApp: 'Apple사용자는"App Store"에서 "구글 검증기"를 검색하고 로딩 및 설치합니다 ；',
    androidDownApp: '안드로이드 사용자는 “응용시장App Store”에서 "구글 검증기"를 검색하고 로딩 및 설치합니다；',
    afterSetup: '설치완료후 "다음"버턴을 클릭하여 주세요 ',
    nextStep: '다음 ',
    prevSet: '이전',
    ste2Operate: '구글 검증기를 사용하여 이하 QR코드를 스캔합니다. ',
    canNotScanTip: '만약 귀하가 QR코드를 스캔 할수 없을 경우 이하의 16자리 암호키를 수동으로 구글 검증 APP에 입력 할수 있습니다. ',
    secretKeyPurposeExplain: '암호키는 휴대폰교체 혹은 분실 시 구글검증기를 되찾을시에 사용되므로 반드시 바인드전에 이하의 암호키를 백업 저장하여 주세요  ',
    enterDynamicCodeTip: '생성된 실시간 인증번호를 아래 입력란에 기입하여 주세요',
    secretKey: '암호키',
    deviceName: '설비 이름',
    confirmBind: '바인드 완성',
    gaCodeBindSuccessTip: '구글 검증기 바인드 성공！',
    secretKeyCopySuccessTip: '암호키 복사！',
    checkGaCode: '구글 검증기 보기',
    confirm: '제출'
  },
  // 바인드 메일 화면
  setEamilPage: {
    needBindEmail: '바인드 필요한 메일',
    emailPurposeExplain: '귀하는 검증이 통과된 메일로 안전검증을 할수 있습니다. ',
    updateEmailTip: '메일 수정후 24시간내에거래제한이 될것 임을 알아주세요！',
    emailBindSuccessTip: '메일 바인드 성공！',
    hasBindedEmail: '귀하의 메일은 이미 바인드상태로 메일바인드후 인증번호접수에 사용할수 있습니다 ',
    currentEmail: '현재 메일'
  },
  // 개인자료 화면
  userInfoPage: {
    userInfo: '사용자 자료',
    uploadAvatar: '프로필 사진 업로드',
    updateAvatar: ' 프로필 사진 수정',
    userName: '사용자 이름',
    nickName: '닉네임',
    updateNickName: '닉네임 수정',
    mobilePhone: '휴대폰번호',
    emailAddrses: '메일 주소',
    hasNotBindEmail: '귀하의 메일바인드가 안되어 있습니다  ',
    bindEmail: '바인드 메일',
    registTime: '등록시간',
    inviteCode: '나의 요청코드',
    nickNameRule: '닉네임은 반드시 2-12자리수의 자모、숫자、_의 조합이여야 합니다. ！',
    nickNameUpdateSuccessTip: '닉네임 수정 성공！',
    avatarUploadSuccess: '프로필사진 업로드 성공！',
    avatarUploadFaild: '프로필사진 업로드 실패！',
  },
  // 주소록 화면
  addressBookPage: {
    addresBook: '주소록',
    addAddress: '추가 주소',
    updateAddress: '수정 주소',
    name: '이름',
    address: '주소',
    delAddressTip: '주소삭제후 회복은 불가합니다, 귀하는 삭제할것을 확정합니까?',
    sellPWdErrorTip: '거래 비밀번호입력이 정확하지 않습니다',
    delAddressSuccess: '주소 삭제 성공！',
    updateAddressSuccess: '주소 수정 성공！',
    chooseAddress: '선택주소'
  },
  // 메세지센타 화면
  messagesPage: {
    title: '메세지센타',
    setReaded: '이미 읽음으로 표기'
  },
  // 우리 관련 화면
  aboutUsPage: {
    bannerText2: '디지털화폐거래위탁관리시스템',
    supervise: 'FAC최강 감독관리 자금세탁 반대/테러자금조달반대법',
    ukfGroup: `<p>
                UKF GROUP디지탈 화폐 선물 거래 위탁관리 시스템은Richard Holloway선생님이Coin Shares회사와 연합하여 창건한 하나의 종합 디지털 화폐 복리 이재、 인터넷 및 디지털화폐 선물거래 의 위탁관리 시스템 UKC GROUP입니다.  。
              </p>
              <br>
              <p>
                UKF GROUP회사본부는 영국 런던에 설립되어 등록자본총액은 5000만파운드에 도달하였고 글로벌로 10개를 초과하는 운영 센터와 지부를 가지고 있으며 글로벌범위내에서 근 천명에 달하는 전문거래인원과 백명을 초과하는 투자은행배경을 가진 고급분석사들을 받아 들였습니다. 암호디지털자산이 급속 증장 하는 최근 몇 년간에 UKF GROUP은 세계급의 금융감독 관리기구인 영국 FAC의 엄격한 감독관리 하에 유럽, 북미의 고객들로 하여금 고액보상의 암호화폐 이재서비스를 실현하고 전통외환시장에 대한 풍부한 실제 조작경험 및 엄밀한 분석기술의 도움 하에 정확히 BTC와 ETH및 여러 개의 주류 암호화폐의 발전추세를 정확히 파악하여 글로벌고객으로 하여금 두둑한 보상과 수익을 취득함으로 업계에서 암호화폐시장에서 저격수라는 명예를 보유하였습니다.    。
              </p>`,
    coinShares: `<p>CoinShares글로벌 첫번째를 대표합니다：</p>
              <p>관제 하의 비트코인 헤지펀드（GABI），비트코인거래소거래수표 （COINXBT와COINXBE），</p>
              <p>이더리움거래소 거래수표（COINETH와COINETHE）및 이더리움화폐의 가격 계산 펀드 （CS Fund 1）。</p>
              <p>
    10억불을 초과하는 자산관리규모를 보유하고 있는 하나의 고성장 암호금융회사로서 CoinShares는 블록체인과 암호화폐영역의 개발금융해결방안 방면에서 리드의 지위를 보유하고 있습니다. 。
              </p>`,
    mission: '使命미션',
    missionContent: `<p>UKF GROUP은 전문직의 기술단체를 통하여 글로벌 투자고객에게 </p>
          <p>더욱 간편、더욱저렴한 자산관리서비스를 제공하고 거래운영효율을 현저히 향상함으로 더욱 높은 자산수익을 구동하고 있습니다。</p>`,
    valueConceptValue1: `<li>1.사용자 제일</li>
            <li>2.근면경업</li>
            <li>3.사명피달</li>` ,
    valueConceptValue2: `<li>4.적극 낙관</li>
            <li>5.앞으로 한보</li>
            <li>6.뒤로 한보 </li>`,
    valueConceptText: '가치관',
    valueConceptExplain: `우리는 사용자의 수요 만족을 선결과제로 합니다. 우리는 정익구정, 열정, 고효율, 전심전력으로 하나하나의 일을 잘 완성하여 극치로 만듭니다. 우리는 적극적이고 쾌락한 심리상태를 유지하고 용감히 탐색하고 포옹협조함으로 고산출의 작업을 진행 할수 있고 장기적이고 높은 보상을 얻을수 있습니다. UKF GROUP에서 우리는 매일 유일무쌍의 가치를 창조하고 있습니다. 
`
  },
  //주소 추가 팝업창
  addAddressModal: {
    title: ' 새로 추가된 주소',
    name: '명칭',
    address: '상세 주소',
    addressAddSuccess: '주소 추가 성공！'
  },
  // 검증방식 전환 모듈
  changeVerifyTypeCom: {
    toggle: '검증방식 전환',
    canNotToggle: '전환 불가',
    justBindOne: '귀하는 현재 이미 하나의 검증방식이 연동되어 전환이 불가합니다 '
  },
  //해드 모듈
  headerCom: {
    assets: '자산',
    investment: '투자관리',
    customerService: '고객 서비스',
    helpCenter: '도움센타',
    legallyRelevant: '법률 관련',
    unReadMsg: '읽지 않은 소식',
    securitySettings: '안전설정',
    myProfile: '나의 자료',
    updatePwd: '비밀번호 수정'
  },
  //설정 팝업 창
  nodeSettingModal: {
    setNodeCaption: '예속노드설정',
    currentNode: '현재 노드 설정',
    inviteCodeRequired: '예속노드의 요청코드를 입력하여 주세요 ',
    nodeSetSuccess: '노드 설정 성공！',
    placeholder: {
      inviteCode: '상대방의 요청 코드를 입력하여 주세요'
    }
  },
  //전입 팝업창
  transferModal: {
    transferAddress: '전입주소',
    transferAddressCaption: '귀하의 USDT를 이하주소로 전입하여 주세요',
    transferAddressAttention: '주의:이주소는 USDT만 접수가능하고 기타주소로 전입시 다시 찾을수 없습니다.',
    addressTip: '이 주소는 이미 귀하의 계좌와 연동되어 반복사용이 가능합니다 ',
    copyAddress: '주소 복사',
    addressCopySuccess: ' 전송주소를 이미 복사하였습니다 ！'
  },
  //이송 팝업창
  transferOutModal: {
    assetsTransferOut: '자산 이송',
    transferOutCoin: '이송 화폐',
    oppositeAddress: '상대방 주소',
    checkAddressBook: '주소록 조회',
    transferOutVolume: '수량',
    transferVolumeRuleText1: '최소전출수량: ',
    transferVolumeRuleText2: '전출수량은 반드시',
    transferVolumeRuleText3: '의 정수배',
    actualGetted: '실제 소득 가능',
    allTransferOut: '전부 전출',
    waitText1: '귀하께서 좀더 대기하여 주세요',
    waitText2: '일후 전출 가능！',
    confirmTransferOut: '전출 확정',
    securityCheck: '안전 검증',
    transferOutSuccess: '전출 성공',
    remitteeAddress: '수금 주소',
    saveToAddressBook: '주소록에 저장',
    remarkContent: '비고내용',
    iKnow: '알겟습니다',
    placeholder: {
      transferOutCoinSelect: '전출되는 화폐종류를 선택하여 주세요',
      oppositeAddressFill: '상대방의 주소를 입력하여 주세요',
      transferVolumeFill: '전출 수량을 입력하여 주세요',
      remarkFill: '비고내역을 입력하여 주세요'
    }
  },
  //등록비밀번호 수정 팝업 창
  updatePwdModal: {
    title: '등록비밀번호수정',
    oldPassword: '기존비밀번호',
    newPassword: '새로운 비밀번호',
    updatePwdSuccess: '등록비밀번호 수정성공완료！'
  },
  //회원상세팝업창
  membersDetailModal: {
    membersDetail: '회원상세',
    investAmount: '투자금액',
    registTime: '등록시간',
    hisMembers: '그가 발전한 회원',
    level: '등급'
  },
  // 투자예약 팝업창
  reservationModal: {
    reservationInvest: '투자예약',
    futureName: '선물명칭',
    investAmount: '투자금액',
    minInvestAmount: '최소투자금액',
    reservationNow: '즉시 예약',
    reservationSuccess: '예약성공！'
  },
  // 세부상세 공고 팝업창
  announcementDetailModal: {
    title: '세부상세 공고 '
  }
};
