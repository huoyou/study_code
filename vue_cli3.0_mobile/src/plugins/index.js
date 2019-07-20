const isProduction = process.env.NODE_ENV === 'production';
const requirePlugin = require.context(
  // 当前plugins目录
  '/',
  // 是否查询其子目录
  false,
  // 匹配当前plugins目录下的js文件
  /.+\.js$/
)
requirePlugin.keys().forEach(fileName => {
  if (isProduction) {
    if (fileName !== './vconsole.js') {
      requirePlugin(fileName);
    }
  } else {
    requirePlugin(fileName);
  }
})
