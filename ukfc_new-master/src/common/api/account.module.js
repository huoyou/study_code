//import axios from "axios";
import {request} from "./request";
import md5 from 'js-md5';

export const accountApi = {
  // 注册
  regist(data, geetestData) {
    const _data = {
      ...data,
      password: md5(data.password),
    };
    const _headers = {
      ...geetestData
    };
    return request({
      url: '/v2/w/register',
      method: 'post',
      data: _data,
      headers: _headers,
    })
  },
  // 登录
  login(data, geetestData) {
    const _data = {
      ...data,
      password: md5(data.password),
    };
    const _headers = {
      ...geetestData
    };
    return request({
      url: '/v2/w/login',
      method: 'post',
      data: _data,
      headers: _headers,
    })
  },
  // 忘记密码
  forgetPwd(form){
    let data = {
      ...form
    };
    data.password = md5(data.password);
    return request.post('/v2/w/user/security/forgotPassword', data);
  }
};
