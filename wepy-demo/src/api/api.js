const post = (url, data) => {
    return new Promise((resolve, reject) => {
        wepy.request({
            url: url,
            data: data,
            header: { 'content-type': 'applicction/x-www-form-urlencoded' },  // header{ 'content-type': 'application/json' },
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
            header: { 'content-type': 'application/x-www-form-urlencoded' }, //  header: { 'content-type': 'application/json' },
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