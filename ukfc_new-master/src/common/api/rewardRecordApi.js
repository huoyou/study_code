import {request} from "./request";

/**
 * 收益发放记录相关api
 */
export const rewardRecordApi = {
  // 投资（静态）收益明细
  staticIncomeDetail(params) {
    return request({
      url: '/v2/w/static_reward/records',
      method: 'get',
      params
    })
  },
  // 邀请（团队）收益明细
  teamIncomeDetail(params) {
    return request({
      url: '/v2/w/team_reward/records',
      method: 'get',
      params
    })
  },
  // 贡献收益明细
  contributionIncomeDetail(params) {
    return request({
      url: '/v2/w/contribution_reward/records',
      method: 'get',
      params
    })
  },
};
