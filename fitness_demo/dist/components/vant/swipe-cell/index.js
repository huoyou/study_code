'use strict';

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

var THRESHOLD = 0.3;
(0, _component.VantComponent)({
    props: {
        disabled: Boolean,
        leftWidth: {
            type: Number,
            value: 0
        },
        rightWidth: {
            type: Number,
            value: 0
        },
        asyncClose: Boolean
    },
    mixins: [_touch.touch],
    data: {
        catchMove: true
    },
    created: function created() {
        this.offset = 0;
    },

    methods: {
        open: function open(position) {
            var _data = this.data,
                leftWidth = _data.leftWidth,
                rightWidth = _data.rightWidth;

            var offset = position === 'left' ? leftWidth : -rightWidth;
            this.swipeMove(offset);
        },
        close: function close() {
            this.swipeMove(0);
        },
        swipeMove: function swipeMove() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this.offset = offset;
            var transform = 'translate3d(' + offset + 'px, 0, 0)';
            var transition = this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)';
            this.set({
                wrapperStyle: '\n        -webkit-transform: ' + transform + ';\n        -webkit-transition: ' + transition + ';\n        transform: ' + transform + ';\n        transition: ' + transition + ';\n      '
            });
        },
        swipeLeaveTransition: function swipeLeaveTransition() {
            var _data2 = this.data,
                leftWidth = _data2.leftWidth,
                rightWidth = _data2.rightWidth;
            var offset = this.offset;

            if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
                this.open('right');
            } else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
                this.open('left');
            } else {
                this.swipeMove(0);
            }
        },
        startDrag: function startDrag(event) {
            if (this.data.disabled) {
                return;
            }
            this.draging = true;
            this.startOffset = this.offset;
            this.firstDirection = '';
            this.touchStart(event);
        },
        noop: function noop() {},
        onDrag: function onDrag(event) {
            if (this.data.disabled) {
                return;
            }
            this.touchMove(event);
            if (!this.firstDirection) {
                this.firstDirection = this.direction;
                this.set({ catchMove: this.firstDirection === 'horizontal' });
            }
            if (this.firstDirection === 'vertical') {
                return;
            }
            var _data3 = this.data,
                leftWidth = _data3.leftWidth,
                rightWidth = _data3.rightWidth;

            var offset = this.startOffset + this.deltaX;
            if (rightWidth > 0 && -offset > rightWidth || leftWidth > 0 && offset > leftWidth) {
                return;
            }
            this.swipeMove(offset);
        },
        endDrag: function endDrag() {
            if (this.data.disabled) {
                return;
            }
            this.draging = false;
            this.swipeLeaveTransition();
        },
        onClick: function onClick(event) {
            var _event$currentTarget$ = event.currentTarget.dataset.key,
                position = _event$currentTarget$ === undefined ? 'outside' : _event$currentTarget$;

            this.$emit('click', position);
            if (!this.offset) {
                return;
            }
            if (this.data.asyncClose) {
                this.$emit('close', { position: position, instance: this });
            } else {
                this.swipeMove(0);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRIUkVTSE9MRCIsInByb3BzIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibGVmdFdpZHRoIiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwicmlnaHRXaWR0aCIsImFzeW5jQ2xvc2UiLCJtaXhpbnMiLCJ0b3VjaCIsImRhdGEiLCJjYXRjaE1vdmUiLCJjcmVhdGVkIiwib2Zmc2V0IiwibWV0aG9kcyIsIm9wZW4iLCJwb3NpdGlvbiIsInN3aXBlTW92ZSIsImNsb3NlIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsImRyYWdpbmciLCJzZXQiLCJ3cmFwcGVyU3R5bGUiLCJzd2lwZUxlYXZlVHJhbnNpdGlvbiIsInN0YXJ0RHJhZyIsImV2ZW50Iiwic3RhcnRPZmZzZXQiLCJmaXJzdERpcmVjdGlvbiIsInRvdWNoU3RhcnQiLCJub29wIiwib25EcmFnIiwidG91Y2hNb3ZlIiwiZGlyZWN0aW9uIiwiZGVsdGFYIiwiZW5kRHJhZyIsIm9uQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImtleSIsIiRlbWl0IiwiaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsSUFBTUEsWUFBWSxHQUFsQjtBQUNBLDhCQUFjO0FBQ1ZDLFdBQU87QUFDSEMsa0JBQVVDLE9BRFA7QUFFSEMsbUJBQVc7QUFDUEMsa0JBQU1DLE1BREM7QUFFUEMsbUJBQU87QUFGQSxTQUZSO0FBTUhDLG9CQUFZO0FBQ1JILGtCQUFNQyxNQURFO0FBRVJDLG1CQUFPO0FBRkMsU0FOVDtBQVVIRSxvQkFBWU47QUFWVCxLQURHO0FBYVZPLFlBQVEsQ0FBQ0MsWUFBRCxDQWJFO0FBY1ZDLFVBQU07QUFDRkMsbUJBQVc7QUFEVCxLQWRJO0FBaUJWQyxXQWpCVSxxQkFpQkE7QUFDTixhQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNILEtBbkJTOztBQW9CVkMsYUFBUztBQUNMQyxZQURLLGdCQUNBQyxRQURBLEVBQ1U7QUFBQSx3QkFDdUIs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QXpFSTtBQTBFTFksZUExRUssbUJBMEVHVixLQTFFSCxFQTBFVTtBQUFBLHdDQUMyQkEsTUFBTVcsYUFBTixDQUFvQkMsT0FEL0MsQ0FDSEMsR0FERztBQUFBLGdCQUNFdkIsUUFERix5Q0FDYSxTQURiOztBQUVYLGlCQUFLd0IsS0FBTCxDQUFXLE9BQVgsRUFBb0J4QixRQUFwQjtBQUNBLGdCQUFJLENBQUMsS0FBS0gsTUFBVixFQUFrQjtBQUNkO0FBQ0g7QUFDRCxnQkFBSSxLQUFLSCxJQUFMLENBQVVILFVBQWQsRUFBMEI7QUFDdEIscUJBQUtpQyxLQUFMLENBQVcsT0FBWCxFQUFvQixFQUFFeEIsa0JBQUYsRUFBWXlCLFVBQVUsSUFBdEIsRUFBcEI7QUFDSCxhQUZELE1BR0s7QUFDRCxxQkFBS3hCLFNBQUwsQ0FBZSxDQUFmO0FBQ0g7QUFDSjtBQXRGSTtBQXBCQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgdG91Y2ggfSBmcm9tICcuLi9taXhpbnMvdG91Y2gnO1xuY29uc3QgVEhSRVNIT0xEID0gMC4zO1xuVmFudENvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGxlZnRXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgcmlnaHRXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmNDbG9zZTogQm9vbGVhblxuICAgIH0sXG4gICAgbWl4aW5zOiBbdG91Y2hdLFxuICAgIGRhdGE6IHtcbiAgICAgICAgY2F0Y2hNb3ZlOiB0cnVlXG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9wZW4ocG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdFdpZHRoLCByaWdodFdpZHRoIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBwb3NpdGlvbiA9PT0gJ2xlZnQnID8gbGVmdFdpZHRoIDogLXJpZ2h0V2lkdGg7XG4gICAgICAgICAgICB0aGlzLnN3aXBlTW92ZShvZmZzZXQpO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKDApO1xuICAgICAgICB9LFxuICAgICAgICBzd2lwZU1vdmUob2Zmc2V0ID0gMCkge1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtvZmZzZXR9cHgsIDAsIDApYDtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSB0aGlzLmRyYWdpbmdcbiAgICAgICAgICAgICAgICA/ICdub25lJ1xuICAgICAgICAgICAgICAgIDogJy42cyBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMSknO1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHdyYXBwZXJTdHlsZTogYFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogJHt0cmFuc2Zvcm19O1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICR7dHJhbnNpdGlvbn07XG4gICAgICAgIHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19O1xuICAgICAgICB0cmFuc2l0aW9uOiAke3RyYW5zaXRpb259O1xuICAgICAgYFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN3aXBlTGVhdmVUcmFuc2l0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgeyBsZWZ0V2lkdGgsIHJpZ2h0V2lkdGggfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHJpZ2h0V2lkdGggPiAwICYmIC1vZmZzZXQgPiByaWdodFdpZHRoICogVEhSRVNIT0xEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCdyaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGVmdFdpZHRoID4gMCAmJiBvZmZzZXQgPiBsZWZ0V2lkdGggKiBUSFJFU0hPTEQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oJ2xlZnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdGFydERyYWcoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYWdpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdGFydE9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5maXJzdERpcmVjdGlvbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy50b3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgbm9vcCgpIHsgfSxcbiAgICAgICAgb25EcmFnKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50b3VjaE1vdmUoZXZlbnQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpcnN0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdERpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHsgY2F0Y2hNb3ZlOiB0aGlzLmZpcnN0RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdERpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdFdpZHRoLCByaWdodFdpZHRoIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLnN0YXJ0T2Zmc2V0ICsgdGhpcy5kZWx0YVg7XG4gICAgICAgICAgICBpZiAoKHJpZ2h0V2lkdGggPiAwICYmIC1vZmZzZXQgPiByaWdodFdpZHRoKSB8fFxuICAgICAgICAgICAgICAgIChsZWZ0V2lkdGggPiAwICYmIG9mZnNldCA+IGxlZnRXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN3aXBlTW92ZShvZmZzZXQpO1xuICAgICAgICB9LFxuICAgICAgICBlbmREcmFnKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zd2lwZUxlYXZlVHJhbnNpdGlvbigpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGtleTogcG9zaXRpb24gPSAnb3V0c2lkZScgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgcG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9mZnNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuYXN5bmNDbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJywgeyBwb3NpdGlvbiwgaW5zdGFuY2U6IHRoaXMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXBlTW92ZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19