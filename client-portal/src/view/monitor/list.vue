<template>
  <div class="list">
    <div class="card">
      <Row>
        <Col :xs="24"
             :sm="24"
             :md="8"
             :lg="8">
        <Select v-model="selectVal"
                clearable
                placeholder="状态查询"
                style="width:80%">
          <Option v-for="item in typeList"
                  :value="item.id"
                  :key="item.id">{{ item.name }}</Option>
        </Select>
        </Col>
        <Col :xs="24"
             :sm="24"
             :md="8"
             :lg="8">
        <DatePicker @on-change="dateArr=$event"
                    :value="dateArr"
                    v-model="dateArr"
                    :clearable="true"
                    format="yyyy-MM-dd"
                    type="daterange"
                    placement="bottom-start"
                    placeholder="选择起止日期"
                    style="width:80%"></DatePicker>
        </Col>
        <Col :xs="24"
             :sm="24"
             :md="8"
             :lg="8">
        <Button @click="doSearch"
                type="primary">查询</Button>
        </Col>
      </Row>
    </div>
    <div class="card">
      <div class="btn_box">
        <Button @click="toAdd"
                style="margin: 10px 0;"
                type="success">新增业务</Button>
      </div>
      <Table :size="tableSize"
             :show-header="showHeader"
             :data="tableData"
             :loading = 'isLoading'
             :height="tableHeight"
             :columns="columns1"
             ref="table"></Table>
      <Page :total="pageTotal"
            placement="top"
            @on-change="handlePage"
            @on-page-size-change="handlePageSize"
            size="small"
            show-total
            show-elevator
            show-sizer
            style="margin-top: 10px"></Page>
    </div>
  </div>
</template>
<script>
  import { waitManagerList } from '@/api/completeMessage'
  import { getCompanyinfo, replaceRes, formdata } from '@/libs/util'
  export default {
    data() {
      return {
        companyInfo: '',
        isLoading: false,
        pageTotal: 0,
        currentPage: 1,
        pageSize: 10,
        inputVal: '',
        selectVal: '',
        tableHeight: '',
        showHeader: true, // 是否显示表头 @:show-header
        tableSize: 'small', // @:size
        showModal: false,
        dateArr: [],
        params: {
          page: 0,
          limit: 10
        },
        typeList: [
          { name: '代办', id: '1' },
          { name: '驳回', id: '2' },
          { name: '通过', id: '3' }
        ],
        tableData: [],
        columns1: [
          {
            title: '序号',
            type: 'index',
            width: 80
          },
          {
            title: '业务类型',
            key: 'businessModelId',
            render: (h, params) => {
              let obj = params.row;
              let arr = [
                { name: '供应链金融', id: 1 },
                { name: '待办退税', id: 2 },
                { name: '进口（预付或控票垫付税款50万以内）', id: 3 },
                { name: '进口（控票、垫付税款>50万且<=200万）', id: 4 },
                { name: '进口（不控票或控票但垫付税款>200万）', id: 5 },
                { name: '高端制造只垫税款', id: 6 },
                { name: '高端制造垫货款', id: 7 },
                { name: '纯物流', id: 8 },
                { name: '代理报关', id: 9 },
                { name: '自营出口（自产）', id: 10 },
                { name: '自用出口（委外加工）', id: 11 }
              ];
              let result = arr.filter(el => el.id == obj.businessModelId)[0].name;
              return h('div', result);
            }
          },
          {
            title: '填写时间',
            key: 'createTime',
            render: (h, params) => {
              let obj = params.row;
              return h('div', formdata(obj.createTime));
            }
          },
          {
            title: '状态',
            key: 'reviewStatus',
            width: 150,
            render: (h, params) => {
              let obj = params.row;
              let arr = [
                { name: '暂存', id: '0' },
                { name: '代办', id: '1' },
                { name: '驳回', id: '2' },
                { name: '通过', id: '3' }
              ];
              let result = arr.filter(el => el.id == obj.reviewStatus)[0].name;
              return h('div', result);
            }
          },
          {
            title: '资料审核时间',
            key: 'updateTime',
            render: (h, params) => {
              let obj = params.row;
              return h('div', formdata(obj.updateTime));
            }
          },
          {
            title: '操作',
            width: 150,
            align: 'center',
            key: '',
            render: (h, params) => {
              return h('div', [
                h(
                  'Button',
                  {
                    props: {
                      type: 'text',
                      size: 'small'
                    },
                    style: {
                      color: '#5cadff'
                    },
                    on: {
                      click: () => {
                        var obj = params.row;
                        this.$router.push({name: 'completeMessage',query: {businessApplicationId: obj.id,type: obj.businessModelId,page:'2'}})
                        console.log(999, obj)
                      }
                    }
                  },
                  '完善'
                )
              ])
            }
          }
        ],
        menuData: []
      }
    },
    watch: {
    },
    methods: {
      doSearch() {
        this.currentPage = 1;
        this.getData();
      },
      toAdd() {
        this.showModal = true
      },
      getData() {
        this.isLoading = true;
        let params = {};
        params.page = (this.currentPage - 1) * this.pageSize;
        params.limit = this.pageSize;
        params.reviewStatus = this.selectVal;
        params.startTime = this.dateArr[0];
        params.endTime = this.dateArr[1];
        params.createUser = this.companyInfo.enterpriseId;
        console.log('--params--', params);
        waitManagerList(params)
          .then(res => {
            var data = JSON.parse(replaceRes(res.data));
            if (data.state) {
              this.isLoading = false;
              this.tableData = data.data.list;
              this.pageTotal = parseInt(data.data.count);
              if (this.pageSize > 10 && this.pageTotal > 10) {
                this.tableHeight = "500";
              } else {
                this.tableHeight = "";
              }
            } else {
              this.$Message.error(data.message);
            }
          })
          .catch(error => {
            var time = error.toString().indexOf('timeout');
            if (time > 0) {
              this.$Notice.error({
                title: '温馨提示',
                desc: '请求超时'
              })
            }
          })
      },
      /**
         * @on-change 页码改变的回调，返回改变后的页码
         * */
      handlePage(value) {
        this.currentPage = value;
        this.getData();
      },
      /**
         * @on-page-size-change 切换每页条数时的回调，返回切换后的每页条数
         * */
      handlePageSize(value) {
        this.pageSize = value;
        this.getData();
      }
    },
    mounted() {
      this.companyInfo = getCompanyinfo();
      this.getData();
    },
    created() {
    }
  }
</script>
<style lang="less">
  .list {
    .card {
      padding: 15px;
      box-sizing: border-box;
      background-color: #fff;
      margin-bottom: 20px;
      border-radius: 3px;
    }
  }
</style>
