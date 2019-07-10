<template>
  <boot-multi-modal
      v-model="modalVisible"
      :modal-content="modalContent"
      size="lg"
      @closed="onModalClosed">
    <modal-content :title="$t('transferOutModal.assetsTransferOut')" name="transferOut_form1">
      <!--资产转出表单 start-->
      <div class="transfer-out-form">
        <form @submit.prevent="toNext" data-vv-scope="transferOut_form1">
          <div class="form-group">
            <label for="" class="form-label block"><!--转出币种-->{{$t('transferOutModal.transferOutCoin')}}</label>
            <el-select
                v-model="form.coinId"
                class="ukfc-select block"
                popper-class="ukfc-select-popover"
                data-placeholder="请选择转出币种"
                :placeholder="$t('transferOutModal.placeholder.transferOutCoinSelect')">
              <el-option
                  v-for="item in get_coinList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
              </el-option>
            </el-select>
            <input type="hidden" v-model="form.coinId" v-validate="'required'" name="transferOut_form1_coinId">
            <p class="error-tip">{{errors.first('transferOut_form1_coinId', 'transferOut_form1')}}</p>
          </div>
          <div class="form-group">
            <label for="" class="form-label block"><!--对方地址-->{{$t('transferOutModal.oppositeAddress')}}</label>
            <input
                type="text"
                v-model="form.address"
                class="form-control"
                v-validate="'required'"
                name="transferOut_form1_address"
                :disabled="withdrawConfig.allowWithdraw === 0"
                data-placeholder="请输入对方地址"
                :placeholder="$t('transferOutModal.placeholder.oppositeAddressFill')">
            <div class="text-right">
              <span
                  class="color-primary font-14 inline-block cursor-point pt-5"
                  v-show="withdrawConfig.allowWithdraw === 1"
                  @click="chooseAddressModalVisible = true">
                <!--查看地址蒲-->{{$t('transferOutModal.checkAddressBook')}}
              </span>
            </div>
            <p class="error-tip no-pt">{{errors.first('transferOut_form1_address', 'transferOut_form1')}}</p>
          </div>
          <div class="form-group">
            <label for="" class="form-label block"><!--转出数量-->{{$t('transferOutModal.transferOutVolume')}}</label>
            <p class="color-999 mb-5">
              <!--最小转出数量：-->{{$t('transferOutModal.transferVolumeRuleText1')}}
              {{withdrawConfig.minVolume}} USDT，
              <!--转出数量必须是-->{{$t('transferOutModal.transferVolumeRuleText2')}}
              <span class="color-primary">{{withdrawConfig.scale}}</span>
              <!--的整数倍-->{{$t('transferOutModal.transferVolumeRuleText3')}}
            </p>
            <input type="number"
                   class="form-control"
                   :class="{'text-bold': form.volume > 0}"
                   :disabled="withdrawConfig.allowWithdraw === 0"
                   v-model="form.volume"
                   v-validate="{required: true, min_value: withdrawConfig.minVolume, max_value: get_accountBalance.balance}"
                   step="0.000000001"
                   name="transferOut_form1_volume"
                   data-placeholder="请输入转出数量"
                   :placeholder="$t('transferOutModal.placeholder.transferVolumeFill')"
                   @change="volumeInputChange">
            <div class="mt-5 flex flex-wrap">
              <span class="color-999 mr-15">
                <!--余额-->{{$t('common.balance')}}：{{get_accountBalance.balance || '0.00'}} USDT
              </span>
              <span class="color-999 mr-15">
                <!--手续费-->{{$t('common.fee')}}：{{fee}} USDT
              </span>
              <span class="color-999">
                <!--实际可得-->{{$t('transferOutModal.actualGetted')}}：<span class="color-primary">{{actualGetted}}</span> USDT
              </span>
              <span
                  class="color-primary cursor-point all-transfer"
                  v-show="withdrawConfig.allowWithdraw === 1"
                  @click="allTransferOut"><!--全部转出-->{{$t('transferOutModal.allTransferOut')}}</span>
            </div>
            <p class="error-tip">{{errors.first('transferOut_form1_volume', 'transferOut_form1')}}</p>
          </div>
          <div class="form-group">
            <label for="" class="form-label block">
              <!--备注(选填)-->
              {{$t('common.remark')}}({{$t('common.optional')}})
            </label>
            <input
                type="text"
                v-model="form.remark"
                class="form-control"
                :disabled="withdrawConfig.allowWithdraw === 0"
                data-placeholder="请输入备注内容"
                :placeholder="$t('transferOutModal.placeholder.remarkFill')">
          </div>
          <p class="mt-10 color-f00" v-show="withdrawConfig.days > 0">
            <!--您需再等待--> {{$t('transferOutModal.waitText1')}}
            <span class="color-primary">{{withdrawConfig.days}}</span>
            天才能转出！{{$t('transferOutModal.waitText2')}}
          </p>
          <div class="mt-30 text-center">
            <button type="submit" style="display: none;"><!--转出-->{{$t('common.transferOut')}}</button>
            <div
                class="primary-gradual confirm-btn"
                :class="{disabled: withdrawConfig.allowWithdraw === 0}"
                @click="toNext"><!--确定转出-->{{$t('transferOutModal.confirmTransferOut')}}</div>
          </div>
        </form>
      </div>

      <choose-address-modal
          v-model="choosedAddress"
          :show.sync="chooseAddressModalVisible"
          @onchange="onChoosedAddressChange"></choose-address-modal>
    </modal-content>
    <!--资产转出表单 end-->

    <!--安全验证 start-->
    <modal-content name="security_check" :title="$t('transferOutModal.securityCheck')">
      <div class="transfer-out-form">
        <form @submit.prevent="confirmTransferOut" data-vv-scope="transferOut_form2">
          <div class="form-group">
            <label for="" class="form-label"><!--交易密码-->{{$t('common.sellPwd')}}</label>
            <input type="password"
                   class="form-control"
                   v-model="form.payPassword"
                   v-validate="'required|checkPwd'"
                   name="common_payPassword"
                   autocomplete="off"
                   data-placeholder="请输入交易密码"
                   :placeholder="$t('placeholder.sellPwd')">
            <p class="error-tip">{{errors.first('common_payPassword', 'transferOut_form2')}}</p>
          </div>
          <div class="form-group">
            <label for="" class="form-label"><!--验证码-->{{$t('common.validateCode')}}</label>
            <div class="flex">
              <input type="number"
                     class="form-control"
                     v-model="form.validateCode"
                     v-validate="'required|validateCode'"
                     name="common_validateCode"
                     data-placeholder="请输入验证码"
                     :placeholder="$t('placeholder.validateCode')">
              <verify-btn :type="form.verifyType" :user-inside-value="form.verifyType !== 'gaCode'" class="no-bl"></verify-btn>
            </div>
            <div class="text-right">
              <change-verify-type v-model="form.verifyType" class="mt-5"></change-verify-type>
            </div>
            <p class="error-tip">{{errors.first('common_validateCode', 'transferOut_form2')}}</p>
          </div>
          <div class="text-center mt-20 mb-20">
            <button type="submit" style="display: none;"><!--转出-->{{$t('common.transferOut')}}</button>
            <div class="primary-gradual confirm-btn"
                 :class="{disabled: committing}"
                 @click="confirmTransferOut">
              <i class="el-icon-loading" v-show="committing"></i>
              <!--确定转出-->{{$t('transferOutModal.confirmTransferOut')}}
            </div>
          </div>
        </form>
      </div>
    </modal-content>
    <!--安全验证 end-->

    <!--转出成功提示 start-->
    <modal-content
        name="transferOut_success"
        :title="$t('transferOutModal.transferOutSuccess')"
        ref="transferOutSuccess_content">
      <div class="transfer-out-form transfer-out-success">
        <div class="text-center">
          <img src="../../../assets/images/success-tip.png" class="success-img" alt="">
        </div>
        <p class="success-status-text"><!--转出成功-->{{$t('transferOutModal.transferOutSuccess')}}</p>
        <div class="transfer-out-amount">
          {{form.volume}}
          <span class="amount-unit">USDT</span>
        </div>
        <!--<el-progress :percentage="53.5" :show-text="false" status="success" class="ukfc-progress"></el-progress>
        <p class="confirm-num">
          确认数 <span class="color-success">5</span>/5
        </p>-->
        <div class="transfer-out-address-wrap">
          <span class="transfer-out-address"><!--收款地址-->{{$t('transferOutModal.remitteeAddress')}}：{{form.address}}</span>
          <span
              class="color-primary cursor-point ml-20"
              v-show="!addressInList"
              @click="addAddressModalVisible = true"><!--保存到地址簿-->{{$t('transferOutModal.saveToAddressBook')}}</span>
        </div>
        <p class="transfer-out-remark"><!--备注内容-->{{$t('transferOutModal.remarkContent')}}：{{form.remark}}</p>
        <div class="text-center">
          <div class="primary-gradual confirm-btn" @click="closeModalBtnClick"><!--知道了-->{{$t('transferOutModal.iKnow')}}</div>
        </div>
      </div>
      <add-address-modal :show.sync="addAddressModalVisible" :external-data="addressForm"></add-address-modal>
    </modal-content>
    <!--转出成功提示 end-->
  </boot-multi-modal>
</template>

<script>
import index from './transfer-out';
export default index;
</script>

<style lang="scss" scoped>
@import "transfer-out.scoped";
</style>
