import axios from '.'

//上传图片
export const uploadFile = params => {
  const res = axios.request({
    method: 'post',
    url: '/upload',
    data: params,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return res
}
/**
 * 查询用户信息
 */
export const queryUser = params => {
  return axios.request({
    url: '/api/user/getInterUser',
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
    url: '/api/user/queryAllUser',
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
    url: '/api/sys/userLogin',
    method: 'post',
    params: params
  })
}
// 登出
export const logout = params => {
  return axios.request({
    url: '/api/sys/logout',
    method: 'get',
    params: params
  })
}
/**
 * 查询用户对应的菜单
 */
export const getMenu = params => {
  return axios.request({
    url: '/api/user/getMenu',
    method: 'get',
    params: params
  })
}

/**
 * 获取权限信息
 */
export const testPessiom = params => {
  return axios.request({
    url: '/api/sys/testPessiom',
    method: 'get',
    params: params
  })
}