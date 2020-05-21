<!-- 用户个人信息 -->
<template>
  <div class="user-info" v-loading="loading">
    <div class="title">
      我的个人档案----{{$route.params.name}}
      <el-button type="text" @click="logout">退出登录</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data () {
    return {
      loading: true,
      wishlist: ['candy', 'coffee'],
      currentUser: this.$localStorage.get('currentUser')
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 800);
    console.log('当前用户是：', typeof(this.currentUser))
  },
  beforeRouteLeave(to, from, next) {
    this.wishlist.push('bed')
    console.log(this.wishlist)
    next()
  },
  methods: {
    logout() {
      this.$localStorage.remove('currentUser')
      this.$router.push('/login')
    }
  }
}

</script>
<style scoped>
</style>