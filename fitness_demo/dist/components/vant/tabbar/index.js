'use strict';

var _component = require('./../common/component.js');

var _safeArea = require('./../mixins/safe-area.js');

(0, _component.VantComponent)({
    mixins: [(0, _safeArea.safeArea)()],
    relation: {
        name: 'tabbar-item',
        type: 'descendant',
        linked: function linked(target) {
            this.children = this.children || [];
            this.children.push(target);
            this.setActiveItem();
        },
        unlinked: function unlinked(target) {
            this.children = this.children || [];
            this.children = this.children.filter(function (item) {
                return item !== target;
            });
            this.setActiveItem();
        }
    },
    props: {
        active: Number,
        activeColor: String,
        fixed: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    watch: {
        active: function active(_active) {
            this.currentActive = _active;
            this.setActiveItem();
        }
    },
    created: function created() {
        this.currentActive = this.data.active;
    },

    methods: {
        setActiveItem: function setActiveItem() {
            var _this = this;

            if (!Array.isArray(this.children) || !this.children.length) {
                return Promise.resolve();
            }
            return Promise.all(this.children.map(function (item, index) {
                return item.setActive({
                    active: index === _this.currentActive,
                    color: _this.data.activeColor
                });
            }));
        },
        onChange: function onChange(child) {
            var _this2 = this;

            var active = (this.children || []).indexOf(child);
            if (active !== this.currentActive && active !== -1) {
                this.currentActive = active;
                this.setActiveItem().then(function () {
                    _this2.$emit('change', active);
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsInB1c2giLCJzZXRBY3RpdmVJdGVtIiwidW5saW5rZWQiLCJmaWx0ZXIiLCJpdGVtIiwicHJvcHMiLCJhY3RpdmUiLCJOdW1iZXIiLCJhY3RpdmVDb2xvciIsIlN0cmluZyIsImZpeGVkIiwiQm9vbGVhbiIsInZhbHVlIiwiekluZGV4Iiwid2F0Y2giLCJjdXJyZW50QWN0aXZlIiwiY3JlYXRlZCIsImRhdGEiLCJtZXRob2RzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbGwiLCJtYXAiLCJpbmRleCIsInNldEFjdGl2ZSIsImNvbG9yIiwib25DaGFuZ2UiLCJjaGlsZCIsImluZGV4T2YiLCJ0aGVuIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsWUFBUSxDQUFDLHlCQUFELENBREU7QUFFVkMsY0FBVTtBQUNOQyxjQUFNLGFBREE7QUFFTkMsY0FBTSxZQUZBO0FBR05DLGNBSE0sa0JBR0NDLE1BSEQsRUFHUztBQUNYLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsSUFBaUIsRUFBakM7QUFDQSxpQkFBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CRixNQUFuQjtBQUNBLGlCQUFLRyxhQUFMO0FBQ0gsU0FQSztBQVFOQyxnQkFSTSxvQkFRR0osTUFSSCxFQVFXO0FBQ2IsaUJBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxJQUFpQixFQUFqQztBQUNBLGlCQUFLQSxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0ksTUFBZCxDQUFxQjtBQUFBLHVCQUFRQyxTQUFTTixNQUFqQjtBQUFBLGFBQXJCLENBQWhCO0FBQ0EsaUJBQUtHLGFBQUw7QUFDSDtBQVpLLEtBRkE7QUFnQlZJLFdBQU87QUFDSEMsZ0JBQVFDLE1BREw7QUFFSEMscUJBQWFDLE1BRlY7QUFHSEMsZUFBTztBQUNIZCxrQkFBTWUsT0FESDtBQUVIQyxtQkFBTztBQUZKLFNBSEo7QUFPSEMsZ0JBQVE7QUFDSmpCLGtCQUFNVyxNQURGO0FBRUpLLG1CQUFPO0FBRkg7QUFQTCxLQWhCRztBQTRCVkUsV0FBTztBQUNIUixjQURHLGtCQUNJQSxPQURKLEVBQ1k7QUFDWCxpQkFBS1MsYUFBTCxHQUFxQlQsT0FBckI7QUFDQSxpQkFBS0wsYUFBTDtBQUNIO0FBSkUsS0E1Qkc7QUFrQ1ZlLFdBbENVLHFCQWtDQTtBQUNOLGFBQUtELGFBQUwsR0FBcUIsS0FBS0UsSUFBTCxDQUFVWCxNQUEvQjtBQUNILEtBcENTOztBQXFDVlksYUFBUztBQUNMakIscUJBREssMkJBQ1c7QUFBQTs7QUFDWixnQkFBSSxDQUFDa0IsTUFBTUMsT0FBTixDQUFjLEtBQUtyQixRQUFuQixDQUFELElBQWlDLENBQUMsS0FBS0EsUUFBTCxDQUFjc0IsTUFBcEQsRUFBNEQ7QUFDeEQsdUJBQU9DLFFBQVFDLE9BQVIsRUFBUDtBQUNIO0FBQ0QsbUJBQU9ELFFBQVFFLEdBQVIsQ0FBWSxLQUFLekIsUUFBTCxDQUFjMEIsR0FBZCxDQUFrQixVQUFDckIsSUFBRCxFQUFPc0IsS0FBUDtBQUFBLHVCQUFpQnRCLEtBQUt1QixTQUFMLENBQWU7QUFDakVyQiw0QkFBUW9CLFVBQVUsTUFBS1gsYUFEMEM7QUFFakVhLDJCQUFPLE1BQUtYLElBQUwsQ0FBVVQ7QUFGZ0QsaUJBQWYsQ0FBakI7QUFBQSxhQUFsQixDQUFaLENBQVA7QUFJSCxTQVRJO0FBVUxxQixnQkFWSyxvQkFVSUMsS0FWSixFQVVXO0FBQUE7O0FBQ1osZ0JBQU14QixTQUFTLENBQUMsS0FBS1AsUUFBTCxJQUFpQixFQUFsQixFQUFzQmdDLE9BQXRCLENBQThCRCxLQUE5QixDQUFmO0FBQ0EsZ0JBQUl4QixXQUFXLEtBQUtTLGFBQWhCLElBQWlDVCxXQUFXLENBQUMsQ0FBakQsRUFBb0Q7QUFDaEQscUJBQUtTLGFBQUwsR0FBcUJULE1BQXJCO0FBQ0EscUJBQUtMLGFBQUwsR0FBcUIrQixJQUFyQixDQUEwQixZQUFNO0FBQzVCLDJCQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQjNCLE1BQXJCO0FBQ0gsaUJBRkQ7QUFHSDtBQUNKO0FBbEJJO0FBckNDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBzYWZlQXJlYSB9IGZyb20gJy4uL21peGlucy9zYWZlLWFyZWEnO1xuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbc2FmZUFyZWEoKV0sXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3RhYmJhci1pdGVtJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVJdGVtKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkKHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4gfHwgW107XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVJdGVtKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGFjdGl2ZTogTnVtYmVyLFxuICAgICAgICBhY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgICAgICBmaXhlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgYWN0aXZlKGFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVJdGVtKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZSA9IHRoaXMuZGF0YS5hY3RpdmU7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEFjdGl2ZUl0ZW0oKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5jaGlsZHJlbikgfHwgIXRoaXMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuY2hpbGRyZW4ubWFwKChpdGVtLCBpbmRleCkgPT4gaXRlbS5zZXRBY3RpdmUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZTogaW5kZXggPT09IHRoaXMuY3VycmVudEFjdGl2ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5kYXRhLmFjdGl2ZUNvbG9yXG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZShjaGlsZCkge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gKHRoaXMuY2hpbGRyZW4gfHwgW10pLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSAhPT0gdGhpcy5jdXJyZW50QWN0aXZlICYmIGFjdGl2ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVJdGVtKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==