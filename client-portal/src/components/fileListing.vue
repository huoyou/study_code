<template>
  <div class="fileListing">
    <p class="title" style="margin-bottom: 10px;"><i></i>需上传附件列表</p>
    <div class="txt_content">
      <p class="txt"
         v-for="(item ,index) in fileType">
         <span v-if="item.required">{{item.id}}、<b style="color:red;">*</b>{{item.name}} <b style="color:red;">（必选）</b> </span>
         <span v-if="!item.required">{{item.id}}、{{item.name}}</span>
         </p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      fileType: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        totalList: [
          { name: '营业执照', id: '1' },
          { name: '营业执照（三证合一）/一般纳税人认定通知书/主要股东以及高管简历', id: '2' },
          { name: '法定代表人身份证复印件', id: '3' },
          { name: '实际控制人身份证复印件', id: '4' },
          { name: '上年度及最近一期增值税纳税申报表', id: '5' },
          { name: '上年度及最近三期增值税纳税申报表、财务报表', id: '6' },
          { name: '上年度经审计及最近3个月的财务报表和增值税纳税申报表', id: '7' },
          { name: '前五大下游客户的订单复印件（每个客户至少各1份）', id: '8' },
          { name: '前五大上游供应商的订单复印件（每个供应商至少各1份）', id: '9' },
          { name: '最近六个月境内、境外主要结算账户银行对账单', id: '10' },
          { name: '近3个月进/出口报关单（国内代采及过往没有进/出口业务的不需提供）', id: '11' },
          { name: '拟代采产品过往三个月的采购合同、采购量统计以及采购价格波动统计表', id: '12' },
          { name: '拟代采产品对应的供应商资质文件', id: '13' },
          { name: '最新的厂房租赁合同或最新的房屋产权证及近3个月房租、水电缴费发票、社保记录及工资表、最近一期的固定资产明细账、固定资产清单及对应的发票', id: '14' },
          { name: '最新的房租租赁合同或最新的房屋产权证及近3个月社保记录及工资表', id: '15' },
          { name: '进销存明细账报表（近3个月料件入库记录统计报表及成品销售出库统计报表）', id: '16' },
          { name: '上年度与最近一期财务报表和二级科目及上年度与近3个月的增值税纳税申报表', id: '17' },
          { name: '近6个月境内、境外主要结算账户的银行流水EXCEL版', id: '18' },
          { name: '委外加工合同以及近3个月的加工厂对账单、出入库记录', id: '19' },
          { name: '近3个月的全部的真实境外订单及信用证及物流对账单、函调通过证明（如有）', id: '20' },
          { name: '近6个月金税系统认证和海关税票认证的进项明细及销项发票清单明细', id: '21' },
          { name: '（境内主体）委托客户营业执照（三证合一)/一般纳税人认定通知书/主要股东及高管简历', id: '22' },
          { name: '（境外主体）委托客户境外公司注册证书、商业登记证、公司章程、近一年的周年申报表 ', id: '23' },
          { name: '近6个月进项发票抵扣认证明细表和销项发票开票明细统计表 ', id: '24' },
          { name: '租赁合同/产权证明、近三个月社保记录及工资表  ', id: '25' },
          { name: '近3个月境外订单', id: '26' },
          { name: '上年度及最近一期财务报表及增值纳税申报表', id: '27' },
          { name: '近3个月境内、境外主要结算账户的银行流水', id: '28' },
          { name: '主要的生产BOM表 及供应商全称名录', id: '29' },
          { name: '与供应链公司最近3个月的出货清单及工厂出货对账单', id: '30' }
        ],
        list: [],
      }
    },
    mounted() {
      // let arr1 = [3,4,22,23,24,25,26,27,28,29,30]; // 高端制造垫货款
      // let arr2 = [2,3,4,7,8,9,10,11,12,13]; // 供应链金融
      // let arr3 = [2,3,4,6]; // 进口（不控票或控票但垫付税款>200万）
      // let arr4 = [3,4,22,23,24,25,26,27,28,29,30]; // 高端制造只垫税款
      // let arr5 = [2,3,4,14,16,17,18,20,21]; // 待办退税/自营出口（自产）
      // let arr6 = [2,3,4,15,16,17,18,19,20,21]; // 自用出口（委外加工）
      // let arr7 = [1,3,4,5];  // 进口（控票、垫付税款<=200万）
      // let arr8 = [1]; // 纯物流/代理报关
      // switch (this.fileType) {
      //   case '7':
      //     this.getFileList(arr1);
      //     break;
      //   case '1':
      //     this.getFileList(arr2);
      //     break;
      //   case '5':
      //     this.getFileList(arr3);
      //     break;
      //   case '6':
      //     this.getFileList(arr4);
      //     break;
      //   case '2':
      //     this.getFileList(arr5);
      //     break;
      //   case '11':
      //     this.getFileList(arr6);
      //     break;
      //   case '3':
      //     this.getFileList(arr7);
      //     break;
      //   case '8':
      //     this.getFileList(arr8);
      //     break;
      //   default:
      //     break;
      // }
    },
    methods: {
      getFileList(list = []) {
        let arr = [];
        for (var i = 0; i < list.length; i++) {
          arr.push(this.totalList[list[i] - 1]);
        }
        this.list = arr;
        console.log('this.list', this.list)
      }
    }
  }
</script>
<style lang="less">
  .fileListing {
    .title {
      font-weight: 700;
      margin: 20px 0 5px 0;
      i {
        display: block;
        float: left;
        width: 3px;
        height: 14px;
        background-color: #515a6e;
        margin-right: 5px;
        margin-top: 2px;
      }
    }
  }
</style>
