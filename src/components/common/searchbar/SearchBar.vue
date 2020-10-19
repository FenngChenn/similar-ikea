<!--  -->
<template>
  <div class="search-bar">
    <el-form ref="form">
      <el-autocomplete
        class="autocomplete"
        v-model="content"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        :popper-append-to-body="false"
        @select="handleSelect"
        clearable
      ></el-autocomplete>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        content: '',
        goodsList: [],
        timeout: null,
      }
    },
    mounted() {
      this.$axios
        .get('/static/goods.json')
        .then((res) => {
          if (res.data) {
            this.goodsList = res.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    methods: {
      querySearchAsync(queryString, callback) {
        var goodsArr = JSON.parse(JSON.stringify(this.goodsList))
        if (queryString) {
          goodsArr = goodsArr.filter(
            (item) => item.value.toLocaleLowerCase().indexOf(queryString.toLocaleLowerCase()) > -1
          )
        }
        callback(goodsArr)
      },
      handleSelect(item) {
        console.log(item)
      },
    },
  }
</script>
<style lang="stylus" scoped>
  .search-bar
    width: 100%
    margin: 0 auto
    padding: 0 (1 / $r) * 30
    font-size: (1 / $r) * 30
    z-index: 9

    .autocomplete
      width: 100%

  .el-autocomplete-suggestion
    z-index: 1
</style>