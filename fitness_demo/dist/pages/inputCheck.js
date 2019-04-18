'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inputCheck = function (_wepy$page) {
  _inherits(inputCheck, _wepy$page);

  function inputCheck() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, inputCheck);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = inputCheck.__proto__ || Object.getPrototypeOf(inputCheck)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '身份认证'
    }, _this.data = {
      username: '',
      identifyId: '',
      errMsg: '',
      latitude: '',
      longitude: '',
      ldata: ''
    }, _this.customData = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(inputCheck, [{
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'getName',
    value: function getName(e) {
      var val = e.detail.value;
      this.username = val;
    }
  }, {
    key: 'getId',
    value: function getId(e) {
      var val = e.detail.value;
      this.identifyId = val;
    }
  }, {
    key: 'commit',
    value: function commit() {
      var _this2 = this;

      // this.$navigate({url:`out`})
      var param = {
        realName: this.username,
        idCard: this.identifyId,
        token: "bf2593fa-6e7b-47b3-b9f8-e9cdd99d1bf9"
      };
      (0, _api.post)('/api/identify/identifyidcard', param).then(function (res) {
        _this2.$navigate({ url: 'checkResult?biz_no=' + res.data.biz_no });
      });
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      console.log('下拉刷新');
      setTimeout(function () {
        wx.stopPullDownRefresh(); //停止下拉刷新
      }, 2000);
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log('上拉加载');
      setTimeout(function () {
        wx.hideNavigationBarLoading(); //停止上拉加载
      }, 2000);
    }
  }]);

  return inputCheck;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(inputCheck , 'pages/inputCheck'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0Q2hlY2suanMiXSwibmFtZXMiOlsiaW5wdXRDaGVjayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlcm5hbWUiLCJpZGVudGlmeUlkIiwiZXJyTXNnIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJsZGF0YSIsImN1c3RvbURhdGEiLCJtZXRob2RzIiwiZSIsInZhbCIsImRldGFpbCIsInZhbHVlIiwicGFyYW0iLCJyZWFsTmFtZSIsImlkQ2FyZCIsInRva2VuIiwidGhlbiIsIiRuYXZpZ2F0ZSIsInVybCIsInJlcyIsImJpel9ubyIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0Iiwid3giLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLGtCQUFZLEVBRlA7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLGdCQUFVLEVBSkw7QUFLTEMsaUJBQVcsRUFMTjtBQU1MQyxhQUFPO0FBTkYsSyxRQVFQQyxVLEdBQWEsRSxRQUdiQyxPLEdBQVUsRTs7Ozs7NkJBREQsQ0FBRzs7OzRCQUdKQyxDLEVBQUc7QUFDVCxVQUFJQyxNQUFNRCxFQUFFRSxNQUFGLENBQVNDLEtBQW5CO0FBQ0EsV0FBS1gsUUFBTCxHQUFnQlMsR0FBaEI7QUFDRDs7OzBCQUNLRCxDLEVBQUc7QUFDUCxVQUFJQyxNQUFNRCxFQUFFRSxNQUFGLENBQVNDLEtBQW5CO0FBQ0EsV0FBS1YsVUFBTCxHQUFrQlEsR0FBbEI7QUFDRDs7OzZCQUNRO0FBQUE7O0FBQ1A7QUFDQSxVQUFJRyxRQUFRO0FBQ1ZDLGtCQUFVLEtBQUtiLFFBREw7QUFFVmMsZ0JBQVEsS0FBS2IsVUFGSDtBQUdWYyxlQUFPO0FBSEcsT0FBWjtBQUtBLHFEQUFxQ0gsS0FBckMsRUFBNENJLElBQTVDLENBQWlELGVBQU87QUFDdEQsZUFBS0MsU0FBTCxDQUFlLEVBQUVDLDZCQUEyQkMsSUFBSXBCLElBQUosQ0FBU3FCLE1BQXRDLEVBQWY7QUFDRCxPQUZEO0FBR0Q7Ozt3Q0FDbUI7QUFDbEJDLGNBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FDLGlCQUFXLFlBQU07QUFDZkMsV0FBR0MsbUJBQUgsR0FEZSxDQUNXO0FBQzNCLE9BRkQsRUFFRyxJQUZIO0FBR0Q7OztvQ0FDZTtBQUNkSixjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBQyxpQkFBVyxZQUFNO0FBQ2ZDLFdBQUdFLHdCQUFILEdBRGUsQ0FDZ0I7QUFDaEMsT0FGRCxFQUVHLElBRkg7QUFHRDs7OztFQWhEcUNDLGVBQUtDLEk7O2tCQUF4QmhDLFUiLCJmaWxlIjoiaW5wdXRDaGVjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gJy4uL2FwaS9hcGkuanMnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5wdXRDaGVjayBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfouqvku73orqTor4EnXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgaWRlbnRpZnlJZDogJycsXHJcbiAgICAgIGVyck1zZzogJycsXHJcbiAgICAgIGxhdGl0dWRlOiAnJyxcclxuICAgICAgbG9uZ2l0dWRlOiAnJyxcclxuICAgICAgbGRhdGE6ICcnLFxyXG4gICAgfTtcclxuICAgIGN1c3RvbURhdGEgPSB7fTtcclxuICAgXHJcbiAgICBvblNob3coKSB7IH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9O1xyXG4gICAgZ2V0TmFtZShlKSB7XHJcbiAgICAgIHZhciB2YWwgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgdGhpcy51c2VybmFtZSA9IHZhbDtcclxuICAgIH1cclxuICAgIGdldElkKGUpIHtcclxuICAgICAgdmFyIHZhbCA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICB0aGlzLmlkZW50aWZ5SWQgPSB2YWw7XHJcbiAgICB9XHJcbiAgICBjb21taXQoKSB7XHJcbiAgICAgIC8vIHRoaXMuJG5hdmlnYXRlKHt1cmw6YG91dGB9KVxyXG4gICAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICAgcmVhbE5hbWU6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgaWRDYXJkOiB0aGlzLmlkZW50aWZ5SWQsXHJcbiAgICAgICAgdG9rZW46IFwiYmYyNTkzZmEtNmU3Yi00N2IzLWI5ZjgtZTljZGQ5OWQxYmY5XCJcclxuICAgICAgfTtcclxuICAgICAgcG9zdChgL2FwaS9pZGVudGlmeS9pZGVudGlmeWlkY2FyZGAsIHBhcmFtKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoeyB1cmw6IGBjaGVja1Jlc3VsdD9iaXpfbm89JHtyZXMuZGF0YS5iaXpfbm99YCB9KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn5LiL5ouJ5Yi35pawJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLfmlrBcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn5LiK5ouJ5Yqg6L29Jyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WBnOatouS4iuaLieWKoOi9vVxyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==