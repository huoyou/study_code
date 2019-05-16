import axios from '@/libs/api.request'

/**
 * 查询用户信息
 */
export const queryUser = params => {
  return axios.request({
    // url: '/user/getuser',
    url: '/get_info',
    method: 'get',
    params: params
  })
}

/**
 * 根据当前登录用户查询客户基本信息
 */
export const queryMessage = params => {
  return axios.request({
    url: '/api/rmEnterpriseAssociated/getByUserIdAssociated',
    method: 'get',
    params: params
  })
}
// 登录
export const login = params => {
  return axios.request({
    url: '/sys/checkLogin',
    // url: '/sys/userLogin',
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

// 修改密码
export const modifyUser = params => {
  return axios.request({
    method: 'post',
    url: '/user/modifyUser',
    data: params, // 参数
    headers: {
      'Content-Type': 'application/json'
    }
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
