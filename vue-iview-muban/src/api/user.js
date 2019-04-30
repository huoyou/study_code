import axios from '@/libs/api.request'

/**
 * 查询用户信息
 */
export const queryUser = params => {
  return axios.request({
    url: '/user/getInterUser',
    //url: '/user/getuser',
    method: 'get',
    params: params
  })
}

/**
 * 查询系统所有用户
 */
export const queryAllUser = params => {
  return axios.request({
    method: 'post',
    url: '/user/queryAllUser',
    data: params, // 参数
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// 登录
export const login = params => {
  return axios.request({
    // url: '/sys/checkLogin',
    url: '/sys/userLogin',
    method: 'post',
    params: params
  })
}
// 登出
export const logout = params => {
  return axios.request({
    url: 'sys/logout',
    method: 'get',
    params: params
  })
}
/**
 * 查询用户对应的菜单
 */
export const getMenu = params => {
  return axios.request({
    url: '/user/getMenu',
    method: 'get',
    params: params
  })
}

/**
 * 获取权限信息
 */
export const testPessiom = params => {
  return axios.request({
    url: '/sys/testPessiom',
    method: 'get',
    params: params
  })
}


