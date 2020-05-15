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
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 800);
  },
}

</script>
<style scoped>
</style>