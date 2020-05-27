<!-- 心愿单 -->
<template>
  <div>
    心愿单
    <el-button @click="test()">test</el-button>
    <el-button type="primary" @click="broadcast()">给shopbag组件广播数据</el-button>
  </div>
</template>

<script>
import VueEvent from '@/components/content/util/VueEvent.js'

export default {
  name: "UserWishlist",
  data() {
    return {
      msg: '哈哈哈哈哈'
    }
  },
  props: ["test"],
  methods: {
    broadcast() {
      return new Promise((resolve, reject) =>{
        VueEvent.$emit('broad-news', this.msg)
        resolve('发出去了')
      }).then(res => {
        console.log(res)
      })
    }
  }
}

</script>
<style scoped>
</style>