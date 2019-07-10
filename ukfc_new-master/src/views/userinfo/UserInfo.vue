<template>
  <section class="userinfo-page">
    <div class="container userinfo-container">
      <div class="card">
        <div class="card-head">
          <h6 class="card-title"><!--用户资料-->{{$t('userInfoPage.userInfo')}}</h6>
        </div>
        <div class="card-body">
          <div class="clearfix">
            <div class="userinfo-left">
              <img :src="get_userInfo.imgUrl"
                   class="user-avatar"
                   v-if="get_userInfo.imgUrl">
              <div class="user-avatar-text" v-else>{{get_userInfo.username ? get_userInfo.username.substr(0, 2).toUpperCase() : '--'}}</div>
              <p class="username">{{get_userInfo.username || '--'}}</p>
              <el-rate
                  class="view-rate"
                  v-model="star"
                  :max="7"
                  disabled>
              </el-rate>
              <div>
                <upload-single-img
                    class="upload-avatar"
                    v-model="form.imgUrl"
                    :show-preview="false"
                    @uploadSuccess="uploadSuccess"
                    @uploadError="uploadError">
                  <div>{{get_userInfo.imgUrl ? $t('userInfoPage.updateAvatar'): $t('userInfoPage.uploadAvatar')}}</div>
                </upload-single-img>
              </div>
            </div>
            <div class="userinfo-right">
              <ol class="userinfo-view">
                <dt><!--用户名-->{{$t('userInfoPage.userName')}}：</dt>
                <dd>
                  {{get_userInfo.username || '--'}}
                </dd>
                <dt><!--昵称-->{{$t('userInfoPage.nickName')}}：</dt>
                <dd>
                  {{get_userInfo.nickName || '--'}}
                  <el-popover
                      placement="bottom"
                      :title="$t('userInfoPage.updateNickName')"
                      width="200"
                      trigger="click">
                    <input type="text" v-model="form.nickName" class="form-control mb-10">
                    <div class="text-right">
                      <el-button
                          type="primary"
                          size="small"
                          :loading="modifingUserName"
                          :disabled="modifingUserName"
                          @click="confirmModifyNickName"><!--确定-->{{$t('common.confirm')}}</el-button>
                    </div>
                    <i class="el-icon-edit edit-username-btn" :title="$t('userInfoPage.updateNickName')" slot="reference"></i>
                  </el-popover>

                </dd>
                <dt><!--手机号码-->{{$t('userInfoPage.mobilePhone')}}：</dt>
                <dd>{{get_userInfo.countryCode}} {{get_userInfo.mobile ? get_userInfo.mobile : '--'}}</dd>
                <dt><!--邮箱地址-->{{$t('userInfoPage.emailAddrses')}}：</dt>
                <dd>
                  {{get_userInfo.emailStatus === 1 ? get_userInfo.email : $t('userInfoPage.hasNotBindEmail')}}
                  <router-link
                      v-if="get_userInfo.emailStatus === 0"
                      to="/securitySetting/email"
                      class="color-primary ml-10"><!--绑定邮箱-->{{$t('userInfoPage.bindEmail')}}</router-link>
                </dd>
                <dt><!--注册时间-->{{$t('userInfoPage.registTime')}}：</dt>
                <dd>{{get_userInfo.created || '--'}}</dd>
                <dt><!--我的邀请码-->{{$t('userInfoPage.inviteCode')}}：</dt>
                <dd><span class="color-primary">{{get_userInfo.inviteCode || '--'}}</span></dd>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";
  import {userSecurityApi} from "../../common/api/userSecurityApi";
  import {globalRules} from "../../common/validator/regexRules";
  import UploadSingleImg from "../../components/business-components/upload-single-img/UploadSingleImg";
  export default {
    name: "UserInfo",
    components: {
      'upload-single-img': UploadSingleImg
    },
    data(){
      return {
        star: 0,
        form: {
          "imgUrl": "",
          "nickName": ""
        },
        modifingUserName: false
      }
    },
    computed: {
      ...mapGetters(['get_userInfo'])
    },
    methods: {
      ...mapActions(['getUserInfo_action']),
      // 修改用户名
      confirmModifyNickName(){
        let data = this.form;
        if(data.nickName.length < 2 || data.nickName.length > 12){
          this.$notify.warning({
            title: this.$t('common.warmPrompt'), // 温馨提示
            message: this.$t('userInfoPage.nickNameRule') // 昵名必须是2-12位的字母、数字、_的组合！
          });
          return;
        }
        if(this.modifingUserName){
          return;
        }
        userSecurityApi.updateUserProfile({
          imgUrl: this.get_userInfo.imgUrl || '',
          nickName: data.nickName
        })
          .then(res =>{
            this.modifingUserName = false;
            if(res.errcode === 0){
              this.$notify.success({
                title: this.$t('common.warmPrompt'), // 温馨提示
                message: this.$t('userInfoPage.nickNameUpdateSuccessTip') // 昵称修改成功
              });
              this.getUserInfo_action();
            }
          })
          .catch(() => {
            this.modifingUserName = false;
          });
      },
      // 上传成功回调
      uploadSuccess(res){
        userSecurityApi.updateUserProfile({
          imgUrl: res.uri,
          nickName: this.get_userInfo.nickName
        })
          .then(res =>{
            if(res.errcode === 0){
              this.$notify.success({
                title: this.$t('common.warmPrompt'), // 温馨提示
                message: this.$t('userInfoPage.avatarUploadSuccess') // 头像上传成功！
              });
              this.getUserInfo_action();
            }
          })
          .catch(() => {

          });
      },
      // 上传失败回调
      uploadError(){
        this.$notify.error({
          title: this.$t('common.errorPrompt'), // 错误提示
          message: this.$t('userInfoPage.avatarUploadFaild') // 头像上传失败！
        });
      }
    },
    watch: {
      get_userInfo: {
        immediate: true,
        handler(newVal){
          if(newVal.username){
            this.form.nickName = newVal.nickName;
						this.star = newVal.starLevel || 0;
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "userinfo.scoped";
</style>
