<!--  -->
<template>
  <div id="home">
    <!-- <scroll class="content-scroll" ref="scroll" :probe-type="3"> -->
    <search-bar />
    <!-- <image-loader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      width="864px"
      height="476px"
    />-->
    <!-- <div class="player">
      <video-player
        class="vjs-custom-skin"
        ref="videoPlayer"
        :options="playerOptions"
        @play="onPlayVideo($event)"
      ></video-player>
    </div>-->
    <h1>{{ title1 }}</h1>
    <carousel :carouselImg="carouselImg" />
    <div class="order">
      <div class="image-content" v-for="item in gifImg" :key="item">
        <img :src="item" alt />
        <div-to-btn :btnText="btnText1" />
      </div>
    </div>
    <div id="title">
      <h2>{{ title2 }}</h2>
    </div>
    <home-flex>
      <template v-slot:left>
        <img v-for="item in roomsImg1" :key="item.id" :src="item.ref" @click="toRooms(item.id)" />
      </template>
      <template v-slot:center>
        <img v-for="item in roomsImg2" :key="item.id" :src="item.ref" @click="toRooms(item.id)" />
      </template>
      <template v-slot:right>
        <img v-for="item in roomsImg3" :key="item.id" :src="item.ref" @click="toRooms(item.id)" />
      </template>
    </home-flex>
    <div-to-btn :btnText="btnText2" />
    <!-- </scroll> -->
  </div>
</template>

<script>
  import SearchBar from '@/components/common/searchbar/SearchBar'
  import Scroll from '@/components/common/scroll/Scroll'
  import Carousel from '@/components/common/carousel/Carousel'
  import DivToBtn from '@/components/common/divtobtn/DivToBtn'

  import HomeFlex from '@/components/content/home/HomeFlex'

  import introduceVideo from '@/assets/video/burning.mp4'

  export default {
    name: 'Home',
    data() {
      return {
        playerOptions: {
          height: '360', // 播放区域的高度
          autoplay: false, // 是否自动播放
          muted: false, // 默认消除任何音频声音
          loop: true, // 是否循环播放
          language: 'en', // 语言
          playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速率
          // 播放地址
          sources: [
            {
              type: 'video/mp4',
              // src: 'http://vjs.zencdn.net/v/oceans.mp4',
              src: introduceVideo,
            },
          ],
          poster: require('assets/img/1.jpg'), // 视频封面图片
          notSupportedMessage: '此视频暂时无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的提示
          controlBar: {
            timeDivider: true,
          },
        },
        title1: '你的家，听你的',
        title2: '迎接春天，发现家的心意',
        carouselImg: [
          {
            name: 'newhome',
            src: require('assets/img/swiper1.jpg'),
          },
          {
            name: 'allhome',
            src: require('@/assets/img/swiper2.jpg'),
          },
          {
            name: 'kitchen',
            src: require('@/assets/img/swiper3.jpg'),
          },
          {
            name: 'public',
            src: require('@/assets/img/swiper4.jpg'),
          },
          {
            name: 'more',
            src: require('@/assets/img/swiper5.jpg'),
          },
        ],
        gifImg: [
          'https://www.ikea.cn/images/0b/90/0b90dc115d128de12050591d2bf2ddf8.gif?f=s',
          'https://www.ikea.cn/images/bc/b7/bcb78af9c298c19a4334d7834fad6cd9.gif?f=s',
          'https://www.ikea.cn/images/3e/95/3e957e046c9ca5b573c04ed2401b5ac7.gif?f=s',
        ],
        btnText1: '了解详情',
        btnText2: '查看更多房间',
        roomsImg1: [
          {
            id: 'parlour',
            ref: require('@/assets/img/flex1-1.jpg'),
          },
          {
            id: 'bedroom',
            ref: require('@/assets/img/flex1-2.jpg'),
          },
        ],
        roomsImg2: [
          {
            id: 'kidroom',
            ref: require('@/assets/img/flex2-1.jpg'),
          },
          {
            id: 'restaurant',
            ref: require('@/assets/img/flex2-2.jpg'),
          },
        ],
        roomsImg3: [
          {
            id: 'kitchen',
            ref: require('@/assets/img/flex3-1.jpg'),
          },
          {
            id: 'bathroom',
            ref: require('@/assets/img/flex3-2.jpg'),
          },
        ],
      }
    },
    components: {
      SearchBar,
      Scroll,
      Carousel,
      HomeFlex,
      DivToBtn,
    },
    computed: {
      // 必须要有这段代码
      player() {
        return this.$refs.videoPlayer.player
      },
    },
    methods: {
      toRooms(id) {
        this.$router.push('/' + id)
      },
      onPlayVideo(player) {
        console.log(player)
      },
    },
  }
</script>
<style lang="stylus" scoped>
  $r = 100rem

  #home
    position: relative
    text-align: center
    /* height: 100vh; */
    padding: (1 / $r) * 50 0 (1 / $r) * 86 0

    h1
      font-size: (1 / $r) * 59
      margin: (1 / $r) * 30 0

    .player
      width: (1 / $r) * 1000

  .content-scroll
    height: calc(100% - (1 / $r) * 81 - (1 / $r) * 88.3)
    overflow: hidden

  .order
    /* background-color: #f6f6f6; */
    /* height: 10rem;
    width: 100%; */
    position: relative
    max-width: 1200px
    min-height: (1 / $r) * 147
    margin: 0 auto
    display: flex
    justify-content: space-evenly
    padding-bottom: (1 / $r) * 100
    border-bottom: 2px solid rgba(154, 154, 154, 0.3)

  .image-content
    flex: 0 0 33.3333%

  .image-content img
    width: 100%

  #title
    margin: 2rem auto

  #title h2
    font-size: (1 / $r) * 48
</style>