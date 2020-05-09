<!-- home页的主要flex布局 -->
<template>
  <div class="home-flex">
      <div><slot name="left"></slot></div>
      <div><slot name="center"></slot></div>
      <div><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "HomeFlex"
}

</script>
<style scoped>
.home-flex {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.home-flex div {
  flex: 30%;
  padding-right: 1rem;
}
.home-flex div img {
  width: 100%;
  margin-bottom: .8rem;
  cursor: pointer;
}
</style>