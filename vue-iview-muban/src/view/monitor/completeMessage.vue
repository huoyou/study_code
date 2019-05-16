<template>
  <div class="page">

    <!-- [1,4,5] 供应链金融 / 进口（控票、垫付税款>50万且<=200万)/进口（不控票或控票但垫付税款>200万） -->
    <div class="content"
         v-if="type == '1'|| type =='4' || type == '5'">
      <!-- card    -->
      <div class="card card1">
        <p class="title"><i></i> 企业基本资料</p>
        <Form ref="queryItem"
              :label-width="150"
              :model="queryItem"
              :rules="ruleValidate">
          <Row>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="企业全称"
                      prop="name">
              <Input style="width: 80%;"
                     placeholder="企业全称"
                     clearable
                     disabled
                     v-model="queryItem.name" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际经营地址"
                      prop="address">
              <Input style="width: 80%;"
                     placeholder="实际经营地址"
                     clearable
                     v-model="queryItem.address" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际控制人姓名"
                      prop="controlPersonName">
              <Input style="width: 80%;"
                     placeholder="实际控制人姓名"
                     clearable
                     v-model="queryItem.controlPersonName" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际控制人身份证号码"
                      prop="controlPersonIdCard">
              <Input style="width: 80%;"
                     placeholder="实际控制人身份证号码"
                     clearable
                     v-model="queryItem.controlPersonIdCard" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际控制人手机号码"
                      prop="controlPersonPhone">
              <Input style="width: 80%;"
                     placeholder="实际控制人手机号码"
                     clearable
                     v-model="queryItem.controlPersonPhone" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="法人姓名"
                      prop="legalPersonName">
              <Input style="width: 80%;"
                     placeholder="法人姓名"
                     clearable
                     v-model="queryItem.legalPersonName" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="法人身份证号码"
                      prop="legalPersonIdCard">
              <Input style="width: 80%;"
                     placeholder="法人身份证号码"
                     clearable
                     v-model="queryItem.legalPersonIdCard" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="法人手机号码"
                      prop="legalPersonPhone">
              <Input style="width: 80%;"
                     placeholder="法人手机号码"
                     clearable
                     v-model="queryItem.legalPersonPhone" />
            </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
      <!-- card -->
      <div class="card">
        <p class="title"><i></i>前五名供应商合作情况统计表</p>
        <v-table is-horizontal-resize
                 style="width:100%"
                 :columns="providerColumns"
                 :table-data="rmEnterpriseSupplierList"
                 row-hover-color="#eee"
                 row-click-color="#edf7ff"
                 :cell-edit-done="supplyEditDone"></v-table>
      </div>
      <!-- card -->
      <div class="card">
        <p class="title"><i></i>前五名客户合作情况统计表</p>
        <v-table is-horizontal-resize
                 style="width:100%"
                 :columns="customerColumns"
                 :table-data="rmEnterpriseCustomerList"
                 row-hover-color="#eee"
                 row-click-color="#edf7ff"
                 :cell-edit-done="customerEditDone"></v-table>
      </div>
      <!-- card -->
      <div class="card">
        <p class="title"><i></i>附件上传</p>
        <upload ref="uploadFile"
                :selectList="selectList"></upload>
        <file-listing :fileType="list"></file-listing>
        <div class="btn_box">
          <Button style="margin-right: 20px;"
                  class="btn"
                  @click="commit1(0)">暂存</Button>
          <Button type="primary"
                  class="btn"
                  @click="commit1(1)">提交</Button>
        </div>
      </div>
    </div>

    <!-- [2,10] 待办退税 / 自营出口（自产） -->
    <div class="content"
         v-if="type == '2'|| type =='10'">
      <!-- card    -->
      <div class="card card1">
        <p class="title"><i></i> 企业基本资料</p>
        <Form ref="queryItem"
              :label-width="150"
              :model="queryItem"
              :rules="ruleValidate">
          <Row>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="企业全称"
                      prop="name">
              <Input style="width: 80%;"
                     placeholder="企业全称"
                     clearable
                     disabled
                     v-model="queryItem.name" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际经营地址"
                      prop="address">
              <Input style="width: 80%;"
                     placeholder="实际经营地址"
                     clearable
                     v-model="queryItem.address" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际控制人姓名"
                      prop="controlPersonName">
              <Input style="width: 80%;"
                     placeholder="实际控制人姓名"
                     clearable
                     v-model="queryItem.controlPersonName" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际控制人身份证号码"
                      prop="controlPersonIdCard">
              <Input style="width: 80%;"
                     placeholder="实际控制人身份证号码"
                     clearable
                     v-model="queryItem.controlPersonIdCard" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际控制人手机号码"
                      prop="controlPersonPhone">
              <Input style="width: 80%;"
                     placeholder="实际控制人手机号码"
                     clearable
                     v-model="queryItem.controlPersonPhone" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="法人姓名"
                      prop="legalPersonName">
              <Input style="width: 80%;"
                     placeholder="法人姓名"
                     clearable
                     v-model="queryItem.legalPersonName" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="法人身份证号码"
                      prop="legalPersonIdCard">
              <Input style="width: 80%;"
                     placeholder="法人身份证号码"
                     clearable
                     v-model="queryItem.legalPersonIdCard" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="法人手机号码"
                      prop="legalPersonPhone">
              <Input style="width: 80%;"
                     placeholder="法人手机号码"
                     clearable
                     v-model="queryItem.legalPersonPhone" />
            </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
      <!-- card -->
      <div class="card">
        <p class="title"><i></i>前五名供应商合作情况统计表</p>
        <v-table is-horizontal-resize
                 style="width:100%"
                 :columns="providerColumns"
                 :table-data="rmEnterpriseSupplierList"
                 row-hover-color="#eee"
                 row-click-color="#edf7ff"
                 :cell-edit-done="supplyEditDone"></v-table>
      </div>
      <!-- card -->
      <div class="card">
        <p class="title"><i></i>前五名客户合作情况统计表</p>
        <v-table is-horizontal-resize
                 style="width:100%"
                 :columns="customerColumns"
                 :table-data="rmEnterpriseCustomerList"
                 row-hover-color="#eee"
                 row-click-color="#edf7ff"
                 :cell-edit-done="customerEditDone"></v-table>
      </div>
      <!-- card -->
      <div class="card">
        <p class="title"><i></i>产线情况</p>
        <v-table is-horizontal-resize
                 style="width:100%"
                 :columns="productColumns"
                 :table-data="rmEnterpriseProductionList"
                 row-hover-color="#eee"
                 row-click-color="#edf7ff"
                 :cell-edit-done="productEditDone"></v-table>
      </div>
      <!-- card -->
      <div class="card">
        <p class="title"><i></i>附件上传</p>
        <upload ref="uploadFile"
                :selectList="selectList"></upload>
        <file-listing :fileType="list"></file-listing>
        <div class="btn_box">
          <Button style="margin-right: 20px;"
                  class="btn"
                  @click="commit2(0)">暂存</Button>
          <Button type="primary"
                  class="btn"
                  @click="commit2(1)">提交</Button>
        </div>
      </div>
    </div>

    <!-- [6,7,11] 高端制造只垫税款 / 高端制造垫货款）/自用出口（委外加工） -->
    <div class="content"
         v-if="type == '6'|| type =='7' || type =='11'">
      <!-- card    -->
      <div class="card card1">
        <p class="title"><i></i> 企业基本资料</p>
        <Form ref="queryItem"
              :label-width="150"
              :model="queryItem"
              :rules="ruleValidate">
          <Row>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="企业全称"
                      prop="name">
              <Input style="width: 80%;"
                     placeholder="企业全称"
                     clearable
                     disabled
                     v-model="queryItem.name" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际经营地址"
                      prop="address">
              <Input style="width: 80%;"
                     placeholder="实际经营地址"
                     clearable
                     v-model="queryItem.address" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际控制人姓名"
                      prop="controlPersonName">
              <Input style="width: 80%;"
                     placeholder="实际控制人姓名"
                     clearable
                     v-model="queryItem.controlPersonName" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际控制人身份证号码"
                      prop="controlPersonIdCard">
              <Input style="width: 80%;"
                     placeholder="实际控制人身份证号码"
                     clearable
                     v-model="queryItem.controlPersonIdCard" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际控制人手机号码"
                      prop="controlPersonPhone">
              <Input style="width: 80%;"
                     placeholder="实际控制人手机号码"
                     clearable
                     v-model="queryItem.controlPersonPhone" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="法人姓名"
                      prop="legalPersonName">
              <Input style="width: 80%;"
                     placeholder="法人姓名"
                     clearable
                     v-model="queryItem.legalPersonName" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="法人身份证号码"
                      prop="legalPersonIdCard">
              <Input style="width: 80%;"
                     placeholder="法人身份证号码"
                     clearable
                     v-model="queryItem.legalPersonIdCard" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="法人手机号码"
                      prop="legalPersonPhone">
              <Input style="width: 80%;"
                     placeholder="法人手机号码"
                     clearable
                     v-model="queryItem.legalPersonPhone" />
            </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
      <!-- card -->
      <div class="card">
        <p class="title"><i></i>前五名供应商合作情况统计表</p>
        <v-table is-horizontal-resize
                 style="width:100%"
                 :columns="providerColumns"
                 :table-data="rmEnterpriseSupplierList"
                 row-hover-color="#eee"
                 row-click-color="#edf7ff"
                 :cell-edit-done="supplyEditDone"></v-table>
      </div>
      <!-- card -->
      <div class="card">
        <p class="title"><i></i>前五名客户合作情况统计表</p>
        <v-table is-horizontal-resize
                 style="width:100%"
                 :columns="customerColumns"
                 :table-data="rmEnterpriseCustomerList"
                 row-hover-color="#eee"
                 row-click-color="#edf7ff"
                 :cell-edit-done="customerEditDone"></v-table>
      </div>
      <!-- card -->
      <div class="card">
        <p class="title"><i></i>委外加工厂</p>
        <v-table is-horizontal-resize
                 style="width:100%"
                 :columns="factoryColumns"
                 :table-data="rmEnterpriseProcessingPlantList"
                 row-hover-color="#eee"
                 row-click-color="#edf7ff"
                 :cell-edit-done="factoryEditDone"></v-table>
      </div>
      <!-- card -->
      <div class="card">
        <p class="title"><i></i>附件上传</p>
        <upload ref="uploadFile"
                :selectList="selectList"></upload>
        <file-listing :fileType="list"></file-listing>
        <div class="btn_box">
          <Button style="margin-right: 20px;"
                  class="btn"
                  @click="commit6(0)">暂存</Button>
          <Button type="primary"
                  class="btn"
                  @click="commit6(1)">提交</Button>
        </div>
      </div>
    </div>

    <!-- [3] 进口（控票、预付及垫付税款50万以内） -->
    <div class="content"
         v-if="type == '3'">
      <div class="card card1">
        <p class="title"><i></i> 企业基本资料</p>
        <Form ref="queryItem"
              :label-width="150"
              :model="queryItem"
              :rules="ruleValidate">
          <Row>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="企业全称"
                      prop="name">
              <Input style="width: 80%;"
                     placeholder="企业全称"
                     clearable
                     disabled
                     v-model="queryItem.name" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际经营地址"
                      prop="address">
              <Input style="width: 80%;"
                     placeholder="实际经营地址"
                     clearable
                     v-model="queryItem.address" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际控制人姓名"
                      prop="controlPersonName">
              <Input style="width: 80%;"
                     placeholder="实际控制人姓名"
                     clearable
                     v-model="queryItem.controlPersonName" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际控制人身份证号码"
                      prop="controlPersonIdCard">
              <Input style="width: 80%;"
                     placeholder="实际控制人身份证号码"
                     clearable
                     v-model="queryItem.controlPersonIdCard" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="实际控制人手机号码"
                      prop="controlPersonPhone">
              <Input style="width: 80%;"
                     placeholder="实际控制人手机号码"
                     clearable
                     v-model="queryItem.controlPersonPhone" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="法人姓名"
                      prop="legalPersonName">
              <Input style="width: 80%;"
                     placeholder="法人姓名"
                     clearable
                     v-model="queryItem.legalPersonName" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="法人身份证号码"
                      prop="legalPersonIdCard">
              <Input style="width: 80%;"
                     placeholder="法人身份证号码"
                     clearable
                     v-model="queryItem.legalPersonIdCard" />
            </FormItem>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="12"
                 style="margin-top: 10px;">
            <FormItem label="法人手机号码"
                      prop="legalPersonPhone">
              <Input style="width: 80%;"
                     placeholder="法人手机号码"
                     clearable
                     v-model="queryItem.legalPersonPhone" />
            </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
      <div class="card">
        <p class="title"><i></i>附件上传</p>
        <upload ref="uploadFile"
                :selectList="selectList"></upload>
        <file-listing :fileType="list"></file-listing>
        <div class="btn_box">
          <Button style="margin-right: 20px;"
                  class="btn"
                  @click="commit3(0)">暂存</Button>
          <Button type="primary"
                  class="btn"
                  @click="commit3(1)">提交</Button>
        </div>
      </div>
    </div>

    <!-- [8,9] 纯物流 / 代理报关-->
    <div class="content"
         v-if="type == '8' || type == '9'">
      <div class="card"
           style="border-bottom: 1px solid #ddd;">
        <p class="title"><i></i> 企业基本资料</p>
        <Form ref="queryItem8"
              :model="queryItem8"
              :rules="ruleValidate8">
          <FormItem label="企业全称"
                    prop="name">
            <Input style="width: 300px;"
                   placeholder="企业全称"
                   clearable
                   disabled
                   v-model="queryItem8.name" />
          </FormItem>
        </Form>
      </div>
      <div class="card">
        <p class="title"><i></i>附件上传</p>
        <upload ref="uploadFile"
                :selectList="selectList"></upload>
        <file-listing :fileType="list"></file-listing>
        <div class="btn_box">
          <Button style="margin-right: 20px;"
                  class="btn"
                  @click="commit8(0)">暂存</Button>
          <Button type="primary"
                  class="btn"
                  @click="commit8(1)">提交</Button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import { logisticsAdd, export1, export2, importLessthan50, importLessthan200, getStorageById } from '@/api/completeMessage'
  import fileListing from '_c/fileListing'
  import upload from '_c/common/upload'
  import { getCompanyinfo, replaceRes } from '@/libs/util'
  export default {
    components: {
      upload,
      fileListing
    },
    name: 'FileUpload',
    data() {
      return {
        companyInfo: '',
        businessApplicationId: '',
        queryItem: {
          name: '',
          address: '',
          controlPersonName: '',
          controlPersonIdCard: '',
          controlPersonPhone: '',
          legalPersonName: '',
          legalPersonIdCard: '',
          legalPersonPhone: ''
        },
        ruleValidate: {
          name: [{ required: true, message: '客户名称不能为空', trigger: 'blur' }],
          address: [{ required: true, message: '实际经营地址不能为空', trigger: 'blur' }],
          controlPersonName: [{ required: true, message: '实际控制人姓名不能为空', trigger: 'blur' }],
          controlPersonIdCard: [{ required: true, message: '实际控制人身份证号码不能为空', trigger: 'blur' }],
          controlPersonPhone: [{ required: true, message: '实际控制人手机号码不能为空', trigger: 'blur' }],
          legalPersonName: [{ required: true, message: '法人姓名不能为空', trigger: 'blur' }],
          legalPersonIdCard: [{ required: true, message: '法人身份证号码不能为空', trigger: 'blur' }],
          legalPersonPhone: [{ required: true, message: '法人手机号码不能为空', trigger: 'blur' }]
        },
        // 前五名供应商
        providerColumns: [
          { field: 'index', title: '序号', width: 50, titleAlign: 'center', columnAlign: 'center', isEdit: false, isResize: false },
          { field: 'supplierName', title: '名称', width: 100, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: true },
          { field: 'tradingProducts', title: '交易产品/服务', width: 150, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: true },
          { field: 'purchaseTotal', title: '上年采购总量（万元）', width: 100, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false },
          { field: 'purchaseRate', title: '占比总采购量', width: 80, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false },
          { field: 'settlementMethod', title: '结算方式', width: 100, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: true },
          { field: 'accountPeriod', title: '账期', width: 80, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false },
          { field: 'cooperationYear', title: '合作年限', width: 80, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false }
        ],
        rmEnterpriseSupplierList: [
          { 'index': '1', 'supplierName': '', 'tradingProducts': '', 'purchaseTotal': '', 'purchaseRate': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' },
          { 'index': '2', 'supplierName': '', 'tradingProducts': '', 'purchaseTotal': '', 'purchaseRate': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' },
          { 'index': '3', 'supplierName': '', 'tradingProducts': '', 'purchaseTotal': '', 'purchaseRate': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' },
          { 'index': '4', 'supplierName': '', 'tradingProducts': '', 'purchaseTotal': '', 'purchaseRate': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' },
          { 'index': '5', 'supplierName': '', 'tradingProducts': '', 'purchaseTotal': '', 'purchaseRate': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' }
        ],
        // 前五名客户
        customerColumns: [
          { field: 'index', title: '序号', width: 50, titleAlign: 'center', columnAlign: 'center', isEdit: false, isResize: false },
          { field: 'customerName', title: '名称', width: 100, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: true },
          { field: 'tradingProducts', title: '交易产品/服务', width: 150, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: true },
          { field: 'purchaseTotal', title: '上年采购总量（万元）', width: 100, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false },
          { field: 'purchaseRate', title: '占比总采购量', width: 80, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false },
          { field: 'settlementMethod', title: '结算方式', width: 100, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: true },
          { field: 'accountPeriod', title: '账期', width: 80, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false },
          { field: 'cooperationYear', title: '合作年限', width: 80, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false }
        ],
        rmEnterpriseCustomerList: [
          { 'index': '1', 'customerName': '', 'tradingProducts': '', 'purchaseTotal': '', 'purchaseRate': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' },
          { 'index': '2', 'customerName': '', 'tradingProducts': '', 'purchaseTotal': '', 'purchaseRate': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' },
          { 'index': '3', 'customerName': '', 'tradingProducts': '', 'purchaseTotal': '', 'purchaseRate': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' },
          { 'index': '4', 'customerName': '', 'tradingProducts': '', 'purchaseTotal': '', 'purchaseRate': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' },
          { 'index': '5', 'customerName': '', 'tradingProducts': '', 'purchaseTotal': '', 'purchaseRate': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' }
        ],
        // 产线情况
        productColumns: [
          { field: 'index', title: '序号', width: 50, titleAlign: 'center', columnAlign: 'center', isEdit: false, isResize: false },
          { field: 'productionLineName', title: '产线名称', width: 100, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: true },
          { field: 'productName', title: '生产产品', width: 150, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: true },
          { field: 'productionCapacity', title: '每条线一天的产能', width: 100, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false },
          { field: 'workingHours', title: '平均每天工作小时', width: 80, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false },
          { field: 'settlementMethod', title: '结算方式', width: 100, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: true },
          { field: 'accountPeriod', title: '账期', width: 80, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false },
          { field: 'workingDays', title: '每月上班天数', width: 80, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false }
        ],
        rmEnterpriseProductionList: [
          { 'index': '1', 'productionLineName': '', 'productName': '', 'productionCapacity': '', 'workingHours': '', 'settlementMethod': '', 'accountPeriod': '', 'workingDays': '' },
          { 'index': '2', 'productionLineName': '', 'productName': '', 'productionCapacity': '', 'workingHours': '', 'settlementMethod': '', 'accountPeriod': '', 'workingDays': '' },
          { 'index': '3', 'productionLineName': '', 'productName': '', 'productionCapacity': '', 'workingHours': '', 'settlementMethod': '', 'accountPeriod': '', 'workingDays': '' },
          { 'index': '4', 'productionLineName': '', 'productName': '', 'productionCapacity': '', 'workingHours': '', 'settlementMethod': '', 'accountPeriod': '', 'workingDays': '' },
          { 'index': '5', 'productionLineName': '', 'productName': '', 'productionCapacity': '', 'workingHours': '', 'settlementMethod': '', 'accountPeriod': '', 'workingDays': '' }
        ],
        // 委外加工厂
        factoryColumns: [
          { field: 'index', title: '序号', width: 50, titleAlign: 'center', columnAlign: 'center', isEdit: false, isResize: false },
          { field: 'productionLineName', title: '产线名称', width: 100, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: true },
          { field: 'productName', title: '加工产品', width: 150, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: true },
          { field: 'proportionTotle', title: '占总产量比重', width: 100, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false },
          { field: 'settlementMethod', title: '结算方式', width: 100, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: true },
          { field: 'accountPeriod', title: '账期', width: 80, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false },
          { field: 'cooperationYear', title: '合作年限', width: 80, titleAlign: 'center', columnAlign: 'left', isEdit: true, isResize: false }
        ],
        rmEnterpriseProcessingPlantList: [
          { 'index': '1', 'productionLineName': '', 'productName': '', 'proportionTotle': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' },
          { 'index': '2', 'productionLineName': '', 'productName': '', 'proportionTotle': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' },
          { 'index': '3', 'productionLineName': '', 'productName': '', 'proportionTotle': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' },
          { 'index': '4', 'productionLineName': '', 'productName': '', 'proportionTotle': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' },
          { 'index': '5', 'productionLineName': '', 'productName': '', 'proportionTotle': '', 'settlementMethod': '', 'accountPeriod': '', 'cooperationYear': '' }
        ],
        // 纯物流
        queryItem8: {
          name: ''
        },
        ruleValidate8: {
          name: [{ required: true, message: '客户名称不能为空', trigger: 'blur' }]
        },
        type: '',
        list: [],
        selectList: [],
        // 附件列表
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
      }
    },
    watch: {
    },
    created() {
      this.type = this.$route.query.type;
      this.businessApplicationId = this.$route.query.businessApplicationId;
      let arr = this.$route.query.arr;
      console.log('this.type', this.type)
      console.log('this.businessApplicationId', this.businessApplicationId)
    },
    computed: {
    },
    mounted() {
      this.companyInfo = getCompanyinfo();
      this.queryItem.name = this.companyInfo.companyChName;
      this.queryItem8.name = this.companyInfo.companyChName;
      if (this.businessApplicationId) {
        this.getStorage(this.businessApplicationId);
      }
      let arr1 = [3, 4, 22, 23, 24, 25, 26, 27, 28, 29, 30]; // 高端制造垫货款
      let arr2 = [2, 3, 4, 7, 8, 9, 10, 11, 12, 13]; // 供应链金融
      let arr3 = [2, 3, 4, 6]; // 进口（不控票或控票但垫付税款>200万）
      let arr4 = [3, 4, 22, 23, 24, 25, 26, 27, 28, 29, 30]; // 高端制造只垫税款
      let arr5 = [2, 3, 4, 14, 16, 17, 18, 20, 21]; // 待办退税/自营出口（自产）
      let arr6 = [2, 3, 4, 15, 16, 17, 18, 19, 20, 21]; // 自用出口（委外加工）
      let arr7 = [1, 3, 4, 5];  // 进口（控票、垫付税款<=200万）
      let arr8 = [1]; // 纯物流/代理报关
      switch (this.type) {
        case '7':  // 高端制造垫货款
          this.getFileList(arr1);
          break;
        case '1':  // 供应链金融
          this.getFileList(arr2);
          break;
        case '5':  // 进口（不控票或控票但垫付税款>200万）
          this.getFileList(arr3);
          break;
        case '6':   // 高端制造只垫税款
          this.getFileList(arr4);
          break;
        case '2':  // 待办退税
          this.getFileList(arr5);
          break;
        case '10':  // 自营出口（自产）
          this.getFileList(arr5);
          break;
        case '11':  // 自用出口（委外加工）
          this.getFileList(arr6);
          break;
        case '3':  // 进口（控票、垫付税款<=200万）
          this.getFileList(arr7);
          break;
        case '4':  // 进口（控票、垫付税款>50万且<=200万）
          this.getFileList(arr7);
          break;
        case '8':  // 纯物流/代理报关
          this.getFileList(arr8);
          break;
        case '9':  // 纯物流/代理报关
          this.getFileList(arr8);
          break;
        default:
          break;
      }
    },
    methods: {
      // 单元格编辑回调
      supplyEditDone(newValue, oldValue, rowIndex, rowData, field) {
        this.rmEnterpriseSupplierList[rowIndex][field] = newValue
      },
      customerEditDone(newValue, oldValue, rowIndex, rowData, field) {
        this.rmEnterpriseCustomerList[rowIndex][field] = newValue
      },
      productEditDone(newValue, oldValue, rowIndex, rowData, field) {
        this.rmEnterpriseProductionList[rowIndex][field] = newValue
      },
      factoryEditDone(newValue, oldValue, rowIndex, rowData, field) {
        this.rmEnterpriseProcessingPlantList[rowIndex][field] = newValue
      },
      // 获取对应上传附件列表
      getFileList(list = []) {
        let arr = [];
        for (var i = 0; i < list.length; i++) {
          arr.push(this.totalList[list[i] - 1]);
        }
        this.list = arr;
        this.selectList = arr;
      },
      getStorage(val) {
        let param = {};
        param.id = val;
        getStorageById(param).then(res => {
          var data = JSON.parse(replaceRes(res.data));
          if (data.state) {
            console.log()
            console.log('getStorageById', data.data)
            let obj = data.data;
            if(obj.businessModelId == '8' || obj.businessModelId == '9') {
            }else {
              this.queryItem.address = obj.nusinessAddress;
              this.queryItem.controlPersonName = obj.controllerName;
              this.queryItem.controlPersonIdCard = obj.controllerIdCard;
              this.queryItem.controlPersonPhone = obj.controllerMobile;
              this.queryItem.legalPersonName = obj.legalName;
              this.queryItem.legalPersonIdCard = obj.legalIdCard;
              this.queryItem.legalPersonPhone = obj.legalMobile;
              this.rmEnterpriseCustomerList = obj.rmEnterpriseCustomerList.map((item,index)=>{
                var vobj = {};
                vobj.index = index + 1;
                vobj.customerName = item.customerName || '';
                vobj.tradingProducts = item.tradingProducts || '';
                vobj.purchaseTotal = item.purchaseTotal || '';
                vobj.purchaseRate = item.purchaseRate || '';
                vobj.settlementMethod = item.settlementMethod || '';
                vobj.accountPeriod = item.accountPeriod || ''; 
                vobj.cooperationYear = item.cooperationYear || '';
                return vobj;
              });
              this.rmEnterpriseProcessingPlantList = obj.rmEnterpriseProcessingPlantList.map((item,index)=>{
                var vobj = {};
                vobj.index = index + 1;
                vobj.productionLineName = item.productionLineName || '';
                vobj.productName = item.productName || '';
                vobj.proportionTotle = item.proportionTotle || '';
                vobj.settlementMethod = item.settlementMethod || '';
                vobj.accountPeriod = item.accountPeriod || '';
                vobj.cooperationYear = item.cooperationYear || '';
                return vobj;
              });
              this.rmEnterpriseProductionList = obj.rmEnterpriseProductionList.map((item,index)=> {
                var vobj = {};
                vobj.index = index + 1;
                vobj.productionLineName = item.productionLineName || '';
                vobj.productName = item.productName || '';
                vobj.productionCapacity = item.productionCapacity || '';
                vobj.workingHours = item.workingHours || '';
                vobj.settlementMethod = item.settlementMethod || '';
                vobj.accountPeriod = item.accountPeriod || '';
                vobj.workingDays = item.workingDays || '';
                return vobj;
              });
              this.rmEnterpriseSupplierList = obj.rmEnterpriseSupplierList.map((item,index)=> {
                var vobj = {};
                vobj.index = index + 1;
                vobj.supplierName = item.supplierName || '';
                vobj.tradingProducts = item.tradingProducts || '';
                vobj.purchaseTotal = item.purchaseTotal || '';
                vobj.purchaseRate = item.purchaseRate || '';
                vobj.settlementMethod = item.settlementMethod || '';
                vobj.accountPeriod = item.accountPeriod || '';
                vobj.cooperationYear = item.cooperationYear || '';
                return vobj;
              });
            }
          } else {
            this.$Message.error(data.message);
          }
        })
      },
      commit() {
        let list = this.$refs.uploadFile.fileList;
        let list1 = this.$refs.uploadFile.fileList.filter(el => el.status1 == '7');
        console.log('list', list);
        console.log('list1', list1);
        // this.$refs.uploadFile.update()
      },
      //  [1,4,5] 供应链金融 / 进口（控票、垫付税款>50万且<=200万)/进口（不控票或控票但垫付税款>200万）
      commit1(val) {
        var param = {};
        param.rmEnterpriseSupplierList = this.rmEnterpriseSupplierList; //前五名供应商
        param.rmEnterpriseCustomerList = this.rmEnterpriseCustomerList; //前五名供应商
        param.nusinessAddress = this.queryItem.address;  //经营地址
        param.controllerName = this.queryItem.controlPersonName;  //控制人姓名
        param.controllerIdCard = this.queryItem.controlPersonIdCard;  //控制人身份证
        param.controllerMobile = this.queryItem.controlPersonPhone;  //控制人电话号码
        param.legalName = this.queryItem.legalPersonName;  //法人姓名
        param.legalIdCard = this.queryItem.legalPersonIdCard;  //法人身份证
        param.legalMobile = this.queryItem.legalPersonPhone;  //法人电话号码
        param.enterpriseId = this.companyInfo.enterpriseId;  //企业id
        param.businessModelId = Number(this.type);   //业务模式id
        param.companyChName = this.companyInfo.companyChName;  //企业名称
        param.businessApplicationId = this.businessApplicationId;  //业务申请id
        param.reviewStatus = val;              //  暂存 || 提交
        console.log('---param---1', param)
        this.$refs['queryItem'].validate(valid => {
          if (valid) {
            importLessthan200(param).then(res => {
              let data = JSON.parse(replaceRes(res.data));
              if (data.code == 200) {
                if (val == 0) {
                  this.$Message.success('暂存成功！');
                  this.businessApplicationId = data.data;
                } else if (val == 1) {
                  this.$Message.success('提交成功！');
                  this.$router.push({ name: 'list' });
                }
              } else {
                this.$Message.error(data.message);
              }
            })
          }
        });
      },
      // [2,10] 待办退税 / 自营出口（自产）
      commit2(val) {
        var param = {};
        param.rmEnterpriseSupplierList = this.rmEnterpriseSupplierList; //前五名供应商
        param.rmEnterpriseCustomerList = this.rmEnterpriseCustomerList; //前五名供应商
        param.rmEnterpriseProductionList = this.rmEnterpriseProductionList; //前五名供应商
        param.nusinessAddress = this.queryItem.address;  //经营地址
        param.controllerName = this.queryItem.controlPersonName;  //控制人姓名
        param.controllerIdCard = this.queryItem.controlPersonIdCard;  //控制人身份证
        param.controllerMobile = this.queryItem.controlPersonPhone;  //控制人电话号码
        param.legalName = this.queryItem.legalPersonName;  //法人姓名
        param.legalIdCard = this.queryItem.legalPersonIdCard;  //法人身份证
        param.legalMobile = this.queryItem.legalPersonPhone;  //法人电话号码
        param.enterpriseId = this.companyInfo.enterpriseId;  //企业id
        param.businessModelId = Number(this.type);   //业务模式id
        param.companyChName = this.companyInfo.companyChName;  //企业名称
        param.businessApplicationId = this.businessApplicationId;  //业务申请id
        param.reviewStatus = val;              //  暂存 || 提交
        console.log('---param---2', param)
        this.$refs['queryItem'].validate(valid => {
          if (valid) {
            export1(param).then(res => {
              let data = JSON.parse(replaceRes(res.data));
              if (data.code == 200) {
                if (val == 0) {
                  this.$Message.success('暂存成功！');
                  this.businessApplicationId = data.data;
                } else if (val == 1) {
                  this.$Message.success('提交成功！');
                  this.$router.push({ name: 'list' });
                }
              } else {
                this.$Message.error(data.message);
              }
            })
          }
        });
      },
      // [6,7,11] 高端制造只垫税款 / 高端制造垫货款）/自用出口（委外加工）
      commit6(val) {
        var param = {};
        param.rmEnterpriseSupplierList = this.rmEnterpriseSupplierList; //前五名供应商
        param.rmEnterpriseCustomerList = this.rmEnterpriseCustomerList; //前五名供应商
        param.rmEnterpriseProcessingPlantList = this.rmEnterpriseProcessingPlantList; //前五名供应商
        param.nusinessAddress = this.queryItem.address;  //经营地址
        param.controllerName = this.queryItem.controlPersonName;  //控制人姓名
        param.controllerIdCard = this.queryItem.controlPersonIdCard;  //控制人身份证
        param.controllerMobile = this.queryItem.controlPersonPhone;  //控制人电话号码
        param.legalName = this.queryItem.legalPersonName;  //法人姓名
        param.legalIdCard = this.queryItem.legalPersonIdCard;  //法人身份证
        param.legalMobile = this.queryItem.legalPersonPhone;  //法人电话号码
        param.enterpriseId = this.companyInfo.enterpriseId;  //企业id
        param.businessModelId = Number(this.type);   //业务模式id
        param.companyChName = this.companyInfo.companyChName;  //企业名称
        param.businessApplicationId = this.businessApplicationId;  //业务申请id
        param.reviewStatus = val;              //  暂存 || 提交
        console.log('---param---2', param)
        this.$refs['queryItem'].validate(valid => {
          if (valid) {
            export2(param).then(res => {
              let data = JSON.parse(replaceRes(res.data));
              if (data.code == 200) {
                if (val == 0) {
                  this.$Message.success('暂存成功！');
                  this.businessApplicationId = data.data;
                } else if (val == 1) {
                  this.$Message.success('提交成功！');
                  this.$router.push({ name: 'list' });
                }
              } else {
                this.$Message.error(data.message);
              }
            })
          }
        });
      },
      //  [3] 进口（控票、预付及垫付税款50万以内）
      commit3(val) {
        var param = {};
        param.nusinessAddress = this.queryItem.address;  //经营地址
        param.controllerName = this.queryItem.controlPersonName;  //控制人姓名
        param.controllerIdCard = this.queryItem.controlPersonIdCard;  //控制人身份证
        param.controllerMobile = this.queryItem.controlPersonPhone;  //控制人电话号码
        param.legalName = this.queryItem.legalPersonName;  //法人姓名
        param.legalIdCard = this.queryItem.legalPersonIdCard;  //法人身份证
        param.legalMobile = this.queryItem.legalPersonPhone;  //法人电话号码
        param.enterpriseId = this.companyInfo.enterpriseId;  //企业id
        param.businessModelId = Number(this.type);   //业务模式id
        param.companyChName = this.companyInfo.companyChName;  //企业名称
        param.businessApplicationId = this.businessApplicationId;  //业务申请id
        param.reviewStatus = val;              //  暂存 || 提交
        console.log('---param---3', param)
        this.$refs['queryItem'].validate(valid => {
          if (valid) {
            importLessthan50(param).then(res => {
              console.log('res', res);
              let data = JSON.parse(replaceRes(res.data));
              console.log('data', data)
              if (data.code == 200) {
                if (val == 0) {
                  this.$Message.success('暂存成功！');
                  this.businessApplicationId = data.data;
                } else if (val == 1) {
                  this.$Message.success('提交成功！');
                  this.$router.push({ name: 'list' });
                }
              } else {
                this.$Message.error(data.message);
              }
            })
          }
        });
      },
      //   [8,9] 纯物流 / 代理报关
      commit8(val) {
        var param = {};
        param.enterpriseId = this.companyInfo.enterpriseId;  //企业id
        param.businessModelId = Number(this.type);   //业务模式id
        param.companyChName = this.companyInfo.companyChName;  //企业名称
        param.businessApplicationId = this.businessApplicationId;  //业务申请id
        param.reviewStatus = val;              //  暂存 || 提交
        console.log('---param---8', param)
        logisticsAdd(param).then(res => {
          let data = JSON.parse(replaceRes(res.data));
          if (data.code == 200) {
            if (val == 0) {
              this.$Message.success('暂存成功！');
              this.businessApplicationId = data.data;
            } else if (val == 1) {
              this.$Message.success('提交成功！');
              this.$router.push({ name: 'list' });
            }
          } else {
            this.$Message.error(data.message);
          }
        })
      },
    }
  }
</script>
<style lang="less">
  .page {
    background-color: #fff;
    padding: 0 15px;
    .content {
      .card {
        padding: 15px 0;
        box-sizing: border-box;
        .title {
          font-weight: 700;
          margin-bottom: 20px;
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
        .btn_box {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
      }
      .card1 {
        border-bottom: 1px solid #ddd;
      }
    }
  }
</style>
