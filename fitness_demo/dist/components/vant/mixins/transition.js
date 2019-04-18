'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transition = undefined;

var _utils = require('./../common/utils.js');

var getClassNames = function getClassNames(name) {
    return {
        enter: 'van-' + name + '-enter van-' + name + '-enter-active enter-class enter-active-class',
        'enter-to': 'van-' + name + '-enter-to van-' + name + '-enter-active enter-to-class enter-active-class',
        leave: 'van-' + name + '-leave van-' + name + '-leave-active leave-class leave-active-class',
        'leave-to': 'van-' + name + '-leave-to van-' + name + '-leave-active leave-to-class leave-active-class'
    };
};
var nextTick = function nextTick() {
    return new Promise(function (resolve) {
        return setTimeout(resolve, 1000 / 30);
    });
};
var transition = exports.transition = function transition(showDefaultValue) {
    return Behavior({
        properties: {
            customStyle: String,
            show: {
                type: Boolean,
                value: showDefaultValue,
                observer: 'observeShow'
            },
            duration: {
                type: [Number, Object],
                value: 300,
                observer: 'observeDuration'
            },
            name: {
                type: String,
                value: 'fade',
                observer: 'updateClasses'
            }
        },
        data: {
            type: '',
            inited: false,
            display: false,
            classNames: getClassNames('fade')
        },
        attached: function attached() {
            if (this.data.show) {
                this.show();
            }
        },

        methods: {
            observeShow: function observeShow(value) {
                if (value) {
                    this.show();
                } else {
                    this.leave();
                }
            },
            updateClasses: function updateClasses(name) {
                this.set({
                    classNames: getClassNames(name)
                });
            },
            show: function show() {
                var _this = this;

                var _data = this.data,
                    classNames = _data.classNames,
                    duration = _data.duration;

                var currentDuration = (0, _utils.isObj)(duration) ? duration.leave : duration;
                Promise.resolve().then(nextTick).then(function () {
                    return _this.set({
                        inited: true,
                        display: true,
                        classes: classNames.enter,
                        currentDuration: currentDuration
                    });
                }).then(nextTick).then(function () {
                    return _this.set({
                        classes: classNames['enter-to']
                    });
                });
            },
            leave: function leave() {
                var _this2 = this;

                var _data2 = this.data,
                    classNames = _data2.classNames,
                    duration = _data2.duration;

                var currentDuration = (0, _utils.isObj)(duration) ? duration.leave : duration;
                if (+currentDuration === 0) {
                    this.onTransitionEnd();
                    return;
                }
                Promise.resolve().then(nextTick).then(function () {
                    return _this2.set({
                        classes: classNames.leave,
                        currentDuration: currentDuration
                    });
                }).then(nextTick).then(function () {
                    return _this2.set({
                        classes: classNames['leave-to']
                    });
                });
            },
            onTransitionEnd: function onTransitionEnd() {
                if (!this.data.show) {
                    this.set({ display: false });
                    this.$emit('transitionEnd');
                }
            }
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zaXRpb24uanMiXSwibmFtZXMiOlsiZ2V0Q2xhc3NOYW1lcyIsIm5hbWUiLCJlbnRlciIsImxlYXZlIiwibmV4dFRpY2siLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJ0cmFuc2l0aW9uIiwic2hvd0RlZmF1bHRWYWx1ZSIsIkJlaGF2aW9yIiwicHJvcGVydGllcyIsImN1c3RvbVN0eWxlIiwiU3RyaW5nIiwic2hvdyIsInR5cGUiLCJCb29sZWFuIiwidmFsdWUiLCJvYnNlcnZlciIsImR1cmF0aW9uIiwiTnVtYmVyIiwiT2JqZWN0IiwiZGF0YSIsImluaXRlZCIsImRpc3BsYXkiLCJjbGFzc05hbWVzIiwiYXR0YWNoZWQiLCJtZXRob2RzIiwib2JzZXJ2ZVNob3ciLCJ1cGRhdGVDbGFzc2VzIiwic2V0IiwiY3VycmVudER1cmF0aW9uIiwidGhlbiIsImNsYXNzZXMiLCJvblRyYW5zaXRpb25FbmQiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRDtBQUFBLFdBQVc7QUFDN0JDLHdCQUFjRCxJQUFkLG1CQUFnQ0EsSUFBaEMsaURBRDZCO0FBRTdCLDZCQUFtQkEsSUFBbkIsc0JBQXdDQSxJQUF4QyxvREFGNkI7QUFHN0JFLHdCQUFjRixJQUFkLG1CQUFnQ0EsSUFBaEMsaURBSDZCO0FBSTdCLDZCQUFtQkEsSUFBbkIsc0JBQXdDQSxJQUF4QztBQUo2QixLQUFYO0FBQUEsQ0FBdEI7QUFNQSxJQUFNRyxXQUFXLFNBQVhBLFFBQVc7QUFBQSxXQUFNLElBQUlDLE9BQUosQ0FBWTtBQUFBLGVBQVdDLFdBQVdDLE9BQVgsRUFBb0IsT0FBTyxFQUEzQixDQUFYO0FBQUEsS0FBWixDQUFOO0FBQUEsQ0FBakI7QUFDTyxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhLENBQVVDLGdCQUFWLEVBQTRCO0FBQ2xELFdBQU9DLFNBQVM7QUFDWkMsb0JBQVk7QUFDUkMs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QkFBS1csS0FBTCxDQUFXLGVBQVg7QUFDSDtBQUNKO0FBckRJO0FBOUJHLEtBQVQsQ0FBUDtBQXNGSCxDQXZGTSIsImZpbGUiOiJ0cmFuc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNPYmogfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuY29uc3QgZ2V0Q2xhc3NOYW1lcyA9IChuYW1lKSA9PiAoe1xuICAgIGVudGVyOiBgdmFuLSR7bmFtZX0tZW50ZXIgdmFuLSR7bmFtZX0tZW50ZXItYWN0aXZlIGVudGVyLWNsYXNzIGVudGVyLWFjdGl2ZS1jbGFzc2AsXG4gICAgJ2VudGVyLXRvJzogYHZhbi0ke25hbWV9LWVudGVyLXRvIHZhbi0ke25hbWV9LWVudGVyLWFjdGl2ZSBlbnRlci10by1jbGFzcyBlbnRlci1hY3RpdmUtY2xhc3NgLFxuICAgIGxlYXZlOiBgdmFuLSR7bmFtZX0tbGVhdmUgdmFuLSR7bmFtZX0tbGVhdmUtYWN0aXZlIGxlYXZlLWNsYXNzIGxlYXZlLWFjdGl2ZS1jbGFzc2AsXG4gICAgJ2xlYXZlLXRvJzogYHZhbi0ke25hbWV9LWxlYXZlLXRvIHZhbi0ke25hbWV9LWxlYXZlLWFjdGl2ZSBsZWF2ZS10by1jbGFzcyBsZWF2ZS1hY3RpdmUtY2xhc3NgXG59KTtcbmNvbnN0IG5leHRUaWNrID0gKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDAgLyAzMCkpO1xuZXhwb3J0IGNvbnN0IHRyYW5zaXRpb24gPSBmdW5jdGlvbiAoc2hvd0RlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiBCZWhhdmlvcih7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2hvd0RlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICBvYnNlcnZlcjogJ29ic2VydmVTaG93J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogW051bWJlciwgT2JqZWN0XSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogMzAwLFxuICAgICAgICAgICAgICAgIG9ic2VydmVyOiAnb2JzZXJ2ZUR1cmF0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmYWRlJyxcbiAgICAgICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNsYXNzZXMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6ICcnLFxuICAgICAgICAgICAgaW5pdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgY2xhc3NOYW1lczogZ2V0Q2xhc3NOYW1lcygnZmFkZScpXG4gICAgICAgIH0sXG4gICAgICAgIGF0dGFjaGVkKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5zaG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9ic2VydmVTaG93KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWF2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGVDbGFzc2VzKG5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM6IGdldENsYXNzTmFtZXMobmFtZSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lcywgZHVyYXRpb24gfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RHVyYXRpb24gPSBpc09iaihkdXJhdGlvbikgPyBkdXJhdGlvbi5sZWF2ZSA6IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG5leHRUaWNrKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIGluaXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NOYW1lcy5lbnRlcixcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudER1cmF0aW9uXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG5leHRUaWNrKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXNbJ2VudGVyLXRvJ11cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVhdmUoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBjbGFzc05hbWVzLCBkdXJhdGlvbiB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREdXJhdGlvbiA9IGlzT2JqKGR1cmF0aW9uKSA/IGR1cmF0aW9uLmxlYXZlIDogZHVyYXRpb247XG4gICAgICAgICAgICAgICAgaWYgKCtjdXJyZW50RHVyYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihuZXh0VGljaylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBjbGFzc05hbWVzLmxlYXZlLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHVyYXRpb25cbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obmV4dFRpY2spXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NOYW1lc1snbGVhdmUtdG8nXVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuc2hvdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldCh7IGRpc3BsYXk6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuIl19