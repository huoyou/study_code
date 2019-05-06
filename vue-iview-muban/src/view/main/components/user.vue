<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      {{userName}}
      <Avatar :src="userAvator" />
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
// import { queryUser } from "@/api/user"
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'User',
  props: {
    userAvator: {
      type: String,
      default: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
    }
  },
  data () {
    return {
      userInfo: {},  // 显示用户信息
      login_page: "login"
    }
  },
  computed: {
    userName () {
      return this.$store.state.user.userName
    },
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    handleClick (name) {
      switch (name) {
        case 'logout':
          this.handleLogOut().then(() => {
            this.$router.push({
                name: this.login_page
            })
          })
          break
      }
    },
    /**
     * 登录成功获取用户信息
     * */
    getUser() {
      getUserInfo().then((res) => {
        var data = JSON.parse(res.data)
        console.log('data',data)
        if (data.state) {
          this.userInfo = data.data
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
  },
  mounted () {
    /**
     * 页面加载
     */
  }
}
</script>
<style lang="less">
.user{
  &-avator-dropdown{
    cursor: pointer;
    display: inline-block;
    // height: 64px;
    vertical-align: middle;
    // line-height: 64px;
  }
}

</style>
