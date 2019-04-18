'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var currentYear = new Date().getFullYear();
function isValidDate(date) {
    return (0, _utils.isDef)(date) && !isNaN(new Date(date).getTime());
}
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function padZero(val) {
    return ('00' + val).slice(-2);
}
function times(n, iteratee) {
    var index = -1;
    var result = Array(n);
    while (++index < n) {
        result[index] = iteratee(index);
    }
    return result;
}
function getTrueValue(formattedValue) {
    if (!formattedValue) return;
    while (isNaN(parseInt(formattedValue, 10))) {
        formattedValue = formattedValue.slice(1);
    }
    return parseInt(formattedValue, 10);
}
function getMonthEndDay(year, month) {
    return 32 - new Date(year, month - 1, 32).getDate();
}
(0, _component.VantComponent)({
    props: {
        value: null,
        title: String,
        loading: Boolean,
        itemHeight: {
            type: Number,
            value: 44
        },
        visibleItemCount: {
            type: Number,
            value: 5
        },
        confirmButtonText: {
            type: String,
            value: '确认'
        },
        cancelButtonText: {
            type: String,
            value: '取消'
        },
        type: {
            type: String,
            value: 'datetime'
        },
        showToolbar: {
            type: Boolean,
            value: true
        },
        minDate: {
            type: Number,
            value: new Date(currentYear - 10, 0, 1).getTime()
        },
        maxDate: {
            type: Number,
            value: new Date(currentYear + 10, 11, 31).getTime()
        },
        minHour: {
            type: Number,
            value: 0
        },
        maxHour: {
            type: Number,
            value: 23
        },
        minMinute: {
            type: Number,
            value: 0
        },
        maxMinute: {
            type: Number,
            value: 59
        }
    },
    data: {
        innerValue: Date.now(),
        columns: []
    },
    watch: {
        value: function value(val) {
            var _this = this;

            var data = this.data;

            val = this.correctValue(val);
            var isEqual = val === data.innerValue;
            if (!isEqual) {
                this.updateColumnValue(val).then(function () {
                    _this.$emit('input', val);
                });
            }
        },

        type: 'updateColumns',
        minHour: 'updateColumns',
        maxHour: 'updateColumns',
        minMinute: 'updateColumns',
        maxMinute: 'updateColumns'
    },
    methods: {
        getPicker: function getPicker() {
            if (this.picker == null) {
                var picker = this.picker = this.selectComponent('.van-datetime-picker');
                var setColumnValues = picker.setColumnValues;

                picker.setColumnValues = function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    return setColumnValues.apply(picker, [].concat(args, [false]));
                };
            }
            return this.picker;
        },
        updateColumns: function updateColumns() {
            var results = this.getRanges().map(function (_ref, index) {
                var type = _ref.type,
                    range = _ref.range;

                var values = times(range[1] - range[0] + 1, function (index) {
                    var value = range[0] + index;
                    value = type === 'year' ? '' + value : padZero(value);
                    return value;
                });
                return { values: values };
            });
            return this.set({ columns: results });
        },
        getRanges: function getRanges() {
            var data = this.data;

            if (data.type === 'time') {
                return [{
                    type: 'hour',
                    range: [data.minHour, data.maxHour]
                }, {
                    type: 'minute',
                    range: [data.minMinute, data.maxMinute]
                }];
            }

            var _getBoundary = this.getBoundary('max', data.innerValue),
                maxYear = _getBoundary.maxYear,
                maxDate = _getBoundary.maxDate,
                maxMonth = _getBoundary.maxMonth,
                maxHour = _getBoundary.maxHour,
                maxMinute = _getBoundary.maxMinute;

            var _getBoundary2 = this.getBoundary('min', data.innerValue),
                minYear = _getBoundary2.minYear,
                minDate = _getBoundary2.minDate,
                minMonth = _getBoundary2.minMonth,
                minHour = _getBoundary2.minHour,
                minMinute = _getBoundary2.minMinute;

            var result = [{
                type: 'year',
                range: [minYear, maxYear]
            }, {
                type: 'month',
                range: [minMonth, maxMonth]
            }, {
                type: 'day',
                range: [minDate, maxDate]
            }, {
                type: 'hour',
                range: [minHour, maxHour]
            }, {
                type: 'minute',
                range: [minMinute, maxMinute]
            }];
            if (data.type === 'date') result.splice(3, 2);
            if (data.type === 'year-month') result.splice(2, 3);
            return result;
        },
        correctValue: function correctValue(value) {
            var data = this.data;
            // validate value

            var isDateType = data.type !== 'time';
            if (isDateType && !isValidDate(value)) {
                value = data.minDate;
            } else if (!isDateType && !value) {
                var minHour = data.minHour;

                value = padZero(minHour) + ':00';
            }
            // time type
            if (!isDateType) {
                var _value$split = value.split(':'),
                    _value$split2 = _slicedToArray(_value$split, 2),
                    hour = _value$split2[0],
                    minute = _value$split2[1];

                hour = padZero(range(hour, data.minHour, data.maxHour));
                minute = padZero(range(minute, data.minMinute, data.maxMinute));
                return hour + ':' + minute;
            }
            // date type
            value = Math.max(value, data.minDate);
            value = Math.min(value, data.maxDate);
            return value;
        },
        getBoundary: function getBoundary(type, innerValue) {
            var _ref2;

            var value = new Date(innerValue);
            var boundary = new Date(this.data[type + 'Date']);
            var year = boundary.getFullYear();
            var month = 1;
            var date = 1;
            var hour = 0;
            var minute = 0;
            if (type === 'max') {
                month = 12;
                date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
                hour = 23;
                minute = 59;
            }
            if (value.getFullYear() === year) {
                month = boundary.getMonth() + 1;
                if (value.getMonth() + 1 === month) {
                    date = boundary.getDate();
                    if (value.getDate() === date) {
                        hour = boundary.getHours();
                        if (value.getHours() === hour) {
                            minute = boundary.getMinutes();
                        }
                    }
                }
            }
            return _ref2 = {}, _defineProperty(_ref2, type + 'Year', year), _defineProperty(_ref2, type + 'Month', month), _defineProperty(_ref2, type + 'Date', date), _defineProperty(_ref2, type + 'Hour', hour), _defineProperty(_ref2, type + 'Minute', minute), _ref2;
        },
        onCancel: function onCancel() {
            this.$emit('cancel');
        },
        onConfirm: function onConfirm() {
            this.$emit('confirm', this.data.innerValue);
        },
        onChange: function onChange() {
            var _this2 = this;

            var data = this.data;

            var value = void 0;
            var picker = this.getPicker();
            if (data.type === 'time') {
                var indexes = picker.getIndexes();
                value = indexes[0] + data.minHour + ':' + (indexes[1] + data.minMinute);
            } else {
                var values = picker.getValues();
                var year = getTrueValue(values[0]);
                var month = getTrueValue(values[1]);
                var maxDate = getMonthEndDay(year, month);
                var date = getTrueValue(values[2]);
                if (data.type === 'year-month') {
                    date = 1;
                }
                date = date > maxDate ? maxDate : date;
                var hour = 0;
                var minute = 0;
                if (data.type === 'datetime') {
                    hour = getTrueValue(values[3]);
                    minute = getTrueValue(values[4]);
                }
                value = new Date(year, month - 1, date, hour, minute);
            }
            value = this.correctValue(value);
            this.updateColumnValue(value).then(function () {
                _this2.$emit('input', value);
                _this2.$emit('change', picker);
            });
        },
        updateColumnValue: function updateColumnValue(value) {
            var _this3 = this;

            var values = [];
            var data = this.data;

            var picker = this.getPicker();
            if (data.type === 'time') {
                var pair = value.split(':');
                values = [pair[0], pair[1]];
            } else {
                var date = new Date(value);
                values = ['' + date.getFullYear(), padZero(date.getMonth() + 1)];
                if (data.type === 'date') {
                    values.push(padZero(date.getDate()));
                }
                if (data.type === 'datetime') {
                    values.push(padZero(date.getDate()), padZero(date.getHours()), padZero(date.getMinutes()));
                }
            }
            return this.set({ innerValue: value }).then(function () {
                return _this3.updateColumns();
            }).then(function () {
                return picker.setValues(values);
            });
        }
    },
    created: function created() {
        var _this4 = this;

        var innerValue = this.correctValue(this.data.value);
        this.updateColumnValue(innerValue).then(function () {
            _this4.$emit('input', innerValue);
        });
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiaXNWYWxpZERhdGUiLCJkYXRlIiwiaXNOYU4iLCJnZXRUaW1lIiwicmFuZ2UiLCJudW0iLCJtaW4iLCJtYXgiLCJNYXRoIiwicGFkWmVybyIsInZhbCIsInNsaWNlIiwidGltZXMiLCJuIiwiaXRlcmF0ZWUiLCJpbmRleCIsInJlc3VsdCIsIkFycmF5IiwiZ2V0VHJ1ZVZhbHVlIiwiZm9ybWF0dGVkVmFsdWUiLCJwYXJzZUludCIsImdldE1vbnRoRW5kRGF5IiwieWVhciIsIm1vbnRoIiwiZ2V0RGF0ZSIsInByb3BzIiwidmFsdWUiLCJ0aXRsZSIsIlN0cmluZyIsImxvYWRpbmciLCJCb29sZWFuIiwiaXRlbUhlaWdodCIsInR5cGUiLCJOdW1iZXIiLCJ2aXNpYmxlSXRlbUNvdW50IiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0Iiwic2hvd1Rvb2xiYXIiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIm1pbkhvdXIiLCJtYXhIb3VyIiwibWluTWludXRlIiwibWF4TWludXRlIiwiZGF0YSIsImlubmVyVmFsdWUiLCJub3ciLCJjb2x1bW5zIiwid2F0Y2giLCJjb3JyZWN0VmFsdWUiLCJpc0VxdWFsIiwidXBkYXRlQ29sdW1uVmFsdWUiLCJ0aGVuIiwiJGVtaXQiLCJtZXRob2RzIiwiZ2V0UGlja2VyIiwicGlja2VyIiwic2VsZWN0Q29tcG9uZW50Iiwic2V0Q29sdW1uVmFsdWVzIiwiYXJncyIsImFwcGx5IiwidXBkYXRlQ29sdW1ucyIsInJlc3VsdHMiLCJnZXRSYW5nZXMiLCJtYXAiLCJ2YWx1ZXMiLCJzZXQiLCJnZXRCb3VuZGFyeSIsIm1heFllYXIiLCJtYXhNb250aCIsIm1pblllYXIiLCJtaW5Nb250aCIsInNwbGljZSIsImlzRGF0ZVR5cGUiLCJzcGxpdCIsImhvdXIiLCJtaW51dGUiLCJib3VuZGFyeSIsImdldE1vbnRoIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwib25DYW5jZWwiLCJvbkNvbmZpcm0iLCJvbkNoYW5nZSIsImluZGV4ZXMiLCJnZXRJbmRleGVzIiwiZ2V0VmFsdWVzIiwicGFpciIsInB1c2giLCJzZXRWYWx1ZXMiLCJjcmVhdGVkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7Ozs7QUFDQSxJQUFNQSxjQUFjLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFwQjtBQUNBLFNBQVNDLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCO0FBQ3ZCLFdBQU8sa0JBQU1BLElBQU4sS0FBZSxDQUFDQyxNQUFNLElBQUlKLElBQUosQ0FBU0csSUFBVCxFQUFlRSxPQUFmLEVBQU4sQ0FBdkI7QUFDSDtBQUNELFNBQVNDLEtBQVQsQ0FBZUMsR0FBZixFQUFvQkMsR0FBcEIsRUFBeUJDLEdBQXpCLEVBQThCO0FBQzFCLFdBQU9DLEtBQUtGLEdBQUwsQ0FBU0UsS0FBS0QsR0FBTCxDQUFTRixHQUFULEVBQWNDLEdBQWQsQ0FBVCxFQUE2QkMsR0FBN0IsQ0FBUDtBQUNIO0FBQ0QsU0FBU0UsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDbEIsV0FBTyxRQUFLQSxHQUFMLEVBQVdDLEtBQVgsQ0FBaUIsQ0FBQyxDQUFsQixDQUFQO0FBQ0g7QUFDRCxTQUFTQyxLQUFULENBQWVDLENBQWYsRUFBa0JDLFFBQWxCLEVBQTRCO0FBQ3hCLFFBQUlDLFFBQVEsQ0FBQyxDQUFiO0FBQ0EsUUFBTUMsU0FBU0MsTUFBTUosQ0FBTixDQUFmO0FBQ0EsV0FBTyxFQUFFRSxLQUFGLEdBQVVGLENBQWpCLEVBQW9CO0FBQ2hCRyxlQUFPRCxLQUFQLElBQWdCRCxTQUFTQyxLQUFULENBQWhCO0FBQ0g7QUFDRCxXQUFPQyxNQUFQO0FBQ0g7QUFDRCxTQUFTRSxZQUFULENBQXNCQyxjQUF0QixFQUFzQztBQUNsQyxRQUFJLENBQUNBLGNBQUwsRUFDSTtBQUNKLFdBQU9qQixNQUFNa0IsU0FBU0QsY0FBVCxFQUF5QixFQUF6QixDQUFOLENBQVAsRUFBNEM7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Q3RCaUMsMkJBQU91QixJQUFQLENBQVkvRSxRQUFRUixLQUFLdUIsT0FBTCxFQUFSLENBQVo7QUFDSDtBQUNELG9CQUFJb0IsS0FBS1osSUFBTCxLQUFjLFVBQWxCLEVBQThCO0FBQzFCaUMsMkJBQU91QixJQUFQLENBQVkvRSxRQUFRUixLQUFLdUIsT0FBTCxFQUFSLENBQVosRUFBcUNmLFFBQVFSLEtBQUs4RSxRQUFMLEVBQVIsQ0FBckMsRUFBK0R0RSxRQUFRUixLQUFLK0UsVUFBTCxFQUFSLENBQS9EO0FBQ0g7QUFDSjtBQUNELG1CQUFPLEtBQUtkLEdBQUwsQ0FBUyxFQUFFckIsWUFBWW5CLEtBQWQsRUFBVCxFQUNGMEIsSUFERSxDQUNHO0FBQUEsdUJBQU0sT0FBS1MsYUFBTCxFQUFOO0FBQUEsYUFESCxFQUVGVCxJQUZFLENBRUc7QUFBQSx1QkFBTUksT0FBT2lDLFNBQVAsQ0FBaUJ4QixNQUFqQixDQUFOO0FBQUEsYUFGSCxDQUFQO0FBR0g7QUFwTEksS0EzRUM7QUFpUVZ5QixXQWpRVSxxQkFpUUE7QUFBQTs7QUFDTixZQUFNN0MsYUFBYSxLQUFLSSxZQUFMLENBQWtCLEtBQUtMLElBQUwsQ0FBVWxCLEtBQTVCLENBQW5CO0FBQ0EsYUFBS3lCLGlCQUFMLENBQXVCTixVQUF2QixFQUFtQ08sSUFBbkMsQ0FBd0MsWUFBTTtBQUMxQyxtQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JSLFVBQXBCO0FBQ0gsU0FGRDtBQUdIO0FBdFFTLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpc0RlZiB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5jb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbmZ1bmN0aW9uIGlzVmFsaWREYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gaXNEZWYoZGF0ZSkgJiYgIWlzTmFOKG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKSk7XG59XG5mdW5jdGlvbiByYW5nZShudW0sIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcbn1cbmZ1bmN0aW9uIHBhZFplcm8odmFsKSB7XG4gICAgcmV0dXJuIGAwMCR7dmFsfWAuc2xpY2UoLTIpO1xufVxuZnVuY3Rpb24gdGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBjb25zdCByZXN1bHQgPSBBcnJheShuKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldFRydWVWYWx1ZShmb3JtYXR0ZWRWYWx1ZSkge1xuICAgIGlmICghZm9ybWF0dGVkVmFsdWUpXG4gICAgICAgIHJldHVybjtcbiAgICB3aGlsZSAoaXNOYU4ocGFyc2VJbnQoZm9ybWF0dGVkVmFsdWUsIDEwKSkpIHtcbiAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZS5zbGljZSgxKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KGZvcm1hdHRlZFZhbHVlLCAxMCk7XG59XG5mdW5jdGlvbiBnZXRNb250aEVuZERheSh5ZWFyLCBtb250aCkge1xuICAgIHJldHVybiAzMiAtIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMzIpLmdldERhdGUoKTtcbn1cblZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBpdGVtSGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNDRcbiAgICAgICAgfSxcbiAgICAgICAgdmlzaWJsZUl0ZW1Db3VudDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDVcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAn56Gu6K6kJ1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ+WPlua2iCdcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdkYXRldGltZSdcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd1Rvb2xiYXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBtaW5EYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoY3VycmVudFllYXIgLSAxMCwgMCwgMSkuZ2V0VGltZSgpXG4gICAgICAgIH0sXG4gICAgICAgIG1heERhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShjdXJyZW50WWVhciArIDEwLCAxMSwgMzEpLmdldFRpbWUoKVxuICAgICAgICB9LFxuICAgICAgICBtaW5Ib3VyOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICBtYXhIb3VyOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMjNcbiAgICAgICAgfSxcbiAgICAgICAgbWluTWludXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICBtYXhNaW51dGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA1OVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGlubmVyVmFsdWU6IERhdGUubm93KCksXG4gICAgICAgIGNvbHVtbnM6IFtdXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZSh2YWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcztcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuY29ycmVjdFZhbHVlKHZhbCk7XG4gICAgICAgICAgICBjb25zdCBpc0VxdWFsID0gdmFsID09PSBkYXRhLmlubmVyVmFsdWU7XG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbHVtblZhbHVlKHZhbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ3VwZGF0ZUNvbHVtbnMnLFxuICAgICAgICBtaW5Ib3VyOiAndXBkYXRlQ29sdW1ucycsXG4gICAgICAgIG1heEhvdXI6ICd1cGRhdGVDb2x1bW5zJyxcbiAgICAgICAgbWluTWludXRlOiAndXBkYXRlQ29sdW1ucycsXG4gICAgICAgIG1heE1pbnV0ZTogJ3VwZGF0ZUNvbHVtbnMnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldFBpY2tlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2tlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGlja2VyID0gdGhpcy5waWNrZXIgPSB0aGlzLnNlbGVjdENvbXBvbmVudCgnLnZhbi1kYXRldGltZS1waWNrZXInKTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHNldENvbHVtblZhbHVlcyB9ID0gcGlja2VyO1xuICAgICAgICAgICAgICAgIHBpY2tlci5zZXRDb2x1bW5WYWx1ZXMgPSAoLi4uYXJncykgPT4gc2V0Q29sdW1uVmFsdWVzLmFwcGx5KHBpY2tlciwgWy4uLmFyZ3MsIGZhbHNlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waWNrZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUNvbHVtbnMoKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5nZXRSYW5nZXMoKS5tYXAoKHsgdHlwZSwgcmFuZ2UgfSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aW1lcyhyYW5nZVsxXSAtIHJhbmdlWzBdICsgMSwgaW5kZXggPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSByYW5nZVswXSArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHR5cGUgPT09ICd5ZWFyJyA/IGAke3ZhbHVlfWAgOiBwYWRaZXJvKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlcyB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoeyBjb2x1bW5zOiByZXN1bHRzIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRSYW5nZXMoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAndGltZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaG91cicsXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogW2RhdGEubWluSG91ciwgZGF0YS5tYXhIb3VyXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWludXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbZGF0YS5taW5NaW51dGUsIGRhdGEubWF4TWludXRlXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgbWF4WWVhciwgbWF4RGF0ZSwgbWF4TW9udGgsIG1heEhvdXIsIG1heE1pbnV0ZSB9ID0gdGhpcy5nZXRCb3VuZGFyeSgnbWF4JywgZGF0YS5pbm5lclZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgbWluWWVhciwgbWluRGF0ZSwgbWluTW9udGgsIG1pbkhvdXIsIG1pbk1pbnV0ZSB9ID0gdGhpcy5nZXRCb3VuZGFyeSgnbWluJywgZGF0YS5pbm5lclZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd5ZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFttaW5ZZWFyLCBtYXhZZWFyXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW9udGgnLFxuICAgICAgICAgICAgICAgICAgICByYW5nZTogW21pbk1vbnRoLCBtYXhNb250aF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RheScsXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbbWluRGF0ZSwgbWF4RGF0ZV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hvdXInLFxuICAgICAgICAgICAgICAgICAgICByYW5nZTogW21pbkhvdXIsIG1heEhvdXJdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtaW51dGUnLFxuICAgICAgICAgICAgICAgICAgICByYW5nZTogW21pbk1pbnV0ZSwgbWF4TWludXRlXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnZGF0ZScpXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNwbGljZSgzLCAyKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICd5ZWFyLW1vbnRoJylcbiAgICAgICAgICAgICAgICByZXN1bHQuc3BsaWNlKDIsIDMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgY29ycmVjdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXM7XG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSB2YWx1ZVxuICAgICAgICAgICAgY29uc3QgaXNEYXRlVHlwZSA9IGRhdGEudHlwZSAhPT0gJ3RpbWUnO1xuICAgICAgICAgICAgaWYgKGlzRGF0ZVR5cGUgJiYgIWlzVmFsaWREYXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZGF0YS5taW5EYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWlzRGF0ZVR5cGUgJiYgIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBtaW5Ib3VyIH0gPSBkYXRhO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gYCR7cGFkWmVybyhtaW5Ib3VyKX06MDBgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGltZSB0eXBlXG4gICAgICAgICAgICBpZiAoIWlzRGF0ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgW2hvdXIsIG1pbnV0ZV0gPSB2YWx1ZS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIGhvdXIgPSBwYWRaZXJvKHJhbmdlKGhvdXIsIGRhdGEubWluSG91ciwgZGF0YS5tYXhIb3VyKSk7XG4gICAgICAgICAgICAgICAgbWludXRlID0gcGFkWmVybyhyYW5nZShtaW51dGUsIGRhdGEubWluTWludXRlLCBkYXRhLm1heE1pbnV0ZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtob3VyfToke21pbnV0ZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGF0ZSB0eXBlXG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KHZhbHVlLCBkYXRhLm1pbkRhdGUpO1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbih2YWx1ZSwgZGF0YS5tYXhEYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Qm91bmRhcnkodHlwZSwgaW5uZXJWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBuZXcgRGF0ZShpbm5lclZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kYXJ5ID0gbmV3IERhdGUodGhpcy5kYXRhW2Ake3R5cGV9RGF0ZWBdKTtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBib3VuZGFyeS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgbGV0IG1vbnRoID0gMTtcbiAgICAgICAgICAgIGxldCBkYXRlID0gMTtcbiAgICAgICAgICAgIGxldCBob3VyID0gMDtcbiAgICAgICAgICAgIGxldCBtaW51dGUgPSAwO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdtYXgnKSB7XG4gICAgICAgICAgICAgICAgbW9udGggPSAxMjtcbiAgICAgICAgICAgICAgICBkYXRlID0gZ2V0TW9udGhFbmREYXkodmFsdWUuZ2V0RnVsbFllYXIoKSwgdmFsdWUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGhvdXIgPSAyMztcbiAgICAgICAgICAgICAgICBtaW51dGUgPSA1OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyKSB7XG4gICAgICAgICAgICAgICAgbW9udGggPSBib3VuZGFyeS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZ2V0TW9udGgoKSArIDEgPT09IG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSBib3VuZGFyeS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5nZXREYXRlKCkgPT09IGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgPSBib3VuZGFyeS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmdldEhvdXJzKCkgPT09IGhvdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGUgPSBib3VuZGFyeS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFtgJHt0eXBlfVllYXJgXTogeWVhcixcbiAgICAgICAgICAgICAgICBbYCR7dHlwZX1Nb250aGBdOiBtb250aCxcbiAgICAgICAgICAgICAgICBbYCR7dHlwZX1EYXRlYF06IGRhdGUsXG4gICAgICAgICAgICAgICAgW2Ake3R5cGV9SG91cmBdOiBob3VyLFxuICAgICAgICAgICAgICAgIFtgJHt0eXBlfU1pbnV0ZWBdOiBtaW51dGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2FuY2VsKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29uZmlybSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbmZpcm0nLCB0aGlzLmRhdGEuaW5uZXJWYWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xuICAgICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcGlja2VyID0gdGhpcy5nZXRQaWNrZXIoKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICd0aW1lJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ZXMgPSBwaWNrZXIuZ2V0SW5kZXhlcygpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gYCR7aW5kZXhlc1swXSArIGRhdGEubWluSG91cn06JHtpbmRleGVzWzFdICsgZGF0YS5taW5NaW51dGV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHBpY2tlci5nZXRWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gZ2V0VHJ1ZVZhbHVlKHZhbHVlc1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGggPSBnZXRUcnVlVmFsdWUodmFsdWVzWzFdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhEYXRlID0gZ2V0TW9udGhFbmREYXkoeWVhciwgbW9udGgpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gZ2V0VHJ1ZVZhbHVlKHZhbHVlc1syXSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ3llYXItbW9udGgnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRlID0gZGF0ZSA+IG1heERhdGUgPyBtYXhEYXRlIDogZGF0ZTtcbiAgICAgICAgICAgICAgICBsZXQgaG91ciA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IG1pbnV0ZSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ2RhdGV0aW1lJykge1xuICAgICAgICAgICAgICAgICAgICBob3VyID0gZ2V0VHJ1ZVZhbHVlKHZhbHVlc1szXSk7XG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZSA9IGdldFRydWVWYWx1ZSh2YWx1ZXNbNF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF0ZSwgaG91ciwgbWludXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5jb3JyZWN0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDb2x1bW5WYWx1ZSh2YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgcGlja2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVDb2x1bW5WYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgcGlja2VyID0gdGhpcy5nZXRQaWNrZXIoKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICd0aW1lJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhaXIgPSB2YWx1ZS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IFtwYWlyWzBdLCBwYWlyWzFdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW2Ake2RhdGUuZ2V0RnVsbFllYXIoKX1gLCBwYWRaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpXTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gocGFkWmVybyhkYXRlLmdldERhdGUoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnZGF0ZXRpbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHBhZFplcm8oZGF0ZS5nZXREYXRlKCkpLCBwYWRaZXJvKGRhdGUuZ2V0SG91cnMoKSksIHBhZFplcm8oZGF0ZS5nZXRNaW51dGVzKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoeyBpbm5lclZhbHVlOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMudXBkYXRlQ29sdW1ucygpKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHBpY2tlci5zZXRWYWx1ZXModmFsdWVzKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGNvbnN0IGlubmVyVmFsdWUgPSB0aGlzLmNvcnJlY3RWYWx1ZSh0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbHVtblZhbHVlKGlubmVyVmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBpbm5lclZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iXX0=