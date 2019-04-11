'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = 'document.domain';
var baseUrl;
if (url == "http://192.168.1.115") {
    baseUrl = "http://192.168.1.115:8087";
} else {
    baseUrl = "https://api.apiopen.top";
}
//====封装post请求
var post = function post(url, data) {
    return new Promise(function (resolve, reject) {
        _wepy2.default.request({
            url: baseUrl + url,
            data: data,
            header: { 'content-type': 'applicction/x-www-form-urlencoded;charset=UTF-8' }, // header{ 'content-type': 'application/json' },
            success: function success(res) {
                if (res.statusCode == 200) {
                    resolve(res);
                } else {
                    reiect(res);
                }
            },
            fail: function fail(res) {
                reject(res);
            }
        });
    });
};
//====封装get请求
var get = function get(url, data) {
    return new Promise(function (resolve, reject) {
        _wepy2.default.request({
            url: url,
            data: data,
            success: function success(res) {
                if (res.statusCode == 200) {
                    resolve(res);
                } else {
                    reject(res);
                }
            },
            fail: function fail(res) {
                reject(res);
            }
        });
    });
};

module.exports = {
    post: post,
    get: get
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ1cmwiLCJiYXNlVXJsIiwicG9zdCIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndlcHkiLCJyZXF1ZXN0IiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsInN0YXR1c0NvZGUiLCJyZWllY3QiLCJmYWlsIiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBQ0EsSUFBSUEsTUFBTSxpQkFBVjtBQUNBLElBQUlDLE9BQUo7QUFDQSxJQUFJRCxPQUFPLHNCQUFYLEVBQW1DO0FBQy9CQyxjQUFVLDJCQUFWO0FBQ0gsQ0FGRCxNQUdLO0FBQ0RBLGNBQVUseUJBQVY7QUFDSDtBQUNEO0FBQ0EsSUFBTUMsT0FBTyxTQUFQQSxJQUFPLENBQUNGLEdBQUQsRUFBTUcsSUFBTixFQUFlO0FBQ3hCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MsdUJBQUtDLE9BQUwsQ0FBYTtBQUNUUixpQkFBS0MsVUFBUUQsR0FESjtBQUVURyxrQkFBTUEsSUFGRztBQUdUTSxvQkFBUSxFQUFFLGdCQUFnQixpREFBbEIsRUFIQyxFQUd1RTtBQUNoRkMscUJBQVMsc0JBQU87QUFDWixvQkFBSUMsSUFBSUMsVUFBSixJQUFrQixHQUF0QixFQUEyQjtBQUN2QlAsNEJBQVFNLEdBQVI7QUFDSCxpQkFGRCxNQUVPO0FBQ0hFLDJCQUFPRixHQUFQO0FBQ0g7QUFDSixhQVZRO0FBV1RHLGtCQUFNLG1CQUFPO0FBQ1RSLHVCQUFPSyxHQUFQO0FBQ0g7QUFiUSxTQUFiO0FBZUgsS0FoQk0sQ0FBUDtBQWlCSCxDQWxCRDtBQW1CQTtBQUNBLElBQU1JLE1BQU0sU0FBTkEsR0FBTSxDQUFDZixHQUFELEVBQU1HLElBQU4sRUFBZTtBQUN2QixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLHVCQUFLQyxPQUFMLENBQWE7QUFDVFIsaUJBQUtBLEdBREk7QUFFVEcsa0JBQU1BLElBRkc7QUFHVE8scUJBQVMsc0JBQU87QUFDWixvQkFBSUMsSUFBSUMsVUFBSixJQUFrQixHQUF0QixFQUEyQjtBQUN2QlAsNEJBQVFNLEdBQVI7QUFDSCxpQkFGRCxNQUVPO0FBQ0hMLDJCQUFPSyxHQUFQO0FBQ0g7QUFDSixhQVRRO0FBVVRHLGtCQUFNLG1CQUFPO0FBQ1RSLHVCQUFPSyxHQUFQO0FBQ0g7QUFaUSxTQUFiO0FBY0gsS0FmTSxDQUFQO0FBZ0JILENBakJEOztBQXFCQUssT0FBT0MsT0FBUCxHQUFpQjtBQUNiZixVQUFNQSxJQURPO0FBRWJhLFNBQUtBO0FBRlEsQ0FBakIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbnZhciB1cmwgPSAnZG9jdW1lbnQuZG9tYWluJztcclxudmFyIGJhc2VVcmw7XHJcbmlmICh1cmwgPT0gXCJodHRwOi8vMTkyLjE2OC4xLjExNVwiKSB7XHJcbiAgICBiYXNlVXJsID0gXCJodHRwOi8vMTkyLjE2OC4xLjExNTo4MDg3XCJcclxufVxyXG5lbHNlIHtcclxuICAgIGJhc2VVcmwgPSBcImh0dHBzOi8vYXBpLmFwaW9wZW4udG9wXCJcclxufVxyXG4vLz09PT3lsIHoo4Vwb3N06K+35rGCXHJcbmNvbnN0IHBvc3QgPSAodXJsLCBkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYmFzZVVybCt1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcjogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2N0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JyB9LCAgLy8gaGVhZGVyeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaWVjdChyZXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QocmVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuLy89PT095bCB6KOFZ2V06K+35rGCXHJcbmNvbnN0IGdldCA9ICh1cmwsIGRhdGEpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QocmVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwb3N0OiBwb3N0LFxyXG4gICAgZ2V0OiBnZXRcclxufSJdfQ==