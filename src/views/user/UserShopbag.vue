<!-- 心愿单 -->
<template>
  <div>购物袋</div>
</template>

<script>
import VueEvent from '@/components/content/util/VueEvent.js'

export default {
  name: "UserShopbag",
  mounted() {
    VueEvent.$on('broad-news', data => {
      console.log(data)
    })
  },
  destroyed() {
    console.log('destroy')
  }
}

</script>
<style scoped>
</style>