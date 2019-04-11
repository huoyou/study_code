'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var baseUrl, url;
// if (url == "http://192.168.1.115") {
//     baseUrl = "http://192.168.1.115:8087"
// }
// else {
//     baseUrl = "http://192.168.1.123:8012"
// }
var token = '267f9533-826d-4222-a763-083f9180c47f';

var sessionType = {
    'json': { 'content-type': 'application/json', 'token': token },
    'form': { 'content-type': 'application/x-www-form-urlencoded', 'token': token }
};

function HttpRequest(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    var sessionChoose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'json';

    return new Promise(function (resolve, reject) {
        url = _wepy2.default.$appConfig.rootURL + '/sentence' + url;
        var session = sessionType[sessionChoose];
        // const {token} = wx.getStorageSync('user') || ''
        // if (token) {
        //   params = Object.assign(params, {token})
        // }
        _wepy2.default.request({
            url: url,
            method: method,
            header: session,
            data: params,
            dataType: 'json'
        }).then(function (res) {
            var data = JSON.parse(res.data);
            if (res.statusCode == 200 && data.code == 200) {
                // 请求成功 后台code为1 正常
                resolve(JSON.parse(res.data).data);
            } else {
                // 请求成功 后台code不为1 异常
                reject(JSON.parse(res.data));
            }
        }).catch(function (error) {
            // 请求失败
            console.log('error-', error);
            reject(error);
        });
    });
}
function get(url, params) {
    return HttpRequest(url, params);
}
function post(url, params, type) {
    return HttpRequest(url, params, 'POST', type);
}
module.exports = {
    get: get,
    post: post
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ0b2tlbiIsInNlc3Npb25UeXBlIiwiSHR0cFJlcXVlc3QiLCJ1cmwiLCJwYXJhbXMiLCJtZXRob2QiLCJzZXNzaW9uQ2hvb3NlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3ZXB5IiwiJGFwcENvbmZpZyIsInJvb3RVUkwiLCJzZXNzaW9uIiwicmVxdWVzdCIsImhlYWRlciIsImRhdGEiLCJkYXRhVHlwZSIsInRoZW4iLCJKU09OIiwicGFyc2UiLCJyZXMiLCJzdGF0dXNDb2RlIiwiY29kZSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZ2V0IiwicG9zdCIsInR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFFBQVEsc0NBQVo7O0FBRUEsSUFBTUMsY0FBYztBQUNoQixZQUFRLEVBQUUsZ0JBQWdCLGtCQUFsQixFQUFzQyxTQUFTRCxLQUEvQyxFQURRO0FBRWhCLFlBQVEsRUFBRSxnQkFBZ0IsbUNBQWxCLEVBQXVELFNBQVNBLEtBQWhFO0FBRlEsQ0FBcEI7O0FBS0EsU0FBU0UsV0FBVCxDQUFxQkMsR0FBckIsRUFBK0U7QUFBQSxRQUFyREMsTUFBcUQsdUVBQTVDLEVBQTRDO0FBQUEsUUFBeENDLE1BQXdDLHVFQUEvQixLQUErQjtBQUFBLFFBQXhCQyxhQUF3Qix1RUFBUixNQUFROztBQUMzRSxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENOLGNBQU1PLGVBQUtDLFVBQUwsQ0FBZ0JDLE9BQWhCLEdBQTBCLFdBQTFCLEdBQXdDVCxHQUE5QztBQUNBLFlBQU1VLFVBQVVaLFlBQVlLLGFBQVosQ0FBaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBSSx1QkFBS0ksT0FBTCxDQUFhO0FBQ1RYLGlCQUFLQSxHQURJO0FBRVRFLG9CQUFRQSxNQUZDO0FBR1RVLG9CQUFRRixPQUhDO0FBSVRHLGtCQUFNWixNQUpHO0FBS1RhLHNCQUFVO0FBTEQsU0FBYixFQU1HQyxJQU5ILENBTVEsZUFBTztBQUNYLGdCQUFJRixPQUFPRyxLQUFLQyxLQUFMLENBQVdDLElBQUlMLElBQWYsQ0FBWDtBQUNBLGdCQUFJSyxJQUFJQyxVQUFKLElBQWtCLEdBQWxCLElBQXlCTixLQUFLTyxJQUFMLElBQWEsR0FBMUMsRUFBK0M7QUFDM0M7QUFDQWYsd0JBQVFXLEtBQUtDLEtBQUwsQ0FBV0MsSUFBSUwsSUFBZixFQUFxQkEsSUFBN0I7QUFDSCxhQUhELE1BR087QUFDSDtBQUNBUCx1QkFBT1UsS0FBS0MsS0FBTCxDQUFXQyxJQUFJTCxJQUFmLENBQVA7QUFDSDtBQUNKLFNBZkQsRUFlR1EsS0FmSCxDQWVTLGlCQUFTO0FBQ2Q7QUFDQUMsb0JBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCQyxLQUF0QjtBQUNBbEIsbUJBQU9rQixLQUFQO0FBQ0gsU0FuQkQ7QUFvQkgsS0EzQk0sQ0FBUDtBQTRCSDtBQUNELFNBQVNDLEdBQVQsQ0FBYXpCLEdBQWIsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCLFdBQU9GLFlBQVlDLEdBQVosRUFBaUJDLE1BQWpCLENBQVA7QUFDSDtBQUNELFNBQVN5QixJQUFULENBQWMxQixHQUFkLEVBQW1CQyxNQUFuQixFQUEyQjBCLElBQTNCLEVBQWlDO0FBQzdCLFdBQU81QixZQUFZQyxHQUFaLEVBQWlCQyxNQUFqQixFQUF5QixNQUF6QixFQUFpQzBCLElBQWpDLENBQVA7QUFDSDtBQUNEQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2JKLFlBRGE7QUFFYkM7QUFGYSxDQUFqQiIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuLy8gdmFyIGJhc2VVcmwsIHVybDtcclxuLy8gaWYgKHVybCA9PSBcImh0dHA6Ly8xOTIuMTY4LjEuMTE1XCIpIHtcclxuLy8gICAgIGJhc2VVcmwgPSBcImh0dHA6Ly8xOTIuMTY4LjEuMTE1OjgwODdcIlxyXG4vLyB9XHJcbi8vIGVsc2Uge1xyXG4vLyAgICAgYmFzZVVybCA9IFwiaHR0cDovLzE5Mi4xNjguMS4xMjM6ODAxMlwiXHJcbi8vIH1cclxubGV0IHRva2VuID0gJzI2N2Y5NTMzLTgyNmQtNDIyMi1hNzYzLTA4M2Y5MTgwYzQ3Zic7XHJcblxyXG5jb25zdCBzZXNzaW9uVHlwZSA9IHtcclxuICAgICdqc29uJzogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAndG9rZW4nOiB0b2tlbiB9LFxyXG4gICAgJ2Zvcm0nOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJywgJ3Rva2VuJzogdG9rZW4gfVxyXG59XHJcblxyXG5mdW5jdGlvbiBIdHRwUmVxdWVzdCh1cmwsIHBhcmFtcyA9IHt9LCBtZXRob2QgPSAnR0VUJywgc2Vzc2lvbkNob29zZSA9ICdqc29uJykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB1cmwgPSB3ZXB5LiRhcHBDb25maWcucm9vdFVSTCArICcvc2VudGVuY2UnICsgdXJsXHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHNlc3Npb25UeXBlW3Nlc3Npb25DaG9vc2VdXHJcbiAgICAgICAgLy8gY29uc3Qge3Rva2VufSA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJykgfHwgJydcclxuICAgICAgICAvLyBpZiAodG9rZW4pIHtcclxuICAgICAgICAvLyAgIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7dG9rZW59KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcjogc2Vzc2lvbixcclxuICAgICAgICAgICAgZGF0YTogcGFyYW1zLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCAmJiBkYXRhLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDor7fmsYLmiJDlip8g5ZCO5Y+wY29kZeS4ujEg5q2j5bi4XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDor7fmsYLmiJDlip8g5ZCO5Y+wY29kZeS4jeS4ujEg5byC5bi4XHJcbiAgICAgICAgICAgICAgICByZWplY3QoSlNPTi5wYXJzZShyZXMuZGF0YSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIC8vIOivt+axguWksei0pVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3ItJywgZXJyb3IpXHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBnZXQodXJsLCBwYXJhbXMpIHtcclxuICAgIHJldHVybiBIdHRwUmVxdWVzdCh1cmwsIHBhcmFtcylcclxufVxyXG5mdW5jdGlvbiBwb3N0KHVybCwgcGFyYW1zLCB0eXBlKSB7XHJcbiAgICByZXR1cm4gSHR0cFJlcXVlc3QodXJsLCBwYXJhbXMsICdQT1NUJywgdHlwZSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGdldCxcclxuICAgIHBvc3RcclxufSJdfQ==