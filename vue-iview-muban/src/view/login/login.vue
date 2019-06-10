<template>
  <div class="login">
    <p class="title">欢迎登录联合利丰客户门户</p>
    <div class="login-con">
      <img src="../../assets/images/login.jpg"
           alt
           class="img">
      <Card icon="log-in"
            title="欢迎登录"
            :bordered="false"
            class="card"
            style="text-align:center;width: 325px">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import LoginForm from "_c/login-form.vue";
  import { mapActions } from "vuex";
  import { login, logout, queryMessage } from "@/api/user";
  import { setToken, getToken } from "@/libs/util";
  export default {
    components: {
      LoginForm
    },
    methods: {
      ...mapActions(["handleLogin", "getUserInfo"]),
      handleSubmit({ userName, password }) {
        console.log("----hahah-------");
        setToken(""); // 每次登录之前清空token
        var params = {};
        params.username = userName;
        params.password = password;
        login(params)
          .then(res => {
            var data = res.data;
            var that = this;
            console.log('data', data)
            if (res.data.type == String) {
              var data = JSON.parse(replaceRes(res.data));
            } else {
              var data = res.data;
            }
            if (data.code == 200) {
              console.log('成功',that.$config.homeName)
              that.$Message.success('登录成功');
              setToken(data.data.token);
              that.$router.push({
                name: that.$config.homeName
              });
            } else {
              this.$Notice.error({
                title: "温馨提示",
                desc: data.message
              });
            }
          })
          .catch(error => {
            var time = error.toString().indexOf("timeout");
            if (time > 0) {
              this.$Notice.error({
                title: "温馨提示",
                desc: "请求超时"
              });
            }
          });
      }
    }
  };
</script>

<style lang="less">
  .login {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/login-bg.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 36px;
      color: #fff;
      margin: 60px 0;
    }
    &-con {
      display: flex;
      .img {
        width: 325px;
        height: 300px;
      }
      .card {
        border-radius: 0;
        // background-color: rgba(0, 0, 0, 0.7);
        color: #00deff;
        font-size: 20px;
      }
      &-header {
        font-size: 16px;
        font-weight: 300;
        text-align: center;
        padding: 30px 0;
      }
      .form-con {
        padding: 10px 0 0;
      }
      .login-tip {
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
      }
    }
  }
</style>
