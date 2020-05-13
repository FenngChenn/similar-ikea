<!--  -->
<template>
  <div id="home">
    <!-- <scroll class="content-scroll" ref="scroll" :probe-type="3"> -->
      <search-bar/>
      <h1>{{title1}}</h1>
      <carousel :carouselImg="carouselImg"/>
      <div class="order">
        <div class="image-content" v-for="item in gifImg" :key="item">
          <img :src="item" alt="">
          <div-to-btn :btnText="btnText1"/>
        </div>
      </div>
      <div id="title">
        <h2>{{title2}}</h2>
      </div>
      <home-flex>
        <template v-slot:left>
          <img v-for="item in roomsImg1" :key="item.id" :src="item.ref" @click="toRooms(item.id)">
        </template>
        <template v-slot:center>
          <img v-for="item in roomsImg2" :key="item.id" :src="item.ref" @click="toRooms(item.id)">
        </template>
        <template v-slot:right>
          <img v-for="item in roomsImg3" :key="item.id" :src="item.ref" @click="toRooms(item.id)">
        </template>
      </home-flex>
      <div-to-btn :btnText="btnText2"/>
    <!-- </scroll> -->
  </div>
</template>

<script>
import SearchBar from '@/components/common/searchbar/SearchBar'
import Scroll from '@/components/common/scroll/Scroll'
import Carousel from '@/components/common/carousel/Carousel'
import DivToBtn from '@/components/common/divtobtn/DivToBtn'

import HomeFlex from '@/components/content/home/HomeFlex'


export default {
  name: "Home",
  data () {
    return {
      title1: '你的家，听你的',
      title2: '迎接春天，发现家的心意',
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
                'https://www.ikea.cn/images/3e/95/3e957e046c9ca5b573c04ed2401b5ac7.gif?f=s'],
      btnText1: '了解详情',
      btnText2: '查看更多房间',
      roomsImg1: [
        {
          id: 'parlour',
          ref: require('@/assets/img/flex1-1.jpg')
        },{
          id: 'bedroom',
          ref: require('@/assets/img/flex1-2.jpg')
        }
      ],
      roomsImg2: [
        {
          id: 'kidroom',
          ref: require('@/assets/img/flex2-1.jpg')
        },{
          id: 'restaurant',
          ref: require('@/assets/img/flex2-2.jpg')
        }
      ],
      roomsImg3: [
        {
          id: 'kitchen',
          ref: require('@/assets/img/flex3-1.jpg')
        },{
          id: 'bathroom',
          ref: require('@/assets/img/flex3-2.jpg')
        }
      ]
    };
  },
  components: {
    SearchBar,
    Scroll,
    Carousel,
    HomeFlex,
    DivToBtn
  },
  mounted() {
    // localStorage.clear()
    let user = [{name: 'mary', pass: '12345'}];
    // this.$localStorage.set('users', JSON.stringify(user))
    console.log(JSON.parse(this.$localStorage.get('users')))
  },
  methods: {
    toRooms(id) {
      this.$router.push('/'+id)
    }
  }
}

</script>
<style scoped>
#home {
  position: relative;
  text-align: center;
  /* height: 100vh; */
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
  border-bottom: 2px solid rgba(154, 154, 154, .3);
}

.image-content {
  flex: 30%;
}
.image-content img {
  width: 100%;
}

#title {
  margin: 2rem auto;
}
#title h2 {
  font-size: 1.625rem;
}
</style>