<!-- 注册 -->
<template>
  <div class="register" v-loading="loading">
    <h1>注册</h1>
    <el-form ref="registerForm" :model="registerForm" :rules="rules" :label-position="labelPosition" 
          status-icon @submit.native.prevent>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="registerForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="registerForm.pass"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="registerForm.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
        <el-button @click="resetForm('registerForm')">重置</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="text" @click="backToLogin">返回登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "UserRegister",
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
      }else{
        if(this.registerForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass')
        }
        callback()
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请再次输入密码'))
      }else if(value !== this.registerForm.pass){
        callback(new Error('两次输入的密码不一致！'))
      }else{
        callback()
      }
    };
    return {
      labelPosition: 'top',
      registerForm: {
        name: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [
          {validator: checkName, trigger: 'blur'}
        ],
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
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
      this.$refs[formName].validate((valid) => {
        if(valid) {
          // 取出当前用户名及密码
          let user = {};
          user.name = this.registerForm.name;
          user.pass = this.registerForm.pass;
          // 取出localStorage中的用户信息
          let users = JSON.parse(this.$localStorage.get('users'))
          // if(users === null) {
          //   users = []
          //   users.push(user)
          // }else {
          //   users.push(user)
          // }
          users = users ? users : []
          users.push(user)
          // 把新数据再放回localStorage中
          this.$localStorage.set('users', JSON.stringify(users))
          this.$router.push({
            path: '/user/'+this.registerForm.name
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
    backToLogin() {
      this.$router.push('/login')
    }
  }
}

</script>
<style scoped>
.register {
  width: 40%;
  margin: 0 auto;
  text-align: center;
}
.register h1 {
  margin: 2rem auto;
}
</style>