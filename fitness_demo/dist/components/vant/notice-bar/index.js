'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _component = require('./../common/component.js');

var FONT_COLOR = '#ed6a0c';
var BG_COLOR = '#fffbe8';
(0, _component.VantComponent)({
    props: {
        text: {
            type: String,
            value: ''
        },
        mode: {
            type: String,
            value: ''
        },
        url: {
            type: String,
            value: ''
        },
        openType: {
            type: String,
            value: 'navigate'
        },
        delay: {
            type: Number,
            value: 0
        },
        speed: {
            type: Number,
            value: 50
        },
        scrollable: {
            type: Boolean,
            value: true
        },
        leftIcon: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: FONT_COLOR
        },
        backgroundColor: {
            type: String,
            value: BG_COLOR
        }
    },
    data: {
        show: true,
        hasRightIcon: false
    },
    watch: {
        text: function text() {
            this.set({}, this.init);
        }
    },
    created: function created() {
        if (this.data.mode) {
            this.set({
                hasRightIcon: true
            });
        }
        this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: 'linear'
        });
    },
    destroyed: function destroyed() {
        this.timer && clearTimeout(this.timer);
    },

    methods: {
        init: function init() {
            var _this = this;

            Promise.all([this.getRect('.van-notice-bar__content'), this.getRect('.van-notice-bar__content-wrap')]).then(function (rects) {
                var _rects = _slicedToArray(rects, 2),
                    contentRect = _rects[0],
                    wrapRect = _rects[1];

                if (contentRect == null || wrapRect == null || !contentRect.width || !wrapRect.width) {
                    return;
                }
                var _data = _this.data,
                    speed = _data.speed,
                    scrollable = _data.scrollable,
                    delay = _data.delay;

                if (scrollable && wrapRect.width < contentRect.width) {
                    var duration = contentRect.width / speed * 1000;
                    _this.wrapWidth = wrapRect.width;
                    _this.contentWidth = contentRect.width;
                    _this.duration = duration;
                    _this.animation = wx.createAnimation({
                        duration: duration,
                        timingFunction: 'linear',
                        delay: delay
                    });
                    _this.scroll();
                }
            });
        },
        scroll: function scroll() {
            var _this2 = this;

            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.set({
                animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
            });
            setTimeout(function () {
                _this2.set({
                    animationData: _this2.animation.translateX(-_this2.contentWidth).step().export()
                });
            }, 20);
            this.timer = setTimeout(function () {
                _this2.scroll();
            }, this.duration);
        },
        onClickIcon: function onClickIcon() {
            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.set({ show: false });
        },
        onClick: function onClick(event) {
            this.$emit('click', event);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZPTlRfQ09MT1IiLCJCR19DT0xPUiIsInByb3BzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsIm1vZGUiLCJ1cmwiLCJvcGVuVHlwZSIsImRlbGF5IiwiTnVtYmVyIiwic3BlZWQiLCJzY3JvbGxhYmxlIiwiQm9vbGVhbiIsImxlZnRJY29uIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXRhIiwic2hvdyIsImhhc1JpZ2h0SWNvbiIsIndhdGNoIiwic2V0IiwiaW5pdCIsImNyZWF0ZWQiLCJyZXNldEFuaW1hdGlvbiIsInd4IiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsImRlc3Ryb3llZCIsInRpbWVyIiwiY2xlYXJUaW1lb3V0IiwibWV0aG9kcyIsIlByb21pc2UiLCJhbGwiLCJnZXRSZWN0IiwidGhlbiIsInJlY3RzIiwiY29udGVudFJlY3QiLCJ3cmFwUmVjdCIsIndpZHRoIiwid3JhcFdpZHRoIiwiY29udGVudFdpZHRoIiwiYW5pbWF0aW9uIiwic2Nyb2xsIiwiYW5pbWF0aW9uRGF0YSIsInRyYW5zbGF0ZVgiLCJzdGVwIiwiZXhwb3J0Iiwic2V0VGltZW91dCIsIm9uQ2xpY2tJY29uIiwib25DbGljayIsImV2ZW50IiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQSxJQUFNQSxhQUFhLFNBQW5CO0FBQ0EsSUFBTUMsV0FBVyxTQUFqQjtBQUNBLDhCQUFjO0FBQ1ZDLFdBQU87QUFDSEMsY0FBTTtBQUNGQyxrQkFBTUMsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBREg7QUFLSEMsY0FBTTtBQUNGSCxrQkFBTUMsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBTEg7QUFTSEUsYUFBSztBQUNESixrQkFBTUMsTUFETDtBQUVEQyxtQkFBTztBQUZOLFNBVEY7QUFhSEcsa0JBQVU7QUFDTkwsa0JBQU1DLE1BREE7QUFFTkMsbUJBQU87QUFGRCxT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LG1DQUFlLE9BQUtGLFNBQUwsQ0FDVkcsVUFEVSxDQUNDLENBQUMsT0FBS0osWUFEUCxFQUVWSyxJQUZVLEdBR1ZDLE1BSFU7QUFEVixpQkFBVDtBQU1ILGFBUEQsRUFPRyxFQVBIO0FBUUEsaUJBQUtsQixLQUFMLEdBQWFtQixXQUFXLFlBQU07QUFDMUIsdUJBQUtMLE1BQUw7QUFDSCxhQUZZLEVBRVYsS0FBS2pCLFFBRkssQ0FBYjtBQUdILFNBaERJO0FBaURMdUIsbUJBakRLLHlCQWlEUztBQUNWLGlCQUFLcEIsS0FBTCxJQUFjQyxhQUFhLEtBQUtELEtBQWxCLENBQWQ7QUFDQSxpQkFBS0EsS0FBTCxHQUFhLElBQWI7QUFDQSxpQkFBS1QsR0FBTCxDQUFTLEVBQUVILE1BQU0sS0FBUixFQUFUO0FBQ0gsU0FyREk7QUFzRExpQyxlQXRESyxtQkFzREdDLEtBdERILEVBc0RVO0FBQ1gsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRCxLQUFwQjtBQUNIO0FBeERJO0FBbEVDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5jb25zdCBGT05UX0NPTE9SID0gJyNlZDZhMGMnO1xuY29uc3QgQkdfQ09MT1IgPSAnI2ZmZmJlOCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHVybDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5UeXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ25hdmlnYXRlJ1xuICAgICAgICB9LFxuICAgICAgICBkZWxheToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA1MFxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxhYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbGVmdEljb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IEZPTlRfQ09MT1JcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogQkdfQ09MT1JcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICBoYXNSaWdodEljb246IGZhbHNlXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICB0ZXh0KCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoe30sIHRoaXMuaW5pdCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEubW9kZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIGhhc1JpZ2h0SWNvbjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNldEFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgdGhpcy50aW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLW5vdGljZS1iYXJfX2NvbnRlbnQnKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tbm90aWNlLWJhcl9fY29udGVudC13cmFwJylcbiAgICAgICAgICAgIF0pLnRoZW4oKHJlY3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2NvbnRlbnRSZWN0LCB3cmFwUmVjdF0gPSByZWN0cztcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudFJlY3QgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICB3cmFwUmVjdCA9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICFjb250ZW50UmVjdC53aWR0aCB8fFxuICAgICAgICAgICAgICAgICAgICAhd3JhcFJlY3Qud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB7IHNwZWVkLCBzY3JvbGxhYmxlLCBkZWxheSB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxhYmxlICYmIHdyYXBSZWN0LndpZHRoIDwgY29udGVudFJlY3Qud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSAoY29udGVudFJlY3Qud2lkdGggLyBzcGVlZCkgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndyYXBXaWR0aCA9IHdyYXBSZWN0LndpZHRoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRXaWR0aCA9IGNvbnRlbnRSZWN0LndpZHRoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbCgpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRGF0YTogdGhpcy5yZXNldEFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAudHJhbnNsYXRlWCh0aGlzLndyYXBXaWR0aClcbiAgICAgICAgICAgICAgICAgICAgLnN0ZXAoKVxuICAgICAgICAgICAgICAgICAgICAuZXhwb3J0KClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhOiB0aGlzLmFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zbGF0ZVgoLXRoaXMuY29udGVudFdpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0ZXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmV4cG9ydCgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAyMCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrSWNvbigpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHNob3c6IGZhbHNlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19