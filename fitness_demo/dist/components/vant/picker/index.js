'use strict';

var _component = require('./../common/component.js');

function isSimple(columns) {
    return columns.length && !columns[0].values;
}
(0, _component.VantComponent)({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: {
        title: String,
        loading: Boolean,
        showToolbar: Boolean,
        confirmButtonText: String,
        cancelButtonText: String,
        visibleItemCount: {
            type: Number,
            value: 5
        },
        valueKey: {
            type: String,
            value: 'text'
        },
        itemHeight: {
            type: Number,
            value: 44
        },
        columns: {
            type: Array,
            value: [],
            observer: function observer() {
                var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                this.simple = isSimple(columns);
                this.children = this.selectAllComponents('.van-picker__column');
                if (Array.isArray(this.children) && this.children.length) {
                    this.setColumns().catch(function () {});
                }
            }
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },

    methods: {
        noop: function noop() {},
        setColumns: function setColumns() {
            var _this = this;

            var data = this.data;

            var columns = this.simple ? [{ values: data.columns }] : data.columns;
            var stack = columns.map(function (column, index) {
                return _this.setColumnValues(index, column.values);
            });
            return Promise.all(stack);
        },
        emit: function emit(event) {
            var type = event.currentTarget.dataset.type;

            if (this.simple) {
                this.$emit(type, {
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit(type, {
                    value: this.getValues(),
                    index: this.getIndexes()
                });
            }
        },
        onChange: function onChange(event) {
            if (this.simple) {
                this.$emit('change', {
                    picker: this,
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit('change', {
                    picker: this,
                    value: this.getValues(),
                    index: event.currentTarget.dataset.index
                });
            }
        },

        // get column instance by index
        getColumn: function getColumn(index) {
            return this.children[index];
        },

        // get column value by index
        getColumnValue: function getColumnValue(index) {
            var column = this.getColumn(index);
            return column && column.getValue();
        },

        // set column value by index
        setColumnValue: function setColumnValue(index, value) {
            var column = this.getColumn(index);
            if (column == null) {
                return Promise.reject('setColumnValue: 对应列不存在');
            }
            return column.setValue(value);
        },

        // get column option index by column index
        getColumnIndex: function getColumnIndex(columnIndex) {
            return (this.getColumn(columnIndex) || {}).data.currentIndex;
        },

        // set column option index by column index
        setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
            var column = this.getColumn(columnIndex);
            if (column == null) {
                return Promise.reject('setColumnIndex: 对应列不存在');
            }
            return column.setIndex(optionIndex);
        },

        // get options of column by index
        getColumnValues: function getColumnValues(index) {
            return (this.children[index] || {}).data.options;
        },

        // set options of column by index
        setColumnValues: function setColumnValues(index, options) {
            var needReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var column = this.children[index];
            if (column == null) {
                return Promise.reject('setColumnValues: 对应列不存在');
            }
            var isSame = JSON.stringify(column.data.options) === JSON.stringify(options);
            if (isSame) {
                return Promise.resolve();
            }
            return column.set({ options: options }).then(function () {
                if (needReset) {
                    column.setIndex(0);
                }
            });
        },

        // get values of all columns
        getValues: function getValues() {
            return this.children.map(function (child) {
                return child.getValue();
            });
        },

        // set values of all columns
        setValues: function setValues(values) {
            var _this2 = this;

            var stack = values.map(function (value, index) {
                return _this2.setColumnValue(index, value);
            });
            return Promise.all(stack);
        },

        // get indexes of all columns
        getIndexes: function getIndexes() {
            return this.children.map(function (child) {
                return child.data.currentIndex;
            });
        },

        // set indexes of all columns
        setIndexes: function setIndexes(indexes) {
            var _this3 = this;

            var stack = indexes.map(function (optionIndex, columnIndex) {
                return _this3.setColumnIndex(columnIndex, optionIndex);
            });
            return Promise.all(stack);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImlzU2ltcGxlIiwiY29sdW1ucyIsImxlbmd0aCIsInZhbHVlcyIsImNsYXNzZXMiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwibG9hZGluZyIsIkJvb2xlYW4iLCJzaG93VG9vbGJhciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInZpc2libGVJdGVtQ291bnQiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJ2YWx1ZUtleSIsIml0ZW1IZWlnaHQiLCJBcnJheSIsIm9ic2VydmVyIiwic2ltcGxlIiwiY2hpbGRyZW4iLCJzZWxlY3RBbGxDb21wb25lbnRzIiwiaXNBcnJheSIsInNldENvbHVtbnMiLCJjYXRjaCIsImJlZm9yZUNyZWF0ZSIsIm1ldGhvZHMiLCJub29wIiwiZGF0YSIsInN0YWNrIiwibWFwIiwiY29sdW1uIiwiaW5kZXgiLCJzZXRDb2x1bW5WYWx1ZXMiLCJQcm9taXNlIiwiYWxsIiwiZW1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCIkZW1pdCIsImdldENvbHVtblZhbHVlIiwiZ2V0Q29sdW1uSW5kZXgiLCJnZXRWYWx1ZXMiLCJnZXRJbmRleGVzIiwib25DaGFuZ2UiLCJwaWNrZXIiLCJnZXRDb2x1bW4iLCJnZXRWYWx1ZSIsInNldENvbHVtblZhbHVlIiwicmVqZWN0Iiwic2V0VmFsdWUiLCJjb2x1bW5JbmRleCIsImN1cnJlbnRJbmRleCIsInNldENvbHVtbkluZGV4Iiwib3B0aW9uSW5kZXgiLCJzZXRJbmRleCIsImdldENvbHVtblZhbHVlcyIsIm9wdGlvbnMiLCJuZWVkUmVzZXQiLCJpc1NhbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzb2x2ZSIsInNldCIsInRoZW4iLCJjaGlsZCIsInNldFZhbHVlcyIsInNldEluZGV4ZXMiLCJpbmRleGVzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLFNBQVNBLFFBQVQsQ0FBa0JDLE9BQWxCLEVB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QVE1QixPQUFPNkIsR0FBUCxDQUFXLFVBQUNoQixLQUFELEVBQVFrQixLQUFSO0FBQUEsdUJBQWtCLE9BQUtpQixjQUFMLENBQW9CakIsS0FBcEIsRUFBMkJsQixLQUEzQixDQUFsQjtBQUFBLGFBQVgsQ0FBZDtBQUNBLG1CQUFPb0IsUUFBUUMsR0FBUixDQUFZTixLQUFaLENBQVA7QUFDSCxTQWhHSTs7QUFpR0w7QUFDQWUsa0JBbEdLLHdCQWtHUTtBQUNULG1CQUFPLEtBQUt4QixRQUFMLENBQWNVLEdBQWQsQ0FBa0IsVUFBQ29DLEtBQUQ7QUFBQSx1QkFBV0EsTUFBTXRDLElBQU4sQ0FBV3lCLFlBQXRCO0FBQUEsYUFBbEIsQ0FBUDtBQUNILFNBcEdJOztBQXFHTDtBQUNBZSxrQkF0R0ssc0JBc0dNQyxPQXRHTixFQXNHZTtBQUFBOztBQUNoQixnQkFBTXhDLFFBQVF3QyxRQUFRdkMsR0FBUixDQUFZLFVBQUN5QixXQUFELEVBQWNILFdBQWQ7QUFBQSx1QkFBOEIsT0FBS0UsY0FBTCxDQUFvQkYsV0FBcEIsRUFBaUNHLFdBQWpDLENBQTlCO0FBQUEsYUFBWixDQUFkO0FBQ0EsbUJBQU9yQixRQUFRQyxHQUFSLENBQVlOLEtBQVosQ0FBUDtBQUNIO0FBekdJO0FBbkNDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5mdW5jdGlvbiBpc1NpbXBsZShjb2x1bW5zKSB7XG4gICAgcmV0dXJuIGNvbHVtbnMubGVuZ3RoICYmICFjb2x1bW5zWzBdLnZhbHVlcztcbn1cblZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFsnYWN0aXZlLWNsYXNzJywgJ3Rvb2xiYXItY2xhc3MnLCAnY29sdW1uLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcbiAgICAgICAgc2hvd1Rvb2xiYXI6IEJvb2xlYW4sXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBTdHJpbmcsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFN0cmluZyxcbiAgICAgICAgdmlzaWJsZUl0ZW1Db3VudDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDVcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWVLZXk6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAndGV4dCdcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbUhlaWdodDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDQ0XG4gICAgICAgIH0sXG4gICAgICAgIGNvbHVtbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgb2JzZXJ2ZXIoY29sdW1ucyA9IFtdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW1wbGUgPSBpc1NpbXBsZShjb2x1bW5zKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5zZWxlY3RBbGxDb21wb25lbnRzKCcudmFuLXBpY2tlcl9fY29sdW1uJyk7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5jaGlsZHJlbikgJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb2x1bW5zKCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBub29wKCkgeyB9LFxuICAgICAgICBzZXRDb2x1bW5zKCkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMuc2ltcGxlID8gW3sgdmFsdWVzOiBkYXRhLmNvbHVtbnMgfV0gOiBkYXRhLmNvbHVtbnM7XG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IGNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiB0aGlzLnNldENvbHVtblZhbHVlcyhpbmRleCwgY29sdW1uLnZhbHVlcykpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW1pdChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICBpZiAodGhpcy5zaW1wbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KHR5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29sdW1uVmFsdWUoMCksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmdldENvbHVtbkluZGV4KDApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KHR5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0VmFsdWVzKCksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmdldEluZGV4ZXMoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2ltcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgICBwaWNrZXI6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldENvbHVtblZhbHVlKDApLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5nZXRDb2x1bW5JbmRleCgwKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgICBwaWNrZXI6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldFZhbHVlcygpLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCBjb2x1bW4gaW5zdGFuY2UgYnkgaW5kZXhcbiAgICAgICAgZ2V0Q29sdW1uKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltpbmRleF07XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCBjb2x1bW4gdmFsdWUgYnkgaW5kZXhcbiAgICAgICAgZ2V0Q29sdW1uVmFsdWUoaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4gJiYgY29sdW1uLmdldFZhbHVlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNldCBjb2x1bW4gdmFsdWUgYnkgaW5kZXhcbiAgICAgICAgc2V0Q29sdW1uVmFsdWUoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihpbmRleCk7XG4gICAgICAgICAgICBpZiAoY29sdW1uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3NldENvbHVtblZhbHVlOiDlr7nlupTliJfkuI3lrZjlnKgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4uc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBnZXQgY29sdW1uIG9wdGlvbiBpbmRleCBieSBjb2x1bW4gaW5kZXhcbiAgICAgICAgZ2V0Q29sdW1uSW5kZXgoY29sdW1uSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5nZXRDb2x1bW4oY29sdW1uSW5kZXgpIHx8IHt9KS5kYXRhLmN1cnJlbnRJbmRleDtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc2V0IGNvbHVtbiBvcHRpb24gaW5kZXggYnkgY29sdW1uIGluZGV4XG4gICAgICAgIHNldENvbHVtbkluZGV4KGNvbHVtbkluZGV4LCBvcHRpb25JbmRleCkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5nZXRDb2x1bW4oY29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgaWYgKGNvbHVtbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdzZXRDb2x1bW5JbmRleDog5a+55bqU5YiX5LiN5a2Y5ZyoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uLnNldEluZGV4KG9wdGlvbkluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZ2V0IG9wdGlvbnMgb2YgY29sdW1uIGJ5IGluZGV4XG4gICAgICAgIGdldENvbHVtblZhbHVlcyhpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmNoaWxkcmVuW2luZGV4XSB8fCB7fSkuZGF0YS5vcHRpb25zO1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZXQgb3B0aW9ucyBvZiBjb2x1bW4gYnkgaW5kZXhcbiAgICAgICAgc2V0Q29sdW1uVmFsdWVzKGluZGV4LCBvcHRpb25zLCBuZWVkUmVzZXQgPSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChjb2x1bW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnc2V0Q29sdW1uVmFsdWVzOiDlr7nlupTliJfkuI3lrZjlnKgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzU2FtZSA9IEpTT04uc3RyaW5naWZ5KGNvbHVtbi5kYXRhLm9wdGlvbnMpID09PSBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChpc1NhbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uLnNldCh7IG9wdGlvbnMgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5lZWRSZXNldCkge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc2V0SW5kZXgoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCB2YWx1ZXMgb2YgYWxsIGNvbHVtbnNcbiAgICAgICAgZ2V0VmFsdWVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQuZ2V0VmFsdWUoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNldCB2YWx1ZXMgb2YgYWxsIGNvbHVtbnNcbiAgICAgICAgc2V0VmFsdWVzKHZhbHVlcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2sgPSB2YWx1ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHRoaXMuc2V0Q29sdW1uVmFsdWUoaW5kZXgsIHZhbHVlKSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc3RhY2spO1xuICAgICAgICB9LFxuICAgICAgICAvLyBnZXQgaW5kZXhlcyBvZiBhbGwgY29sdW1uc1xuICAgICAgICBnZXRJbmRleGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQuZGF0YS5jdXJyZW50SW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZXQgaW5kZXhlcyBvZiBhbGwgY29sdW1uc1xuICAgICAgICBzZXRJbmRleGVzKGluZGV4ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gaW5kZXhlcy5tYXAoKG9wdGlvbkluZGV4LCBjb2x1bW5JbmRleCkgPT4gdGhpcy5zZXRDb2x1bW5JbmRleChjb2x1bW5JbmRleCwgb3B0aW9uSW5kZXgpKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdGFjayk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==