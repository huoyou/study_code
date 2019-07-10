<template>
  <boot-modal
      v-model="modalVisible"
      :title="$t('nodeSettingModal.nodeSetSuccess')"
      @open="onModalOpen"
      @closed="onModalClosed">
    <div class="node-setting-modal-content">
      <div v-if="!get_userInfo.parentUserId">
        <h5 class="set-node-caption"><!--设置挂靠节点-->{{$t('nodeSettingModal.setNodeCaption')}}</h5>
        <input
            type="text"
            v-model="form.inviteCode"
            class="form-control"
            data-placeholder="请输入对方邀请码"
            :placeholder="$t('nodeSettingModal.placeholder.inviteCode')" />
        <p class="error-tip">{{errMsg}}</p>
        <div class="text-right">
          <el-button
              type="primary"
              :loading="committing"
              :disabled="committing"
              @click="confirmSetNode"><!--确定-->{{$t('common.confirm')}}</el-button>
        </div>
      </div>
      <div v-else>
        <h5 class="set-node-caption"><!--当前挂靠节点-->{{$t('nodeSettingModal.currentNode')}}</h5>
        <dl class="user-node-info">
          <dt><!--用户名-->{{$t('common.userName')}}：</dt>
          <dd>{{userCurrentNode.username || '--'}}</dd>
          <dt><!--手机号-->{{$t('common.mobile')}}：</dt>
          <dd>{{userCurrentNode.phone || '--'}}</dd>
          <dt><!--邮箱-->{{$t('common.email')}}：</dt>
          <dd>{{userCurrentNode.email}}</dd>
        </dl>
      </div>
    </div>
  </boot-modal>
</template>

<script>
import index from "./node-setting-js";
export default index;
</script>

<style lang="scss" scoped>
  @import "../../../common/css/break-points";
  .node-setting-modal-content{
    padding: 15px 30px;
  }
  .set-node-caption{
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .user-node-info{
    dt{
      float: left;
      margin-right: 10px;
    }
    dd{
      margin-bottom: 5px;
      overflow: hidden;
    }
  }
  @media (max-width: $lg) {
    .node-setting-modal-content{
      padding: 0 15px;
    }
    .set-node-caption{
      font-size: 16px;
    }
  }
</style>
