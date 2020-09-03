<!-- 心愿单 -->
<template>
  <div class="wish-list">
    <h1>心愿单</h1>
    <div class="todo-list">
      <input type="text" class />
    </div>
    <!-- <el-button @click="test()">test</el-button>
    <el-button type="primary" @click="broadcast()">给shopbag组件广播数据</el-button>-->
  </div>
</template>

<script>
  import VueEvent from '@/components/content/util/VueEvent.js'

  export default {
    name: 'UserWishlist',
    data() {
      return {
        msg: '哈哈哈哈哈',
      }
    },
    props: ['test'],
    methods: {
      broadcast() {
        return new Promise((resolve, reject) => {
          VueEvent.$emit('broad-news', this.msg)
          resolve('发出去了')
        }).then((res) => {
          console.log(res)
        })
      },
    },
  }
</script>
<style lang="stylus" scoped>
  .wish-list
    margin: 0 auto
    width: 100%

    h1
      text-align: center

    .todo-list
      width: 80%
      margin: 0 auto
      padding: 10px
      background-color: #fff
      box-shadow: 0 0 5px #666
</style>