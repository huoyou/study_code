'use strict';

var _link = require('./../mixins/link.js');

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    classes: ['title-class', 'label-class', 'value-class', 'right-icon-class', 'hover-class'],
    mixins: [_link.link],
    props: {
        title: null,
        value: null,
        icon: String,
        size: String,
        label: String,
        center: Boolean,
        isLink: Boolean,
        required: Boolean,
        clickable: Boolean,
        titleWidth: String,
        customStyle: String,
        arrowDirection: String,
        border: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJ0aXRsZSIsInZhbHVlIiwiaWNvbiIsIlN0cmluZyIsInNpemUiLCJsYWJlbCIsImNlbnRlciIsIkJvb2xlYW4iLCJpc0xpbmsiLCJyZXF1aXJlZCIsImNsaWNrYWJsZSIsInRpdGxlV2lkdGgiLCJjdXN0b21TdHlsZSIsImFycm93RGlyZWN0aW9uIiwiYm9yZGVyIiwidHlwZSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCIsImp1bXBMaW5rIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLGFBQVMsQ0FDTCxhQURLLEVBRUwsYUFGSyxFQUdMLGFBSEssRUFJTCxrQkFKSyxFQUtMLGFBTEssQ0FEQztBQVFWQyxZQUFRLENBQUNDLFVBQUQsQ0FSRTtBQVNWQyxXQUFPO0FBQ0hDLGVBQU8sSUFESjtBQUVIQyxlQUFPLElBRko7QUFHSEMsY0FBTUMsTUFISDtBQUlIQyxjQUFNRCxNQUpIO0FBS0hFLGVBQU9GLE1BTEo7QUFNSEcsZ0JBQVFDLE9BTkw7QUFPSEMsZ0JBQVFELE9BUEw7QUFRSEUsa0JBQVVGLE9BUlA7QUFTSEcsbUJBQVdILE9BVFI7QUFVSEksb0JBQVlSLE1BVlQ7QUFXSFMscUJBQWFULE1BWFY7QUFZSFUsd0JBQWdCVixNQVpiO0FBYUhXLGdCQUFRO0FBQ0pDLGtCQUFNUixPQURGO0FBRUpOLG1CQUFPO0FBRkg7QUFiTCxLQVRHO0FBMkJWZSxhQUFTO0FBQ0xDLGVBREssbUJBQ0dDLEtBREgsRUFDVTtBQUNYLGlCQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsTUFBTUUsTUFBMUI7QUFDQSxpQkFBS0MsUUFBTDtBQUNIO0FBSkk7QUEzQkMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpbmsgfSBmcm9tICcuLi9taXhpbnMvbGluayc7XG5pbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbXG4gICAgICAgICd0aXRsZS1jbGFzcycsXG4gICAgICAgICdsYWJlbC1jbGFzcycsXG4gICAgICAgICd2YWx1ZS1jbGFzcycsXG4gICAgICAgICdyaWdodC1pY29uLWNsYXNzJyxcbiAgICAgICAgJ2hvdmVyLWNsYXNzJ1xuICAgIF0sXG4gICAgbWl4aW5zOiBbbGlua10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIHNpemU6IFN0cmluZyxcbiAgICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgICAgY2VudGVyOiBCb29sZWFuLFxuICAgICAgICBpc0xpbms6IEJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOiBCb29sZWFuLFxuICAgICAgICBjbGlja2FibGU6IEJvb2xlYW4sXG4gICAgICAgIHRpdGxlV2lkdGg6IFN0cmluZyxcbiAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICAgICAgYXJyb3dEaXJlY3Rpb246IFN0cmluZyxcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICB0aGlzLmp1bXBMaW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==