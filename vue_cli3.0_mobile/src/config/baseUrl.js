let baseUrl = '';
let url = document.domain;
switch(url) {
  case 'localhost':
    baseUrl = 'http://192.168.4.78:8081' // 陈银环境
    break
  default :
    baseUrl = 'http://192.168.4.78:8081' // 本地环境
    break
}
export default baseUrl