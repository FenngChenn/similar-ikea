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
      }
    },
    mounted() {
      // localStorage.clear()
      // let user = [{name: 'admin', pass: '123'}];
      // this.$localStorage.set('users', JSON.stringify(user))
      // this.$localStorage.remove('users')
      // console.log(JSON.parse(this.$localStorage.get('aaa')))

      window.addEventListener('scroll', this.handleScroll, true)
    },
    methods: {
      handleScroll() {
        // if (navBar !== null && toolBar !== null) {
        //   var navbarClassName = navBar.getAttribute('class')
        //   var toolbarClassName = toolBar.getAttribute('class')

        //   let showNav = function () {
        //     if (navBar) {
        //       navBar.setAttribute('class', 'navbar')
        //       toolBar.setAttribute('class', 'toolbar')
        //     }
        //   }

        //   let hideNav = function () {
        //     if (navBar) {
        //       let navbarHideClass = navbarClassName.concat(' slide_hide')
        //       let toolbarHideClass = toolbarClassName.concat(' top')
        //       navBar.setAttribute('class', navbarHideClass)
        //       toolBar.setAttribute('class', toolbarHideClass)
        //     }
        //   }
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let scroll = scrollTop - this.i
        this.i = scrollTop
        this.handleNav()
        if (scroll < 0) {
          console.log('up')
        } else {
          console.log('down')
        }
        //     }
      },
      handleNav() {
        var navBar = document.querySelector('.navbar')
        var toolBar = document.querySelector('.toolbar')
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
