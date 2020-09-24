<!--  -->
<template>
  <div class="search-bar">
    <el-form ref="form">
      <el-form-item>
        <el-autocomplete
          v-model="content"
          placeholder="请输入名称"
          prefix-icon="el-icon-search"
          :fetch-suggestions="querySearchAsync"
          clearable
        ></el-autocomplete>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        content: '',
        goods: [],
        timeout: null,
      }
    },
    mounted() {
      this.$axios
        .get('/static/goods.json')
        .then((res) => {
          this.goods = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    methods: {
      querySearchAsync(queryString, cb) {
        console.log(queryString)
        let goods = this.goods
        console.log(goods[0])
        let results = queryString ? goods.filter(this.inputFilter) : goods

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          cb(results)
        }, 3000 * Math.random())
      },
      inputFilter(good) {
        return good
        // return (good) => {
        //   return good.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        // }
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
</style>