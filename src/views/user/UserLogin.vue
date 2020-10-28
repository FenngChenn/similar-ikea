<!-- 用户登录界面 -->
<template>
  <div class="login" v-loading="loading">
    <h1>登录</h1>
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      :label-position="labelPosition"
      status-icon
      @submit.native.prevent
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="loginForm.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitFormByVuex('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="text" @click="toRegister">去注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'UserLogin',
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        } else {
          callback()
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      return {
        labelPosition: 'top',
        loginForm: {
          name: '',
          pass: '',
        },
        rules: {
          name: [{ validator: checkName, trigger: 'blur' }],
          pass: [{ validator: validatePass, trigger: 'blur' }],
        },
        loading: true,
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = false
      }, 800)
    },
    methods: {
      submitFormByVuex(formName) {
        let path = ''
        let isExist = false
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let users = this.$store.state.users
            // console.log('注册用户组：', users.length)
            if (users.length > 0) {
              for (let user of users) {
                if (this.loginForm.name === user.name) {
                  isExist = true
                  if (this.loginForm.pass === user.pass) {
                    path = '/user/' + this.loginForm.name
                    this.$store.commit('addCurrentUser', user)
                    break
                  } else {
                    this.$message.error({
                      message: '用户密码输入有误',
                      center: true,
                    })
                  }
                }
              }
              if (!isExist) {
                this.$confirm('此账号不存在！是否创建？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning',
                })
                  .then(() => {
                    console.log('success')
                    this.$router.push('/register')
                  })
                  .catch(() => {
                    this.$router.push('/')
                  })
              } else {
                this.$router.push({
                  path: path,
                })
              }
            } else {
              this.$message({
                message: '无注册用户存在！请去注册！',
                type: 'warning',
              })
            }
          }
        })
      },
      /*submitForm(formName) {
                // console.log(JSON.parse(this.$localStorage.get('users')))
                let isExist = false
                this.$refs[formName].validate((valid) => {
                  if (valid) {
                    let path = ''
                    let users = JSON.parse(this.$localStorage.get('users'))
                    if (users) {
                      console.log(users)
                      for (let user of users) {
                        if (this.loginForm.name === user.name) {
                          if (this.loginForm.pass === user.pass) {
                            this.$localStorage.set('currentUser', JSON.stringify(this.loginForm))
                            path = '/user/' + this.loginForm.name
                            isExist = true
                            break
                          } else {
                            this.$message.error({
                              message: '用户密码输入有误',
                              center: true,
                            })
                          }
                        }
                      }
                      if (!isExist) {
                        this.$confirm('此账号不存在！是否创建？', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          type: 'warning',
                        })
                          .then(() => {
                            console.log('success')
                            this.$router.push('/register')
                          })
                          .catch(() => {
                            this.$router.push('/')
                          })
                      } else {
                        this.$router.push({
                          path: path,
                        })
                      }
                    } else {
                      this.$message({
                        message: '无注册用户存在！请去注册！',
                        type: 'warning',
                      })
                    }
                  } else {
                    console.log('error submit')
                    return false
                  }
                })
              },*/
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      toRegister() {
        this.$router.push('/register')
      },
    },
  }
</script>
<style lang="stylus" scoped>
  .login
    width: 40%
    margin: 0 auto
    text-align: center

  .login h1
    font-size: (1 / $r) * 59
    margin: (1 / $r) * 60 auto
</style>