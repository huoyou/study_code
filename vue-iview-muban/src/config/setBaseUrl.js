let baseUrl = '';
let url = document.domain;
switch(url) {
  case 'localhost':
    // baseUrl = 'http://localhost:8080/' // 本地环境
    baseUrl = 'http://192.168.1.123:8012/' // 回归测试环境
    break
  case '192.168.1.117':
    baseUrl = 'http://rm.ufscs.com:8087/' // 正式环境
    break
  case '192.168.1.118':
    baseUrl = 'http://rm.ufscs.com:8087/' // 正式环境
    break
  case '192.168.1.116':
    baseUrl = 'http://192.168.1.115:8087/' // 正式环境
    break
  case '192.168.1.115':
    baseUrl = 'http://192.168.1.115:8087/' // 测试环境
    break
  case '192.168.1.123':
    baseUrl = 'http://192.168.1.123:8012/' // 回归测试环境
    break
  case '192.168.1.141':
    baseUrl = 'http://192.168.1.141:8012/' // 回归测试环境
    break
  default :
    break
}
export default baseUrl
