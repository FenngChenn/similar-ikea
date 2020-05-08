<!--  -->
<template>
  <div id="home">
    <!-- <scroll class="content-scroll" ref="scroll" :probe-type="3"> -->
      <search-bar/>
      <h1>你的家，听你的</h1>
      <carousel :carouselImg="carouselImg"/>
      <div class="order">
        <div class="image-content" v-for="item in gifImg" :key="item">
          <img :src="item" alt="">
          <div class="btn-content">
            <span>了解详情</span>
          </div>
        </div>
      </div>
    <!-- </scroll> -->
  </div>
</template>

<script>
import SearchBar from '@/components/common/searchbar/SearchBar'
import Scroll from '@/components/common/scroll/Scroll'
import Carousel from '@/components/common/carousel/Carousel'


export default {
  name: "Home",
  data () {
    return {
      carouselImg: [
        {
          name: 'newhome',
          src: require('@/assets/img/swiper1.jpg')
        },
        {
          name: 'allhome',
          src: require('@/assets/img/swiper2.jpg')
        },
        {
          name: 'kitchen',
          src: require('@/assets/img/swiper3.jpg')
        },
        {
          name: 'public',
          src: require('@/assets/img/swiper4.jpg')
        },
        {
          name: 'more',
          src: require('@/assets/img/swiper5.jpg')
        }
      ],
      gifImg: ['https://www.ikea.cn/images/0b/90/0b90dc115d128de12050591d2bf2ddf8.gif?f=s',
                'https://www.ikea.cn/images/bc/b7/bcb78af9c298c19a4334d7834fad6cd9.gif?f=s',
                'https://www.ikea.cn/images/3e/95/3e957e046c9ca5b573c04ed2401b5ac7.gif?f=s']
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
  /* background-color: #f6f6f6; */
  /* height: 10rem;
  width: 100%; */
  position: relative;
  max-width: 1200px;
  min-height: 5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 5rem;
}

.image-content {
  flex: 30%;
}
.image-content img {
  width: 100%;
}

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

</style>