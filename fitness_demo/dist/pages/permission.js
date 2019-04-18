'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = getApp();

var permission = function (_wepy$page) {
    _inherits(permission, _wepy$page);

    function permission() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, permission);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = permission.__proto__ || Object.getPrototypeOf(permission)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '授权登录'
        }, _this.data = {
            //判断小程序的API，回调，参数，组件等是否在当前版本可用。
            canIUse: wx.canIUse('button.open-type.getUserInfo'),
            userInfo: null
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(permission, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var userInfo, that;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _wepy2.default.login();

                            case 2:
                                _context.next = 4;
                                return _wepy2.default.getUserInfo();

                            case 4:
                                userInfo = _context.sent;

                                this.userInfo = userInfo.userInfo;
                                that = this; // 查看是否授权 

                                wx.getSetting({
                                    success: function success(res) {
                                        if (res.authSetting['scope.userInfo']) {
                                            wx.getUserInfo({
                                                success: function success(res) {
                                                    //从数据库获取用户信息 
                                                    // that.queryUsreInfo(); //用户已经授权过 
                                                    wx.switchTab({ url: '/pages/index' });
                                                }
                                            });
                                        }
                                    }
                                });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }, {
        key: 'bindGetUserInfo',
        value: function bindGetUserInfo(e) {
            if (e.detail.userInfo) {
                //用户按了允许授权按钮 
                var that = this;
                //插入登录的用户的相关信息到数据库 
                // wx.request({
                //     url: app.globalData.urlPath + 'user/add',
                //     data: {
                //         openid: getApp().globalData.openid,
                //         nickName: e.detail.userInfo.nickName,
                //         avatarUrl: e.detail.userInfo.avatarUrl,
                //         province: e.detail.userInfo.province,
                //         city: e.detail.userInfo.city
                //     },
                //     header: { 'content-type': 'application/json' },
                //     success: function (res) {
                //         //从数据库获取用户信息 
                //         // that.queryUsreInfo();
                //         console.log("插入小程序登录用户信息成功！");
                //     }
                // });
                //授权成功后，跳转进入小程序首页 
                wx.switchTab({ url: '/pages/index' });
            } else {
                //用户按了拒绝按钮 
                wx.showModal({
                    title: '警告',
                    content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                    showCancel: false, confirmText: '返回授权',
                    success: function success(res) {
                        if (res.confirm) {
                            console.log('用户点击了“返回授权”');
                        }
                    }
                });
            }
        }
    }, {
        key: 'queryUsreInfo',

        //获取用户信息接口 
        value: function queryUsreInfo() {
            wx.request({
                url: app.globalData.urlPath + 'user/userInfo',
                data: { openid: app.globalData.openid },
                header: { 'content-type': 'application/json' },
                success: function success(res) {
                    console.log(res.data);
                    getApp().globalData.userInfo = res.data;
                }
            });
        }
    }]);

    return permission;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(permission , 'pages/permission'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcm1pc3Npb24uanMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0QXBwIiwicGVybWlzc2lvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY2FuSVVzZSIsInd4IiwidXNlckluZm8iLCJ3ZXB5IiwibG9naW4iLCJnZXRVc2VySW5mbyIsInRoYXQiLCJnZXRTZXR0aW5nIiwic3VjY2VzcyIsInJlcyIsImF1dGhTZXR0aW5nIiwic3dpdGNoVGFiIiwidXJsIiwiZSIsImRldGFpbCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsImNvbmZpcm0iLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsImdsb2JhbERhdGEiLCJ1cmxQYXRoIiwib3BlbmlkIiwiaGVhZGVyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsTUFBTUMsUUFBWjs7SUFDcUJDLFU7Ozs7Ozs7Ozs7Ozs7O2tNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLEksR0FBTztBQUNIO0FBQ0FDLHFCQUFTQyxHQUFHRCxPQUFILENBQVcsOEJBQVgsQ0FGTjtBQUdIRSxzQkFBVTtBQUhQLFM7Ozs7Ozs7Ozs7Ozs7dUNBT0dDLGVBQUtDLEtBQUwsRTs7Ozt1Q0FDZUQsZUFBS0UsV0FBTCxFOzs7QUFBakJILHdDOztBQUNKLHFDQUFLQSxRQUFMLEdBQWdCQSxTQUFTQSxRQUF6QjtBQUNJSSxvQyxHQUFPLEksRUFBTTs7QUFDakJMLG1DQUFHTSxVQUFILENBQWM7QUFDVkMsNkNBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUNwQiw0Q0FBSUEsSUFBSUMsV0FBSixDQUFnQixnQkFBaEIsQ0FBSixFQUF1QztBQUNuQ1QsK0NBQUdJLFdBQUgsQ0FBZTtBQUNYRyx5REFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3BCO0FBQ0E7QUFDQVIsdURBQUdVLFNBQUgsQ0FBYSxFQUFFQyxLQUFLLGNBQVAsRUFBYjtBQUNIO0FBTFUsNkNBQWY7QUFPSDtBQUNKO0FBWFMsaUNBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FjWUMsQyxFQUFHO0FBQ2YsZ0JBQUlBLEVBQUVDLE1BQUYsQ0FBU1osUUFBYixFQUF1QjtBQUNuQjtBQUNBLG9CQUFJSSxPQUFPLElBQVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUwsbUJBQUdVLFNBQUgsQ0FBYSxFQUFFQyxLQUFLLGNBQVAsRUFBYjtBQUNILGFBdEJELE1Bc0JPO0FBQ0g7QUFDQVgsbUJBQUdjLFNBQUgsQ0FBYTtBQUNUQywyQkFBTyxJQURFO0FBRVRDLDZCQUFTLCtCQUZBO0FBR1RDLGdDQUFZLEtBSEgsRUFHVUMsYUFBYSxNQUh2QjtBQUlUWCw2QkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3BCLDRCQUFJQSxJQUFJVyxPQUFSLEVBQWlCO0FBQ2JDLG9DQUFRQyxHQUFSLENBQVksYUFBWjtBQUNIO0FBQ0o7QUFSUSxpQkFBYjtBQVVIO0FBQ0o7Ozs7QUFDRDt3Q0FDZ0I7QUFDWnJCLGVBQUdzQixPQUFILENBQVc7QUFDUFgscUJBQUtsQixJQUFJOEIsVUFBSixDQUFlQyxPQUFmLEdBQXlCLGVBRHZCO0FBRVAxQixzQkFBTSxFQUFFMkIsUUFBUWhDLElBQUk4QixVQUFKLENBQWVFLE1BQXpCLEVBRkM7QUFHUEMsd0JBQVEsRUFBRSxnQkFBZ0Isa0JBQWxCLEVBSEQ7QUFJUG5CLHlCQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDcEJZLDRCQUFRQyxHQUFSLENBQVliLElBQUlWLElBQWhCO0FBQ0FKLDZCQUFTNkIsVUFBVCxDQUFvQnRCLFFBQXBCLEdBQStCTyxJQUFJVixJQUFuQztBQUNIO0FBUE0sYUFBWDtBQVNIOzs7O0VBN0VtQ0ksZUFBS3lCLEk7O2tCQUF4QmhDLFUiLCJmaWxlIjoicGVybWlzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gICAgY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBwZXJtaXNzaW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmjojmnYPnmbvlvZUnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICAvL+WIpOaWreWwj+eoi+W6j+eahEFQSe+8jOWbnuiwg++8jOWPguaVsO+8jOe7hOS7tuetieaYr+WQpuWcqOW9k+WJjeeJiOacrOWPr+eUqOOAglxyXG4gICAgICAgICAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgICAgICAvLyDlnKhQYWdl5ZKMQ29tcG9uZW505YWx55So55qE55Sf5ZG95ZGo5pyf5Ye95pWwXHJcbiAgICAgICAgICAgIGF3YWl0IHdlcHkubG9naW4oKTtcclxuICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gdXNlckluZm8udXNlckluZm87XHJcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpczsgLy8g5p+l55yL5piv5ZCm5o6I5p2DIFxyXG4gICAgICAgICAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+S7juaVsOaNruW6k+iOt+WPlueUqOaIt+S/oeaBryBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0LnF1ZXJ5VXNyZUluZm8oKTsgLy/nlKjmiLflt7Lnu4/mjojmnYPov4cgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHsgdXJsOiAnL3BhZ2VzL2luZGV4JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJpbmRHZXRVc2VySW5mbyhlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmRldGFpbC51c2VySW5mbykge1xyXG4gICAgICAgICAgICAgICAgLy/nlKjmiLfmjInkuoblhYHorrjmjojmnYPmjInpkq4gXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAvL+aPkuWFpeeZu+W9leeahOeUqOaIt+eahOebuOWFs+S/oeaBr+WIsOaVsOaNruW6kyBcclxuICAgICAgICAgICAgICAgIC8vIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHVybDogYXBwLmdsb2JhbERhdGEudXJsUGF0aCArICd1c2VyL2FkZCcsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBvcGVuaWQ6IGdldEFwcCgpLmdsb2JhbERhdGEub3BlbmlkLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBuaWNrTmFtZTogZS5kZXRhaWwudXNlckluZm8ubmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGF2YXRhclVybDogZS5kZXRhaWwudXNlckluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm92aW5jZTogZS5kZXRhaWwudXNlckluZm8ucHJvdmluY2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNpdHk6IGUuZGV0YWlsLnVzZXJJbmZvLmNpdHlcclxuICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGhlYWRlcjogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvL+S7juaVsOaNruW6k+iOt+WPlueUqOaIt+S/oeaBryBcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdGhhdC5xdWVyeVVzcmVJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwi5o+S5YWl5bCP56iL5bqP55m75b2V55So5oi35L+h5oGv5oiQ5Yqf77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgLy/mjojmnYPmiJDlip/lkI7vvIzot7Povazov5vlhaXlsI/nqIvluo/pppbpobUgXHJcbiAgICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoeyB1cmw6ICcvcGFnZXMvaW5kZXgnIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+eUqOaIt+aMieS6huaLkue7neaMiemSriBcclxuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICforablkYonLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmgqjngrnlh7vkuobmi5Lnu53mjojmnYPvvIzlsIbml6Dms5Xov5vlhaXlsI/nqIvluo/vvIzor7fmjojmnYPkuYvlkI7lho3ov5vlhaUhISEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLCBjb25maXJtVGV4dDogJ+i/lOWbnuaOiOadgycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vkuobigJzov5Tlm57mjojmnYPigJ0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/ojrflj5bnlKjmiLfkv6Hmga/mjqXlj6MgXHJcbiAgICAgICAgcXVlcnlVc3JlSW5mbygpIHtcclxuICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGFwcC5nbG9iYWxEYXRhLnVybFBhdGggKyAndXNlci91c2VySW5mbycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IG9wZW5pZDogYXBwLmdsb2JhbERhdGEub3BlbmlkIH0sXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBnZXRBcHAoKS5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=