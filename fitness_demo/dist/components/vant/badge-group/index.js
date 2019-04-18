'use strict';

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    relation: {
        name: 'badge',
        type: 'descendant',
        linked: function linked(target) {
            this.badges.push(target);
            this.setActive();
        },
        unlinked: function unlinked(target) {
            this.badges = this.badges.filter(function (item) {
                return item !== target;
            });
            this.setActive();
        }
    },
    props: {
        active: {
            type: Number,
            value: 0
        }
    },
    watch: {
        active: 'setActive'
    },
    beforeCreate: function beforeCreate() {
        this.badges = [];
        this.currentActive = -1;
    },

    methods: {
        setActive: function setActive(badge) {
            var active = this.data.active;
            var badges = this.badges;

            if (badge && !(0, _utils.isNumber)(badge)) {
                active = badges.indexOf(badge);
            }
            if (active === this.currentActive) {
                return;
            }
            if (this.currentActive !== -1 && badges[this.currentActive]) {
                this.$emit('change', active);
                badges[this.currentActive].setActive(false);
            }
            if (badges[active]) {
                badges[active].setActive(true);
                this.currentActive = active;
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJiYWRnZXMiLCJwdXNoIiwic2V0QWN0aXZlIiwidW5saW5rZWQiLCJmaWx0ZXIiLCJpdGVtIiwicHJvcHMiLCJhY3RpdmUiLCJOdW1iZXIiLCJ2YWx1ZSIsIndhdGNoIiwiYmVmb3JlQ3JlYXRlIiwiY3VycmVudEFjdGl2ZSIsIm1ldGhvZHMiLCJiYWRnZSIsImRhdGEiLCJpbmRleE9mIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsY0FBVTtBQUNOQyxjQUFNLE9BREE7QUFFTkMsY0FBTSxZQUZBO0FBR05DLGNBSE0sa0JBR0NDLE1BSEQsRUFHUztBQUNYLGlCQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUJGLE1BQWpCO0FBQ0EsaUJBQUtHLFNBQUw7QUFDSCxTQU5LO0FBT05DLGdCQVBNLG9CQU9HSixNQVBILEVBT1c7QUFDYixpQkFBS0MsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUksTUFBWixDQUFtQjtBQUFBLHVCQUFRQyxTQUFTTixNQUFqQjtBQUFBLGFBQW5CLENBQWQ7QUFDQSxpQkFBS0csU0FBTDtBQUNIO0FBVkssS0FEQTtBQWFWSSxXQUFPO0FBQ0hDLGdCQUFRO0FBQ0pWLGtCQUFNVyxNQURGO0FBRUpDLG1CQUFPO0FBRkg7QUFETCxLQWJHO0FBbUJWQyxXQUFPO0FBQ0hILGdCQUFRO0FBREwsS0FuQkc7QUFzQlZJLGdCQXRCVSwwQkFzQks7QUFDWCxhQUFLWCxNQUFMLEdBQWMsRUFBZDtBQUNBLGFBQUtZLGFBQUwsR0FBcUIsQ0FBQyxDQUF0QjtBQUNILEtBekJTOztBQTBCVkMsYUFBUztBQUNMWCxpQkFESyxxQkFDS1ksS0FETCxFQUNZO0FBQUEsZ0JBQ1BQLE1BRE8sR0FDSSxLQUFLUSxJQURULENBQ1BSLE1BRE87QUFBQSxnQkFFTFAsTUFGSyxHQUVNLElBRk4sQ0FFTEEsTUFGSzs7QUFHYixnQkFBSWMsU0FBUyxDQUFDLHFCQUFTQSxLQUFULENBQWQsRUFBK0I7QUFDM0JQLHlCQUFTUCxPQUFPZ0IsT0FBUCxDQUFlRixLQUFmLENBQVQ7QUFDSDtBQUNELGdCQUFJUCxXQUFXLEtBQUtLLGFBQXBCLEVBQW1DO0FBQy9CO0FBQ0g7QUFDRCxnQkFBSSxLQUFLQSxhQUFMLEtBQXVCLENBQUMsQ0FBeEIsSUFBNkJaLE9BQU8sS0FBS1ksYUFBWixDQUFqQyxFQUE2RDtBQUN6RCxxQkFBS0ssS0FBTCxDQUFXLFFBQVgsRUFBcUJWLE1BQXJCO0FBQ0FQLHVCQUFPLEtBQUtZLGFBQVosRUFBMkJWLFNBQTNCLENBQXFDLEtBQXJDO0FBQ0g7QUFDRCxnQkFBSUYsT0FBT08sTUFBUCxDQUFKLEVBQW9CO0FBQ2hCUCx1QkFBT08sTUFBUCxFQUFlTCxTQUFmLENBQXlCLElBQXpCO0FBQ0EscUJBQUtVLGFBQUwsR0FBcUJMLE1BQXJCO0FBQ0g7QUFDSjtBQWxCSTtBQTFCQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2JhZGdlJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmJhZGdlcy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICB1bmxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFkZ2VzID0gdGhpcy5iYWRnZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgYWN0aXZlOiAnc2V0QWN0aXZlJ1xuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICB0aGlzLmJhZGdlcyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmUgPSAtMTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0QWN0aXZlKGJhZGdlKSB7XG4gICAgICAgICAgICBsZXQgeyBhY3RpdmUgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgYmFkZ2VzIH0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGJhZGdlICYmICFpc051bWJlcihiYWRnZSkpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSBiYWRnZXMuaW5kZXhPZihiYWRnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWN0aXZlID09PSB0aGlzLmN1cnJlbnRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QWN0aXZlICE9PSAtMSAmJiBiYWRnZXNbdGhpcy5jdXJyZW50QWN0aXZlXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgYmFkZ2VzW3RoaXMuY3VycmVudEFjdGl2ZV0uc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYWRnZXNbYWN0aXZlXSkge1xuICAgICAgICAgICAgICAgIGJhZGdlc1thY3RpdmVdLnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==