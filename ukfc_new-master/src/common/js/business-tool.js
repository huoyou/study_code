/**
 * 这个js主要用来存放一些业务工具代码，如根据id查找币种、根据id查找会员级别
 */
import {tool} from "./tool";

export const businessTool = {
  findUserVipByCondition(userVipList, fn){
    let index = tool.getIndex(userVipList, fn);
    return userVipList[index];
  }
};
