<!-- 心愿单 -->
<template>
  <div class="wish-list">
    <h1>心愿单</h1>
    <div class="todo-list">
      <input
        type="text"
        class="add-todo"
        v-model="product"
        placeholder="来这里记录你心仪的产品吧！"
        @keyup.enter="addTodo"
      />
      <user-wishlist-item
        v-for="(item, index) in wishlist"
        :key="index"
        :currentItem="item"
      ></user-wishlist-item>
    </div>
    <!-- <el-button @click="test()">test</el-button>
    <el-button type="primary" @click="broadcast()">给shopbag组件广播数据</el-button>-->
  </div>
</template>

<script>
  import VueEvent from '@/components/content/util/VueEvent.js'
  import UserWishlistItem from './UserWishlistItem'

  export default {
    name: 'UserWishlist',
    components: {
      UserWishlistItem,
    },
    data() {
      return {
        msg: '哈哈哈哈哈',
        product: '',
        id: 0,
        wishlist: [],
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
      addTodo() {
        if (this.product == '') return
        this.wishlist.unshift({
          id: this.id++,
          content: this.product,
          completed: false,
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
      font-size: (1 / $r) * 59

    .todo-list
      width: 80%
      margin: 0 auto
      padding: 10px
      background-color: #fff
      box-shadow: 1px 0 5px #666

      .add-todo
        width: 100%
        padding: 10px 10px 10px 20px
        border: none
        outline: none
</style>