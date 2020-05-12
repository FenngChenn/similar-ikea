<!-- 用户登录界面 -->
<template>
  <div class="login">
    <h1>登录</h1>
    <el-form ref="loginForm" :model="user" :label-position="labelPosition" @submit.native.prevent>
      <el-form-item label="姓名">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="user.age"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="user.sex">
          <el-option label="男" value="man"></el-option>
          <el-option label="女" value="woman"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      labelPosition: 'right',
      user: {
        name: '',
        age: '',
        sex: ''
      }
    }
  }
}

</script>
<style scoped>
.login {
  width: 50%;
  margin: 0 auto;
}
</style>