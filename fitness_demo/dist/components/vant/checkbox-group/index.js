'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'checkbox',
        type: 'descendant',
        linked: function linked(target) {
            var _data = this.data,
                value = _data.value,
                disabled = _data.disabled;

            target.set({
                value: value.indexOf(target.data.name) !== -1,
                disabled: disabled || target.data.disabled
            });
        }
    },
    props: {
        max: Number,
        value: Array,
        disabled: Boolean
    },
    watch: {
        value: function value(_value) {
            var children = this.getRelationNodes('../checkbox/index');
            children.forEach(function (child) {
                child.set({ value: _value.indexOf(child.data.name) !== -1 });
            });
        },
        disabled: function disabled(_disabled) {
            var children = this.getRelationNodes('../checkbox/index');
            children.forEach(function (child) {
                child.set({ disabled: _disabled || child.data.disabled });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsImRhdGEiLCJ2YWx1ZSIsImRpc2FibGVkIiwic2V0IiwiaW5kZXhPZiIsInByb3BzIiwibWF4IiwiTnVtYmVyIiwiQXJyYXkiLCJCb29sZWFuIiwid2F0Y2giLCJjaGlsZHJlbiIsImdldFJlbGF0aW9uTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTyxJQURHO0FBRVZDLGNBQVU7QUFDTkMsY0FBTSxVQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxjQUhNLGtCQUdDQyxNQUhELEVBR1M7QUFBQSx3QkFDaUIsS0FBS0MsSUFEdEI7QUFBQSxnQkFDSEMsS0FERyxTQUNIQSxLQURHO0FBQUEsZ0JBQ0lDLFFBREosU0FDSUEsUUFESjs7QUFFWEgsbUJBQU9JLEdBQVAsQ0FBVztBQUNQRix1QkFBT0EsTUFBTUcsT0FBTixDQUFjTCxPQUFPQyxJQUFQLENBQVlKLElBQTFCLE1BQW9DLENBQUMsQ0FEckM7QUFFUE0sMEJBQVVBLFlBQVlILE9BQU9DLElBQVAsQ0FBWUU7QUFGM0IsYUFBWDtBQUlIO0FBVEssS0FGQTtBQWFWRyxXQUFPO0FBQ0hDLGFBQUtDLE1BREY7QUFFSE4sZUFBT08sS0FGSjtBQUdITixrQkFBVU87QUFIUCxLQWJHO0FBa0JWQyxXQUFPO0FBQ0hULGFBREcsaUJBQ0dBLE1BREgsRUFDVTtBQUNULGdCQUFNVSxXQUFXLEtBQUtDLGdCQUFMLENBQXNCLG1CQUF0QixDQUFqQjtBQUNBRCxxQkFBU0UsT0FBVCxDQUFpQixpQkFBUztBQUN0QkMsc0JBQU1YLEdBQU4sQ0FBVSxFQUFFRixPQUFPQSxPQUFNRyxPQUFOLENBQWNVLE1BQU1kLElBQU4sQ0FBV0osSUFBekIsTUFBbUMsQ0FBQyxDQUE3QyxFQUFWO0FBQ0gsYUFGRDtBQUdILFNBTkU7QUFPSE0sZ0JBUEcsb0JBT01BLFNBUE4sRUFPZ0I7QUFDZixnQkFBTVMsV0FBVyxLQUFLQyxnQkFBTCxDQUFzQixtQkFBdEIsQ0FBakI7QUFDQUQscUJBQVNFLE9BQVQsQ0FBaUIsaUJBQVM7QUFDdEJDLHNCQUFNWCxHQUFOLENBQVUsRUFBRUQsVUFBVUEsYUFBWVksTUFBTWQsSUFBTixDQUFXRSxRQUFuQyxFQUFWO0FBQ0gsYUFGRDtBQUdIO0FBWkU7QUFsQkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdjaGVja2JveCcsXG4gICAgICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcbiAgICAgICAgbGlua2VkKHRhcmdldCkge1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgZGlzYWJsZWQgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHRhcmdldC5zZXQoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZS5pbmRleE9mKHRhcmdldC5kYXRhLm5hbWUpICE9PSAtMSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQgfHwgdGFyZ2V0LmRhdGEuZGlzYWJsZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBtYXg6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IEFycmF5LFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhblxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC9pbmRleCcpO1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0KHsgdmFsdWU6IHZhbHVlLmluZGV4T2YoY2hpbGQuZGF0YS5uYW1lKSAhPT0gLTEgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC9pbmRleCcpO1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0KHsgZGlzYWJsZWQ6IGRpc2FibGVkIHx8IGNoaWxkLmRhdGEuZGlzYWJsZWQgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19