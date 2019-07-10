<template>
	<section class="my-team container" ref="my_team">
		<!-- 团队人数仪表盘 start -->
		<div class="team-size-title">
			<h6 class="block-caption"><!--我的团队-->{{$t("accountBalancePage.myTeam")}}</h6>
			<!--<a href="javascript: void(0);" class="to-node-setting-link" @click="nodeSettingBtnClick">&lt;!&ndash;节点设置&ndash;&gt;Node settings</a>-->
		</div>
		<ul class="team-size-board flex justify-content-between">
			<li class="board-item">
				<div class="clearfix">
					<img src="../../../assets/images/team.png" alt="" class="team-img">
					<div class="overflow">
						<div>
							<b class="count-of-people">{{typeof membersCountInfo.teamCount === 'undefined' ? '--' : membersCountInfo.teamCount}}</b>
							<span class="count-unit"><!--人-->{{$t("common.person")}}</span>
						</div>
						<p class="text-explain"><!--团队总人数-->{{$t("accountBalancePage.totalNumberOfTeams")}}</p>
					</div>
				</div>
			</li>
			<li class="board-item">
				<div class="clearfix">
					<img src="../../../assets/images/team.png" alt="" class="team-img">
					<div class="overflow">
						<div>
							<b class="count-of-people">{{typeof membersCountInfo.one === 'undefined' ? '--' : membersCountInfo.one}}</b>
							<span class="count-unit"><!--人-->{{$t("common.person")}}</span>
						</div>
						<p class="text-explain"><!--一代会员总人数-->{{$t("accountBalancePage.levelOneMembers")}}</p>
					</div>
				</div>
			</li>
			<li class="board-item">
				<div class="clearfix">
					<img src="../../../assets/images/team.png" alt="" class="team-img">
					<div class="overflow">
						<div>
							<b class="count-of-people">{{typeof membersCountInfo.two === 'undefined' ? '--' : membersCountInfo.two}}</b>
							<span class="count-unit"><!--人-->{{$t("common.person")}}</span>
						</div>
						<p class="text-explain"><!--二代会员总人数-->{{$t("accountBalancePage.levelTwoMembers")}}</p>
					</div>
				</div>
			</li>
		</ul>
		<!-- 团队人数仪表盘 end -->
		<!-- 我的会员 start -->
		<h6 class="block-caption"><!--我发展的会员-->{{$t("accountBalancePage.MemberOfMyDevelopment")}}</h6>
		<div class="my-members-list-scroll">
			<div class="my-members-list clearfix" ref="my_members_list">
				<!--<ul class="clear-margin" @click="openMembersDetailModal">
					<li class="member-item">
						<div class="member-avatar-text">LEE</div>
						<p class="member-user-name">Beudd</p>
					</li>
					<li class="member-item"
							v-for="item in 30"
							:key="item">
						<img src="../../../assets/images/temp/user-avater.png" class="member-avatar" alt="">
						<p class="member-user-name">Beudd</p>
					</li>
				</ul>-->
				<ul class="clear-margin clearfix" v-if="dataLoading">
					<li class="member-item skeleton"
							v-for="item in 30"
							:key="item">
						<div class="member-avatar-text"></div>
						<p class="member-user-name"></p>
					</li>
				</ul>
				<ul class="clear-margin clearfix" ref="clear_margin" v-else @click="openMembersDetailModal">
					<li class="member-item"
							v-for="item in myMembers"
							:key="item.id"
							:data-uid="item.userId">
						<img src="../../../assets/images/temp/user-avater.png" :data-uid="item.userId" v-if="item.avatar" class="member-avatar" alt="">
						<div class="member-avatar-text" :data-uid="item.userId" v-else>{{item.userName.substr(0,2).toUpperCase()}}</div>
						<p class="member-user-name" :data-uid="item.userId">{{item.userName}}</p>
					</li>
				</ul>
				<div class="no-members" v-if="!dataLoading && myMembers.length === 0">{{$t('common.noData')}}</div>
			</div>
		</div>
		<load-data-bar :just-ui="true" v-if="showLoadMoreDataBar" @onClick="loadMoreDataBarClick" />
		<!-- 我的会员 end -->

		<!--会员详情 start-->
		<members-detail :user-id="choosedMemberUserId" :show.sync="membersDetailModalVisible"></members-detail>
		<!--会员详情 end-->

		<!--节点设置弹窗-->
		<node-setting-modal v-if="nodeSettingModalVisible" :show.sync="nodeSettingModalVisible"></node-setting-modal>
	</section>
</template>

<script>
import index from './my-team';
export default index;
</script>

<style lang="scss" scoped>
@import 'my-team.scope';
</style>
