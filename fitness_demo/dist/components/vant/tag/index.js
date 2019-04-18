'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_COLOR = '#999';
var COLOR_MAP = {
    danger: _color.RED,
    primary: _color.BLUE,
    success: _color.GREEN
};
(0, _component.VantComponent)({
    props: {
        size: String,
        type: String,
        mark: Boolean,
        color: String,
        plain: Boolean,
        round: Boolean,
        textColor: String
    },
    computed: {
        style: function style() {
            var color = this.data.color || COLOR_MAP[this.data.type] || DEFAULT_COLOR;
            var key = this.data.plain ? 'color' : 'background-color';
            var style = _defineProperty({}, key, color);
            if (this.data.textColor) {
                style.color = this.data.textColor;
            }
            return Object.keys(style).map(function (key) {
                return key + ': ' + style[key];
            }).join(';');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfQ09MT1IiLCJDT0xPUl9NQVAiLCJkYW5nZXIiLCJSRUQiLCJwcmltYXJ5IiwiQkxVRSIsInN1Y2Nlc3MiLCJHUkVFTiIsInByb3BzIiwic2l6ZSIsIlN0cmluZyIsInR5cGUiLCJtYXJrIiwiQm9vbGVhbiIsImNvbG9yIiwicGxhaW4iLCJyb3VuZCIsInRleHRDb2xvciIsImNvbXB1dGVkIiwic3R5bGUiLCJkYXRhIiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImpvaW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFDQSxJQUFNQSxnQkFBZ0IsTUFBdEI7QUFDQSxJQUFNQyxZQUFZO0FBQ2RDLFlBQVFDLFVBRE07QUFFZEMsYUFBU0MsV0FGSztBQUdkQyxhQUFTQztBQUhLLENBQWxCO0FBS0EsOEJBQWM7QUFDVkMsV0FBTztBQUNIQyxjQUFNQyxNQURIO0FBRUhDLGNBQU1ELE1BRkg7QUFHSEUsY0FBTUMsT0FISDtBQUlIQyxlQUFPSixNQUpKO0FBS0hLLGVBQU9GLE9BTEo7QUFNSEcsZUFBT0gsT0FOSjtBQU9ISSxtQkFBV1A7QUFQUixLQURHO0FBVVZRLGNBQVU7QUFDTkMsYUFETSxtQkFDRTtBQUNKLGdCQUFNTCxRQUFRLEtBQUtNLElBQUwsQ0FBVU4sS0FBVixJQUFtQmIsVUFBVSxLQUFLbUIsSUFBTCxDQUFVVCxJQUFwQixDQUFuQixJQUFnRFgsYUFBOUQ7QUFDQSxnQkFBTXFCLE1BQU0sS0FBS0QsSUFBTCxDQUFVTCxLQUFWLEdBQWtCLE9BQWxCLEdBQTRCLGtCQUF4QztBQUNBLGdCQUFNSSw0QkFBV0UsR0FBWCxFQUFpQlAsS0FBakIsQ0FBTjtBQUNBLGdCQUFJLEtBQUtNLElBQUwsQ0FBVUgsU0FBZCxFQUF5QjtBQUNyQkUsc0JBQU1MLEtBQU4sR0FBYyxLQUFLTSxJQUFMLENBQVVILFNBQXhCO0FBQ0g7QUFDRCxtQkFBT0ssT0FBT0MsSUFBUCxDQUFZSixLQUFaLEVBQW1CSyxHQUFuQixDQUF1QjtBQUFBLHVCQUFVSCxHQUFWLFVBQWtCRixNQUFNRSxHQUFOLENBQWxCO0FBQUEsYUFBdkIsRUFBdURJLElBQXZELENBQTRELEdBQTVELENBQVA7QUFDSDtBQVRLO0FBVkEsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IFJFRCwgQkxVRSwgR1JFRU4gfSBmcm9tICcuLi9jb21tb24vY29sb3InO1xuY29uc3QgREVGQVVMVF9DT0xPUiA9ICcjOTk5JztcbmNvbnN0IENPTE9SX01BUCA9IHtcbiAgICBkYW5nZXI6IFJFRCxcbiAgICBwcmltYXJ5OiBCTFVFLFxuICAgIHN1Y2Nlc3M6IEdSRUVOXG59O1xuVmFudENvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2l6ZTogU3RyaW5nLFxuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG1hcms6IEJvb2xlYW4sXG4gICAgICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgICAgIHBsYWluOiBCb29sZWFuLFxuICAgICAgICByb3VuZDogQm9vbGVhbixcbiAgICAgICAgdGV4dENvbG9yOiBTdHJpbmdcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHN0eWxlKCkge1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmRhdGEuY29sb3IgfHwgQ09MT1JfTUFQW3RoaXMuZGF0YS50eXBlXSB8fCBERUZBVUxUX0NPTE9SO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5kYXRhLnBsYWluID8gJ2NvbG9yJyA6ICdiYWNrZ3JvdW5kLWNvbG9yJztcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0geyBba2V5XTogY29sb3IgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudGV4dENvbG9yKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGlzLmRhdGEudGV4dENvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5tYXAoa2V5ID0+IGAke2tleX06ICR7c3R5bGVba2V5XX1gKS5qb2luKCc7Jyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==