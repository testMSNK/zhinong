<template>
  <div class="product-presentation">
    <div class="presentation">
      <el-row>
        <el-col :span="24">
          <div class="presentation-top">
          <i class="iconfont product-icon">&#xe627;</i>
          <span class="chinese-name">服务项目</span>
          <span class="english-name">product presentation</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="product">
            <div class="container">
              <div class="image">
              <img src="../../static/images/product.png" alt="" width="100%">
              </div>
              <div class="name">
                智慧停车
            </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="product">
            <div class="container">
              <div class="image">
              <img src="../../static/images/product.png" alt="" width="100%">
              </div>
              <div class="name">
                智慧农业
            </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
           <div class="product">
            <div class="container">
              <div class="image">
              <img src="../../static/images/product.png" alt="" width="100%">
              </div>
              <div class="name">
                个人定制
            </div>
            </div>
          </div>
        </el-col>
    </el-row>
    </div>
    <div>
    </div>
  </div>
</template>

<style>
  .product-presentation {
    width: 1200px;
    margin: 34px auto 60px auto;
    font-family: 'Microsoft YaHei';
  }
  .presentation-top {
    height: 42px;
    text-align: left;
    color: #fff;
    background: url("../../static/images/presentation-top.png") center center no-repeat;
    margin-bottom: 30px;
  }
  .product-icon {
    display: inline-block;
    font-size: 40px;
    margin-left: 6.7%;
    line-height: 34px;
    position: relative;
    margin-right: 5px;
  }
  .product-icon::after {
    content: "";
    left: 15%;
    right: 15%;
    bottom: -1.5px;
    display: block;
    position: absolute;
    background-color: #751c1c;
    height: 3px;
    border-radius: 50%;
    -webkit-filter: blur(1px);
    -moz-filter: blur(1px);
    -ms-filter: blur(1px);
    filter: blur(1px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=1, MakeShadow=false); /* IE6~IE9 */
  }
  .chinese-name {
    position: relative;
    top: -2px;
    font-size: 24px;
    margin-right: 3px;
  }
  .english-name {
    position: relative;
    top: -3px;
    font-size: 16px;
  }
  .product {
    padding: 0 10px;
  }
  .container {
    padding: 2px 1px;
    border: 1px solid #bebebe;
    box-shadow: -1px 2px 10px 1px #b3b3b3;
  }
  .name {
    height: 80px;
    line-height: 80px;
    color: #414141;
    font-size: 18px;

  }
</style>
