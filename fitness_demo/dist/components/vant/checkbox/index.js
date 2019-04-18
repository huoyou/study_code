'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'checkbox-group',
        type: 'ancestor'
    },
    classes: ['icon-class', 'label-class'],
    props: {
        value: null,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: String,
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: 'round'
        }
    },
    methods: {
        emitChange: function emitChange(value) {
            var parent = this.getRelationNodes('../checkbox-group/index')[0];
            if (parent) {
                this.setParentValue(parent, value);
            } else {
                this.$emit('input', value);
                this.$emit('change', value);
            }
        },
        toggle: function toggle() {
            if (!this.data.disabled) {
                this.emitChange(!this.data.value);
            }
        },
        onClickLabel: function onClickLabel() {
            if (!this.data.disabled && !this.data.labelDisabled) {
                this.emitChange(!this.data.value);
            }
        },
        setParentValue: function setParentValue(parent, value) {
            var parentValue = parent.data.value.slice();
            var name = this.data.name;

            if (value) {
                if (parent.data.max && parentValue.length >= parent.data.max) {
                    return;
                }
                /* istanbul ignore else */
                if (parentValue.indexOf(name) === -1) {
                    parentValue.push(name);
                    parent.$emit('input', parentValue);
                    parent.$emit('change', parentValue);
                }
            } else {
                var index = parentValue.indexOf(name);
                /* istanbul ignore else */
                if (index !== -1) {
                    parentValue.splice(index, 1);
                    parent.$emit('input', parentValue);
                    parent.$emit('change', parentValue);
                }
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwidXNlSWNvblNsb3QiLCJjaGVja2VkQ29sb3IiLCJTdHJpbmciLCJsYWJlbFBvc2l0aW9uIiwibGFiZWxEaXNhYmxlZCIsInNoYXBlIiwibWV0aG9kcyIsImVtaXRDaGFuZ2UiLCJwYXJlbnQiLCJnZXRSZWxhdGlvbk5vZGVzIiwic2V0UGFyZW50VmFsdWUiLCIkZW1pdCIsInRvZ2dsZSIsImRhdGEiLCJvbkNsaWNrTGFiZWwiLCJwYXJlbnRWYWx1ZSIsInNsaWNlIiwibWF4IiwibGVuZ3RoIiwiaW5kZXhPZiIsInB1c2giLCJpbmRleCIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPLElBREc7QUFFVkMsY0FBVTtBQUNOQyxjQUFNLGdCQURBO0FBRU5DLGNBQU07QUFGQSxLQUZBO0FBTVZDLGFBQVMsQ0FBQyxZQUFELEVBQWUsYUFBZixDQU5DO0FBT1ZDLFdBQU87QUFDSEMsZUFBTyxJQURKO0FBRUhDLGtCQUFVQyxPQUZQO0FBR0hDLHFCQUFhRCxPQUhWO0FBSUhFLHNCQUFjQyxNQUpYO0FBS0hDLHVCQUFlRCxNQUxaO0FBTUhFLHVCQUFlTCxPQU5aO0FBT0hNLGVBQU87QUFDSFgsa0JBQU1RLE1BREg7QUFFSEwsbUJBQU87QUFGSjtBQVBKLEtBUEc7QUFtQlZTLGFBQVM7QUFDTEMsa0JBREssc0JBQ01WLEtBRE4sRUFDYTtBQUNkLGdCQUFNVyxTQUFTLEtBQUtDLGdCQUFMLENBQXNCLHlCQUF0QixFQUFpRCxDQUFqRCxDQUFmO0FBQ0EsZ0JBQUlELE1BQUosRUFBWTtBQUNSLHFCQUFLRSxjQUFMLENBQW9CRixNQUFwQixFQUE0QlgsS0FBNUI7QUFDSCxhQUZELE1BR0s7QUFDRCxxQkFBS2MsS0FBTCxDQUFXLE9BQVgsRUFBb0JkLEtBQXBCO0FBQ0EscUJBQUtjLEtBQUwsQ0FBVyxRQUFYLEVBQXFCZCxLQUFyQjtBQUNIO0FBQ0osU0FWSTtBQVdMZSxjQVhLLG9CQVdJO0FBQ0wsZ0JBQUksQ0FBQyxLQUFLQyxJQUFMLENBQVVmLFFBQWYsRUFBeUI7QUFDckIscUJBQUtTLFVBQUwsQ0FBZ0IsQ0FBQyxLQUFLTSxJQUFMLENBQVVoQixLQUEzQjtBQUNIO0FBQ0osU0FmSTtBQWdCTGlCLG9CQWhCSywwQkFnQlU7QUFDWCxnQkFBSSxDQUFDLEtBQUtELElBQUwsQ0FBVWYsUUFBWCxJQUF1QixDQUFDLEtBQUtlLElBQUwsQ0FBVVQsYUFBdEMsRUFBcUQ7QUFDakQscUJBQUtHLFVBQUwsQ0FBZ0IsQ0FBQyxLQUFLTSxJQUFMLENBQVVoQixLQUEzQjtBQUNIO0FBQ0osU0FwQkk7QUFxQkxhLHNCQXJCSywwQkFxQlVGLE1BckJWLEVBcUJrQlgsS0FyQmxCLEVBcUJ5QjtBQUMxQixnQkFBTWtCLGNBQWNQLE9BQU9LLElBQVAsQ0FBWWhCLEtBQVosQ0FBa0JtQixLQUFsQixFQUFwQjtBQUQwQixnQkFFbEJ2QixJQUZrQixHQUVULEtBQUtvQixJQUZJLENBRWxCcEIsSUFGa0I7O0FBRzFCLGdCQUFJSSxLQUFKLEVBQVc7QUFDUCxvQkFBSVcsT0FBT0ssSUFBUCxDQUFZSSxHQUFaLElBQW1CRixZQUFZRyxNQUFaLElBQXNCVixPQUFPSyxJQUFQLENBQVlJLEdBQXpELEVBQThEO0FBQzFEO0FBQ0g7QUFDRDtBQUNBLG9CQUFJRixZQUFZSSxPQUFaLENBQW9CMUIsSUFBcEIsTUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUNsQ3NCLGdDQUFZSyxJQUFaLENBQWlCM0IsSUFBakI7QUFDQWUsMkJBQU9HLEtBQVAsQ0FBYSxPQUFiLEVBQXNCSSxXQUF0QjtBQUNBUCwyQkFBT0csS0FBUCxDQUFhLFFBQWIsRUFBdUJJLFdBQXZCO0FBQ0g7QUFDSixhQVZELE1BV0s7QUFDRCxvQkFBTU0sUUFBUU4sWUFBWUksT0FBWixDQUFvQjFCLElBQXBCLENBQWQ7QUFDQTtBQUNBLG9CQUFJNEIsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDZE4sZ0NBQVlPLE1BQVosQ0FBbUJELEtBQW5CLEVBQTBCLENBQTFCO0FBQ0FiLDJCQUFPRyxLQUFQLENBQWEsT0FBYixFQUFzQkksV0FBdEI7QUFDQVAsMkJBQU9HLEtBQVAsQ0FBYSxRQUFiLEVBQXVCSSxXQUF2QjtBQUNIO0FBQ0o7QUFDSjtBQTVDSTtBQW5CQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJ1xuICAgIH0sXG4gICAgY2xhc3NlczogWydpY29uLWNsYXNzJywgJ2xhYmVsLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICB1c2VJY29uU2xvdDogQm9vbGVhbixcbiAgICAgICAgY2hlY2tlZENvbG9yOiBTdHJpbmcsXG4gICAgICAgIGxhYmVsUG9zaXRpb246IFN0cmluZyxcbiAgICAgICAgbGFiZWxEaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAncm91bmQnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZW1pdENoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC1ncm91cC9pbmRleCcpWzBdO1xuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFyZW50VmFsdWUocGFyZW50LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCF0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrTGFiZWwoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5kaXNhYmxlZCAmJiAhdGhpcy5kYXRhLmxhYmVsRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoIXRoaXMuZGF0YS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldFBhcmVudFZhbHVlKHBhcmVudCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFZhbHVlID0gcGFyZW50LmRhdGEudmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5kYXRhLm1heCAmJiBwYXJlbnRWYWx1ZS5sZW5ndGggPj0gcGFyZW50LmRhdGEubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50VmFsdWUuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VmFsdWUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LiRlbWl0KCdpbnB1dCcsIHBhcmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LiRlbWl0KCdjaGFuZ2UnLCBwYXJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnRWYWx1ZS5pbmRleE9mKG5hbWUpO1xuICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuJGVtaXQoJ2lucHV0JywgcGFyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuJGVtaXQoJ2NoYW5nZScsIHBhcmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==