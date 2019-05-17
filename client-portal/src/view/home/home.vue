<template>
  <div class="home">
    <div class="content">
      <p class="title">业务类型选择</p>
      <p class="sub_title"><i></i>请选择所办理业务类型</p>
      <div class="input_box">
        <CheckboxGroup v-model="changeArray"
                       @on-change="handle">
          <Row>
            <Col span="12"
                 v-for="(item,index) in typeList"
                 :key="index"
                 style="margin: 5px 0;">
            <Checkbox :value="item.id"
                      :label="item.id">
              <span>{{item.name}}</span>
            </Checkbox>
            </Col>
          </Row>
        </CheckboxGroup>
      </div>
      <div class="btn_box">
        <Button type="primary"
                @click="next">开始完善资料</Button>
      </div>
    </div>
  </div>
</template>

<script>
  import { getCompanyinfo, replaceRes } from '@/libs/util'
  export default {
    name: 'home',
    components: {
    },
    data() {
      return {
        typeList: [
          // 同接口：[1,4,5]  [2,10]   [11,6,7]  [8,9]  [3]
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
        ],
        changeArray: [],
        type: '',
        businessApplicationId: ''
      }
    },
    mounted() {
      this.businessApplicationId = getCompanyinfo().businessApplicationId;
    },
    methods: {
      handle(data) {
        console.log('changeArray', this.changeArray)
      },
      next() {
        if (this.changeArray.includes(7)) {
          // 高端制造垫货款
          this.type = '7';
        } else if (this.changeArray.includes(1)) {
          // 供应链金融
          this.type = '1';
        } else if (this.changeArray.includes(5)) {
          // 进口（不控票或控票但垫付税款>200万）
          this.type = '5';
        } else if (this.changeArray.includes(6)) {
          // 高端制造只垫税款
          this.type = '6';
        } else if (this.changeArray.includes(2)) {
          // 待办退税
          this.type = '2';
        }else if (this.changeArray.includes(10)) {
          // 自营出口（自产）
          this.type = '10';
        }
         else if (this.changeArray.includes(11)) {
          // 自用出口（委外加工）
          this.type = '11';
        }else if (this.changeArray.includes(3)) {
          // 进口（预付或控票垫付税款50万以内）
          this.type = '3';
        }else if (this.changeArray.includes(4)) {
          // 进口（控票、垫付税款>50万且<=200万）
          this.type = '4';
        }
         else if (this.changeArray.includes(8)) {
          // 纯物流
          this.type = '8';
        }else if (this.changeArray.includes(9)) {
          // 代理报关
          this.type = '9';
        }
        this.$router.push({ name: 'completeMessage', query: { type: this.type, arr: this.changeArray,businessApplicationId: this.businessApplicationId ,page:'1'} })
      }
    }
  }
</script>

<style lang="less">
  .home {
    .content {
      margin: 0 auto;
      background-color: #fff;
      width: 800px;
      border-radius: 10px;
      padding: 20px 25px;
      .title {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 2px;
        margin-bottom: 10px;
      }
      .sub_title {
        border-bottom: 1px solid #ddd;
        font-weight: 700;
        padding-bottom: 10px;
        margin-bottom: 10px;
        i {
          display: block;
          float: left;
          width: 3px;
          height: 14px;
          background-color: #515a6e;
          margin-right: 5px;
          margin-top: 1px;
        }
      }
      .btn_box {
        text-align: center;
        padding: 10px 0;
      }
    }
  }
</style>
