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
      pages: ['pages/test', 'pages/index', 'pages/home', 'pages/mine'],
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
          pagePath: 'pages/index',
          text: '首页',
          iconPath: './imgs/tab_home_nor@2x.png',
          selectedIconPath: './imgs/tab_home_sel@2x.png'
        }, {
          pagePath: 'pages/test',
          text: '测一',
          iconPath: './imgs/tab_car_nor@2x.png',
          selectedIconPath: './imgs/tab_car_sel@2x.png'
        }, {
          pagePath: 'pages/home',
          text: '照片',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIkJtb2IiLCJpbml0aWFsaXplIiwiY29uZmlnIiwicGFnZXMiLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsIm5ldHdvcmtUaW1lb3V0IiwicmVxdWVzdCIsImRvd25sb2FkRmlsZSIsImRlYnVnIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwiaW50ZXJjZXB0IiwicCIsInRpbWVzdGFtcCIsIkRhdGUiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsInRlc3RBc3luYyIsInJlcyIsInd4IiwicmVkaXJlY3RUbyIsInVybCIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBRkEsSUFBTUEsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOztBQUVBQyx3QkFBS0MsVUFBTCxDQUNFLGtDQURGLEVBRUUsa0NBRkYsRUFHRSxrQ0FIRjs7Ozs7QUEwREUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQW5EZEMsTUFtRGMsR0FuREw7QUFDUEMsYUFBTyxDQUFDLFlBQUQsRUFBZSxhQUFmLEVBQTZCLFlBQTdCLEVBQTRDLFlBQTVDLENBREE7QUFFUEMsY0FBUTtBQUNOQyw2QkFBcUIsTUFEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFNBSGxCO0FBSU5DLGdDQUF3QixPQUpsQjtBQUtOQywrQkFBdUI7QUFMakIsT0FGRDtBQVNQQyxjQUFRO0FBQ05DLGVBQU8sTUFERDtBQUVOQyx1QkFBZSxNQUZUO0FBR05DLGNBQU0sQ0FFSjtBQUNFQyxvQkFBVSxhQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsNEJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBRkksRUFRRjtBQUNBSCxvQkFBVSxZQURWO0FBRUFDLGdCQUFNLElBRk47QUFHQUMsb0JBQVUsMkJBSFY7QUFJQUMsNEJBQWtCO0FBSmxCLFNBUkUsRUFjSjtBQUNFSCxvQkFBVSxZQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsK0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBZEksRUFvQko7QUFDRUgsb0JBQVUsWUFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLDRCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQXBCSTtBQUhBLE9BVEQ7QUF3Q1BDLHNCQUFnQjtBQUNkQyxpQkFBUyxLQURLO0FBRWRDLHNCQUFjO0FBRkEsT0F4Q1Q7QUE0Q1BDLGFBQU87QUE1Q0EsS0FtREs7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFDQSxVQUFLQyxTQUFMLENBQWUsU0FBZixFQUEwQjtBQUN4QjtBQUNBdkIsWUFGd0Isa0JBRWpCd0IsQ0FGaUIsRUFFZDtBQUNSO0FBQ0FBLFVBQUVDLFNBQUYsR0FBYyxDQUFDLElBQUlDLElBQUosRUFBZjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLGtCQUFaLEVBQWdDSixDQUFoQztBQUNBO0FBQ0EsZUFBT0EsQ0FBUDtBQUNELE9BUnVCOzs7QUFVeEI7QUFDQUssYUFYd0IsbUJBV2hCTCxDQVhnQixFQVdiO0FBQ1Q7QUFDQUcsZ0JBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0osQ0FBakM7QUFDQTtBQUNBLGVBQU9BLENBQVA7QUFDRCxPQWhCdUI7OztBQWtCeEI7QUFDQU0sVUFuQndCLGdCQW1CbkJOLENBbkJtQixFQW1CaEI7QUFDTkcsZ0JBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkosQ0FBOUI7QUFDQTtBQUNBLGVBQU9BLENBQVA7QUFDRCxPQXZCdUI7OztBQXlCeEI7QUFDQU8sY0ExQndCLG9CQTBCZlAsQ0ExQmUsRUEwQlo7QUFDVkcsZ0JBQVFDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0osQ0FBbEM7QUFDRDtBQTVCdUIsS0FBMUI7QUFKWTtBQWtDYjs7OzsrQkFFVTtBQUNULFdBQUtRLFNBQUw7QUFDRDs7O21DQUNjQyxHLEVBQUs7QUFDbEJDLFNBQUdDLFVBQUgsQ0FBYztBQUNaQyxhQUFLO0FBRE8sT0FBZCxFQURrQixDQUdkO0FBQ0w7OzswQkFFS0MsQyxFQUFHO0FBQ1AsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTmhCLHdCQUFRQyxHQUFSLENBQVllLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztFQXpIMkJDLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nO1xyXG5cclxuaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4JztcclxuaW1wb3J0IGNvbmZpZ1N0b3JlIGZyb20gJy4vc3RvcmUnO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpO1xyXG5zZXRTdG9yZShzdG9yZSk7XHJcbmltcG9ydCBCbW9iIGZyb20gJ2h5ZHJvZ2VuLWpzLXNkayc7XHJcbkJtb2IuaW5pdGlhbGl6ZShcclxuICAnZGE0MGQwOTI3NmZjYzkxYjc1ZWJhMzQ2NTdkODFmNjEnLFxyXG4gICc0ZTIxNjJhNzA4NjgzOTk0NmQ3ZGYyZjQzNGU0MWZmMCcsXHJcbiAgJ2NlNWJhYjdiZGNjM2JjNjU0MzQ0ZmZjNTVjYzY5YmViJ1xyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFsncGFnZXMvdGVzdCcsICdwYWdlcy9pbmRleCcsJ3BhZ2VzL2hvbWUnLCAgJ3BhZ2VzL21pbmUnXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaycsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdDEnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxyXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgY29sb3I6ICcjY2NjJyxcclxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMwMDAnLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAgICAgdGV4dDogJ+mmlumhtScsXHJcbiAgICAgICAgICBpY29uUGF0aDogJy4vaW1ncy90YWJfaG9tZV9ub3JAMngucG5nJyxcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltZ3MvdGFiX2hvbWVfc2VsQDJ4LnBuZydcclxuICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy90ZXN0JyxcclxuICAgICAgICAgIHRleHQ6ICfmtYvkuIAnLFxyXG4gICAgICAgICAgaWNvblBhdGg6ICcuL2ltZ3MvdGFiX2Nhcl9ub3JAMngucG5nJyxcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltZ3MvdGFiX2Nhcl9zZWxAMngucG5nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lJyxcclxuICAgICAgICAgIHRleHQ6ICfnhafniYcnLFxyXG4gICAgICAgICAgaWNvblBhdGg6ICcuL2ltZ3MvdGFiX3VzZWRjYXJfbm9yQDJ4LnBuZycsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWdzL3RhYl91c2VkY2FyX3NlbEAyeC5wbmcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21pbmUnLFxyXG4gICAgICAgICAgdGV4dDogJ+aIkeeahCcsXHJcbiAgICAgICAgICBpY29uUGF0aDogJy4vaW1ncy90YWJfbWluZV9ub3JAMngucG5nJyxcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltZ3MvdGFiX21pbmVfc2VsQDJ4LnBuZydcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICBuZXR3b3JrVGltZW91dDoge1xyXG4gICAgICByZXF1ZXN0OiAxMDAwMCxcclxuICAgICAgZG93bmxvYWRGaWxlOiAxMDAwMFxyXG4gICAgfSxcclxuICAgIGRlYnVnOiB0cnVlXHJcbiAgfTtcclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcclxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcclxuICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xyXG4gICAgICAvLyDlj5Hlh7ror7fmsYLml7bnmoTlm57osIPlh73mlbBcclxuICAgICAgY29uZmlnKHApIHtcclxuICAgICAgICAvLyDlr7nmiYDmnIlyZXF1ZXN06K+35rGC5Lit55qET0JKRUNU5Y+C5pWw5a+56LGh57uf5LiA6ZmE5Yqg5pe26Ze05oiz5bGe5oCnXHJcbiAgICAgICAgcC50aW1lc3RhbXAgPSArbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29uZmlnIHJlcXVlc3Q6ICcsIHApO1xyXG4gICAgICAgIC8vIOW/hemhu+i/lOWbnk9CSkVDVOWPguaVsOWvueixoe+8jOWQpuWImeaXoOazleWPkemAgeivt+axguWIsOacjeWKoeerr1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g6K+35rGC5oiQ5Yqf5ZCO55qE5Zue6LCD5Ye95pWwXHJcbiAgICAgIHN1Y2Nlc3MocCkge1xyXG4gICAgICAgIC8vIOWPr+S7peWcqOi/memHjOWvueaUtuWIsOeahOWTjeW6lOaVsOaNruWvueixoei/m+ihjOWKoOW3peWkhOeQhlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2Nlc3M6ICcsIHApO1xyXG4gICAgICAgIC8vIOW/hemhu+i/lOWbnuWTjeW6lOaVsOaNruWvueixoe+8jOWQpuWImeWQjue7reaXoOazleWvueWTjeW6lOaVsOaNrui/m+ihjOWkhOeQhlxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy/or7fmsYLlpLHotKXlkI7nmoTlm57osIPlh73mlbBcclxuICAgICAgZmFpbChwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbDogJywgcCk7XHJcbiAgICAgICAgLy8g5b+F6aG76L+U5Zue5ZON5bqU5pWw5o2u5a+56LGh77yM5ZCm5YiZ5ZCO57ut5peg5rOV5a+55ZON5bqU5pWw5o2u6L+b6KGM5aSE55CGXHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDor7fmsYLlrozmiJDml7bnmoTlm57osIPlh73mlbAo6K+35rGC5oiQ5Yqf5oiW5aSx6LSl6YO95Lya6KKr5omn6KGMKVxyXG4gICAgICBjb21wbGV0ZShwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgY29tcGxldGU6ICcsIHApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgdGhpcy50ZXN0QXN5bmMoKTtcclxuICB9XHJcbiAgb25QYWdlTm90Rm91bmQocmVzKSB7XHJcbiAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgdXJsOiAncGFnZXMvZXJyJ1xyXG4gICAgfSk7IC8vIOWmguaenOaYryB0YWJiYXIg6aG16Z2i77yM6K+35L2/55SoIHd4LnN3aXRjaFRhYlxyXG4gIH1cclxuXHJcbiAgc2xlZXAocykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpO1xyXG4gICAgICB9LCBzICogMTAwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHRlc3RBc3luYygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvLyBnZXRVc2VySW5mbyhjYikge1xyXG4gIC8vICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgLy8gICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgLy8gICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm87XHJcbiAgLy8gICB9XHJcbiAgLy8gICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAvLyAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAvLyAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XHJcbiAgLy8gICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==