<template>
  <div class="index">
    <o-carousel></o-carousel>
    <o-product-presentation></o-product-presentation>
    <o-news></o-news>
    <!-- <router-link to="components">
      <el-button>components</el-button>
    </router-link>
    <router-link to="hello">
      <el-button>hello</el-button>
    </router-link>
     <router-link to="nav">
      <el-button>nav</el-button>
    </router-link>
    <router-view></router-view> -->
    <!--<amap></amap>-->
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <br/>
    <br/>
      <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <br/>
    <br/>
      <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <br/>
    <br/>
      <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <br/>
    <br/>
  </div>
</template>

<script>
  import OCarousel from './OCarousel'
  import OProductPresentation from './OProductPresentation'
  import ONews from './ONews'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'this is the components'
      }
    },
    components: {
      OCarousel,
      OProductPresentation,
      ONews
    }
  }
</script>
