'use strict';

var _component = require('./../common/component.js');

var ITEM_HEIGHT = 44;
(0, _component.VantComponent)({
    classes: ['main-item-class', 'content-item-class', 'main-active-class', 'content-active-class', 'main-disabled-class', 'content-disabled-class'],
    props: {
        items: Array,
        mainActiveIndex: {
            type: Number,
            value: 0
        },
        activeId: {
            type: [Number, String]
        },
        maxHeight: {
            type: Number,
            value: 300
        }
    },
    data: {
        subItems: [],
        mainHeight: 0,
        itemHeight: 0
    },
    watch: {
        items: function items() {
            var _this = this;

            this.updateSubItems().then(function () {
                _this.updateMainHeight();
            });
        },
        maxHeight: function maxHeight() {
            this.updateItemHeight(this.data.subItems);
            this.updateMainHeight();
        },

        mainActiveIndex: 'updateSubItems'
    },
    methods: {
        // 当一个子项被选择时
        onSelectItem: function onSelectItem(event) {
            var item = event.currentTarget.dataset.item;

            if (!item.disabled) {
                this.$emit('click-item', item);
            }
        },

        // 当一个导航被点击时
        onClickNav: function onClickNav(event) {
            var index = event.currentTarget.dataset.index;

            var item = this.data.items[index];
            if (!item.disabled) {
                this.$emit('click-nav', { index: index });
            }
        },

        // 更新子项列表
        updateSubItems: function updateSubItems() {
            var _data = this.data,
                items = _data.items,
                mainActiveIndex = _data.mainActiveIndex;

            var _ref = items[mainActiveIndex] || {},
                _ref$children = _ref.children,
                children = _ref$children === undefined ? [] : _ref$children;

            this.updateItemHeight(children);
            return this.set({ subItems: children });
        },

        // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
        updateMainHeight: function updateMainHeight() {
            var _data2 = this.data,
                _data2$items = _data2.items,
                items = _data2$items === undefined ? [] : _data2$items,
                _data2$subItems = _data2.subItems,
                subItems = _data2$subItems === undefined ? [] : _data2$subItems;

            var maxHeight = Math.max(items.length * ITEM_HEIGHT, subItems.length * ITEM_HEIGHT);
            this.set({ mainHeight: Math.min(maxHeight, this.data.maxHeight) });
        },

        // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
        updateItemHeight: function updateItemHeight(subItems) {
            var itemHeight = Math.min(subItems.length * ITEM_HEIGHT, this.data.maxHeight);
            return this.set({ itemHeight: itemHeight });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIklURU1fSEVJR0hUIiwiY2xhc3NlcyIsInByb3BzIiwiaXRlbXMiLCJBcnJheSIsIm1haW5BY3RpdmVJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJ2YWx1ZSIsImFjdGl2ZUlkIiwiU3RyaW5nIiwibWF4SGVpZ2h0IiwiZGF0YSIsInN1Ykl0ZW1zIiwibWFpbkhlaWdodCIsIml0ZW1IZWlnaHQiLCJ3YXRjaCIsInVwZGF0ZVN1Ykl0ZW1zIiwidGhlbiIsInVwZGF0ZU1haW5IZWlnaHQiLCJ1cGRhdGVJdGVtSGVpZ2h0IiwibWV0aG9kcyIsIm9uU2VsZWN0SXRlbSIsImV2ZW50IiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCIkZW1pdCIsIm9uQ2xpY2tOYXYiLCJpbmRleCIsImNoaWxkcmVuIiwic2V0IiwiTWF0aCIsIm1heCIsImxlbmd0aCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSxJQUFNQSxjQUFjLEVBQXBCO0FBQ0EsOEJBQWM7QUFDVkMsYUFBUyxDQUNMLGlCQURLLEVBRUwsb0JBRkssRUFHTCxtQkFISyxFQUlMLHNCQUpLLEVBS0wscUJBTEssRUFNTCx3QkFOSyxDQURDO0FBU1ZDLFdBQU87QUFDSEMsZUFBT0MsS0FESjtBQUVIQyx5QkFBaUI7QUFDYkMsa0JBQU1DLE1BRE87QUFFYkMsbUJBQU87QUFGTSxTQUZkO0FBTUhDLGtCQUFVO0FBQ05ILGtCQUFNLENBQUNDLE1BQUQsRUFBU0csTUFBVDtBQURBLFNBTlA7QUFTSEMsbUJBQVc7QUFDUEwsa0JBQU1DLE1BREM7QUFFUEMsbUJBQU87QUFGQTtBQVRSLEtBVEc7QUF1QlZJLFVBQU07QUFDRkMsa0JBQVUsRUFEUjtBQUVGQyxvQkFBWSxDQUZWO0FBR0ZDLG9CQUFZO0FBSFYsS0F2Qkk7QUE0QlZDLFdBQU87QUFDSGIsYUFERyxtQkFDSztBQUFBOztBQUNKLGlCQUFLYyxjQUFMLEdBQXNCQyxJQUF0QixDQUEyQixZQUFNO0FBQzdCLHNCQUFLQyxnQkFBTDtBQUNILGFBRkQ7QUFHSCxTQUxFO0FBTUhSLGlCQU5HLHVCQU1TO0FBQ1IsaUJBQUtTLGdCQUFMLENBQXNCLEtBQUtSLElBQUwsQ0FBVUMsUUFBaEM7QUFDQSxpQkFBS00sZ0JBQUw7QUFDSCxTQVRFOztBQVVIZCx5QkFBaUI7QUFWZCxLQTVCRztBQXdDVmdCLGFBQVM7QUFDTDtBQUNBQyxvQkFGSyx3QkFFUUMsS0FGUixFQUVlO0FBQUEsZ0JBQ1JDLElBRFEsR0FDQ0QsTUFBTUUsYUFBTixDQUFvQkMsT0FEckIsQ0FDUkYsSUFEUTs7QUFFaEIsZ0JBQUksQ0FBQ0EsS0FBS0csUUFBVixFQUFvQjtBQUNoQixxQkFBS0MsS0FBTCxDQUFXLFlBQVgsRUFBeUJKLElBQXpCO0FBQ0g7QUFDSixTQVBJOztBQVFMO0FBQ0FLLGtCQVRLLHNCQVNNTixLQVROLEVBU2E7QUFBQSxnQkFDTk8sS0FETSxHQUNJUCxNQUFNRSxhQUFOLENBQW9CQyxPQUR4QixDQUNOSSxLQURNOztBQUVkLGdCQUFNTixPQUFPLEtBQUtaLElBQUwsQ0FBVVQsS0FBVixDQUFnQjJCLEtBQWhCLENBQWI7QUFDQSxnQkFBSSxDQUFDTixLQUFLRyxRQUFWLEVBQW9CO0FBQ2hCLHFCQUFLQyxLQUFMLENBQVcsV0FBWCxFQUF3QixFQUFFRSxZQUFGLEVBQXhCO0FBQ0g7QUFDSixTQWZJOztBQWdCTDtBQUNBYixzQkFqQkssNEJBaUJZO0FBQUEsd0JBQ3NCLEtBQUtMLElBRDNCO0FBQUEsZ0JBQ0xULEtBREssU0FDTEEsS0FESztBQUFBLGdCQUNFRSxlQURGLFNBQ0VBLGVBREY7O0FBQUEsdUJBRWFGLE1BQU1FLGVBQU4sS0FBMEIsRUFGdkM7QUFBQSxxQ0FFTDBCLFFBRks7QUFBQSxnQkFFTEEsUUFGSyxpQ0FFTSxFQUZOOztBQUdiLGlCQUFLWCxnQkFBTCxDQUFzQlcsUUFBdEI7QUFDQSxtQkFBTyxLQUFLQyxHQUFMLENBQVMsRUFBRW5CLFVBQVVrQixRQUFaLEVBQVQsQ0FBUDtBQUNILFNBdEJJOztBQXVCTDtBQUNBWix3QkF4QkssOEJBd0JjO0FBQUEseUJBQ3VCLEtBQUtQLElBRDVCO0FBQUEsc0NBQ1BULEtBRE87QUFBQSxnQkFDUEEsS0FETyxnQ0FDQyxFQUREO0FBQUEseUNBQ0tVLFFBREw7QUFBQSxnQkFDS0EsUUFETCxtQ0FDZ0IsRUFEaEI7O0FBRWYsZ0JBQU1GLFlBQVlzQixLQUFLQyxHQUFMLENBQVMvQixNQUFNZ0MsTUFBTixHQUFlbkMsV0FBeEIsRUFBcUNhLFNBQVNzQixNQUFULEdBQWtCbkMsV0FBdkQsQ0FBbEI7QUFDQSxpQkFBS2dDLEdBQUwsQ0FBUyxFQUFFbEIsWUFBWW1CLEtBQUtHLEdBQUwsQ0FBU3pCLFNBQVQsRUFBb0IsS0FBS0MsSUFBTCxDQUFVRCxTQUE5QixDQUFkLEVBQVQ7QUFDSCxTQTVCSTs7QUE2Qkw7QUFDQVMsd0JBOUJLLDRCQThCWVAsUUE5QlosRUE4QnNCO0FBQ3ZCLGdCQUFNRSxhQUFha0IsS0FBS0csR0FBTCxDQUFTdkIsU0FBU3NCLE1BQVQsR0FBa0JuQyxXQUEzQixFQUF3QyxLQUFLWSxJQUFMLENBQVVELFNBQWxELENBQW5CO0FBQ0EsbUJBQU8sS0FBS3FCLEdBQUwsQ0FBUyxFQUFFakIsc0JBQUYsRUFBVCxDQUFQO0FBQ0g7QUFqQ0k7QUF4Q0MsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmNvbnN0IElURU1fSEVJR0hUID0gNDQ7XG5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbXG4gICAgICAgICdtYWluLWl0ZW0tY2xhc3MnLFxuICAgICAgICAnY29udGVudC1pdGVtLWNsYXNzJyxcbiAgICAgICAgJ21haW4tYWN0aXZlLWNsYXNzJyxcbiAgICAgICAgJ2NvbnRlbnQtYWN0aXZlLWNsYXNzJyxcbiAgICAgICAgJ21haW4tZGlzYWJsZWQtY2xhc3MnLFxuICAgICAgICAnY29udGVudC1kaXNhYmxlZC1jbGFzcydcbiAgICBdLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGl0ZW1zOiBBcnJheSxcbiAgICAgICAgbWFpbkFjdGl2ZUluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmVJZDoge1xuICAgICAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXVxuICAgICAgICB9LFxuICAgICAgICBtYXhIZWlnaHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAzMDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBzdWJJdGVtczogW10sXG4gICAgICAgIG1haW5IZWlnaHQ6IDAsXG4gICAgICAgIGl0ZW1IZWlnaHQ6IDBcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGl0ZW1zKCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdWJJdGVtcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWFpbkhlaWdodCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1heEhlaWdodCgpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbUhlaWdodCh0aGlzLmRhdGEuc3ViSXRlbXMpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNYWluSGVpZ2h0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1haW5BY3RpdmVJbmRleDogJ3VwZGF0ZVN1Ykl0ZW1zJ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDlvZPkuIDkuKrlrZDpobnooqvpgInmi6nml7ZcbiAgICAgICAgb25TZWxlY3RJdGVtKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGl0ZW0gfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLWl0ZW0nLCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8g5b2T5LiA5Liq5a+86Iiq6KKr54K55Ye75pe2XG4gICAgICAgIG9uQ2xpY2tOYXYoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRhdGEuaXRlbXNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2stbmF2JywgeyBpbmRleCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8g5pu05paw5a2Q6aG55YiX6KGoXG4gICAgICAgIHVwZGF0ZVN1Ykl0ZW1zKCkge1xuICAgICAgICAgICAgY29uc3QgeyBpdGVtcywgbWFpbkFjdGl2ZUluZGV4IH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuID0gW10gfSA9IGl0ZW1zW21haW5BY3RpdmVJbmRleF0gfHwge307XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1IZWlnaHQoY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHsgc3ViSXRlbXM6IGNoaWxkcmVuIH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyDmm7TmlrDnu4Tku7bmlbTkvZPpq5jluqbvvIzmoLnmja7mnIDlpKfpq5jluqblkozlvZPliY3nu4Tku7bpnIDopoHlsZXnpLrnmoTpq5jluqbmnaXlhrPlrppcbiAgICAgICAgdXBkYXRlTWFpbkhlaWdodCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaXRlbXMgPSBbXSwgc3ViSXRlbXMgPSBbXSB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoaXRlbXMubGVuZ3RoICogSVRFTV9IRUlHSFQsIHN1Ykl0ZW1zLmxlbmd0aCAqIElURU1fSEVJR0hUKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgbWFpbkhlaWdodDogTWF0aC5taW4obWF4SGVpZ2h0LCB0aGlzLmRhdGEubWF4SGVpZ2h0KSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5pu05paw5a2Q6aG55YiX6KGo6auY5bqm77yM5qC55o2u5Y+v5bGV56S655qE5pyA5aSn6auY5bqm5ZKM5b2T5YmN5a2Q6aG55YiX6KGo55qE6auY5bqm5Yaz5a6aXG4gICAgICAgIHVwZGF0ZUl0ZW1IZWlnaHQoc3ViSXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBNYXRoLm1pbihzdWJJdGVtcy5sZW5ndGggKiBJVEVNX0hFSUdIVCwgdGhpcy5kYXRhLm1heEhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoeyBpdGVtSGVpZ2h0IH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=