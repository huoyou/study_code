'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '首页'
    }, _this.data = {
      imgUrls: ['https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      ceilList: [{ name: '本周推荐', icon: '../imgs/1.jpg', id: '1' }, { name: '本周推荐1', icon: '../imgs/1.jpg', id: '2' }, { name: '本周推荐2', icon: '../imgs/1.jpg', id: '3' }, { name: '本周推荐3', icon: '../imgs/1.jpg', id: '4' }, { name: '本周推荐4', icon: '../imgs/1.jpg', id: '5' }, { name: '本周推荐5', icon: '../imgs/1.jpg', id: '6' }, { name: '本周推荐6', icon: '../imgs/1.jpg', id: '7' }, { name: '本周推荐7', icon: '../imgs/1.jpg', id: '8' }]
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      toJump: function toJump(val) {
        console.log('val', val);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImNlaWxMaXN0IiwibmFtZSIsImljb24iLCJpZCIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJ0b0p1bXAiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUlxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FDUCxpRUFETyxFQUVQLGlFQUZPLEVBR1AsaUVBSE8sQ0FESjtBQU1MQyxxQkFBZSxJQU5WO0FBT0xDLGdCQUFVLElBUEw7QUFRTEMsZ0JBQVUsSUFSTDtBQVNMQyxnQkFBVSxJQVRMO0FBVUxDLGdCQUFVLENBQ1IsRUFBRUMsTUFBTSxNQUFSLEVBQWdCQyxNQUFNLGVBQXRCLEVBQXVDQyxJQUFJLEdBQTNDLEVBRFEsRUFFUixFQUFFRixNQUFNLE9BQVIsRUFBaUJDLE1BQU0sZUFBdkIsRUFBd0NDLElBQUksR0FBNUMsRUFGUSxFQUdSLEVBQUVGLE1BQU0sT0FBUixFQUFpQkMsTUFBTSxlQUF2QixFQUF3Q0MsSUFBSSxHQUE1QyxFQUhRLEVBSVIsRUFBRUYsTUFBTSxPQUFSLEVBQWlCQyxNQUFNLGVBQXZCLEVBQXdDQyxJQUFJLEdBQTVDLEVBSlEsRUFLUixFQUFFRixNQUFNLE9BQVIsRUFBaUJDLE1BQU0sZUFBdkIsRUFBd0NDLElBQUksR0FBNUMsRUFMUSxFQU1SLEVBQUVGLE1BQU0sT0FBUixFQUFpQkMsTUFBTSxlQUF2QixFQUF3Q0MsSUFBSSxHQUE1QyxFQU5RLEVBT1IsRUFBRUYsTUFBTSxPQUFSLEVBQWlCQyxNQUFNLGVBQXZCLEVBQXdDQyxJQUFJLEdBQTVDLEVBUFEsRUFRUixFQUFFRixNQUFNLE9BQVIsRUFBaUJDLE1BQU0sZUFBdkIsRUFBd0NDLElBQUksR0FBNUMsRUFSUTtBQVZMLEssUUFzQlBDLFEsR0FBVztBQUNUQyxTQURTLGlCQUNIO0FBQ0osZUFBTyxDQUFDLElBQUlDLElBQUosRUFBUjtBQUNEO0FBSFEsSyxRQU1YQyxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDREMsR0FEQyxFQUNJO0FBQ1ZDLGdCQUFRQyxHQUFSLENBQVksS0FBWixFQUFtQkYsR0FBbkI7QUFDRDtBQUhPLEs7Ozs7OzZCQU1ELENBQ1I7Ozs7RUF2Q2dDRyxlQUFLQyxJOztrQkFBbkJ0QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcclxuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXHJcblxyXG5cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aaW6aG1J1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaW1nVXJsczogW1xyXG4gICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MTMzNDc4Ny0yMWU2YmQzYWIxMzU/dz02NDAnLFxyXG4gICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MTIxNDAxMi04NGY5NWUwNjBkZWU/dz02NDAnLFxyXG4gICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MTQ0NjU5MS0xNDI4NzVhOTAxYTE/dz02NDAnXHJcbiAgICAgIF0sXHJcbiAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgIGNlaWxMaXN0OiBbXHJcbiAgICAgICAgeyBuYW1lOiAn5pys5ZGo5o6o6I2QJywgaWNvbjogJy4uL2ltZ3MvMS5qcGcnLCBpZDogJzEnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn5pys5ZGo5o6o6I2QMScsIGljb246ICcuLi9pbWdzLzEuanBnJywgaWQ6ICcyJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ+acrOWRqOaOqOiNkDInLCBpY29uOiAnLi4vaW1ncy8xLmpwZycsIGlkOiAnMycgfSxcclxuICAgICAgICB7IG5hbWU6ICfmnKzlkajmjqjojZAzJywgaWNvbjogJy4uL2ltZ3MvMS5qcGcnLCBpZDogJzQnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn5pys5ZGo5o6o6I2QNCcsIGljb246ICcuLi9pbWdzLzEuanBnJywgaWQ6ICc1JyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ+acrOWRqOaOqOiNkDUnLCBpY29uOiAnLi4vaW1ncy8xLmpwZycsIGlkOiAnNicgfSxcclxuICAgICAgICB7IG5hbWU6ICfmnKzlkajmjqjojZA2JywgaWNvbjogJy4uL2ltZ3MvMS5qcGcnLCBpZDogJzcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn5pys5ZGo5o6o6I2QNycsIGljb246ICcuLi9pbWdzLzEuanBnJywgaWQ6ICc4JyB9LFxyXG4gICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIG5vdygpIHtcclxuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRvSnVtcCh2YWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndmFsJywgdmFsKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG4gIH1cclxuIl19