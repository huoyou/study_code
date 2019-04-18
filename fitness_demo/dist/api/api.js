'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let token = '694d1241-ab9d-4f4d-af4f-d20ccb4e704a';
// const sessionType = {
//     'json': { 'content-type': 'application/json', 'token': token },
//     'form': { 'content-type': 'application/x-www-form-urlencoded', 'token': token }
// }
var sessionType = {
    'json': { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    'form': { 'content-type': 'application/x-www-form-urlencoded' }
};

function HttpRequest(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    var sessionChoose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'json';

    return new Promise(function (resolve, reject) {
        url = _wepy2.default.$appConfig.rootURL + url;
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
            // let data = (res.data);
            if (res.statusCode == 200 && data.code == 200) {
                // 请求成功 后台code为1 正常
                resolve(JSON.parse(res.data));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJzZXNzaW9uVHlwZSIsIkh0dHBSZXF1ZXN0IiwidXJsIiwicGFyYW1zIiwibWV0aG9kIiwic2Vzc2lvbkNob29zZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2VweSIsIiRhcHBDb25maWciLCJyb290VVJMIiwic2Vzc2lvbiIsInJlcXVlc3QiLCJoZWFkZXIiLCJkYXRhIiwiZGF0YVR5cGUiLCJ0aGVuIiwiSlNPTiIsInBhcnNlIiwicmVzIiwic3RhdHVzQ29kZSIsImNvZGUiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImdldCIsInBvc3QiLCJ0eXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGNBQWM7QUFDaEIsWUFBUSxFQUFFLGdCQUFnQixpREFBbEIsRUFEUTtBQUVoQixZQUFRLEVBQUUsZ0JBQWdCLG1DQUFsQjtBQUZRLENBQXBCOztBQUtBLFNBQVNDLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQStFO0FBQUEsUUFBckRDLE1BQXFELHVFQUE1QyxFQUE0QztBQUFBLFFBQXhDQyxNQUF3Qyx1RUFBL0IsS0FBK0I7QUFBQSxRQUF4QkMsYUFBd0IsdUVBQVIsTUFBUTs7QUFDM0UsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDTixjQUFNTyxlQUFLQyxVQUFMLENBQWdCQyxPQUFoQixHQUEyQlQsR0FBakM7QUFDQSxZQUFNVSxVQUFVWixZQUFZSyxhQUFaLENBQWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUksdUJBQUtJLE9BQUwsQ0FBYTtBQUNUWCxpQkFBS0EsR0FESTtBQUVURSxvQkFBUUEsTUFGQztBQUdUVSxvQkFBUUYsT0FIQztBQUlURyxrQkFBTVosTUFKRztBQUtUYSxzQkFBVTtBQUxELFNBQWIsRUFNR0MsSUFOSCxDQU1RLGVBQU87QUFDWCxnQkFBSUYsT0FBT0csS0FBS0MsS0FBTCxDQUFXQyxJQUFJTCxJQUFmLENBQVg7QUFDQTtBQUNBLGdCQUFJSyxJQUFJQyxVQUFKLElBQWtCLEdBQWxCLElBQXlCTixLQUFLTyxJQUFMLElBQWEsR0FBMUMsRUFBK0M7QUFDM0M7QUFDQWYsd0JBQVFXLEtBQUtDLEtBQUwsQ0FBV0MsSUFBSUwsSUFBZixDQUFSO0FBQ0gsYUFIRCxNQUdPO0FBQ0g7QUFDQVAsdUJBQU9VLEtBQUtDLEtBQUwsQ0FBV0MsSUFBSUwsSUFBZixDQUFQO0FBQ0g7QUFDSixTQWhCRCxFQWdCR1EsS0FoQkgsQ0FnQlMsaUJBQVM7QUFDZDtBQUNBQyxvQkFBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JDLEtBQXRCO0FBQ0FsQixtQkFBT2tCLEtBQVA7QUFDSCxTQXBCRDtBQXFCSCxLQTVCTSxDQUFQO0FBNkJIO0FBQ0QsU0FBU0MsR0FBVCxDQUFhekIsR0FBYixFQUFrQkMsTUFBbEIsRUFBMEI7QUFDdEIsV0FBT0YsWUFBWUMsR0FBWixFQUFpQkMsTUFBakIsQ0FBUDtBQUNIO0FBQ0QsU0FBU3lCLElBQVQsQ0FBYzFCLEdBQWQsRUFBbUJDLE1BQW5CLEVBQTJCMEIsSUFBM0IsRUFBaUM7QUFDN0IsV0FBTzVCLFlBQVlDLEdBQVosRUFBaUJDLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDMEIsSUFBakMsQ0FBUDtBQUNIO0FBQ0RDLE9BQU9DLE9BQVAsR0FBaUI7QUFDYkosWUFEYTtBQUViQztBQUZhLENBQWpCIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIGxldCB0b2tlbiA9ICc2OTRkMTI0MS1hYjlkLTRmNGQtYWY0Zi1kMjBjY2I0ZTcwNGEnO1xyXG4vLyBjb25zdCBzZXNzaW9uVHlwZSA9IHtcclxuLy8gICAgICdqc29uJzogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAndG9rZW4nOiB0b2tlbiB9LFxyXG4vLyAgICAgJ2Zvcm0nOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJywgJ3Rva2VuJzogdG9rZW4gfVxyXG4vLyB9XHJcbmNvbnN0IHNlc3Npb25UeXBlID0ge1xyXG4gICAgJ2pzb24nOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnfSxcclxuICAgICdmb3JtJzogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCd9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEh0dHBSZXF1ZXN0KHVybCwgcGFyYW1zID0ge30sIG1ldGhvZCA9ICdHRVQnLCBzZXNzaW9uQ2hvb3NlID0gJ2pzb24nKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHVybCA9IHdlcHkuJGFwcENvbmZpZy5yb290VVJMICArIHVybFxyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBzZXNzaW9uVHlwZVtzZXNzaW9uQ2hvb3NlXVxyXG4gICAgICAgIC8vIGNvbnN0IHt0b2tlbn0gPSB3eC5nZXRTdG9yYWdlU3luYygndXNlcicpIHx8ICcnXHJcbiAgICAgICAgLy8gaWYgKHRva2VuKSB7XHJcbiAgICAgICAgLy8gICBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHBhcmFtcywge3Rva2VufSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBoZWFkZXI6IHNlc3Npb24sXHJcbiAgICAgICAgICAgIGRhdGE6IHBhcmFtcyxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGxldCBkYXRhID0gKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCAmJiBkYXRhLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDor7fmsYLmiJDlip8g5ZCO5Y+wY29kZeS4ujEg5q2j5bi4XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzLmRhdGEpKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g6K+35rGC5oiQ5YqfIOWQjuWPsGNvZGXkuI3kuLoxIOW8guW4uFxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KEpTT04ucGFyc2UocmVzLmRhdGEpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAvLyDor7fmsYLlpLHotKVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yLScsIGVycm9yKVxyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gZ2V0KHVybCwgcGFyYW1zKSB7XHJcbiAgICByZXR1cm4gSHR0cFJlcXVlc3QodXJsLCBwYXJhbXMpXHJcbn1cclxuZnVuY3Rpb24gcG9zdCh1cmwsIHBhcmFtcywgdHlwZSkge1xyXG4gICAgcmV0dXJuIEh0dHBSZXF1ZXN0KHVybCwgcGFyYW1zLCAnUE9TVCcsIHR5cGUpXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBnZXQsXHJcbiAgICBwb3N0XHJcbn0iXX0=