<template>
  <div id="news">
    <div class="news-top">
      <div class="news-top-container">
          <el-row>
          <el-col :span="8"><router-link to="development">公司动态</router-link></el-col>
          <el-col :span="8"><router-link to="information">行业资讯</router-link></el-col>
          <el-col :span="8"><router-link to="case">应用案例</router-link></el-col>
        </el-row>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style>
  #news .news-top {
    width: 100%;
    background-color: #cd0808;
    height: 43px;
    line-height: 43px;
    color: #fff;
    font-family: 'Microsoft YaHei';
    font-size: 24px;
  }
   #news  .news-top-container {
    width: 1200px;
    margin: 0 auto;
  }
   #news  .router-link-active {
    background-color: #831312;
  }
 #news a {
   display: block;
 }
</style>

