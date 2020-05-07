<!--  -->
<template>
  <div id="home">
    <!-- <scroll class="content-scroll" ref="scroll" :probe-type="3"> -->
      <search-bar/>
      <h1>你的家，听你的</h1>
      <carousel :carouselImg="carouselImg"/>
      <div class="order">
        <div class="order-item" v-for="item in 3" :key="item"></div>
      </div>
    <!-- </scroll> -->
  </div>
</template>

<script>
import SearchBar from '@/components/common/searchbar/SearchBar'
import Scroll from '@/components/common/scroll/Scroll'
import Carousel from '@/components/common/carousel/Carousel'

import swiper1 from '@/assets/img/swiper1.jpg'
import swiper2 from '@/assets/img/swiper2.jpg'
import swiper3 from '@/assets/img/swiper3.jpg'
import swiper4 from '@/assets/img/swiper4.jpg'
import swiper5 from '@/assets/img/swiper5.jpg'

export default {
  name: "Home",
  data () {
    return {
      carouselImg: [
        {
          name: 'newhome',
          src: swiper1
        },
        {
          name: 'allhome',
          src: swiper2
        },
        {
          name: 'kitchen',
          src: swiper3
        },
        {
          name: 'public',
          src: swiper4
        },
        {
          name: 'more',
          src: swiper5
        }
      ]
    };
  },
  components: {
    SearchBar,
    Scroll,
    Carousel
  }
}

</script>
<style scoped>
#home {
  position: relative;
  text-align: center;
  height: 100vh;
  padding-bottom: 3rem;
}

.content-scroll {
  height: calc(100% - 44px - 3rem);
  overflow: hidden;
}

.order {
  display: flex;
  justify-content: space-between;
}

.order-item {
  height: 10rem;
  /* width: 100%; */

  flex: 1;
}

.order-item:nth-child(2n) {
    background-color: #99a9bf;
}

.order-item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>