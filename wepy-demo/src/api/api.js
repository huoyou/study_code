import wepy from 'wepy'

let token = '694d1241-ab9d-4f4d-af4f-d20ccb4e704a';

const sessionType = {
    'json': { 'content-type': 'application/json', 'token': token },
    'form': { 'content-type': 'application/x-www-form-urlencoded', 'token': token }
}

function HttpRequest(url, params = {}, method = 'GET', sessionChoose = 'json') {
    return new Promise((resolve, reject) => {
        url = wepy.$appConfig.rootURL  + url
        const session = sessionType[sessionChoose]
        // const {token} = wx.getStorageSync('user') || ''
        // if (token) {
        //   params = Object.assign(params, {token})
        // }
        wepy.request({
            url: url,
            method: method,
            header: session,
            data: params,
            dataType: 'json',
        }).then(res => {
            let data = JSON.parse(res.data);
            // let data = (res.data);
            if (res.statusCode == 200 && data.code == 200) {
                // 请求成功 后台code为1 正常
                resolve(JSON.parse(res.data).data)
            } else {
                // 请求成功 后台code不为1 异常
                reject(JSON.parse(res.data))
            }
        }).catch(error => {
            // 请求失败
            console.log('error-', error)
            reject(error)
        })
    })
}
function get(url, params) {
    return HttpRequest(url, params)
}
function post(url, params, type) {
    return HttpRequest(url, params, 'POST', type)
}
module.exports = {
    get,
    post
}