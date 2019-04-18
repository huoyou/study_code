'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: {
        title: String,
        value: String,
        loading: Boolean,
        cancelButtonText: String,
        confirmButtonText: String,
        itemHeight: {
            type: Number,
            value: 44
        },
        visibleItemCount: {
            type: Number,
            value: 5
        },
        columnsNum: {
            type: [String, Number],
            value: 3
        },
        areaList: {
            type: Object,
            value: {}
        }
    },
    data: {
        columns: [{ values: [] }, { values: [] }, { values: [] }],
        displayColumns: [{ values: [] }, { values: [] }, { values: [] }]
    },
    watch: {
        value: function value(_value) {
            this.code = _value;
            this.setValues();
        },

        areaList: 'setValues',
        columnsNum: function columnsNum(value) {
            this.set({
                displayColumns: this.data.columns.slice(0, +value)
            });
        }
    },
    methods: {
        getPicker: function getPicker() {
            if (this.picker == null) {
                this.picker = this.selectComponent('.van-area__picker');
            }
            return this.picker;
        },
        onCancel: function onCancel(event) {
            this.emit('cancel', event.detail);
        },
        onConfirm: function onConfirm(event) {
            this.emit('confirm', event.detail);
        },
        emit: function emit(type, detail) {
            detail.values = detail.value;
            delete detail.value;
            this.$emit(type, detail);
        },
        onChange: function onChange(event) {
            var _this = this;

            var _event$detail = event.detail,
                index = _event$detail.index,
                picker = _event$detail.picker,
                value = _event$detail.value;

            this.code = value[index].code;
            this.setValues().then(function () {
                _this.$emit('change', {
                    picker: picker,
                    values: picker.getValues(),
                    index: index
                });
            });
        },
        getConfig: function getConfig(type) {
            var areaList = this.data.areaList;

            return areaList && areaList[type + '_list'] || {};
        },
        getList: function getList(type, code) {
            var result = [];
            if (type !== 'province' && !code) {
                return result;
            }
            var list = this.getConfig(type);
            result = Object.keys(list).map(function (code) {
                return {
                    code: code,
                    name: list[code]
                };
            });
            if (code) {
                // oversea code
                if (code[0] === '9' && type === 'city') {
                    code = '9';
                }
                result = result.filter(function (item) {
                    return item.code.indexOf(code) === 0;
                });
            }
            return result;
        },
        getIndex: function getIndex(type, code) {
            var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
            var list = this.getList(type, code.slice(0, compareNum - 2));
            // oversea code
            if (code[0] === '9' && type === 'province') {
                compareNum = 1;
            }
            code = code.slice(0, compareNum);
            for (var i = 0; i < list.length; i++) {
                if (list[i].code.slice(0, compareNum) === code) {
                    return i;
                }
            }
            return 0;
        },
        setValues: function setValues() {
            var _this2 = this;

            var county = this.getConfig('county');
            var code = this.code || Object.keys(county)[0] || '';
            var province = this.getList('province');
            var city = this.getList('city', code.slice(0, 2));
            var picker = this.getPicker();
            if (!picker) {
                return;
            }
            var stack = [];
            stack.push(picker.setColumnValues(0, province, false));
            stack.push(picker.setColumnValues(1, city, false));
            if (city.length && code.slice(2, 4) === '00') {
                ;

                var _city = _slicedToArray(city, 1);

                code = _city[0].code;
            }
            stack.push(picker.setColumnValues(2, this.getList('county', code.slice(0, 4)), false));
            return Promise.all(stack).catch(function () {}).then(function () {
                return picker.setIndexes([_this2.getIndex('province', code), _this2.getIndex('city', code), _this2.getIndex('county', code)]);
            }).catch(function () {});
        },
        getValues: function getValues() {
            var picker = this.getPicker();
            return picker ? picker.getValues().filter(function (value) {
                return !!value;
            }) : [];
        },
        getDetail: function getDetail() {
            var values = this.getValues();
            var area = {
                code: '',
                country: '',
                province: '',
                city: '',
                county: ''
            };
            if (!values.length) {
                return area;
            }
            var names = values.map(function (item) {
                return item.name;
            });
            area.code = values[values.length - 1].code;
            if (area.code[0] === '9') {
                area.country = names[1] || '';
                area.province = names[2] || '';
            } else {
                area.province = names[0] || '';
                area.city = names[1] || '';
                area.county = names[2] || '';
            }
            return area;
        },
        reset: function reset() {
            this.code = '';
            return this.setValues();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwidmFsdWUiLCJsb2FkaW5nIiwiQm9vbGVhbiIsImNhbmNlbEJ1dHRvblRleHQiLCJjb25maXJtQnV0dG9uVGV4dCIsIml0ZW1IZWlnaHQiLCJ0eXBlIiwiTnVtYmVyIiwidmlzaWJsZUl0ZW1Db3VudCIsImNvbHVtbnNOdW0iLCJhcmVhTGlzdCIsIk9iamVjdCIsImRhdGEiLCJjb2x1bW5zIiwidmFsdWVzIiwiZGlzcGxheUNvbHVtbnMiLCJ3YXRjaCIsImNvZGUiLCJzZXRWYWx1ZXMiLCJzZXQiLCJzbGljZSIsIm1ldGhvZHMiLCJnZXRQaWNrZXIiLCJwaWNrZXIiLCJzZWxlY3RDb21wb25lbnQiLCJvbkNhbmNlbCIsImV2ZW50IiwiZW1pdCIsImRldGFpbCIsIm9uQ29uZmlybSIsIiRlbWl0Iiwib25DaGFuZ2UiLCJpbmRleCIsInRoZW4iLCJnZXRWYWx1ZXMiLCJnZXRDb25maWciLCJnZXRMaXN0IiwicmVzdWx0IiwibGlzdCIsImtleXMiLCJtYXAiLCJuYW1lIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4T2YiLCJnZXRJbmRleCIsImNvbXBhcmVOdW0iLCJpIiwibGVuZ3RoIiwiY291bnR5IiwicHJvdmluY2UiLCJjaXR5Iiwic3RhY2siLCJwdXNoIiwic2V0Q29sdW1uVmFsdWVzIiwiUHJvbWlzZSIsImFsbCIsImNhdGNoIiwic2V0SW5kZXhlcyIsImdldERldGFpbCIsImFyZWEiLCJjb3VudHJ5IiwibmFtZXMiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLGFBQVMsQ0FBQyxjQUFELEVBQWlCLGVBQWpCLEVBQWtDLGNBQWxDLENBREM7QUFFVkMsV0FBTztBQUNIQyxlQUFPQyxNQURKO0FBRUhDLGVBQU9ELE1BRko7QUFHSEUsaUJBQVNDLE9BSE47QUFJSEMsMEJBQWtCSixNQUpmO0FBS0hLLDJCQUFtQkwsTUFM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QWY7QUFBQSxhQUFYLENBQWQ7QUFDQW1CLGlCQUFLM0MsSUFBTCxHQUFZSCxPQUFPQSxPQUFPa0MsTUFBUCxHQUFnQixDQUF2QixFQUEwQi9CLElBQXRDO0FBQ0EsZ0JBQUkyQyxLQUFLM0MsSUFBTCxDQUFVLENBQVYsTUFBaUIsR0FBckIsRUFBMEI7QUFDdEIyQyxxQkFBS0MsT0FBTCxHQUFlQyxNQUFNLENBQU4sS0FBWSxFQUEzQjtBQUNBRixxQkFBS1YsUUFBTCxHQUFnQlksTUFBTSxDQUFOLEtBQVksRUFBNUI7QUFDSCxhQUhELE1BSUs7QUFDREYscUJBQUtWLFFBQUwsR0FBZ0JZLE1BQU0sQ0FBTixLQUFZLEVBQTVCO0FBQ0FGLHFCQUFLVCxJQUFMLEdBQVlXLE1BQU0sQ0FBTixLQUFZLEVBQXhCO0FBQ0FGLHFCQUFLWCxNQUFMLEdBQWNhLE1BQU0sQ0FBTixLQUFZLEVBQTFCO0FBQ0g7QUFDRCxtQkFBT0YsSUFBUDtBQUNILFNBekhJO0FBMEhMRyxhQTFISyxtQkEwSEc7QUFDSixpQkFBSzlDLElBQUwsR0FBWSxFQUFaO0FBQ0EsbUJBQU8sS0FBS0MsU0FBTCxFQUFQO0FBQ0g7QUE3SEk7QUF6Q0MsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFsnYWN0aXZlLWNsYXNzJywgJ3Rvb2xiYXItY2xhc3MnLCAnY29sdW1uLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFN0cmluZyxcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogU3RyaW5nLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogU3RyaW5nLFxuICAgICAgICBpdGVtSGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNDRcbiAgICAgICAgfSxcbiAgICAgICAgdmlzaWJsZUl0ZW1Db3VudDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDVcbiAgICAgICAgfSxcbiAgICAgICAgY29sdW1uc051bToge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIHZhbHVlOiAzXG4gICAgICAgIH0sXG4gICAgICAgIGFyZWFMaXN0OiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICB2YWx1ZToge31cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBjb2x1bW5zOiBbeyB2YWx1ZXM6IFtdIH0sIHsgdmFsdWVzOiBbXSB9LCB7IHZhbHVlczogW10gfV0sXG4gICAgICAgIGRpc3BsYXlDb2x1bW5zOiBbeyB2YWx1ZXM6IFtdIH0sIHsgdmFsdWVzOiBbXSB9LCB7IHZhbHVlczogW10gfV1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvZGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFyZWFMaXN0OiAnc2V0VmFsdWVzJyxcbiAgICAgICAgY29sdW1uc051bSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIGRpc3BsYXlDb2x1bW5zOiB0aGlzLmRhdGEuY29sdW1ucy5zbGljZSgwLCArdmFsdWUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRQaWNrZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5waWNrZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyID0gdGhpcy5zZWxlY3RDb21wb25lbnQoJy52YW4tYXJlYV9fcGlja2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waWNrZXI7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2FuY2VsKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NhbmNlbCcsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29uZmlybShldmVudCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjb25maXJtJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCBkZXRhaWwpIHtcbiAgICAgICAgICAgIGRldGFpbC52YWx1ZXMgPSBkZXRhaWwudmFsdWU7XG4gICAgICAgICAgICBkZWxldGUgZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCh0eXBlLCBkZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBpbmRleCwgcGlja2VyLCB2YWx1ZSB9ID0gZXZlbnQuZGV0YWlsO1xuICAgICAgICAgICAgdGhpcy5jb2RlID0gdmFsdWVbaW5kZXhdLmNvZGU7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHBpY2tlci5nZXRWYWx1ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDb25maWcodHlwZSkge1xuICAgICAgICAgICAgY29uc3QgeyBhcmVhTGlzdCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgcmV0dXJuIChhcmVhTGlzdCAmJiBhcmVhTGlzdFtgJHt0eXBlfV9saXN0YF0pIHx8IHt9O1xuICAgICAgICB9LFxuICAgICAgICBnZXRMaXN0KHR5cGUsIGNvZGUpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSAncHJvdmluY2UnICYmICFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldENvbmZpZyh0eXBlKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IE9iamVjdC5rZXlzKGxpc3QpLm1hcChjb2RlID0+ICh7XG4gICAgICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBsaXN0W2NvZGVdXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBpZiAoY29kZSkge1xuICAgICAgICAgICAgICAgIC8vIG92ZXJzZWEgY29kZVxuICAgICAgICAgICAgICAgIGlmIChjb2RlWzBdID09PSAnOScgJiYgdHlwZSA9PT0gJ2NpdHknKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPSAnOSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvZGUuaW5kZXhPZihjb2RlKSA9PT0gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBnZXRJbmRleCh0eXBlLCBjb2RlKSB7XG4gICAgICAgICAgICBsZXQgY29tcGFyZU51bSA9IHR5cGUgPT09ICdwcm92aW5jZScgPyAyIDogdHlwZSA9PT0gJ2NpdHknID8gNCA6IDY7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5nZXRMaXN0KHR5cGUsIGNvZGUuc2xpY2UoMCwgY29tcGFyZU51bSAtIDIpKTtcbiAgICAgICAgICAgIC8vIG92ZXJzZWEgY29kZVxuICAgICAgICAgICAgaWYgKGNvZGVbMF0gPT09ICc5JyAmJiB0eXBlID09PSAncHJvdmluY2UnKSB7XG4gICAgICAgICAgICAgICAgY29tcGFyZU51bSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2RlID0gY29kZS5zbGljZSgwLCBjb21wYXJlTnVtKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0W2ldLmNvZGUuc2xpY2UoMCwgY29tcGFyZU51bSkgPT09IGNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFZhbHVlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50eSA9IHRoaXMuZ2V0Q29uZmlnKCdjb3VudHknKTtcbiAgICAgICAgICAgIGxldCBjb2RlID0gdGhpcy5jb2RlIHx8IE9iamVjdC5rZXlzKGNvdW50eSlbMF0gfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZSA9IHRoaXMuZ2V0TGlzdCgncHJvdmluY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGNpdHkgPSB0aGlzLmdldExpc3QoJ2NpdHknLCBjb2RlLnNsaWNlKDAsIDIpKTtcbiAgICAgICAgICAgIGNvbnN0IHBpY2tlciA9IHRoaXMuZ2V0UGlja2VyKCk7XG4gICAgICAgICAgICBpZiAoIXBpY2tlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgICAgICAgICBzdGFjay5wdXNoKHBpY2tlci5zZXRDb2x1bW5WYWx1ZXMoMCwgcHJvdmluY2UsIGZhbHNlKSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHBpY2tlci5zZXRDb2x1bW5WYWx1ZXMoMSwgY2l0eSwgZmFsc2UpKTtcbiAgICAgICAgICAgIGlmIChjaXR5Lmxlbmd0aCAmJiBjb2RlLnNsaWNlKDIsIDQpID09PSAnMDAnKSB7XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIFt7IGNvZGUgfV0gPSBjaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhY2sucHVzaChwaWNrZXIuc2V0Q29sdW1uVmFsdWVzKDIsIHRoaXMuZ2V0TGlzdCgnY291bnR5JywgY29kZS5zbGljZSgwLCA0KSksIGZhbHNlKSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc3RhY2spXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHsgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBwaWNrZXIuc2V0SW5kZXhlcyhbXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbmRleCgncHJvdmluY2UnLCBjb2RlKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluZGV4KCdjaXR5JywgY29kZSksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbmRleCgnY291bnR5JywgY29kZSlcbiAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRWYWx1ZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBwaWNrZXIgPSB0aGlzLmdldFBpY2tlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHBpY2tlciA/IHBpY2tlci5nZXRWYWx1ZXMoKS5maWx0ZXIodmFsdWUgPT4gISF2YWx1ZSkgOiBbXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGV0YWlsKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGFyZWEgPSB7XG4gICAgICAgICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgICAgICAgY291bnRyeTogJycsXG4gICAgICAgICAgICAgICAgcHJvdmluY2U6ICcnLFxuICAgICAgICAgICAgICAgIGNpdHk6ICcnLFxuICAgICAgICAgICAgICAgIGNvdW50eTogJydcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJlYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gdmFsdWVzLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKTtcbiAgICAgICAgICAgIGFyZWEuY29kZSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0uY29kZTtcbiAgICAgICAgICAgIGlmIChhcmVhLmNvZGVbMF0gPT09ICc5Jykge1xuICAgICAgICAgICAgICAgIGFyZWEuY291bnRyeSA9IG5hbWVzWzFdIHx8ICcnO1xuICAgICAgICAgICAgICAgIGFyZWEucHJvdmluY2UgPSBuYW1lc1syXSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyZWEucHJvdmluY2UgPSBuYW1lc1swXSB8fCAnJztcbiAgICAgICAgICAgICAgICBhcmVhLmNpdHkgPSBuYW1lc1sxXSB8fCAnJztcbiAgICAgICAgICAgICAgICBhcmVhLmNvdW50eSA9IG5hbWVzWzJdIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFyZWE7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy5jb2RlID0gJyc7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19