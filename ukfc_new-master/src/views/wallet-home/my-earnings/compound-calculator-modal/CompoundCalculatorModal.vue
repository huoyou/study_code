<template>
  <boot-modal
      v-model="modalVisible"
      size="lg"
      title="复利计算器"
      @click="onModalClosed">
    <div class="compound-calculator-content">
      <div class="flex flex-wrap">
        <div class="calc-left">
          <div class="form-group">
            <label for="" class="form-label block">投资级别</label>
            <el-select
                v-model="choosedAccountId"
                class="ukfc-select block choose-coin-select2"
                popper-class="ukfc-select-popover"
                placeholder="请选择投资级别">
              <el-option
                  v-for="item in get_userVipList"
                  :key="item.code"
                  :label="item.name"
                  :value="item.code">
              </el-option>
            </el-select>
          </div>
          <div class="form-group">
            <label for="" class="form-label block">投资金额</label>
            <input type="number" class="form-control" placeholder="请输入您的投资金额">
            <div class="mt-5">
              <el-checkbox v-model="compound" class="compound-checkbox">选择复利</el-checkbox>
              <el-popover
                  class="what-is-compount"
                  placement="top-start"
                  title="什么是复利？"
                  width="200"
                  trigger="click"
                  content="将每天产出的利息再进行锁仓即为复利。">
                <i class="el-icon-question" slot="reference"></i>
              </el-popover>
            </div>
          </div>
        </div>
        <div class="calc-right">
          <h6 class="interest-text">本息收益(30天)</h6>
          <div class="interest-value">9999.123456789</div>
        </div>
      </div>
    </div>
  </boot-modal>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: "CompoundCalculatorModal",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        modalVisible: this.show,
        activeTab: 'first',
        choosedAccountId: '',
        compound: true
      }
    },
    computed: {
      ...mapGetters(['get_userVipList'])
    },
    watch: {
      show(newVal){
        this.modalVisible = newVal;
      }
    },
    methods: {
      // 弹窗关闭事件
      onModalClosed(){
        this.$emit('update:show', false);
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "compound-calculator-modal.scoped";
</style>
