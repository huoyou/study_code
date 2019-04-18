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
            navigationBarTitleText: '人脸识别'
        }, _this.data = {
            url: ''
        }, _this.customData = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(inputCheck, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.url = 'https://api.megvii.com/faceid/lite/do?token=' + options.message;
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return inputCheck;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(inputCheck , 'pages/out'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91dC5qcyJdLCJuYW1lcyI6WyJpbnB1dENoZWNrIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1cmwiLCJjdXN0b21EYXRhIiwibWV0aG9kcyIsIm9wdGlvbnMiLCJtZXNzYWdlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7O2tNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLEksR0FBTztBQUNIQyxpQkFBSztBQURGLFMsUUFHUEMsVSxHQUFhLEUsUUFNYkMsTyxHQUFVLEU7Ozs7OytCQUxIQyxPLEVBQVM7QUFDWixpQkFBS0gsR0FBTCxvREFBMERHLFFBQVFDLE9BQWxFO0FBQ0g7OztpQ0FDUSxDQUNSOzs7O0VBWm1DQyxlQUFLQyxJOztrQkFBeEJWLFUiLCJmaWxlIjoib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gJy4uL2FwaS9hcGkuanMnXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBpbnB1dENoZWNrIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkurrohLjor4bliKsnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICB1cmw6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY3VzdG9tRGF0YSA9IHt9O1xyXG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gYGh0dHBzOi8vYXBpLm1lZ3ZpaS5jb20vZmFjZWlkL2xpdGUvZG8/dG9rZW49JHtvcHRpb25zLm1lc3NhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25TaG93KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiJdfQ==