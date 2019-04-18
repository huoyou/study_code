'use strict';

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

(0, _component.VantComponent)({
    mixins: [_touch.touch],
    props: {
        disabled: Boolean,
        useButtonSlot: Boolean,
        activeColor: String,
        inactiveColor: String,
        max: {
            type: Number,
            value: 100
        },
        min: {
            type: Number,
            value: 0
        },
        step: {
            type: Number,
            value: 1
        },
        value: {
            type: Number,
            value: 0
        },
        barHeight: {
            type: String,
            value: '2px'
        }
    },
    watch: {
        value: function value(_value) {
            this.updateValue(_value, false);
        }
    },
    created: function created() {
        this.updateValue(this.data.value);
    },

    methods: {
        onTouchStart: function onTouchStart(event) {
            if (this.data.disabled) return;
            this.touchStart(event);
            this.startValue = this.format(this.data.value);
        },
        onTouchMove: function onTouchMove(event) {
            var _this = this;

            if (this.data.disabled) return;
            this.touchMove(event);
            this.getRect('.van-slider').then(function (rect) {
                var diff = _this.deltaX / rect.width * 100;
                _this.updateValue(_this.startValue + diff, false, true);
            });
        },
        onTouchEnd: function onTouchEnd() {
            if (this.data.disabled) return;
            this.updateValue(this.data.value, true);
        },
        onClick: function onClick(event) {
            var _this2 = this;

            if (this.data.disabled) return;
            this.getRect('.van-slider').then(function (rect) {
                var value = (event.detail.x - rect.left) / rect.width * 100;
                _this2.updateValue(value, true);
            });
        },
        updateValue: function updateValue(value, end, drag) {
            value = this.format(value);
            this.set({
                value: value,
                barStyle: 'width: ' + value + '%; height: ' + this.data.barHeight + ';'
            });
            if (drag) {
                this.$emit('drag', { value: value });
            }
            if (end) {
                this.$emit('change', value);
            }
        },
        format: function format(value) {
            var _data = this.data,
                max = _data.max,
                min = _data.min,
                step = _data.step;

            return Math.round(Math.max(min, Math.min(value, max)) / step) * step;
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInRvdWNoIiwicHJvcHMiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ1c2VCdXR0b25TbG90IiwiYWN0aXZlQ29sb3IiLCJTdHJpbmciLCJpbmFjdGl2ZUNvbG9yIiwibWF4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwibWluIiwic3RlcCIsImJhckhlaWdodCIsIndhdGNoIiwidXBkYXRlVmFsdWUiLCJjcmVhdGVkIiwiZGF0YSIsIm1ldGhvZHMiLCJvblRvdWNoU3RhcnQiLCJldmVudCIsInRvdWNoU3RhcnQiLCJzdGFydFZhbHVlIiwiZm9ybWF0Iiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmUiLCJnZXRSZWN0IiwidGhlbiIsInJlY3QiLCJkaWZmIiwiZGVsdGFYIiwid2lkdGgiLCJvblRvdWNoRW5kIiwib25DbGljayIsImRldGFpbCIsIngiLCJsZWZ0IiwiZW5kIiwiZHJhZyIsInNldCIsImJhclN0eWxlIiwiJGVtaXQiLCJNYXRoIiwicm91bmQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsWUFBUSxDQUFDQyxZQUFELENBREU7QUFFVkMsV0FBTztBQUNIQyxrQkFBVUMsT0FEUDtBQUVIQyx1QkFBZUQsT0FGWjtBQUdIRSxxQkFBYUMsTUFIVjtBQUlIQyx1QkFBZUQsTUFKWjtBQUtIRSxhQUFLO0FBQ0RDLGtCQUFNQyxNQURMO0FBRURDLG1CQUFPO0FBRk4sU0FMRjtBQVNIQyxhQUFLO0FBQ0RILGtCQUFNQyxNQURMO0FBRURDLG1CQUFPO0FBRk4sU0FURjtBQWFIRSxjQUFNO0FBQ0ZKLGtCQUFNQyxNQURKO0FBRUZDLG1CQUFPO0FBRkwsU0FiSDtBQWlCSEEsZUFBTztBQUNIRixrQkFBTUMsTUFESDtBQUVIQyxtQkFBTztBQUZKLFNBakJKO0FBcUJIRyxtQkFBVztBQUNQTCxrQkFBTUgsTUFEQztBQUVQSyxtQkFBTztBQUZBO0FBckJSLEtBRkc7QUE0QlZJLFdB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dCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IHRvdWNoIH0gZnJvbSAnLi4vbWl4aW5zL3RvdWNoJztcblZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW3RvdWNoXSxcbiAgICBwcm9wczoge1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgdXNlQnV0dG9uU2xvdDogQm9vbGVhbixcbiAgICAgICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICAgICAgaW5hY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAgbWluOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICBzdGVwOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYmFySGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJzJweCdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLmRhdGEudmFsdWUpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy50b3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHRoaXMuZm9ybWF0KHRoaXMuZGF0YS52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMudG91Y2hNb3ZlKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi1zbGlkZXInKS50aGVuKChyZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMuZGVsdGFYIC8gcmVjdC53aWR0aCAqIDEwMDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuc3RhcnRWYWx1ZSArIGRpZmYsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoRW5kKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuZGF0YS52YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXNsaWRlcicpLnRoZW4oKHJlY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IChldmVudC5kZXRhaWwueCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoICogMTAwO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVZhbHVlKHZhbHVlLCBlbmQsIGRyYWcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGJhclN0eWxlOiBgd2lkdGg6ICR7dmFsdWV9JTsgaGVpZ2h0OiAke3RoaXMuZGF0YS5iYXJIZWlnaHR9O2BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGRyYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdkcmFnJywgeyB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgeyBtYXgsIG1pbiwgc3RlcCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWx1ZSwgbWF4KSkgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==