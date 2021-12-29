<template>
  <div >
    <!--Header-->
    <CommonHeader/>

    <div :style="heightStyle">
      <div class="container" style="min-height:100vh;">
        <div style="margin-top:100px;text-align:center">
          <h5>形态病理学</h5>
          <sub>H&E染色</sub>
          <hr>
          <div style="width: 800px;margin:auto;text-align: left;">
            <p>H&E染色法 ，石蜡切片技术里常用的染色法之一 。苏木精染液为碱性 ，主要使细胞核内的染色质与胞质内的核酸着紫蓝色 ；伊红为酸性染料 ，主要使细胞质和细胞外基质中的成分着红色 。HE染色法是组织学、胚胎学、病理学教学与科研中最基本、使用最广泛的技术方法。</p>
            <h6>染色步骤：</h6>
            <div style="float:left">
              1. 脱蜡至水 (每步5min)<br>
              2. 苏木素染色 (10min)<br>
              3. 水洗 (5min)<br>
              4. 0.5-1%盐酸酒精分化 (3sec)<br>
              5. 水洗 （5min）<br>
              6. 返蓝 （1min）<br>
              7. 水洗 （5min）<br>
              8. 镜检着色 看核染情况<br>
              9. 伊红染色 （10min）<br>
              10. 水洗 （5min）<br>
              11. 80%酒精 （10sec） 要提起多看几遍<br>
              12. 95%酒精 （1min）<br>
              13. 无水酒精Ⅰ 3min<br>
              14. 无水酒精Ⅱ 3min<br>
              15. 二甲苯Ⅰ 5min<br>
              16. 二甲苯Ⅱ 5min<br>
              17. 中性树胶封片
            </div>
            <div class="text-center" style="float:right;margin-bottom:0">
              <img src="@/assets/img/product/product_5.png" class="service-page-little-img" >
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
