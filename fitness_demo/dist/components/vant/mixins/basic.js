'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var basic = exports.basic = Behavior({
    methods: {
        $emit: function $emit() {
            this.triggerEvent.apply(this, arguments);
        },
        getRect: function getRect(selector, all) {
            var _this = this;

            return new Promise(function (resolve) {
                wx.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
                    if (all && Array.isArray(rect) && rect.length) {
                        resolve(rect);
                    }
                    if (!all && rect) {
                        resolve(rect);
                    }
                }).exec();
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbImJhc2ljIiwiQmVoYXZpb3IiLCJtZXRob2RzIiwiJGVtaXQiLCJ0cmlnZ2VyRXZlbnQiLCJhcHBseSIsImFyZ3VtZW50cyIsImdldFJlY3QiLCJzZWxlY3RvciIsImFsbCIsIlByb21pc2UiLCJ3eCIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpbiIsImJvdW5kaW5nQ2xpZW50UmVjdCIsIkFycmF5IiwiaXNBcnJheSIsInJlY3QiLCJsZW5ndGgiLCJyZXNvbHZlIiwiZXhlYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSx3QkFBUUMsU0FBUztBQUMxQkMsYUFBUztBQUNMQyxhQURLLG1CQUNHO0FBQ0osaUJBQUtDLFlBQUwsQ0FBa0JDLEtBQWxCLENBQXdCLElBQXhCLEVBQThCQyxTQUE5QjtBQUNILFNBSEk7QUFJTEMsZUFKSyxtQkFJR0MsUUFKSCxFQUlhQyxHQUpiLEVBSWtCO0FBQUE7O0FBQ25CLG1CQUFPLElBQUlDLE9BQUosQ0FBWSxtQkFBVztBQUMxQkMsbUJBQUdDLG1CQUFILEdBQ0tDLEVBREwsQ0FDUSxLQURSLEVBQ2NKLE1BQU0sV0FBTixHQUFvQixRQURsQyxFQUM0Q0QsUUFENUMsRUFFS00sa0JBRkwsQ0FFd0IsZ0JBQVE7QUFDNUIsd0JBQUlMLE9BQU9NLE1BQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFQLElBQThCQSxLQUFLQyxNQUF2QyxFQUErQztBQUMzQ0MsZ0NBQVFGLElBQVI7QUFDSDtBQUNELHdCQUFJLENBQUNSLEdBQUQsSUFBUVEsSUFBWixFQUFrQjtBQUNkRSxnQ0FBUUYsSUFBUjtBQUNIO0FBQ0osaUJBVEQsRUFVS0csSUFWTDtBQVdILGFBWk0sQ0FBUDtBQWFIO0FBbEJJO0FBRGlCLENBQVQsQ0FBZCIsImZpbGUiOiJiYXNpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBiYXNpYyA9IEJlaGF2aW9yKHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgICRlbWl0KCkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmVjdChzZWxlY3RvciwgYWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpXG4gICAgICAgICAgICAgICAgICAgIC5pbih0aGlzKVthbGwgPyAnc2VsZWN0QWxsJyA6ICdzZWxlY3QnXShzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChyZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbCAmJiBBcnJheS5pc0FycmF5KHJlY3QpICYmIHJlY3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxsICYmIHJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZXhlYygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==