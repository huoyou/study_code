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

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '首页'
    }, _this.data = {
      imgList: null,
      userInfo: null
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      this.loadImg();
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'loadImg',
    value: function loadImg() {
      var self = this;
      var query = _hydrogenJsSdk2.default.Query('photlList');
      query.find().then(function (res) {
        self.imgList = res;
        self.$apply();
      });
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.onload();
      this.onShow();
      setTimeout(function () {
        wx.stopPullDownRefresh();
      }, 2000);
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom(event) {
      //请求更多数据
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1nTGlzdCIsInVzZXJJbmZvIiwibWV0aG9kcyIsImxvYWRJbWciLCJzZWxmIiwicXVlcnkiLCJCbW9iIiwiUXVlcnkiLCJmaW5kIiwidGhlbiIsInJlcyIsIiRhcHBseSIsIm9ubG9hZCIsIm9uU2hvdyIsInNldFRpbWVvdXQiLCJ3eCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJldmVudCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBUVRDLEksR0FBTztBQUNMQyxlQUFTLElBREo7QUFFTEMsZ0JBQVU7QUFGTCxLLFFBSVBDLE8sR0FBVSxFOzs7Ozs2QkFURjtBQUNOLFdBQUtDLE9BQUw7QUFDSDs7OzZCQUNVLENBQ1I7Ozs4QkFNUztBQUNSLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFVBQUlDLFFBQVFDLHdCQUFLQyxLQUFMLENBQVcsV0FBWCxDQUFaO0FBQ0FGLFlBQU1HLElBQU4sR0FBYUMsSUFBYixDQUFrQixlQUFPO0FBQ3ZCTCxhQUFLSixPQUFMLEdBQWVVLEdBQWY7QUFDQU4sYUFBS08sTUFBTDtBQUNELE9BSEQ7QUFJRDs7O3dDQUNtQjtBQUNsQixXQUFLQyxNQUFMO0FBQ0EsV0FBS0MsTUFBTDtBQUNBQyxpQkFBVyxZQUFNO0FBQ2ZDLFdBQUdDLG1CQUFIO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7O2tDQUNhQyxLLEVBQU87QUFDbkI7QUFDRDs7OztFQS9CK0JDLGVBQUtDLEk7O2tCQUFsQnZCLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IEJtb2IgZnJvbSAnaHlkcm9nZW4tanMtc2RrJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mmlumhtSdcclxuICB9O1xyXG4gb25Mb2FkKCkge1xyXG4gICAgdGhpcy5sb2FkSW1nKCk7XHJcbn1cclxuICBvblNob3coKSB7XHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBpbWdMaXN0OiBudWxsLFxyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgfTtcclxuICBtZXRob2RzID0ge307XHJcbiAgbG9hZEltZygpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHZhciBxdWVyeSA9IEJtb2IuUXVlcnkoJ3Bob3RsTGlzdCcpO1xyXG4gICAgcXVlcnkuZmluZCgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgc2VsZi5pbWdMaXN0ID0gcmVzO1xyXG4gICAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgdGhpcy5vbmxvYWQoKTtcclxuICAgIHRoaXMub25TaG93KCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgfVxyXG4gIG9uUmVhY2hCb3R0b20oZXZlbnQpIHtcclxuICAgIC8v6K+35rGC5pu05aSa5pWw5o2uXHJcbiAgfVxyXG59XHJcbiJdfQ==