'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = getApp();

var permission = function (_wepy$page) {
    _inherits(permission, _wepy$page);

    function permission() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, permission);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = permission.__proto__ || Object.getPrototypeOf(permission)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的'
        }, _this.data = {
            //判断小程序的API，回调，参数，组件等是否在当前版本可用。
            canIUse: wx.canIUse('button.open-type.getUserInfo'),
            userInfo: null
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(permission, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var userInfo;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _wepy2.default.login();

                            case 2:
                                _context.next = 4;
                                return _wepy2.default.getUserInfo();

                            case 4:
                                userInfo = _context.sent;

                                console.log('userInfo', userInfo);
                                this.userInfo = userInfo.userInfo;
                                // this.userInfo = this.$parent.globalData.userInfo;
                                this.$apply();
                                console.log('this.userInfo', this.userInfo);

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }, {
        key: 'bindGetUserInfo',
        value: function bindGetUserInfo(e) {
            if (e.detail.userInfo) {
                //用户按了允许授权按钮 
                var that = this;
                //插入登录的用户的相关信息到数据库 
                // wx.request({
                //     url: app.globalData.urlPath + 'user/add',
                //     data: {
                //         openid: getApp().globalData.openid,
                //         nickName: e.detail.userInfo.nickName,
                //         avatarUrl: e.detail.userInfo.avatarUrl,
                //         province: e.detail.userInfo.province,
                //         city: e.detail.userInfo.city
                //     },
                //     header: { 'content-type': 'application/json' },
                //     success: function (res) {
                //         //从数据库获取用户信息 
                //         // that.queryUsreInfo();
                //         console.log("插入小程序登录用户信息成功！");
                //     }
                // });
                //授权成功后，跳转进入小程序首页 
            } else {
                //用户按了拒绝按钮 
                wx.showModal({
                    title: '警告',
                    content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                    showCancel: false, confirmText: '返回授权',
                    success: function success(res) {
                        if (res.confirm) {
                            console.log('用户点击了“返回授权”');
                        }
                    }
                });
            }
        }
    }, {
        key: 'queryUsreInfo',

        //获取用户信息接口 
        value: function queryUsreInfo() {
            // wx.request({
            //     url: app.globalData.urlPath + 'user/userInfo',
            //     data: { openid: app.globalData.openid },
            //     header: { 'content-type': 'application/json' },
            //     success: function (res) {
            //         console.log(res.data);
            //         getApp().globalData.userInfo = res.data;
            //     }
            // })
        }
    }]);

    return permission;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(permission , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0QXBwIiwicGVybWlzc2lvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY2FuSVVzZSIsInd4IiwidXNlckluZm8iLCJ3ZXB5IiwibG9naW4iLCJnZXRVc2VySW5mbyIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJlIiwiZGV0YWlsIiwidGhhdCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsTUFBTUMsUUFBWjs7SUFDcUJDLFU7Ozs7Ozs7Ozs7Ozs7O2tNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLEksR0FBTztBQUNIO0FBQ0FDLHFCQUFTQyxHQUFHRCxPQUFILENBQVcsOEJBQVgsQ0FGTjtBQUdIRSxzQkFBVTtBQUhQLFM7Ozs7Ozs7Ozs7Ozs7dUNBT0dDLGVBQUtDLEtBQUwsRTs7Ozt1Q0FDZUQsZUFBS0UsV0FBTCxFOzs7QUFBakJILHdDOztBQUNKSSx3Q0FBUUMsR0FBUixDQUFZLFVBQVosRUFBdUJMLFFBQXZCO0FBQ0EscUNBQUtBLFFBQUwsR0FBZ0JBLFNBQVNBLFFBQXpCO0FBQ0E7QUFDQSxxQ0FBS00sTUFBTDtBQUNBRix3Q0FBUUMsR0FBUixDQUFZLGVBQVosRUFBNEIsS0FBS0wsUUFBakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FFWU8sQyxFQUFHO0FBQ2YsZ0JBQUlBLEVBQUVDLE1BQUYsQ0FBU1IsUUFBYixFQUF1QjtBQUNuQjtBQUNBLG9CQUFJUyxPQUFPLElBQVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxhQXJCRCxNQXFCTztBQUNIO0FBQ0FWLG1CQUFHVyxTQUFILENBQWE7QUFDVEMsMkJBQU8sSUFERTtBQUVUQyw2QkFBUywrQkFGQTtBQUdUQyxnQ0FBWSxLQUhILEVBR1VDLGFBQWEsTUFIdkI7QUFJVEMsNkJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUNwQiw0QkFBSUEsSUFBSUMsT0FBUixFQUFpQjtBQUNiYixvQ0FBUUMsR0FBUixDQUFZLGFBQVo7QUFDSDtBQUNKO0FBUlEsaUJBQWI7QUFVSDtBQUNKOzs7O0FBQ0Q7d0NBQ2dCO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7Ozs7RUFsRW1DSixlQUFLaUIsSTs7a0JBQXhCeEIsVSIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gJy4uL2FwaS9hcGkuanMnXHJcbiAgICBjb25zdCBhcHAgPSBnZXRBcHAoKTtcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHBlcm1pc3Npb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5bCP56iL5bqP55qEQVBJ77yM5Zue6LCD77yM5Y+C5pWw77yM57uE5Lu2562J5piv5ZCm5Zyo5b2T5YmN54mI5pys5Y+v55So44CCXHJcbiAgICAgICAgICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuICAgICAgICAgICAgdXNlckluZm86IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgICAgICAgIC8vIOWcqFBhZ2XlkoxDb21wb25lbnTlhbHnlKjnmoTnlJ/lkb3lkajmnJ/lh73mlbBcclxuICAgICAgICAgICAgYXdhaXQgd2VweS5sb2dpbigpO1xyXG4gICAgICAgICAgICBsZXQgdXNlckluZm8gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VySW5mbycsdXNlckluZm8pXHJcbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB1c2VySW5mby51c2VySW5mbztcclxuICAgICAgICAgICAgLy8gdGhpcy51c2VySW5mbyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy51c2VySW5mbycsdGhpcy51c2VySW5mbylcclxuICAgICAgICB9XHJcbiAgICAgICAgYmluZEdldFVzZXJJbmZvKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUuZGV0YWlsLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAvL+eUqOaIt+aMieS6huWFgeiuuOaOiOadg+aMiemSriBcclxuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIC8v5o+S5YWl55m75b2V55qE55So5oi355qE55u45YWz5L+h5oGv5Yiw5pWw5o2u5bqTIFxyXG4gICAgICAgICAgICAgICAgLy8gd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBhcHAuZ2xvYmFsRGF0YS51cmxQYXRoICsgJ3VzZXIvYWRkJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9wZW5pZDogZ2V0QXBwKCkuZ2xvYmFsRGF0YS5vcGVuaWQsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5pY2tOYW1lOiBlLmRldGFpbC51c2VySW5mby5uaWNrTmFtZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYXZhdGFyVXJsOiBlLmRldGFpbC51c2VySW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb3ZpbmNlOiBlLmRldGFpbC51c2VySW5mby5wcm92aW5jZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2l0eTogZS5kZXRhaWwudXNlckluZm8uY2l0eVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVhZGVyOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8v5LuO5pWw5o2u5bqT6I635Y+W55So5oi35L+h5oGvIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyB0aGF0LnF1ZXJ5VXNyZUluZm8oKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCLmj5LlhaXlsI/nqIvluo/nmbvlvZXnlKjmiLfkv6Hmga/miJDlip/vvIFcIik7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAvL+aOiOadg+aIkOWKn+WQju+8jOi3s+i9rOi/m+WFpeWwj+eoi+W6j+mmlumhtSBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v55So5oi35oyJ5LqG5ouS57ud5oyJ6ZKuIFxyXG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+itpuWRiicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+aCqOeCueWHu+S6huaLkue7neaOiOadg++8jOWwhuaXoOazlei/m+WFpeWwj+eoi+W6j++8jOivt+aOiOadg+S5i+WQjuWGjei/m+WFpSEhIScsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsIGNvbmZpcm1UZXh0OiAn6L+U5Zue5o6I5p2DJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+S6huKAnOi/lOWbnuaOiOadg+KAnScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+iOt+WPlueUqOaIt+S/oeaBr+aOpeWPoyBcclxuICAgICAgICBxdWVyeVVzcmVJbmZvKCkge1xyXG4gICAgICAgICAgICAvLyB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgLy8gICAgIHVybDogYXBwLmdsb2JhbERhdGEudXJsUGF0aCArICd1c2VyL3VzZXJJbmZvJyxcclxuICAgICAgICAgICAgLy8gICAgIGRhdGE6IHsgb3BlbmlkOiBhcHAuZ2xvYmFsRGF0YS5vcGVuaWQgfSxcclxuICAgICAgICAgICAgLy8gICAgIGhlYWRlcjogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGdldEFwcCgpLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==