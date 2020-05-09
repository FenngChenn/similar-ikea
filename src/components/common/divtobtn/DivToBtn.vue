<!-- div变button -->
<template>
  <div class="btn-content">
    <span>{{btnText}}<i class="el-icon-arrow-right el-icon--right"></i></span>
  </div>
</template>

<script>
export default {
  name: "DivToBtn",
  props: {
    btnText: {
      type: String,
      default: '了解详情'
    }
  }
}

</script>
<style scoped>
.btn-content {
  margin: 1.5rem 0;
}
.btn-content span {
  /* border: 1px solid #407ab1; */
  box-shadow: inset 0 0 0 1px #407ab1;
  padding: .5rem .8rem;
  border-radius: .1rem;
  color: #407ab1;
  font-size: .875rem;
  cursor: pointer;
}
.btn-content span:hover {
  background-color: #407ab1;
  color: #fff;
  transition: transform .25s ease;
}
</style>