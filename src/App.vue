<template>
  <div id="app">
    <home-nav></home-nav>
    <router-view/>
  </div>
</template>

<script>
import HomeNav from '@/components/content/home/HomeNav'

export default {
  name: 'App',
  components: {
    HomeNav
  },
  mounted() {
    // localStorage.clear()
    // let user = [{name: 'admin', pass: '123'}];
    // this.$localStorage.set('users', JSON.stringify(user))
    // this.$localStorage.remove('users')
    // console.log(JSON.parse(this.$localStorage.get('aaa')))
    
  }
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
