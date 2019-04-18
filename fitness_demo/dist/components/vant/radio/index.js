'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'radio-group',
        type: 'ancestor'
    },
    classes: ['icon-class', 'label-class'],
    props: {
        name: null,
        value: null,
        disabled: Boolean,
        labelDisabled: Boolean,
        labelPosition: String,
        checkedColor: String
    },
    methods: {
        emitChange: function emitChange(value) {
            var instance = this.getRelationNodes('../radio-group/index')[0] || this;
            instance.$emit('input', value);
            instance.$emit('change', value);
        },
        onChange: function onChange(event) {
            this.emitChange(event.detail.value);
        },
        onClickLabel: function onClickLabel() {
            if (!this.data.disabled && !this.data.labelDisabled) {
                this.emitChange(this.data.name);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibGFiZWxEaXNhYmxlZCIsImxhYmVsUG9zaXRpb24iLCJTdHJpbmciLCJjaGVja2VkQ29sb3IiLCJtZXRob2RzIiwiZW1pdENoYW5nZSIsImluc3RhbmNlIiwiZ2V0UmVsYXRpb25Ob2RlcyIsIiRlbWl0Iiwib25DaGFuZ2UiLCJldmVudCIsImRldGFpbCIsIm9uQ2xpY2tMYWJlbCIsImRhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTyxJQURHO0FBRVZDLGNBQVU7QUFDTkMsY0FBTSxhQURBO0FBRU5DLGNBQU07QUFGQSxLQUZBO0FBTVZDLGFBQVMsQ0FBQyxZQUFELEVBQWUsYUFBZixDQU5DO0FBT1ZDLFdBQU87QUFDSEgsY0FBTSxJQURIO0FBRUhJLGVBQU8sSUFGSjtBQUdIQyxrQkFBVUMsT0FIUDtBQUlIQyx1QkFBZUQsT0FKWjtBQUtIRSx1QkFBZUMsTUFMWjtBQU1IQyxzQkFBY0Q7QUFOWCxLQVBHO0FBZVZFLGFBQVM7QUFDTEMsa0JBREssc0JBQ01SLEtBRE4sRUFDYTtBQUNkLGdCQUFNUyxXQUFXLEtBQUtDLGdCQUFMLENBQXNCLHNCQUF0QixFQUE4QyxDQUE5QyxLQUFvRCxJQUFyRTtBQUNBRCxxQkFBU0UsS0FBVCxDQUFlLE9BQWYsRUFBd0JYLEtBQXhCO0FBQ0FTLHFCQUFTRSxLQUFULENBQWUsUUFBZixFQUF5QlgsS0FBekI7QUFDSCxTQUxJO0FBTUxZLGdCQU5LLG9CQU1JQyxLQU5KLEVBTVc7QUFDWixpQkFBS0wsVUFBTCxDQUFnQkssTUFBTUMsTUFBTixDQUFhZCxLQUE3QjtBQUNILFNBUkk7QUFTTGUsb0JBVEssMEJBU1U7QUFDWCxnQkFBSSxDQUFDLEtBQUtDLElBQUwsQ0FBVWYsUUFBWCxJQUF1QixDQUFDLEtBQUtlLElBQUwsQ0FBVWIsYUFBdEMsRUFBcUQ7QUFDakQscUJBQUtLLFVBQUwsQ0FBZ0IsS0FBS1EsSUFBTCxDQUFVcEIsSUFBMUI7QUFDSDtBQUNKO0FBYkk7QUFmQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJ1xuICAgIH0sXG4gICAgY2xhc3NlczogWydpY29uLWNsYXNzJywgJ2xhYmVsLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBsYWJlbERpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBsYWJlbFBvc2l0aW9uOiBTdHJpbmcsXG4gICAgICAgIGNoZWNrZWRDb2xvcjogU3RyaW5nXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGVtaXRDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9yYWRpby1ncm91cC9pbmRleCcpWzBdIHx8IHRoaXM7XG4gICAgICAgICAgICBpbnN0YW5jZS4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICBpbnN0YW5jZS4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKGV2ZW50LmRldGFpbC52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tMYWJlbCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubGFiZWxEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZSh0aGlzLmRhdGEubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==