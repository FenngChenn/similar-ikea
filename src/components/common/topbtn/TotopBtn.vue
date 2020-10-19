<template>
  <div class="topbtn"></div>
</template>

<script>
  export default {
    name: 'TotopBtn',
  }
</script>

<style lang="stylus" scoped>
  .topbtn
    height: (1 / $r) * 70
    width: (1 / $r) * 70
    position: fixed
    right: (1 / $r) * 50
    bottom: (1 / $r) * 80
    background-color: #fff
    border-radius: 50%
    cursor: pointer
    z-index: 20
    background-image: url('../../../assets/img/arrow_up.svg')
    background-repeat: no-repeat
    background-origin: content-box
    background-position: center
    transition: all 0.3s

    &:hover
      background-color: #f5f5f5
      color: #fff
</style>