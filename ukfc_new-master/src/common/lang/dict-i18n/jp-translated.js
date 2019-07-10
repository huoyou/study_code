export const zhCN = {
  /* 全てのドロップダウンボックスと様々なステータス値はここに格納されます */
  selectOption: {
    YesOrNo: {
      1: 'はい',
      0: 'いいえ',
    },
    investWithdrawStatus: {
      1: '引き出しました',
      0: '引き出していません',
    },
    investStatus: {
      1: '期限が切れていません',
      2: '期限が切れました',
    },
    rechargeRecordStatus: {
      0: '確認待ち',
      1: '成功',
      2: '失敗',
    },
    withdrawRecordStatus: {
      0: '審査中',
      1: '成功',
      2: '拒否',
      3: '取り消し',
      4: '審査に合格しました',
      5: 'ゲーム用通貨を取得しています',
      6: 'ウォレットは異常です。審査中です',
    },
    // 投資予約ステータス
    reservationInvestStatus: {
      0: '審査待ち',
      1: '審査に合格しました',
      2: '審査が拒否されました',
      3: '終了しました'
    },
    // 検証コード送信方式に対応するテキスト説明
    verifyTypeText: {
      email: 'メールアドレス検証コード',
      mobile: '携帯電話検証コード',
      gaCode: 'Google検証コード'
    },
    // 星級
    starLevel: {
      1: '一つ星',
      2: '二つ星',
      3: '三つ星',
      4: '四つ星',
      5: '五つ星',
      6: '六つ星',
      7: '株主'
    }
  },
  /* 通用翻訳 */
  common: {
    login: 'ログイン',
    regist: '登録',
    logout: '登録',
    forgetPwd: 'パスワードを忘れました',
    findPwd: 'パスワード取得',
    confirm: 'OK',
    cancel: 'キャンセル',
    submit: '送信',
    warmPrompt: 'お知らせ',
    errorPrompt: '間違ったヒント',
    operatePrompt: '操作ヒント',
    aboutUs: '会社概要',
    transfer: '転入',
    transferOut: '転出',
    addressBook: 'アドレス帳',
    noData: 'データなし~',
    dataLoading: 'データ読み込み中...',
    yieldRate: '収益率',
    earning: '収益',
    search: '検索',
    earningDetail: '収益明細',
    rechargeRecord: 'リチャージ記録',
    withdrawRecord: '引き出し記録',
    rechargeId: '取引番号',
    coinId: '通貨',
    rechargeVolume: 'リチャージ数',
    status: 'ステータス',
    rechargeTime: '取引時間',
    receiveAddress: '記帳アドレス',
    transferAddress: '支出アドレス',
    withdrawVolume: '引き出し数',
    fee: '手数料',
    all: '全て',
    summation: '合計',
    authTime: '審査時間',
    confirmCommit: '送信を確定します',
    validateCode: '検証コード',
    sellPwd: '取引パスワード',
    confirmPwd: 'パスワード確認',
    pwdRule: 'パスワードは6-20桁の英数字の任意の組み合わせです！',
    sellPwdRule: '',
    copy: 'コピー',
    copySuccess: 'コピーに成功しました！',
    gaCode: 'Google検証コード',
    mobileVerifyCode: '携帯電話検証コード',
    emailVerifyCode: 'メールアドレス検証コード',
    sendVerifyCode: '検証コードを送信',
    timeRemaining: '{time}秒後に再送信',
    reSend: '再送信',
    verifySendSuccess: '検証コードを成功に送信しました',
    operate: '操作',
    home: 'ホーム',
    remark: '備考',
    update: '修正',
    delete: '削除',
    announcement: 'システム公告',
    close: '閉じる',
    readed: '既読',
    unRead: '未読',
    checkAll: '全てを表示',
    checkDetail: '詳細を表示',
    optional: 'オプション',
    choose: '選択',
    cancelChoose: '選択解除',
    more: 'もっと',
    nodeSettings: 'ノード設定',
    userName: 'ユーザー名',
    mobile: '携帯電話番号',
    email: 'メールアドレス',
    toggleLang: '言語切り替え',
    balance: '残高'
  },
  /* placeholder 通用 */
  placeholder: {
    email: 'メールアドレスを入力してください',
    mobile: '携帯電話番号を入力してください',
    validateCode: '検証コードを入力してください',
    selectCoin: '通貨を選択してください',
    gaCode: 'Google検証コードを入力してください',
    sellPwd: '取引パスワードを入力してください'
  },
// ログインページ
  loginPage: {
    placeholder: {
      username: 'ユーザー名を入力してください',
      password: 'ログインパスワードを入力してください'
    },
    loginNow: '今すぐログイン'
  },
// 登録ページ
  registPage: {
    registNow: '今すぐ登録',
    goPrevStep: '前のステップに戻る',
    serviceClause: '利用規約',
    privacyProtect: 'プライバシー保護',
    readedAndAccept: '読んで同意します',
    usdProtocol: 'USDユーザー契約',
    ukfRegistProtocol: `ユーザーは、先物投資のリスクを十分に認識する必要があります。プラットホームで提供された全てのデータや情報は、ユーザーの参考用であり、ユーザーの投資操作の直接的な根拠となるものではありません。ユーザーはそれに従って操作すれば、自らリスクを負担します。プラットホームは、経済責任、法的責任を負いません。`,
    registSuccessTip: '成功に登録しました！',
    placeholder: {
      username: 'ユーザー名を入力してください',
      inviteCode: '招待コードを入力してください',
      password: 'ログインパスワードを入力してください',
      secondPassword: 'もう一度ログインパスワードを入力してください',
      mobile: '携帯電話番号を入力してください',
      validateCode: 'SMS検証コードを入力してください'
    }
  },
//パスワードを忘れたページ
  forgetPwdPage: {
    findByMobile: '携帯電話でパスワードを取得します',
    findByEmail: 'メールアドレスでパスワードを取得します',
    findPwdNow: '今すぐ取得します',
    pwdFindedTip: 'パスワードを取得しました。ログインしてください！',
    placeholder: {
      password: '新しいパスワードを入力してください',
      rePwd: 'もう一度新しいパスワードを入力してください'
    }
  },
// ウォレットホーム
  accountBalancePage: {
    account: 'アカウント資産',
    globalRevenueRank: 'グローバル収益ランキング',
    person: '人',
    globalTotalUser: 'グローバルトータルユーザー',
    liveNews: 'リアルタイム動向',
    amountOfInvestment: '投資金額',
    howToGetIncomes: '収益取得方法',
    investmentIncomeYesterday: '昨日の投資収益',
    invitedEarningsYesterday: '昨日の招待収益',
    contributionRevenueYesterday: '昨日の貢献収益',
    reservation: '予約',
    myTeam: '私のチーム',
    totalNumberOfTeams: 'チーム総人数',
    levelOneMembers: '第一世代会員総人数',
    levelTwoMembers: '第二世代会員総人数',
    MemberOfMyDevelopment: '私が開発した会員'
  },
// 私の資産ページ
  assetsPage: {
    account: '私の資産',
    checkAccountBill: '請求書を見る',
    rechargeWithdrawRecord: 'リチャージ、引き出し記録',
    placeholder: {
      rechargeId: '取引番号を入力して検索します',
      futureName: '先物名を選択してください',
      rewardTimeStart: '奨励金支給時間起点',
      rewardTimeEnd: '奨励金支給時間終点',
      investOrderId: '投資注文ID',
      investUserName: '投資家氏名',
      investOrderIdSearch: '投資注文IDを入力して検索します',
      timeStart: '時間範囲起点を選択してください',
      timeEnd: '時間範囲終点を選択してください'
    },
    texid: 'txid',
    blockNumber: 'ブロック高さ',
    investEarningDetail: '投資収益明細',
    inviteEarningDetail: '招待収益明細',
    contributionEarningDetail: '貢献収益明細',
    rewardId: '収益番号',
    rewardDate: '収益日',
    rewardRate: '1日の収益率',
    earning: '収益',
    investVolume: '投資数',
    investOrderId: '投資注文ID',
    futureName: '先物名',
    releaseTime: '支給時間',
    rewardLevel: '収益代数',
    investUserName: '投資ユーザー名',
    staticEarningRate: '静的収益率',
    releaseDate: '支給日',
    userStarLevel: 'ユーザー星級',
  },
// 投資管理ページ
  investManagementPage: {
    investManagement: '投資管理',
    placeholder: {
      futureNameSelect: '先物名を選択してください',
      dateStart: '日付範囲起点を選択してください',
      dateEnd: '日付範囲終点を選択してください'
    },
    reservationId: '予約番号',
    futureName: '先物名',
    investAmount: '投資額',
    reservationTime: '予約時間',
  },
// フィードバックページ
  feedbackPage: {
    feedback: 'フィードバック',
    feedbackType: 'フィードバックタイプ',
    feedbackContent: 'フィードバック内容',
    realName: '本名',
    contact: '連絡先',
    myMessageRecord: '私のメッセージレコード',
    commitTime: '送信日時',
    replyTime: '返信日時',
    noMessage: 'メッセージがありません！',
    feedbackDataCommitSuccessTip: 'あなたのフィードバックは成功に送信されました。返信をお待ちください！',
    placeholder: {
      feedbackTypeSelect: 'フィードバックタイプを選択してください',
      feedbackContentFill: 'フィードバック内容を入力してください',
      realNameFill: 'あなたの本名を入力してください',
      contactFill: '連絡先を入力してください'
    }
  },
// セキュリティ設定ページ
  securitySettingPage: {
    securitySetting: 'セキュリティ設定',
    lastLoginTime: '最近のログイン日時',
    lastLoginIp: '最近のログインIP',
    sellPwdSetting: '取引パスワード設定',
    gaCodeSetting: 'Google検証コード設定',
    emailSetting: 'メールアドレス設定',
  },
// 簡単パスワード設定ページ
  sellPwdPage: {
    oldSellPwd: '元の取引パスワード',
    newSellPwd: '新しい取引パスワード',
    updateSellPwdTip: '取引パスワードが変更された後の24時間以内に、取引が制限されます。ご了承ください！',
    setSellPwd: '取引パスワードを設定',
    updateSellPwd: '取引パスワードを変更',
    setSellPwdSuccessTip: '取引パスワードが成功に設定されました！',
    updateSellPwdSuccessTip: '取引パスワードが成功に変更されました！'
  },
//取引パスワード設定ページ
  setGaCodePage: {
    whatIsGaCode: 'Googleオーセンティケータは動的パスワードツールです。動作原理はSMS動的検証と類似します。バインドした後、30秒毎に動的検証コードが生成されます。検証コードは、ログイン、引き出し、セキュリティ設定変更など操作のセキュリティ検証に使用されます。',
    stepText1: 'APPダウンロード',
    stepText2: 'QRコードをスキャン',
    stepText3: 'Google検証コードをあく',
    step1Operate: 'GoogleオーセンティケータAPPをダウンロードしてインストールします',
    iosDownApp: 'Appleユーザーは"App Store"で"Googleオーセンティケータ"を検索し、ダウンロードしてインストールします；',
    androidDownApp: 'アンドロイドユーザーは"アプリストア"で"Googleオーセンティケータ"を検索し、ダウンロードしてインストールします；',
    afterSetup: 'インストールが完了したら、"次へ"ボタンをクリックしてください',
    nextStep: '次へ',
    prevSet: '前へ',
    ste2Operate: ' Googleオーセンティケータを使用して以下のQRコードをスキャンします',
    canNotScanTip: 'QRコードをスキャンできない場合、以下の16桁の暗号鍵を手動でGoogle検証APPに入力できます',
    secretKeyPurposeExplain: '暗号鍵は、携帯電話が交換されたり紛失したりした時にGoogleオーセンティケータを取得するために使用されます。バインドする前に以下の暗号鍵をバックアップして保存してください',
    enterDynamicCodeTip: '生成された動的検証コードを次の入力ボックスに入力してください',
    secretKey: '暗号鍵',
    deviceName: 'デバイス名',
    confirmBind: 'バインド完了',
    gaCodeBindSuccessTip: 'Googleオーセンティケータのバインドは成功しました！',
    secretKeyCopySuccessTip: '暗号鍵がコピーされました！',
    checkGaCode: 'Googleオーセンティケータの表示',
    confirm: '送信'
  },
// バインドメールアドレスページ
  setEamilPage: {
    needBindEmail: 'バインドするメールアドレス',
    emailPurposeExplain: '検証済みメールアドレスを使用してセキュリティ検証を行うことができます',
    updateEmailTip: 'メールアドレスを変更した後の24時間以内に、取引が制限されます。ご了承ください！',
    emailBindSuccessTip: 'メールアドレスバインドは成功しました！',
    hasBindedEmail: 'メールアドレスがバインドされました。メールアドレスはバインド後に検証コードの受信に使用できます',
    currentEmail: '現在のメールアドレス'
  },
// プロフィールページ
  userInfoPage: {
    userInfo: 'ユーザープロフィール',
    uploadAvatar: 'プロフィール写真をアップロード',
    updateAvatar: 'プロフィール写真を変更',
    userName: 'ユーザー名',
    nickName: 'ニックネーム',
    updateNickName: '昵名を変更',
    mobilePhone: '携帯電話番号',
    emailAddrses: 'メールアドレス',
    hasNotBindEmail: 'メールアドレスをバインドしていません',
    bindEmail: 'メールアドレスをバインド',
    registTime: '登録日時',
    inviteCode: '私の招待コード',
    nickNameRule: 'ニックネームは2-12桁の英数字の組み合わせです！',
    nickNameUpdateSuccessTip: 'ニックネーム変更に成功しました！',
    avatarUploadSuccess: 'プロフィール写真のアップロードに成功しました！',
    avatarUploadFaild: 'プロフィール写真のアップロードに失敗しました！',
  },
// アドレス帳ページ
  addressBookPage: {
    addresBook: 'アドレス帳',
    addAddress: 'アドレスを追加',
    updateAddress: 'アドレスを変更',
    name: '名称',
    address: 'アドレス',
    delAddressTip: 'アドレスを削除した後、回復できません。削除してもよろしいですか?',
    sellPWdErrorTip: '取引パスワードの入力が正しくありません',
    delAddressSuccess: 'アドレス削除に成功しました！',
    updateAddressSuccess: 'アドレス変更に成功しました！',
    chooseAddress: 'アドレス選択'
  },
// メッセージセンターページ
  messagesPage: {
    title: 'メッセージセンター',
    setReaded: '既読として標識しました'
  },
// 会社概要ページ
  aboutUsPage: {
    bannerText2: 'デジタル通貨先物取引ホスティングシステム',
    supervise: 'FCAの最強規制 　マネーロンダリング防止/テロ対策融資法を遵守',
    ukfGroup: `<p>
                UKF GROUPデジタル通貨先物取引ホスティングシステムは、Richard Holloway とCoin Shares社が創設した、デジタル通貨複利資産運用、
                インターネット及びデジタル通貨先物取引を一体化した取引ホスティングプラットホームです。
              </p>
              <br>
              <p>
                UKF GROUPは英国のロンドンに本社を置き、登録資本総額が5000万ポンドに達し、世界中に10以上の運営センターと支社を持ち、世界中にほぼ1000人のプロのトレーダー
                及び投資銀行の経歴を持つ100人以上の上級アナリストを雇用しています。暗号化デジタル資産が急速に成長した近年では、UKF GROUPは、世界トップの金融規制当局の英国FACの厳格な監督を受け、ヨーロッパ、
                北米のお客様に高収益の暗号化通貨財テクサービスを提供し、伝統的な外国為替市場での豊富な実務経験及び謹厳な分析技術により、BTC、ETH及び複数の
                主流暗号化通貨の発展動向を正確に把握し、世界中の顧客に大きな収益をもたらし、業界内で暗号化通貨市場の「スナイパー」と呼ばれていました。
              </p>`,
    coinShares: `<p>CoinSharesは世界初の：</p>
              <p>規制されるビットコインヘッジファンド（GABI）、ビットコイン取引所の取引伝票（COINXBTとCOINXBE）、</p>
              <p>イーサネット取引所の取引伝票（COINETHとCOINETHE）及びイーサネット通貨で価格を決めるファンド（CS Fund 1）を代表します。</p>
              <p>
                10億ドルの資産管理規模を超える高成長の暗号化金融会社として、CoinSharesはブロックチェーンと暗号化通貨分野での金融ソリューション開発のリーダーです。
              </p>`,
    mission: 'ミッション',
    missionContent: `<p>UKF GROUPは、プロの技術チームを通じて、世界中の投資家に対して</p>
          <p>より便利で、より低いコストの資産管理サービスを提供し、取引効率を大幅に向上させ、より高い資産収益を促進します。</p>`,
    valueConceptValue1: `<li>1.ユーザー本位</li>
            <li>2.勤勉で責任感があります</li>
            <li>3.ミッションを達成します</li>`,
    valueConceptValue2: `<li>4.積極的、楽観的です</li>
            <li>5.一歩前進</li>
            <li>6.一歩後退</li>`,
    valueConceptText: '価値観',
    valueConceptExplain: `当方は、ユーザーニーズを満たすことを最優先事項とします。当方は、絶えず進歩を求め、激情を持ち、効率的で、全力を尽くし、究極を達成します。当方は、積極的で前向きな気持ちを維持し、勇敢に探索し、
          互いに支援し、高い生産性で働き、より高い長期収益を取得します。UKF GROUPでは、当方は毎日にユニークな価値を作っています。`
  },
// アドレス追加のポップアップ
  addAddressModal: {
    title: 'アドレス追加',
    name: '名称',
    address: 'アドレス詳細',
    addressAddSuccess: 'アドレスは成功に追加されました！'
  },
// 検証方法切り替えコンポーネント
  changeVerifyTypeCom: {
    toggle: '検証方法の切り替え',
    canNotToggle: '切り替えることができません',
    justBindOne: '一つの検証方法しかバインドしませんでした。切り替えることができません'
  },
// ヘッドコンポーネント
  headerCom: {
    assets: '資産',
    investment: '投資管理',
    customerService: 'カスタマーサービス',
    helpCenter: 'ヘルプセンター',
    legallyRelevant: '法律関連',
    unReadMsg: '未読メッセージ',
    securitySettings: 'セキュリティ設定',
    myProfile: '私のプロフィール',
    updatePwd: 'パスワード変更'
  },
// ノード設定ポップアップ
  nodeSettingModal: {
    setNodeCaption: 'アタッチメントノードを設定',
    currentNode: '現在のアタッチメントノード',
    inviteCodeRequired: 'アタッチメントノードの招待コードを入力してください',
    nodeSetSuccess: 'ノード設定に成功しました！',
    placeholder: {
      inviteCode: '相手の招待コードを入力してください'
    }
  },
// 転入ポップアップ
  transferModal: {
    transferAddress: '転入アドレス',
    transferAddressCaption: 'USDTを以下のアドレスに転入してください',
    transferAddressAttention: '注意：このアドレスはUSDTしか受信しません。他のアドレスに転入する場合、取得できません',
    addressTip: 'このアドレスはあなたのアカウントとバインドしました。重複使用できます',
    copyAddress: 'コピーアドレス',
    addressCopySuccess: '転送アドレスがコピーされました！'
  },
// 転出ポップアップ
  transferOutModal: {
    assetsTransferOut: '資産転出',
    transferOutCoin: '転出通貨',
    oppositeAddress: '相手アドレス',
    checkAddressBook: 'アドレス帳を見る',
    transferOutVolume: '転出数',
    transferVolumeRuleText1: '最小転出数: ',
    transferVolumeRuleText2: '転出数が',
    transferVolumeRuleText3: 'の整数倍である必要があります',
    actualGetted: '実際に取得可能',
    allTransferOut: '全て転出',
    waitText1: '転出するには',
    waitText2: '　日間待ってください！',
    confirmTransferOut: '転出を確認',
    securityCheck: 'セキュリティ検証',
    transferOutSuccess: '転出に成功しました',
    remitteeAddress: '受取アドレス',
    saveToAddressBook: 'アドレス帳に保存',
    remarkContent: '備考内容',
    iKnow: '分かりました',
    placeholder: {
      transferOutCoinSelect: '転出通貨を選択してください',
      oppositeAddressFill: '相手アドレスを入力してください',
      transferVolumeFill: '転出数を入力してください',
      remarkFill: '備考内容を入力してください'
    }
  },
//ログインパスワード変更ポップアップ
  updatePwdModal: {
    title: 'ログインパスワードを変更',
    oldPassword: '元のログインパスワード',
    newPassword: '新しいパスワード',
    updatePwdSuccess: 'ログインパスワード変更に成功しました！'
  },
// 会員詳細ポップアップ
  membersDetailModal: {
    membersDetail: '会員詳細',
    investAmount: '投資金額',
    registTime: '登録日時',
    hisMembers: '開発した会員',
    level: '等級'
  },
// 予約投資ポップアップ
  reservationModal: {
    reservationInvest: '予約投資',
    futureName: '先物名',
    investAmount: '投資金額',
    minInvestAmount: '最小投資金額',
    reservationNow: '今すぐ予約',
    reservationSuccess: '予約に成功しました！'
  },
// 公告詳細ポップアップ
  announcementDetailModal: {
    title: '公告詳細'
  }
};

