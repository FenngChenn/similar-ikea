<!-- home页的主要flex布局 -->
<template>
  <div class="home-flex">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="center"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeFlex',
  }
</script>
<style lang="stylus" scoped>
  .home-flex
    display: flex
    justify-content: space-between
    max-width: 1200px
    margin: 0 auto

  .home-flex div
    flex: 30%
    padding-right: (1 / $r) * 30

  .home-flex div img
    width: 100%
    margin-bottom: (1 / $r) * 24
    cursor: pointer
    transition: all 0.4s

    &:hover
      transform: scale(1.02)
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4)
</style>