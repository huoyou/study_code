'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

var _safeArea = require('./../mixins/safe-area.js');

(0, _component.VantComponent)({
    mixins: [(0, _safeArea.safeArea)()],
    props: {
        text: String,
        color: {
            type: String,
            value: '#fff'
        },
        backgroundColor: {
            type: String,
            value: _color.RED
        },
        duration: {
            type: Number,
            value: 3000
        }
    },
    methods: {
        show: function show() {
            var _this = this;

            var duration = this.data.duration;

            clearTimeout(this.timer);
            this.set({
                show: true
            });
            if (duration > 0 && duration !== Infinity) {
                this.timer = setTimeout(function () {
                    _this.hide();
                }, duration);
            }
        },
        hide: function hide() {
            clearTimeout(this.timer);
            this.set({
                show: false
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInByb3BzIiwidGV4dCIsIlN0cmluZyIsImNvbG9yIiwidHlwZSIsInZhbHVlIiwiYmFja2dyb3VuZENvbG9yIiwiUkVEIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJtZXRob2RzIiwic2hvdyIsImRhdGEiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsInNldCIsIkluZmluaXR5Iiwic2V0VGltZW91dCIsImhpZGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsWUFBUSxDQUFDLHlCQUFELENBREU7QUFFVkMsV0FBTztBQUNIQyxjQUFNQyxNQURIO0FBRUhDLGVBQU87QUFDSEMsa0JBQU1GLE1BREg7QUFFSEcsbUJBQU87QUFGSixTQUZKO0FBTUhDLHlCQUFpQjtBQUNiRixrQkFBTUYsTUFETztBQUViRyxtQkFBT0U7QUFGTSxTQU5kO0FBVUhDLGtCQUFVO0FBQ05KLGtCQUFNSyxNQURBO0FBRU5KLG1CQUFPO0FBRkQ7QUFWUCxLQUZHO0FBaUJWSyxhQUFTO0FBQ0xDLFlBREssa0JBQ0U7QUFBQTs7QUFBQSxnQkFDS0gsUUFETCxHQUNrQixLQUFLSSxJQUR2QixDQUNLSixRQURMOztBQUVISyx5QkFBYSxLQUFLQyxLQUFsQjtBQUNBLGlCQUFLQyxHQUFMLENBQVM7QUFDTEosc0JBQU07QUFERCxhQUFUO0FBR0EsZ0JBQUlILFdBQVcsQ0FBWCxJQUFnQkEsYUFBYVEsUUFBakMsRUFBMkM7QUFDdkMscUJBQUtGLEtBQUwsR0FBYUcsV0FBVyxZQUFNO0FBQzFCLDBCQUFLQyxJQUFMO0FBQ0gsaUJBRlksRUFFVlYsUUFGVSxDQUFiO0FBR0g7QUFDSixTQVpJO0FBYUxVLFlBYkssa0JBYUU7QUFDSEwseUJBQWEsS0FBS0MsS0FBbEI7QUFDQSxpQkFBS0MsR0FBTCxDQUFTO0FBQ0xKLHNCQUFNO0FBREQsYUFBVDtBQUdIO0FBbEJJO0FBakJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBSRUQgfSBmcm9tICcuLi9jb21tb24vY29sb3InO1xuaW1wb3J0IHsgc2FmZUFyZWEgfSBmcm9tICcuLi9taXhpbnMvc2FmZS1hcmVhJztcblZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW3NhZmVBcmVhKCldLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRleHQ6IFN0cmluZyxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnI2ZmZidcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogUkVEXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMzAwMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNob3coKSB7XG4gICAgICAgICAgICBjb25zdCB7IGR1cmF0aW9uIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZHVyYXRpb24gPiAwICYmIGR1cmF0aW9uICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoaWRlKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19