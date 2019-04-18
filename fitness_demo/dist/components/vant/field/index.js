'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['input-class'],
    props: {
        size: String,
        icon: String,
        label: String,
        error: Boolean,
        fixed: Boolean,
        focus: Boolean,
        center: Boolean,
        isLink: Boolean,
        leftIcon: String,
        disabled: Boolean,
        autosize: Boolean,
        readonly: Boolean,
        required: Boolean,
        iconClass: String,
        clearable: Boolean,
        inputAlign: String,
        customClass: String,
        confirmType: String,
        confirmHold: Boolean,
        errorMessage: String,
        placeholder: String,
        customStyle: String,
        useIconSlot: Boolean,
        useButtonSlot: Boolean,
        showConfirmBar: {
            type: Boolean,
            value: true
        },
        placeholderStyle: String,
        adjustPosition: {
            type: Boolean,
            value: true
        },
        cursorSpacing: {
            type: Number,
            value: 50
        },
        maxlength: {
            type: Number,
            value: -1
        },
        type: {
            type: String,
            value: 'text'
        },
        border: {
            type: Boolean,
            value: true
        },
        titleWidth: {
            type: String,
            value: '90px'
        }
    },
    data: {
        showClear: false
    },
    beforeCreate: function beforeCreate() {
        this.focused = false;
    },

    methods: {
        onInput: function onInput(event) {
            var _this = this;

            var _ref = event.detail || {},
                _ref$value = _ref.value,
                value = _ref$value === undefined ? '' : _ref$value;

            this.set({
                value: value,
                showClear: this.getShowClear(value)
            }, function () {
                _this.emitChange(value);
            });
        },
        onFocus: function onFocus(event) {
            var _ref2 = event.detail || {},
                _ref2$value = _ref2.value,
                value = _ref2$value === undefined ? '' : _ref2$value,
                _ref2$height = _ref2.height,
                height = _ref2$height === undefined ? 0 : _ref2$height;

            this.$emit('focus', { value: value, height: height });
            this.focused = true;
            this.blurFromClear = false;
            this.set({
                showClear: this.getShowClear()
            });
        },
        onBlur: function onBlur(event) {
            var _this2 = this;

            var _ref3 = event.detail || {},
                _ref3$value = _ref3.value,
                value = _ref3$value === undefined ? '' : _ref3$value,
                _ref3$cursor = _ref3.cursor,
                cursor = _ref3$cursor === undefined ? 0 : _ref3$cursor;

            this.$emit('blur', { value: value, cursor: cursor });
            this.focused = false;
            var showClear = this.getShowClear();
            if (this.data.value === value) {
                this.set({
                    showClear: showClear
                });
            } else if (!this.blurFromClear) {
                // fix: the handwritten keyboard does not trigger input change
                this.set({
                    value: value,
                    showClear: showClear
                }, function () {
                    _this2.emitChange(value);
                });
            }
        },
        onClickIcon: function onClickIcon() {
            this.$emit('click-icon');
        },
        getShowClear: function getShowClear(value) {
            value = value === undefined ? this.data.value : value;
            return this.data.clearable && this.focused && value && !this.data.readonly;
        },
        onClear: function onClear() {
            var _this3 = this;

            this.blurFromClear = true;
            this.set({
                value: '',
                showClear: this.getShowClear('')
            }, function () {
                _this3.emitChange('');
                _this3.$emit('clear', '');
            });
        },
        onConfirm: function onConfirm() {
            this.$emit('confirm', this.data.value);
        },
        emitChange: function emitChange(value) {
            this.$emit('input', value);
            this.$emit('change', value);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwic2l6ZSIsIlN0cmluZyIsImljb24iLCJsYWJlbCIsImVycm9yIiwiQm9vbGVhbiIsImZpeGVkIiwiZm9jdXMiLCJjZW50ZXIiLCJpc0xpbmsiLCJsZWZ0SWNvbiIsImRpc2FibGVkIiwiYXV0b3NpemUiLCJyZWFkb25seSIsInJlcXVpcmVkIiwiaWNvbkNsYXNzIiwiY2xlYXJhYmxlIiwiaW5wdXRBbGlnbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybVR5cGUiLCJjb25maXJtSG9sZCIsImVycm9yTWVzc2FnZSIsInBsYWNlaG9sZGVyIiwiY3VzdG9tU3R5bGUiLCJ1c2VJY29uU2xvdCIsInVzZUJ1dHRvblNsb3QiLCJzaG93Q29uZmlybUJhciIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyU3R5bGUiLCJhZGp1c3RQb3NpdGlvbiIsImN1cnNvclNwYWNpbmciLCJOdW1iZXIiLCJtYXhsZW5ndGgiLCJib3JkZXIiLCJ0aXRsZVdpZHRoIiwiZGF0YSIsInNob3dDbGVhciIsImJlZm9yZUNyZWF0ZSIsImZvY3VzZWQiLCJtZXRob2RzIiwib25JbnB1dCIsImV2ZW50IiwiZGV0YWlsIiwic2V0IiwiZ2V0U2hvd0NsZWFyIiwiZW1pdENoYW5nZSIsIm9uRm9jdXMiLCJoZWlnaHQiLCIkZW1pdCIsImJsdXJGcm9tQ2xlYXIiLCJvbkJsdXIiLCJjdXJzb3IiLCJvbkNsaWNrSWNvbiIsInVuZGVmaW5lZCIsIm9uQ2xlYXIiLCJvbkNvbmZpcm0iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTyxJQURHO0FBRVZDLGFBQVMsQ0FBQyxhQUFELENBRkM7QUFHVkMsV0FBTztBQUNIQyxjQUFNQyxNQURIO0FBRUhDLGNBQU1ELE1BRkg7QUFHSEUsZUFBT0YsTUFISjtBQUlIRyxlQUFPQyxPQUpKO0FBS0hDLGVBQU9ELE9BTEo7QUFNSEUsZUFBT0YsT0FOSjtB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TCxDQUFXLE9BQVgsRUFBb0JyQixLQUFwQjtBQUNBLGlCQUFLcUIsS0FBTCxDQUFXLFFBQVgsRUFBcUJyQixLQUFyQjtBQUNIO0FBOURJO0FBaEVDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICBjbGFzc2VzOiBbJ2lucHV0LWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2l6ZTogU3RyaW5nLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgICAgIGVycm9yOiBCb29sZWFuLFxuICAgICAgICBmaXhlZDogQm9vbGVhbixcbiAgICAgICAgZm9jdXM6IEJvb2xlYW4sXG4gICAgICAgIGNlbnRlcjogQm9vbGVhbixcbiAgICAgICAgaXNMaW5rOiBCb29sZWFuLFxuICAgICAgICBsZWZ0SWNvbjogU3RyaW5nLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgYXV0b3NpemU6IEJvb2xlYW4sXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICByZXF1aXJlZDogQm9vbGVhbixcbiAgICAgICAgaWNvbkNsYXNzOiBTdHJpbmcsXG4gICAgICAgIGNsZWFyYWJsZTogQm9vbGVhbixcbiAgICAgICAgaW5wdXRBbGlnbjogU3RyaW5nLFxuICAgICAgICBjdXN0b21DbGFzczogU3RyaW5nLFxuICAgICAgICBjb25maXJtVHlwZTogU3RyaW5nLFxuICAgICAgICBjb25maXJtSG9sZDogQm9vbGVhbixcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBTdHJpbmcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgIHVzZUljb25TbG90OiBCb29sZWFuLFxuICAgICAgICB1c2VCdXR0b25TbG90OiBCb29sZWFuLFxuICAgICAgICBzaG93Q29uZmlybUJhcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlaG9sZGVyU3R5bGU6IFN0cmluZyxcbiAgICAgICAgYWRqdXN0UG9zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjdXJzb3JTcGFjaW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNTBcbiAgICAgICAgfSxcbiAgICAgICAgbWF4bGVuZ3RoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogLTFcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd0ZXh0J1xuICAgICAgICB9LFxuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0aXRsZVdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJzkwcHgnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc2hvd0NsZWFyOiBmYWxzZVxuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JbnB1dChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSA9ICcnIH0gPSBldmVudC5kZXRhaWwgfHwge307XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgc2hvd0NsZWFyOiB0aGlzLmdldFNob3dDbGVhcih2YWx1ZSlcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUgPSAnJywgaGVpZ2h0ID0gMCB9ID0gZXZlbnQuZGV0YWlsIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZm9jdXMnLCB7IHZhbHVlLCBoZWlnaHQgfSk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ibHVyRnJvbUNsZWFyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgc2hvd0NsZWFyOiB0aGlzLmdldFNob3dDbGVhcigpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CbHVyKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlID0gJycsIGN1cnNvciA9IDAgfSA9IGV2ZW50LmRldGFpbCB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2JsdXInLCB7IHZhbHVlLCBjdXJzb3IgfSk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHNob3dDbGVhciA9IHRoaXMuZ2V0U2hvd0NsZWFyKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NsZWFyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5ibHVyRnJvbUNsZWFyKSB7XG4gICAgICAgICAgICAgICAgLy8gZml4OiB0aGUgaGFuZHdyaXR0ZW4ga2V5Ym9hcmQgZG9lcyBub3QgdHJpZ2dlciBpbnB1dCBjaGFuZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xlYXJcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tJY29uKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2staWNvbicpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRTaG93Q2xlYXIodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHRoaXMuZGF0YS52YWx1ZSA6IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmRhdGEuY2xlYXJhYmxlICYmIHRoaXMuZm9jdXNlZCAmJiB2YWx1ZSAmJiAhdGhpcy5kYXRhLnJlYWRvbmx5KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGVhcigpIHtcbiAgICAgICAgICAgIHRoaXMuYmx1ckZyb21DbGVhciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIHNob3dDbGVhcjogdGhpcy5nZXRTaG93Q2xlYXIoJycpXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGVhcicsICcnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbmZpcm0oKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb25maXJtJywgdGhpcy5kYXRhLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW1pdENoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==