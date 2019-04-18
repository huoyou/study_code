'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    props: {
        info: null,
        icon: String,
        dot: Boolean
    },
    relation: {
        name: 'tabbar',
        type: 'ancestor',
        linked: function linked(target) {
            this.parent = target;
        }
    },
    data: {
        active: false
    },
    methods: {
        onClick: function onClick() {
            if (this.parent) {
                this.parent.onChange(this);
            }
            this.$emit('click');
        },
        setActive: function setActive(_ref) {
            var active = _ref.active,
                color = _ref.color;

            if (this.data.active !== active) {
                return this.set({ active: active, color: color });
            }
            return Promise.resolve();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5mbyIsImljb24iLCJTdHJpbmciLCJkb3QiLCJCb29sZWFuIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsInBhcmVudCIsImRhdGEiLCJhY3RpdmUiLCJtZXRob2RzIiwib25DbGljayIsIm9uQ2hhbmdlIiwiJGVtaXQiLCJzZXRBY3RpdmUiLCJjb2xvciIsInNldCIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU87QUFDSEMsY0FBTSxJQURIO0FBRUhDLGNBQU1DLE1BRkg7QUFHSEMsYUFBS0M7QUFIRixLQURHO0FBTVZDLGNBQVU7QUFDTkMsY0FBTSxRQURBO0FBRU5DLGNBQU0sVUFGQTtBQUdOQyxjQUhNLGtCQUdDQyxNQUhELEVBR1M7QUFDWCxpQkFBS0MsTUFBTCxHQUFjRCxNQUFkO0FBQ0g7QUFMSyxLQU5BO0FBYVZFLFVBQU07QUFDRkMsZ0JBQVE7QUFETixLQWJJO0FBZ0JWQyxhQUFTO0FBQ0xDLGVBREsscUJBQ0s7QUFDTixnQkFBSSxLQUFLSixNQUFULEVBQWlCO0FBQ2IscUJBQUtBLE1BQUwsQ0FBWUssUUFBWixDQUFxQixJQUFyQjtBQUNIO0FBQ0QsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FOSTtBQU9MQyxpQkFQSywyQkFPd0I7QUFBQSxnQkFBakJMLE1BQWlCLFFBQWpCQSxNQUFpQjtBQUFBLGdCQUFUTSxLQUFTLFFBQVRBLEtBQVM7O0FBQ3pCLGdCQUFJLEtBQUtQLElBQUwsQ0FBVUMsTUFBVixLQUFxQkEsTUFBekIsRUFBaUM7QUFDN0IsdUJBQU8sS0FBS08sR0FBTCxDQUFTLEVBQUVQLGNBQUYsRUFBVU0sWUFBVixFQUFULENBQVA7QUFDSDtBQUNELG1CQUFPRSxRQUFRQyxPQUFSLEVBQVA7QUFDSDtBQVpJO0FBaEJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICBpbmZvOiBudWxsLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIGRvdDogQm9vbGVhblxuICAgIH0sXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3RhYmJhcicsXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXG4gICAgICAgIGxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Lm9uQ2hhbmdlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QWN0aXZlKHsgYWN0aXZlLCBjb2xvciB9KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmFjdGl2ZSAhPT0gYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHsgYWN0aXZlLCBjb2xvciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19