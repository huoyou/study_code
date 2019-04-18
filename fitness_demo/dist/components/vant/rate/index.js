'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['icon-class'],
    props: {
        readonly: Boolean,
        disabled: Boolean,
        size: {
            type: Number,
            value: 20
        },
        icon: {
            type: String,
            value: 'star'
        },
        voidIcon: {
            type: String,
            value: 'star-o'
        },
        color: {
            type: String,
            value: '#ffd21e'
        },
        voidColor: {
            type: String,
            value: '#c7c7c7'
        },
        disabledColor: {
            type: String,
            value: '#bdbdbd'
        },
        count: {
            type: Number,
            value: 5
        },
        value: {
            type: Number,
            value: 0
        }
    },
    data: {
        innerValue: 0
    },
    watch: {
        value: function value(_value) {
            if (_value !== this.data.innerValue) {
                this.set({ innerValue: _value });
            }
        }
    },
    computed: {
        list: function list() {
            var _data = this.data,
                count = _data.count,
                innerValue = _data.innerValue;

            return Array.from({ length: count }, function (_, index) {
                return index < innerValue;
            });
        }
    },
    methods: {
        onSelect: function onSelect(event) {
            var data = this.data;
            var index = event.currentTarget.dataset.index;

            if (!data.disabled && !data.readonly) {
                this.set({ innerValue: index + 1 });
                this.$emit('input', index + 1);
                this.$emit('change', index + 1);
            }
        },
        onTouchMove: function onTouchMove(event) {
            var _this = this;

            var _event$touches$ = event.touches[0],
                clientX = _event$touches$.clientX,
                clientY = _event$touches$.clientY;

            this.getRect('.van-rate__item', true).then(function (list) {
                var target = list.find(function (item) {
                    return clientX >= item.left && clientX <= item.right && clientY >= item.top && clientY <= item.bottom;
                });
                if (target != null) {
                    _this.onSelect(Object.assign({}, event, { currentTarget: target }));
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwicmVhZG9ubHkiLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJzaXplIiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwiaWNvbiIsIlN0cmluZyIsInZvaWRJY29uIiwiY29sb3IiLCJ2b2lkQ29sb3IiLCJkaXNhYmxlZENvbG9yIiwiY291bnQiLCJkYXRhIiwiaW5uZXJWYWx1ZSIsIndhdGNoIiwic2V0IiwiY29tcHV0ZWQiLCJsaXN0IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwibWV0aG9kcyIsIm9uU2VsZWN0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIiRlbWl0Iiwib25Ub3VjaE1vdmUiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJnZXRSZWN0IiwidGhlbiIsInRhcmdldCIsImZpbmQiLCJpdGVtIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU8sSUFERztBQUVWQyxhQUFTLENBQUMsWUFBRCxDQUZDO0FBR1ZDLFdBQU87QUFDSEMsa0JBQVVDLE9BRFA7QUFFSEMsa0JBQVVELE9BRlA7QUFHSEUsY0FBTTtBQUNGQyxrQkFBTUMsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBSEg7QUFPSEMsY0FBTTtBQUNGSCxrQkFBTUksTUFESjtBQUVGRixtQkFBTztBQUZMLFNBUEg7QUFXSEcsa0JBQVU7QUFDTkwsa0JBQU1JLE1BREE7QUFFTkYsbUJBQU87QUFGRCxTQVhQO0FBZUhJLGVBQU87QUFDSE4sa0JBQU1JLE1BREg7QUFFSEYsbUJBQU87QUFGSixTQWZKO0FBbUJISyxtQkFBVztBQUNQUCxrQkFBTUksTUFEQztBQUVQRixtQkFBTztBQUZBLFNBbkJSO0FBdUJITSx1QkFBZTtBQUNYUixrQkFBTUksTUFESztBQUVYRixtQkFBTztBQUZJLFNBdkJaO0FBMkJITyxlQUFPO0FBQ0hULGtCQUFNQyxNQURIO0FBRUhDLG1CQUFPO0FBRkosU0EzQko7QUErQkhBLGVBQU87QUFDSEYsa0JBQU1DLE1BREg7QUFFSEMsbUJBQU87QUFGSjtBQS9CSixLQUhHO0FBdUNWUSxVQUFNO0FBQ0ZDLG9CQUFZO0FBRFYsS0F2Q0k7QUEwQ1ZDLFdBQU87QUFDSFYsYUFERyxpQkFDR0EsTUFESCxFQUNVO0FBQ1QsZ0JBQUlBLFdBQVUsS0FBS1EsSUFBTCxDQUFVQyxVQUF4QixFQUFvQztBQUNoQyxxQkFBS0UsR0FBTCxDQUFTLEVBQUVGLFlBQVlULE1BQWQsRUFBVDtBQUNIO0FBQ0o7QUFMRSxLQTFDRztBQWlEVlksY0FBVTtBQUNOQyxZQURNLGtCQUNDO0FBQUEsd0JBQzJCLEtBQUtMLElBRGhDO0FBQUEsZ0JBQ0tELEtBREwsU0FDS0EsS0FETDtBQUFBLGdCQUNZRSxVQURaLFNBQ1lBLFVBRFo7O0FBRUgsbUJBQU9LLE1BQU1DLElBQU4sQ0FBVyxFQUFFQyxRQUFRVCxLQUFWLEVBQVgsRUFBOEIsVUFBQ1UsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsdUJBQWNBLFFBQVFULFVBQXRCO0FBQUEsYUFBOUIsQ0FBUDtBQUNIO0FBSkssS0FqREE7QUF1RFZVLGFBQVM7QUFDTEMsZ0JBREssb0JBQ0lDLEtBREosRUFDVztBQUFBLGdCQUNKYixJQURJLEdBQ0ssSUFETCxDQUNKQSxJQURJO0FBQUEsZ0JBRUpVLEtBRkksR0FFTUcsTUFBTUMsYUFBTixDQUFvQkMsT0FGMUIsQ0FFSkwsS0FGSTs7QUFHWixnQkFBSSxDQUFDVixLQUFLWixRQUFOLElBQWtCLENBQUNZLEtBQUtkLFFBQTVCLEVBQXNDO0FBQ2xDLHFCQUFLaUIsR0FBTCxDQUFTLEVBQUVGLFlBQVlTLFFBQVEsQ0FBdEIsRUFBVDtBQUNBLHFCQUFLTSxLQUFMLENBQVcsT0FBWCxFQUFvQk4sUUFBUSxDQUE1QjtBQUNBLHFCQUFLTSxLQUFMLENBQVcsUUFBWCxFQUFxQk4sUUFBUSxDQUE3QjtBQUNIO0FBQ0osU0FUSTtBQVVMTyxtQkFWSyx1QkFVT0osS0FWUCxFQVVjO0FBQUE7O0FBQUEsa0NBQ2NBLE1BQU1LLE9BQU4sQ0FBYyxDQUFkLENBRGQ7QUFBQSxnQkFDUEMsT0FETyxtQkFDUEEsT0FETztBQUFBLGdCQUNFQyxPQURGLG1CQUNFQSxPQURGOztBQUVmLGlCQUFLQyxPQUFMLENBQWEsaUJBQWIsRUFBZ0MsSUFBaEMsRUFBc0NDLElBQXRDLENBQTJDLGdCQUFRO0FBQy9DLG9CQUFNQyxTQUFTbEIsS0FBS21CLElBQUwsQ0FBVTtBQUFBLDJCQUFRTCxXQUFXTSxLQUFLQyxJQUFoQixJQUM3QlAsV0FBV00sS0FBS0UsS0FEYSxJQUU3QlAsV0FBV0ssS0FBS0csR0FGYSxJQUc3QlIsV0FBV0ssS0FBS0ksTUFISztBQUFBLGlCQUFWLENBQWY7QUFJQSxvQkFBSU4sVUFBVSxJQUFkLEVBQW9CO0FBQ2hCLDBCQUFLWCxRQUFMLENBQWNrQixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQmxCLEtBQWxCLEVBQXlCLEVBQUVDLGVBQWVTLE1BQWpCLEVBQXpCLENBQWQ7QUFDSDtBQUNKLGFBUkQ7QUFTSDtBQXJCSTtBQXZEQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgY2xhc3NlczogWydpY29uLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMjBcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdzdGFyJ1xuICAgICAgICB9LFxuICAgICAgICB2b2lkSWNvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdzdGFyLW8nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJyNmZmQyMWUnXG4gICAgICAgIH0sXG4gICAgICAgIHZvaWRDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcjYzdjN2M3J1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJyNiZGJkYmQnXG4gICAgICAgIH0sXG4gICAgICAgIGNvdW50OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNVxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBpbm5lclZhbHVlOiAwXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmRhdGEuaW5uZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHsgaW5uZXJWYWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGxpc3QoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvdW50LCBpbm5lclZhbHVlIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogY291bnQgfSwgKF8sIGluZGV4KSA9PiBpbmRleCA8IGlubmVyVmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uU2VsZWN0KGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCB7IGluZGV4IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICBpZiAoIWRhdGEuZGlzYWJsZWQgJiYgIWRhdGEucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7IGlubmVyVmFsdWU6IGluZGV4ICsgMSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi1yYXRlX19pdGVtJywgdHJ1ZSkudGhlbihsaXN0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBsaXN0LmZpbmQoaXRlbSA9PiBjbGllbnRYID49IGl0ZW0ubGVmdCAmJlxuICAgICAgICAgICAgICAgICAgICBjbGllbnRYIDw9IGl0ZW0ucmlnaHQgJiZcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50WSA+PSBpdGVtLnRvcCAmJlxuICAgICAgICAgICAgICAgICAgICBjbGllbnRZIDw9IGl0ZW0uYm90dG9tKTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdChPYmplY3QuYXNzaWduKHt9LCBldmVudCwgeyBjdXJyZW50VGFyZ2V0OiB0YXJnZXQgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=