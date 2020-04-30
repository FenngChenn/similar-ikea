<!-- 主页中不动地方的导航栏 -->
<template>
  <nav-bar>
    <div slot="left">
      <img src="@/assets/img/ikea-logo.svg" alt="">
    </div>
    <div slot="center">
      <div class="detail-nav">
        <div v-for="(item, index) in navContent" :key="index"></div>
      </div>
    </div>
    <div slot="right">
      cccccccccc
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: "HomeNav",
  components: {
    NavBar
  },
  data() {
    return {
      navContent: ['精选活动', '所有房间', '所有商品', '布置灵感', '新品推荐']
    }
  }
}

</script>
<style scoped>
.detail-nav {
  display: flex;
  padding-right: 10rem;
}

.detail-nav div {
  flex: 1;
}
</style>