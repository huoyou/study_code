'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    props: {
        show: Boolean,
        mask: Boolean,
        message: String,
        forbidClick: Boolean,
        zIndex: {
            type: Number,
            value: 1000
        },
        type: {
            type: String,
            value: 'text'
        },
        loadingType: {
            type: String,
            value: 'circular'
        },
        position: {
            type: String,
            value: 'middle'
        }
    },
    methods: {
        clear: function clear() {
            this.set({
                show: false
            });
        },

        // for prevent touchmove
        noop: function noop() {}
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJtYXNrIiwibWVzc2FnZSIsIlN0cmluZyIsImZvcmJpZENsaWNrIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwibG9hZGluZ1R5cGUiLCJwb3NpdGlvbiIsIm1ldGhvZHMiLCJjbGVhciIsInNldCIsIm5vb3AiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTztBQUNIQyxjQUFNQyxPQURIO0FBRUhDLGNBQU1ELE9BRkg7QUFHSEUsaUJBQVNDLE1BSE47QUFJSEMscUJBQWFKLE9BSlY7QUFLSEssZ0JBQVE7QUFDSkMsa0JBQU1DLE1BREY7QUFFSkMsbUJBQU87QUFGSCxTQUxMO0FBU0hGLGNBQU07QUFDRkEsa0JBQU1ILE1BREo7QUFFRkssbUJBQU87QUFGTCxTQVRIO0FBYUhDLHFCQUFhO0FBQ1RILGtCQUFNSCxNQURHO0FBRVRLLG1CQUFPO0FBRkUsU0FiVjtBQWlCSEUsa0JBQVU7QUFDTkosa0JBQU1ILE1BREE7QUFFTkssbUJBQU87QUFGRDtBQWpCUCxLQURHO0FBdUJWRyxhQUFTO0FBQ0xDLGFBREssbUJBQ0c7QUFDSixpQkFBS0MsR0FBTCxDQUFTO0FBQ0xkLHNCQUFNO0FBREQsYUFBVDtBQUdILFNBTEk7O0FBTUw7QUFDQWUsWUFQSyxrQkFPRSxDQUFHO0FBUEw7QUF2QkMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3c6IEJvb2xlYW4sXG4gICAgICAgIG1hc2s6IEJvb2xlYW4sXG4gICAgICAgIG1lc3NhZ2U6IFN0cmluZyxcbiAgICAgICAgZm9yYmlkQ2xpY2s6IEJvb2xlYW4sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDEwMDBcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd0ZXh0J1xuICAgICAgICB9LFxuICAgICAgICBsb2FkaW5nVHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdjaXJjdWxhcidcbiAgICAgICAgfSxcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbWlkZGxlJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZm9yIHByZXZlbnQgdG91Y2htb3ZlXG4gICAgICAgIG5vb3AoKSB7IH1cbiAgICB9XG59KTtcbiJdfQ==