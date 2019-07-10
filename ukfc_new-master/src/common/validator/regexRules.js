import {Validator} from "vee-validate";

export const globalRules = {
  //pwd: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,        // 至少1个大写字母、1个小写字母、1个数字，且不包含特殊字符
  pwd: /\w{6,20}/,
  email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  mobile: /^\d+$/,                                                                      // 涉外国手机，至少1位的纯数字
  //
  inviteCode: /^[a-zA-Z0-9]{6}$/,                                                                // 邀请码，6位数字


  // TODO 用户名正则，还是有点问题
  username: /^(?![0-9]+$)(?![a-zA-Z]+$)[A-Za-z_][A-Za-z_0-9]{6,12}$/,                                                                       // 用户名，数字、字母、下划线任意两者组合，6-12位  （不允许数字开头，可用字母、数字开头）
};

export function initVee_validationRules() {

  // 验证账号规则
  Validator.extend('checkAccount', {
    getMessage() {
      //备注
      return '用户名或手机邮箱输入不正确！';
    },
    validate: value => {
      /* eslint-disable */
      const mailReg = globalRules.email;
      const mobileReg = globalRules.mobile;
      const usernameReg = globalRules.username;
      return (mailReg.test((value + "").trim()) || mobileReg.test((value + "").trim()) || usernameReg.test(String(value).trim()));
    }
  });

  // 验证手机号
  Validator.extend('checkMobile', {
    getMessage() {
      return '手机号输入不正确';
    },
    validate: value => {
      return globalRules.mobile.test(value);
    }
  });

  // 验证密码规则
  Validator.extend('checkPwd', {
    getMessage() {
      //备注
      return '密码输入不正确！';
    },
    validate: value => {
      /* eslint-disable */
      const pwdReg = globalRules.pwd;
      return pwdReg.test(String(value).trim());
    }
  });

  // 验证邀请码规则
  Validator.extend('checkInviteCode', {
    getMessage() {
      //备注
      return '邀请码输入不正确！';
    },
    validate: value => {
      /* eslint-disable */
      const inviteCodeReg = globalRules.inviteCode;
      return inviteCodeReg.test(String(value).trim());
    }
  });

  // 再次校验密码
  Validator.extend('checkRePwd', {
    getMessage() {
      return '两次密码输入不一致';
    },
    validate(value, preValue) {
      console.log('value', value, 'preValue', preValue);
      return value === preValue[0];
    }
  });

  // 校验数字
  Validator.extend('number1', {
    getMessage() {
      return '数字输入不正确';
    },
    validate(value){
      return !isNaN(value * 1);
    }
  });

  /**
   * 验证谷歌验证码
   */
  Validator.extend('gaCode', {
    getMessage: () => '谷歌验证码不合法',
    validate: value => /^\d{6}$/.test(value)
  });

  /**
   * 验证码
   */
  Validator.extend('validateCode', {
    getMessage: () => '验证码不合法',
    validate: value => /^\d{6}$/.test(value)
  });

}
