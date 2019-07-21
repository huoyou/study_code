let baseUrl = '';
let url = document.domain;
switch(url) {
  case 'localhost':
    baseUrl = 'http://192.168.4.98:8081' // 陈银环境
    break
  default :
    baseUrl = 'http://192.168.4.18:8081' // 本地环境
    break
}
export default baseUrl