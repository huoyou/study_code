<template>
  <boot-modal v-model="modalVisible" title="币种兑换" size="lg" @closed="onModalClosed">
    <div class="coin-exchange-form">
      <form onsubmit="return false;">
        <div class="form-group">
          <label for="" class="form-label block">支付</label>
          <div class="flex coin-volume-wrap">
            <el-select
                v-model="choosedAccountId"
                class="ukfc-select block choose-coin-select2"
                popper-class="ukfc-select-popover"
                placeholder="请选择兑换币种">
              <el-option
                  v-for="item in get_coinList"
                  :key="item.id"
                  :label="item.coinName"
                  :value="item.id">
              </el-option>
            </el-select>
            <input type="number" class="form-control coin-volume-input" placeholder="请输入要兑换的数量">
          </div>
          <div class="flex flex-wrap justify-content-between">
            <span class="color-666">可用金额：123.456789 BTC</span>
            <span class="cursor-point color-primary">全部兑换</span>
          </div>
          <p class="error-tip"></p>
        </div>
        <div class="form-group getted-form-group">
          <label for="" class="form-label block">得到</label>
          <div class="relative getted-form-wrap">
            <input type="text" readonly class="form-control">
            <label class="getted-unit">BTC</label>
          </div>
          <div class="color-666">
            <span>服务费(20%): 0.00USD</span>
            <span>汇率: 1:1</span>
          </div>
        </div>
        <div class="form-group">
          <label for="" class="form-label block">交易密码</label>
          <input type="password" class="form-control" autocomplete="off" placeholder="请输入交易密码">
          <p class="error-tip"></p>
        </div>
        <div class="mb-20 mt-20 text-center">
          <el-button type="primary" class="primary-gradual medium">确定转出</el-button>
        </div>
      </form>
    </div>
  </boot-modal>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: "Exchange",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        modalVisible: this.show,
        choosedAccountId: ''
      }
    },
    computed: {
      ...mapGetters(['get_coinList'])
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
@import "exchange.scoped";
</style>
