<!-- 用户登录界面 -->
<template>
  <div class="login">
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
      }
    }
  },
  methods: {
    submitForm(formName) {
      console.log(JSON.parse(this.$localStorage.get('users')))
      this.$refs[formName].validate((valid) => {
        if(valid) {
          let path = '';
          let users = JSON.parse(this.$localStorage.get('users'))
          for(let user of users) {
            if(this.loginForm.name === user.name) {
              this.$localStorage.set('currentName', JSON.stringify(this.loginForm.name))
              path = '/user';
              break;
            }else{
              path = '/register'
            }
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