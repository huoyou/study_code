'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        type: 'ancestor',
        name: 'badge-group'
    },
    props: {
        info: null,
        title: String
    },
    methods: {
        onClick: function onClick() {
            var group = this.getRelationNodes('../badge-group/index')[0];
            if (group) {
                group.setActive(this);
            }
        },
        setActive: function setActive(active) {
            this.set({ active: active });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwidHlwZSIsIm5hbWUiLCJwcm9wcyIsImluZm8iLCJ0aXRsZSIsIlN0cmluZyIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZ3JvdXAiLCJnZXRSZWxhdGlvbk5vZGVzIiwic2V0QWN0aXZlIiwiYWN0aXZlIiwic2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLGNBQVU7QUFDTkMsY0FBTSxVQURBO0FBRU5DLGNBQU07QUFGQSxLQURBO0FBS1ZDLFdBQU87QUFDSEMsY0FBTSxJQURIO0FBRUhDLGVBQU9DO0FBRkosS0FMRztBQVNWQyxhQUFTO0FBQ0xDLGVBREsscUJBQ0s7QUFDTixnQkFBTUMsUUFBUSxLQUFLQyxnQkFBTCxDQUFzQixzQkFBdEIsRUFBOEMsQ0FBOUMsQ0FBZDtBQUNBLGdCQUFJRCxLQUFKLEVBQVc7QUFDUEEsc0JBQU1FLFNBQU4sQ0FBZ0IsSUFBaEI7QUFDSDtBQUNKLFNBTkk7QUFPTEEsaUJBUEsscUJBT0tDLE1BUEwsRUFPYTtBQUNkLGlCQUFLQyxHQUFMLENBQVMsRUFBRUQsY0FBRixFQUFUO0FBQ0g7QUFUSTtBQVRDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICByZWxhdGlvbjoge1xuICAgICAgICB0eXBlOiAnYW5jZXN0b3InLFxuICAgICAgICBuYW1lOiAnYmFkZ2UtZ3JvdXAnXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBpbmZvOiBudWxsLFxuICAgICAgICB0aXRsZTogU3RyaW5nXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vYmFkZ2UtZ3JvdXAvaW5kZXgnKVswXTtcbiAgICAgICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnNldEFjdGl2ZSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0QWN0aXZlKGFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyBhY3RpdmUgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==