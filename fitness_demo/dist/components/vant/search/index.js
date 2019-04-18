'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['field-class', 'input-class', 'cancel-class'],
    props: {
        focus: Boolean,
        error: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        inputAlign: String,
        showAction: Boolean,
        useActionSlot: Boolean,
        placeholder: String,
        placeholderStyle: String,
        background: {
            type: String,
            value: '#ffffff'
        },
        maxlength: {
            type: Number,
            value: -1
        },
        shape: {
            type: String,
            value: 'square'
        },
        label: String
    },
    methods: {
        onChange: function onChange(event) {
            this.set({ value: event.detail });
            this.$emit('change', event.detail);
        },
        onCancel: function onCancel() {
            this.set({ value: '' });
            this.$emit('cancel');
            this.$emit('change', '');
        },
        onSearch: function onSearch() {
            this.$emit('search', this.data.value);
        },
        onFocus: function onFocus() {
            this.$emit('focus');
        },
        onBlur: function onBlur() {
            this.$emit('blur');
        },
        onClear: function onClear() {
            this.$emit('clear');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiZm9jdXMiLCJCb29sZWFuIiwiZXJyb3IiLCJkaXNhYmxlZCIsInJlYWRvbmx5IiwiaW5wdXRBbGlnbiIsIlN0cmluZyIsInNob3dBY3Rpb24iLCJ1c2VBY3Rpb25TbG90IiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclN0eWxlIiwiYmFja2dyb3VuZCIsInR5cGUiLCJ2YWx1ZSIsIm1heGxlbmd0aCIsIk51bWJlciIsInNoYXBlIiwibGFiZWwiLCJtZXRob2RzIiwib25DaGFuZ2UiLCJldmVudCIsInNldCIsImRldGFpbCIsIiRlbWl0Iiwib25DYW5jZWwiLCJvblNlYXJjaCIsImRhdGEiLCJvbkZvY3VzIiwib25CbHVyIiwib25DbGVhciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPLElBREc7QUFFVkMsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsYUFBaEIsRUFBK0IsY0FBL0IsQ0FGQztBQUdWQyxXQUFPO0FBQ0hDLGVBQU9DLE9BREo7QUFFSEMsZUFBT0QsT0FGSjtBQUdIRSxrQkFBVUYsT0FIUDtBQUlIRyxrQkFBVUgsT0FKUDtBQUtISSxvQkFBWUMsTUFMVDtBQU1IQyxvQkFBWU4sT0FOVDtBQU9ITyx1QkFBZVAsT0FQWjtBQVFIUSxxQkFBYUgsTUFSVjtBQVNISSwwQkFBa0JKLE1BVGY7QUFVSEssb0JBQVk7QUFDUkMsa0JBQU1OLE1BREU7QUFFUk8sbUJBQU87QUFGQyxTQVZUO0FBY0hDLG1CQUFXO0FBQ1BGLGtCQUFNRyxNQURDO0FBRVBGLG1CQUFPLENBQUM7QUFGRCxTQWRSO0FBa0JIRyxlQUFPO0FBQ0hKLGtCQUFNTixNQURIO0FBRUhPLG1CQUFPO0FBRkosU0FsQko7QUFzQkhJLGVBQU9YO0FBdEJKLEtBSEc7QUEyQlZZLGFBQVM7QUFDTEMsZ0JBREssb0JBQ0lDLEtBREosRUFDVztBQUNaLGlCQUFLQyxHQUFMLENBQVMsRUFBRVIsT0FBT08sTUFBTUUsTUFBZixFQUFUO0FBQ0EsaUJBQUtDLEtBQUwsQ0FBVyxRQUFYLEVBQXFCSCxNQUFNRSxNQUEzQjtBQUNILFNBSkk7QUFLTEUsZ0JBTEssc0JBS007QUFDUCxpQkFBS0gsR0FBTCxDQUFTLEVBQUVSLE9BQU8sRUFBVCxFQUFUO0FBQ0EsaUJBQUtVLEtBQUwsQ0FBVyxRQUFYO0FBQ0EsaUJBQUtBLEtBQUwsQ0FBVyxRQUFYLEVBQXFCLEVBQXJCO0FBQ0gsU0FUSTtBQVVMRSxnQkFWSyxzQkFVTTtBQUNQLGlCQUFLRixLQUFMLENBQVcsUUFBWCxFQUFxQixLQUFLRyxJQUFMLENBQVViLEtBQS9CO0FBQ0gsU0FaSTtBQWFMYyxlQWJLLHFCQWFLO0FBQ04saUJBQUtKLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FmSTtBQWdCTEssY0FoQkssb0JBZ0JJO0FBQ0wsaUJBQUtMLEtBQUwsQ0FBVyxNQUFYO0FBQ0gsU0FsQkk7QUFtQkxNLGVBbkJLLHFCQW1CSztBQUNOLGlCQUFLTixLQUFMLENBQVcsT0FBWDtBQUNIO0FBckJJO0FBM0JDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICBjbGFzc2VzOiBbJ2ZpZWxkLWNsYXNzJywgJ2lucHV0LWNsYXNzJywgJ2NhbmNlbC1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGZvY3VzOiBCb29sZWFuLFxuICAgICAgICBlcnJvcjogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICBpbnB1dEFsaWduOiBTdHJpbmcsXG4gICAgICAgIHNob3dBY3Rpb246IEJvb2xlYW4sXG4gICAgICAgIHVzZUFjdGlvblNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgICAgIHBsYWNlaG9sZGVyU3R5bGU6IFN0cmluZyxcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcjZmZmZmZmJ1xuICAgICAgICB9LFxuICAgICAgICBtYXhsZW5ndGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAtMVxuICAgICAgICB9LFxuICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdzcXVhcmUnXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiBTdHJpbmdcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWU6IGV2ZW50LmRldGFpbCB9KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2FuY2VsKCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZTogJycgfSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjYW5jZWwnKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsICcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TZWFyY2goKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCB0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkZvY3VzKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZm9jdXMnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CbHVyKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xlYXInKTtcbiAgICAgICAgfSxcbiAgICB9XG59KTtcbiJdfQ==