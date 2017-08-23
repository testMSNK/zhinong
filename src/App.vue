<template>
  <div id="app">
    <o-nav></o-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import ONav from '../src/components/ONav'
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: {
      ONav
    }
  }
</script>

<style lang="stylus">
@import url('../static/css/reset.css');
@import url('../static/css/common.css');
  #app {
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
  }
</style>
