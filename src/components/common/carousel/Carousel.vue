<!-- 走马灯 -->
<template>
  <div id="carousel">
    <el-carousel height="788px" indicator-position="outside">
      <el-carousel-item v-for="item in carouselImg" :key="item.name">
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
    <!-- {{carouselImg}} -->
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    carouselImg: {
      type: Array,
      required: true
    }
  }
}

</script>
<style scoped>
#carousel {
  position: relative;
  max-width: 1400px;
}

/* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
} */
</style>