'use strict';

var _component = require('./../common/component.js');

var _safeArea = require('./../mixins/safe-area.js');

(0, _component.VantComponent)({
    mixins: [(0, _safeArea.safeArea)()],
    classes: ['bar-class', 'price-class', 'button-class'],
    props: {
        tip: null,
        type: Number,
        price: null,
        label: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        currency: {
            type: String,
            value: '¥'
        },
        buttonType: {
            type: String,
            value: 'danger'
        }
    },
    computed: {
        hasPrice: function hasPrice() {
            return typeof this.data.price === 'number';
        },
        priceStr: function priceStr() {
            return (this.data.price / 100).toFixed(2);
        },
        tipStr: function tipStr() {
            var tip = this.data.tip;

            return typeof tip === 'string' ? tip : '';
        }
    },
    methods: {
        onSubmit: function onSubmit(event) {
            this.$emit('submit', event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImNsYXNzZXMiLCJwcm9wcyIsInRpcCIsInR5cGUiLCJOdW1iZXIiLCJwcmljZSIsImxhYmVsIiwiU3RyaW5nIiwibG9hZGluZyIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImJ1dHRvblRleHQiLCJjdXJyZW5jeSIsInZhbHVlIiwiYnV0dG9uVHlwZSIsImNvbXB1dGVkIiwiaGFzUHJpY2UiLCJkYXRhIiwicHJpY2VTdHIiLCJ0b0ZpeGVkIiwidGlwU3RyIiwibWV0aG9kcyIsIm9uU3VibWl0IiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxZQUFRLENBQUMseUJBQUQsQ0FERTtBQUVWQyxhQUFTLENBQ0wsV0FESyxFQUVMLGFBRkssRUFHTCxjQUhLLENBRkM7QUFPVkMsV0FBTztBQUNIQyxhQUFLLElBREY7QUFFSEMsY0FBTUMsTUFGSDtBQUdIQyxlQUFPLElBSEo7QUFJSEMsZUFBT0MsTUFKSjtBQUtIQyxpQkFBU0MsT0FMTjtBQU1IQyxrQkFBVUQsT0FOUDtBQU9IRSxvQkFBWUosTUFQVDtBQVFISyxrQkFBVTtBQUNOVCxrQkFBTUksTUFEQTtBQUVOTSxtQkFBTztBQUZELFNBUlA7QUFZSEMsb0JBQVk7QUFDUlgsa0JBQU1JLE1BREU7QUFFUk0sbUJBQU87QUFGQztBQVpULEtBUEc7QUF3QlZFLGNBQVU7QUFDTkMsZ0JBRE0sc0JBQ0s7QUFDUCxtQkFBTyxPQUFPLEtBQUtDLElBQUwsQ0FBVVosS0FBakIsS0FBMkIsUUFBbEM7QUFDSCxTQUhLO0FBSU5hLGdCQUpNLHNCQUlLO0FBQ1AsbUJBQU8sQ0FBQyxLQUFLRCxJQUFMLENBQVVaLEtBQVYsR0FBa0IsR0FBbkIsRUFBd0JjLE9BQXhCLENBQWdDLENBQWhDLENBQVA7QUFDSCxTQU5LO0FBT05DLGNBUE0sb0JBT0c7QUFBQSxnQkFDR2xCLEdBREgsR0FDVyxLQUFLZSxJQURoQixDQUNHZixHQURIOztBQUVMLG1CQUFPLE9BQU9BLEdBQVAsS0FBZSxRQUFmLEdBQTBCQSxHQUExQixHQUFnQyxFQUF2QztBQUNIO0FBVkssS0F4QkE7QUFvQ1ZtQixhQUFTO0FBQ0xDLGdCQURLLG9CQUNJQyxLQURKLEVBQ1c7QUFDWixpQkFBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJELE1BQU1FLE1BQTNCO0FBQ0g7QUFISTtBQXBDQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgc2FmZUFyZWEgfSBmcm9tICcuLi9taXhpbnMvc2FmZS1hcmVhJztcblZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW3NhZmVBcmVhKCldLFxuICAgIGNsYXNzZXM6IFtcbiAgICAgICAgJ2Jhci1jbGFzcycsXG4gICAgICAgICdwcmljZS1jbGFzcycsXG4gICAgICAgICdidXR0b24tY2xhc3MnXG4gICAgXSxcbiAgICBwcm9wczoge1xuICAgICAgICB0aXA6IG51bGwsXG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcHJpY2U6IG51bGwsXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBidXR0b25UZXh0OiBTdHJpbmcsXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ8KlJ1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25UeXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2RhbmdlcidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaGFzUHJpY2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuZGF0YS5wcmljZSA9PT0gJ251bWJlcic7XG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlU3RyKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmRhdGEucHJpY2UgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIH0sXG4gICAgICAgIHRpcFN0cigpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGlwIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHRpcCA9PT0gJ3N0cmluZycgPyB0aXAgOiAnJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvblN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0JywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19