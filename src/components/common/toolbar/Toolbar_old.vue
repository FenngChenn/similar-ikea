<template>
  <div class="toolbar">
    <div class="bar-item">
      <img src="@/assets/img/whitecar.svg" alt />
      <span @click="jumpToService('delivery')">送货服务</span>
    </div>
    <div class="bar-item">
      <img src="@/assets/img/worker.svg" alt />
      <span @click="jumpToService('assemble')">组装服务</span>
    </div>
    <div class="bar-item">
      <img src="@/assets/img/exchange.svg" alt />
      <span @click="jumpToService('return')">退换货政策</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Toolbar',
    methods: {
      jumpToService(id) {
        this.$router.push({
          path: '/customerService/' + id,
        })
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .toolbar
    display: flex
    justify-content: flex-start
    width: 100%
    height: (1 / $r) * 100
    padding: (1 / $r) * 30
    background-color: black
    color: #fff
    margin-bottom: (1 / $r) * 30

    .bar-item
      flex: 1

      &:nth-of-type(1)
        text-align: right

      &:nth-of-type(2)
        text-align: center

      img
        height: (1 / $r) * 40
        width: (1 / $r) * 40
        color: #fff
        vertical-align: middle
        cursor: pointer

      span
        font-size: (1 / $r) * 8
        padding-left: (1 / $r) * 10
        cursor: pointer

        &:hover
          text-decoration: underline
</style>