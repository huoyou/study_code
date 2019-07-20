import dayjs from 'dayjs';

/**
 * 格式化时间戳（秒|毫秒）
 * @param {timestamp} value
 */
const $timeFilter = (value) => {
    value = value.toString();
    if (value) {
        if (value.length === 13) {
            return dayjs(Number(value)).format("YYYY-MM-DD HH:mm:ss");
        }
        return dayjs.unix(Number(value)).format("YYYY-MM-DD HH:mm:ss");
    } else {
        return '-';
    }
}
/**
 * 格式化手机号
 * 如：
 * formatPhone("12345678910", "start") => ****5678910
 * formatPhone("12345678910", "center") => 123****8910
 * formatPhone("12345678910", "end") => 1234567****
 * @param phone 手机号
 * @param format 格式，可选值有：start、center、end
 * @param count 格式化多少个字符，默认4个
 * @returns {string}
 */
const $formatPhone = (phone, format = 'center', count = 4) =>{
    phone = phone + "";
    let len = phone.length,
      arr = phone.split(""),
      start = 0,
      end = 0,
      replacement = "***********************";
    if(typeof format === 'undefined'){
      format = 'center';
    }
    if(format === "start"){
      if(typeof count == "undefined"){
        count = 4;
      }
      arr.splice(0, count, replacement.substr(0, count));
      return arr.join("");
    }
    if(format === "center"){
      if(typeof count == "undefined"){
        count = 4;
      }
      start = Math.floor((len - count) / 2);
      end = count;
      arr.splice(start, end, replacement.substr(0, count));
      return arr.join("");
    }
    if(format === "end"){
      if(typeof count == "undefined"){
        count = 4;
      }
      arr.splice(len - count, len, replacement.substr(0, count));
      return arr.join("");
    }
  };
  
  /**
   * 格式化邮箱
   * 如：
   formatEmail("123456789@qq.com") => 12*****89@qq.com
   formatEmail("abc@qq.com") => a*c@qq.com
   formatEmail("abc123@qq.com") => a*****@qq.com
   formatEmail("abc12@qq.com") => a***2@qq.com
   formatEmail("a@qq.com") => *@qq.com
   * @param email 邮箱
   * @param maxCount 最大截取长度，默认5
   */
  const $formatEmail = (email, maxCount) => {
    let emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!email || !emailReg.test(email)){
      return email;
    }
    if(typeof maxCount == "string" || maxCount <= 0){
      maxCount = 5;
    }
    let emailLeft = email.split("@")[0],
      emailRight = email.split("@")[1],
      leftResult = "",
      emailLeftLen = emailLeft.length;
    if(emailLeftLen == 1){
      leftResult = "*";
    }else{
      /* 如果邮箱名长度小于等于最大截取长度，则只留第一个及最后一个字符。效果：abcd@123.com => a**d@123.com*/
      if(emailLeftLen <= maxCount){
        let len = emailLeftLen;
        while (len > 0){
          leftResult += "*";
          len--;
        }
        leftResult = leftResult.split("");
  
        leftResult[0] = emailLeft.charAt(0);
        leftResult[emailLeftLen - 1] = emailLeft.charAt(emailLeftLen - 1);
      }else{
        /* 如果邮箱名长度大于最大截取长度，则将邮箱名中间的替换成"*" */
        let startIndex = Math.ceil((emailLeftLen - maxCount) / 2),
          endIndex = startIndex + maxCount;
        leftResult = emailLeft.split("");
  
        if(endIndex > emailLeftLen){
          endIndex = emailLeftLen - 1;
        }
        for(; startIndex < endIndex; startIndex++){
          leftResult[startIndex] = "*";
        }
      }
      leftResult = leftResult.join("");
    }
    return leftResult + "@" + emailRight;
  };


/**
 * 4位一空格（格式化银行卡）
 * @param {String} val
 */
const $formatBank = (val) => {
    if (val) {
        return val.toString().replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
    }
};

/**
 * 千分位格式化
 * @param {数字} val
 */
const $toThousands = (val) => {
    let num = (val || 0).toString(),
        result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        result = num + result;
    }
    return result;
}

/**
 * 格式化小数位
 * @param val 传入的值
 * @param pos 保留的小数位
 * @returns {*}
 */
const $formatFloat = (val, pos = 2) => {
    let f = parseFloat(val);
    if (isNaN(f)) {
        return false;
    }
    f = Math.round(val * Math.pow(10, pos)) / Math.pow(10, pos); // pow 幂
    let s = f.toString();
    let rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + pos) {
        s += '0';
    }
    return s;
}

/**
 * 格式化时长
 * @param second
 * @returns {string}
 */
const $realFormatSecond = (second) => {
    let secondType = typeof second;

    if (secondType === 'number' || secondType === 'string') {
        second = parseInt(second);

        let hours = Math.floor(second / 3600);
        second = second - hours * 3600;
        let mimute = Math.floor(second / 60);
        second = second - mimute * 60;

        return hours + ':' + ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
    } else {
        return '0:00:00'
    }
};

/**
 * 首字母大写
 * @param str
 * @returns {string}
 */
export const $fistLetterUpper = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
* 过滤非法字符串
*/
export const $illegalFilter = (str) => {
  let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
  let regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

  if (regEn.test(str) || regCn.test(str)) return false;
  return true;
};
export default {
    $timeFilter,
    $formatPhone,
    $formatEmail,
    $formatBank,
    $toThousands,
    $formatFloat,
    $realFormatSecond,
    $fistLetterUpper,
    $illegalFilter
}