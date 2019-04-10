'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _hydrogenJsSdk = require('./../npm/hydrogen-js-sdk/src/lib/app.js');

var _hydrogenJsSdk2 = _interopRequireDefault(_hydrogenJsSdk);

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
        var userInfo;
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
                console.log(111, this.userInfo);

              case 7:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiQm1vYiIsImluaXRpYWxpemUiLCJNeVBhZ2UiLCJjdXN0b21EYXRhIiwiY29uZmlnIiwiZGF0YSIsIm1zZyIsInVzZXJJbmZvIiwiY29uZGl0aW9uIiwiaXNDaGVja2VkIiwiZmxhZyIsIm5hbWUiLCJsaXN0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImNvbXB1dGVkIiwid2F0Y2giLCJtZXRob2RzIiwidGFwTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5Iiwic3dpdGNoVGFiIiwidXJsIiwidXBsb2FkSW1nIiwidGhhdCIsInd4IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwibGVuZ3RoIiwiZGF0ZSIsImZvcm1kYXRhIiwiZmlsZSIsIkZpbGUiLCJzYXZlIiwidGhlbiIsInF1ZXJ5IiwiUXVlcnkiLCJzZXQiLCJmaWxlbmFtZSIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJlcnJlciIsIkRhdGUiLCJ0aW1lIiwicGFyc2UiLCJ0aW1lMSIsImV2ZW50cyIsImxvZ2luIiwiZ2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBQSx3QkFBS0MsVUFBTCxDQUNFLGtDQURGLEVBRUUsa0NBRkYsRUFHRSxrQ0FIRjs7SUFLcUJDLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsVSxHQUFhLEUsUUFXYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLFdBQUssWUFEQTtBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLGlCQUFXLElBSE47QUFJTEMsaUJBQVcsSUFKTjtBQUtMQyxZQUFNLEtBTEQ7QUFNTEMsWUFBTSxNQU5EO0FBT0xDLFlBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYjtBQVBELEssUUFVUEMsVSxHQUFhLEUsUUFFYkMsTSxHQUFTLEUsUUFFVEMsUSxHQUFXLEUsUUFFWEMsSyxHQUFRLEUsUUFFUkMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0U7QUFDUkMsZ0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0E7QUFDQUMsdUJBQUtDLFNBQUwsQ0FBZSxFQUFFQyxLQUFLLE9BQVAsRUFBZjtBQUNELE9BTE87QUFNUkMsZUFOUSx1QkFNSTtBQUNWLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxXQUFHQyxXQUFILENBQWU7QUFDYkMsaUJBQU8sQ0FETSxFQUNIO0FBQ1ZDLG9CQUFVLENBQUMsWUFBRCxDQUZHLEVBRWE7QUFDMUJDLHNCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIQyxFQUdvQjtBQUNqQ0MsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmIsb0JBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsZ0JBQUlhLGdCQUFnQkQsSUFBSUMsYUFBeEI7QUFDQSxnQkFBSUEsY0FBY0MsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUM1QixrQkFBSUMsT0FBT1YsS0FBS1IsT0FBTCxDQUFhbUIsUUFBYixFQUFYO0FBQ0Esa0JBQUl6QixPQUFVd0IsSUFBVixTQUFKLENBRjRCLENBRUY7QUFDMUIsa0JBQUlFLE9BQU9yQyx3QkFBS3NDLElBQUwsQ0FBVTNCLElBQVYsRUFBZ0JzQixjQUFjLENBQWQsQ0FBaEIsQ0FBWDtBQUNBSSxtQkFBS0UsSUFBTCxHQUFZQyxJQUFaLENBQ0UsVUFBU1IsR0FBVCxFQUFjO0FBQ1piLHdCQUFRQyxHQUFSLENBQVlZLEdBQVo7QUFDQSxvQkFBTVMsUUFBUXpDLHdCQUFLMEMsS0FBTCxDQUFXLFdBQVgsQ0FBZDtBQUNBRCxzQkFBTUUsR0FBTixDQUFVLEtBQVYsRUFBaUJYLElBQUksQ0FBSixFQUFPVCxHQUF4QjtBQUNBa0Isc0JBQU1FLEdBQU4sQ0FBVSxVQUFWLEVBQXNCWCxJQUFJLENBQUosRUFBT1ksUUFBN0I7QUFDQUgsc0JBQ0dGLElBREgsR0FFR0MsSUFGSCxDQUVRLGVBQU87QUFDWHJCLDBCQUFRQyxHQUFSLENBQVlZLEdBQVo7QUFDRCxpQkFKSCxFQUtHYSxLQUxILENBS1MsZUFBTztBQUNaMUIsMEJBQVFDLEdBQVIsQ0FBWTBCLEdBQVo7QUFDRCxpQkFQSDtBQVFELGVBZEgsRUFlRSxVQUFTQyxLQUFULEVBQWdCO0FBQ2Q1Qix3QkFBUUMsR0FBUixDQUFZMkIsS0FBWjtBQUNELGVBakJIO0FBbUJEO0FBQ0YsV0EvQlk7QUFnQ2JDLGlCQUFPLGVBQVNGLEdBQVQsRUFBYztBQUNuQjNCLG9CQUFRQyxHQUFSLENBQVkwQixHQUFaO0FBQ0Q7QUFsQ1ksU0FBZjtBQW9DRCxPQTVDTztBQTZDUlYsY0E3Q1Esc0JBNkNHO0FBQ1QsWUFBSUQsT0FBTyxJQUFJYyxJQUFKLEVBQVg7QUFDQSxZQUFJQyxPQUFPRCxLQUFLRSxLQUFMLENBQVdoQixJQUFYLENBQVg7QUFDQSxZQUFJaUIsUUFBUUYsT0FBTyxJQUFuQjtBQUNBLGVBQU9FLEtBQVA7QUFDRDtBQWxETyxLLFFBcURWQyxNLEdBQVMsRTs7Ozs7QUFwRlE7O3FDQUVBLENBQUUsQyxDQUFDOzs7Ozs7Ozs7Ozs7dUJBR1poQyxlQUFLaUMsS0FBTCxFOzs7O3VCQUNlakMsZUFBS2tDLFdBQUwsRTs7O0FBQWpCaEQsd0I7O0FBQ0oscUJBQUtBLFFBQUwsR0FBZ0JBLFNBQVNBLFFBQXpCO0FBQ0FZLHdCQUFRQyxHQUFSLENBQVksR0FBWixFQUFnQixLQUFLYixRQUFyQjs7Ozs7Ozs7Ozs7Ozs7O1FBR1c7O0FBVVY7O0FBRWM7O0FBRUo7O0FBRUU7O0FBRUg7O0FBcURUOzs7O0FBRVU7d0NBQ087QUFDbEJZLGNBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7Ozs7RUF4RmlDQyxlQUFLbUMsSTs7a0JBQXBCdEQsTSIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgQm1vYiBmcm9tICdoeWRyb2dlbi1qcy1zZGsnO1xyXG5CbW9iLmluaXRpYWxpemUoXHJcbiAgJ2RhNDBkMDkyNzZmY2M5MWI3NWViYTM0NjU3ZDgxZjYxJyxcclxuICAnNGUyMTYyYTcwODY4Mzk5NDZkN2RmMmY0MzRlNDFmZjAnLFxyXG4gICdjZTViYWI3YmRjYzNiYzY1NDM0NGZmYzU1Y2M2OWJlYidcclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjdXN0b21EYXRhID0ge307IC8vIOiHquWumuS5ieaVsOaNrlxyXG5cclxuICBjdXN0b21GdW5jdGlvbigpIHt9IC8v6Ieq5a6a5LmJ5pa55rOVXHJcbiAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgLy8g5ZyoUGFnZeWSjENvbXBvbmVudOWFseeUqOeahOeUn+WRveWRqOacn+WHveaVsFxyXG4gICAgYXdhaXQgd2VweS5sb2dpbigpO1xyXG4gICAgbGV0IHVzZXJJbmZvID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpO1xyXG4gICAgdGhpcy51c2VySW5mbyA9IHVzZXJJbmZvLnVzZXJJbmZvO1xyXG4gICAgY29uc29sZS5sb2coMTExLHRoaXMudXNlckluZm8pO1xyXG4gIH1cclxuXHJcbiAgY29uZmlnID0ge307IC8vIOWPquWcqFBhZ2Xlrp7kvovkuK3lrZjlnKjnmoTphY3nva7mlbDmja7vvIzlr7nlupTkuo7ljp/nlJ/nmoRwYWdlLmpzb27mlofku7ZcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIG1zZzogJ2hlbGxvIHdlcHknLFxyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgICBjb25kaXRpb246IHRydWUsXHJcbiAgICBpc0NoZWNrZWQ6IHRydWUsXHJcbiAgICBmbGFnOiBmYWxzZSxcclxuICAgIG5hbWU6ICdNSU5BJyxcclxuICAgIGxpc3Q6IFswLCAxLCAyLCAzLCA0XVxyXG4gIH07IC8vIOmhtemdouaJgOmcgOaVsOaNruWdh+mcgOWcqOi/memHjOWjsOaYju+8jOWPr+eUqOS6juaooeadv+aVsOaNrue7keWumlxyXG5cclxuICBjb21wb25lbnRzID0ge307IC8vIOWjsOaYjumhtemdouS4reaJgOW8leeUqOeahOe7hOS7tu+8jOaIluWjsOaYjue7hOS7tuS4reaJgOW8leeUqOeahOWtkOe7hOS7tlxyXG5cclxuICBtaXhpbnMgPSBbXTsgLy8g5aOw5piO6aG16Z2i5omA5byV55So55qETWl4aW7lrp7kvotcclxuXHJcbiAgY29tcHV0ZWQgPSB7fTsgLy8g5aOw5piO6K6h566X5bGe5oCnXHJcblxyXG4gIHdhdGNoID0ge307IC8vIOWjsOaYjuaVsOaNrndhdGNoZXJcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHRhcE5hbWUoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0YXBOYW1lJyk7XHJcbiAgICAgIC8vICAgIHd4Lm5hdmlnYXRlVG9cclxuICAgICAgd2VweS5zd2l0Y2hUYWIoeyB1cmw6ICdpbmRleCcgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBsb2FkSW1nKCkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxyXG4gICAgICAgIHNpemVUeXBlOiBbJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygxMTExKTtcclxuICAgICAgICAgIHZhciB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XHJcbiAgICAgICAgICBpZiAodGVtcEZpbGVQYXRocy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlID0gdGhhdC5tZXRob2RzLmZvcm1kYXRhKCk7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gYCR7ZGF0ZX0uanBnYDsgLy/kuIrkvKDnmoTlm77niYfnmoTliKvlkI3vvIzlu7rorq7lj6/ku6XnlKjml6XmnJ/lkb3lkI1cclxuICAgICAgICAgICAgdmFyIGZpbGUgPSBCbW9iLkZpbGUobmFtZSwgdGVtcEZpbGVQYXRoc1swXSk7XHJcbiAgICAgICAgICAgIGZpbGUuc2F2ZSgpLnRoZW4oXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBCbW9iLlF1ZXJ5KCdwaG90bExpc3QnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LnNldCgndXJsJywgcmVzWzBdLnVybCk7XHJcbiAgICAgICAgICAgICAgICBxdWVyeS5zZXQoJ2ZpbGVuYW1lJywgcmVzWzBdLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICAgIC5zYXZlKClcclxuICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyZXI6IGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGZvcm1kYXRhKCkge1xyXG4gICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHZhciB0aW1lID0gRGF0ZS5wYXJzZShkYXRlKTtcclxuICAgICAgbGV0IHRpbWUxID0gdGltZSAvIDEwMDA7XHJcbiAgICAgIHJldHVybiB0aW1lMTtcclxuICAgIH1cclxuICB9OyAvLyDlo7DmmI7pobXpnaJ3eG1s5Lit5qCH562+55qE5LqL5Lu25aSE55CG5Ye95pWw44CC5rOo5oSP77yM5q2k5aSE5Y+q55So5LqO5aOw5piO6aG16Z2id3htbOS4reagh+etvueahGJpbmTjgIFjYXRjaOS6i+S7tu+8jOiHquWumuS5ieaWueazlemcgOS7peiHquWumuS5ieaWueazleeahOaWueW8j+WjsOaYjlxyXG5cclxuICBldmVudHMgPSB7fTsgLy8g5aOw5piO57uE5Lu25LmL6Ze055qE5LqL5Lu25aSE55CG5Ye95pWwXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICBjb25zb2xlLmxvZygn5LiL5ouJ5Yi35pawJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==