<template>
  <div class="collapse-item">
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'HomeCollapseInfo',
  }
</script>

<style lang="stylus" scoped>
  .collapse-item
    border-top: 1px solid #e5e5e5
    height: (1 / $r) * 80
</style>