<!-- 走马灯 -->
<template>
  <!-- 关于element-ui=>Carousel插件 自适应布局，重新计算bannerHeight，使得图片可以变换尺寸 -->
  <div id="carousel">
    <el-carousel :height="bannerHeight + 'px'" indicator-position="outside">
      <!-- <el-carousel height="788px" indicator-position="outside"> -->
      <el-carousel-item v-for="item in carouselImg" :key="item.name">
        <img ref="bannerHeight" :src="item.src" alt @load="imgLoad" />
      </el-carousel-item>
    </el-carousel>
    <!-- {{carouselImg}} -->
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data() {
      return {
        bannerHeight: '',
      }
    },
    props: {
      carouselImg: {
        type: Array,
        required: true,
      },
    },
    methods: {
      imgLoad() {
        this.$nextTick(() => {
          this.bannerHeight = this.$refs.bannerHeight[0].height
          // console.log(this.$refs.bannerHeight[0].height)
        })
      },
    },
    mounted() {
      this.imgLoad()
      window.addEventListener(
        'resize',
        () => {
          this.bannerHeight = this.$refs.bannerHeight[0].height
          this.imgLoad()
        },
        false
      )
    },
  }
</script>
<style lang="stylus" scoped>
  #carousel
    position: relative
    max-width: 1400px
    margin: (1 / $r) * 30 auto

  #carousel img
    width: 100%

  /* .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        } */
</style>