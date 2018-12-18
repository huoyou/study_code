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
        wx.switchTab({ url: 'index' });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiQm1vYiIsImluaXRpYWxpemUiLCJNeVBhZ2UiLCJjdXN0b21EYXRhIiwiY29uZmlnIiwiZGF0YSIsIm1zZyIsImNvbmRpdGlvbiIsImlzQ2hlY2tlZCIsImZsYWciLCJuYW1lIiwibGlzdCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJjb21wdXRlZCIsIndhdGNoIiwibWV0aG9kcyIsInRhcE5hbWUiLCJjb25zb2xlIiwibG9nIiwid3giLCJzd2l0Y2hUYWIiLCJ1cmwiLCJldmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0FBLHdCQUFLQyxVQUFMLENBQ0Usa0NBREYsRUFFRSxrQ0FGRixFQUdFLGtDQUhGOztJQUtxQkMsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxVLEdBQWEsRSxRQVNiQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsV0FBSyxZQURBO0FBRUxDLGlCQUFXLElBRk47QUFHTEMsaUJBQVcsSUFITjtBQUlMQyxZQUFNLEtBSkQ7QUFLTEMsWUFBTSxNQUxEO0FBTUxDLFlBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYjtBQU5ELEssUUFTUEMsVSxHQUFhLEUsUUFFYkMsTSxHQUFTLEUsUUFFVEMsUSxHQUFXLEUsUUFFWEMsSyxHQUFRLEUsUUFFUkMsTyxHQUFVO0FBQ1RDLGFBRFMscUJBQ0M7QUFDTkMsZ0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0g7QUFDR0MsV0FBR0MsU0FBSCxDQUFhLEVBQUNDLEtBQUksT0FBTCxFQUFiO0FBQ0g7QUFMUSxLLFFBUVZDLE0sR0FBUyxFOzs7OztBQXBDUTs7cUNBRUEsQ0FBRSxDLENBQUM7Ozs7NkJBRVgsQ0FDUixDLENBQUM7Ozs7NkJBRU8sQ0FBRSxDLENBQUM7O0FBRUM7O0FBU1Y7O0FBRWM7O0FBRUo7O0FBRUU7O0FBRUg7O0FBUVQ7Ozs7QUFFVTt3Q0FDTztBQUNsQkwsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDRDs7OztFQXhDaUNLLGVBQUtDLEk7O2tCQUFwQnZCLE0iLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IEJtb2IgZnJvbSAnaHlkcm9nZW4tanMtc2RrJztcclxuQm1vYi5pbml0aWFsaXplKFxyXG4gICdkYTQwZDA5Mjc2ZmNjOTFiNzVlYmEzNDY1N2Q4MWY2MScsXHJcbiAgJzRlMjE2MmE3MDg2ODM5OTQ2ZDdkZjJmNDM0ZTQxZmYwJyxcclxuICAnY2U1YmFiN2JkY2MzYmM2NTQzNDRmZmM1NWNjNjliZWInXHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UGFnZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY3VzdG9tRGF0YSA9IHt9OyAvLyDoh6rlrprkuYnmlbDmja5cclxuXHJcbiAgY3VzdG9tRnVuY3Rpb24oKSB7fSAvL+iHquWumuS5ieaWueazlVxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgfSAvLyDlnKhQYWdl5ZKMQ29tcG9uZW505YWx55So55qE55Sf5ZG95ZGo5pyf5Ye95pWwXHJcblxyXG4gIG9uU2hvdygpIHt9IC8vIOWPquWcqFBhZ2XkuK3lrZjlnKjnmoTpobXpnaLnlJ/lkb3lkajmnJ/lh73mlbBcclxuXHJcbiAgY29uZmlnID0ge307IC8vIOWPquWcqFBhZ2Xlrp7kvovkuK3lrZjlnKjnmoTphY3nva7mlbDmja7vvIzlr7nlupTkuo7ljp/nlJ/nmoRwYWdlLmpzb27mlofku7ZcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIG1zZzogJ2hlbGxvIHdlcHknLFxyXG4gICAgY29uZGl0aW9uOiB0cnVlLFxyXG4gICAgaXNDaGVja2VkOiB0cnVlLFxyXG4gICAgZmxhZzogZmFsc2UsXHJcbiAgICBuYW1lOiAnTUlOQScsXHJcbiAgICBsaXN0OiBbMCwgMSwgMiwgMywgNF1cclxuICB9OyAvLyDpobXpnaLmiYDpnIDmlbDmja7lnYfpnIDlnKjov5nph4zlo7DmmI7vvIzlj6/nlKjkuo7mqKHmnb/mlbDmja7nu5HlrppcclxuXHJcbiAgY29tcG9uZW50cyA9IHt9OyAvLyDlo7DmmI7pobXpnaLkuK3miYDlvJXnlKjnmoTnu4Tku7bvvIzmiJblo7DmmI7nu4Tku7bkuK3miYDlvJXnlKjnmoTlrZDnu4Tku7ZcclxuXHJcbiAgbWl4aW5zID0gW107IC8vIOWjsOaYjumhtemdouaJgOW8leeUqOeahE1peGlu5a6e5L6LXHJcblxyXG4gIGNvbXB1dGVkID0ge307IC8vIOWjsOaYjuiuoeeul+WxnuaAp1xyXG5cclxuICB3YXRjaCA9IHt9OyAvLyDlo7DmmI7mlbDmja53YXRjaGVyXHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgIHRhcE5hbWUoKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZygndGFwTmFtZScpXHJcbiAgICAvLyAgICB3eC5uYXZpZ2F0ZVRvXHJcbiAgICAgICB3eC5zd2l0Y2hUYWIoe3VybDonaW5kZXgnfSlcclxuICAgfVxyXG4gIH07IC8vIOWjsOaYjumhtemdond4bWzkuK3moIfnrb7nmoTkuovku7blpITnkIblh73mlbDjgILms6jmhI/vvIzmraTlpITlj6rnlKjkuo7lo7DmmI7pobXpnaJ3eG1s5Lit5qCH562+55qEYmluZOOAgWNhdGNo5LqL5Lu277yM6Ieq5a6a5LmJ5pa55rOV6ZyA5Lul6Ieq5a6a5LmJ5pa55rOV55qE5pa55byP5aOw5piOXHJcblxyXG4gIGV2ZW50cyA9IHt9OyAvLyDlo7DmmI7nu4Tku7bkuYvpl7TnmoTkuovku7blpITnkIblh73mlbBcclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCfkuIvmi4nliLfmlrAnKTtcclxuICB9XHJcbn1cclxuIl19