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
      imgList: null
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onload',
    value: function onload() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      this.loadImg();
    }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1nTGlzdCIsIm1ldGhvZHMiLCJsb2FkSW1nIiwic2VsZiIsInF1ZXJ5IiwiQm1vYiIsIlF1ZXJ5IiwiZmluZCIsInRoZW4iLCJyZXMiLCIkYXBwbHkiLCJvbmxvYWQiLCJvblNob3ciLCJzZXRUaW1lb3V0Iiwid3giLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiZXZlbnQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQU9UQyxJLEdBQU87QUFDTEMsZUFBUztBQURKLEssUUFHUEMsTyxHQUFVLEU7Ozs7OzZCQVBELENBQUU7Ozs2QkFDRjtBQUNQLFdBQUtDLE9BQUw7QUFDRDs7OzhCQUtTO0FBQ1IsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUMsUUFBUUMsd0JBQUtDLEtBQUwsQ0FBVyxXQUFYLENBQVo7QUFDQUYsWUFBTUcsSUFBTixHQUFhQyxJQUFiLENBQWtCLGVBQU87QUFDdkJMLGFBQUtILE9BQUwsR0FBZVMsR0FBZjtBQUNBTixhQUFLTyxNQUFMO0FBQ0QsT0FIRDtBQUlEOzs7d0NBQ21CO0FBQ2xCLFdBQUtDLE1BQUw7QUFDQSxXQUFLQyxNQUFMO0FBQ0FDLGlCQUFXLFlBQU07QUFDZkMsV0FBR0MsbUJBQUg7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7a0NBQ2FDLEssRUFBTztBQUNuQjtBQUNEOzs7O0VBN0IrQkMsZUFBS0MsSTs7a0JBQWxCdEIsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgQm1vYiBmcm9tICdoeWRyb2dlbi1qcy1zZGsnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aaW6aG1J1xyXG4gIH07XHJcbiAgb25sb2FkKCkge31cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLmxvYWRJbWcoKTtcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGltZ0xpc3Q6IG51bGxcclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7fTtcclxuICBsb2FkSW1nKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIHF1ZXJ5ID0gQm1vYi5RdWVyeSgncGhvdGxMaXN0Jyk7XHJcbiAgICBxdWVyeS5maW5kKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICBzZWxmLmltZ0xpc3QgPSByZXM7XHJcbiAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICB0aGlzLm9ubG9hZCgpO1xyXG4gICAgdGhpcy5vblNob3coKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9XHJcbiAgb25SZWFjaEJvdHRvbShldmVudCkge1xyXG4gICAgLy/or7fmsYLmm7TlpJrmlbDmja5cclxuICB9XHJcbn1cclxuIl19