<!-- div变button -->
<template>
  <div class="btn-content">
    <span>
      {{ btnText }}
      <i class="el-icon-arrow-right el-icon--right"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'DivToBtn',
    props: {
      btnText: {
        type: String,
        default: '了解详情',
      },
    },
  }
</script>
<style lang="stylus" scoped>
  .btn-content
    margin: (1 / $r) * 44 0

  .btn-content span
    /* border: 1px solid #407ab1; */
    box-shadow: inset 0 0 0 1px #407ab1
    padding: (1 / $r) * 15 (1 / $r) * 24
    border-radius: (1 / $r) * 3
    color: #407ab1
    font-size: (1 / $r) * 26
    cursor: pointer

    .el-icon--right
      margin: 0

    &:hover
      background-color: #407ab1
      color: #fff
      transition: all 0.25s ease

      i
        transform: translate((1 / $r) * 10, 0)
</style>