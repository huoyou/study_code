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
      msg: 'hello wepy',
      condition: true,
      isChecked: true,
      flag: false,
      name: 'MINA',
      list: [0, 1, 2, 3, 4]
    }, _this.methods = {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mine, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'onPullDownRefresh',
    // 声明页面wxml中标签的事件处理函数。注意，此处只用于声明页面wxml中标签的bind、catch事件，自定义方法需以自定义方法的方式声明

    value: function onPullDownRefresh() {
      console.log('下拉刷新');
    }
  }]);

  return Mine;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Mine , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiTWluZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjdXN0b21EYXRhIiwiZGF0YSIsIm1zZyIsImNvbmRpdGlvbiIsImlzQ2hlY2tlZCIsImZsYWciLCJuYW1lIiwibGlzdCIsIm1ldGhvZHMiLCJ0YXBOYW1lIiwiY29uc29sZSIsImxvZyIsIndlcHkiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJ1cGxvYWRJbWciLCJ0aGF0Iiwid3giLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCJsZW5ndGgiLCJkYXRlIiwiZm9ybWRhdGEiLCJmaWxlIiwiQm1vYiIsIkZpbGUiLCJzYXZlIiwidGhlbiIsInF1ZXJ5IiwiUXVlcnkiLCJzZXQiLCJmaWxlbmFtZSIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJlcnJlciIsIkRhdGUiLCJ0aW1lIiwicGFyc2UiLCJ0aW1lMSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkYsTSxHQUFTLEUsUUFDVEcsSSxHQUFPO0FBQ0xDLFdBQUssWUFEQTtBQUVMQyxpQkFBVyxJQUZOO0FBR0xDLGlCQUFXLElBSE47QUFJTEMsWUFBTSxLQUpEO0FBS0xDLFlBQU0sTUFMRDtBQU1MQyxZQUFNLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWI7QUFORCxLLFFBU1BDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1JDLGdCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBO0FBQ0FDLHVCQUFLQyxTQUFMLENBQWUsRUFBRUMsS0FBSyxPQUFQLEVBQWY7QUFDRCxPQUxPO0FBTVJDLGVBTlEsdUJBTUk7QUFDVixZQUFJQyxPQUFPLElBQVg7QUFDQUMsV0FBR0MsV0FBSCxDQUFlO0FBQ2JDLGlCQUFPLENBRE0sRUFDSDtBQUNWQyxvQkFBVSxDQUFDLFlBQUQsQ0FGRyxFQUVhO0FBQzFCQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEMsRUFHb0I7QUFDakNDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJiLG9CQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLGdCQUFJYSxnQkFBZ0JELElBQUlDLGFBQXhCO0FBQ0EsZ0JBQUlBLGNBQWNDLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsa0JBQUlDLE9BQU9WLEtBQUtSLE9BQUwsQ0FBYW1CLFFBQWIsRUFBWDtBQUNBLGtCQUFJckIsT0FBVW9CLElBQVYsU0FBSixDQUY0QixDQUVGO0FBQzFCLGtCQUFJRSxPQUFPQyx3QkFBS0MsSUFBTCxDQUFVeEIsSUFBVixFQUFnQmtCLGNBQWMsQ0FBZCxDQUFoQixDQUFYO0FBQ0FJLG1CQUFLRyxJQUFMLEdBQVlDLElBQVosQ0FDRSxVQUFTVCxHQUFULEVBQWM7QUFDWmIsd0JBQVFDLEdBQVIsQ0FBWVksR0FBWjtBQUNBLG9CQUFNVSxRQUFRSix3QkFBS0ssS0FBTCxDQUFXLFdBQVgsQ0FBZDtBQUNBRCxzQkFBTUUsR0FBTixDQUFVLEtBQVYsRUFBaUJaLElBQUksQ0FBSixFQUFPVCxHQUF4QjtBQUNBbUIsc0JBQU1FLEdBQU4sQ0FBVSxVQUFWLEVBQXNCWixJQUFJLENBQUosRUFBT2EsUUFBN0I7QUFDQUgsc0JBQ0dGLElBREgsR0FFR0MsSUFGSCxDQUVRLGVBQU87QUFDWHRCLDBCQUFRQyxHQUFSLENBQVlZLEdBQVo7QUFDRCxpQkFKSCxFQUtHYyxLQUxILENBS1MsZUFBTztBQUNaM0IsMEJBQVFDLEdBQVIsQ0FBWTJCLEdBQVo7QUFDRCxpQkFQSDtBQVFELGVBZEgsRUFlRSxVQUFTQyxLQUFULEVBQWdCO0FBQ2Q3Qix3QkFBUUMsR0FBUixDQUFZNEIsS0FBWjtBQUNELGVBakJIO0FBbUJEO0FBQ0YsV0EvQlk7QUFnQ2JDLGlCQUFPLGVBQVNGLEdBQVQsRUFBYztBQUNuQjVCLG9CQUFRQyxHQUFSLENBQVkyQixHQUFaO0FBQ0Q7QUFsQ1ksU0FBZjtBQW9DRCxPQTVDTztBQTZDUlgsY0E3Q1Esc0JBNkNHO0FBQ1QsWUFBSUQsT0FBTyxJQUFJZSxJQUFKLEVBQVg7QUFDQSxZQUFJQyxPQUFPRCxLQUFLRSxLQUFMLENBQVdqQixJQUFYLENBQVg7QUFDQSxZQUFJa0IsUUFBUUYsT0FBTyxJQUFuQjtBQUNBLGVBQU9FLEtBQVA7QUFDRDtBQWxETyxLOzs7Ozs2QkFaRCxDQUFFOzs7NkJBQ0YsQ0FBRTs7O0FBOERSOzt3Q0FFaUI7QUFDbEJsQyxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNEOzs7O0VBeEUrQkMsZUFBS2lDLEk7O2tCQUFsQmhELEkiLCJmaWxlIjoibWluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IEJtb2IgZnJvbSAnaHlkcm9nZW4tanMtc2RrJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcclxuICB9O1xyXG4gIGN1c3RvbURhdGEgPSB7fTtcclxuICBvbkxvYWQoKSB7fVxyXG4gIG9uU2hvdygpIHt9XHJcbiAgY29uZmlnID0ge307XHJcbiAgZGF0YSA9IHtcclxuICAgIG1zZzogJ2hlbGxvIHdlcHknLFxyXG4gICAgY29uZGl0aW9uOiB0cnVlLFxyXG4gICAgaXNDaGVja2VkOiB0cnVlLFxyXG4gICAgZmxhZzogZmFsc2UsXHJcbiAgICBuYW1lOiAnTUlOQScsXHJcbiAgICBsaXN0OiBbMCwgMSwgMiwgMywgNF1cclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgdGFwTmFtZSgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3RhcE5hbWUnKTtcclxuICAgICAgLy8gICAgd3gubmF2aWdhdGVUb1xyXG4gICAgICB3ZXB5LnN3aXRjaFRhYih7IHVybDogJ2luZGV4JyB9KTtcclxuICAgIH0sXHJcbiAgICB1cGxvYWRJbWcoKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgIGNvdW50OiAxLCAvLyDpu5jorqQ5XHJcbiAgICAgICAgc2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcclxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKDExMTEpO1xyXG4gICAgICAgICAgdmFyIHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcclxuICAgICAgICAgIGlmICh0ZW1wRmlsZVBhdGhzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGRhdGUgPSB0aGF0Lm1ldGhvZHMuZm9ybWRhdGEoKTtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSBgJHtkYXRlfS5qcGdgOyAvL+S4iuS8oOeahOWbvueJh+eahOWIq+WQje+8jOW7uuiuruWPr+S7peeUqOaXpeacn+WRveWQjVxyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IEJtb2IuRmlsZShuYW1lLCB0ZW1wRmlsZVBhdGhzWzBdKTtcclxuICAgICAgICAgICAgZmlsZS5zYXZlKCkudGhlbihcclxuICAgICAgICAgICAgICBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IEJtb2IuUXVlcnkoJ3Bob3RsTGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgcXVlcnkuc2V0KCd1cmwnLCByZXNbMF0udXJsKTtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LnNldCgnZmlsZW5hbWUnLCByZXNbMF0uZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcXVlcnlcclxuICAgICAgICAgICAgICAgICAgLnNhdmUoKVxyXG4gICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJlcjogZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZm9ybWRhdGEoKSB7XHJcbiAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgdmFyIHRpbWUgPSBEYXRlLnBhcnNlKGRhdGUpO1xyXG4gICAgICBsZXQgdGltZTEgPSB0aW1lIC8gMTAwMDtcclxuICAgICAgcmV0dXJuIHRpbWUxO1xyXG4gICAgfVxyXG4gIH07IC8vIOWjsOaYjumhtemdond4bWzkuK3moIfnrb7nmoTkuovku7blpITnkIblh73mlbDjgILms6jmhI/vvIzmraTlpITlj6rnlKjkuo7lo7DmmI7pobXpnaJ3eG1s5Lit5qCH562+55qEYmluZOOAgWNhdGNo5LqL5Lu277yM6Ieq5a6a5LmJ5pa55rOV6ZyA5Lul6Ieq5a6a5LmJ5pa55rOV55qE5pa55byP5aOw5piOXHJcblxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+S4i+aLieWIt+aWsCcpO1xyXG4gIH1cclxufVxyXG4iXX0=