<!--  -->
<template>
  <div class="search-bar">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.name" placeholder="请输入名称" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      form: {
        name: ''
      }
    }
  },
  props: {
  }
}

</script>
<style scoped>
.search-bar {
  margin: 0 1rem;
}
</style>