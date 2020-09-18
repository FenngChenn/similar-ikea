<template>
  <div class="collapse-item" @click="itemClick">
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'HomeCollapseInfo',
    methods: {
      itemClick() {
        this.$emit('itemClick')
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .collapse-item
    border-top: 1px solid #e5e5e5
    height: (1 / $r) * 80
    line-height: (1 / $r) * 80
    cursor: pointer

    &:hover
      span
        color: #8a8a8a
</style>