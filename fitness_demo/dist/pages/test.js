'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
                this.getAll();

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
    }()
  }, {
    key: 'getAll',
    value: function getAll() {
      var param = {};
      var param1 = {
        accessReportNo: 'ZR190411015'
      };
      (0, _api.post)('/api/rmAccessTemplate/selectAll', param).then(function (res) {
        console.log(1111, res);
      });
      (0, _api.get)('/api/rmAccessReportFeeDetail/getFeeDetailList', param1).then(function (res) {
        console.log(2222, res);
      });
    } // 只在Page实例中存在的配置数据，对应于原生的page.json文件

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

exports.default = MyPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiQm1vYiIsImluaXRpYWxpemUiLCJNeVBhZ2UiLCJjdXN0b21EYXRhIiwiY29uZmlnIiwiZGF0YSIsIm1zZyIsInVzZXJJbmZvIiwiY29uZGl0aW9uIiwiaXNDaGVja2VkIiwiZmxhZyIsIm5hbWUiLCJsaXN0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImNvbXB1dGVkIiwid2F0Y2giLCJtZXRob2RzIiwidGFwTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5Iiwic3dpdGNoVGFiIiwidXJsIiwidXBsb2FkSW1nMSIsInBhcmFtIiwidG9rZW4iLCJiaXpfbm8iLCJhY2Nlc3NfdG9rZW4iLCJ0aGVuIiwicmVzIiwidXBsb2FkSW1nIiwidGhhdCIsInd4IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJ0ZW1wRmlsZVBhdGhzIiwibGVuZ3RoIiwiZGF0ZSIsImZvcm1kYXRhIiwiZmlsZSIsIkZpbGUiLCJzYXZlIiwicXVlcnkiLCJRdWVyeSIsInNldCIsImZpbGVuYW1lIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImVycmVyIiwiRGF0ZSIsInRpbWUiLCJwYXJzZSIsInRpbWUxIiwiZXZlbnRzIiwibG9naW4iLCJnZXRVc2VySW5mbyIsImdldEFsbCIsInBhcmFtMSIsImFjY2Vzc1JlcG9ydE5vIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQU1BOzs7Ozs7Ozs7Ozs7QUFMQUEsd0JBQUtDLFVBQUwsQ0FDRSxrQ0FERixFQUVFLGtDQUZGLEVBR0Usa0NBSEY7O0lBTXFCQyxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLFUsR0FBYSxFLFFBdUJiQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsV0FBSyxZQURBO0FBRUxDLGdCQUFVLElBRkw7QUFHTEMsaUJBQVcsSUFITjtBQUlMQyxpQkFBVyxJQUpOO0FBS0xDLFlBQU0sS0FMRDtB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S0EsUUFBTCxHQUFnQkEsU0FBU0EsUUFBekI7QUFDQSxxQkFBS3NELE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUNQLFVBQUlwQyxRQUFRLEVBQVo7QUFFQSxVQUFJcUMsU0FBUztBQUNYQyx3QkFBZ0I7QUFETCxPQUFiO0FBR0Esd0RBQXdDdEMsS0FBeEMsRUFBK0NJLElBQS9DLENBQW9ELGVBQU87QUFDekRWLGdCQUFRQyxHQUFSLENBQVksSUFBWixFQUFrQlUsR0FBbEI7QUFDRCxPQUZEO0FBR0EscUVBQXFEZ0MsTUFBckQsRUFBNkRqQyxJQUE3RCxDQUFrRSxlQUFPO0FBQ3ZFVixnQkFBUUMsR0FBUixDQUFZLElBQVosRUFBa0JVLEdBQWxCO0FBQ0QsT0FGRDtBQUdELEssQ0FDWTs7QUFVVjs7QUFFYzs7QUFFSjs7QUFFRTs7QUFFSDs7QUFxRVQ7Ozs7QUFDVTt3Q0FDTztBQUNsQlgsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDRDs7OztFQW5IaUNDLGVBQUsyQyxJOztrQkFBcEI5RCxNIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgQm1vYiBmcm9tICdoeWRyb2dlbi1qcy1zZGsnO1xyXG4gIEJtb2IuaW5pdGlhbGl6ZShcclxuICAgICdkYTQwZDA5Mjc2ZmNjOTFiNzVlYmEzNDY1N2Q4MWY2MScsXHJcbiAgICAnNGUyMTYyYTcwODY4Mzk5NDZkN2RmMmY0MzRlNDFmZjAnLFxyXG4gICAgJ2NlNWJhYjdiZGNjM2JjNjU0MzQ0ZmZjNTVjYzY5YmViJ1xyXG4gICk7XHJcbiAgaW1wb3J0IHsgZ2V0LCBwb3N0IH0gZnJvbSAnLi4vYXBpL2FwaS5qcydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeVBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY3VzdG9tRGF0YSA9IHt9OyAvLyDoh6rlrprkuYnmlbDmja5cclxuXHJcbiAgICBjdXN0b21GdW5jdGlvbigpIHsgfSAvL+iHquWumuS5ieaWueazlVxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAvLyDlnKhQYWdl5ZKMQ29tcG9uZW505YWx55So55qE55Sf5ZG95ZGo5pyf5Ye95pWwXHJcbiAgICAgIGF3YWl0IHdlcHkubG9naW4oKTtcclxuICAgICAgbGV0IHVzZXJJbmZvID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpO1xyXG4gICAgICB0aGlzLnVzZXJJbmZvID0gdXNlckluZm8udXNlckluZm87XHJcbiAgICAgIHRoaXMuZ2V0QWxsKCk7XHJcbiAgICB9XHJcbiAgICBnZXRBbGwoKSB7XHJcbiAgICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgfTtcclxuICAgICAgbGV0IHBhcmFtMSA9IHtcclxuICAgICAgICBhY2Nlc3NSZXBvcnRObzogJ1pSMTkwNDExMDE1J1xyXG4gICAgICB9O1xyXG4gICAgICBwb3N0KGAvYXBpL3JtQWNjZXNzVGVtcGxhdGUvc2VsZWN0QWxsYCwgcGFyYW0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygxMTExLCByZXMpXHJcbiAgICAgIH0pO1xyXG4gICAgICBnZXQoYC9hcGkvcm1BY2Nlc3NSZXBvcnRGZWVEZXRhaWwvZ2V0RmVlRGV0YWlsTGlzdGAsIHBhcmFtMSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDIyMjIsIHJlcylcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25maWcgPSB7fTsgLy8g5Y+q5ZyoUGFnZeWunuS+i+S4reWtmOWcqOeahOmFjee9ruaVsOaNru+8jOWvueW6lOS6juWOn+eUn+eahHBhZ2UuanNvbuaWh+S7tlxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG1zZzogJ2hlbGxvIHdlcHknLFxyXG4gICAgICB1c2VySW5mbzogbnVsbCxcclxuICAgICAgY29uZGl0aW9uOiB0cnVlLFxyXG4gICAgICBpc0NoZWNrZWQ6IHRydWUsXHJcbiAgICAgIGZsYWc6IGZhbHNlLFxyXG4gICAgICBuYW1lOiAnTUlOQScsXHJcbiAgICAgIGxpc3Q6IFswLCAxLCAyLCAzLCA0XVxyXG4gICAgfTsgLy8g6aG16Z2i5omA6ZyA5pWw5o2u5Z2H6ZyA5Zyo6L+Z6YeM5aOw5piO77yM5Y+v55So5LqO5qih5p2/5pWw5o2u57uR5a6aXHJcblxyXG4gICAgY29tcG9uZW50cyA9IHt9OyAvLyDlo7DmmI7pobXpnaLkuK3miYDlvJXnlKjnmoTnu4Tku7bvvIzmiJblo7DmmI7nu4Tku7bkuK3miYDlvJXnlKjnmoTlrZDnu4Tku7ZcclxuXHJcbiAgICBtaXhpbnMgPSBbXTsgLy8g5aOw5piO6aG16Z2i5omA5byV55So55qETWl4aW7lrp7kvotcclxuXHJcbiAgICBjb21wdXRlZCA9IHt9OyAvLyDlo7DmmI7orqHnrpflsZ7mgKdcclxuXHJcbiAgICB3YXRjaCA9IHt9OyAvLyDlo7DmmI7mlbDmja53YXRjaGVyXHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgdGFwTmFtZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGFwTmFtZScpO1xyXG4gICAgICAgIC8vICAgIHd4Lm5hdmlnYXRlVG9cclxuICAgICAgICB3ZXB5LnN3aXRjaFRhYih7IHVybDogJ2luZGV4JyB9KTtcclxuICAgICAgfSxcclxuICAgICAgdXBsb2FkSW1nMSgpIHtcclxuICAgICAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICAgICB0b2tlbjogXCJiZjI1OTNmYS02ZTdiLTQ3YjMtYjlmOC1lOWNkZDk5ZDFiZjlcIixcclxuICAgICAgICAgIGJpel9ubzogdGhpcy5hY2Nlc3NfdG9rZW4uYml6X25vXHJcbiAgICAgICAgfTtcclxuICAgICAgICBwb3N0KGAvYXBpL2lkZW50aWZ5L2dldFJlc3VsdGAsIHBhcmFtKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKVxyXG4gICAgICAgICAgLy8gaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgLy8gICB0aGlzLmltZ1NyYyA9IHVybDtcclxuICAgICAgICAgIC8vICAgdGhpcy5tc2cgPSBcIua0u+S9k+mqjOivgeaIkOWKnyFcIjtcclxuICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyAgIHRoaXMuaW1nU3JjID0gdXJsMTtcclxuICAgICAgICAgIC8vICAgdGhpcy5tc2cgPSBcIua0u+S9k+mqjOivgeWksei0pSFcIjtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgdXBsb2FkSW1nKCkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxyXG4gICAgICAgICAgc2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcclxuICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygxMTExKTtcclxuICAgICAgICAgICAgdmFyIHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcclxuICAgICAgICAgICAgaWYgKHRlbXBGaWxlUGF0aHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIGxldCBkYXRlID0gdGhhdC5tZXRob2RzLmZvcm1kYXRhKCk7XHJcbiAgICAgICAgICAgICAgdmFyIG5hbWUgPSBgJHtkYXRlfS5qcGdgOyAvL+S4iuS8oOeahOWbvueJh+eahOWIq+WQje+8jOW7uuiuruWPr+S7peeUqOaXpeacn+WRveWQjVxyXG4gICAgICAgICAgICAgIHZhciBmaWxlID0gQm1vYi5GaWxlKG5hbWUsIHRlbXBGaWxlUGF0aHNbMF0pO1xyXG4gICAgICAgICAgICAgIGZpbGUuc2F2ZSgpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gQm1vYi5RdWVyeSgncGhvdGxMaXN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNldCgndXJsJywgcmVzWzBdLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNldCgnZmlsZW5hbWUnLCByZXNbMF0uZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICBxdWVyeVxyXG4gICAgICAgICAgICAgICAgICAgIC5zYXZlKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJlcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBmb3JtZGF0YSgpIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIHRpbWUgPSBEYXRlLnBhcnNlKGRhdGUpO1xyXG4gICAgICAgIGxldCB0aW1lMSA9IHRpbWUgLyAxMDAwO1xyXG4gICAgICAgIHJldHVybiB0aW1lMTtcclxuICAgICAgfVxyXG4gICAgfTsgLy8g5aOw5piO6aG16Z2id3htbOS4reagh+etvueahOS6i+S7tuWkhOeQhuWHveaVsOOAguazqOaEj++8jOatpOWkhOWPqueUqOS6juWjsOaYjumhtemdond4bWzkuK3moIfnrb7nmoRiaW5k44CBY2F0Y2jkuovku7bvvIzoh6rlrprkuYnmlrnms5XpnIDku6Xoh6rlrprkuYnmlrnms5XnmoTmlrnlvI/lo7DmmI5cclxuICAgIGV2ZW50cyA9IHt9OyAvLyDlo7DmmI7nu4Tku7bkuYvpl7TnmoTkuovku7blpITnkIblh73mlbBcclxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn5LiL5ouJ5Yi35pawJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=