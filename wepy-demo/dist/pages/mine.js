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

var Mine = function (_wepy$page) {
  _inherits(Mine, _wepy$page);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mine.__proto__ || Object.getPrototypeOf(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.customData = {}, _this.config = {}, _this.data = {
      username: '',
      identifyId: '',
      errMsg: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mine, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
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
      var param = {
        realName: this.username,
        idCard: this.identifyId,
        token: "bf2593fa-6e7b-47b3-b9f8-e9cdd99d1bf9"
      };
      (0, _api.post)('/api/identify/identifyidcard', param).then(function (res) {
        console.log(1111, res);
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

  return Mine;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Mine , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiTWluZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjdXN0b21EYXRhIiwiZGF0YSIsInVzZXJuYW1lIiwiaWRlbnRpZnlJZCIsImVyck1zZyIsIm1ldGhvZHMiLCJlIiwidmFsIiwiZGV0YWlsIiwidmFsdWUiLCJwYXJhbSIsInJlYWxOYW1lIiwiaWRDYXJkIiwidG9rZW4iLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlcyIsInNldFRpbWVvdXQiLCJ3eCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkYsTSxHQUFTLEUsUUFDVEcsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsa0JBQVksRUFGUDtBQUdMQyxjQUFRO0FBSEgsSyxRQU1QQyxPLEdBQVUsRTs7Ozs7NkJBVEQsQ0FBRzs7OzZCQUNILENBQUc7Ozs0QkFVSkMsQyxFQUFHO0FBQ1QsVUFBSUMsTUFBTUQsRUFBRUUsTUFBRixDQUFTQyxLQUFuQjtBQUNBLFdBQUtQLFFBQUwsR0FBZ0JLLEdBQWhCO0FBQ0Q7OzswQkFDS0QsQyxFQUFHO0FBQ1AsVUFBSUMsTUFBTUQsRUFBRUUsTUFBRixDQUFTQyxLQUFuQjtBQUNBLFdBQUtOLFVBQUwsR0FBa0JJLEdBQWxCO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUlHLFFBQVE7QUFDVkMsa0JBQVUsS0FBS1QsUUFETDtBQUVWVSxnQkFBUSxLQUFLVCxVQUZIO0FBR1ZVLGVBQU87QUFIRyxPQUFaO0FBS0EscURBQXFDSCxLQUFyQyxFQUE0Q0ksSUFBNUMsQ0FBaUQsZUFBTztBQUN0REMsZ0JBQVFDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCQyxHQUFsQjtBQUNELE9BRkQ7QUFHRDs7O3dDQUNtQjtBQUNsQkYsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQUUsaUJBQVcsWUFBTTtBQUNmQyxXQUFHQyxtQkFBSCxHQURlLENBQ1c7QUFDM0IsT0FGRCxFQUVHLElBRkg7QUFHRDs7O29DQUNlO0FBQ2RMLGNBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FFLGlCQUFXLFlBQU07QUFDZkMsV0FBR0Usd0JBQUgsR0FEZSxDQUNnQjtBQUNoQyxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBN0MrQkMsZUFBS0MsSTs7a0JBQWxCMUIsSSIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IHsgZ2V0LCBwb3N0IH0gZnJvbSAnLi4vYXBpL2FwaS5qcydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcclxuICAgIH07XHJcbiAgICBjdXN0b21EYXRhID0ge307XHJcbiAgICBvbkxvYWQoKSB7IH1cclxuICAgIG9uU2hvdygpIHsgfVxyXG4gICAgY29uZmlnID0ge307XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgIGlkZW50aWZ5SWQ6ICcnLFxyXG4gICAgICBlcnJNc2c6ICcnLFxyXG4gICAgfTtcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfTtcclxuICAgIGdldE5hbWUoZSkge1xyXG4gICAgICB2YXIgdmFsID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgIHRoaXMudXNlcm5hbWUgPSB2YWw7XHJcbiAgICB9XHJcbiAgICBnZXRJZChlKSB7XHJcbiAgICAgIHZhciB2YWwgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgdGhpcy5pZGVudGlmeUlkID0gdmFsO1xyXG4gICAgfVxyXG4gICAgY29tbWl0KCkge1xyXG4gICAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICAgcmVhbE5hbWU6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgaWRDYXJkOiB0aGlzLmlkZW50aWZ5SWQsXHJcbiAgICAgICAgdG9rZW46IFwiYmYyNTkzZmEtNmU3Yi00N2IzLWI5ZjgtZTljZGQ5OWQxYmY5XCJcclxuICAgICAgfTtcclxuICAgICAgcG9zdChgL2FwaS9pZGVudGlmeS9pZGVudGlmeWlkY2FyZGAsIHBhcmFtKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coMTExMSwgcmVzKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn5LiL5ouJ5Yi35pawJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLfmlrBcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn5LiK5ouJ5Yqg6L29Jyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WBnOatouS4iuaLieWKoOi9vVxyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==