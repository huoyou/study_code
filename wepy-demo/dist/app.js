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
      pages: ['pages/mine', 'pages/test', 'pages/index', 'pages/home'],
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
  }, {
    key: 'getUserInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.globalData.userInfo) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', this.globalData.userInfo);

              case 2:
                _context2.next = 4;
                return _wepy2.default.login();

              case 4:
                _context2.next = 6;
                return _wepy2.default.getUserInfo();

              case 6:
                res = _context2.sent;

                this.globalData.userInfo = res.userInfo;
                return _context2.abrupt('return', res.userInfo);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUserInfo() {
        return _ref2.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"],"rootURL":"http://faceid.ufscs.com:8087"}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIkJtb2IiLCJpbml0aWFsaXplIiwiY29uZmlnIiwicGFnZXMiLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsIm5ldHdvcmtUaW1lb3V0IiwicmVxdWVzdCIsImRvd25sb2FkRmlsZSIsImRlYnVnIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwiaW50ZXJjZXB0IiwicCIsInRpbWVzdGFtcCIsIkRhdGUiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsInRlc3RBc3luYyIsInJlcyIsInd4IiwicmVkaXJlY3RUbyIsInVybCIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJ3ZXB5IiwibG9naW4iLCJnZXRVc2VySW5mbyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7OztBQUZBLElBQU1BLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7QUFFQUMsd0JBQUtDLFVBQUwsQ0FDRSxrQ0FERixFQUVFLGtDQUZGLEVBR0Usa0NBSEY7Ozs7O0FBMkRFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFwRGRDLE1Bb0RjLEdBcERMO0FBQ1BDLGFBQU8sQ0FBQyxZQUFELEVBQWUsWUFBZixFQUE2QixhQUE3QixFQUE0QyxZQUE1QyxDQURBO0FBRVBDLGNBQVE7QUFDTkMsNkJBQXFCLE1BRGY7QUFFTjtBQUNBQyxzQ0FBOEIsTUFIeEI7QUFJTkMsZ0NBQXdCLFNBSmxCO0FBS05DLGdDQUF3QixPQUxsQjtBQU1OQywrQkFBdUI7QUFOakIsT0FGRDtBQVVQQyxjQUFRO0FBQ05DLGVBQU8sTUFERDtBQUVOQyx1QkFBZSxNQUZUO0FBR05DLGNBQU0sQ0FFSjtBQUNFQyxvQkFBVSxhQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsNEJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBRkksRUFRSjtBQUNFSCxvQkFBVSxZQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsMkJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBUkksRUFjSjtBQUNFSCxvQkFBVSxZQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsK0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBZEksRUFvQko7QUFDRUgsb0JBQVUsWUFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLDRCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQXBCSTtBQUhBLE9BVkQ7QUF5Q1BDLHNCQUFnQjtBQUNkQyxpQkFBUyxLQURLO0FBRWRDLHNCQUFjO0FBRkEsT0F6Q1Q7QUE2Q1BDLGFBQU87QUE3Q0EsS0FvREs7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFDQSxVQUFLQyxTQUFMLENBQWUsU0FBZixFQUEwQjtBQUN4QjtBQUNBdkIsWUFGd0Isa0JBRWpCd0IsQ0FGaUIsRUFFZDtBQUNSO0FBQ0FBLFVBQUVDLFNBQUYsR0FBYyxDQUFDLElBQUlDLElBQUosRUFBZjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLGtCQUFaLEVBQWdDSixDQUFoQztBQUNBO0FBQ0EsZUFBT0EsQ0FBUDtBQUNELE9BUnVCOzs7QUFVeEI7QUFDQUssYUFYd0IsbUJBV2hCTCxDQVhnQixFQVdiO0FBQ1Q7QUFDQUcsZ0JBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0osQ0FBakM7QUFDQTtBQUNBLGVBQU9BLENBQVA7QUFDRCxPQWhCdUI7OztBQWtCeEI7QUFDQU0sVUFuQndCLGdCQW1CbkJOLENBbkJtQixFQW1CaEI7QUFDTkcsZ0JBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkosQ0FBOUI7QUFDQTtBQUNBLGVBQU9BLENBQVA7QUFDRCxPQXZCdUI7OztBQXlCeEI7QUFDQU8sY0ExQndCLG9CQTBCZlAsQ0ExQmUsRUEwQlo7QUFDVkcsZ0JBQVFDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0osQ0FBbEM7QUFDRDtBQTVCdUIsS0FBMUI7QUFKWTtBQWtDYjs7OzsrQkFFVTtBQUNULFdBQUtRLFNBQUw7QUFDRDs7O21DQUNjQyxHLEVBQUs7QUFDbEJDLFNBQUdDLFVBQUgsQ0FBYztBQUNaQyxhQUFLO0FBRE8sT0FBZCxFQURrQixDQUdkO0FBQ0w7OzswQkFFS0MsQyxFQUFHO0FBQ1AsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTmhCLHdCQUFRQyxHQUFSLENBQVllLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBSUksS0FBS3ZCLFVBQUwsQ0FBZ0JDLFE7Ozs7O2tEQUNYLEtBQUtELFVBQUwsQ0FBZ0JDLFE7Ozs7dUJBRW5CdUIsZUFBS0MsS0FBTCxFOzs7O3VCQUNVRCxlQUFLRSxXQUFMLEU7OztBQUFaYixtQjs7QUFDSixxQkFBS2IsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJZLElBQUlaLFFBQS9CO2tEQUNPWSxJQUFJWixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdEhjdUIsZUFBS0csRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nO1xyXG5cclxuICBpbXBvcnQgeyBzZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnO1xyXG4gIGltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJztcclxuXHJcbiAgY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpO1xyXG4gIHNldFN0b3JlKHN0b3JlKTtcclxuICBpbXBvcnQgQm1vYiBmcm9tICdoeWRyb2dlbi1qcy1zZGsnO1xyXG4gIEJtb2IuaW5pdGlhbGl6ZShcclxuICAgICdkYTQwZDA5Mjc2ZmNjOTFiNzVlYmEzNDY1N2Q4MWY2MScsXHJcbiAgICAnNGUyMTYyYTcwODY4Mzk5NDZkN2RmMmY0MzRlNDFmZjAnLFxyXG4gICAgJ2NlNWJhYjdiZGNjM2JjNjU0MzQ0ZmZjNTVjYzY5YmViJ1xyXG4gICk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBwYWdlczogWydwYWdlcy9taW5lJywgJ3BhZ2VzL3Rlc3QnLCAncGFnZXMvaW5kZXgnLCAncGFnZXMvaG9tZSddLFxyXG4gICAgICB3aW5kb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaycsXHJcbiAgICAgICAgLy8gbmF2aWdhdGlvblN0eWxlOiAnY3VzdG9tJyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdDEnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXHJcbiAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHRhYkJhcjoge1xyXG4gICAgICAgIGNvbG9yOiAnI2NjYycsXHJcbiAgICAgICAgc2VsZWN0ZWRDb2xvcjogJyMwMDAnLFxyXG4gICAgICAgIGxpc3Q6IFtcclxuXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAgICAgICB0ZXh0OiAn6aaW6aG1JyxcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuL2ltZ3MvdGFiX2hvbWVfbm9yQDJ4LnBuZycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltZ3MvdGFiX2hvbWVfc2VsQDJ4LnBuZydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdGVzdCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICfmtYvkuIAnLFxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4vaW1ncy90YWJfY2FyX25vckAyeC5wbmcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWdzL3RhYl9jYXJfc2VsQDJ4LnBuZydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaG9tZScsXHJcbiAgICAgICAgICAgIHRleHQ6ICfnhafniYcnLFxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4vaW1ncy90YWJfdXNlZGNhcl9ub3JAMngucG5nJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1ncy90YWJfdXNlZGNhcl9zZWxAMngucG5nJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9taW5lJyxcclxuICAgICAgICAgICAgdGV4dDogJ+aIkeeahCcsXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi9pbWdzL3RhYl9taW5lX25vckAyeC5wbmcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWdzL3RhYl9taW5lX3NlbEAyeC5wbmcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICBuZXR3b3JrVGltZW91dDoge1xyXG4gICAgICAgIHJlcXVlc3Q6IDEwMDAwLFxyXG4gICAgICAgIGRvd25sb2FkRmlsZTogMTAwMDBcclxuICAgICAgfSxcclxuICAgICAgZGVidWc6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgZ2xvYmFsRGF0YSA9IHtcclxuICAgICAgdXNlckluZm86IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XHJcbiAgICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XHJcbiAgICAgICAgLy8g5Y+R5Ye66K+35rGC5pe255qE5Zue6LCD5Ye95pWwXHJcbiAgICAgICAgY29uZmlnKHApIHtcclxuICAgICAgICAgIC8vIOWvueaJgOaciXJlcXVlc3Tor7fmsYLkuK3nmoRPQkpFQ1Tlj4LmlbDlr7nosaHnu5/kuIDpmYTliqDml7bpl7TmiLPlsZ7mgKdcclxuICAgICAgICAgIHAudGltZXN0YW1wID0gK25ldyBEYXRlKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnY29uZmlnIHJlcXVlc3Q6ICcsIHApO1xyXG4gICAgICAgICAgLy8g5b+F6aG76L+U5ZueT0JKRUNU5Y+C5pWw5a+56LGh77yM5ZCm5YiZ5peg5rOV5Y+R6YCB6K+35rGC5Yiw5pyN5Yqh56uvXHJcbiAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDor7fmsYLmiJDlip/lkI7nmoTlm57osIPlh73mlbBcclxuICAgICAgICBzdWNjZXNzKHApIHtcclxuICAgICAgICAgIC8vIOWPr+S7peWcqOi/memHjOWvueaUtuWIsOeahOWTjeW6lOaVsOaNruWvueixoei/m+ihjOWKoOW3peWkhOeQhlxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VzczogJywgcCk7XHJcbiAgICAgICAgICAvLyDlv4Xpobvov5Tlm57lk43lupTmlbDmja7lr7nosaHvvIzlkKbliJnlkI7nu63ml6Dms5Xlr7nlk43lupTmlbDmja7ov5vooYzlpITnkIZcclxuICAgICAgICAgIHJldHVybiBwO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8v6K+35rGC5aSx6LSl5ZCO55qE5Zue6LCD5Ye95pWwXHJcbiAgICAgICAgZmFpbChwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsOiAnLCBwKTtcclxuICAgICAgICAgIC8vIOW/hemhu+i/lOWbnuWTjeW6lOaVsOaNruWvueixoe+8jOWQpuWImeWQjue7reaXoOazleWvueWTjeW6lOaVsOaNrui/m+ihjOWkhOeQhlxyXG4gICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g6K+35rGC5a6M5oiQ5pe255qE5Zue6LCD5Ye95pWwKOivt+axguaIkOWKn+aIluWksei0pemDveS8muiiq+aJp+ihjClcclxuICAgICAgICBjb21wbGV0ZShwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBjb21wbGV0ZTogJywgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxhdW5jaCgpIHtcclxuICAgICAgdGhpcy50ZXN0QXN5bmMoKTtcclxuICAgIH1cclxuICAgIG9uUGFnZU5vdEZvdW5kKHJlcykge1xyXG4gICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICB1cmw6ICdwYWdlcy9lcnInXHJcbiAgICAgIH0pOyAvLyDlpoLmnpzmmK8gdGFiYmFyIOmhtemdou+8jOivt+S9v+eUqCB3eC5zd2l0Y2hUYWJcclxuICAgIH1cclxuXHJcbiAgICBzbGVlcChzKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJyk7XHJcbiAgICAgICAgfSwgcyAqIDEwMDApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB0ZXN0QXN5bmMoKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRVc2VySW5mbygpIHtcclxuICAgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm87XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgd2VweS5sb2dpbigpO1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpO1xyXG4gICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XHJcbiAgICAgIHJldHVybiByZXMudXNlckluZm87XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=