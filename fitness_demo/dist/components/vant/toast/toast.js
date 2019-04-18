'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('./../common/utils.js');

var defaultOptions = {
    type: 'text',
    mask: false,
    message: '',
    show: true,
    zIndex: 1000,
    duration: 3000,
    position: 'middle',
    forbidClick: false,
    loadingType: 'circular',
    selector: '#van-toast'
};
var queue = [];
var currentOptions = Object.assign({}, defaultOptions);
function parseOptions(message) {
    return (0, _utils.isObj)(message) ? message : { message: message };
}
function getContext() {
    var pages = getCurrentPages();
    return pages[pages.length - 1];
}
var Toast = function Toast() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    options = Object.assign({}, currentOptions, parseOptions(options));
    var context = options.context || getContext();
    var toast = context.selectComponent(options.selector);
    if (!toast) {
        console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
        return;
    }
    delete options.context;
    delete options.selector;
    queue.push(toast);
    toast.set(options);
    clearTimeout(toast.timer);
    if (options.duration > 0) {
        toast.timer = setTimeout(function () {
            toast.clear();
            queue = queue.filter(function (item) {
                return item !== toast;
            });
        }, options.duration);
    }
    return toast;
};
var createMethod = function createMethod(type) {
    return function (options) {
        return Toast(Object.assign({ type: type }, parseOptions(options)));
    };
};
['loading', 'success', 'fail'].forEach(function (method) {
    Toast[method] = createMethod(method);
});
Toast.clear = function () {
    queue.forEach(function (toast) {
        toast.clear();
    });
    queue = [];
};
Toast.setDefaultOptions = function (options) {
    Object.assign(currentOptions, options);
};
Toast.resetDefaultOptions = function () {
    currentOptions = Object.assign({}, defaultOptions);
};
exports.default = Toast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRPcHRpb25zIiwidHlwZSIsIm1hc2siLCJtZXNzYWdlIiwic2hvdyIsInpJbmRleCIsImR1cmF0aW9uIiwicG9zaXRpb24iLCJmb3JiaWRDbGljayIsImxvYWRpbmdUeXBlIiwic2VsZWN0b3IiLCJxdWV1ZSIsImN1cnJlbnRPcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwicGFyc2VPcHRpb25zIiwiZ2V0Q29udGV4dCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwibGVuZ3RoIiwiVG9hc3QiLCJvcHRpb25zIiwiY29udGV4dCIsInRvYXN0Iiwic2VsZWN0Q29tcG9uZW50IiwiY29uc29sZSIsIndhcm4iLCJwdXNoIiwic2V0IiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJmaWx0ZXIiLCJpdGVtIiwiY3JlYXRlTWV0aG9kIiwiZm9yRWFjaCIsIm1ldGhvZCIsInNldERlZmF1bHRPcHRpb25zIiwicmVzZXREZWZhdWx0T3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsaUJBQWlCO0FBQ25CQyxVQUFNLE1BRGE7QUFFbkJDLFVBQU0sS0FGYTtBQUduQkMsYUFBUyxFQUhVO0FBSW5CQyxVQUFNLElBSmE7QUFLbkJDLFlBQVEsSUFMVztBQU1uQkMsY0FBVSxJQU5TO0FBT25CQyxjQUFVLFFBUFM7QUFRbkJDLGlCQUFhLEtBUk07QUFTbkJDLGlCQUFhLFVBVE07QUFVbkJDLGNBQVU7QUFWUyxDQUF2QjtBQVlBLElBQUlDLFFBQVEsRUFBWjtBQUNBLElBQUlDLGlCQUFpQkMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JkLGNBQWxCLENBQXJCO0FBQ0EsU0FBU2UsWUFBVCxDQUFzQlosT0FBdEIsRUFBK0I7QUFDM0IsV0FBTyxrQkFBTUEsT0FBTixJQUFpQkEsT0FBakIsR0FBMkIsRUFBRUEsZ0JBQUYsRUFBbEM7QUFDSDtBQUNELFNBQVNhLFVBQVQsR0FBc0I7QUFDbEIsUUFBTUMsUUFBUUMsaUJBQWQ7QUFDQSxXQUFPRCxNQUFNQSxNQUFNRSxNQUFOLEdBQWUsQ0FBckIsQ0FBUDtBQUNIO0FBQ0QsSUFBTUMsUUFBUSxTQUFSQSxLQUFRLEdBQWtCO0FBQUEsUUFBakJDLE9BQWlCLHVFQUFQLEVBQU87O0FBQzVCQSxjQUFVUixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkYsY0FBbEIsRUFBa0NHLGFBQWFNLE9BQWIsQ0FBbEMsQ0FBVjtBQUNBLFFBQU1DLFVBQVVELFFBQVFDLE9BQVIsSUFBbUJOLFlBQW5DO0FBQ0EsUUFBTU8sUUFBUUQsUUFBUUUsZUFBUixDQUF3QkgsUUFBUVgsUUFBaEMsQ0FBZDtBQUNBLFFBQUksQ0FBQ2EsS0FBTCxFQUFZO0FBQ1JFLGdCQUFRQyxJQUFSLENBQWEsOENBQWI7QUFDQTtBQUNIO0FBQ0QsV0FBT0wsUUFBUUMsT0FBZjtBQUNBLFdBQU9ELFFBQVFYLFFBQWY7QUFDQUMsVUFBTWdCLElBQU4sQ0FBV0osS0FBWDtBQUNBQSxVQUFNSyxHQUFOLENBQVVQLE9BQVY7QUFDQVEsaUJBQWFOLE1BQU1PLEtBQW5CO0FBQ0EsUUFBSVQsUUFBUWYsUUFBUixHQUFtQixDQUF2QixFQUEwQjtBQUN0QmlCLGNBQU1PLEtBQU4sR0FBY0MsV0FBVyxZQUFNO0FBQzNCUixrQkFBTVMsS0FBTjtBQUNBckIsb0JBQVFBLE1BQU1zQixNQUFOLENBQWE7QUFBQSx1QkFBUUMsU0FBU1gsS0FBakI7QUFBQSxhQUFiLENBQVI7QUFDSCxTQUhhLEVBR1hGLFFBQVFmLFFBSEcsQ0FBZDtBQUlIO0FBQ0QsV0FBT2lCLEtBQVA7QUFDSCxDQXBCRDtBQXFCQSxJQUFNWSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxXQUFRO0FBQUEsZUFBV2YsTUFBTVAsT0FBT0MsTUFBUCxDQUFjLEVBQUViLFVBQUYsRUFBZCxFQUF3QmMsYUFBYU0sT0FBYixDQUF4QixDQUFOLENBQVg7QUFBQSxLQUFSO0FBQUEsQ0FBckI7QUFDQSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLE1BQXZCLEVBQStCZSxPQUEvQixDQUF1QyxrQkFBVTtBQUM3Q2hCLFVBQU1pQixNQUFOLElBQWdCRixhQUFhRSxNQUFiLENBQWhCO0FBQ0gsQ0FGRDtBQUdBakIsTUFBTVksS0FBTixHQUFjLFlBQU07QUFDaEJyQixVQUFNeUIsT0FBTixDQUFjLGlCQUFTO0FBQ25CYixjQUFNUyxLQUFOO0FBQ0gsS0FGRDtBQUdBckIsWUFBUSxFQUFSO0FBQ0gsQ0FMRDtBQU1BUyxNQUFNa0IsaUJBQU4sR0FBMEIsbUJBQVc7QUFDakN6QixXQUFPQyxNQUFQLENBQWNGLGNBQWQsRUFBOEJTLE9BQTlCO0FBQ0gsQ0FGRDtBQUdBRCxNQUFNbUIsbUJBQU4sR0FBNEIsWUFBTTtBQUM5QjNCLHFCQUFpQkMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JkLGNBQWxCLENBQWpCO0FBQ0gsQ0FGRDtrQkFHZW9CLEsiLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc09iaiB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgbWFzazogZmFsc2UsXG4gICAgbWVzc2FnZTogJycsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgZHVyYXRpb246IDMwMDAsXG4gICAgcG9zaXRpb246ICdtaWRkbGUnLFxuICAgIGZvcmJpZENsaWNrOiBmYWxzZSxcbiAgICBsb2FkaW5nVHlwZTogJ2NpcmN1bGFyJyxcbiAgICBzZWxlY3RvcjogJyN2YW4tdG9hc3QnXG59O1xubGV0IHF1ZXVlID0gW107XG5sZXQgY3VycmVudE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyk7XG5mdW5jdGlvbiBwYXJzZU9wdGlvbnMobWVzc2FnZSkge1xuICAgIHJldHVybiBpc09iaihtZXNzYWdlKSA/IG1lc3NhZ2UgOiB7IG1lc3NhZ2UgfTtcbn1cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gICAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICByZXR1cm4gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XG59XG5jb25zdCBUb2FzdCA9IChvcHRpb25zID0ge30pID0+IHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudE9wdGlvbnMsIHBhcnNlT3B0aW9ucyhvcHRpb25zKSk7XG4gICAgY29uc3QgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCB8fCBnZXRDb250ZXh0KCk7XG4gICAgY29uc3QgdG9hc3QgPSBjb250ZXh0LnNlbGVjdENvbXBvbmVudChvcHRpb25zLnNlbGVjdG9yKTtcbiAgICBpZiAoIXRvYXN0KSB7XG4gICAgICAgIGNvbnNvbGUud2Fybign5pyq5om+5YiwIHZhbi10b2FzdCDoioLngrnvvIzor7fnoa7orqQgc2VsZWN0b3Ig5Y+KIGNvbnRleHQg5piv5ZCm5q2j56GuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGVsZXRlIG9wdGlvbnMuY29udGV4dDtcbiAgICBkZWxldGUgb3B0aW9ucy5zZWxlY3RvcjtcbiAgICBxdWV1ZS5wdXNoKHRvYXN0KTtcbiAgICB0b2FzdC5zZXQob3B0aW9ucyk7XG4gICAgY2xlYXJUaW1lb3V0KHRvYXN0LnRpbWVyKTtcbiAgICBpZiAob3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdG9hc3QudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRvYXN0LmNsZWFyKCk7XG4gICAgICAgICAgICBxdWV1ZSA9IHF1ZXVlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRvYXN0KTtcbiAgICAgICAgfSwgb3B0aW9ucy5kdXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB0b2FzdDtcbn07XG5jb25zdCBjcmVhdGVNZXRob2QgPSB0eXBlID0+IG9wdGlvbnMgPT4gVG9hc3QoT2JqZWN0LmFzc2lnbih7IHR5cGUgfSwgcGFyc2VPcHRpb25zKG9wdGlvbnMpKSk7XG5bJ2xvYWRpbmcnLCAnc3VjY2VzcycsICdmYWlsJ10uZm9yRWFjaChtZXRob2QgPT4ge1xuICAgIFRvYXN0W21ldGhvZF0gPSBjcmVhdGVNZXRob2QobWV0aG9kKTtcbn0pO1xuVG9hc3QuY2xlYXIgPSAoKSA9PiB7XG4gICAgcXVldWUuZm9yRWFjaCh0b2FzdCA9PiB7XG4gICAgICAgIHRvYXN0LmNsZWFyKCk7XG4gICAgfSk7XG4gICAgcXVldWUgPSBbXTtcbn07XG5Ub2FzdC5zZXREZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnMgPT4ge1xuICAgIE9iamVjdC5hc3NpZ24oY3VycmVudE9wdGlvbnMsIG9wdGlvbnMpO1xufTtcblRvYXN0LnJlc2V0RGVmYXVsdE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY3VycmVudE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7XG4iXX0=