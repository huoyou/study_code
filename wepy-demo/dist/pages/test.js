'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _hydrogenJsSdk = require('./../npm/hydrogen-js-sdk/src/lib/app.js');

var _hydrogenJsSdk2 = _interopRequireDefault(_hydrogenJsSdk);

var _api = require('./../api/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_hydrogenJsSdk2.default.initialize('da40d09276fcc91b75eba34657d81f61', '4e2162a7086839946d7df2f434e41ff0', 'ce5bab7bdcc3bc654344ffc55cc69beb');

var MyPage = function (_wepy$page) {
  _inherits(MyPage, _wepy$page);

  function MyPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyPage.__proto__ || Object.getPrototypeOf(MyPage)).call.apply(_ref, [this].concat(args))), _this), _this.customData = {}, _this.config = {}, _this.data = {
      msg: 'hello wepy',
      userInfo: null,
      condition: true,
      isChecked: true,
      flag: false,
      name: 'MINA',
      list: [0, 1, 2, 3, 4]
    }, _this.components = {}, _this.mixins = [], _this.computed = {}, _this.watch = {}, _this.methods = {
      tapName: function tapName() {
        console.log('tapName');
        //    wx.navigateTo
        _wepy2.default.switchTab({ url: 'index' });
      },
      uploadImg1: function uploadImg1() {
        var param = {
          token: "bf2593fa-6e7b-47b3-b9f8-e9cdd99d1bf9",
          biz_no: this.access_token.biz_no
        };
        (0, _api.post)('/api/identify/getResult', param).then(function (res) {
          console.log('res', res);
          // if (res.code == 200) {
          //   this.imgSrc = url;
          //   this.msg = "活体验证成功!";
          // } else {
          //   this.imgSrc = url1;
          //   this.msg = "活体验证失败!";
          // }
        });
      },
      uploadImg: function uploadImg() {
        var that = this;
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            console.log(1111);
            var tempFilePaths = res.tempFilePaths;
            if (tempFilePaths.length > 0) {
              var date = that.methods.formdata();
              var name = date + '.jpg'; //上传的图片的别名，建议可以用日期命名
              var file = _hydrogenJsSdk2.default.File(name, tempFilePaths[0]);
              file.save().then(function (res) {
                console.log(res);
                var query = _hydrogenJsSdk2.default.Query('photlList');
                query.set('url', res[0].url);
                query.set('filename', res[0].filename);
                query.save().then(function (res) {
                  console.log(res);
                }).catch(function (err) {
                  console.log(err);
                });
              }, function (error) {
                console.log(error);
              });
            }
          },
          errer: function errer(err) {
            console.log(err);
          }
        });
      },
      formdata: function formdata() {
        var date = new Date();
        var time = Date.parse(date);
        var time1 = time / 1000;
        return time1;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyPage, [{
    key: 'customFunction',
    // 自定义数据

    value: function customFunction() {} //自定义方法

  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var userInfo, param, param1;
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
                console.log(111, _wepy2.default.$appConfig.rootURL);
                param = {};
                param1 = {
                  accessReportNo: 'ZR190411015'
                };

                (0, _api.post)('/api/rmAccessTemplate/selectAll', param).then(function (res) {
                  console.log(1111, res);
                });
                (0, _api.get)('/api/rmAccessReportFeeDetail/getFeeDetailList', param1).then(function (res) {
                  console.log(2222, res);
                });

              case 11:
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
    }() // 只在Page实例中存在的配置数据，对应于原生的page.json文件

    // 页面所需数据均需在这里声明，可用于模板数据绑定

    // 声明页面中所引用的组件，或声明组件中所引用的子组件

    // 声明页面所引用的Mixin实例

    // 声明计算属性

    // 声明数据watcher

    // 声明页面wxml中标签的事件处理函数。注意，此处只用于声明页面wxml中标签的bind、catch事件，自定义方法需以自定义方法的方式声明

  }, {
    key: 'onPullDownRefresh',
    // 声明组件之间的事件处理函数
    value: function onPullDownRefresh() {
      console.log('下拉刷新');
    }
  }]);

  return MyPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MyPage , 'pages/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiQm1vYiIsImluaXRpYWxpemUiLCJNeVBhZ2UiLCJjdXN0b21EYXRhIiwiY29uZmlnIiwiZGF0YSIsIm1zZyIsInVzZXJJbmZvIiwiY29uZGl0aW9uIiwiaXNDaGVja2VkIiwiZmxhZyIsIm5hbWUiLCJsaXN0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImNvbXB1dGVkIiwid2F0Y2giLCJtZXRob2RzIiwidGFwTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5Iiwic3dpdGNoVGFiIiwidXJsIiwidXBsb2FkSW1nMSIsInBhcmFtIiwidG9rZW4iLCJiaXpfbm8iLCJhY2Nlc3NfdG9rZW4iLCJ0aGVuIiwicmVzIiwidXBsb2FkSW1nIiwidGhhdCIsInd4IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJ0ZW1wRmlsZVBhdGhzIiwibGVuZ3RoIiwiZGF0ZSIsImZvcm1kYXRhIiwiZmlsZSIsIkZpbGUiLCJzYXZlIiwicXVlcnkiLCJRdWVyeSIsInNldCIsImZpbGVuYW1lIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImVycmVyIiwiRGF0ZSIsInRpbWUiLCJwYXJzZSIsInRpbWUxIiwiZXZlbnRzIiwibG9naW4iLCJnZXRVc2VySW5mbyIsIiRhcHBDb25maWciLCJyb290VVJMIiwicGFyYW0xIiwiYWNjZXNzUmVwb3J0Tm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBTUE7Ozs7Ozs7Ozs7OztBQUxBQSx3QkFBS0MsVUFBTCxDQUNFLGtDQURGLEVBRUUsa0NBRkYsRUFHRSxrQ0FIRjs7SUFNcUJDLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsVSxHQUFhLEUsUUFzQmJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxXQUFLLFlBREE7QUFFTEMsZ0JBQVUsSUFGTDtBQUdMQyxpQkFBVyxJQUhOO0FBSUxDLGlCQUFXLElBSk47QUFL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LHdCOztBQUNKLHFCQUFLQSxRQUFMLEdBQWdCQSxTQUFTQSxRQUF6QjtBQUNBWSx3QkFBUUMsR0FBUixDQUFZLEdBQVosRUFBZ0JDLGVBQUt3QyxVQUFMLENBQWdCQyxPQUFoQztBQUNLckMscUIsR0FBUSxFO0FBRVJzQyxzQixHQUFTO0FBQ1ZDLGtDQUFnQjtBQUROLGlCOztBQUdaLGtFQUF3Q3ZDLEtBQXhDLEVBQStDSSxJQUEvQyxDQUFvRCxlQUFPO0FBQ3pEViwwQkFBUUMsR0FBUixDQUFZLElBQVosRUFBaUJVLEdBQWpCO0FBQ0QsaUJBRkQ7QUFHQSwrRUFBcURpQyxNQUFyRCxFQUE2RGxDLElBQTdELENBQWtFLGVBQU87QUFDdkVWLDBCQUFRQyxHQUFSLENBQVksSUFBWixFQUFpQlUsR0FBakI7QUFDRCxpQkFGRDs7Ozs7Ozs7Ozs7Ozs7O1FBS1M7O0FBVVY7O0FBRWM7O0FBRUo7O0FBRUU7O0FBRUg7O0FBcUVUOzs7O0FBRVU7d0NBQ087QUFDbEJYLGNBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7Ozs7RUFuSGlDQyxlQUFLNEMsSTs7a0JBQXBCL0QsTSIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgQm1vYiBmcm9tICdoeWRyb2dlbi1qcy1zZGsnO1xyXG5CbW9iLmluaXRpYWxpemUoXHJcbiAgJ2RhNDBkMDkyNzZmY2M5MWI3NWViYTM0NjU3ZDgxZjYxJyxcclxuICAnNGUyMTYyYTcwODY4Mzk5NDZkN2RmMmY0MzRlNDFmZjAnLFxyXG4gICdjZTViYWI3YmRjYzNiYzY1NDM0NGZmYzU1Y2M2OWJlYidcclxuKTtcclxuaW1wb3J0IHtnZXQscG9zdH0gZnJvbSAnLi4vYXBpL2FwaS5qcydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjdXN0b21EYXRhID0ge307IC8vIOiHquWumuS5ieaVsOaNrlxyXG5cclxuICBjdXN0b21GdW5jdGlvbigpIHt9IC8v6Ieq5a6a5LmJ5pa55rOVXHJcbiAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgLy8g5ZyoUGFnZeWSjENvbXBvbmVudOWFseeUqOeahOeUn+WRveWRqOacn+WHveaVsFxyXG4gICAgYXdhaXQgd2VweS5sb2dpbigpO1xyXG4gICAgbGV0IHVzZXJJbmZvID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpO1xyXG4gICAgdGhpcy51c2VySW5mbyA9IHVzZXJJbmZvLnVzZXJJbmZvO1xyXG4gICAgY29uc29sZS5sb2coMTExLHdlcHkuJGFwcENvbmZpZy5yb290VVJMKTtcclxuICAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgIH07XHJcbiAgICAgbGV0IHBhcmFtMSA9IHtcclxuICAgICAgICBhY2Nlc3NSZXBvcnRObzogJ1pSMTkwNDExMDE1J1xyXG4gICAgICB9O1xyXG4gICAgICBwb3N0KGAvYXBpL3JtQWNjZXNzVGVtcGxhdGUvc2VsZWN0QWxsYCwgcGFyYW0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygxMTExLHJlcylcclxuICAgICAgfSk7XHJcbiAgICAgIGdldChgL2FwaS9ybUFjY2Vzc1JlcG9ydEZlZURldGFpbC9nZXRGZWVEZXRhaWxMaXN0YCwgcGFyYW0xKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coMjIyMixyZXMpXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uZmlnID0ge307IC8vIOWPquWcqFBhZ2Xlrp7kvovkuK3lrZjlnKjnmoTphY3nva7mlbDmja7vvIzlr7nlupTkuo7ljp/nlJ/nmoRwYWdlLmpzb27mlofku7ZcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIG1zZzogJ2hlbGxvIHdlcHknLFxyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgICBjb25kaXRpb246IHRydWUsXHJcbiAgICBpc0NoZWNrZWQ6IHRydWUsXHJcbiAgICBmbGFnOiBmYWxzZSxcclxuICAgIG5hbWU6ICdNSU5BJyxcclxuICAgIGxpc3Q6IFswLCAxLCAyLCAzLCA0XVxyXG4gIH07IC8vIOmhtemdouaJgOmcgOaVsOaNruWdh+mcgOWcqOi/memHjOWjsOaYju+8jOWPr+eUqOS6juaooeadv+aVsOaNrue7keWumlxyXG5cclxuICBjb21wb25lbnRzID0ge307IC8vIOWjsOaYjumhtemdouS4reaJgOW8leeUqOeahOe7hOS7tu+8jOaIluWjsOaYjue7hOS7tuS4reaJgOW8leeUqOeahOWtkOe7hOS7tlxyXG5cclxuICBtaXhpbnMgPSBbXTsgLy8g5aOw5piO6aG16Z2i5omA5byV55So55qETWl4aW7lrp7kvotcclxuXHJcbiAgY29tcHV0ZWQgPSB7fTsgLy8g5aOw5piO6K6h566X5bGe5oCnXHJcblxyXG4gIHdhdGNoID0ge307IC8vIOWjsOaYjuaVsOaNrndhdGNoZXJcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHRhcE5hbWUoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0YXBOYW1lJyk7XHJcbiAgICAgIC8vICAgIHd4Lm5hdmlnYXRlVG9cclxuICAgICAgd2VweS5zd2l0Y2hUYWIoeyB1cmw6ICdpbmRleCcgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBsb2FkSW1nMSgpIHtcclxuICAgICAgbGV0IHBhcmFtID0ge1xyXG4gICAgICAgIHRva2VuOiBcImJmMjU5M2ZhLTZlN2ItNDdiMy1iOWY4LWU5Y2RkOTlkMWJmOVwiLFxyXG4gICAgICAgIGJpel9ubzogdGhpcy5hY2Nlc3NfdG9rZW4uYml6X25vXHJcbiAgICAgIH07XHJcbiAgICAgIHBvc3QoYC9hcGkvaWRlbnRpZnkvZ2V0UmVzdWx0YCwgcGFyYW0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVzJyxyZXMpXHJcbiAgICAgICAgLy8gaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgIC8vICAgdGhpcy5pbWdTcmMgPSB1cmw7XHJcbiAgICAgICAgLy8gICB0aGlzLm1zZyA9IFwi5rS75L2T6aqM6K+B5oiQ5YqfIVwiO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICB0aGlzLmltZ1NyYyA9IHVybDE7XHJcbiAgICAgICAgLy8gICB0aGlzLm1zZyA9IFwi5rS75L2T6aqM6K+B5aSx6LSlIVwiO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBsb2FkSW1nKCkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxyXG4gICAgICAgIHNpemVUeXBlOiBbJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygxMTExKTtcclxuICAgICAgICAgIHZhciB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XHJcbiAgICAgICAgICBpZiAodGVtcEZpbGVQYXRocy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlID0gdGhhdC5tZXRob2RzLmZvcm1kYXRhKCk7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gYCR7ZGF0ZX0uanBnYDsgLy/kuIrkvKDnmoTlm77niYfnmoTliKvlkI3vvIzlu7rorq7lj6/ku6XnlKjml6XmnJ/lkb3lkI1cclxuICAgICAgICAgICAgdmFyIGZpbGUgPSBCbW9iLkZpbGUobmFtZSwgdGVtcEZpbGVQYXRoc1swXSk7XHJcbiAgICAgICAgICAgIGZpbGUuc2F2ZSgpLnRoZW4oXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBCbW9iLlF1ZXJ5KCdwaG90bExpc3QnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LnNldCgndXJsJywgcmVzWzBdLnVybCk7XHJcbiAgICAgICAgICAgICAgICBxdWVyeS5zZXQoJ2ZpbGVuYW1lJywgcmVzWzBdLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICAgIC5zYXZlKClcclxuICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyZXI6IGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGZvcm1kYXRhKCkge1xyXG4gICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHZhciB0aW1lID0gRGF0ZS5wYXJzZShkYXRlKTtcclxuICAgICAgbGV0IHRpbWUxID0gdGltZSAvIDEwMDA7XHJcbiAgICAgIHJldHVybiB0aW1lMTtcclxuICAgIH1cclxuICB9OyAvLyDlo7DmmI7pobXpnaJ3eG1s5Lit5qCH562+55qE5LqL5Lu25aSE55CG5Ye95pWw44CC5rOo5oSP77yM5q2k5aSE5Y+q55So5LqO5aOw5piO6aG16Z2id3htbOS4reagh+etvueahGJpbmTjgIFjYXRjaOS6i+S7tu+8jOiHquWumuS5ieaWueazlemcgOS7peiHquWumuS5ieaWueazleeahOaWueW8j+WjsOaYjlxyXG5cclxuICBldmVudHMgPSB7fTsgLy8g5aOw5piO57uE5Lu25LmL6Ze055qE5LqL5Lu25aSE55CG5Ye95pWwXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICBjb25zb2xlLmxvZygn5LiL5ouJ5Yi35pawJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==