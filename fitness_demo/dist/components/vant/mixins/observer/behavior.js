'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function setAsync(context, data) {
    return new Promise(function (resolve) {
        context.setData(data, resolve);
    });
}
;
var behavior = exports.behavior = Behavior({
    created: function created() {
        var _this = this;

        if (!this.$options) {
            return;
        }
        var cache = {};

        var _$options = this.$options(),
            computed = _$options.computed;

        var keys = Object.keys(computed);
        this.calcComputed = function () {
            var needUpdate = {};
            keys.forEach(function (key) {
                var value = computed[key].call(_this);
                if (cache[key] !== value) {
                    cache[key] = needUpdate[key] = value;
                }
            });
            return needUpdate;
        };
    },
    attached: function attached() {
        this.set();
    },

    methods: {
        // set data and set computed data
        set: function set(data, callback) {
            var _this2 = this;

            var stack = [];
            if (data) {
                stack.push(setAsync(this, data));
            }
            if (this.calcComputed) {
                stack.push(setAsync(this, this.calcComputed()));
            }
            return Promise.all(stack).then(function (res) {
                if (callback && typeof callback === 'function') {
                    callback.call(_this2);
                }
                return res;
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlaGF2aW9yLmpzIl0sIm5hbWVzIjpbInNldEFzeW5jIiwiY29udGV4dCIsImRhdGEiLCJQcm9taXNlIiwic2V0RGF0YSIsInJlc29sdmUiLCJiZWhhdmlvciIsIkJlaGF2aW9yIiwiY3JlYXRlZCIsIiRvcHRpb25zIiwiY2FjaGUiLCJjb21wdXRlZCIsImtleXMiLCJPYmplY3QiLCJjYWxjQ29tcHV0ZWQiLCJuZWVkVXBkYXRlIiwiZm9yRWFjaCIsInZhbHVlIiwia2V5IiwiY2FsbCIsImF0dGFjaGVkIiwic2V0IiwibWV0aG9kcyIsImNhbGxiYWNrIiwic3RhY2siLCJwdXNoIiwiYWxsIiwidGhlbiIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxRQUFULENBQWtCQyxPQUFsQixFQUEyQkMsSUFBM0IsRUFBaUM7QUFDN0IsV0FBTyxJQUFJQyxPQUFKLENBQVksbUJBQVc7QUFDMUJGLGdCQUFRRyxPQUFSLENBQWdCRixJQUFoQixFQUFzQkcsT0FBdEI7QUFDSCxLQUZNLENBQVA7QUFHSDtBQUNEO0FBQ08sSUFBTUMsOEJBQVdDLFNBQVM7QUFDN0JDLFdBRDZCLHFCQUNuQjtBQUFBOztBQUNOLFlBQUksQ0FBQyxLQUFLQyxRQUFWLEVBQW9CO0FBQ2hCO0FBQ0g7QUFDRCxZQUFNQyxRQUFRLEVBQWQ7O0FBSk0sd0JBS2UsS0FBS0QsUUFBTCxFQUxmO0FBQUEsWUFLRUUsUUFMRixhQUtFQSxRQUxGOztBQU1OLFlBQU1DLE9BQU9DLE9BQU9ELElBQVAsQ0FBWUQsUUFBWixDQUFiO0FBQ0EsYUFBS0csWUFBTCxHQUFvQixZQUFNO0FBQ3RCLGdCQUFNQyxhQUFhLEVBQW5CO0FBQ0FILGlCQUFLSSxPQUFMLENBQWEsZUFBTztBQUNoQixvQkFBTUMsUUFBUU4sU0FBU08sR0FBVCxFQUFjQyxJQUFkLENBQW1CLEtBQW5CLENBQWQ7QUFDQSxvQkFBSVQsTUFBTVEsR0FBTixNQUFlRCxLQUFuQixFQUEwQjtBQUN0QlAsMEJBQU1RLEdBQU4sSUFBYUgsV0FBV0csR0FBWCxJQUFrQkQsS0FBL0I7QUFDSDtBQUNKLGFBTEQ7QUFNQSxtQkFBT0YsVUFBUDtBQUNILFNBVEQ7QUFVSCxLQWxCNEI7QUFtQjdCSyxZQW5CNkIsc0JBbUJsQjtBQUNQLGFBQUtDLEdBQUw7QUFDSCxLQXJCNEI7O0FBc0I3QkMsYUFBUztBQUNMO0FBQ0FELFdBRkssZUFFRG5CLElBRkMsRUFFS3FCLFFBRkwsRUFFZTtBQUFBOztBQUNoQixnQkFBTUMsUUFBUSxFQUFkO0FBQ0EsZ0JBQUl0QixJQUFKLEVBQVU7QUFDTnNCLHNCQUFNQyxJQUFOLENBQVd6QixTQUFTLElBQVQsRUFBZUUsSUFBZixDQUFYO0FBQ0g7QUFDRCxnQkFBSSxLQUFLWSxZQUFULEVBQXVCO0FBQ25CVSxzQkFBTUMsSUFBTixDQUFXekIsU0FBUyxJQUFULEVBQWUsS0FBS2MsWUFBTCxFQUFmLENBQVg7QUFDSDtBQUNELG1CQUFPWCxRQUFRdUIsR0FBUixDQUFZRixLQUFaLEVBQW1CRyxJQUFuQixDQUF3QixlQUFPO0FBQ2xDLG9CQUFJSixZQUFZLE9BQU9BLFFBQVAsS0FBb0IsVUFBcEMsRUFBZ0Q7QUFDNUNBLDZCQUFTSixJQUFULENBQWMsTUFBZDtBQUNIO0FBQ0QsdUJBQU9TLEdBQVA7QUFDSCxhQUxNLENBQVA7QUFNSDtBQWhCSTtBQXRCb0IsQ0FBVCxDQUFqQiIsImZpbGUiOiJiZWhhdmlvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNldEFzeW5jKGNvbnRleHQsIGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGNvbnRleHQuc2V0RGF0YShkYXRhLCByZXNvbHZlKTtcbiAgICB9KTtcbn1cbjtcbmV4cG9ydCBjb25zdCBiZWhhdmlvciA9IEJlaGF2aW9yKHtcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBpZiAoIXRoaXMuJG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWNoZSA9IHt9O1xuICAgICAgICBjb25zdCB7IGNvbXB1dGVkIH0gPSB0aGlzLiRvcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wdXRlZCk7XG4gICAgICAgIHRoaXMuY2FsY0NvbXB1dGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmVlZFVwZGF0ZSA9IHt9O1xuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb21wdXRlZFtrZXldLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlW2tleV0gPSBuZWVkVXBkYXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBuZWVkVXBkYXRlO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0KCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vIHNldCBkYXRhIGFuZCBzZXQgY29tcHV0ZWQgZGF0YVxuICAgICAgICBzZXQoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc2V0QXN5bmModGhpcywgZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2FsY0NvbXB1dGVkKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChzZXRBc3luYyh0aGlzLCB0aGlzLmNhbGNDb21wdXRlZCgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc3RhY2spLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19