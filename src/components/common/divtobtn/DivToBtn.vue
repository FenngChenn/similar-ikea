<!-- div变button -->
<template>
  <div class="btn-content">
    <a class="button-link">
      <span>{{ btnText }}</span>
      <i class="el-icon-arrow-right el-icon--right"></i>
    </a>
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
    display: flex
    margin: (1 / $r) * 44 0

    .button-link
      box-shadow: inset 0 0 0 1px #407ab1
      margin: 0 auto
      padding: (1 / $r) * 20 (1 / $r) * 29
      border-radius: 3px
      color: #407ab1
      cursor: pointer

      &:hover
        background-color: #407ab1
        color: #fff

        i
          transform: translateX((1 / $r) * 10)

      span
        font-size: (1 / $r) * 28

      i
        transition: transform 0.25s ease
</style>