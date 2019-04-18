'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/home', 'pages/course', 'pages/out', 'pages/permission', 'pages/mine', 'pages/inputCheck'],
      window: {
        backgroundTextStyle: 'dark',
        // navigationStyle: 'custom',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat1',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: true
      },
      tabBar: {
        color: '#ccc',
        selectedColor: '#000',
        list: [{
          pagePath: 'pages/index',
          text: '首页',
          iconPath: './imgs/tab_home_nor@2x.png',
          selectedIconPath: './imgs/tab_home_sel@2x.png'
        }, {
          pagePath: 'pages/course',
          text: '课程',
          iconPath: './imgs/tab_usedcar_nor@2x.png',
          selectedIconPath: './imgs/tab_usedcar_sel@2x.png'
        }, {
          pagePath: 'pages/mine',
          text: '我的',
          iconPath: './imgs/tab_mine_nor@2x.png',
          selectedIconPath: './imgs/tab_mine_sel@2x.png'
        }]
      },
      networkTimeout: {
        request: 10000,
        downloadFile: 10000
      },
      debug: true,
      usingComponents: {
        'van-button': '../components/vant/button/index'
      },
      "permission": {
        "scope.userLocation": {
          "desc": "你的位置信息将用于小程序位置接口的效果展示"
        }
      }
    };
    _this.globalData = {
      userInfo: null,
      ret: null,
      config: null,
      apiUrl: '后台地址'
    };

    _this.use('requestfix');
    _this.use('promisify');
    _this.intercept('request', {
      // 发出请求时的回调函数
      config: function config(p) {
        // 对所有request请求中的OBJECT参数对象统一附加时间戳属性
        p.timestamp = +new Date();
        console.log('config request: ', p);
        // 必须返回OBJECT参数对象，否则无法发送请求到服务端
        return p;
      },


      // 请求成功后的回调函数
      success: function success(p) {
        // 可以在这里对收到的响应数据对象进行加工处理
        console.log('request success: ', p);
        // 必须返回响应数据对象，否则后续无法对响应数据进行处理
        return p;
      },


      //请求失败后的回调函数
      fail: function fail(p) {
        console.log('request fail: ', p);
        // 必须返回响应数据对象，否则后续无法对响应数据进行处理
        return p;
      },


      // 请求完成时的回调函数(请求成功或失败都会被执行)
      complete: function complete(p) {
        console.log('request complete: ', p);
      }
    });
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
      this.checkSettingStatus();
    }
    // 初始化获取config

  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      _wepy2.default.request('初始化后台api').then(function (ret) {
        _this2.globalData.config = ret.data.config;
        console.log('======初始化成功=======');
        //初始化成功判断是否授权
        _this2.checkSettingStatus();
      });
    }
    //判断登录状态/是否授权

  }, {
    key: 'checkSettingStatus',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var auth, authSetting, userInfo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _wepy2.default.getSetting();

              case 3:
                auth = _context.sent;
                //调用getSetting Api
                authSetting = auth.authSetting; //获取authSetting用来判断是否授权

                console.log('---开始判断---', authSetting['scope.userInfo']);

                if (!authSetting['scope.userInfo']) {
                  _context.next = 15;
                  break;
                }

                console.log('---已经授权---');
                //已经授权情况下直接获取userInfor
                _context.next = 10;
                return _wepy2.default.getUserInfo();

              case 10:
                userInfo = _context.sent;

                this.globalData.ret = userInfo;
                //调用登录
                this.login();
                _context.next = 17;
                break;

              case 15:
                //如果没有授权跳转至授权页进行授权(新版只能通过调用按钮来调出授权框)
                //授权页面button需要赋予open-type='getUserInfo'属性
                //bindgetuserinfo='scope' bind方法用来授权/获取userInfor
                console.log('---用户未授权---');
                wx.reLaunch({
                  url: '/pages/permission'
                });

              case 17:
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 19]]);
      }));

      function checkSettingStatus() {
        return _ref.apply(this, arguments);
      }

      return checkSettingStatus;
    }()
    //登录方法

  }, {
    key: 'login',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        var token, _ref3, code, ret;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                console.log('---调用login方法---');
                token = _wepy2.default.getStorageSync('token') || '';
                _context2.next = 5;
                return _wepy2.default.login();

              case 5:
                _ref3 = _context2.sent;
                code = _ref3.code;
                //通过调用login获取code 判断是否开始登录
                console.log('code', code);
                if (code) {
                  console.log('---获取信息发送网络请求---');
                  ret = this.globalData.ret;

                  _wepy2.default.request({
                    url: '', //开发者服务器接口地址",
                    data: {
                      code: code,
                      rawData: ret.rawData,
                      token: token
                    },
                    method: 'POST',
                    header: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                    }
                  }).then(function (res) {
                    console.log('---网络请求返回成功---');
                    console.log(res);
                    var response = res.data;
                    if (response.code == 1) {
                      console.log('---登录正常，返回值1---');
                      console.log(response);
                      _this3.globalData.userInfo = response.data.userInfo;
                      _wepy2.default.setStorageSync('token', response.data.userInfo.token);
                      console.log(_this3.globalData.userInfo);
                    } else {
                      console.log('---登录异常---');
                      _wepy2.default.setStorageSync('token', '');
                    }
                  });
                } else {
                  console.log('---login返回异常---');
                }
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function login() {
        return _ref2.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'onPageNotFound',
    value: function onPageNotFound(res) {
      wx.redirectTo({
        url: 'pages/err'
      }); // 如果是 tabbar 页面，请使用 wx.switchTab
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.sleep(3);

              case 2:
                data = _context3.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function testAsync() {
        return _ref4.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.globalData.userInfo) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt('return', this.globalData.userInfo);

              case 2:
                _context4.next = 4;
                return _wepy2.default.login();

              case 4:
                _context4.next = 6;
                return _wepy2.default.getUserInfo();

              case 6:
                res = _context4.sent;

                this.globalData.userInfo = res.userInfo;
                return _context4.abrupt('return', res.userInfo);

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getUserInfo() {
        return _ref5.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"],"rootURL":"http://faceid.ufscs.com:8087"}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJkZWJ1ZyIsInVzaW5nQ29tcG9uZW50cyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInJldCIsImFwaVVybCIsInVzZSIsImludGVyY2VwdCIsInAiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJmYWlsIiwiY29tcGxldGUiLCJ0ZXN0QXN5bmMiLCJjaGVja1NldHRpbmdTdGF0dXMiLCJ3ZXB5IiwidGhlbiIsImRhdGEiLCJnZXRTZXR0aW5nIiwiYXV0aCIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJsb2dpbiIsInd4IiwicmVMYXVuY2giLCJ1cmwiLCJ0b2tlbiIsImdldFN0b3JhZ2VTeW5jIiwiY29kZSIsInJhd0RhdGEiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXMiLCJyZXNwb25zZSIsInNldFN0b3JhZ2VTeW5jIiwicmVkaXJlY3RUbyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7Ozs7O0FBc0RFLHNCQUFjO0FB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LEtBQUwsRTs7Ozt1QkFDVVAsZUFBS00sV0FBTCxFOzs7QUFBWlcsbUI7O0FBQ0oscUJBQUtqQyxVQUFMLENBQWdCQyxRQUFoQixHQUEyQmdDLElBQUloQyxRQUEvQjtrREFDT2dDLElBQUloQyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN01jZSxlQUFLMkIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nO1xyXG5cclxuICBpbXBvcnQgeyBzZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnO1xyXG4gIGltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJztcclxuXHJcbiAgY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpO1xyXG4gIHNldFN0b3JlKHN0b3JlKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIHBhZ2VzOiBbJ3BhZ2VzL2luZGV4JywgJ3BhZ2VzL2hvbWUnLCAncGFnZXMvY291cnNlJywgJ3BhZ2VzL291dCcsJ3BhZ2VzL3Blcm1pc3Npb24nLCdwYWdlcy9taW5lJywncGFnZXMvaW5wdXRDaGVjayddLFxyXG4gICAgICB3aW5kb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaycsXHJcbiAgICAgICAgLy8gbmF2aWdhdGlvblN0eWxlOiAnY3VzdG9tJyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdDEnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXHJcbiAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgICB0YWJCYXI6IHtcclxuICAgICAgICBjb2xvcjogJyNjY2MnLFxyXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMDAwJyxcclxuICAgICAgICBsaXN0OiBbXHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgICAgICAgdGV4dDogJ+mmlumhtScsXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi9pbWdzL3RhYl9ob21lX25vckAyeC5wbmcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWdzL3RhYl9ob21lX3NlbEAyeC5wbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2NvdXJzZScsXHJcbiAgICAgICAgICAgIHRleHQ6ICfor77nqIsnLFxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4vaW1ncy90YWJfdXNlZGNhcl9ub3JAMngucG5nJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1ncy90YWJfdXNlZGNhcl9zZWxAMngucG5nJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9taW5lJyxcclxuICAgICAgICAgICAgdGV4dDogJ+aIkeeahCcsXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi9pbWdzL3RhYl9taW5lX25vckAyeC5wbmcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWdzL3RhYl9taW5lX3NlbEAyeC5wbmcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICBuZXR3b3JrVGltZW91dDoge1xyXG4gICAgICAgIHJlcXVlc3Q6IDEwMDAwLFxyXG4gICAgICAgIGRvd25sb2FkRmlsZTogMTAwMDBcclxuICAgICAgfSxcclxuICAgICAgZGVidWc6IHRydWUsXHJcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICd2YW4tYnV0dG9uJzogJy4uL2NvbXBvbmVudHMvdmFudC9idXR0b24vaW5kZXgnXHJcbiAgICAgIH0sXHJcbiAgICAgIFwicGVybWlzc2lvblwiOiB7XHJcbiAgICAgICAgXCJzY29wZS51c2VyTG9jYXRpb25cIjoge1xyXG4gICAgICAgICAgXCJkZXNjXCI6IFwi5L2g55qE5L2N572u5L+h5oGv5bCG55So5LqO5bCP56iL5bqP5L2N572u5o6l5Y+j55qE5pWI5p6c5bGV56S6XCJcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcclxuICAgICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdCgncmVxdWVzdCcsIHtcclxuICAgICAgICAvLyDlj5Hlh7ror7fmsYLml7bnmoTlm57osIPlh73mlbBcclxuICAgICAgICBjb25maWcocCkge1xyXG4gICAgICAgICAgLy8g5a+55omA5pyJcmVxdWVzdOivt+axguS4reeahE9CSkVDVOWPguaVsOWvueixoee7n+S4gOmZhOWKoOaXtumXtOaIs+WxnuaAp1xyXG4gICAgICAgICAgcC50aW1lc3RhbXAgPSArbmV3IERhdGUoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25maWcgcmVxdWVzdDogJywgcCk7XHJcbiAgICAgICAgICAvLyDlv4Xpobvov5Tlm55PQkpFQ1Tlj4LmlbDlr7nosaHvvIzlkKbliJnml6Dms5Xlj5HpgIHor7fmsYLliLDmnI3liqHnq69cclxuICAgICAgICAgIHJldHVybiBwO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOivt+axguaIkOWKn+WQjueahOWbnuiwg+WHveaVsFxyXG4gICAgICAgIHN1Y2Nlc3MocCkge1xyXG4gICAgICAgICAgLy8g5Y+v5Lul5Zyo6L+Z6YeM5a+55pS25Yiw55qE5ZON5bqU5pWw5o2u5a+56LGh6L+b6KGM5Yqg5bel5aSE55CGXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZXNzOiAnLCBwKTtcclxuICAgICAgICAgIC8vIOW/hemhu+i/lOWbnuWTjeW6lOaVsOaNruWvueixoe+8jOWQpuWImeWQjue7reaXoOazleWvueWTjeW6lOaVsOaNrui/m+ihjOWkhOeQhlxyXG4gICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy/or7fmsYLlpLHotKXlkI7nmoTlm57osIPlh73mlbBcclxuICAgICAgICBmYWlsKHApIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGZhaWw6ICcsIHApO1xyXG4gICAgICAgICAgLy8g5b+F6aG76L+U5Zue5ZON5bqU5pWw5o2u5a+56LGh77yM5ZCm5YiZ5ZCO57ut5peg5rOV5a+55ZON5bqU5pWw5o2u6L+b6KGM5aSE55CGXHJcbiAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDor7fmsYLlrozmiJDml7bnmoTlm57osIPlh73mlbAo6K+35rGC5oiQ5Yqf5oiW5aSx6LSl6YO95Lya6KKr5omn6KGMKVxyXG4gICAgICAgIGNvbXBsZXRlKHApIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGNvbXBsZXRlOiAnLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdsb2JhbERhdGEgPSB7XHJcbiAgICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgICByZXQ6IG51bGwsXHJcbiAgICAgIGNvbmZpZzogbnVsbCxcclxuICAgICAgYXBpVXJsOiAn5ZCO5Y+w5Zyw5Z2AJ1xyXG4gICAgfTtcclxuICAgIG9uTGF1bmNoKCkge1xyXG4gICAgICB0aGlzLnRlc3RBc3luYygpO1xyXG4gICAgICB0aGlzLmNoZWNrU2V0dGluZ1N0YXR1cygpO1xyXG4gICAgfVxyXG4gICAgLy8g5Yid5aeL5YyW6I635Y+WY29uZmlnXHJcbiAgICBpbml0KCkge1xyXG4gICAgICB3ZXB5LnJlcXVlc3QoJ+WIneWni+WMluWQjuWPsGFwaScpLnRoZW4oXHJcbiAgICAgICAgKHJldCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLmNvbmZpZyA9IHJldC5kYXRhLmNvbmZpZztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT3liJ3lp4vljJbmiJDlip89PT09PT09Jyk7XHJcbiAgICAgICAgICAvL+WIneWni+WMluaIkOWKn+WIpOaWreaYr+WQpuaOiOadg1xyXG4gICAgICAgICAgdGhpcy5jaGVja1NldHRpbmdTdGF0dXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIC8v5Yik5pat55m75b2V54q25oCBL+aYr+WQpuaOiOadg1xyXG4gICAgYXN5bmMgY2hlY2tTZXR0aW5nU3RhdHVzKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBhdXRoID0gYXdhaXQgd2VweS5nZXRTZXR0aW5nKCk7ICAgIC8v6LCD55SoZ2V0U2V0dGluZyBBcGlcclxuICAgICAgICBsZXQgYXV0aFNldHRpbmcgPSBhdXRoLmF1dGhTZXR0aW5nOyAgICAvL+iOt+WPlmF1dGhTZXR0aW5n55So5p2l5Yik5pat5piv5ZCm5o6I5p2DXHJcbiAgICAgICAgY29uc29sZS5sb2coJy0tLeW8gOWni+WIpOaWrS0tLScsIGF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKTtcclxuICAgICAgICBpZiAoYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCctLS3lt7Lnu4/mjojmnYMtLS0nKTtcclxuICAgICAgICAgIC8v5bey57uP5o6I5p2D5oOF5Ya15LiL55u05o6l6I635Y+WdXNlckluZm9yXHJcbiAgICAgICAgICBsZXQgdXNlckluZm8gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEucmV0ID0gdXNlckluZm87XHJcbiAgICAgICAgICAvL+iwg+eUqOeZu+W9lVxyXG4gICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvL+WmguaenOayoeacieaOiOadg+i3s+i9rOiHs+aOiOadg+mhtei/m+ihjOaOiOadgyjmlrDniYjlj6rog73pgJrov4fosIPnlKjmjInpkq7mnaXosIPlh7rmjojmnYPmoYYpXHJcbiAgICAgICAgICAvL+aOiOadg+mhtemdomJ1dHRvbumcgOimgei1i+S6iG9wZW4tdHlwZT0nZ2V0VXNlckluZm8n5bGe5oCnXHJcbiAgICAgICAgICAvL2JpbmRnZXR1c2VyaW5mbz0nc2NvcGUnIGJpbmTmlrnms5XnlKjmnaXmjojmnYMv6I635Y+WdXNlckluZm9yXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnLS0t55So5oi35pyq5o6I5p2DLS0tJyk7XHJcbiAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJtaXNzaW9uJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+eZu+W9leaWueazlVxyXG4gICAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJy0tLeiwg+eUqGxvZ2lu5pa55rOVLS0tJylcclxuICAgICAgICBsZXQgdG9rZW4gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpIHx8ICcnO1xyXG4gICAgICAgIGxldCB7IGNvZGU6IGNvZGUgfSA9IGF3YWl0IHdlcHkubG9naW4oKTsgIC8v6YCa6L+H6LCD55SobG9naW7ojrflj5Zjb2RlIOWIpOaWreaYr+WQpuW8gOWni+eZu+W9lVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb2RlJyxjb2RlKVxyXG4gICAgICAgIGlmIChjb2RlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnLS0t6I635Y+W5L+h5oGv5Y+R6YCB572R57uc6K+35rGCLS0tJyk7XHJcbiAgICAgICAgICBsZXQgcmV0ID0gdGhpcy5nbG9iYWxEYXRhLnJldFxyXG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiAnJywgLy/lvIDlj5HogIXmnI3liqHlmajmjqXlj6PlnLDlnYBcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGNvZGU6IGNvZGUsXHJcbiAgICAgICAgICAgICAgcmF3RGF0YTogcmV0LnJhd0RhdGEsXHJcbiAgICAgICAgICAgICAgdG9rZW46IHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS3nvZHnu5zor7fmsYLov5Tlm57miJDlip8tLS0nKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLeeZu+W9leato+W4uO+8jOi/lOWbnuWAvDEtLS0nKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzcG9uc2UuZGF0YS51c2VySW5mbztcclxuICAgICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsIHJlc3BvbnNlLmRhdGEudXNlckluZm8udG9rZW4pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLeeZu+W9leW8guW4uC0tLScpO1xyXG4gICAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJy0tLWxvZ2lu6L+U5Zue5byC5bi4LS0tJylcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvblBhZ2VOb3RGb3VuZChyZXMpIHtcclxuICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgdXJsOiAncGFnZXMvZXJyJ1xyXG4gICAgICB9KTsgLy8g5aaC5p6c5pivIHRhYmJhciDpobXpnaLvvIzor7fkvb/nlKggd3guc3dpdGNoVGFiXHJcbiAgICB9XHJcblxyXG4gICAgc2xlZXAocykge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpO1xyXG4gICAgICAgIH0sIHMgKiAxMDAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdGVzdEFzeW5jKCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0VXNlckluZm8oKSB7XHJcbiAgICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvO1xyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IHdlcHkubG9naW4oKTtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKTtcclxuICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xyXG4gICAgICByZXR1cm4gcmVzLnVzZXJJbmZvO1xyXG4gICAgfVxyXG4gIH1cclxuIl19