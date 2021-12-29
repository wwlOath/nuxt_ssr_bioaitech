<template>
  <div >
    <!--Header-->
    <CommonHeader/>

    <div :style="heightStyle">
      <div class="container" style="min-height:100vh;">
        <div style="margin-top:100px;text-align:center">

        <h5>分子生物学服务</h5>
        <sub>普通PCR</sub>
        <hr>
        <div style="width: 900px;margin:auto;text-align: left;padding-left:80px">
          <ul>
            <li>普通电泳PCR：琼脂糖凝胶电泳，通过凝胶电泳技术发展，而产生的一种DNA片段的检测方法。此方法方便简单快捷。</li>
            <li>采用适当的凝胶介质，在分子筛的作用下，到达分离核酸分子和检测核酸分子的目的。一般使用溴酚蓝和二甲苯晴作为指示剂。</li>
            <li>一般实验时，需要注意倒胶的温度，胶的制作需要注意筛子拔出的方向，缓冲液不能太多。</li>
          </ul>
          <h6>服务内容：</h6>
          <ul>
            <li>1 DNA片段的检测。</li>
            <li>2 DNA片段的纯化。</li>
            <li>3 实验数据的分析和统计。</li>
          </ul>

          <div class="text-center">
            <img src="@/assets/img/product/product_7.png"   class="service-page-little-img" >
          </div>
        </div>

        </div>
      </div>
    </div>
    <!--Footer-->
    <CommonFooter/>
  </div>
</template>


<style scoped>
  .service-page-little-img {
    width: 400px;
    margin-bottom: 10px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
  }
</style>
<script>
  export default {
    data() {
      return {
        heightStyle: {

        }
      }
    },
    methods: {
      calcWindowWidth() {
        if(/Android|webOS|iPhone|iPod|iPad|iPad|BlackBerry/i.test(navigator.userAgent)) {
          this.heightStyle = {
            'min-height': window.innerHeight+'px'
          }
        } else {
          this.heightStyle = {};
        }
      }
    },
    mounted() {
      //计算手机端的高度
      this.calcWindowWidth();
    }
  }

</script>
