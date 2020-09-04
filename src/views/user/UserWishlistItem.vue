<template>
  <div class="list-item">
    <input type="checkbox" v-model="currentItem.completed" />
    <label>{{currentItem.content}}</label>
    <button @click="deleteItem"></button>
  </div>
</template>

<script>
  export default {
    name: 'UserWishlistItem',
    props: {
      currentItem: {
        type: Object,
      },
    },
    methods: {
      deleteItem() {
        this.$emit('deleteItem', this.currentItem.id)
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~assets/css/theme.styl'

  .list-item
    padding: 10px
    font-weight: 600
    font-size: 18px
    border-top: 1px solid rgba(0, 0, 0, 0.1)
    display: flex
    justify-content: space-between

    &:hover
      button:after
        content: 'x'
        color: $red

    input
      clearStyle()
      width: 50px

      &:after
        content: url('~assets/img/unchecked.svg')

      &:checked:after
        content: url('~assets/img/checked.svg')

    label
      flex: 1

    button
      clearStyle()
      background-color: transparent
      cursor: pointer
</style>