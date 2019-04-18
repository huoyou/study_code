'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'radio',
        type: 'descendant',
        linked: function linked(target) {
            var _data = this.data,
                value = _data.value,
                disabled = _data.disabled;

            target.set({
                value: value,
                disabled: disabled || target.data.disabled
            });
        }
    },
    props: {
        value: null,
        disabled: Boolean
    },
    watch: {
        value: function value(_value) {
            var children = this.getRelationNodes('../radio/index');
            children.forEach(function (child) {
                child.set({ value: _value });
            });
        },
        disabled: function disabled(_disabled) {
            var children = this.getRelationNodes('../radio/index');
            children.forEach(function (child) {
                child.set({ disabled: _disabled || child.data.disabled });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsImRhdGEiLCJ2YWx1ZSIsImRpc2FibGVkIiwic2V0IiwicHJvcHMiLCJCb29sZWFuIiwid2F0Y2giLCJjaGlsZHJlbiIsImdldFJlbGF0aW9uTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTyxJQURHO0FBRVZDLGNBQVU7QUFDTkMsY0FBTSxPQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxjQUhNLGtCQUdDQyxNQUhELEVBR1M7QUFBQSx3QkFDaUIsS0FBS0MsSUFEdEI7QUFBQSxnQkFDSEMsS0FERyxTQUNIQSxLQURHO0FBQUEsZ0JBQ0lDLFFBREosU0FDSUEsUUFESjs7QUFFWEgsbUJBQU9JLEdBQVAsQ0FBVztBQUNQRix1QkFBT0EsS0FEQTtBQUVQQywwQkFBVUEsWUFBWUgsT0FBT0MsSUFBUCxDQUFZRTtBQUYzQixhQUFYO0FBSUg7QUFUSyxLQUZBO0FBYVZFLFdBQU87QUFDSEgsZUFBTyxJQURKO0FBRUhDLGtCQUFVRztBQUZQLEtBYkc7QUFpQlZDLFdBQU87QUFDSEwsYUFERyxpQkFDR0EsTUFESCxFQUNVO0FBQ1QsZ0JBQU1NLFdBQVcsS0FBS0MsZ0JBQUwsQ0FBc0IsZ0JBQXRCLENBQWpCO0FBQ0FELHFCQUFTRSxPQUFULENBQWlCLGlCQUFTO0FBQ3RCQyxzQkFBTVAsR0FBTixDQUFVLEVBQUVGLGFBQUYsRUFBVjtBQUNILGFBRkQ7QUFHSCxTQU5FO0FBT0hDLGdCQVBHLG9CQU9NQSxTQVBOLEVBT2dCO0FBQ2YsZ0JBQU1LLFdBQVcsS0FBS0MsZ0JBQUwsQ0FBc0IsZ0JBQXRCLENBQWpCO0FBQ0FELHFCQUFTRSxPQUFULENBQWlCLGlCQUFTO0FBQ3RCQyxzQkFBTVAsR0FBTixDQUFVLEVBQUVELFVBQVVBLGFBQVlRLE1BQU1WLElBQU4sQ0FBV0UsUUFBbkMsRUFBVjtBQUNILGFBRkQ7QUFHSDtBQVpFO0FBakJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAncmFkaW8nLFxuICAgICAgICB0eXBlOiAnZGVzY2VuZGFudCcsXG4gICAgICAgIGxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIGRpc2FibGVkIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICB0YXJnZXQuc2V0KHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkIHx8IHRhcmdldC5kYXRhLmRpc2FibGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3JhZGlvL2luZGV4Jyk7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXQoeyB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZChkaXNhYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3JhZGlvL2luZGV4Jyk7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXQoeyBkaXNhYmxlZDogZGlzYWJsZWQgfHwgY2hpbGQuZGF0YS5kaXNhYmxlZCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=