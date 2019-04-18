'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    props: {
        value: null,
        title: String,
        border: Boolean,
        checked: Boolean,
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        size: {
            type: String,
            value: '24px'
        },
        activeValue: {
            type: null,
            value: true
        },
        inactiveValue: {
            type: null,
            value: false
        }
    },
    watch: {
        checked: function checked(value) {
            this.set({ value: value });
        }
    },
    created: function created() {
        this.set({ value: this.data.checked });
    },

    methods: {
        onChange: function onChange(event) {
            this.$emit('change', event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicHJvcHMiLCJ2YWx1ZSIsInRpdGxlIiwiU3RyaW5nIiwiYm9yZGVyIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJhY3RpdmVDb2xvciIsImluYWN0aXZlQ29sb3IiLCJzaXplIiwidHlwZSIsImFjdGl2ZVZhbHVlIiwiaW5hY3RpdmVWYWx1ZSIsIndhdGNoIiwic2V0IiwiY3JlYXRlZCIsImRhdGEiLCJtZXRob2RzIiwib25DaGFuZ2UiLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU8sSUFERztBQUVWQyxXQUFPO0FBQ0hDLGVBQU8sSUFESjtBQUVIQyxlQUFPQyxNQUZKO0FBR0hDLGdCQUFRQyxPQUhMO0FBSUhDLGlCQUFTRCxPQUpOO0FBS0hFLGlCQUFTRixPQUxOO0FBTUhHLGtCQUFVSCxPQU5QO0FBT0hJLHFCQUFhTixNQVBWO0FBUUhPLHVCQUFlUCxNQVJaO0FBU0hRLGNBQU07QUFDRkMsa0JBQU1ULE1BREo7QUFFRkYsbUJBQU87QUFGTCxTQVRIO0FBYUhZLHFCQUFhO0FBQ1RELGtCQUFNLElBREc7QUFFVFgsbUJBQU87QUFGRSxTQWJWO0FBaUJIYSx1QkFBZTtBQUNYRixrQkFBTSxJQURLO0FBRVhYLG1CQUFPO0FBRkk7QUFqQlosS0FGRztBQXdCVmMsV0FBTztBQUNIVCxlQURHLG1CQUNLTCxLQURMLEVBQ1k7QUFDWCxpQkFBS2UsR0FBTCxDQUFTLEVBQUVmLFlBQUYsRUFBVDtBQUNIO0FBSEUsS0F4Qkc7QUE2QlZnQixXQTdCVSxxQkE2QkE7QUFDTixhQUFLRCxHQUFMLENBQVMsRUFBRWYsT0FBTyxLQUFLaUIsSUFBTCxDQUFVWixPQUFuQixFQUFUO0FBQ0gsS0EvQlM7O0FBZ0NWYSxhQUFTO0FBQ0xDLGdCQURLLG9CQUNJQyxLQURKLEVBQ1c7QUFDWixpQkFBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJELE1BQU1FLE1BQTNCO0FBQ0g7QUFISTtBQWhDQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgIGJvcmRlcjogQm9vbGVhbixcbiAgICAgICAgY2hlY2tlZDogQm9vbGVhbixcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgICAgIGluYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcyNHB4J1xuICAgICAgICB9LFxuICAgICAgICBhY3RpdmVWYWx1ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGluYWN0aXZlVmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgY2hlY2tlZCh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZTogdGhpcy5kYXRhLmNoZWNrZWQgfSk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=