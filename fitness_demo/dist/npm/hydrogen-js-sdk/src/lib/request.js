// const Bmob = require('./bmob.js')
const utils = require('./utils.js')

let request
// 获取当前应用类型
const type = utils.getAppType()
// h5
if (type === 'h5') {
  request = require('./axiosRequest.js')
} else if (type === 'wx') {
  // 小程序
  request = require('./wxRequest.js')
} else if (type === 'hap') {
  // 快应用功能
  request = require('./hapRequest.js')
} else if (type === 'nodejs') {
  // 快应用功能
  request = require('./axiosRequest.js')
}

module.exports = request
