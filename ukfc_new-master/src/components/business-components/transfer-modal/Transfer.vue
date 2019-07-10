<template>
  <boot-multi-modal
      v-model="modalVisible"
      size="lg"
      :modal-content="modalContent"
      @open="onModalOpen"
      @closed="onModalClosed">
    <!--请选择币种 start-->
    <modal-content name="choose_coin" :title="$t('placeholder.selectCoin')">
      <div class="choose-modal-content">
        <div class="coin-list clearfix">
          <ul class="clear-list-margin">
            <li class="coin-item"
                v-for="item in get_coinList"
                :key="item.id"
                @click="coinItemClick(item)">
              <img :src="item.img" alt="" class="coin-img">
              <p class="coin-name">{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </modal-content>
    <!--请选择币种 end-->

    <!--转入地址 start-->
    <modal-content
        name="transfer_address"
        :title="$t('transferModal.transferAddress')"
        :before-close="transferModalBeforeClose">
      <div class="transfer-address-content">
        <h6 class="transfer-address-caption">
          <!--请将您的USDT转入以下地址-->{{$t('transferModal.transferAddressCaption')}}
        </h6>
        <div class="qrcode-wrap">
          <div class="qrcode-box">
            <qrcode v-if="addressData.address" :value="addressData.address" :options="{width: 200, margin: 0}"></qrcode>
          </div>
        </div>
        <div class="text-center address-wrap">
          <div class="adderss-text">{{addressData.address || '----'}}</div>
          <span class="copy-btn" :data-clipboard-text="addressData.address" v-copy="{success: copySuccess}">
            <!--复制地址-->{{$t('transferModal.copyAddress')}}
          </span>
        </div>
      </div>
      <div class="hr"></div>
      <div class="transfer-address-content">
        <p class="attention color-primary text-center">
          <!--注意：该地址只能接收USDT，转入其他地址将无法找回-->{{$t('transferModal.transferAddressAttention')}}
        </p>
        <p class="tip-text text-center">
          <!--该地址已与您的账户绑定，可重复使用-->{{$t('transferModal.addressTip')}}
        </p>
        <div class="text-center">
          <div class="primary-gradual confirm-btn"><!--确定-->{{$t('common.confirm')}}</div>
        </div>
      </div>
    </modal-content>
    <!--转入地址 end-->
  </boot-multi-modal>
</template>

<script>
  import index from './transfer';

  export default index;
</script>

<style lang="scss" scoped>
  @import "transfer.scoped";
</style>
