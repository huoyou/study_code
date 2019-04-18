'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['input-class', 'plus-class', 'minus-class'],
    props: {
        value: null,
        integer: Boolean,
        disabled: Boolean,
        inputWidth: String,
        asyncChange: Boolean,
        disableInput: Boolean,
        min: {
            type: null,
            value: 1
        },
        max: {
            type: null,
            value: Number.MAX_SAFE_INTEGER
        },
        step: {
            type: null,
            value: 1
        }
    },
    computed: {
        minusDisabled: function minusDisabled() {
            return this.data.disabled || this.data.value <= this.data.min;
        },
        plusDisabled: function plusDisabled() {
            return this.data.disabled || this.data.value >= this.data.max;
        }
    },
    watch: {
        value: function value(_value) {
            if (_value === '') {
                return;
            }
            var newValue = this.range(_value);
            if (typeof newValue === 'number' && _value !== newValue) {
                this.set({ value: newValue });
            }
        }
    },
    data: {
        focus: false
    },
    created: function created() {
        this.set({
            value: this.range(this.data.value)
        });
    },

    methods: {
        onFocus: function onFocus(event) {
            this.$emit('focus', event.detail);
        },
        onBlur: function onBlur(event) {
            var value = this.range(this.data.value);
            this.triggerInput(value);
            this.$emit('blur', event.detail);
        },

        // limit value range
        range: function range(value) {
            return Math.max(Math.min(this.data.max, value), this.data.min);
        },
        onInput: function onInput(event) {
            var _ref = event.detail || {},
                _ref$value = _ref.value,
                value = _ref$value === undefined ? '' : _ref$value;

            this.triggerInput(value);
        },
        onChange: function onChange(type) {
            if (this.data[type + 'Disabled']) {
                this.$emit('overlimit', type);
                return;
            }
            var diff = type === 'minus' ? -this.data.step : +this.data.step;
            var value = Math.round((this.data.value + diff) * 100) / 100;
            this.triggerInput(this.range(value));
            this.$emit(type);
        },
        onMinus: function onMinus() {
            this.onChange('minus');
        },
        onPlus: function onPlus() {
            this.onChange('plus');
        },
        triggerInput: function triggerInput(value) {
            this.set({
                value: this.data.asyncChange ? this.data.value : value
            });
            this.$emit('change', value);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwidmFsdWUiLCJpbnRlZ2VyIiwiQm9vbGVhbiIsImRpc2FibGVkIiwiaW5wdXRXaWR0aCIsIlN0cmluZyIsImFzeW5jQ2hhbmdlIiwiZGlzYWJsZUlucHV0IiwibWluIiwidHlwZSIsIm1heCIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJzdGVwIiwiY29tcHV0ZWQiLCJtaW51c0Rpc2FibGVkIiwiZGF0YSIsInBsdXNEaXNhYmxlZCIsIndhdGNoIiwibmV3VmFsdWUiLCJyYW5nZSIsInNldCIsImZvY3VzIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJvbkZvY3VzIiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCIsIm9uQmx1ciIsInRyaWdnZXJJbnB1dCIsIk1hdGgiLCJvbklucHV0Iiwib25DaGFuZ2UiLCJkaWZmIiwicm91bmQiLCJvbk1pbnVzIiwib25QbHVzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU8sSUFERztBQUVWQyxhQUFTLENBQ0wsYUFESyxFQUVMLFlBRkssRUFHTCxhQUhLLENBRkM7QUFPVkMsV0FBTztBQUNIQyxlQUFPLElBREo7QUFFSEMsaUJBQVNDLE9BRk47QUFHSEMsa0JBQVVELE9BSFA7QUFJSEUsb0JBQVlDLE1BSlQ7QUFLSEMscUJBQWFKLE9BTFY7QUFNSEssc0JBQWNMLE9BTlg7QUFPSE0sYUFBSztBQUNEQyxrQkFBTSxJQURMO0FBRURULG1CQUFPO0FBRk4sU0FQRjtBQVdIVSxhQUFLO0FBQ0RELGtCQUFNLElBREw7QUFFRFQsbUJBQU9XLE9BQU9DO0FBRmIsU0FYRjtBQWVIQyxjQUFNO0FBQ0ZKLGtCQUFNLElBREo7QUFFRlQsbUJBQU87QUFGTDtBQWZILEtBUEc7QUEyQlZjLGNBQVU7QUFDTkMscUJBRE0sMkJBQ1U7QUFDWixtQkFBTyxLQUFLQyxJQUFMLENBQVViLFFBQVYsSUFBc0IsS0FBS2EsSUFBTCxD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LEtBQUtnQixJQUFMLENBQVVWLFdBQVYsR0FBd0IsS0FBS1UsSUFBTCxDQUFVaEIsS0FBbEMsR0FBMENBO0FBRDVDLGFBQVQ7QUFHQSxpQkFBSzJCLEtBQUwsQ0FBVyxRQUFYLEVBQXFCM0IsS0FBckI7QUFDSDtBQXRDSTtBQXREQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgY2xhc3NlczogW1xuICAgICAgICAnaW5wdXQtY2xhc3MnLFxuICAgICAgICAncGx1cy1jbGFzcycsXG4gICAgICAgICdtaW51cy1jbGFzcydcbiAgICBdLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBpbnRlZ2VyOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgaW5wdXRXaWR0aDogU3RyaW5nLFxuICAgICAgICBhc3luY0NoYW5nZTogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZUlucHV0OiBCb29sZWFuLFxuICAgICAgICBtaW46IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9LFxuICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgICAgICAgfSxcbiAgICAgICAgc3RlcDoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG1pbnVzRGlzYWJsZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmRpc2FibGVkIHx8IHRoaXMuZGF0YS52YWx1ZSA8PSB0aGlzLmRhdGEubWluO1xuICAgICAgICB9LFxuICAgICAgICBwbHVzRGlzYWJsZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmRpc2FibGVkIHx8IHRoaXMuZGF0YS52YWx1ZSA+PSB0aGlzLmRhdGEubWF4O1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5yYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld1ZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlOiBuZXdWYWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBmb2N1czogZmFsc2VcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnJhbmdlKHRoaXMuZGF0YS52YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CbHVyKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmFuZ2UodGhpcy5kYXRhLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcklucHV0KHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2JsdXInLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBsaW1pdCB2YWx1ZSByYW5nZVxuICAgICAgICByYW5nZSh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHRoaXMuZGF0YS5tYXgsIHZhbHVlKSwgdGhpcy5kYXRhLm1pbik7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUgPSAnJyB9ID0gZXZlbnQuZGV0YWlsIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VySW5wdXQodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZSh0eXBlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhW2Ake3R5cGV9RGlzYWJsZWRgXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ292ZXJsaW1pdCcsIHR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0eXBlID09PSAnbWludXMnID8gLXRoaXMuZGF0YS5zdGVwIDogK3RoaXMuZGF0YS5zdGVwO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLnJvdW5kKCh0aGlzLmRhdGEudmFsdWUgKyBkaWZmKSAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJJbnB1dCh0aGlzLnJhbmdlKHZhbHVlKSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KHR5cGUpO1xuICAgICAgICB9LFxuICAgICAgICBvbk1pbnVzKCkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSgnbWludXMnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25QbHVzKCkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSgncGx1cycpO1xuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VySW5wdXQodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5kYXRhLmFzeW5jQ2hhbmdlID8gdGhpcy5kYXRhLnZhbHVlIDogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=