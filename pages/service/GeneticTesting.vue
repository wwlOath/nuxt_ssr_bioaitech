<template>
  <div>
    <!--Header-->
    <CommonHeader/>

    <div :style="heightStyle">
      <div class="container" style="min-height:100vh;">
        <div style="margin-top:100px;text-align:center">
          <h5>基因检测</h5>
          <sub></sub>
          <hr>
          <div style="margin:auto;text-align: left;">
            <p>
              利用高通量测序平台对人类个体或群体进行全基因组测序，并进行生物信息学相关分析，全面挖掘DNA水平的遗传变异，帅选疾病易感基因，剖析疾病遗传机制。主要包括：全基因组测序分析，全外显子组测序分析、目标区域捕获测序分析。</p>
          </div>
          <div style="margin:auto;">
            <img src="@/assets/img/product/product_3.png" class="service-page-little-img" >
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
        if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
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
