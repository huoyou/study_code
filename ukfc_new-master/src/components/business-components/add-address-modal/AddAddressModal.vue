<template>
  <boot-modal
      v-model="modalVisible"
      :title="$t('addAddressModal.title')"
      size="lg"
      @closed="onModalClosed">
    <div class="add-address-form">
      <form @submit.prevent="confirmAdd">
        <div class="form-group">
          <label for="" class="form-label block"><!--币种-->{{$t('common.coinId')}}</label>
          <el-select
              v-model="form.coinId"
              class="ukfc-select block"
              popper-class="ukfc-select-popover"
              data-placeholder="请选择币种"
              :placeholder="$t('placeholder.selectCoin')">
            <el-option v-for=" (item) in get_coinList"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
          <input type="hidden" v-model="form.coinId" v-validate="'required'" name="addAddressForm_coinId">
          <p class="error-tip">{{errors.first('addAddressForm_coinId')}}</p>
        </div>
        <div class="form-group">
          <label for="" class="form-label block"><!--名称-->{{$t('addAddressModal.name')}}</label>
          <div class="hidden-input"><input type="text"><input type="password"></div>
          <input type="text" v-model="form.name" class="form-control" v-validate="'required'"
                 name="addAddressForm_name">
          <p class="error-tip">{{errors.first('addAddressForm_name')}}</p>
        </div>
        <div class="form-group">
          <label for="" class="form-label block"><!--地址详情-->{{$t('addAddressModal.address')}}</label>
          <input type="text" v-model="form.address" class="form-control" v-validate="'required'"
                 name="addAddressForm_address">
          <p class="error-tip">{{errors.first('addAddressForm_address')}}</p>
        </div>
        <div class="form-group">
          <label for="" class="form-label block"><!--交易密码-->{{$t('common.sellPwd')}}</label>
          <input type="password" v-model="form.payPassword" class="form-control" v-validate="'required|checkPwd'"
                 name="common_payPassword">
          <p class="error-tip">{{errors.first('common_payPassword')}}</p>
        </div>
        <div class="form-group">
          <label for="" class="form-label block">
            <!--备注(选填)-->
            {{$t('common.remark')}}({{$t('common.optional')}})
          </label>
          <input type="text" v-model="form.remark" class="form-control">
        </div>
        <div class="text-center mt-30">
          <el-button
              type="primary"
              class="primary-gradual medium"
              :loading="committing"
              :disabled="committing"
              native-type="submit"
              @click="confirmAdd">
            <!--确定-->{{$t('common.confirm')}}
          </el-button>
        </div>
      </form>
    </div>
  </boot-modal>
</template>

<script>
  import index from './add-address';

  export default index;
</script>
<style lang="scss" scoped>
  @import "../../../common/css/break-points";

  .add-address-form {
    padding: 15px 30px;
  }

  @media (max-width: $lg) {
    .add-address-form {
      padding: 0 15px;
    }
  }
</style>
