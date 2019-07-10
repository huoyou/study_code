<template>
  <boot-modal
      v-model="modalVisible"
      size="lg"
      :title="$t('membersDetailModal.membersDetail')"
      @closed="onModalClosed"
      @open="onModalOpen">
    <!--用户详情 start-->
    <div class="user-info clearfix">
      <img :src="userInfo.imgUrl" v-if="userInfo.imgUrl" class="user-avatar" alt="">
      <div class="user-avatar-text" v-else>{{userInfo.userName ? userInfo.userName.substr(0,2).toUpperCase() : '--'}}</div>
      <div class="overflow relative">
        <h6 class="user-name">{{userInfo.userName ? userInfo.userName : '--'}}</h6>
        <div class="invest-amount">
          <div class="field-caption"><!--投资金额-->{{$t('membersDetailModal.investAmount')}}</div>
          <div class="invest-amount-value">
            {{typeof userInfo.lockVolume === 'undefined' ? '--' : (userInfo.lockVolume || '0.00')}}
            <span class="amount-unit">USD</span>
          </div>
        </div>
        <el-rate
            v-model="userInfo.starLevel"
            :max="7"
            disabled>
        </el-rate>
        <p class="user-regist-time">
          <!--注册时间-->{{$t('membersDetailModal.registTime')}}：{{userInfo.registerTime ? userInfo.registerTime : '--'}}
        </p>
      </div>
    </div>
    <!--用户详情 end-->

    <!--他发展的会员 start-->
    <div class="his-members">
      <h6 class="block-title"><!--他发展的会员-->{{$t('membersDetailModal.hisMembers')}}</h6>
      <div class="his-members-list-scroll">
        <div class="his-members-list clearfix">
          <div class="clear-margin">
            <el-popover
                v-for="memberItem in userMembers" :key="memberItem.userId"
                class="member-item"
                placement="bottom"
                width="300"
                popper-class="his-members-popover"
                trigger="click">
              <ul class="his-members-popover-content">
                <li class="flex justify-content-between">
                  <div><!--注册时间-->{{$t('membersDetailModal.registTime')}}</div>
                  <div>{{memberItem.registerTime}}</div>
                </li>
                <li class="flex justify-content-between">
                  <div><!--等级-->{{$t('membersDetailModal.level')}}</div>
                  <div>
                    <el-rate
                        v-model="memberItem.starLevel"
                        :max="7"
                        disabled>
                    </el-rate>
                  </div>
                </li>
                <li class="flex justify-content-between">
                  <div><!--投资金额-->{{$t('membersDetailModal.investAmount')}}</div>
                  <div class="his-members-invest-amount">
                    {{typeof memberItem.lockVolume === 'undefined' ? '--' : (memberItem.lockVolume || '0.00')}}
                    <span class="his-members-invest-amount-unit">USD</span>
                  </div>
                </li>
              </ul>
              <div slot="reference">
                <img :src="memberItem.imgUrl" v-if="memberItem.imgUrl" class="member-avatar" alt="">
                <div class="member-avatar-text" v-else>{{memberItem.userName ? memberItem.userName.substr(0,2).toUpperCase() : '--'}}</div>
                <p class="member-user-name">{{memberItem.userName}}</p>
              </div>
            </el-popover>
          </div>
        </div>
        <!--<load-data-bar></load-data-bar>-->
      </div>
    </div>
    <!--他发展的会员 end-->
  </boot-modal>
</template>

<script>
  import index from "./members-detail-modal";
  export default index;
</script>

<style lang="scss">
@import "members-detail";
</style>
<style lang="scss" scoped>
@import "members-detail.scoped";
</style>
