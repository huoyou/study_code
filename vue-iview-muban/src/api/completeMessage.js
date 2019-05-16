import axios from '@/libs/api.request'

// 纯物流业务新增
export const logisticsAdd = params => {
  return axios.request({
    url: '/api/rmApplicationBasicInfo/pureLogisticsAdd',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// 完善客户资料-自营出口（自产）
export const export1 = params => {
  return axios.request({
    url: '/api/rmCompleteCustomer/supplierCustomerProduction',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
// 完善客户资料-自营出口（委外加工厂）
export const export2 = params => {
  return axios.request({
    url: '/api/rmCompleteCustomer/supplierCustomerPlant',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}


// 客户待办列表
export const waitManagerList = params => {
  return axios.request({
    url: '/api/rmCompleteCustomer/waitManagerList',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}


// 进口（控票、预付及垫付税款50万以内）
export const importLessthan50 = params => {
  return axios.request({
    url: '/api/rmApplicationBasicInfo/importFifty',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// 进口（控票、预付及垫付税款 > 50万 200 以内）
export const importLessthan200 = params => {
  return axios.request({
    url: '/api/rmApplicationBasicInfo/importMoretheFifty',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// 根据业务申请id获取暂存信息
export const getStorageById = params => {
  return axios.request({
    url: '/api/rmCompleteCustomer/waitManagerDetail',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}


