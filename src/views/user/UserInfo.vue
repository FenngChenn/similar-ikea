<!-- 用户个人信息 -->
<template>
  <div class="user-info" v-loading="loading">
    <div class="title">
      <span class="mini-title">我的个人档案----{{$route.params.name}}</span>
      <el-button type="text" @click="logout">退出登录</el-button>
      <!-- <el-button type="primary" @click="jumpto">跳转到百度</el-button> -->
    </div>
    <div>
      <ul>
        <li v-for="item in list" :key="item.aid">{{item.title}}</li>
      </ul>
    </div>
    <router-view :test="test"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo',
    data() {
      return {
        loading: true,
        wishlist: ['candy', 'coffee'],
        currentUser: this.$localStorage.get('currentUser'),
        list: [],
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = false
      }, 800)
      // console.log('当前用户是：', typeof(this.currentUser))
      console.log(this.$route.params)
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
      },
      jumpto() {
        let that = this
        const api =
          'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
        this.$axios
          .get(api)
          .then((res) => {
            // console.log(res.data.result)
            this.list = res.data.result
          })
          .catch((err) => {
            console.log(err)
          })
      },
      test() {
        console.log('testtttttttt')
      },
    },
  }
</script>
<style lang="stylus" scoped>
  @import '~assets/css/main.styl'

  .title
    display: flex
    justify-content: space-around
</style>