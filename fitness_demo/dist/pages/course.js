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
            navigationBarTitleText: '认证结果'
        }, _this.data = {
            biz_no: '',
            url: '',
            msg: '认证成功',
            url1: '../imgs/success.png',
            url2: '../imgs/fail.png'
        }, _this.customData = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(inputCheck, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.biz_no = options.biz_no;
            this.url = this.url1;
            console.log(options.biz_no);
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }, {
        key: 'next',
        value: function next() {
            var _this2 = this;

            var param = {
                token: "bf2593fa-6e7b-47b3-b9f8-e9cdd99d1bf9",
                biz_no: this.biz_no
            };
            (0, _api.post)('/api/identify/getToken', param).then(function (res) {
                _this2.$navigate({ url: 'out?message=' + res.message });
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(inputCheck , 'pages/course'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS5qcyJdLCJuYW1lcyI6WyJpbnB1dENoZWNrIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJiaXpfbm8iLCJ1cmwiLCJtc2ciLCJ1cmwxIiwidXJsMiIsImN1c3RvbURhdGEiLCJtZXRob2RzIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbSIsInRva2VuIiwidGhlbiIsIiRuYXZpZ2F0ZSIsInJlcyIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0Iiwid3giLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7O2tNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLEksR0FBTztBQUNIQyxvQkFBUSxFQURMO0FBRUhDLGlCQUFLLEVBRkY7QUFHSEMsaUJBQUssTUFIRjtBQUlIQyxrQkFBTSxxQkFKSDtBQUtIQyxrQkFBTTtBQUxILFMsUUFPUEMsVSxHQUFhLEUsUUFTYkMsTyxHQUFVLEU7Ozs7OytCQVJIQyxPLEVBQVM7QUFDWixpQkFBS1AsTUFBTCxHQUFjTyxRQUFRUCxNQUF0QjtBQUNBLGlCQUFLQyxHQUFMLEdBQVcsS0FBS0UsSUFBaEI7QUFDQUssb0JBQVFDLEdBQVIsQ0FBWUYsUUFBUVAsTUFBcEI7QUFDSDs7O2lDQUNRLENBQ1I7OzsrQkFJTTtBQUFBOztBQUNILGdCQUFJVSxRQUFRO0FBQ1JDLHVCQUFPLHNDQURDO0FBRVJYLHdCQUFRLEtBQUtBO0FBRkwsYUFBWjtBQUlBLHFEQUErQlUsS0FBL0IsRUFBc0NFLElBQXRDLENBQTJDLGVBQU87QUFDOUMsdUJBQUtDLFNBQUwsQ0FBZSxFQUFFWixzQkFBb0JhLElBQUlDLE9BQTFCLEVBQWY7QUFDSCxhQUZEO0FBR0g7Ozs0Q0FDbUI7QUFDaEJQLG9CQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBTyx1QkFBVyxZQUFNO0FBQ2JDLG1CQUFHQyxtQkFBSCxHQURhLENBQ2E7QUFDN0IsYUFGRCxFQUVHLElBRkg7QUFHSDs7O3dDQUNlO0FBQ1pWLG9CQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBTyx1QkFBVyxZQUFNO0FBQ2JDLG1CQUFHRSx3QkFBSCxHQURhLENBQ2tCO0FBQ2xDLGFBRkQsRUFFRyxJQUZIO0FBR0g7Ozs7RUExQ21DQyxlQUFLQyxJOztrQkFBeEJ6QixVIiwiZmlsZSI6ImNvdXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5wdXRDaGVjayBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6k6K+B57uT5p6cJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgYml6X25vOiAnJyxcclxuICAgICAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICAgICAgbXNnOiAn6K6k6K+B5oiQ5YqfJyxcclxuICAgICAgICAgICAgdXJsMTogJy4uL2ltZ3Mvc3VjY2Vzcy5wbmcnLFxyXG4gICAgICAgICAgICB1cmwyOiAnLi4vaW1ncy9mYWlsLnBuZydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGN1c3RvbURhdGEgPSB7fTtcclxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmJpel9ubyA9IG9wdGlvbnMuYml6X25vO1xyXG4gICAgICAgICAgICB0aGlzLnVybCA9IHRoaXMudXJsMTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob3B0aW9ucy5iaXpfbm8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uU2hvdygpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXh0KCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbjogXCJiZjI1OTNmYS02ZTdiLTQ3YjMtYjlmOC1lOWNkZDk5ZDFiZjlcIixcclxuICAgICAgICAgICAgICAgIGJpel9ubzogdGhpcy5iaXpfbm9cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcG9zdChgL2FwaS9pZGVudGlmeS9nZXRUb2tlbmAsIHBhcmFtKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7IHVybDogYG91dD9tZXNzYWdlPSR7cmVzLm1lc3NhZ2V9YCB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuIvmi4nliLfmlrAnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi35pawXHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5LiK5ouJ5Yqg6L29Jyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5YGc5q2i5LiK5ouJ5Yqg6L29XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19