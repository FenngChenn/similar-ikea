<!-- 主页中不动地方的导航栏 -->
<template>
  <nav-bar>
    <div slot="left">
      <img src="@/assets/img/ikea-logo.svg" alt="">
    </div>
    <div slot="center">
      <div class="detail-nav">
        <div v-for="(item, index) in navContent" :key="index">{{item}}</div>
        <!-- <el-menu class="el-menu-demo" mode="horizontal" :default-active="activeIndex" @select="handleSelect">
          <el-menu-item v-for="(item, index) in navContent" :key="index" :index="(index+1).toString()">
            {{item}}
          </el-menu-item>
        </el-menu> -->
      </div>
    </div>
    <div slot="right">
      <img src="@/assets/img/user.svg" alt="">
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
      navContent: ['精选活动', '所有房间', '所有商品', '布置灵感', '新品推荐'],
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}

</script>
<style scoped>
.detail-nav {
  display: flex;
  padding-right: 4rem;
}

.detail-nav div {
  flex: 1;
}
</style>