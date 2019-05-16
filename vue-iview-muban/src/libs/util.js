import Cookies from 'js-cookie'
// cookie保存的天数
import config from '@/config'
import { forEach, hasOneOf, objEqual } from '@/libs/tools'

export const TOKEN_KEY = 'token'

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: config.cookieExpires || 1 })
  // Cookies.set(TOKEN_KEY, token, {expires: 8 / 24})
}

// 存储企业信息
export const setCompanyinfo = info => {
  localStorage.Companyinfo = JSON.stringify(info)
}
// 获取企业信息
export const getCompanyinfo = () => {
  const info = localStorage.Companyinfo
  return info ? JSON.parse(info) : {}
}
// 移除企业信息
export const removeCompanyinfo = () => {
  localStorage.Companyinfo = {}
  return localStorage.Companyinfo
}
/**
 * 权鉴
 * @param {*} name 即将跳转的路由name
 * @param {*} access 用户权限数组
 * @param {*} routes 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (name, access, routes) => {
  const routePermissionJudge = (list) => {
    return list.some(item => {
      if (item.children && item.children.length) {
        return routePermissionJudge(item.children)
      } else if (item.name === name) {
        return hasAccess(access, item)
      }
    })
  }

  return routePermissionJudge(routes)
}
export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const hasChild = (item) => {
  return item.children && item.children.length !== 0
}

const showThisMenuEle = (item, access) => {
  if (item.meta && item.meta.access && item.meta.access.length) {
    if (hasOneOf(item.meta.access, access)) return true
    else return false
  } else return true
}
/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list, access) => {
  let res = []
  forEach(list, item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }
      if ((hasChild(item) || (item.meta && item.meta.showAlways)) && showThisMenuEle(item, access)) {
        obj.children = getMenuByRouter(item.children, access)
      }
      if (item.meta && item.meta.href) obj.href = item.meta.href
      if (showThisMenuEle(item, access)) res.push(obj)
    }
  })
  return res
}

/**
 * @param {Array} routeMetched 当前路由metched
 * @returns {Array}
 */
export const getBreadCrumbList = (route, homeRoute) => {
  let homeItem = { ...homeRoute, icon: homeRoute.meta.icon }
  let routeMetched = route.matched
  console.log(111,routeMetched)
  if (routeMetched.some(item => item.name === homeRoute.name)) return [homeItem]
  let res = routeMetched.filter(item => {
    return item.meta === undefined || !item.meta.hideInBread
  }).map(item => {
    let meta = { ...item.meta }
    if (meta.title && typeof meta.title === 'function') {
      meta.__titleIsFunction__ = true
      meta.title = meta.title(route)
    }
    let obj = {
      icon: (item.meta && item.meta.icon) || '',
      name: item.name,
      meta: meta
    }
    return obj
  })
  res = res.filter(item => {
    return !item.meta.hideInMenu
  })
  return [{ ...homeItem, to: homeRoute.path }, ...res]
}

export const showTitle = (item, vm) => vm.$config.useI18n ? vm.$t(item.name) : ((item.meta && item.meta.title) || item.name)

/**
 * @description 本地存储和获取标签导航列表
 */
export const setTagNavListInLocalstorage = list => {
  localStorage.clientPortalTagNaveList = JSON.stringify(list)
}
/**
 * @returns {Array} 其中的每个元素只包含路由原信息中的name, path, meta三项
 */
export const getTagNavListFromLocalstorage = () => {
  const list = localStorage.clientPortalTagNaveList
  return list ? JSON.parse(list) : []
}

/**
 * @param {Array} routers 路由列表数组
 * @description 用于找到路由列表中name为home的对象
 */
export const getHomeRoute = routers => {
  let i = -1
  let len = routers.length
  let homeRoute = {}
  while (++i < len) {
    let item = routers[i]
    if (item.children && item.children.length) {
      let res = getHomeRoute(item.children)
      if (res.name) return res
    } else {
      if (item.name === 'home') homeRoute = item
    }
  }
  return homeRoute
}

/**
 * @param {*} list 现有标签导航列表
 * @param {*} newRoute 新添加的路由原信息对象
 * @description 如果该newRoute已经存在则不再添加
 */
export const getNewTagList = (list, newRoute) => {
  const { name, path, meta } = newRoute
  let newList = [...list]
  if (newList.findIndex(item => item.name === name) >= 0) return newList
  else newList.push({ name, path, meta })
  return newList
}

/**
 * @param {*} access 用户权限数组，如 ['super_admin', 'admin']
 * @param {*} route 路由列表
 */
const hasAccess = (access, route) => {
  if (route.meta && route.meta.access) return hasOneOf(access, route.meta.access)
  else return true
}


/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&')
  let paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}

/**
 * @param {Array} list 标签列表
 * @param {String} name 当前关闭的标签的name
 */
export const getNextRoute = (list, route) => {
  let res = {}
  if (list.length === 2) {
    res = getHomeRoute(list)
  } else {
    const index = list.findIndex(item => routeEqual(item, route))
    if (index === list.length - 1) res = list[list.length - 2]
    else res = list[index + 1]
  }
  return res
}

/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times, callback) => {
  let i = -1
  while (++i < times) {
    callback(i)
  }
}

/**
 * @param {Object} file 从上传组件得到的文件对象
 * @returns {Promise} resolve参数是解析后的二维数组
 * @description 从Csv文件中解析出表格，解析成二维数组
 */
export const getArrayFromFile = (file) => {
  let nameSplit = file.name.split('.')
  let format = nameSplit[nameSplit.length - 1]
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsText(file) // 以文本格式读取
    let arr = []
    reader.onload = function (evt) {
      let data = evt.target.result // 读到的数据
      let pasteData = data.trim()
      arr = pasteData.split((/[\n\u0085\u2028\u2029]|\r\n?/g)).map(row => {
        return row.split('\t')
      }).map(item => {
        return item[0].split(',')
      })
      if (format === 'csv') resolve(arr)
      else reject(new Error('[Format Error]:你上传的不是Csv文件'))
    }
  })
}

/**
 * @param {Array} array 表格数据二维数组
 * @returns {Object} { columns, tableData }
 * @description 从二维数组中获取表头和表格数据，将第一行作为表头，用于在iView的表格中展示数据
 */
export const getTableDataFromArray = (array) => {
  let columns = []
  let tableData = []
  if (array.length > 1) {
    let titles = array.shift()
    columns = titles.map(item => {
      return {
        title: item,
        key: item
      }
    })
    tableData = array.map(item => {
      let res = {}
      item.forEach((col, i) => {
        res[titles[i]] = col
      })
      return res
    })
  }
  return {
    columns,
    tableData
  }
}

export const findNodeUpper = (ele, tag) => {
  if (ele.parentNode) {
    if (ele.parentNode.tagName === tag.toUpperCase()) {
      return ele.parentNode
    } else {
      return findNodeUpper(ele.parentNode, tag)
    }
  }
}

export const findNodeUpperByClasses = (ele, classes) => {
  let parentNode = ele.parentNode
  if (parentNode) {
    let classList = parentNode.classList
    if (classList && classes.every(className => classList.contains(className))) {
      return parentNode
    } else {
      return findNodeUpperByClasses(parentNode, classes)
    }
  }
}

export const findNodeDownward = (ele, tag) => {
  const tagName = tag.toUpperCase()
  if (ele.childNodes.length) {
    let i = -1
    let len = ele.childNodes.length
    while (++i < len) {
      let child = ele.childNodes[i]
      if (child.tagName === tagName) return child
      else return findNodeDownward(child, tag)
    }
  }
}

export const showByAccess = (access, canViewAccess) => {
  return hasOneOf(canViewAccess, access)
}

/**
 * @description 根据name/params/query判断两个路由对象是否相等
 * @param {*} route1 路由对象
 * @param {*} route2 路由对象
 */
export const routeEqual = (route1, route2) => {
  const params1 = route1.params || {}
  const params2 = route2.params || {}
  const query1 = route1.query || {}
  const query2 = route2.query || {}
  // return (route1.name === route2.name) && objEqual(params1, params2) && objEqual(query1, query2)
  return (route1.name === route2.name)
}

/**
 * 判断打开的标签列表里是否已存在这个新添加的路由对象
 */
export const routeHasExist = (tagNavList, routeItem) => {
  let len = tagNavList.length
  let res = false
  doCustomTimes(len, (index) => {
    if (routeEqual(tagNavList[index], routeItem)) res = true
  })
  return res
}
/**
 * 时间格式化
 */
export const formatDate = (val) => {
  var value = new Date(val)
  var year = value.getFullYear()
  var month = padDate(value.getMonth() + 1)
  var day = padDate(value.getDate())
  var hour = padDate(value.getHours())
  var minutes = padDate(value.getMinutes())
  var seconds = padDate(value.getSeconds())
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
}

export const formatDateYMD = (val) => {
  if (!val) {
    return ''
  }
  var value = new Date(val)
  var year = value.getFullYear()
  var month = padDate(value.getMonth() + 1)
  var day = padDate(value.getDate())
  return year + '-' + month + '-' + day
}

// 和当前日期比较大小 比当前时间大，返回true 比当前时间小，返回false
export const greaterCurrentDate = (date) => {
  var date = new Date(date)
  var currentDate = new Date()
  if (date.getTime() > currentDate.getTime()) {
    return true
  } else {
    return false
  }
}

export const diffDate = (date1, date2) => {
  var date1 = new Date(date1)
  var date2 = new Date(date2)
  var time = date1.getTime() - date2.getTime()
  var days = time / (1000 * 24 * 3600)
  return days
}

function padDate (va) {
  va = va < 10 ? '0' + va : va
  return va
}

/**
 * 解决转json自动四舍五入问题
 * @param res
 * @returns {*}
 */
export const replaceRes = (res) => {
  var formatStr = res.replace(/\:\ *(\d*?)\ *(\,|\})/g, (a, b, c, d, e) => {
    if (e.substr(0, d).split('"').length % 2 === 0) return a
    return `:"${b}"${c}`
  })
  return formatStr
}

/**
 * 加法
 * @param arg1
 * @param arg2
 * @returns
 */
export const accAdd = (arg1, arg2) => {
  var r1, r2, m
  try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 };
  try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 };
  m = Math.pow(10, Math.max(r1, r2))
  return (arg1 * m + arg2 * m) / m
}

/**
 *  货币转为千分位格式
 * @param arg
 * @returns
 */
export const currencyThousandth = (arg) => {
  var prefix = ''
  if (arg * 1 < 0) {
    prefix = '-'
    arg = arg * (-1)
  }
  arg = arg + ''
  if (/[^0-9\.]/.test(arg)) {
    return ''
  }
  arg = arg.replace(/^(\d*)$/, '$1.')
  arg = (arg + '00').replace(/(\d*\.\d\d)\d*/, '$1')
  arg = arg.replace('.', ',')
  var re = /(\d)(\d{3},)/
  while (re.test(arg)) {
    arg = arg.replace(re, '$1,$2')
  }
  arg = arg.replace(/,(\d\d)$/, '.$1')
  return prefix + arg.replace(/^\./, '0.')
}

/**
 *  额度以10万为单位，向上取整
 */
export const lakhRoundUp = (arg) => {
  return Math.ceil(arg / 100000) * 100000
}

/**
 *  额度以1万为单位，向上取整
 */
export const tenThousandRoundUp = (arg) => {
  return Math.ceil(arg / 10000) * 10000
}

/**
 * 减法
 * @param arg1
 * @param arg2
 * @returns
 */
export const accSubtr = (arg1, arg2) => {
  var r1, r2, m, n
  try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2))
  // 动态控制精度长度
  n = (r1 >= r2) ? r1 : r2
  return ((arg1 * m - arg2 * m) / m).toFixed(n)
}

/***
 * 乘法，获取精确乘法的结果值
 * @param arg1
 * @param arg2
 * @returns
 */
export const accMul = (arg1, arg2) => {
  var m = 0, s1 = arg1.toString(), s2 = arg2.toString()
  try { m += s1.split('.')[1].length } catch (e) {};
  try { m += s2.split('.')[1].length } catch (e) {};
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}

/***
 * 除法，获取精确乘法的结果值
 * @param arg1
 * @param arg2
 * @returns
 */
export const accDivCoupon = (arg1, arg2) => {
  var t1 = 0, t2 = 0
  let r1 = 0, r2 = 0
  try { t1 = arg1.toString().split('.')[1].length } catch (e) {}
  try { t2 = arg2.toString().split('.')[1].length } catch (e) {}
  r1 = Number(arg1.toString().replace('.', ''))
  r2 = Number(arg2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}

/**
 * 格式化金额
 * number：要格式化的数字number_format
 * decimals：保留几位小数
 * dec_point：小数点符号
 * thousands_sep：千分位符号
 * roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入
 */
export const numberFormat = (number, decimals, decPoint, thousandsSep, roundtag) => {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  roundtag = roundtag || 'ceil' // "ceil","floor","round"
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep,
    dec = (typeof decPoint === 'undefined') ? '.' : decPoint,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec)
      console.log()
      return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k
    }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  var re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

/*
对象数组排序
 */
export const getSortFun = (order, sortBy) => {
  var ordAlpah = (order == 'asc') ? '>' : '<'
  var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1')
  return sortFun
}

export const sortNumber = (a, b) => {
  return a - b
}

export const getTree = (tree = []) => {
  let arr = []
  if (!!tree && tree.length !== 0) {
    tree.forEach(item => {
      let obj = {}
      obj.id = item.id
      obj.title = item.name
      obj.expand = false
      obj.selected = false
      obj.children = getTree(item.children) // 递归调用
      arr.push(obj)
    })
  }
  return arr
}

export const getMenuTree = (tree = []) => {
  let arr = []
  if (!!tree && tree.length !== 0) {
    tree.forEach(item => {
      let obj = {}
      obj.value = item.id
      obj.label = item.title
      obj.children = getMenuTree(item.children) // 递归调用
      arr.push(obj)
    })
  }
  return arr
}
export const getModuleTree = (tree = []) => {
  let arr = []
  if (!!tree && tree.length !== 0) {
    tree.forEach(item => {
      let obj = {}
      obj.value = item.id
      obj.label = item.name
      obj.children = getModuleTree(item.children) // 递归调用
      arr.push(obj)
    })
  }
  return arr
}

export const getTreePermission = (tree = []) => {
  let arr = []
  if (!!tree && tree.length !== 0) {
    tree.forEach(item => {
      let obj = {}
      obj.id = item.id
      if (item.children && item.children.length > 0) {
        getTreePermission(item.children) // 递归调用
      }
      arr.push(obj)
    })
  }
  return arr
}

/**
 * 角色分配权限，实现checkbox反选
 * @param tree 所有角色
 * @param roleRole 当前用户的角色
 * @returns {Array}
 */
export const getRolePermissionTree = (tree = [], roleRole = []) => {
  let arr = []
  if (!!tree && tree.length !== 0) {
    tree.forEach(item => {
      let obj = {}
      obj.id = item.id
      obj.title = item.title
      obj.expand = true
      obj.selected = false
      for (let i = 0; i < roleRole.length; i++) {
        if (roleRole[i].permissionId === item.id && !item.children) {
          obj.checked = true
        }
      }
      obj.children = getRolePermissionTree(item.children, roleRole) // 递归调用
      arr.push(obj)
    })
  }
  return arr
}
// 模板tree回显
export const getTemplatePermissionTree = (tree = [], currentModule = []) => {
  let arr = []
  if (!!tree && tree.length !== 0) {
    tree.forEach(item => {
      let obj = {}
      obj.id = item.id
      obj.name = item.name
      obj.price = item.price
      obj.expand = true
      obj.selected = false
      for (let i = 0; i < currentModule.length; i++) {
        // console.log(8888,currentModule[i],item.id)
        if (currentModule[i].id === item.id && !item.children) {
          obj.checked = true
        }
      }
      obj.children = getTemplatePermissionTree(item.children, currentModule) // 递归调用
      arr.push(obj)
    })
  }
  return arr
}

// 时间戳转换为日期格式
function add0 (m) { return m < 10 ? '0' + m : m }
export const formdataTime = (shijianchuo) => {
  // shijianchuo是整数，否则要parseInt转换
  var time = new Date(Number(shijianchuo))
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  var s = time.getSeconds()
  // return  add0(m) + '月' + add0(d) + '日';
  return y + '.' + add0(m) + '.' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s)
}

/**
 * 解析当前用户菜单
 * @param tree
 * @returns {Array}
 */
export const getUserMenu = (tree = []) => {
  let arr = []
  if (!!tree && tree.length !== 0) {
    tree.forEach(item => {
      let obj = {}
      obj.path = item.url
      obj.component = item.path
      obj.name = item.name
      var meta = {}
      meta.title = item.title
      meta.icon = item.icon
      if (item.hideInMenu === '0') {
        meta.hideInMenu = false
      } else {
        meta.hideInMenu = true
      }
      obj.meta = meta
      obj.children = getUserMenu(item.children) // 递归调用
      arr.push(obj)
    })
  }
  return arr
}

/**
 * @description 将后端菜单树转换为路由树
 * @param {Array} menus
 * @returns {Array}
 */
export const backendMenusToRouters = (menus) => {
  let routers = []
  forEach(menus, (menu) => {
    // 将后端数据转换成路由数据
    let route = backendMenuToRoute(menu)
    // 如果后端数据有下级，则递归处理下级
    if (menu.children && menu.children.length !== 0) {
      route.children = backendMenusToRouters(menu.children)
    }
    routers.push(route)
  })
  return routers
}

/**
 * @description 将后端菜单转换为路由
 * @param {Object} menu
 * @returns {Object}
 */
const backendMenuToRoute = (menu) => {
  let route = Object.assign({}, menu)
  /* route.component = () => import(`@/${menu.component}`) */ // 使用这个方法，热加载很慢
  route.component = resolve => require([`@/${menu.component}`], resolve)
  return route
}

export const getJsonUrl = (url, jsonStr) => {
  var urlJSON = ''
  if (!jsonStr) {
    return url
  }
  for (var i in jsonStr) {
    if (jsonStr[i]) {
      if (!urlJSON) {
        urlJSON += '?' + i + '=' + jsonStr[i]
      } else {
        urlJSON += '&' + i + '=' + jsonStr[i]
      }
    }
  }
  return url + urlJSON
}

// 时间戳转换为日期格式
const add = (m) => { return m < 10 ? '0' + m : m }
export const formdata = (shijianchuo) => {
  // shijianchuo是整数，否则要parseInt转换
  var time = new Date(Number(shijianchuo))
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  var s = time.getSeconds()
  // return  add0(m) + '月' + add0(d) + '日';
  return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}
