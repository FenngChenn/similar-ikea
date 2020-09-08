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
  .list-item
    padding: (1 / $r) * 18
    font-weight: 600
    font-size: (1 / $r) * 33
    border-top: 1px solid rgba(0, 0, 0, 0.1)
    display: flex
    justify-content: space-between

    &:hover
      button:after
        content: 'x'
        font-size: (1 / $r) * 44
        color: $red

    input
      clearStyle()
      width: (1 / $r) * 92

      &:after
        content: url('~assets/img/unchecked.svg')

      &:checked:after
        content: url('~assets/img/checked.svg')

    label
      flex: 1
      font-size: (1 / $r) * 44

    button
      clearStyle()
      background-color: transparent
      cursor: pointer
</style>