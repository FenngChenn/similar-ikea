<template>
  <div id="app">
    <home-nav></home-nav>
    <totop-btn v-show="isShow" @click.native="backTopClick"></totop-btn>
    <router-view />
  </div>
</template>

<script>
  import HomeNav from '@/components/content/home/HomeNav'
  import TotopBtn from '@/components/common/topbtn/TotopBtn'

  export default {
    name: 'App',
    components: {
      HomeNav,
      TotopBtn,
    },
    data() {
      return {
        i: 0,
        lastScrollCall: 0,
        scrollNum: 0,
        scrollTop: 0,
        isShow: false,
      }
    },
    mounted() {
      // localStorage.clear()
      // let user = [{name: 'admin', pass: '123'}];
      // this.$localStorage.set('users', JSON.stringify(user))
      // this.$localStorage.remove('users')
      // console.log(JSON.parse(this.$localStorage.get('aaa')))

      // window.addEventListener('scroll', this.delayScrollFunc(this.handleScroll, 800), true)
      window.addEventListener('scroll', this.delayScrollFunc, true)
    },
    methods: {
      delayScrollFunc() {
        // delay时间为200，如果数值太小会报错
        const now = new Date().getTime()
        if (now - this.lastScrollCall < 300) return
        this.lastScrollCall = now

        var timer = null
        clearTimeout(timer)
        timer = setTimeout(() => {
          this.handleScroll()
        }, 300)
      },
      handleScroll() {
        // 页面滚动距顶部距离
        this.scrollTop =
          window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // 此次滚动的距离和上一次滚动距离的差值
        let scroll = this.scrollTop - this.i
        this.i = this.scrollTop

        // 显示/隐藏回到顶部按钮
        if (this.scrollTop - 600 > 0) {
          this.isShow = true
        } else {
          this.isShow = false
        }

        // 获取子组件
        var navBar = document.getElementById('navbar')
        var toolBar = document.getElementById('toolbar')
        if (navBar !== null && toolBar !== null) {
          var navbarClassName = navBar.getAttribute('class')
          var toolbarClassName = toolBar.getAttribute('class')
        }
        // 判断差值，来判断是向上或向下滚动
        if (scroll <= 0) {
          // console.log('up')
          navBar.setAttribute('class', 'navbar')
          toolBar.setAttribute('class', 'toolbar')
        } else {
          // console.log('down')
          var navbarHideClass, toolbarHideClass
          if (navBar) {
            if (navbarClassName.indexOf('slide_hide') > -1) {
              return
            } else {
              navbarHideClass = navbarClassName.concat(' slide_hide')
              toolbarHideClass = toolbarClassName.concat(' top')
            }

            navBar.setAttribute('class', navbarHideClass)
            toolBar.setAttribute('class', toolbarHideClass)
          }
        }
      },
      backTopClick() {
        // 元素可视区高度
        let viewHeight = document.documentElement.clientHeight

        var iSpeed = 0
        var timer = setInterval(() => {
          // 获取元素垂直滚动的像素数
          let heightTop = document.documentElement.scrollTop || document.body.scrollTop
          console.log('heightTop: ', heightTop)

          iSpeed = Math.floor((0 - heightTop) / 8) // 当速度小于0时 要向下取整才能够准确的到达目标值
          document.documentElement.scrollTop = document.body.scrollTop = heightTop + iSpeed
          if (heightTop <= 0) {
            console.log('stop')
            clearInterval(timer)
          }
        }, 30)
      },
    },
  }
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* position: relative; */
  }
</style>
