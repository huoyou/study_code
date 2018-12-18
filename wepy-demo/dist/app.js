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

var _hydrogenJsSdk = require('./npm/hydrogen-js-sdk/src/lib/app.js');

var _hydrogenJsSdk2 = _interopRequireDefault(_hydrogenJsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

_hydrogenJsSdk2.default.initialize('da40d09276fcc91b75eba34657d81f61', '4e2162a7086839946d7df2f434e41ff0');

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/test', 'pages/index'],
      window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat1',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: true
      },
      tabBar: {
        color: '#ccc',
        selectedColor: '#000',
        list: [{
          pagePath: 'pages/test',
          text: '测一',
          iconPath: './imgs/tab_car_nor@2x.png',
          selectedIconPath: './imgs/tab_car_sel@2x.png'
        }, {
          pagePath: 'pages/index',
          text: '首页',
          iconPath: './imgs/tab_home_nor@2x.png',
          selectedIconPath: './imgs/tab_home_sel@2x.png'
        }, {
          pagePath: 'pages/index',
          text: '测二',
          iconPath: './imgs/tab_usedcar_nor@2x.png',
          selectedIconPath: './imgs/tab_usedcar_sel@2x.png'
        }, {
          pagePath: 'pages/index',
          text: '我的',
          iconPath: './imgs/tab_mine_nor@2x.png',
          selectedIconPath: './imgs/tab_mine_sel@2x.png'
        }]
      },
      networkTimeout: {
        request: 10000,
        downloadFile: 10000
      },
      debug: true
    };
    _this.globalData = {
      userInfo: null
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
    }
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
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIkJtb2IiLCJpbml0aWFsaXplIiwiY29uZmlnIiwicGFnZXMiLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsIm5ldHdvcmtUaW1lb3V0IiwicmVxdWVzdCIsImRvd25sb2FkRmlsZSIsImRlYnVnIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwiaW50ZXJjZXB0IiwicCIsInRpbWVzdGFtcCIsIkRhdGUiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsInRlc3RBc3luYyIsInJlcyIsInd4IiwicmVkaXJlY3RUbyIsInVybCIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjYiIsInRoYXQiLCJ3ZXB5IiwiZ2V0VXNlckluZm8iLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUFGQSxJQUFNQSxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7O0FBRUFDLHdCQUFLQyxVQUFMLENBQ0Usa0NBREYsRUFFRSxrQ0FGRjs7Ozs7QUF1REUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQWxEZEMsTUFrRGMsR0FsREw7QUFDUEMsYUFBTyxDQUFDLFlBQUQsRUFBZSxhQUFmLENBREE7QUFFUEMsY0FBUTtBQUNOQyw2QkFBcUIsTUFEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFH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TUQ7Ozs7RUF4SDBCeUIsZUFBS0UsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcblxuaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4JztcbmltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpO1xuc2V0U3RvcmUoc3RvcmUpO1xuaW1wb3J0IEJtb2IgZnJvbSAnaHlkcm9nZW4tanMtc2RrJztcbkJtb2IuaW5pdGlhbGl6ZShcbiAgJ2RhNDBkMDkyNzZmY2M5MWI3NWViYTM0NjU3ZDgxZjYxJyxcbiAgJzRlMjE2MmE3MDg2ODM5OTQ2ZDdkZjJmNDM0ZTQxZmYwJ1xuKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFsncGFnZXMvdGVzdCcsICdwYWdlcy9pbmRleCddLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdDEnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyNjY2MnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMwMDAnLFxuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy90ZXN0JyxcbiAgICAgICAgICB0ZXh0OiAn5rWL5LiAJyxcbiAgICAgICAgICBpY29uUGF0aDogJy4vaW1ncy90YWJfY2FyX25vckAyeC5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltZ3MvdGFiX2Nhcl9zZWxAMngucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+mmlumhtScsXG4gICAgICAgICAgaWNvblBhdGg6ICcuL2ltZ3MvdGFiX2hvbWVfbm9yQDJ4LnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1ncy90YWJfaG9tZV9zZWxAMngucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+a1i+S6jCcsXG4gICAgICAgICAgaWNvblBhdGg6ICcuL2ltZ3MvdGFiX3VzZWRjYXJfbm9yQDJ4LnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1ncy90YWJfdXNlZGNhcl9zZWxAMngucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+aIkeeahCcsXG4gICAgICAgICAgaWNvblBhdGg6ICcuL2ltZ3MvdGFiX21pbmVfbm9yQDJ4LnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1ncy90YWJfbWluZV9zZWxAMngucG5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBuZXR3b3JrVGltZW91dDoge1xuICAgICAgcmVxdWVzdDogMTAwMDAsXG4gICAgICBkb3dubG9hZEZpbGU6IDEwMDAwXG4gICAgfSxcbiAgICBkZWJ1ZzogdHJ1ZVxuICB9O1xuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xuICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xuICAgICAgLy8g5Y+R5Ye66K+35rGC5pe255qE5Zue6LCD5Ye95pWwXG4gICAgICBjb25maWcocCkge1xuICAgICAgICAvLyDlr7nmiYDmnIlyZXF1ZXN06K+35rGC5Lit55qET0JKRUNU5Y+C5pWw5a+56LGh57uf5LiA6ZmE5Yqg5pe26Ze05oiz5bGe5oCnXG4gICAgICAgIHAudGltZXN0YW1wID0gK25ldyBEYXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25maWcgcmVxdWVzdDogJywgcCk7XG4gICAgICAgIC8vIOW/hemhu+i/lOWbnk9CSkVDVOWPguaVsOWvueixoe+8jOWQpuWImeaXoOazleWPkemAgeivt+axguWIsOacjeWKoeerr1xuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH0sXG5cbiAgICAgIC8vIOivt+axguaIkOWKn+WQjueahOWbnuiwg+WHveaVsFxuICAgICAgc3VjY2VzcyhwKSB7XG4gICAgICAgIC8vIOWPr+S7peWcqOi/memHjOWvueaUtuWIsOeahOWTjeW6lOaVsOaNruWvueixoei/m+ihjOWKoOW3peWkhOeQhlxuICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZXNzOiAnLCBwKTtcbiAgICAgICAgLy8g5b+F6aG76L+U5Zue5ZON5bqU5pWw5o2u5a+56LGh77yM5ZCm5YiZ5ZCO57ut5peg5rOV5a+55ZON5bqU5pWw5o2u6L+b6KGM5aSE55CGXG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfSxcblxuICAgICAgLy/or7fmsYLlpLHotKXlkI7nmoTlm57osIPlh73mlbBcbiAgICAgIGZhaWwocCkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsOiAnLCBwKTtcbiAgICAgICAgLy8g5b+F6aG76L+U5Zue5ZON5bqU5pWw5o2u5a+56LGh77yM5ZCm5YiZ5ZCO57ut5peg5rOV5a+55ZON5bqU5pWw5o2u6L+b6KGM5aSE55CGXG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfSxcblxuICAgICAgLy8g6K+35rGC5a6M5oiQ5pe255qE5Zue6LCD5Ye95pWwKOivt+axguaIkOWKn+aIluWksei0pemDveS8muiiq+aJp+ihjClcbiAgICAgIGNvbXBsZXRlKHApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgY29tcGxldGU6ICcsIHApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gICAgdGhpcy50ZXN0QXN5bmMoKTtcbiAgfVxuICBvblBhZ2VOb3RGb3VuZChyZXMpIHtcbiAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgIHVybDogJ3BhZ2VzL2VycidcbiAgICB9KTsgLy8g5aaC5p6c5pivIHRhYmJhciDpobXpnaLvvIzor7fkvb/nlKggd3guc3dpdGNoVGFiXG4gIH1cblxuICBzbGVlcChzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJyk7XG4gICAgICB9LCBzICogMTAwMCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyB0ZXN0QXN5bmMoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cblxuICBnZXRVc2VySW5mbyhjYikge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm87XG4gICAgfVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=