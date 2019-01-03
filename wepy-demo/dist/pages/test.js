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
    value: function onLoad() {} // 在Page和Component共用的生命周期函数

  }, {
    key: 'onShow',
    value: function onShow() {} // 只在Page中存在的页面生命周期函数

    // 只在Page实例中存在的配置数据，对应于原生的page.json文件

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiQm1vYiIsImluaXRpYWxpemUiLCJNeVBhZ2UiLCJjdXN0b21EYXRhIiwiY29uZmlnIiwiZGF0YSIsIm1zZyIsImNvbmRpdGlvbiIsImlzQ2hlY2tlZCIsImZsYWciLCJuYW1lIiwibGlzdCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJjb21wdXRlZCIsIndhdGNoIiwibWV0aG9kcyIsInRhcE5hbWUiLCJjb25zb2xlIiwibG9nIiwid2VweSIsInN3aXRjaFRhYiIsInVybCIsInVwbG9hZEltZyIsInRoYXQiLCJ3eCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwidGVtcEZpbGVQYXRocyIsImxlbmd0aCIsImRhdGUiLCJmb3JtZGF0YSIsImZpbGUiLCJGaWxlIiwic2F2ZSIsInRoZW4iLCJxdWVyeSIsIlF1ZXJ5Iiwic2V0IiwiZmlsZW5hbWUiLCJjYXRjaCIsImVyciIsImVycm9yIiwiZXJyZXIiLCJEYXRlIiwidGltZSIsInBhcnNlIiwidGltZTEiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQUEsd0JBQUtDLFVBQUwsQ0FDRSxrQ0FERixFQUVFLGtDQUZGLEVBR0Usa0NBSEY7O0lBS3FCQyxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLFUsR0FBYSxFLFFBUWJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxXQUFLLFlBREE7QUFFTEMsaUJBQVcsSUFGTjtBQUdMQyxpQkFBVyxJQUhOO0FBSUxDLFlBQU0sS0FKRDtBQUtMQyxZQUFNLE1BTEQ7QUFNTEMsWUFBTSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiO0FBTkQsSyxRQVNQQyxVLEdBQWEsRSxRQUViQyxNLEdBQVMsRSxRQUVUQyxRLEdBQVcsRSxRQUVYQyxLLEdBQVEsRSxRQUVSQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRTtBQUNSQyxnQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDQTtBQUNBQyx1QkFBS0MsU0FBTCxDQUFlLEVBQUVDLEtBQUssT0FBUCxFQUFmO0FBQ0QsT0FMTztBQU1SQyxlQU5RLHVCQU1JO0FBQ1YsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLFdBQUdDLFdBQUgsQ0FBZTtBQUNiQyxpQkFBTyxDQURNLEVBQ0g7QUFDVkMsb0JBQVUsQ0FBQyxZQUFELENBRkcsRUFFYTtBQUMxQkMsc0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhDLEVBR29CO0FBQ2pDQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3BCYixvQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDRCxnQkFBSWEsZ0JBQWdCRCxJQUFJQyxhQUF4QjtBQUNBLGdCQUFJQSxjQUFjQyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzVCLGtCQUFJQyxPQUFPVixLQUFLUixPQUFMLENBQWFtQixRQUFiLEVBQVg7QUFDQSxrQkFBSXpCLE9BQVV3QixJQUFWLFNBQUosQ0FGNEIsQ0FFRjtBQUMxQixrQkFBSUUsT0FBT3BDLHdCQUFLcUMsSUFBTCxDQUFVM0IsSUFBVixFQUFnQnNCLGNBQWMsQ0FBZCxDQUFoQixDQUFYO0FBQ0FJLG1CQUFLRSxJQUFMLEdBQVlDLElBQVosQ0FDRSxVQUFTUixHQUFULEVBQWM7QUFDWmIsd0JBQVFDLEdBQVIsQ0FBWVksR0FBWjtBQUNBLG9CQUFNUyxRQUFReEMsd0JBQUt5QyxLQUFMLENBQVcsV0FBWCxDQUFkO0FBQ0FELHNCQUFNRSxHQUFOLENBQVUsS0FBVixFQUFpQlgsSUFBSSxDQUFKLEVBQU9ULEdBQXhCO0FBQ0FrQixzQkFBTUUsR0FBTixDQUFVLFVBQVYsRUFBc0JYLElBQUksQ0FBSixFQUFPWSxRQUE3QjtBQUNBSCxzQkFDR0YsSUFESCxHQUVHQyxJQUZILENBRVEsZUFBTztBQUNYckIsMEJBQVFDLEdBQVIsQ0FBWVksR0FBWjtBQUNELGlCQUpILEVBS0dhLEtBTEgsQ0FLUyxlQUFPO0FBQ1oxQiwwQkFBUUMsR0FBUixDQUFZMEIsR0FBWjtBQUNELGlCQVBIO0FBUUQsZUFkSCxFQWVFLFVBQVNDLEtBQVQsRUFBZ0I7QUFDZDVCLHdCQUFRQyxHQUFSLENBQVkyQixLQUFaO0FBQ0QsZUFqQkg7QUFtQkQ7QUFDRixXQS9CWTtBQWdDYkMsaUJBQU8sZUFBU0YsR0FBVCxFQUFjO0FBQ25CM0Isb0JBQVFDLEdBQVIsQ0FBWTBCLEdBQVo7QUFDRDtBQWxDWSxTQUFmO0FBb0NELE9BNUNPO0FBNkNSVixjQTdDUSxzQkE2Q0c7QUFDVCxZQUFJRCxPQUFPLElBQUljLElBQUosRUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtFLEtBQUwsQ0FBV2hCLElBQVgsQ0FBWDtBQUNBLFlBQUlpQixRQUFRRixPQUFPLElBQW5CO0FBQ0EsZUFBT0UsS0FBUDtBQUNEO0FBbERPLEssUUFxRFZDLE0sR0FBUyxFOzs7OztBQWhGUTs7cUNBRUEsQ0FBRSxDLENBQUM7Ozs7NkJBRVgsQ0FBRSxDLENBQUM7Ozs7NkJBRUgsQ0FBRSxDLENBQUM7O0FBRUM7O0FBU1Y7O0FBRWM7O0FBRUo7O0FBRUU7O0FBRUg7O0FBcURUOzs7O0FBRVU7d0NBQ087QUFDbEJsQyxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNEOzs7O0VBcEZpQ0MsZUFBS2lDLEk7O2tCQUFwQm5ELE0iLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IEJtb2IgZnJvbSAnaHlkcm9nZW4tanMtc2RrJztcclxuQm1vYi5pbml0aWFsaXplKFxyXG4gICdkYTQwZDA5Mjc2ZmNjOTFiNzVlYmEzNDY1N2Q4MWY2MScsXHJcbiAgJzRlMjE2MmE3MDg2ODM5OTQ2ZDdkZjJmNDM0ZTQxZmYwJyxcclxuICAnY2U1YmFiN2JkY2MzYmM2NTQzNDRmZmM1NWNjNjliZWInXHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UGFnZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY3VzdG9tRGF0YSA9IHt9OyAvLyDoh6rlrprkuYnmlbDmja5cclxuXHJcbiAgY3VzdG9tRnVuY3Rpb24oKSB7fSAvL+iHquWumuS5ieaWueazlVxyXG5cclxuICBvbkxvYWQoKSB7fSAvLyDlnKhQYWdl5ZKMQ29tcG9uZW505YWx55So55qE55Sf5ZG95ZGo5pyf5Ye95pWwXHJcblxyXG4gIG9uU2hvdygpIHt9IC8vIOWPquWcqFBhZ2XkuK3lrZjlnKjnmoTpobXpnaLnlJ/lkb3lkajmnJ/lh73mlbBcclxuXHJcbiAgY29uZmlnID0ge307IC8vIOWPquWcqFBhZ2Xlrp7kvovkuK3lrZjlnKjnmoTphY3nva7mlbDmja7vvIzlr7nlupTkuo7ljp/nlJ/nmoRwYWdlLmpzb27mlofku7ZcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIG1zZzogJ2hlbGxvIHdlcHknLFxyXG4gICAgY29uZGl0aW9uOiB0cnVlLFxyXG4gICAgaXNDaGVja2VkOiB0cnVlLFxyXG4gICAgZmxhZzogZmFsc2UsXHJcbiAgICBuYW1lOiAnTUlOQScsXHJcbiAgICBsaXN0OiBbMCwgMSwgMiwgMywgNF1cclxuICB9OyAvLyDpobXpnaLmiYDpnIDmlbDmja7lnYfpnIDlnKjov5nph4zlo7DmmI7vvIzlj6/nlKjkuo7mqKHmnb/mlbDmja7nu5HlrppcclxuXHJcbiAgY29tcG9uZW50cyA9IHt9OyAvLyDlo7DmmI7pobXpnaLkuK3miYDlvJXnlKjnmoTnu4Tku7bvvIzmiJblo7DmmI7nu4Tku7bkuK3miYDlvJXnlKjnmoTlrZDnu4Tku7ZcclxuXHJcbiAgbWl4aW5zID0gW107IC8vIOWjsOaYjumhtemdouaJgOW8leeUqOeahE1peGlu5a6e5L6LXHJcblxyXG4gIGNvbXB1dGVkID0ge307IC8vIOWjsOaYjuiuoeeul+WxnuaAp1xyXG5cclxuICB3YXRjaCA9IHt9OyAvLyDlo7DmmI7mlbDmja53YXRjaGVyXHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0YXBOYW1lKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygndGFwTmFtZScpO1xyXG4gICAgICAvLyAgICB3eC5uYXZpZ2F0ZVRvXHJcbiAgICAgIHdlcHkuc3dpdGNoVGFiKHsgdXJsOiAnaW5kZXgnIH0pO1xyXG4gICAgfSxcclxuICAgIHVwbG9hZEltZygpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgY291bnQ6IDEsIC8vIOm7mOiupDlcclxuICAgICAgICBzaXplVHlwZTogWydjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKDExMTEpO1xyXG4gICAgICAgICAgdmFyIHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcclxuICAgICAgICAgIGlmICh0ZW1wRmlsZVBhdGhzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGRhdGUgPSB0aGF0Lm1ldGhvZHMuZm9ybWRhdGEoKTtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSBgJHtkYXRlfS5qcGdgOyAvL+S4iuS8oOeahOWbvueJh+eahOWIq+WQje+8jOW7uuiuruWPr+S7peeUqOaXpeacn+WRveWQjVxyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IEJtb2IuRmlsZShuYW1lLCB0ZW1wRmlsZVBhdGhzWzBdKTtcclxuICAgICAgICAgICAgZmlsZS5zYXZlKCkudGhlbihcclxuICAgICAgICAgICAgICBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IEJtb2IuUXVlcnkoJ3Bob3RsTGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgcXVlcnkuc2V0KCd1cmwnLCByZXNbMF0udXJsKTtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LnNldCgnZmlsZW5hbWUnLCByZXNbMF0uZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcXVlcnlcclxuICAgICAgICAgICAgICAgICAgLnNhdmUoKVxyXG4gICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJlcjogZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBmb3JtZGF0YSgpIHtcclxuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB2YXIgdGltZSA9IERhdGUucGFyc2UoZGF0ZSk7XHJcbiAgICAgIGxldCB0aW1lMSA9IHRpbWUgLyAxMDAwO1xyXG4gICAgICByZXR1cm4gdGltZTE7XHJcbiAgICB9XHJcbiAgfTsgLy8g5aOw5piO6aG16Z2id3htbOS4reagh+etvueahOS6i+S7tuWkhOeQhuWHveaVsOOAguazqOaEj++8jOatpOWkhOWPqueUqOS6juWjsOaYjumhtemdond4bWzkuK3moIfnrb7nmoRiaW5k44CBY2F0Y2jkuovku7bvvIzoh6rlrprkuYnmlrnms5XpnIDku6Xoh6rlrprkuYnmlrnms5XnmoTmlrnlvI/lo7DmmI5cclxuXHJcbiAgZXZlbnRzID0ge307IC8vIOWjsOaYjue7hOS7tuS5i+mXtOeahOS6i+S7tuWkhOeQhuWHveaVsFxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+S4i+aLieWIt+aWsCcpO1xyXG4gIH1cclxufVxyXG4iXX0=