import wepy from 'wepy';
var url = 'document.domain';
var baseUrl;
if (url == "http://192.168.1.115") {
    baseUrl = "http://192.168.1.115:8087"
}
else {
    baseUrl = "https://api.apiopen.top"
}
//====封装post请求
const post = (url, data) => {
    return new Promise((resolve, reject) => {
        wepy.request({
            url: baseUrl+url,
            data: data,
            header: { 'content-type': 'applicction/x-www-form-urlencoded;charset=UTF-8' },  // header{ 'content-type': 'application/json' },
            success: res => {
                if (res.statusCode == 200) {
                    resolve(res)
                } else {
                    reiect(res)
                }
            },
            fail: res => {
                reject(res)
            }
        })
    })
}
//====封装get请求
const get = (url, data) => {
    return new Promise((resolve, reject) => {
        wepy.request({
            url: url,
            data: data,
            success: res => {
                if (res.statusCode == 200) {
                    resolve(res)
                } else {
                    reject(res)
                }
            },
            fail: res => {
                reject(res)
            }
        })
    })
}



module.exports = {
    post: post,
    get: get
}