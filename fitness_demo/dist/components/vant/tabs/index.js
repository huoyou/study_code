'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

(0, _component.VantComponent)({
    mixins: [_touch.touch],
    classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
    relation: {
        name: 'tab',
        type: 'descendant',
        linked: function linked(child) {
            this.child.push(child);
            this.updateTabs(this.data.tabs.concat(child.data));
        },
        unlinked: function unlinked(child) {
            var index = this.child.indexOf(child);
            var tabs = this.data.tabs;

            tabs.splice(index, 1);
            this.child.splice(index, 1);
            this.updateTabs(tabs);
        }
    },
    props: {
        color: String,
        sticky: Boolean,
        animated: Boolean,
        swipeable: Boolean,
        lineWidth: {
            type: Number,
            value: -1
        },
        lineHeight: {
            type: Number,
            value: -1
        },
        active: {
            type: Number,
            value: 0
        },
        type: {
            type: String,
            value: 'line'
        },
        border: {
            type: Boolean,
            value: true
        },
        duration: {
            type: Number,
            value: 0.3
        },
        zIndex: {
            type: Number,
            value: 1
        },
        swipeThreshold: {
            type: Number,
            value: 4
        },
        offsetTop: {
            type: Number,
            value: 0
        }
    },
    data: {
        tabs: [],
        lineStyle: '',
        scrollLeft: 0,
        scrollable: false,
        trackStyle: '',
        wrapStyle: '',
        position: ''
    },
    watch: {
        swipeThreshold: function swipeThreshold() {
            this.set({
                scrollable: this.child.length > this.data.swipeThreshold
            });
        },

        color: 'setLine',
        lineWidth: 'setLine',
        lineHeight: 'setLine',
        active: 'setActiveTab',
        animated: 'setTrack',
        offsetTop: 'setWrapStyle'
    },
    beforeCreate: function beforeCreate() {
        this.child = [];
    },
    mounted: function mounted() {
        var _this = this;

        this.setLine(true);
        this.setTrack();
        this.scrollIntoView();
        this.getRect('.van-tabs__wrap').then(function (rect) {
            _this.navHeight = rect.height;
            _this.observerContentScroll();
        });
    },
    destroyed: function destroyed() {
        this.createIntersectionObserver().disconnect();
    },

    methods: {
        updateTabs: function updateTabs(tabs) {
            tabs = tabs || this.data.tabs;
            this.set({
                tabs: tabs,
                scrollable: tabs.length > this.data.swipeThreshold
            });
            this.setActiveTab();
        },
        trigger: function trigger(eventName, index) {
            this.$emit(eventName, {
                index: index,
                title: this.data.tabs[index].title
            });
        },
        onTap: function onTap(event) {
            var index = event.currentTarget.dataset.index;

            if (this.data.tabs[index].disabled) {
                this.trigger('disabled', index);
            } else {
                this.trigger('click', index);
                this.setActive(index);
            }
        },
        setActive: function setActive(active) {
            if (active !== this.data.active) {
                this.trigger('change', active);
                this.set({ active: active });
                this.setActiveTab();
            }
        },
        setLine: function setLine(skipTransition) {
            var _this2 = this;

            if (this.data.type !== 'line') {
                return;
            }
            var _data = this.data,
                color = _data.color,
                active = _data.active,
                duration = _data.duration,
                lineWidth = _data.lineWidth,
                lineHeight = _data.lineHeight;

            this.getRect('.van-tab', true).then(function (rects) {
                var rect = rects[active];
                var width = lineWidth !== -1 ? lineWidth : rect.width / 2;
                var height = lineHeight !== -1 ? 'height: ' + lineHeight + 'px;' : '';
                var left = rects.slice(0, active).reduce(function (prev, curr) {
                    return prev + curr.width;
                }, 0);
                left += (rect.width - width) / 2;
                var transition = skipTransition ? '' : 'transition-duration: ' + duration + 's; -webkit-transition-duration: ' + duration + 's;';
                _this2.set({
                    lineStyle: '\n            ' + height + '\n            width: ' + width + 'px;\n            background-color: ' + color + ';\n            -webkit-transform: translateX(' + left + 'px);\n            transform: translateX(' + left + 'px);\n            ' + transition + '\n          '
                });
            });
        },
        setTrack: function setTrack() {
            var _this3 = this;

            var _data2 = this.data,
                animated = _data2.animated,
                active = _data2.active,
                duration = _data2.duration;

            if (!animated) return '';
            this.getRect('.van-tabs__content').then(function (rect) {
                var width = rect.width;

                _this3.set({
                    trackStyle: '\n            width: ' + width * _this3.child.length + 'px;\n            left: ' + -1 * active * width + 'px;\n            transition: left ' + duration + 's;\n            display: -webkit-box;\n            display: flex;\n          '
                });
                var props = { width: width, animated: animated };
                _this3.child.forEach(function (item) {
                    item.set(props);
                });
            });
        },
        setActiveTab: function setActiveTab() {
            var _this4 = this;

            this.child.forEach(function (item, index) {
                var data = {
                    active: index === _this4.data.active
                };
                if (data.active) {
                    data.inited = true;
                }
                if (data.active !== item.data.active) {
                    item.set(data);
                }
            });
            this.set({}, function () {
                _this4.setLine();
                _this4.setTrack();
                _this4.scrollIntoView();
            });
        },

        // scroll active tab into view
        scrollIntoView: function scrollIntoView() {
            var _this5 = this;

            var _data3 = this.data,
                active = _data3.active,
                scrollable = _data3.scrollable;

            if (!scrollable) {
                return;
            }
            Promise.all([this.getRect('.van-tab', true), this.getRect('.van-tabs__nav')]).then(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    tabRects = _ref2[0],
                    navRect = _ref2[1];

                var tabRect = tabRects[active];
                var offsetLeft = tabRects.slice(0, active).reduce(function (prev, curr) {
                    return prev + curr.width;
                }, 0);
                _this5.set({
                    scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
                });
            });
        },
        onTouchStart: function onTouchStart(event) {
            if (!this.data.swipeable) return;
            this.touchStart(event);
        },
        onTouchMove: function onTouchMove(event) {
            if (!this.data.swipeable) return;
            this.touchMove(event);
        },

        // watch swipe touch end
        onTouchEnd: function onTouchEnd() {
            if (!this.data.swipeable) return;
            var _data4 = this.data,
                active = _data4.active,
                tabs = _data4.tabs;
            var direction = this.direction,
                deltaX = this.deltaX,
                offsetX = this.offsetX;

            var minSwipeDistance = 50;
            if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
                if (deltaX > 0 && active !== 0) {
                    this.setActive(active - 1);
                } else if (deltaX < 0 && active !== tabs.length - 1) {
                    this.setActive(active + 1);
                }
            }
        },
        setWrapStyle: function setWrapStyle() {
            var _data5 = this.data,
                offsetTop = _data5.offsetTop,
                position = _data5.position;

            var wrapStyle = void 0;
            switch (position) {
                case 'top':
                    wrapStyle = '\n            top: ' + offsetTop + 'px;\n            position: fixed;\n          ';
                    break;
                case 'bottom':
                    wrapStyle = '\n            top: auto;\n            bottom: 0;\n          ';
                    break;
                default:
                    wrapStyle = '';
            }
            // cut down `set`
            if (wrapStyle === this.data.wrapStyle) return;
            this.set({ wrapStyle: wrapStyle });
        },
        observerContentScroll: function observerContentScroll() {
            var _this6 = this;

            if (!this.data.sticky) {
                return;
            }
            var offsetTop = this.data.offsetTop;

            var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
                windowHeight = _wx$getSystemInfoSync.windowHeight;

            this.createIntersectionObserver().disconnect();
            this.createIntersectionObserver().relativeToViewport({ top: -(this.navHeight + offsetTop) }).observe('.van-tabs', function (res) {
                var top = res.boundingClientRect.top;

                if (top > offsetTop) {
                    return;
                }
                var position = res.intersectionRatio > 0 ? 'top' : 'bottom';
                _this6.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                _this6.setPosition(position);
            });
            this.createIntersectionObserver().relativeToViewport({ bottom: -(windowHeight - 1 - offsetTop) }).observe('.van-tabs', function (res) {
                var _res$boundingClientRe = res.boundingClientRect,
                    top = _res$boundingClientRe.top,
                    bottom = _res$boundingClientRe.bottom;

                if (bottom < _this6.navHeight) {
                    return;
                }
                var position = res.intersectionRatio > 0 ? 'top' : '';
                _this6.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                _this6.setPosition(position);
            });
        },
        setPosition: function setPosition(position) {
            var _this7 = this;

            if (position !== this.data.position) {
                this.set({ position: position }).then(function () {
                    _this7.setWrapStyle();
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInRvdWNoIiwiY2xhc3NlcyIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJjaGlsZCIsInB1c2giLCJ1cGRhdGVUYWJzIiwiZGF0YSIsInRhYnMiLCJjb25jYXQiLCJ1bmxpbmtlZCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInByb3BzIiwiY29sb3IiLCJTdHJpbmciLCJzdGlja3kiLCJCb29sZWFuIiwiYW5pbWF0ZWQiLCJzd2lwZWFibGUiLCJsaW5lV2lkdGgiLCJOdW1iZXIiLCJ2YWx1ZSIsImxpbmVIZWlnaHQiLCJhY3RpdmUiLCJib3JkZXIiLCJkdXJhdGlvbiIsInpJbmRleCIsInN3aXBlVGhyZXNob2xkIiwib2Zmc2V0VG9wIiwibGluZVN0eWxlIiwic2Nyb2xsTGVmdCIsInNjcm9sbGFibGUiLCJ0cmFja1N0eWxlIiwid3JhcFN0eWxlIiwicG9zaXRpb24iLCJ3YXRjaCIsInNldCIsImxlbmd0aCIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJzZXRMaW5lIiwic2V0VHJhY2siLCJzY3JvbGxJbnRvVmlldyIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsIm5hdkhlaWdodCIsImhlaWdodCIsIm9ic2VydmVyQ29udGVudFNjcm9sbCIsImRlc3Ryb3llZCIsImNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm1ldGhvZHMiLCJzZXRBY3RpdmVUYWIiLCJ0cmlnZ2VyIiwiZXZlbnROYW1lIiwiJGVtaXQiLCJ0aXRsZSIsIm9uVGFwIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImRpc2FibGVkIiwic2V0QWN0aXZlIiwic2tpcFRyYW5zaXRpb24iLCJyZWN0cyIsIndpZHRoIiwibGVmdCIsInNsaWNlIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJ0cmFuc2l0aW9uIiwiZm9yRWFjaCIsIml0ZW0iLCJpbml0ZWQiLCJQcm9taXNlIiwiYWxsIiwidGFiUmVjdHMiLCJuYXZSZWN0IiwidGFiUmVjdCIsIm9mZnNldExlZnQiLCJvblRvdWNoU3RhcnQiLCJ0b3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmUiLCJvblRvdWNoRW5kIiwiZGlyZWN0aW9uIiwiZGVsdGFYIiwib2Zmc2V0WCIsIm1pblN3aXBlRGlzdGFuY2UiLCJzZXRXcmFwU3R5bGUiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93SGVpZ2h0IiwicmVsYXRpdmVUb1ZpZXdwb3J0IiwidG9wIiwib2JzZXJ2ZSIsInJlcyIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImludGVyc2VjdGlvblJhdGlvIiwic2Nyb2xsVG9wIiwiaXNGaXhlZCIsInNldFBvc2l0aW9uIiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsWUFBUSxDQUFDQyxZQUFELENBREU7QUFFVkMsYUFBUyxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLGtCQUEzQixFQUErQyxZQUEvQyxDQUZDO0FBR1ZDLGNBQVU7QUFDTkMsY0FBTSxLQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxjQUhNLGtCQUdDQyxLQUhELEVBR1E7QUFDVixpQkFBS0EsS0FBTCxDQUFXQyxJQUFYLENBQWdCRCxLQUFoQjtBQUNBLGlCQUFLRSxVQUFMLENBQWdCLEtBQUtDLElBQUwsQ0FBVUMsSUFBVixDQUFlQyxNQUFmLENBQXNCTCxNQUFNRyxJQUE1QixDQUFoQjtBQUNILFNBTks7QUFPTkcsZ0JBUE0sb0JBT0dOLEtBUEgsRUFPVTtBQUNaLGdCQUFNTyxRQUFRLEtBQUtQLEtBQUwsQ0FBV1EsT0FBWCxDQUFtQlIsS0FBbkIsQ0FBZDtBQURZLGdCQUVKSSxJQUZJLEdBRUssS0FBS0QsSUFGVixDQUVKQyxJQUZJOztBQUdaQSxpQkFBS0ssTUFBTCxDQUFZRixLQUFaLEVBQW1CLENBQW5CO0FBQ0EsaUJBQUtQLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQkYsS0FBbEIsRUFB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QUlBLGFBQWEsS0FBSzdCLElBQUwsQ0FBVTZCLFFBQTNCLEVBQXFDO0FBQ2pDLHFCQUFLRSxHQUFMLENBQVMsRUFBRUYsa0JBQUYsRUFBVCxFQUF1QlUsSUFBdkIsQ0FBNEIsWUFBTTtBQUM5QiwyQkFBSytDLFlBQUw7QUFDSCxpQkFGRDtBQUdIO0FBQ0o7QUFsTkk7QUFqR0MsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IHRvdWNoIH0gZnJvbSAnLi4vbWl4aW5zL3RvdWNoJztcblZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW3RvdWNoXSxcbiAgICBjbGFzc2VzOiBbJ25hdi1jbGFzcycsICd0YWItY2xhc3MnLCAndGFiLWFjdGl2ZS1jbGFzcycsICdsaW5lLWNsYXNzJ10sXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3RhYicsXG4gICAgICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcbiAgICAgICAgbGlua2VkKGNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYWJzKHRoaXMuZGF0YS50YWJzLmNvbmNhdChjaGlsZC5kYXRhKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkKGNoaWxkKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGQuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgICAgICBjb25zdCB7IHRhYnMgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHRhYnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFicyh0YWJzKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgY29sb3I6IFN0cmluZyxcbiAgICAgICAgc3RpY2t5OiBCb29sZWFuLFxuICAgICAgICBhbmltYXRlZDogQm9vbGVhbixcbiAgICAgICAgc3dpcGVhYmxlOiBCb29sZWFuLFxuICAgICAgICBsaW5lV2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAtMVxuICAgICAgICB9LFxuICAgICAgICBsaW5lSGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogLTFcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2xpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMC4zXG4gICAgICAgIH0sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc3dpcGVUaHJlc2hvbGQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA0XG4gICAgICAgIH0sXG4gICAgICAgIG9mZnNldFRvcDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICB0YWJzOiBbXSxcbiAgICAgICAgbGluZVN0eWxlOiAnJyxcbiAgICAgICAgc2Nyb2xsTGVmdDogMCxcbiAgICAgICAgc2Nyb2xsYWJsZTogZmFsc2UsXG4gICAgICAgIHRyYWNrU3R5bGU6ICcnLFxuICAgICAgICB3cmFwU3R5bGU6ICcnLFxuICAgICAgICBwb3NpdGlvbjogJydcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHN3aXBlVGhyZXNob2xkKCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHNjcm9sbGFibGU6IHRoaXMuY2hpbGQubGVuZ3RoID4gdGhpcy5kYXRhLnN3aXBlVGhyZXNob2xkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3I6ICdzZXRMaW5lJyxcbiAgICAgICAgbGluZVdpZHRoOiAnc2V0TGluZScsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdzZXRMaW5lJyxcbiAgICAgICAgYWN0aXZlOiAnc2V0QWN0aXZlVGFiJyxcbiAgICAgICAgYW5pbWF0ZWQ6ICdzZXRUcmFjaycsXG4gICAgICAgIG9mZnNldFRvcDogJ3NldFdyYXBTdHlsZSdcbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jaGlsZCA9IFtdO1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5zZXRMaW5lKHRydWUpO1xuICAgICAgICB0aGlzLnNldFRyYWNrKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXRhYnNfX3dyYXAnKS50aGVuKChyZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdkhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlckNvbnRlbnRTY3JvbGwoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKS5kaXNjb25uZWN0KCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZVRhYnModGFicykge1xuICAgICAgICAgICAgdGFicyA9IHRhYnMgfHwgdGhpcy5kYXRhLnRhYnM7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgdGFicyxcbiAgICAgICAgICAgICAgICBzY3JvbGxhYmxlOiB0YWJzLmxlbmd0aCA+IHRoaXMuZGF0YS5zd2lwZVRocmVzaG9sZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVRhYigpO1xuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VyKGV2ZW50TmFtZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoZXZlbnROYW1lLCB7XG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZGF0YS50YWJzW2luZGV4XS50aXRsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVGFwKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGluZGV4IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnRhYnNbaW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdkaXNhYmxlZCcsIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRBY3RpdmUoYWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmRhdGEuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCBhY3RpdmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHsgYWN0aXZlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlVGFiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldExpbmUoc2tpcFRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBjb2xvciwgYWN0aXZlLCBkdXJhdGlvbiwgbGluZVdpZHRoLCBsaW5lSGVpZ2h0IH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tdGFiJywgdHJ1ZSkudGhlbigocmVjdHMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gcmVjdHNbYWN0aXZlXTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IGxpbmVXaWR0aCAhPT0gLTEgPyBsaW5lV2lkdGggOiByZWN0LndpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBsaW5lSGVpZ2h0ICE9PSAtMSA/IGBoZWlnaHQ6ICR7bGluZUhlaWdodH1weDtgIDogJyc7XG4gICAgICAgICAgICAgICAgbGV0IGxlZnQgPSByZWN0c1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3Vyci53aWR0aCwgMCk7XG4gICAgICAgICAgICAgICAgbGVmdCArPSAocmVjdC53aWR0aCAtIHdpZHRoKSAvIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IHNraXBUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgOiBgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtkdXJhdGlvbn1zOyAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246ICR7ZHVyYXRpb259cztgO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiBgXG4gICAgICAgICAgICAke2hlaWdodH1cbiAgICAgICAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgke2xlZnR9cHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bGVmdH1weCk7XG4gICAgICAgICAgICAke3RyYW5zaXRpb259XG4gICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFRyYWNrKCkge1xuICAgICAgICAgICAgY29uc3QgeyBhbmltYXRlZCwgYWN0aXZlLCBkdXJhdGlvbiB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCFhbmltYXRlZClcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tdGFic19fY29udGVudCcpLnRoZW4oKHJlY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHdpZHRoIH0gPSByZWN0O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tTdHlsZTogYFxuICAgICAgICAgICAgd2lkdGg6ICR7d2lkdGggKiB0aGlzLmNoaWxkLmxlbmd0aH1weDtcbiAgICAgICAgICAgIGxlZnQ6ICR7LTEgKiBhY3RpdmUgKiB3aWR0aH1weDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgJHtkdXJhdGlvbn1zO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wcyA9IHsgd2lkdGgsIGFuaW1hdGVkIH07XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0KHByb3BzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRBY3RpdmVUYWIoKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBpbmRleCA9PT0gdGhpcy5kYXRhLmFjdGl2ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aXZlICE9PSBpdGVtLmRhdGEuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXQoe30sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldExpbmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNjcm9sbCBhY3RpdmUgdGFiIGludG8gdmlld1xuICAgICAgICBzY3JvbGxJbnRvVmlldygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYWN0aXZlLCBzY3JvbGxhYmxlIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoIXNjcm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXRhYicsIHRydWUpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi10YWJzX19uYXYnKVxuICAgICAgICAgICAgXSkudGhlbigoW3RhYlJlY3RzLCBuYXZSZWN0XSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYlJlY3QgPSB0YWJSZWN0c1thY3RpdmVdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldExlZnQgPSB0YWJSZWN0c1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3Vyci53aWR0aCwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiBvZmZzZXRMZWZ0IC0gKG5hdlJlY3Qud2lkdGggLSB0YWJSZWN0LndpZHRoKSAvIDJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnN3aXBlYWJsZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoTW92ZShldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuc3dpcGVhYmxlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMudG91Y2hNb3ZlKGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd2F0Y2ggc3dpcGUgdG91Y2ggZW5kXG4gICAgICAgIG9uVG91Y2hFbmQoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zd2lwZWFibGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgeyBhY3RpdmUsIHRhYnMgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgZGlyZWN0aW9uLCBkZWx0YVgsIG9mZnNldFggfSA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBtaW5Td2lwZURpc3RhbmNlID0gNTA7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgb2Zmc2V0WCA+PSBtaW5Td2lwZURpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhWCA+IDAgJiYgYWN0aXZlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGFjdGl2ZSAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWx0YVggPCAwICYmIGFjdGl2ZSAhPT0gdGFicy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGFjdGl2ZSArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0V3JhcFN0eWxlKCkge1xuICAgICAgICAgICAgY29uc3QgeyBvZmZzZXRUb3AsIHBvc2l0aW9uIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBsZXQgd3JhcFN0eWxlO1xuICAgICAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgIHdyYXBTdHlsZSA9IGBcbiAgICAgICAgICAgIHRvcDogJHtvZmZzZXRUb3B9cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICAgICAgd3JhcFN0eWxlID0gYFxuICAgICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHdyYXBTdHlsZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY3V0IGRvd24gYHNldGBcbiAgICAgICAgICAgIGlmICh3cmFwU3R5bGUgPT09IHRoaXMuZGF0YS53cmFwU3R5bGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB3cmFwU3R5bGUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9ic2VydmVyQ29udGVudFNjcm9sbCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnN0aWNreSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgb2Zmc2V0VG9wIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCB7IHdpbmRvd0hlaWdodCB9ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKS5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKClcbiAgICAgICAgICAgICAgICAucmVsYXRpdmVUb1ZpZXdwb3J0KHsgdG9wOiAtKHRoaXMubmF2SGVpZ2h0ICsgb2Zmc2V0VG9wKSB9KVxuICAgICAgICAgICAgICAgIC5vYnNlcnZlKCcudmFuLXRhYnMnLCAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0b3AgfSA9IHJlcy5ib3VuZGluZ0NsaWVudFJlY3Q7XG4gICAgICAgICAgICAgICAgaWYgKHRvcCA+IG9mZnNldFRvcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gcmVzLmludGVyc2VjdGlvblJhdGlvID4gMCA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2Nyb2xsJywge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRvcCArIG9mZnNldFRvcCxcbiAgICAgICAgICAgICAgICAgICAgaXNGaXhlZDogcG9zaXRpb24gPT09ICd0b3AnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKVxuICAgICAgICAgICAgICAgIC5yZWxhdGl2ZVRvVmlld3BvcnQoeyBib3R0b206IC0od2luZG93SGVpZ2h0IC0gMSAtIG9mZnNldFRvcCkgfSlcbiAgICAgICAgICAgICAgICAub2JzZXJ2ZSgnLnZhbi10YWJzJywgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdG9wLCBib3R0b20gfSA9IHJlcy5ib3VuZGluZ0NsaWVudFJlY3Q7XG4gICAgICAgICAgICAgICAgaWYgKGJvdHRvbSA8IHRoaXMubmF2SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSByZXMuaW50ZXJzZWN0aW9uUmF0aW8gPiAwID8gJ3RvcCcgOiAnJztcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzY3JvbGwnLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdG9wICsgb2Zmc2V0VG9wLFxuICAgICAgICAgICAgICAgICAgICBpc0ZpeGVkOiBwb3NpdGlvbiA9PT0gJ3RvcCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uICE9PSB0aGlzLmRhdGEucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7IHBvc2l0aW9uIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFdyYXBTdHlsZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=