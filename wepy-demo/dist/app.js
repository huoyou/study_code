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

_hydrogenJsSdk2.default.initialize('da40d09276fcc91b75eba34657d81f61', '4e2162a7086839946d7df2f434e41ff0', 'ce5bab7bdcc3bc654344ffc55cc69beb');

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home', 'pages/test', 'pages/index', 'pages/mine'],
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
          pagePath: 'pages/home',
          text: '首页',
          iconPath: './imgs/tab_home_nor@2x.png',
          selectedIconPath: './imgs/tab_home_sel@2x.png'
        }, {
          pagePath: 'pages/test',
          text: '测一',
          iconPath: './imgs/tab_car_nor@2x.png',
          selectedIconPath: './imgs/tab_car_sel@2x.png'
        }, {
          pagePath: 'pages/index',
          text: '测2',
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

    // getUserInfo(cb) {
    //   const that = this;
    //   if (this.globalData.userInfo) {
    //     return this.globalData.userInfo;
    //   }
    //   wepy.getUserInfo({
    //     success(res) {
    //       that.globalData.userInfo = res.userInfo;
    //       cb && cb(res.userInfo);
    //     }
    //   });
    // }

  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIkJtb2IiLCJpbml0aWFsaXplIiwiY29uZmlnIiwicGFnZXMiLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsIm5ldHdvcmtUaW1lb3V0IiwicmVxdWVzdCIsImRvd25sb2FkRmlsZSIsImRlYnVnIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwiaW50ZXJjZXB0IiwicCIsInRpbWVzdGFtcCIsIkRhdGUiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsInRlc3RBc3luYyIsInJlcyIsInd4IiwicmVkaXJlY3RUbyIsInVybCIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBRkEsSUFBTUEsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOztBQUVBQyx3QkFBS0MsVUFBTCxDQUNFLGtDQURGLEVBRUUsa0NBRkYsRUFHRSxrQ0FIRjs7Ozs7QUEwREUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQW5EZEMsTUFtRGMsR0FuREw7QUFDUEMsYUFBTyxDQUFDLFlBQUQsRUFBZSxZQUFmLEVBQTZCLGFBQTdCLEVBQTRDLFlBQTVDLENBREE7QUFFUEMsY0FBUTtBQUNOQyw2QkFBcUIsTUFEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFNBSGxCO0FBSU5DLGdDQUF3QixPQUpsQjtBQUtOQywrQkFBdUI7QUFMakIsT0FGRDtBQVNQQyxjQUFRO0FBQ05DLGVBQU8sTUFERDtBQUVOQyx1QkFBZSxNQUZUO0FBR05DLGNBQU0sQ0FFSjtBQUNFQyxvQkFBVSxZQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsNEJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBRkksRUFRRjtBQUNBSCxvQkFBVSxZQURWO0FBRUFDLGdCQUFNLElBRk47QUFHQUMsb0JBQVUsMkJBSFY7QUFJQUMsNEJBQWtCO0FBSmxCLFNBUkUsRUFjSjtBQUNFSCxvQkFBVSxhQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsK0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBZEksRUFvQko7QUFDRUgsb0JBQVUsWUFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLDRCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQXBCSTtBQUhBLE9BVEQ7QUF3Q1BDLHNCQUFnQjtBQUNkQyxpQkFBUyxLQURLO0FBRWRDLHNCQUFjO0FBRkEsT0F4Q1Q7QUE0Q1BDLGFBQU87QUE1Q0EsS0FtREs7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFDQSxVQUFLQyxTQUFMLENBQWUsU0FBZixFQUEwQjtBQUN4QjtBQUNBdkIsWUFGd0Isa0JBRWpCd0IsQ0FGaUIsRUFFZDtBQUNSO0FBQ0FBLFVBQUVDLFNBQUYsR0FBYyxDQUFDLElBQUlDLElBQUosRUFBZjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLGtCQUFaLEVBQWdDSixDQUFoQztBQUNBO0FBQ0EsZUFBT0EsQ0FBUDtBQUNELE9BUnVCOzs7QUFVeEI7QUFDQUssYUFYd0IsbUJBV2hCTCxDQVhnQixFQVdiO0FBQ1Q7QUFDQUcsZ0JBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0osQ0FBakM7QUFDQTtBQUNBLGVBQU9BLENBQVA7QUFDRCxPQWhCdUI7OztBQWtCeEI7QUFDQU0sVUFuQndCLGdCQW1CbkJOLENBbkJtQixFQW1CaEI7QUFDTkcsZ0JBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkosQ0FBOUI7QUFDQTtBQUNBLGVBQU9BLENBQVA7QUFDRCxPQXZCdUI7OztBQXlCeEI7QUFDQU8sY0ExQndCLG9CQTBCZlAsQ0ExQmUsRUEwQlo7QUFDVkcsZ0JBQVFDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0osQ0FBbEM7QUFDRDtBQTVCdUIsS0FBMUI7QUFKWTtBQWtDYjs7OzsrQkFFVTtBQUNULFdBQUtRLFNBQUw7QUFDRDs7O21DQUNjQyxHLEVBQUs7QUFDbEJDLFNBQUdDLFVBQUgsQ0FBYztBQUNaQyxhQUFLO0FBRE8sT0FBZCxFQURrQixDQUdkO0FBQ0w7OzswQkFFS0MsQyxFQUFHO0FBQ1AsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTmhCLHdCQUFRQyxHQUFSLENBQVllLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztFQXpIMkJDLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbic7XG5cbmltcG9ydCB7IHNldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCc7XG5pbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKTtcbnNldFN0b3JlKHN0b3JlKTtcbmltcG9ydCBCbW9iIGZyb20gJ2h5ZHJvZ2VuLWpzLXNkayc7XG5CbW9iLmluaXRpYWxpemUoXG4gICdkYTQwZDA5Mjc2ZmNjOTFiNzVlYmEzNDY1N2Q4MWY2MScsXG4gICc0ZTIxNjJhNzA4NjgzOTk0NmQ3ZGYyZjQzNGU0MWZmMCcsXG4gICdjZTViYWI3YmRjYzNiYzY1NDM0NGZmYzU1Y2M2OWJlYidcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFsncGFnZXMvaG9tZScsICdwYWdlcy90ZXN0JywgJ3BhZ2VzL2luZGV4JywgJ3BhZ2VzL21pbmUnXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQxJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgICB9LFxuICAgIHRhYkJhcjoge1xuICAgICAgY29sb3I6ICcjY2NjJyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMDAwJyxcbiAgICAgIGxpc3Q6IFtcbiAgICAgIFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lJyxcbiAgICAgICAgICB0ZXh0OiAn6aaW6aG1JyxcbiAgICAgICAgICBpY29uUGF0aDogJy4vaW1ncy90YWJfaG9tZV9ub3JAMngucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWdzL3RhYl9ob21lX3NlbEAyeC5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdGVzdCcsXG4gICAgICAgICAgdGV4dDogJ+a1i+S4gCcsXG4gICAgICAgICAgaWNvblBhdGg6ICcuL2ltZ3MvdGFiX2Nhcl9ub3JAMngucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWdzL3RhYl9jYXJfc2VsQDJ4LnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICfmtYsyJyxcbiAgICAgICAgICBpY29uUGF0aDogJy4vaW1ncy90YWJfdXNlZGNhcl9ub3JAMngucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWdzL3RhYl91c2VkY2FyX3NlbEAyeC5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21pbmUnLFxuICAgICAgICAgIHRleHQ6ICfmiJHnmoQnLFxuICAgICAgICAgIGljb25QYXRoOiAnLi9pbWdzL3RhYl9taW5lX25vckAyeC5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltZ3MvdGFiX21pbmVfc2VsQDJ4LnBuZydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgbmV0d29ya1RpbWVvdXQ6IHtcbiAgICAgIHJlcXVlc3Q6IDEwMDAwLFxuICAgICAgZG93bmxvYWRGaWxlOiAxMDAwMFxuICAgIH0sXG4gICAgZGVidWc6IHRydWVcbiAgfTtcblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpO1xuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcbiAgICB0aGlzLmludGVyY2VwdCgncmVxdWVzdCcsIHtcbiAgICAgIC8vIOWPkeWHuuivt+axguaXtueahOWbnuiwg+WHveaVsFxuICAgICAgY29uZmlnKHApIHtcbiAgICAgICAgLy8g5a+55omA5pyJcmVxdWVzdOivt+axguS4reeahE9CSkVDVOWPguaVsOWvueixoee7n+S4gOmZhOWKoOaXtumXtOaIs+WxnuaAp1xuICAgICAgICBwLnRpbWVzdGFtcCA9ICtuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnY29uZmlnIHJlcXVlc3Q6ICcsIHApO1xuICAgICAgICAvLyDlv4Xpobvov5Tlm55PQkpFQ1Tlj4LmlbDlr7nosaHvvIzlkKbliJnml6Dms5Xlj5HpgIHor7fmsYLliLDmnI3liqHnq69cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9LFxuXG4gICAgICAvLyDor7fmsYLmiJDlip/lkI7nmoTlm57osIPlh73mlbBcbiAgICAgIHN1Y2Nlc3MocCkge1xuICAgICAgICAvLyDlj6/ku6XlnKjov5nph4zlr7nmlLbliLDnmoTlk43lupTmlbDmja7lr7nosaHov5vooYzliqDlt6XlpITnkIZcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VzczogJywgcCk7XG4gICAgICAgIC8vIOW/hemhu+i/lOWbnuWTjeW6lOaVsOaNruWvueixoe+8jOWQpuWImeWQjue7reaXoOazleWvueWTjeW6lOaVsOaNrui/m+ihjOWkhOeQhlxuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH0sXG5cbiAgICAgIC8v6K+35rGC5aSx6LSl5ZCO55qE5Zue6LCD5Ye95pWwXG4gICAgICBmYWlsKHApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbDogJywgcCk7XG4gICAgICAgIC8vIOW/hemhu+i/lOWbnuWTjeW6lOaVsOaNruWvueixoe+8jOWQpuWImeWQjue7reaXoOazleWvueWTjeW6lOaVsOaNrui/m+ihjOWkhOeQhlxuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH0sXG5cbiAgICAgIC8vIOivt+axguWujOaIkOaXtueahOWbnuiwg+WHveaVsCjor7fmsYLmiJDlip/miJblpLHotKXpg73kvJrooqvmiafooYwpXG4gICAgICBjb21wbGV0ZShwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGNvbXBsZXRlOiAnLCBwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIHRoaXMudGVzdEFzeW5jKCk7XG4gIH1cbiAgb25QYWdlTm90Rm91bmQocmVzKSB7XG4gICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICB1cmw6ICdwYWdlcy9lcnInXG4gICAgfSk7IC8vIOWmguaenOaYryB0YWJiYXIg6aG16Z2i77yM6K+35L2/55SoIHd4LnN3aXRjaFRhYlxuICB9XG5cbiAgc2xlZXAocykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpO1xuICAgICAgfSwgcyAqIDEwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdGVzdEFzeW5jKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9XG5cbiAgLy8gZ2V0VXNlckluZm8oY2IpIHtcbiAgLy8gICBjb25zdCB0aGF0ID0gdGhpcztcbiAgLy8gICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gIC8vICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvO1xuICAvLyAgIH1cbiAgLy8gICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgLy8gICAgIHN1Y2Nlc3MocmVzKSB7XG4gIC8vICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mbztcbiAgLy8gICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfVxufVxuIl19