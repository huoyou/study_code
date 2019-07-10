<template>
  <section class="feedback">
    <div class="container feedback-container">
      <div class="card">
        <div class="card-head">
          <h6 class="card-title">
            <!--意见反馈-->{{$t('feedbackPage.feedback')}}
          </h6>
        </div>
        <div class="card-body">
          <div class="feedback-form">
            <form onsubmit="return false;">
              <div class="form-group">
                <label for="" class="form-label block"><!--反馈类型-->{{$t('feedbackPage.feedbackType')}}</label>
                <el-select
                    v-model="form.categoryId"
                    class="ukfc-select contact-input"
                    popper-class="ukfc-select-popover"
                    data-placeholder="请选择反馈类型"
                    :placeholder="$t('feedbackPage.placeholder.feedbackTypeSelect')">
                  <el-option
                      v-for="item in suggestTypes"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                  </el-option>
                </el-select>
                <input type="hidden" v-model="form.categoryId" v-validate="'required'" name="suggest_categoryId">
                <p class="error-tip">{{errors.first('suggest_categoryId')}}</p>
              </div>
              <div class="form-gorup">
                <label for="" class="form-label block"><!--反馈内容-->{{$t('feedbackPage.feedbackContent')}}</label>
                <el-input
                    class="ukfc-textarea"
                    type="textarea"
                    :autosize="{ minRows: 8}"
                    data-placeholder="请输入反馈内容"
                    :placeholder="$t('feedbackPage.placeholder.feedbackContentFill')"
                    v-model="form.content">
                </el-input>
                <input type="hidden" v-model="form.content" v-validate="'required'" name="suggest_content">
                <p class="error-tip">{{errors.first('suggest_content')}}</p>
              </div>
              <div class="form-group">
                <label for="" class="form-label block"><!--真实姓名-->{{$t('feedbackPage.realName')}}</label>
                <input type="text"
                       class="form-control contact-input"
                       v-model="form.realName"
                       v-validate="'required'"
                       name="suggest_realName"
                       data-placeholder="请输入您的真实姓名"
                       :placeholder="$t('feedbackPage.placeholder.realNameFill')">
                <p class="error-tip">{{errors.first('suggest_realName')}}</p>
              </div>
              <div class="form-group">
                <label for="" class="form-label block"><!--联系方式-->{{$t('feedbackPage.contact')}}</label>
                <input type="text"
                       class="form-control contact-input"
                       v-model="form.contact"
                       v-validate="'required'"
                       name="suggest_contact"
                       data-placeholder="请输入您的联系方式"
                       :placeholder="$t('feedbackPage.placeholder.contactFill')">
                <p class="error-tip">{{errors.first('suggest_contact')}}</p>
              </div>
              <div>
                <el-button
                    type="primary"
                    class="primary-gradual"
                    :loading="committing"
                    :disabled="committing"
                    @click="confirmSubmitSuggest"><!--确定提交-->{{$t('common.confirmCommit')}}</el-button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-head">
          <div class="card-title"><!--我的消息记录-->{{$t('feedbackPage.myMessageRecord')}}</div>
        </div>
        <div class="card-body">
          <ul class="message-list" ref="message_list">
            <template v-if="!loadingMySuggets">
              <li class="message-item" v-for="item in mySuggets" :key="item.id">
                <div class="clearfix">
                  <img :src="get_userInfo.imgUrl" v-if="get_userInfo.imgUrl" class="user-avatar-img">
                  <div class="user-avatar-text" v-else>{{get_userInfo.username.substr(0, 2).toUpperCase()}}</div>
                  <div class="overflow">
                    <div class="message-content">{{item.content}}</div>
                    <div class="message-bottom">
                      <span class="mr-10"><!--联系方式-->{{$t('feedbackPage.contact')}}：{{item.contact}}</span>
                      <span class="mr-10"><!--提交时间-->{{$t('feedbackPage.commitTime')}}：{{item.created}}</span>
                      <span><!--反馈类型-->{{$t('feedbackPage.feedbackType')}}：{{item.categoryName}}</span>
                    </div>
                  </div>
                </div>
                <ul class="message-list" v-if="item.replyUserId">
                  <li class="message-item clearfix">
                    <div class="user-avatar-box">{{item.replyUserName}}</div>
                    <div class="overflow">
                      <div class="message-content" v-html="item.replyContent"></div>
                      <div class="message-bottom">
                        <!--<span class="mr-10">联系方式：13314655545</span>-->
                        <span><!--回复时间-->{{$t('feedbackPage.replyTime')}}：{{item.replyTime}}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </template>
            <li class="loading-data" v-else><!--数据加载中...-->{{$t('common.dataLoading')}}</li>
            <li class="no-data" v-if="!loadingMySuggets && mySuggets.length === 0"><!--暂无消息！-->{{$t('feedbackPage.noMessage')}}</li>
          </ul>
          <div class="text-center mt-30" v-show="pageData.pages > 1">
            <el-pagination
                class="ukfc-pagination"
                background
                layout="prev, pager, next"
                @current-change="onCurrentPageChange"
                :current-page.sync="pageData.current"
                :page-size="pageData.size"
                :total="pageData.total"
                :pager-count="5">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import index from './feedback-js';
export default index;
</script>

<style lang="scss" scoped>
@import "feedback.scoped";
</style>
