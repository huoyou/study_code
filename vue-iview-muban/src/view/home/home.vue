<template>
  <div class="home">
    <div class="content">
      <p class="title">业务类型选择</p>
      <p class="sub_title">请选择所办理业务类型</p>
      <div class="input_box">
        <CheckboxGroup v-model="changeArray"
                       @on-change="handle">
          <Row>
            <Col span="12"
                 v-for="(item,index) in typeList"
                 :key="index">
            <Checkbox :label="item.name"></Checkbox>
            </Col>
          </Row>
        </CheckboxGroup>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {
    },
    data() {
      return {
        typeList: [
          { name: "供应链金融", id: 1 },
          { name: "待办退税", id: 2 },
          { name: "进口（预付或控票垫付税款50万以内）", id: 3 },
          { name: "进口（控票、垫付税款>50万且<=200万）", id: 4 },
          { name: "进口（不控票或控票但垫付税款>200万）", id: 5 },
          { name: "高端制造只垫税款", id: 6 },
          { name: "高端制造垫货款", id: 7 },
          { name: "纯物流", id: 8 },
          { name: "代理报关", id: 9 },
          { name: "自营出口（自产）", id: 10 },
          { name: "自用出口（委外加工）", id: 11 },
        ],
        vertical: 'apple',
        changeArray: [],
      }
    },
    mounted() {
      //
    },
    methods: {
      handle(data) {
        console.log('data', data)
      }
    }
  }
</script>

<style lang="less">
  .home {
    .content {
      margin: 0 auto;
      background-color: #fff;
      width: 600px;
      border-radius: 10px;
      padding: 0 5px;
      height: 800px;
      .title {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 2px;
      }
      .sub_title {
        border-bottom: 1px solid #aaa;
        font-size: 16px;
      }
      .input_box {
        .radio_item {
          position: relative;
          display: flex;
          align-items: center;
          height: 30px;
          line-height: 30px;
          .input {
            width: 0;
            height: 0;
            right: 0;
          }
          .input::after {
            position: absolute;
            content: "";
            width: 16px;
            height: 16px;
            top: 7px;
            left: 0;
            background: url("../../assets/images/log1.png") no-repeat;
            background-size: cover;
          }
          .input:checked::after {
            position: absolute;
            content: "";
            width: 16px;
            height: 16px;
            top: 7px;
            left: 0;
            background: url("../../assets/images/logo-min.jpg") no-repeat;
            background-size: cover;
          }
          .txt {
            font-size: 12px;
            margin-left: 19px;
          }
        }
      }
    }
  }
</style>
