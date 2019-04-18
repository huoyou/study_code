// const Bmob = require('./bmob.js')
const utils = require('./utils.js')

let storage
// //获取当前应用类型
const type = utils.getAppType()
// h5
if (type === 'h5') {
  storage = require('./webstorage.js')
} else if (type === 'wx') {
  // 小程序
  storage = require('./wxstorage.js')
} else if (type === 'hap') {
  storage = require('./hapStorage.js')
  // 快应用功能
} else if (type === 'nodejs') {
  // 快应用功能
  storage = require('./nodestorage.js')
}

module.exports = storage
