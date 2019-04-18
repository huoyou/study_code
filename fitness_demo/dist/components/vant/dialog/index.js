'use strict';

var _component = require('./../common/component.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _component.VantComponent)({
    mixins: [_button.button, _openType.openType],
    props: {
        show: Boolean,
        title: String,
        message: String,
        useSlot: Boolean,
        asyncClose: Boolean,
        messageAlign: String,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        zIndex: {
            type: Number,
            value: 2000
        },
        confirmButtonText: {
            type: String,
            value: '确认'
        },
        cancelButtonText: {
            type: String,
            value: '取消'
        },
        showConfirmButton: {
            type: Boolean,
            value: true
        },
        overlay: {
            type: Boolean,
            value: true
        },
        transition: {
            type: String,
            value: 'scale'
        }
    },
    data: {
        loading: {
            confirm: false,
            cancel: false
        }
    },
    watch: {
        show: function show(_show) {
            !_show && this.stopLoading();
        }
    },
    methods: {
        onConfirm: function onConfirm() {
            this.handleAction('confirm');
        },
        onCancel: function onCancel() {
            this.handleAction('cancel');
        },
        onClickOverlay: function onClickOverlay() {
            this.onClose('overlay');
        },
        handleAction: function handleAction(action) {
            if (this.data.asyncClose) {
                this.set(_defineProperty({}, 'loading.' + action, true));
            }
            this.onClose(action);
        },
        close: function close() {
            this.set({
                show: false
            });
        },
        stopLoading: function stopLoading() {
            this.set({
                loading: {
                    confirm: false,
                    cancel: false
                }
            });
        },
        onClose: function onClose(action) {
            if (!this.data.asyncClose) {
                this.close();
            }
            this.$emit('close', action);
            //把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading
            this.$emit(action, { dialog: this });
            var callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];
            if (callback) {
                callback(this);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImJ1dHRvbiIsIm9wZW5UeXBlIiwicHJvcHMiLCJzaG93IiwiQm9vbGVhbiIsInRpdGxlIiwiU3RyaW5nIiwibWVzc2FnZSIsInVzZVNsb3QiLCJhc3luY0Nsb3NlIiwibWVzc2FnZUFsaWduIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNsb3NlT25DbGlja092ZXJsYXkiLCJjb25maXJtQnV0dG9uT3BlblR5cGUiLCJ6SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJzaG93Q29uZmlybUJ1dHRvbiIsIm92ZXJsYXkiLCJ0cmFuc2l0aW9uIiwiZGF0YSIsImxvYWRpbmciLCJjb25maXJtIiwiY2FuY2VsIiwid2F0Y2giLCJzdG9wTG9hZGluZyIsIm1ldGhvZHMiLCJvbkNvbmZpcm0iLCJoYW5kbGVBY3Rpb24iLCJvbkNhbmNlbCIsIm9uQ2xpY2tPdmVybGF5Iiwib25DbG9zZSIsImFjdGlvbiIsInNldCIsImNsb3NlIiwiJGVtaXQiLCJkaWFsb2ciLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBLDhCQUFjO0FBQ1ZBLFlBQVEsQ0FBQ0MsY0FBRCxFQUFTQyxrQkFBVCxDQURFO0FBRVZDLFdBQU87QUFDSEMsY0FBTUMsT0FESDtBQUVIQyxlQUFPQyxNQUZKO0FBR0hDLGlCQUFTRCxNQUhOO0FBSUhFLGlCQUFTSixPQUpOO0FBS0hLLG9CQUFZTCxPQUxUO0FBTUhNLHNCQUFjSixNQU5YO0FBT0hLLDBCQUFrQlAsT0FQZjtBQVFIUSw2QkFBcUJSLE9BUmxCO0FBU0hTLCtCQUF1QlAsTUFUcEI7QUFVSFEsZ0JBQVE7QUFDSkMsa0JBQU1DLE1BREY7QUFFSkMsbUJBQU87QUFGSCxTQVZMO0FBY0hDLDJCQUFtQjtBQUNmSCxrQkFBTVQsTUFEUztBQUVmVyxtQkFBTztBQUZRLFNBZGhCO0FBa0JIRSwwQkFBa0I7QUFDZEosa0JBQU1ULE1BRFE7QUFFZFcsbUJBQU87QUFGTyxTQWxCZjtBQXNCSEcsMkJBQW1CO0FBQ2ZMLGtCQUFNWCxPQURTO0FBRWZhLG1CQUFPO0FBRlEsU0F0QmhCO0FBMEJISSxpQkFBUztBQUNMTixrQkFBTVgsT0FERDtBQUVMYSxtQkFBTztBQUZGLFNBMUJOO0FBOEJISyxvQkFBWTtBQUNSUCxrQkFBTVQsTUFERTtBQUVSVyxtQkFBTztBQUZDO0FBOUJULEtBRkc7QUFxQ1ZNLFVBQU07QUFDRkMsaUJBQVM7QUFDTEMscUJBQVMsS0FESjtBQUVMQyxvQkFBUTtBQUZIO0FBRFAsS0FyQ0k7QUEyQ1ZDLFdBQU87QUFDSHhCLFlBREcsZ0JBQ0VBLEtBREYsRUFDUTtBQUNQLGFBQUNBLEtBQUQsSUFBUyxLQUFLeUIsV0FBTCxFQUFUO0FBQ0g7QUFIRSxLQTNDRztBQWdEVkMsYUFBUztBQUNMQyxpQkFESyx1QkFDTztBQUNSLGlCQUFLQyxZQUFMLENBQWtCLFNBQWxCO0FBQ0gsU0FISTtBQUlMQyxnQkFKSyxzQkFJTTtBQUNQLGlCQUFLRCxZQUFMLENBQWtCLFFBQWxCO0FBQ0gsU0FOSTtBQU9MRSxzQkFQSyw0QkFPWTtBQUNiLGlCQUFLQyxPQUFMLENBQWEsU0FBYjtBQUNILFNBVEk7QUFVTEgsb0JBVkssd0JBVVFJLE1BVlIsRUFVZ0I7QUFDakIsZ0JBQUksS0FBS1osSUFBTCxDQUFVZCxVQUFkLEVBQTBCO0FBQ3RCLHFCQUFLMkIsR0FBTCxrQ0FDZ0JELE1BRGhCLEVBQzJCLElBRDNCO0FBR0g7QUFDRCxpQkFBS0QsT0FBTCxDQUFhQyxNQUFiO0FBQ0gsU0FqQkk7QUFrQkxFLGFBbEJLLG1CQWtCRztBQUNKLGlCQUFLRCxHQUFMLENBQVM7QUFDTGpDLHNCQUFNO0FBREQsYUFBVDtBQUdILFNBdEJJO0FBdUJMeUIsbUJBdkJLLHlCQXVCUztBQUNWLGlCQUFLUSxHQUFMLENBQVM7QUFDTFoseUJBQVM7QUFDTEMsNkJBQVMsS0FESjtBQUVMQyw0QkFBUTtBQUZIO0FBREosYUFBVDtBQU1ILFNBOUJJO0FBK0JMUSxlQS9CSyxtQkErQkdDLE1BL0JILEVBK0JXO0FBQ1osZ0JBQUksQ0FBQyxLQUFLWixJQUFMLENBQVVkLFVBQWYsRUFBMkI7QUFDdkIscUJBQUs0QixLQUFMO0FBQ0g7QUFDRCxpQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JILE1BQXBCO0FBQ0E7QUFDQSxpQkFBS0csS0FBTCxDQUFXSCxNQUFYLEVBQW1CLEVBQUVJLFFBQVEsSUFBVixFQUFuQjtBQUNBLGdCQUFNQyxXQUFXLEtBQUtqQixJQUFMLENBQVVZLFdBQVcsU0FBWCxHQUF1QixXQUF2QixHQUFxQyxVQUEvQyxDQUFqQjtBQUNBLGdCQUFJSyxRQUFKLEVBQWM7QUFDVkEseUJBQVMsSUFBVDtBQUNIO0FBQ0o7QUExQ0k7QUFoREMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4uL21peGlucy9idXR0b24nO1xuaW1wb3J0IHsgb3BlblR5cGUgfSBmcm9tICcuLi9taXhpbnMvb3Blbi10eXBlJztcblZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW2J1dHRvbiwgb3BlblR5cGVdLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3c6IEJvb2xlYW4sXG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgIG1lc3NhZ2U6IFN0cmluZyxcbiAgICAgICAgdXNlU2xvdDogQm9vbGVhbixcbiAgICAgICAgYXN5bmNDbG9zZTogQm9vbGVhbixcbiAgICAgICAgbWVzc2FnZUFsaWduOiBTdHJpbmcsXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IEJvb2xlYW4sXG4gICAgICAgIGNsb3NlT25DbGlja092ZXJsYXk6IEJvb2xlYW4sXG4gICAgICAgIGNvbmZpcm1CdXR0b25PcGVuVHlwZTogU3RyaW5nLFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAyMDAwXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ+ehruiupCdcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICflj5bmtognXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnc2NhbGUnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgbG9hZGluZzoge1xuICAgICAgICAgICAgY29uZmlybTogZmFsc2UsXG4gICAgICAgICAgICBjYW5jZWw6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHNob3coc2hvdykge1xuICAgICAgICAgICAgIXNob3cgJiYgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ29uZmlybSgpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWN0aW9uKCdjb25maXJtJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2FuY2VsKCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVBY3Rpb24oJ2NhbmNlbCcpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrT3ZlcmxheSgpIHtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSgnb3ZlcmxheScpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVBY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmFzeW5jQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIFtgbG9hZGluZy4ke2FjdGlvbn1gXTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKGFjdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcExvYWRpbmcoKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsb3NlKGFjdGlvbikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuYXN5bmNDbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJywgYWN0aW9uKTtcbiAgICAgICAgICAgIC8v5oqKIGRpYWxvZyDlrp7kvovkvKDpgJLlh7rljrvvvIzlj6/ku6XpgJrov4cgc3RvcExvYWRpbmcoKSDlnKjlpJbpg6jlhbPpl63mjInpkq7nmoQgbG9hZGluZ1xuICAgICAgICAgICAgdGhpcy4kZW1pdChhY3Rpb24sIHsgZGlhbG9nOiB0aGlzIH0pO1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLmRhdGFbYWN0aW9uID09PSAnY29uZmlybScgPyAnb25Db25maXJtJyA6ICdvbkNhbmNlbCddO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==