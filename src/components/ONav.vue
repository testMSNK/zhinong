<template>
  <div class="nav">
    <img class="logo" src="../../static/images/logo.png"/>
    <img class="logotext" src="../../static/images/logotext.png"/>
    <ul>
      <li><router-link to="development">首页</router-link></li>
      <li class="service">
      <el-dropdown>
        <a><span class="el-dropdown-link">
          服务项目
        </span></a>
          <el-dropdown-menu slot="dropdown">
            <div class="item border-1px-bottom">智慧停车</div>
            <div class="item border-1px-bottom">智慧农业</div>
            <div class="item border-1px-bottom">个人定制</div>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li><a href="development">信息资讯</a></li>
      <li><router-link to="case">应用案例</router-link></li>
      <li><router-link to="aa">走进小马</router-link></li>
    </ul>
    <p class="phone"><img src="../../static/images/phone.png"/>010-3321331</p>
    <a class="taobao"><img src="../../static/images/taobao.png"/>淘宝官方店</a>
  <div class="search"><input type="text" name="" id=""><button><i class="iconfont">&#xe602;</i></button></div></div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
.nav {
  background-color: #171717;
  padding: 15px 0 7px 0;
  color: #fff;
  white-space: nowrap;
  min-width: 1200px;
}
::-webkit-scrollbar{
  display: none;
}
.nav a {
  color: #fff;
}
 img{
   display: inline-block;
}
.logo {
  position: relative;
  top: 8px;
}
.logotext {
  position: relative;
  top: 4px;
}
ul {
  display: inline-block;
}
ul li {
  display: inline-block;
  width: 100px;
  text-align: left;
  position: relative;
  font-size: 14px;
  cursor: pointer;
}
ul li:first-of-type{
  display: inline-block;
  width: 70px;
  margin-left: 50px;
}
ul li a::after {
  content: "";
  position: absolute;
  border-left: 2px solid #fff;
  left: -5px;
  top: 4px;
  bottom: 4px;
}
.router-link-exact-active::after {
  border-color: #ff0000!important;
}
.router-link-exact-active {
  color: #ff0000!important;
}
.el-dropdown-link {
  display: inline-block;
  width: 185px;
}
.el-dropdown-menu  {
  width: 200px;
  margin-top: 8px;
  background-color: #2f2f2f;
  color: #cacaca;
  border-color: #4d4d4d;
  border-top: none;
  padding: 5px 0 8px 0;
  box-shadow: 0 11px 10px -8px #1b2835 inset;
}
.item {
  height: 27px;
  line-height: 28px;
  text-indent: 14px;
  position: relative;
  cursor: pointer;
}
.item:not(:last-of-type)::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1px solid #3b3b3b;
}
.phone {
  display: inline-block;
  margin-left: 75px;
  font-size: 12px;
}
.phone img{
  position: relative;
  top: 4px;
  margin-right: 3px;

}
.taobao {
  margin-left: 40px;
  font-size: 12px;
}
.taobao img{
  position: relative;
  top: 4px;
  margin-right: 3px;

}
.search {
  display: inline-block;
  margin-left: 125px;
  height: 25px;
}
.search input {
  width: 100px;
  height: 100%;
  outline: 0;
  border: 0;
  padding: 0;
  margin: 0;
  text-indent: 4px;
  -webkit-appearance: none;
  box-shadow: 0 3px 8px 1px #b6b6b6 inset;
}
.search button {
  height: 100%;
  background: #cd0808;
  outline: 0;
  border: 0;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  color: #fff;
  width: 27px;
  text-align: center;
}
</style>

