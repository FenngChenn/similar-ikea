<!--  -->
<template>
  <div class="user-info" v-loading="loading">
    <div class="title">
      我的个人档案----{{$route.params.name}}
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
      wishlist: ['candy', 'coffee']
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 800);
  },
  beforeRouteLeave(to, from, next) {
    this.wishlist.push('bed')
    console.log(this.wishlist)
    next()
  }
}

</script>
<style scoped>
</style>