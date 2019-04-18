'use strict';

var _component = require('./../common/component.js');

var nextTick = function nextTick() {
    return new Promise(function (resolve) {
        return setTimeout(resolve, 20);
    });
};
(0, _component.VantComponent)({
    classes: ['title-class', 'content-class'],
    relation: {
        name: 'collapse',
        type: 'ancestor',
        linked: function linked(parent) {
            this.parent = parent;
        }
    },
    props: {
        name: null,
        title: null,
        value: null,
        icon: String,
        label: String,
        disabled: Boolean,
        border: {
            type: Boolean,
            value: true
        },
        isLink: {
            type: Boolean,
            value: true
        }
    },
    data: {
        contentHeight: 0,
        expanded: false,
        transition: false
    },
    mounted: function mounted() {
        var _this = this;

        this.updateExpanded().then(nextTick).then(function () {
            _this.set({ transition: true });
        });
    },

    methods: {
        updateExpanded: function updateExpanded() {
            if (!this.parent) {
                return Promise.resolve();
            }
            var _parent$data = this.parent.data,
                value = _parent$data.value,
                accordion = _parent$data.accordion;
            var _parent$children = this.parent.children,
                children = _parent$children === undefined ? [] : _parent$children;
            var name = this.data.name;

            var index = children.indexOf(this);
            var currentName = name == null ? index : name;
            var expanded = accordion ? value === currentName : (value || []).some(function (name) {
                return name === currentName;
            });
            var stack = [];
            if (expanded !== this.data.expanded) {
                stack.push(this.updateStyle(expanded));
            }
            stack.push(this.set({ index: index, expanded: expanded }));
            return Promise.all(stack);
        },
        updateStyle: function updateStyle(expanded) {
            var _this2 = this;

            return this.getRect('.van-collapse-item__content').then(function (rect) {
                return rect.height;
            }).then(function (height) {
                if (expanded) {
                    return _this2.set({
                        contentHeight: height ? height + 'px' : 'auto'
                    });
                } else {
                    return _this2.set({ contentHeight: height + 'px' }).then(nextTick).then(function () {
                        return _this2.set({ contentHeight: 0 });
                    });
                }
            });
        },
        onClick: function onClick() {
            if (this.data.disabled) {
                return;
            }
            var _data = this.data,
                name = _data.name,
                expanded = _data.expanded;

            var index = this.parent.children.indexOf(this);
            var currentName = name == null ? index : name;
            this.parent.switch(currentName, !expanded);
        },
        onTransitionEnd: function onTransitionEnd() {
            if (this.data.expanded) {
                this.set({
                    contentHeight: 'auto'
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm5leHRUaWNrIiwiUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiY2xhc3NlcyIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJwYXJlbnQiLCJwcm9wcyIsInRpdGxlIiwidmFsdWUiLCJpY29uIiwiU3RyaW5nIiwibGFiZWwiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJib3JkZXIiLCJpc0xpbmsiLCJkYXRhIiwiY29udGVudEhlaWdodCIsImV4cGFuZGVkIiwidHJhbnNpdGlvbiIsIm1vdW50ZWQiLCJ1cGRhdGVFeHBhbmRlZCIsInRoZW4iLCJzZXQiLCJtZXRob2RzIiwiYWNjb3JkaW9uIiwiY2hpbGRyZW4iLCJpbmRleCIsImluZGV4T2YiLCJjdXJyZW50TmFtZSIsInNvbWUiLCJzdGFjayIsInB1c2giLCJ1cGRhdGVTdHlsZSIsImFsbCIsImdldFJlY3QiLCJyZWN0IiwiaGVpZ2h0Iiwib25DbGljayIsInN3aXRjaCIsIm9uVHJhbnNpdGlvbkVuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxXQUFNLElBQUlDLE9BQUosQ0FBWTtBQUFBLGVBQVdDLFdBQVdDLE9BQVgsRUFBb0IsRUFBcEIsQ0FBWDtBQUFBLEtBQVosQ0FBTjtBQUFBLENBQWpCO0FBQ0EsOEJBQWM7QUFDVkMsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsZUFBaEIsQ0FEQztBQUVWQyxjQUFVO0FBQ05DLGNBQU0sVUFEQTtBQUVOQyxjQUFNLFVBRkE7QUFHTkMsY0FITSxrQkFHQ0MsTUFIRCxFQUdTO0FBQ1gsaUJBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIO0FBTEssS0FGQTtBQVNWQyxXQUFPO0FBQ0hKLGNBQU0sSUFESDtBQUVISyxlQUFPLElBRko7QUFHSEMsZUFBTyxJQUhKO0FBSUhDLGNBQU1DLE1BSkg7QUFLSEMsZUFBT0QsTUFMSjtBQU1IRSxrQkFBVUMsT0FOUDtB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QixDQUE2QixJQUE3QixDQUFkO0FBQ0EsZ0JBQU1DLGNBQWMzQixRQUFRLElBQVIsR0FBZXlCLEtBQWYsR0FBdUJ6QixJQUEzQztBQUNBLGlCQUFLRyxNQUFMLENBQVlrQyxNQUFaLENBQW1CVixXQUFuQixFQUFnQyxDQUFDWCxRQUFqQztBQUNILFNBNUNJO0FBNkNMc0IsdUJBN0NLLDZCQTZDYTtBQUNkLGdCQUFJLEtBQUt4QixJQUFMLENBQVVFLFFBQWQsRUFBd0I7QUFDcEIscUJBQUtLLEdBQUwsQ0FBUztBQUNMTixtQ0FBZTtBQURWLGlCQUFUO0FBR0g7QUFDSjtBQW5ESTtBQXJDQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuY29uc3QgbmV4dFRpY2sgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjApKTtcblZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFsndGl0bGUtY2xhc3MnLCAnY29udGVudC1jbGFzcyddLFxuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdjb2xsYXBzZScsXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXG4gICAgICAgIGxpbmtlZChwYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGlzTGluazoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgY29udGVudEhlaWdodDogMCxcbiAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICB0cmFuc2l0aW9uOiBmYWxzZVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVFeHBhbmRlZCgpXG4gICAgICAgICAgICAudGhlbihuZXh0VGljaylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdHJhbnNpdGlvbjogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUV4cGFuZGVkKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIGFjY29yZGlvbiB9ID0gdGhpcy5wYXJlbnQuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROYW1lID0gbmFtZSA9PSBudWxsID8gaW5kZXggOiBuYW1lO1xuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBhY2NvcmRpb25cbiAgICAgICAgICAgICAgICA/IHZhbHVlID09PSBjdXJyZW50TmFtZVxuICAgICAgICAgICAgICAgIDogKHZhbHVlIHx8IFtdKS5zb21lKChuYW1lKSA9PiBuYW1lID09PSBjdXJyZW50TmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICAgICAgaWYgKGV4cGFuZGVkICE9PSB0aGlzLmRhdGEuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHRoaXMudXBkYXRlU3R5bGUoZXhwYW5kZWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5zZXQoeyBpbmRleCwgZXhwYW5kZWQgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlU3R5bGUoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlY3QoJy52YW4tY29sbGFwc2UtaXRlbV9fY29udGVudCcpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlY3QpID0+IHJlY3QuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIC50aGVuKChoZWlnaHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRIZWlnaHQ6IGhlaWdodCA/IGAke2hlaWdodH1weGAgOiAnYXV0bydcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoeyBjb250ZW50SGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihuZXh0VGljaylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0KHsgY29udGVudEhlaWdodDogMCB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCBleHBhbmRlZCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE5hbWUgPSBuYW1lID09IG51bGwgPyBpbmRleCA6IG5hbWU7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5zd2l0Y2goY3VycmVudE5hbWUsICFleHBhbmRlZCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRIZWlnaHQ6ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=