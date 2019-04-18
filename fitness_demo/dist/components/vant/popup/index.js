'use strict';

var _component = require('./../common/component.js');

var _transition = require('./../mixins/transition.js');

var _safeArea = require('./../mixins/safe-area.js');

(0, _component.VantComponent)({
    classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class'],
    mixins: [(0, _transition.transition)(false), (0, _safeArea.safeArea)()],
    props: {
        transition: {
            type: String,
            observer: 'observeClass'
        },
        customStyle: String,
        overlayStyle: String,
        zIndex: {
            type: Number,
            value: 100
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: 'center',
            observer: 'observeClass'
        }
    },
    created: function created() {
        this.observeClass();
    },

    methods: {
        onClickOverlay: function onClickOverlay() {
            this.$emit('click-overlay');
            if (this.data.closeOnClickOverlay) {
                this.$emit('close');
            }
        },
        observeClass: function observeClass() {
            var _data = this.data,
                transition = _data.transition,
                position = _data.position;

            this.updateClasses(transition || position);
            if (transition === 'none') {
                this.set({ duration: 0 });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJwcm9wcyIsInRyYW5zaXRpb24iLCJ0eXBlIiwiU3RyaW5nIiwib2JzZXJ2ZXIiLCJjdXN0b21TdHlsZSIsIm92ZXJsYXlTdHlsZSIsInpJbmRleCIsIk51bWJlciIsInZhbHVlIiwib3ZlcmxheSIsIkJvb2xlYW4iLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwicG9zaXRpb24iLCJjcmVhdGVkIiwib2JzZXJ2ZUNsYXNzIiwibWV0aG9kcyIsIm9uQ2xpY2tPdmVybGF5IiwiJGVtaXQiLCJkYXRhIiwidXBkYXRlQ2xhc3NlcyIsInNldCIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLGFBQVMsQ0FDTCxhQURLLEVBRUwsb0JBRkssRUFHTCxnQkFISyxFQUlMLGFBSkssRUFLTCxvQkFMSyxFQU1MLGdCQU5LLENBREM7QUFTVkMsWUFBUSxDQUFDLDRCQUFXLEtBQVgsQ0FBRCxFQUFvQix5QkFBcEIsQ0FURTtBQVVWQyxXQUFPO0FBQ0hDLG9CQUFZO0FBQ1JDLGtCQUFNQyxNQURFO0FBRVJDLHNCQUFVO0FBRkYsU0FEVDtBQUtIQyxxQkFBYUYsTUFMVjtBQU1IRyxzQkFBY0gsTUFOWDtBQU9ISSxnQkFBUTtBQUNKTCxrQkFBTU0sTUFERjtBQUVKQyxtQkFBTztBQUZILFNBUEw7QUFXSEMsaUJBQVM7QUFDTFIsa0JBQU1TLE9BREQ7QUFFTEYsbUJBQU87QUFGRixTQVhOO0FBZUhHLDZCQUFxQjtBQUNqQlYsa0JBQU1TLE9BRFc7QUFFakJGLG1CQUFPO0FBRlUsU0FmbEI7QUFtQkhJLGtCQUFVO0FBQ05YLGtCQUFNQyxNQURBO0FBRU5NLG1CQUFPLFFBRkQ7QUFHTkwsc0JBQVU7QUFISjtBQW5CUCxLQVZHO0FBbUNWVSxXQW5DVSxxQkFtQ0E7QUFDTixhQUFLQyxZQUFMO0FBQ0gsS0FyQ1M7O0FBc0NWQyxhQUFTO0FBQ0xDLHNCQURLLDRCQUNZO0FBQ2IsaUJBQUtDLEtBQUwsQ0FBVyxlQUFYO0FBQ0EsZ0JBQUksS0FBS0MsSUFBTCxDQUFVUCxtQkFBZCxFQUFtQztBQUMvQixxQkFBS00sS0FBTCxDQUFXLE9BQVg7QUFDSDtBQUNKLFNBTkk7QUFPTEgsb0JBUEssMEJBT1U7QUFBQSx3QkFDc0IsS0FBS0ksSUFEM0I7QUFBQSxnQkFDSGxCLFVBREcsU0FDSEEsVUFERztBQUFBLGdCQUNTWSxRQURULFNBQ1NBLFFBRFQ7O0FBRVgsaUJBQUtPLGFBQUwsQ0FBbUJuQixjQUFjWSxRQUFqQztBQUNBLGdCQUFJWixlQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCLHFCQUFLb0IsR0FBTCxDQUFTLEVBQUVDLFVBQVUsQ0FBWixFQUFUO0FBQ0g7QUFDSjtBQWJJO0FBdENDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyB0cmFuc2l0aW9uIH0gZnJvbSAnLi4vbWl4aW5zL3RyYW5zaXRpb24nO1xuaW1wb3J0IHsgc2FmZUFyZWEgfSBmcm9tICcuLi9taXhpbnMvc2FmZS1hcmVhJztcblZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFtcbiAgICAgICAgJ2VudGVyLWNsYXNzJyxcbiAgICAgICAgJ2VudGVyLWFjdGl2ZS1jbGFzcycsXG4gICAgICAgICdlbnRlci10by1jbGFzcycsXG4gICAgICAgICdsZWF2ZS1jbGFzcycsXG4gICAgICAgICdsZWF2ZS1hY3RpdmUtY2xhc3MnLFxuICAgICAgICAnbGVhdmUtdG8tY2xhc3MnXG4gICAgXSxcbiAgICBtaXhpbnM6IFt0cmFuc2l0aW9uKGZhbHNlKSwgc2FmZUFyZWEoKV0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdvYnNlcnZlQ2xhc3MnXG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgIG92ZXJsYXlTdHlsZTogU3RyaW5nLFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlT25DbGlja092ZXJsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdjZW50ZXInLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdvYnNlcnZlQ2xhc3MnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZUNsYXNzKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2tPdmVybGF5KCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2stb3ZlcmxheScpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jbG9zZU9uQ2xpY2tPdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb2JzZXJ2ZUNsYXNzKCkge1xuICAgICAgICAgICAgY29uc3QgeyB0cmFuc2l0aW9uLCBwb3NpdGlvbiB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzKHRyYW5zaXRpb24gfHwgcG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKHRyYW5zaXRpb24gPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHsgZHVyYXRpb246IDAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==