var https = require("https");
var urlencode = require('urlencode');
//var qs = require('querystring');

function translate(word, lang) {
  /*var data = {
    "client": "t",
    "sl": 'zh-CN',
    "tl": lang,
    "hl": "zh-CN",
    "dt": "at",
    "dt": "bd",
    "dt": "ex",
    "dt": "ld",
    "dt": "md",
    "dt": "qca",
    "dt": "rw",
    "dt": "rm",
    "dt": "ss",
    "dt": "t",
    "ie": "UTF-8",
    "oe": "UTF-8",
    "source": "btn",
    "ssel": "0",
    "tsel": "0",
    "kc": "0",
    "tk": token(word),
    "q": word
  };*/
  var dataArr = [
    {"client": "webapp"},
    {"sl": 'zh-CN'},
    {"tl": lang},
    {"hl": "zh-CN"},
    {"dt": "at"},
    {"dt": "bd"},
    {"dt": "ex"},
    {"dt": "ld"},
    {"dt": "md"},
    {"dt": "qca"},
    {"dt": "rw"},
    {"dt": "rm"},
    {"dt": "ss"},
    {"dt": "t"},
    {"ie": "UTF-8"},
    {"oe": "UTF-8"},
    {"source": "btn"},
    {"ssel": "0"},
    {"tsel": "0"},
    {"kc": "0"},
    {"tk": token(word)},
    {"q": urlencode(word)}
  ];
  var paramStr = dataArr.reduce(function (res, item) {
    let key = Object.keys(item)[0];
    let value = Object.values(item)[0];
    //console.log(item)
    return res += key + '=' + value + '&';
  }, '');
  paramStr = paramStr.substr(0, paramStr.length - 1);
  var options = {
    hostname: 'translate.google.cn',
    port: 443,
    parth: '/translate_a/single' + '?' + paramStr,
    method: 'GET',
    header: {
    ':authority': 'translate.google.cn',
    ':method': 'GET',
    ':path': '/translate_a/single?client=webapp&sl=zh-CN&tl=zh-TW&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&otf=1&ssel=0&tsel=0&kc=1&tk=156578.327048&q=%E5%A4%A7%E5%B0%8F',
    ':scheme': 'https',
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,ko;q=0.6,ja;q=0.5,zh-TW;q=0.4',
    'cookie': '_ga=GA1.3.218848242.1557732963; NID=183=bNPRYdO5-MN3A4UUG5KlmsEc4HEOCalDZCXgD436IkmVqbOCk1GFr4Iw-X0wuNqjAdwO8CLfYplPCPlGtXCx8qPE0XLWj_F8VDQoWycplLgFpDjZ0p83wm--M4TVXRWMlHNYr8Np5Ik7KlHR-7VGey5Zg68ajHb70JJynEd25VE; _gid=GA1.3.1016028292.1561342885; 1P_JAR=2019-6-24-3',
    'referer': 'https://translate.google.cn/',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
    'x-client-data': 'CIS2yQEIo7bJAQjBtskBCNC3yQEIqZ3KAQioo8oBCLGnygEI4qjKAQjxqcoBCJatygEIxa3KAQifrsoB',
    }
  };

  console.log('paramStr',paramStr)

  var req = https.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  });
  req.on('error', function (e) {
    console.error('请求失败');
    console.error(e);
  });
  req.end();
}

translate('世界你好', 'ja-JP');

/**
 * 获取token，即tk值
 * @param a
 * @returns {string}
 */
function token(a) {
  var k = "";
  var b = 406644;
  var b1 = 3293161072;

  var jd = ".";
  var sb = "+-a^+6";
  var Zb = "+-3^+b+-f";

  for (var e = [], f = 0, g = 0; g < a.length; g++) {
    var m = a.charCodeAt(g);
    128 > m ? e[f++] = m : (2048 > m ? e[f++] = m >> 6 | 192 : (55296 == (m & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (m = 65536 + ((m & 1023) << 10) + (a.charCodeAt(++g) & 1023),
      e[f++] = m >> 18 | 240,
      e[f++] = m >> 12 & 63 | 128) : e[f++] = m >> 12 | 224,
      e[f++] = m >> 6 & 63 | 128),
      e[f++] = m & 63 | 128)
  }
  a = b;
  for (f = 0; f < e.length; f++)
    a += e[f],
      a = RL(a, sb);
  a = RL(a, Zb);
  a ^= b1 || 0;
  0 > a && (a = (a & 2147483647) + 2147483648);
  a %= 1E6;
  return a.toString() + jd + (a ^ b)
};

function RL(a, b) {
  var t = "a";
  var Yb = "+";
  for (var c = 0; c < b.length - 2; c += 3) {
    var d = b.charAt(c + 2),
      d = d >= t ? d.charCodeAt(0) - 87 : Number(d),
      d = b.charAt(c + 1) == Yb ? a >>> d: a << d;
    a = b.charAt(c) == Yb ? a + d & 4294967295 : a ^ d
  }
  return a
}
