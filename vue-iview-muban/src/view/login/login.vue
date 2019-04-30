<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in"
            title="欢迎登录"
            :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import LoginForm from '_c/login-form.vue'
  import { mapActions } from 'vuex'
  import { login, logout, queryUser } from '@/api/user'
  import { setToken, getToken } from '@/libs/util'
  export default {
    components: {
      LoginForm
    },
    methods: {
      ...mapActions([
        'handleLogin',
        'getUserInfo'
      ]),
      // handleSubmit({ userName, password }) {
      //   this.handleLogin({ userName, password }).then(res => {
      //     let data = JSON.parse(res)
      //     if (data.code == 200) {
      //       this.$Message.success(data.message);
      //       localStorage.tagNaveList = [];
      //       setToken(data.data.token);
      //       this.$router.push({
      //         name: this.$config.homeName
      //       })
      //     } else {
      //       this.$Notice.error({
      //         title: '温馨提示',
      //         desc: data.message
      //       })
      //     }
      //   }).catch((error) => {
      //     var time = error.toString().indexOf('timeout')
      //     if (time > 0) {
      //       this.$Notice.error({
      //         title: '温馨提示',
      //         desc: '请求超时'
      //       })
      //     }
      //   })
      // },
      handleSubmit ({ userName, password }) {
        setToken('') // 每次登录之前清空token
        var params = {}
        params.username = userName
        params.password = password
        login(params).then((res) => {
          var data = JSON.parse(res.data)
          if (data.state) {
            this.$Message.success(data.message)
            localStorage.tagNaveList = []
            setToken(data.data.token)
            window.location.href = 'www.baidu.com'
            this.$router.push({
              name: 'home'
            })
          } else {
            this.$Notice.error({
              title: '温馨提示',
              desc: data.message
            })
          }
        }).catch((error) => {
          var time = error.toString().indexOf('timeout')
          if (time > 0) {
            this.$Notice.error({
              title: '温馨提示',
              desc: '请求超时'
            })
          }
        })
      }
    }
  }
</script>

<style lang="less">
  .login {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/login-bg.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    &-con {
      position: absolute;
      right: 160px;
      top: 50%;
      transform: translateY(-60%);
      width: 300px;
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
