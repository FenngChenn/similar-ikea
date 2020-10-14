<template>
  <div class="toolbar" id="toolbar">
    <div class="bar-item">
      <slot name="delivery"></slot>
    </div>
    <div class="bar-item">
      <slot name="assemble"></slot>
    </div>
    <div class="bar-item">
      <slot name="return"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Toolbar',
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
    position: fixed
    top: 0
    left: 0
    z-index: 12
    transition: all 0.2s
    transform: translate3d(0, 0, 0)

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

  .top
    transition: all 0.2s
    transform: translate3d(0, -100%, 0)
</style>