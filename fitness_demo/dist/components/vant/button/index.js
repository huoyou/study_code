'use strict';

var _component = require('./../common/component.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
    mixins: [_button.button, _openType.openType],
    classes: ['hover-class', 'loading-class'],
    props: {
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        },
        loadingSize: {
            type: String,
            value: '20px'
        }
    },
    methods: {
        onClick: function onClick() {
            if (!this.data.disabled && !this.data.loading) {
                this.$emit('click');
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImJ1dHRvbiIsIm9wZW5UeXBlIiwiY2xhc3NlcyIsInByb3BzIiwicGxhaW4iLCJCb29sZWFuIiwiYmxvY2siLCJyb3VuZCIsInNxdWFyZSIsImxvYWRpbmciLCJoYWlybGluZSIsImRpc2FibGVkIiwibG9hZGluZ1RleHQiLCJTdHJpbmciLCJ0eXBlIiwidmFsdWUiLCJzaXplIiwibG9hZGluZ1NpemUiLCJtZXRob2RzIiwib25DbGljayIsImRhdGEiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxZQUFRLENBQUNDLGNBQUQsRUFBU0Msa0JBQVQsQ0FERTtBQUVWQyxhQUFTLENBQUMsYUFBRCxFQUFnQixlQUFoQixDQUZDO0FBR1ZDLFdBQU87QUFDSEMsZUFBT0MsT0FESjtBQUVIQyxlQUFPRCxPQUZKO0FBR0hFLGVBQU9GLE9BSEo7QUFJSEcsZ0JBQVFILE9BSkw7QUFLSEksaUJBQVNKLE9BTE47QUFNSEssa0JBQVVMLE9BTlA7QUFPSE0sa0JBQVVOLE9BUFA7QUFRSE8scUJBQWFDLE1BUlY7QUFTSEMsY0FBTTtBQUNGQSxrQkFBTUQsTUFESjtBQUVGRSxtQkFBTztBQUZMLFNBVEg7QUFhSEMsY0FBTTtBQUNGRixrQkFBTUQsTUFESjtBQUVGRSxtQkFBTztBQUZMLFNBYkg7QUFpQkhFLHFCQUFhO0FBQ1RILGtCQUFNRCxNQURHO0FBRVRFLG1CQUFPO0FBRkU7QUFqQlYsS0FIRztBQXlCVkcsYUFBUztBQUNMQyxlQURLLHFCQUNLO0FBQ04sZ0JBQUksQ0FBQyxLQUFLQyxJQUFMLENBQVVULFFBQVgsSUFBdUIsQ0FBQyxLQUFLUyxJQUFMLENBQVVYLE9BQXRDLEVBQStDO0FBQzNDLHFCQUFLWSxLQUFMLENBQVcsT0FBWDtBQUNIO0FBQ0o7QUFMSTtBQXpCQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSAnLi4vbWl4aW5zL2J1dHRvbic7XG5pbXBvcnQgeyBvcGVuVHlwZSB9IGZyb20gJy4uL21peGlucy9vcGVuLXR5cGUnO1xuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbYnV0dG9uLCBvcGVuVHlwZV0sXG4gICAgY2xhc3NlczogWydob3Zlci1jbGFzcycsICdsb2FkaW5nLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgcGxhaW46IEJvb2xlYW4sXG4gICAgICAgIGJsb2NrOiBCb29sZWFuLFxuICAgICAgICByb3VuZDogQm9vbGVhbixcbiAgICAgICAgc3F1YXJlOiBCb29sZWFuLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBoYWlybGluZTogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGxvYWRpbmdUZXh0OiBTdHJpbmcsXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnZGVmYXVsdCdcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdub3JtYWwnXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRpbmdTaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJzIwcHgnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljaygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==