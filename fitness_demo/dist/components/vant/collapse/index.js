'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        name: 'collapse-item',
        type: 'descendant',
        linked: function linked(child) {
            this.children.push(child);
        }
    },
    props: {
        value: {
            type: null,
            observer: 'updateExpanded'
        },
        accordion: {
            type: Boolean,
            observer: 'updateExpanded'
        },
        border: {
            type: Boolean,
            value: true
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },

    methods: {
        updateExpanded: function updateExpanded() {
            this.children.forEach(function (child) {
                child.updateExpanded();
            });
        },
        switch: function _switch(name, expanded) {
            var _data = this.data,
                accordion = _data.accordion,
                value = _data.value;

            if (!accordion) {
                name = expanded ? (value || []).concat(name) : (value || []).filter(function (activeName) {
                    return activeName !== name;
                });
            } else {
                name = expanded ? name : '';
            }
            this.$emit('change', name);
            this.$emit('input', name);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJjaGlsZCIsImNoaWxkcmVuIiwicHVzaCIsInByb3BzIiwidmFsdWUiLCJvYnNlcnZlciIsImFjY29yZGlvbiIsIkJvb2xlYW4iLCJib3JkZXIiLCJiZWZvcmVDcmVhdGUiLCJtZXRob2RzIiwidXBkYXRlRXhwYW5kZWQiLCJmb3JFYWNoIiwic3dpdGNoIiwiZXhwYW5kZWQiLCJkYXRhIiwiY29uY2F0IiwiZmlsdGVyIiwiYWN0aXZlTmFtZSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLGNBQVU7QUFDTkMsY0FBTSxlQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxjQUhNLGtCQUdDQyxLQUhELEVBR1E7QUFDVixpQkFBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CRixLQUFuQjtBQUNIO0FBTEssS0FEQTtBQVFWRyxXQUFPO0FBQ0hDLGVBQU87QUFDSE4sa0JBQU0sSUFESDtBQUVITyxzQkFBVTtBQUZQLFNBREo7QUFLSEMsbUJBQVc7QUFDUFIsa0JBQU1TLE9BREM7QUFFUEYsc0JBQVU7QUFGSCxTQUxSO0FBU0hHLGdCQUFRO0FBQ0pWLGtCQUFNUyxPQURGO0FBRUpILG1CQUFPO0FBRkg7QUFUTCxLQVJHO0FBc0JWSyxnQkF0QlUsMEJBc0JLO0FBQ1gsYUFBS1IsUUFBTCxHQUFnQixFQUFoQjtBQUNILEtBeEJTOztBQXlCVlMsYUFBUztBQUNMQyxzQkFESyw0QkFDWTtBQUNiLGlCQUFLVixRQUFMLENBQWNXLE9BQWQsQ0FBc0IsVUFBQ1osS0FBRCxFQUFXO0FBQzdCQSxzQkFBTVcsY0FBTjtBQUNILGFBRkQ7QUFHSCxTQUxJO0FBTUxFLGNBTkssbUJBTUVoQixJQU5GLEVBTVFpQixRQU5SLEVBTWtCO0FBQUEsd0JBQ1UsS0FBS0MsSUFEZjtBQUFBLGdCQUNYVCxTQURXLFNBQ1hBLFNBRFc7QUFBQSxnQkFDQUYsS0FEQSxTQUNBQSxLQURBOztBQUVuQixnQkFBSSxDQUFDRSxTQUFMLEVBQWdCO0FBQ1pULHVCQUFPaUIsV0FDRCxDQUFDVixTQUFTLEVBQVYsRUFBY1ksTUFBZCxDQUFxQm5CLElBQXJCLENBREMsR0FFRCxDQUFDTyxTQUFTLEVBQVYsRUFBY2EsTUFBZCxDQUFxQixVQUFDQyxVQUFEO0FBQUEsMkJBQWdCQSxlQUFlckIsSUFBL0I7QUFBQSxpQkFBckIsQ0FGTjtBQUdILGFBSkQsTUFLSztBQUNEQSx1QkFBT2lCLFdBQVdqQixJQUFYLEdBQWtCLEVBQXpCO0FBQ0g7QUFDRCxpQkFBS3NCLEtBQUwsQ0FBVyxRQUFYLEVBQXFCdEIsSUFBckI7QUFDQSxpQkFBS3NCLEtBQUwsQ0FBVyxPQUFYLEVBQW9CdEIsSUFBcEI7QUFDSDtBQWxCSTtBQXpCQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2NvbGxhcHNlLWl0ZW0nLFxuICAgICAgICB0eXBlOiAnZGVzY2VuZGFudCcsXG4gICAgICAgIGxpbmtlZChjaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUV4cGFuZGVkJ1xuICAgICAgICB9LFxuICAgICAgICBhY2NvcmRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUV4cGFuZGVkJ1xuICAgICAgICB9LFxuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlRXhwYW5kZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlRXhwYW5kZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzd2l0Y2gobmFtZSwgZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYWNjb3JkaW9uLCB2YWx1ZSB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCFhY2NvcmRpb24pIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gZXhwYW5kZWRcbiAgICAgICAgICAgICAgICAgICAgPyAodmFsdWUgfHwgW10pLmNvbmNhdChuYW1lKVxuICAgICAgICAgICAgICAgICAgICA6ICh2YWx1ZSB8fCBbXSkuZmlsdGVyKChhY3RpdmVOYW1lKSA9PiBhY3RpdmVOYW1lICE9PSBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBleHBhbmRlZCA/IG5hbWUgOiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIG5hbWUpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19