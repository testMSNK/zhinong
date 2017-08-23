<template>
  <div class="carousel">
    <el-carousel>
      <el-carousel-item>
      </el-carousel-item>
      <el-carousel-item>
      </el-carousel-item>
      <el-carousel-item>
      </el-carousel-item>
    </el-carousel>
    </div>
</template>

<style>
    .carousel .el-carousel__item {
      box-shadow: 0 11px 10px -8px #1b2835 inset;
      width: 100%;
      background: url("../../static/images/carousel1.jpg") center center no-repeat;
      background-size: auto 100%;
    }
    .carousel {
      position: relative;
    }
   .carousel::after {
        content: "";
        left: 0;
        right: 0;
        bottom: -20px;
        display: block;
        height: 100px;
        position: absolute;
        background: #707476;
        border-radius: 50%;
         -webkit-filter: blur(20px);
        -moz-filter: blur(20px);
        -ms-filter: blur(20px);
        filter: blur(20px);
        filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=20, MakeShadow=false); /* IE6~IE9 */

    }
    .carousel .el-carousel__container {
      width: 100%;
      height: 535px;
    }
</style>
