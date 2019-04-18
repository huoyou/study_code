'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

(0, _component.VantComponent)({
    props: {
        inactive: Boolean,
        percentage: Number,
        pivotText: String,
        pivotColor: String,
        showPivot: {
            type: Boolean,
            value: true
        },
        color: {
            type: String,
            value: _color.BLUE
        },
        textColor: {
            type: String,
            value: '#fff'
        }
    },
    data: {
        pivotWidth: 0,
        progressWidth: 0
    },
    watch: {
        pivotText: 'getWidth',
        showPivot: 'getWidth'
    },
    computed: {
        portionStyle: function portionStyle() {
            var width = (this.data.progressWidth - this.data.pivotWidth) * this.data.percentage / 100 + 'px';
            var background = this.getCurrentColor();
            return 'width: ' + width + '; background: ' + background + '; ';
        },
        pivotStyle: function pivotStyle() {
            var color = this.data.textColor;
            var background = this.data.pivotColor || this.getCurrentColor();
            return 'color: ' + color + '; background: ' + background;
        },
        text: function text() {
            return this.data.pivotText || this.data.percentage + '%';
        }
    },
    mounted: function mounted() {
        this.getWidth();
    },

    methods: {
        getCurrentColor: function getCurrentColor() {
            return this.data.inactive ? '#cacaca' : this.data.color;
        },
        getWidth: function getWidth() {
            var _this = this;

            this.getRect('.van-progress').then(function (rect) {
                _this.set({
                    progressWidth: rect.width
                });
            });
            this.getRect('.van-progress__pivot').then(function (rect) {
                _this.set({
                    pivotWidth: rect.width || 0
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5hY3RpdmUiLCJCb29sZWFuIiwicGVyY2VudGFnZSIsIk51bWJlciIsInBpdm90VGV4dCIsIlN0cmluZyIsInBpdm90Q29sb3IiLCJzaG93UGl2b3QiLCJ0eXBlIiwidmFsdWUiLCJjb2xvciIsIkJMVUUiLCJ0ZXh0Q29sb3IiLCJkYXRhIiwicGl2b3RXaWR0aCIsInByb2dyZXNzV2lkdGgiLCJ3YXRjaCIsImNvbXB1dGVkIiwicG9ydGlvblN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwiZ2V0Q3VycmVudENvbG9yIiwicGl2b3RTdHlsZSIsInRleHQiLCJtb3VudGVkIiwiZ2V0V2lkdGgiLCJtZXRob2RzIiwiZ2V0UmVjdCIsInRoZW4iLCJzZXQiLCJyZWN0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU87QUFDSEMsa0JBQVVDLE9BRFA7QUFFSEMsb0JBQVlDLE1BRlQ7QUFHSEMsbUJBQVdDLE1BSFI7QUFJSEMsb0JBQVlELE1BSlQ7QUFLSEUsbUJBQVc7QUFDUEMsa0JBQU1QLE9BREM7QUFFUFEsbUJBQU87QUFGQSxTQUxSO0FBU0hDLGVBQU87QUFDSEYsa0JBQU1ILE1BREg7QUFFSEksbUJBQU9FO0FBRkosU0FUSjtBQWFIQyxtQkFBVztBQUNQSixrQkFBTUgsTUFEQztBQUVQSSxtQkFBTztBQUZBO0FBYlIsS0FERztBQW1CVkksVUFBTTtBQUNGQyxvQkFBWSxDQURWO0FBRUZDLHVCQUFlO0FBRmIsS0FuQkk7QUF1QlZDLFdBQU87QUFDSFosbUJBQVcsVUFEUjtBQUVIRyxtQkFBVztBQUZSLEtBdkJHO0FBMkJWVSxjQUFVO0FBQ05DLG9CQURNLDBCQUNTO0FBQ1gsZ0JBQU1DLFFBQVEsQ0FBQyxLQUFLTixJQUFMLENBQVVFLGFBQVYsR0FBMEIsS0FBS0YsSUFBTCxDQUFVQyxVQUFyQyxJQUFtRCxLQUFLRCxJQUFMLENBQVVYLFVBQTdELEdBQTBFLEdBQTFFLEdBQWdGLElBQTlGO0FBQ0EsZ0JBQU1rQixhQUFhLEtBQUtDLGVBQUwsRUFBbkI7QUFDQSwrQkFBaUJGLEtBQWpCLHNCQUF1Q0MsVUFBdkM7QUFDSCxTQUxLO0FBTU5FLGtCQU5NLHdCQU1PO0FBQ1QsZ0JBQU1aLFFBQVEsS0FBS0csSUFBTCxDQUFVRCxTQUF4QjtBQUNBLGdCQUFNUSxhQUFhLEtBQUtQLElBQUwsQ0FBVVAsVUFBVixJQUF3QixLQUFLZSxlQUFMLEVBQTNDO0FBQ0EsK0JBQWlCWCxLQUFqQixzQkFBdUNVLFVBQXZDO0FBQ0gsU0FWSztBQVdORyxZQVhNLGtCQVdDO0FBQ0gsbUJBQU8sS0FBS1YsSUFBTCxDQUFVVCxTQUFWLElBQXVCLEtBQUtTLElBQUwsQ0FBVVgsVUFBVixHQUF1QixHQUFyRDtBQUNIO0FBYkssS0EzQkE7QUEwQ1ZzQixXQTFDVSxxQkEwQ0E7QUFDTixhQUFLQyxRQUFMO0FBQ0gsS0E1Q1M7O0FBNkNWQyxhQUFTO0FBQ0xMLHVCQURLLDZCQUNhO0FBQ2QsbUJBQU8sS0FBS1IsSUFBTCxDQUFVYixRQUFWLEdBQXFCLFNBQXJCLEdBQWlDLEtBQUthLElBQUwsQ0FBVUgsS0FBbEQ7QUFDSCxTQUhJO0FBSUxlLGdCQUpLLHNCQUlNO0FBQUE7O0FBQ1AsaUJBQUtFLE9BQUwsQ0FBYSxlQUFiLEVBQThCQyxJQUE5QixDQUFtQyxnQkFBUTtBQUN2QyxzQkFBS0MsR0FBTCxDQUFTO0FBQ0xkLG1DQUFlZSxLQUFLWDtBQURmLGlCQUFUO0FBR0gsYUFKRDtBQUtBLGlCQUFLUSxPQUFMLENBQWEsc0JBQWIsRUFBcUNDLElBQXJDLENBQTBDLGdCQUFRO0FBQzlDLHNCQUFLQyxHQUFMLENBQVM7QUFDTGYsZ0NBQVlnQixLQUFLWCxLQUFMLElBQWM7QUFEckIsaUJBQVQ7QUFHSCxhQUpEO0FBS0g7QUFmSTtBQTdDQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQkxVRSB9IGZyb20gJy4uL2NvbW1vbi9jb2xvcic7XG5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICBpbmFjdGl2ZTogQm9vbGVhbixcbiAgICAgICAgcGVyY2VudGFnZTogTnVtYmVyLFxuICAgICAgICBwaXZvdFRleHQ6IFN0cmluZyxcbiAgICAgICAgcGl2b3RDb2xvcjogU3RyaW5nLFxuICAgICAgICBzaG93UGl2b3Q6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IEJMVUVcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJyNmZmYnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgcGl2b3RXaWR0aDogMCxcbiAgICAgICAgcHJvZ3Jlc3NXaWR0aDogMFxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgcGl2b3RUZXh0OiAnZ2V0V2lkdGgnLFxuICAgICAgICBzaG93UGl2b3Q6ICdnZXRXaWR0aCdcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHBvcnRpb25TdHlsZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gKHRoaXMuZGF0YS5wcm9ncmVzc1dpZHRoIC0gdGhpcy5kYXRhLnBpdm90V2lkdGgpICogdGhpcy5kYXRhLnBlcmNlbnRhZ2UgLyAxMDAgKyAncHgnO1xuICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IHRoaXMuZ2V0Q3VycmVudENvbG9yKCk7XG4gICAgICAgICAgICByZXR1cm4gYHdpZHRoOiAke3dpZHRofTsgYmFja2dyb3VuZDogJHtiYWNrZ3JvdW5kfTsgYDtcbiAgICAgICAgfSxcbiAgICAgICAgcGl2b3RTdHlsZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5kYXRhLnRleHRDb2xvcjtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSB0aGlzLmRhdGEucGl2b3RDb2xvciB8fCB0aGlzLmdldEN1cnJlbnRDb2xvcigpO1xuICAgICAgICAgICAgcmV0dXJuIGBjb2xvcjogJHtjb2xvcn07IGJhY2tncm91bmQ6ICR7YmFja2dyb3VuZH1gO1xuICAgICAgICB9LFxuICAgICAgICB0ZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5waXZvdFRleHQgfHwgdGhpcy5kYXRhLnBlcmNlbnRhZ2UgKyAnJSc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZ2V0V2lkdGgoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0Q3VycmVudENvbG9yKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5pbmFjdGl2ZSA/ICcjY2FjYWNhJyA6IHRoaXMuZGF0YS5jb2xvcjtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0V2lkdGgoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tcHJvZ3Jlc3MnKS50aGVuKHJlY3QgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NXaWR0aDogcmVjdC53aWR0aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tcHJvZ3Jlc3NfX3Bpdm90JykudGhlbihyZWN0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIHBpdm90V2lkdGg6IHJlY3Qud2lkdGggfHwgMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==