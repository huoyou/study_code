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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(inputCheck , 'pages/checkResult'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrUmVzdWx0LmpzIl0sIm5hbWVzIjpbImlucHV0Q2hlY2siLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImJpel9ubyIsInVybCIsIm1zZyIsInVybDEiLCJ1cmwyIiwiY3VzdG9tRGF0YSIsIm1ldGhvZHMiLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsInBhcmFtIiwidG9rZW4iLCJ0aGVuIiwiJG5hdmlnYXRlIiwicmVzIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJ3eCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7a01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVEMsSSxHQUFPO0FBQ0hDLG9CQUFRLEVBREw7QUFFSEMsaUJBQUssRUFGRjtBQUdIQyxpQkFBSyxNQUhGO0FBSUhDLGtCQUFNLHFCQUpIO0FBS0hDLGtCQUFNO0FBTEgsUyxRQU9QQyxVLEdBQWEsRSxRQVNiQyxPLEdBQVUsRTs7Ozs7K0JBUkhDLE8sRUFBUztBQUNaLGlCQUFLUCxNQUFMLEdBQWNPLFFBQVFQLE1BQXRCO0FBQ0EsaUJBQUtDLEdBQUwsR0FBVyxLQUFLRSxJQUFoQjtBQUNBSyxvQkFBUUMsR0FBUixDQUFZRixRQUFRUCxNQUFwQjtBQUNIOzs7aUNBQ1EsQ0FDUjs7OytCQUlNO0FBQUE7O0FBQ0gsZ0JBQUlVLFFBQVE7QUFDUkMsdUJBQU8sc0NBREM7QUFFUlgsd0JBQVEsS0FBS0E7QUFGTCxhQUFaO0FBSUEscURBQStCVSxLQUEvQixFQUFzQ0UsSUFBdEMsQ0FBMkMsZUFBTztBQUM5Qyx1QkFBS0MsU0FBTCxDQUFlLEVBQUVaLHNCQUFvQmEsSUFBSUMsT0FBMUIsRUFBZjtBQUNILGFBRkQ7QUFHSDs7OzRDQUNtQjtBQUNoQlAsb0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FPLHVCQUFXLFlBQU07QUFDYkMsbUJBQUdDLG1CQUFILEdBRGEsQ0FDYTtBQUM3QixhQUZELEVBRUcsSUFGSDtBQUdIOzs7d0NBQ2U7QUFDWlYsb0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FPLHVCQUFXLFlBQU07QUFDYkMsbUJBQUdFLHdCQUFILEdBRGEsQ0FDa0I7QUFDbEMsYUFGRCxFQUVHLElBRkg7QUFHSDs7OztFQTFDbUNDLGVBQUtDLEk7O2tCQUF4QnpCLFUiLCJmaWxlIjoiY2hlY2tSZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IHsgZ2V0LCBwb3N0IH0gZnJvbSAnLi4vYXBpL2FwaS5qcydcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGlucHV0Q2hlY2sgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iupOivgee7k+aenCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGJpel9ubzogJycsXHJcbiAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgIG1zZzogJ+iupOivgeaIkOWKnycsXHJcbiAgICAgICAgICAgIHVybDE6ICcuLi9pbWdzL3N1Y2Nlc3MucG5nJyxcclxuICAgICAgICAgICAgdXJsMjogJy4uL2ltZ3MvZmFpbC5wbmcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjdXN0b21EYXRhID0ge307XHJcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5iaXpfbm8gPSBvcHRpb25zLmJpel9ubztcclxuICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLnVybDE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMuYml6X25vKVxyXG4gICAgICAgIH1cclxuICAgICAgICBvblNob3coKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbmV4dCgpIHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICAgICAgdG9rZW46IFwiYmYyNTkzZmEtNmU3Yi00N2IzLWI5ZjgtZTljZGQ5OWQxYmY5XCIsXHJcbiAgICAgICAgICAgICAgICBiaXpfbm86IHRoaXMuYml6X25vXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHBvc3QoYC9hcGkvaWRlbnRpZnkvZ2V0VG9rZW5gLCBwYXJhbSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGUoeyB1cmw6IGBvdXQ/bWVzc2FnZT0ke3Jlcy5tZXNzYWdlfWAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5LiL5ouJ5Yi35pawJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+S4iuaLieWKoOi9vScpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WBnOatouS4iuaLieWKoOi9vVxyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==