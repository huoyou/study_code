<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick" placement='bottom-end'>
      <span style="font-size: 12px">{{userName}}</span>
      <Avatar :src="userAvatar"/>
      <!-- <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar> -->
      <Icon :size="18"
            type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="changePassword">修改密码</DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Modal v-model="changePasswordModel"
           :mask-closable="false"
           width="460">
      <p slot="header"
         style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>修改用户名或密码</span>
      </p>
      <div style="text-align:center">
        <Form ref="formItem"
              :model="formItem"
              :rules="ruleInline"
              :label-width="80">
          <FormItem label="用户名"
                    prop="userName">
            <Input v-model="formItem.userName"
                   placeholder="用户名"></Input>
          </FormItem>
          <FormItem label="原始密码"
                    prop="password">
            <Input type="password"
                   v-model="formItem.password"
                   placeholder="原始密码"></Input>
          </FormItem>
          <FormItem label="新密码"
                    prop="newPassword">
            <Input type="password"
                   v-model="formItem.newPassword"
                   placeholder="新密码"></Input>
          </FormItem>
          <FormItem label="确认密码"
                    prop="confirmPassword">
            <Input type="password"
                   v-model="formItem.confirmPassword"
                   placeholder="确认新密码"></Input>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button size="large"
                @click="changePasswordModel = false">关闭</Button>
        <Button type="primary"
                :loading="modal_loading"
                @click="savePassword">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex'
  import { queryUser, modifyUser } from '@/api/user'
  import { replaceRes } from '@/libs/util'
  export default {
    name: 'User',
    props: {
      userAvatar: {
        type: String,
        default: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
      }
    },
    data() {
      const pwdCheckValidate = (rule, value, callback) => {
        if (this.formItem.confirmPassword !== '' && value === '') {
          callback(new Error('确认密码不能为空'))
        } else if (this.formItem.newPassword !== this.formItem.confirmPassword) {
          callback(new Error('新密码和确认密码不一致'))
        } else {
          callback()
        }
      }
      return {
        userInfo: {}, // 显示用户信息
        modal_loading: false,
        login_page: 'login',
        changePasswordModel: false,
        formItem: {
          userName: '',
          password: '',
          newPassword: '',
          confirmPassword: ''
        },
        ruleInline: {
          userName: [
            { required: true, message: '必填字段', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '必填字段', trigger: 'blur' },
            { type: 'string', min: 6, message: '必须大于6位字符的密码', trigger: 'blur' }
          ],
          newPassword: [
            { required: true, message: '必填字段', trigger: 'blur' },
            { type: 'string', min: 6, message: '必须大于6位字符的密码', trigger: 'blur' }
          ],
          confirmPassword: [
            { required: true, validator: pwdCheckValidate, trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      userName() {
        return this.$store.state.user.userName
      }
    },
    methods: {
      ...mapActions([
        'handleLogOut',
        'getUserInfo'
      ]),
      handleClick(name) {
        switch (name) {
          case 'logout':
            this.handleLogOut().then(() => {
              this.$router.push({
                name: 'login'
              })
            })
            break
          case 'changePassword':
            this.changePasswordModel = true
            break
        }
      },

      /**
         * 登录成功获取用户信息
         * */
      getUser() {
        queryUser().then((res) => {
          var data = JSON.parse(replaceRes(res.data))
          if (data.state) {
            this.userInfo = data.data
            this.formItem.userName = this.userInfo.userNo
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
      },
      savePassword() {
        this.$refs.formItem.validate((valid) => {
          if (valid) {
            this.modal_loading = true
            var params = {}
            params.userNo = this.formItem.userName
            params.password = this.formItem.password
            params.newPassword = this.formItem.newPassword
            params.id = this.userInfo.userId
            modifyUser(params).then((res) => {
              this.modal_loading = false
              var data = JSON.parse(res.data)
              if (data.state) {
                this.changePasswordModel = false
                this.$Modal.success({
                  title: '温馨提示',
                  content: data.message,
                  onOk: () => {
                    this.handleLogOut().then(() => {
                      this.$router.push({
                        name: this.login_page
                      })
                    })
                  }
                })
              } else {
                this.modal_loading = false
                this.$Modal.error({
                  title: '温馨提示',
                  content: data.message
                })
              }
            }).catch((error) => {
              this.modal_loading = false
              var time = error.toString().indexOf('timeout')
              if (time > 0) {
                this.$Modal.error({
                  title: '温馨提示',
                  content: '请求超时'
                })
              }
            })
          }
        })
      },
    },
    mounted() {
      // this.getUser()
      this.getUserInfo();
    },
    created() {
    }
  }
</script>
