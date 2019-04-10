'use strict';

var post = function post(url, data) {
    return new Promise(function (resolve, reject) {
        wepy.request({
            url: url,
            data: data,
            header: { 'content-type': 'applicction/x-www-form-urlencoded' }, // header{ 'content-type': 'application/json' },
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
        wepy.request({
            url: url,
            data: data,
            header: { 'content-type': 'application/x-www-form-urlencoded' }, //  header: { 'content-type': 'application/json' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJwb3N0IiwidXJsIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2VweSIsInJlcXVlc3QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwic3RhdHVzQ29kZSIsInJlaWVjdCIsImZhaWwiLCJnZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUN4QixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLGFBQUtDLE9BQUwsQ0FBYTtBQUNUTixpQkFBS0EsR0FESTtBQUVUQyxrQkFBTUEsSUFGRztBQUdUTSxvQkFBUSxFQUFFLGdCQUFnQixtQ0FBbEIsRUFIQyxFQUd5RDtBQUNsRUMscUJBQVMsc0JBQU87QUFDWixvQkFBSUMsSUFBSUMsVUFBSixJQUFrQixHQUF0QixFQUEyQjtBQUN2QlAsNEJBQVFNLEdBQVI7QUFDSCxpQkFGRCxNQUVPO0FBQ0hFLDJCQUFPRixHQUFQO0FBQ0g7QUFDSixhQVZRO0FBV1RHLGtCQUFNLG1CQUFPO0FBQ1RSLHVCQUFPSyxHQUFQO0FBQ0g7QUFiUSxTQUFiO0FBZUgsS0FoQk0sQ0FBUDtBQWlCSCxDQWxCRDtBQW1CQTtBQUNBLElBQU1JLE1BQU0sU0FBTkEsR0FBTSxDQUFDYixHQUFELEVBQU1DLElBQU4sRUFBZTtBQUN2QixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLGFBQUtDLE9BQUwsQ0FBYTtBQUNUTixpQkFBS0EsR0FESTtBQUVUQyxrQkFBTUEsSUFGRztBQUdUTSxvQkFBUSxFQUFFLGdCQUFnQixtQ0FBbEIsRUFIQyxFQUd3RDtBQUNqRUMscUJBQVMsc0JBQU87QUFDWixvQkFBSUMsSUFBSUMsVUFBSixJQUFrQixHQUF0QixFQUEyQjtBQUN2QlAsNEJBQVFNLEdBQVI7QUFDSCxpQkFGRCxNQUVPO0FBQ0hMLDJCQUFPSyxHQUFQO0FBQ0g7QUFDSixhQVZRO0FBV1RHLGtCQUFNLG1CQUFPO0FBQ1RSLHVCQUFPSyxHQUFQO0FBQ0g7QUFiUSxTQUFiO0FBZUgsS0FoQk0sQ0FBUDtBQWlCSCxDQWxCRDs7QUFzQkFLLE9BQU9DLE9BQVAsR0FBaUI7QUFDYmhCLFVBQU1BLElBRE87QUFFYmMsU0FBS0E7QUFGUSxDQUFqQiIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwb3N0ID0gKHVybCwgZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljY3Rpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LCAgLy8gaGVhZGVyeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaWVjdChyZXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QocmVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuLy89PT095bCB6KOFZ2V06K+35rGCXHJcbmNvbnN0IGdldCA9ICh1cmwsIGRhdGEpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcjogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSwgLy8gIGhlYWRlcjogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QocmVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwb3N0OiBwb3N0LFxyXG4gICAgZ2V0OiBnZXRcclxufSJdfQ==