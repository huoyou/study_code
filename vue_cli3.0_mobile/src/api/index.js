import axios from 'axios'
import router from '@/router'
import { getStore, removeStore } from '@/common/js/util'
import config from '@/config'

const service = axios.create({
  // 设置超时时间
  timeout: 6000,
  baseURL: config.apiUrl,
})
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// const defaultHeaders = {'Content-Type': 'application/x-www-form-urlencoded'};
/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
let loading = null;
service.interceptors.request.use(config => {
  // // 在请求先展示加载框
  // loading = Loading.service({
  //   text: '正在加载中......'
  // })
  const token = getStore('token');
  if (token) {
    config.headers['Authorization'] = token;
    config.headers['lang'] = 'zh_CN';
  }
  return config;
}, (error) => {
  return Promise.reject(error);
})
/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(response => {
  // 请求响应后关闭加载框
  // if (loading) {
  //   loading.close()
  // }

  const responseCode = response.status;
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
  // 否则的话抛出错误
  if (responseCode === 200) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response);
  }
}, error => {
  // 请求响应后关闭加载框
  //   if (loading) {
  //     loading.close()
  //   }
  // 断网 或者 请求超时 状态
  if (!error.response) {
    // 请求超时状态
    if (error.message.includes('timeout')) {
      console.log('超时了');
    } else {
      // 可以展示断网组件
      console.log('断网了');
    }
    return
  }
  // 服务器返回不是 2 开头的情况，会进入这个回调
  // 可以根据后端返回的状态码进行不同的操作
  const responseCode = error.response.status;

  switch (responseCode) {
    // 401：未登录
    case 401:
      // 跳转登录页
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
      break
    // 403: token过期
    case 403:
      // 弹出错误信息
      // 清除token
      removeStore('token');
      // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
      setTimeout(() => {
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }, 1000)
      break
    // 404请求不存在
    case 404:
      console.log(404);
      break
    // 其他错误，直接抛出错误提示
    default:
      break
  }
  return Promise.reject(error);
})

// export default service

// 定义对外Get、Post、File请求
export default {
  get(url, param = {}, headers = {}) {
    return service.get(url, {
      params: param,
      headers,
    })
  },
  post(url, param = null, headers = {}) {
    return service.post(url, param, {
      headers,
    })
  },
  put(url, param = null, headers = {}) {
    return service.put(url, param, {
      headers,
    })
  },
  file(url, param = null, headers = {}) {
    return service.post(url, param, {
      headers: Object.assign({
        'Content-Type': 'multipart/form-data'
      }, headers)
    })
  },
  delete(url, param = null, headers = {}) {
    return service.delete(url, {
      param,
      headers: Object.assign({
        'Content-Type': 'multipart/form-data'
      }, headers)
    })
  }
}

