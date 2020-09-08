<!--  -->
<template>
  <div class="search-bar">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input
          v-model="form.name"
          placeholder="请输入名称"
          prefix-icon="el-icon-search"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        form: {
          name: '',
        },
      }
    },
    props: {},
  }
</script>
<style lang="stylus" scoped>
  .search-bar
    width: 100%
    margin: 0 auto
    padding: 0 (1 / $r) * 30
    font-size: (1 / $r) * 30
</style>