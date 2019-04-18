'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isDef(value) {
    return value !== undefined && value !== null;
}
function isObj(x) {
    var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
    return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
    return (/^\d+$/.test(value)
    );
}
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
exports.isObj = isObj;
exports.isDef = isDef;
exports.isNumber = isNumber;
exports.range = range;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImlzRGVmIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJpc09iaiIsIngiLCJ0eXBlIiwiaXNOdW1iZXIiLCJ0ZXN0IiwicmFuZ2UiLCJudW0iLCJtaW4iLCJtYXgiLCJNYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNsQixXQUFPQSxVQUFVQyxTQUFWLElBQXVCRCxVQUFVLElBQXhDO0FBQ0g7QUFDRCxTQUFTRSxLQUFULENBQWVDLENBQWYsRUFBa0I7QUFDZCxRQUFNQyxjQUFjRCxDQUFkLHlDQUFjQSxDQUFkLENBQU47QUFDQSxXQUFPQSxNQUFNLElBQU4sS0FBZUMsU0FBUyxRQUFULElBQXFCQSxTQUFTLFVBQTdDLENBQVA7QUFDSDtBQUNELFNBQVNDLFFBQVQsQ0FBa0JMLEtBQWxCLEVBQXlCO0FBQ3JCLFdBQU8sU0FBUU0sSUFBUixDQUFhTixLQUFiO0FBQVA7QUFDSDtBQUNELFNBQVNPLEtBQVQsQ0FBZUMsR0FBZixFQUFvQkMsR0FBcEIsRUFBeUJDLEdBQXpCLEVBQThCO0FBQzFCLFdBQU9DLEtBQUtGLEdBQUwsQ0FBU0UsS0FBS0QsR0FBTCxDQUFTRixHQUFULEVBQWNDLEdBQWQsQ0FBVCxFQUE2QkMsR0FBN0IsQ0FBUDtBQUNIO1FBQ1FSLEssR0FBQUEsSztRQUFPSCxLLEdBQUFBLEs7UUFBT00sUSxHQUFBQSxRO1FBQVVFLEssR0FBQUEsSyIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGlzRGVmKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG5mdW5jdGlvbiBpc09iaih4KSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB4O1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIC9eXFxkKyQvLnRlc3QodmFsdWUpO1xufVxuZnVuY3Rpb24gcmFuZ2UobnVtLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG59XG5leHBvcnQgeyBpc09iaiwgaXNEZWYsIGlzTnVtYmVyLCByYW5nZSB9O1xuIl19