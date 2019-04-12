'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = '694d1241-ab9d-4f4d-af4f-d20ccb4e704a';

var sessionType = {
    'json': { 'content-type': 'application/json', 'token': token },
    'form': { 'content-type': 'application/x-www-form-urlencoded', 'token': token }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ0b2tlbiIsInNlc3Npb25UeXBlIiwiSHR0cFJlcXVlc3QiLCJ1cmwiLCJwYXJhbXMiLCJtZXRob2QiLCJzZXNzaW9uQ2hvb3NlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3ZXB5IiwiJGFwcENvbmZpZyIsInJvb3RVUkwiLCJzZXNzaW9uIiwicmVxdWVzdCIsImhlYWRlciIsImRhdGEiLCJkYXRhVHlwZSIsInRoZW4iLCJKU09OIiwicGFyc2UiLCJyZXMiLCJzdGF0dXNDb2RlIiwiY29kZSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZ2V0IiwicG9zdCIsInR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQSxJQUFJQSxRQUFRLHNDQUFaOztBQUVBLElBQU1DLGNBQWM7QUFDaEIsWUFBUSxFQUFFLGdCQUFnQixrQkFBbEIsRUFBc0MsU0FBU0QsS0FBL0MsRUFEUTtBQUVoQixZQUFRLEVBQUUsZ0JBQWdCLG1DQUFsQixFQUF1RCxTQUFTQSxLQUFoRTtBQUZRLENBQXBCOztBQUtBLFNBQVNFLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQStFO0FBQUEsUUFBckRDLE1BQXFELHVFQUE1QyxFQUE0QztBQUFBLFFBQXhDQyxNQUF3Qyx1RUFBL0IsS0FBK0I7QUFBQSxRQUF4QkMsYUFBd0IsdUVBQVIsTUFBUTs7QUFDM0UsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDTixjQUFNTyxlQUFLQyxVQUFMLENBQWdCQyxPQUFoQixHQUEyQlQsR0FBakM7QUFDQSxZQUFNVSxVQUFVWixZQUFZSyxhQUFaLENBQWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUksdUJBQUtJLE9BQUwsQ0FBYTtBQUNUWCxpQkFBS0EsR0FESTtBQUVURSxvQkFBUUEsTUFGQztBQUdUVSxvQkFBUUYsT0FIQztBQUlURyxrQkFBTVosTUFKRztBQUtUYSxzQkFBVTtBQUxELFNBQWIsRUFNR0MsSUFOSCxDQU1RLGVBQU87QUFDWCxnQkFBSUYsT0FBT0csS0FBS0MsS0FBTCxDQUFXQyxJQUFJTCxJQUFmLENBQVg7QUFDQTtBQUNBLGdCQUFJSyxJQUFJQyxVQUFKLElBQWtCLEdBQWxCLElBQXlCTixLQUFLTyxJQUFMLElBQWEsR0FBMUMsRUFBK0M7QUFDM0M7QUFDQWYsd0JBQVFXLEtBQUtDLEtBQUwsQ0FBV0MsSUFBSUwsSUFBZixFQUFxQkEsSUFBN0I7QUFDSCxhQUhELE1BR087QUFDSDtBQUNBUCx1QkFBT1UsS0FBS0MsS0FBTCxDQUFXQyxJQUFJTCxJQUFmLENBQVA7QUFDSDtBQUNKLFNBaEJELEVBZ0JHUSxLQWhCSCxDQWdCUyxpQkFBUztBQUNkO0FBQ0FDLG9CQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQkMsS0FBdEI7QUFDQWxCLG1CQUFPa0IsS0FBUDtBQUNILFNBcEJEO0FBcUJILEtBNUJNLENBQVA7QUE2Qkg7QUFDRCxTQUFTQyxHQUFULENBQWF6QixHQUFiLEVBQWtCQyxNQUFsQixFQUEwQjtBQUN0QixXQUFPRixZQUFZQyxHQUFaLEVBQWlCQyxNQUFqQixDQUFQO0FBQ0g7QUFDRCxTQUFTeUIsSUFBVCxDQUFjMUIsR0FBZCxFQUFtQkMsTUFBbkIsRUFBMkIwQixJQUEzQixFQUFpQztBQUM3QixXQUFPNUIsWUFBWUMsR0FBWixFQUFpQkMsTUFBakIsRUFBeUIsTUFBekIsRUFBaUMwQixJQUFqQyxDQUFQO0FBQ0g7QUFDREMsT0FBT0MsT0FBUCxHQUFpQjtBQUNiSixZQURhO0FBRWJDO0FBRmEsQ0FBakIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmxldCB0b2tlbiA9ICc2OTRkMTI0MS1hYjlkLTRmNGQtYWY0Zi1kMjBjY2I0ZTcwNGEnO1xyXG5cclxuY29uc3Qgc2Vzc2lvblR5cGUgPSB7XHJcbiAgICAnanNvbic6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ3Rva2VuJzogdG9rZW4gfSxcclxuICAgICdmb3JtJzogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsICd0b2tlbic6IHRva2VuIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSHR0cFJlcXVlc3QodXJsLCBwYXJhbXMgPSB7fSwgbWV0aG9kID0gJ0dFVCcsIHNlc3Npb25DaG9vc2UgPSAnanNvbicpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdXJsID0gd2VweS4kYXBwQ29uZmlnLnJvb3RVUkwgICsgdXJsXHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHNlc3Npb25UeXBlW3Nlc3Npb25DaG9vc2VdXHJcbiAgICAgICAgLy8gY29uc3Qge3Rva2VufSA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJykgfHwgJydcclxuICAgICAgICAvLyBpZiAodG9rZW4pIHtcclxuICAgICAgICAvLyAgIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7dG9rZW59KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcjogc2Vzc2lvbixcclxuICAgICAgICAgICAgZGF0YTogcGFyYW1zLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgLy8gbGV0IGRhdGEgPSAocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwICYmIGRhdGEuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIC8vIOivt+axguaIkOWKnyDlkI7lj7Bjb2Rl5Li6MSDmraPluLhcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXMuZGF0YSkuZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOivt+axguaIkOWKnyDlkI7lj7Bjb2Rl5LiN5Li6MSDlvILluLhcclxuICAgICAgICAgICAgICAgIHJlamVjdChKU09OLnBhcnNlKHJlcy5kYXRhKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgLy8g6K+35rGC5aSx6LSlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvci0nLCBlcnJvcilcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGdldCh1cmwsIHBhcmFtcykge1xyXG4gICAgcmV0dXJuIEh0dHBSZXF1ZXN0KHVybCwgcGFyYW1zKVxyXG59XHJcbmZ1bmN0aW9uIHBvc3QodXJsLCBwYXJhbXMsIHR5cGUpIHtcclxuICAgIHJldHVybiBIdHRwUmVxdWVzdCh1cmwsIHBhcmFtcywgJ1BPU1QnLCB0eXBlKVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZ2V0LFxyXG4gICAgcG9zdFxyXG59Il19