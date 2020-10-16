<template>
  <div id="app">
    <home-nav></home-nav>
    <router-view />
  </div>
</template>

<script>
  import HomeNav from '@/components/content/home/HomeNav'

  export default {
    name: 'App',
    components: {
      HomeNav,
    },
    data() {
      return {
        i: 0,
        lastScrollCall: 0,
        scrollNum: 0,
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
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // 此次滚动的距离和上一次滚动距离的差值
        let scroll = scrollTop - this.i
        this.i = scrollTop

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
