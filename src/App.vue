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
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 1rem;
}

</style>
