<template>
  <div class="container">
    <div class="item_box">
      <!-- <div class="title">请您对本酒店服务进行评价，我们会根据您的意见和建议不断改进，为您提供更加满意的服务。</div> -->
      <div class="item" v-for="(item,index) in questionList" :key="index">
        <p class="question">{{index+1}}、{{item.name}}</p>
        <div class="answer_box">
          <div
            class="radio_item"
            :class="index1 == 4 ? 'radio_item1' : null"
            v-for="(item1,index1) in answerList"
            :key="index1"
          >
            <input type="radio" :name="index+1" v-model="item.id" :value="index1+1" :id="`${index}_${index1}`">
            <label class="txt" :for="`${index}_${index1}`">{{item1.name}}</label>
          </div>
        </div>
      </div>
      <div class="advice">
        <p class="advice_title">8、您对物业服务的期望和建议：</p>
        <div class="advice_box">
          <textarea class="textarea" v-model="adviceMsg" placeholder="请输入您对物业服务的期望和建议"></textarea>
        </div>
      </div>
      <div class="footer" style="height:0.6px;"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      adviceMsg: null,
      question1: null,
      question2: null,
      question3: null,
      question4: null,
      question5: null,
      question6: null,
      question7: null,
      question8: null,
      question9: null,
      question10: null,
      questionnaire_no: 111,
      access_token: null,
      type: null,
      questionList: [
        { name: "您对物业服务人员统一着装、佩戴工牌是否满意？", id: null },
        { name: "您对物业服务人员行为规范、热情服务是否满意？", id: null },
        { name: "您对物业服务中心24小时服务电话和人员值班情况是否满意？", id: null },
        { name: "您对公寓楼灯光是否满意？", id: null },
        { name: "您对公寓环境是否满意？", id: null },
        { name: "您对公寓安全保卫是否满意？", id: null },
        { name: "您对公寓公共设施设备的正常运行是否满意？", id: null },
      ],
      answerList: [
        { name: "很满意", id: 1 },
        { name: "满意", id: 2 },
        { name: "一般", id: 3 },
        { name: "不满意", id: 4 },
        { name: "很不满意", id: 5 }
      ],
      answerArr: []
    };
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style lang="less">
.container {
  padding: 15px;
}
.container .title {
  font-size: 16px;
  color: #313131;
  margin-bottom: 0.27px;
}
.container .item_box {
  margin-top: 15px;
}
.box .item {
  margin-bottom: 10px;
}
.item .question {
  font-size: 14px;
  color: #313131;
  font-weight: 700;
}
.item .answer_box {
  margin: 0.1px 0;
  display: flex;
  flex-wrap: wrap;
}
.item .answer_box .radio_item {
  position: relative;
  width: 25%;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 30px;
}
.item .answer_box .radio_item1 {
  width: 50%;
}
.item .answer_box .radio_item input {
  width: 0;
  height: 0;

  right: 0;
}
.item .answer_box .radio_item input::after {
  position: absolute;
  content: "";
  width: 16px;
  height: 16px;
  top: 7px;
  left: 0;
  background: url("../../assets/images/log1.png") no-repeat;
  background-size: cover;
}
.item .answer_box .radio_item input:checked::after {
  position: absolute;
  content: "";
  width: 16px;
  height: 16px;
  top: 7px;
  left: 0;
  background: url("../../assets/images/logo2.png") no-repeat;
  background-size: cover;
}
.item .answer_box .radio_item .txt {
  font-size: 0.12px;
  margin-left: 0.19px;
}

.advice {
  margin-top: 0.1px;
}
.advice .advice_title {
  font-size: 0.14px;
  color: #313131;
  font-weight: 700;
}
.advice .advice_box {
  margin-top: 0.05px;
}
.advice .advice_box .textarea {
  width: 3.45px;
  height: 1.51px;
  background-color: #f8f9f9;
  border-radius: 0.04px;
  padding: 0.125px 0.15px;
  font-size: 0.14px;
  color: #131719;
  box-sizing: border-box;
}
.btn {
  position: fixed;
  width: 3.45px;
  height: 0.44px;
  line-height: 0.44px;
  text-align: center;
  color: #fff;
  left: 0.15px;
  bottom: 0.1px;
  background-color: #c46022;
  box-sizing: border-box;
  border-radius: 0.05px;
}
</style>