<!-- 用户登录界面 -->
<template>
  <div class="login" v-loading="loading">
    <h1>登录</h1>
    <el-form ref="loginForm" :model="loginForm" :rules="rules" :label-position="labelPosition" 
          status-icon @submit.native.prevent>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="loginForm.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
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
  name: "UserLogin",
  data() {
    var checkName = (rule, value, callback) => {
      if(!value) {
        return callback(new Error('用户名不能为空'))
      }else{
        callback()
      }
    };
    var validatePass = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请输入密码'))
      }else {
        callback();
      }
    };
    return {
      labelPosition: 'top',
      loginForm: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          {validator: checkName, trigger: 'blur'}
        ],
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ]
      },
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 800);
  },
  methods: {
    submitForm(formName) {
      // console.log(JSON.parse(this.$localStorage.get('users')))
      this.$refs[formName].validate((valid) => {
        if(valid) {
          let path = '';
          let users = JSON.parse(this.$localStorage.get('users'))
          if(users) {
            for(let user of users) {
              if(this.loginForm.name === user.name) {
                if(this.loginForm.pass === user.pass) {
                  this.$localStorage.set('currentName', JSON.stringify(this.loginForm.name))
                  path = '/user';
                  break;
                }else{
                  this.$message.error({
                    message: '用户密码输入有误',
                    center: true
                  })
                }
              }else{
                this.$confirm('此账号不存在！是否创建？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  console.log('success')
                  this.$router.push('/register')
                }).catch(() => {
                  this.$router.push('/')
                });
              }
            }
          }else{
            this.$message({
              message: '无用户存在！',
              type: 'warning'
            })
          }
          this.$router.push({
            path: path
          })
        }else {
          console.log('error submit');
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toRegister() {
      this.$router.push('/register')
    }
  }
}

</script>
<style scoped>
.login {
  width: 40%;
  margin: 0 auto;
  text-align: center;
}
.login h1 {
  margin: 2rem auto;
}
</style>