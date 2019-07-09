<template>
  <div class="report">
    <Button type="primary" @click="aaa">primar1y</Button>
    <div class="base-message">
      <Form v-model="formItem"
            ref="formItem">
        <Row>
          <Col class="col">
          <h3>报告编号：</h3>
          </Col>
          <Col :xs="24"
               :sm="12"
               :md="12"
               :lg="12"
               class="col">
          <FormItem label="客户名称："
                    :label-width="120">
            <Input v-model="formItem.clientName"
                   placeholder="客户名称"
                   class="input"></Input>
          </FormItem>
          </Col>
          <Col :xs="24"
               :sm="12"
               :md="12"
               :lg="12"
               class="col">
          <FormItem label="申请额度："
                    :label-width="120">
            <Input v-model="formItem.applicationQuota"
                   placeholder="申请额度"
                   class="input"></Input>
          </FormItem>
          </Col>
          <Col :xs="24"
               :sm="12"
               :md="12"
               :lg="12"
               class="col">
          <FormItem label="业务申报部门、项目经理："
                    :label-width="120">
            <Input v-model="formItem.organizer"
                   placeholder="业务审批发起人"
                   class="input"></Input>
          </FormItem>
          </Col>
          <Col :xs="24"
               :sm="12"
               :md="12"
               :lg="12"
               class="col">
          <FormItem label="访谈时间、对象："
                    :label-width="120">
            <Input v-model="formItem.interviewObj"
                   placeholder="访谈时间、对象"
                   class="input"></Input>
          </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
    <div class="item">
      <div class="h1">
        <Divider orientation="left">一、项目介绍1</Divider>
        <div class="h2">
          <h3>1、项目基本要素：</h3>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="h1">
        <Divider orientation="left">二、 项目尽职调查分析</Divider>
        <div class="h2">
          <h3>1、企业基本情况分析：</h3>
          <div class="h3">
            <h5 class="h5">1）企业基本信息：</h5>
            <Row>
              <Col :xs="24"
                   :sm="12"
                   :md="12"
                   :lg="12"
                   class="col">
              <span class="key">统一社会信用代码：</span><span class="value">{{(baseInfo.creditCode == null || baseInfo.creditCode === '') ? '-': baseInfo.creditCode}}</span>
              </Col>
              <Col :xs="24"
                   :sm="12"
                   :md="12"
                   :lg="12"
                   class="col">
              <span class="key">公司名称：</span><span class="value">{{(baseInfo.enterpriseName == null || baseInfo.enterpriseName === '') ? '-': baseInfo.enterpriseName}}</span>
              </Col>
              <Col :xs="24"
                   :sm="12"
                   :md="12"
                   :lg="12"
                   class="col">
              <span class="key">公司类型：</span><span class="value">{{(baseInfo.companyType == null || baseInfo.companyType === '') ? '-': baseInfo.companyType}}</span>
              </Col>
              <Col :xs="24"
                   :sm="12"
                   :md="12"
                   :lg="12"
                   class="col">
              <span class="key">法人姓名：</span><span class="value">{{(baseInfo.legalName == null || baseInfo.legalName === '') ? '-': baseInfo.legalName}}</span>
              </Col>
              <Col :xs="24"
                   :sm="12"
                   :md="12"
                   :lg="12"
                   class="col">
              <span class="key">注册资金：</span><span class="value">{{(baseInfo.registeredCapital == null || baseInfo.registeredCapital === '') ? '-': baseInfo.registeredCapital}}</span>
              </Col>
              <Col :xs="24"
                   :sm="12"
                   :md="12"
                   :lg="12"
                   class="col">
              <span class="key">成立时间：</span><span class="value">{{(baseInfo.establishedTime == null || baseInfo.establishedTime === '') ? '-': baseInfo.establishedTime}}</span>
              </Col>
              <Col :xs="24"
                   :sm="12"
                   :md="12"
                   :lg="12"
                   class="col">
              <span class="key">营业期限开始日期：</span><span class="value">{{(baseInfo.businessStartTime == null || baseInfo.businessStartTime === '') ? '-': baseInfo.businessStartTime}}</span>
              </Col>
              <Col :xs="24"
                   :sm="12"
                   :md="12"
                   :lg="12"
                   class="col">
              <span class="key">营业期限终止日期：</span><span class="value">{{(baseInfo.businessEndTime == null || baseInfo.businessEndTime === '') ? '-': baseInfo.businessEndTime}}</span>
              </Col>
              <Col :xs="24"
                   :sm="12"
                   :md="12"
                   :lg="12"
                   class="col">
              <span class="key">登记机关：</span><span class="value">{{(baseInfo.registrationAuthority == null || baseInfo.registrationAuthority === '') ? '-': baseInfo.registrationAuthority}}</span>
              </Col>
              <Col :xs="24"
                   :sm="12"
                   :md="12"
                   :lg="12"
                   class="col">
              <span class="key">核准日期：</span><span class="value">{{(baseInfo.approvalDate == null || baseInfo.approvalDate === '') ? '-': baseInfo.approvalDate}}</span>
              </Col>
              <Col :xs="24"
                   :sm="12"
                   :md="12"
                   :lg="12"
                   class="col">
              <span class="key">核准日期：</span><span class="value">{{(baseInfo.companyStatus == null || baseInfo.companyStatus === '') ? '-': baseInfo.companyStatus}}</span>
              </Col>
              <Col :xs="24"
                   :sm="12"
                   :md="12"
                   :lg="12"
                   class="col">
              <span class="key">注册地址：</span><span class="value">{{(baseInfo.registeredAddress == null || baseInfo.registeredAddress === '') ? '-': baseInfo.registeredAddress}}</span>
              </Col>
            </Row>
            <div class="editor_box">
              <p>经营范围：</p>
              <wangeditor :data="businessScopeData"
                          ref="businessScope"></wangeditor>
            </div>
            <h5 class="h5">2）股权结构及实际控制人：</h5>
            <div class="editor_box">
              <p>股权结构：</p>
              <wangeditor :data="equityStructureData"
                          ref="equityStructure"></wangeditor>
            </div>
            <div class="upload_box">
              <p>实际控制人：</p>
              <div>
                <Row>
                  <Col :xs="24"
                       :sm="12"
                       :md="12"
                       :lg="12"
                       class="col">
                  <upload :btnId="btnId"
                          :srcOut="srcOut"
                          :flag="'5'"></upload>
                  </Col>
                  <Col :xs="24"
                       :sm="12"
                       :md="12"
                       :lg="12"
                       class="col">
                  <upload :btnId="btnId1"
                          :srcOut="srcOut1"
                          :flag="'6'"></upload>
                  </Col>
                </Row>
              </div>
            </div>
            <h5 class="h5">3）高管背景、团队成员描述：</h5>
            <div class="editor_box">
              <wangeditor :data="equityStructureData"
                          ref="memberDescription"></wangeditor>
            </div>
            <h5 class="h5">4）历史沿革：</h5>
            <div class="editor_box">
              <wangeditor :data="equityStructureData"
                          ref="historicalDevelopment"></wangeditor>
            </div>
            <h5 class="h5">5）组织架构：</h5>
            <div class="editor_box">
              <wangeditor :data="equityStructureData"
                          ref="organizationalStructure"></wangeditor>
            </div>
            <h5 class="h5">6）关联企业：</h5>
            <div class="editor_box">
              <wangeditor :data="equityStructureData"
                          ref="affiliatedEnterprise"></wangeditor>
            </div>
            <h5 class="h5"
                v-if="data38.length > 0">7）对外投资企业及相互担保情况：</h5>
            <h5 class="h5"
                v-if="data38.length == 0">7）对外投资企业及相互担保情况：（无异常）</h5>
            <div v-if="data38.length > 0">
              <Divider>年报对外投资</Divider>
              <Table :columns="columns38"
                     :data="data38"
                     :size="tableSize"></Table>
            </div>
            <h5 class="h5">8）诉讼纠纷情况，外界有无披露其不良行为：</h5>
            <div v-if="data25.length > 0">
              <Divider>法院公告</Divider>
              <Table :columns="columns25"
                     :data="data25"
                     :size="tableSize"></Table>
            </div>
            <div v-if="data24.length > 0">
              <Divider>裁判文书</Divider>
              <Table :columns="columns24"
                     :data="data24"
                     :size="tableSize"></Table>
            </div>
            <h5 class="h5">9）借款人信用等级及征信情况：</h5>
            <div class="editor_box">
              <wangeditor :data="equityStructureData"
                          ref="creditConditions"></wangeditor>
            </div>
          </div>
        </div>
        <div class="h2 h2_1">
          <h3>2、行业风险分析：</h3>
          <div class="h3">
            <div class="editor_box">
              <wangeditor :data="businessScopeData"
                          ref="riskAnalysis"></wangeditor>
            </div>
          </div>
        </div>
        <div class="h2 h2_1">
          <h3>3、企业经营状况分析：</h3>
          <div class="h3">
            <h5 class="h5">1）经营许可分析：</h5>
            <div class="editor_box">
              <wangeditor :data="businessScopeData"
                          ref="businessAnalysis"></wangeditor>
            </div>
            <h5 class="h5">2）企业的主营业务：</h5>
            <div class="editor_box">
              <wangeditor :data="businessScopeData"
                          ref="mainBusiness"></wangeditor>
            </div>
            <h5 class="h5">3）企业的产供销分析：</h5>
            <div class="editor_box">
              <p>供应阶段：</p>
              <wangeditor :data="equityStructureData"
                          ref="supplyPhase"></wangeditor>
            </div>
            <div class="editor_box">
              <p>生产阶段：</p>
              <wangeditor :data="equityStructureData"
                          ref="productionPhase"></wangeditor>
            </div>
            <div class="editor_box">
              <p>销售阶段：</p>
              <wangeditor :data="equityStructureData"
                          ref="salePhase"></wangeditor>
            </div>
          </div>
          <button @click="commit">提交</button>
        </div>
        <div class="h2 h2_1">
          <h3>4、财务分析：</h3>
          <div class="h3">
            <h5 class="h5">1）短期偿债能力趋势分析：</h5>
            <div class="editor_box">
              <wangeditor :data="businessScopeData"
                          ref="shortTermLiquidity"></wangeditor>
            </div>
          </div>
          <div class="h3">
            <h5 class="h5">2）长期偿债能力趋势分析：</h5>
            <div class="editor_box">
              <wangeditor :data="businessScopeData"
                          ref="longTermLiquidity"></wangeditor>
            </div>
          </div>
          <div class="h3">
            <h5 class="h5">3）营运能力分析：</h5>
            <div class="editor_box">
              <wangeditor :data="businessScopeData"
                          ref="operationCapacity"></wangeditor>
            </div>
          </div>
          <div class="h3">
            <h5 class="h5">4）盈利能力趋势分析：</h5>
            <div class="editor_box">
              <p>截止至xxx日：</p>
              <p>总资产RMB*****万，资产主要构成：</p>
              <wangeditor :data="businessScopeData"
                          ref="totalAssets"></wangeditor>
            </div>
            <div class="editor_box">
              <p>总负债RMB*****万，负债主要构成：</p>
              <wangeditor :data="businessScopeData"
                          ref="totalLiabilities"></wangeditor>
            </div>
          </div>
        </div>
      </div>
    </div>
    <back-top　:scrollmyself='false'></back-top>
  </div>
</template>
<script>
  import wangeditor from '_c/common/editor'
  import upload from '_c/common/upload'
  export default {
    components: {
      wangeditor, upload
    },
    data() {
      return {
        formItem: {
          clientName: '',
          applicationQuota: '',
          organizer: '',
          interviewObj: '',
        },
        baseInfo: {
          creditCode: '',
          enterpriseName: '',
          companyType: '',
          legalName: '',
          registeredCapital: '',
          establishedTime: '',
          businessStartTime: '',
          businessEndTime: '',
          registrationAuthority: '',
          approvalDate: '',
          companyStatus: '',
          registeredAddress: '',
        },
        businessScopeData: '',  // 经营范围
        equityStructureData: '', // 股权结构
        srcOut: '',
        srcOut1: '',
        btnId: 'btnId',
        btnId1: 'btnId1',
        tableSize: 'small',
        columns38: [
          {
            title: "年报年度",
            key: "reportYear"
          },
          {
            title: "对外投资企业名称",
            key: "outcompanyName"
          },
          {
            title: "注册号",
            key: "regNum"
          },
          {
            title: "统一信用代码",
            key: "creditCode"
          }
        ],
        data38: [],
        columns25: [
          {
            title: "当事人",
            key: "fctClass"
          },
          {
            title: "公告时间",
            key: "fctGgdate"
          },
          {
            title: "公告类型",
            key: "fctGgperson"
          },
          {
            title: "公告人",
            key: "fctParty"
          },
          {
            title: "公告内容",
            key: "fctExecutiondoc",
            render: (h, params) => {
              var cut = "";
              if (params.row.fctExecutiondoc != undefined) {
                if (params.row.fctExecutiondoc.length > 100) {
                  cut = params.row.fctExecutiondoc.substring(0, 100) + "...";
                  var more = params.row.fctExecutiondoc;
                  return h("div", [
                    h(
                      "poptip",
                      {
                        props: {
                          //   title: '详情',
                          content: more,
                          size: "small",
                          wordWrap: true,
                          trigger: "click",
                          width: "800",
                          placement: "right-end",
                          transfer: true
                        }
                      },
                      cut
                    )
                  ]);
                } else {
                  return h("div", params.row.fctExecutiondoc);
                }
              } else {
                return h("div", '无');
              }
            }
          }
        ],
        data25: [],
        columns24: [
          {
            title: "案件类型",
            key: "casetype"
          },
          {
            title: "案件省份",
            key: "province"
          },
          {
            title: "文书标题",
            key: "judgetitle"
          },
          {
            title: "判决法院",
            key: "court"
          },
          {
            title: "案号",
            key: "casecode"
          },
          {
            title: "判决日期",
            key: "judgedate"
          },
          {
            title: "文书详情",
            key: "content",
            render: (h, params) => {
              var cut = "";
              if (
                params.row.content != undefined &&
                params.row.content.length > 100
              ) {
                cut = params.row.content.substring(0, 100) + "...";
                var more = params.row.content;
                return h("div", [
                  h(
                    "poptip",
                    {
                      props: {
                        //   title: '详情',
                        content: more,
                        size: "small",
                        wordWrap: true,
                        trigger: "click",
                        width: "800",
                        placement: "right-end",
                        transfer: true
                      }
                    },
                    cut
                  )
                ]);
              } else {
                return h("div", params.row.content);
              }
            }
          }
        ],
        data24: [],
      }
    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
      commit() {
        console.log(this.$refs.businessScope.editorContent)
        console.log(this.$refs.equityStructure.editorContent)
        
      },
      aaa() {
        console.log(111,this.$refs.businessScope.editorContent)
      }

    }
  }
</script>
<style lang="less">
  .report {
    .base-message {
      .col {
        margin-top: 10px;
        .input {
          width: 80%;
        }
      }
    }
    .item {
      .h1 {
        .ivu-divider-horizontal.ivu-divider-with-text-left:before {
          top: 50%;
          width: 0%;
        }
        .h2 {
          padding-left: 20px;
          .h3 {
            padding-left: 20px;
            .col {
              margin-top: 10px;
              .key {
              }
              .value {
              }
            }

            .upload_box {
              margin-top: 10px;
            }
          }
          .h5 {
            margin-top: 20px;
          }
        }
        .h2_1 {
          margin-top: 16px;
        }
      }
      .editor_box {
        margin-top: 10px;
      }
    }
  }
</style>


