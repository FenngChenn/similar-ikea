<!-- 导航栏 -->
<template>
  <div id="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}

</script>
<style scoped>
#navbar {
  height: 44px;
  line-height: 44px;
  width: 100%;
  display: flex;
  background-color: #fff;
  margin: 1rem auto;
  padding: 0 1rem;
}
.left {
  width: 8rem;
  /* padding-top: 1rem; */
  /* background-color: #666; */
}
.center {
  flex: 1;
  /* background-color: #ff8198; */
}
.right {
  width: 12rem;
  text-align: center;
  /* background-color: lightgreen; */
  /* padding-top: 1rem; */
}
</style>