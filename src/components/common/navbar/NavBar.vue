<!-- 导航栏 -->
<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
  }
</script>
<style lang="stylus" scoped>
  .navbar
    height: (1 / $r) * 81
    line-height: (1 / $r) * 81
    width: 100%
    display: flex
    background-color: #fff
    margin: (1 / $r) * 30 auto
    padding: 0 (1 / $r) * 30

  .left
    /* padding-top: 1rem; */
    /* background-color: #666; */

  .center
    flex: 1
    /* background-color: #ff8198; */

  .right
    width: (1 / $r) * 353
    text-align: center
    /* background-color: lightgreen; */
    /* padding-top: 1rem; */
</style>