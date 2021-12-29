<template>
  <div>
    <!--Header-->
    <CommonHeader/>

    <div :style="heightStyle">
      <div class="container" style="min-height:100vh;">
        <div style="margin-top:100px;text-align:center">

          <h5>形态病理学服务</h5>
          <sub>免疫组化（IHC）</sub>
          <hr>
          <div style="width: 900px;margin:auto;text-align: left;padding-left:80px">
            <p>
              免疫组化，是应用免疫学基本原理——抗原抗体反应，即抗原与抗体特异性结合的原理，通过化学反应使标记抗体的显色剂显色来确定组织细胞内抗原（多肽和蛋白质），对其进行定位、定性及相对定量的研究，称为免疫组织化学技术。
            </p>
            <h6>染色步骤:</h6>
            1. 包埋好的标本用切片机切石蜡切片3um <br>
            2. 经60℃烘片1小时<br>
            3. 二甲苯Ⅰ脱蜡10分钟<br>
            4. 二甲苯Ⅱ脱蜡10分钟<br>
            5. 梯度酒精复水：100%酒精5分钟，100%酒精5分钟，95%酒精5分钟，80%酒精5分钟，自来水冲洗 5分钟<br>
            6. 进行抗原修复：将切片置于0.1mol/L且ph=6.0的枸橼酸液修复液中，沸水浴20分钟，停止加热后自然冷却20-30分钟<br>
            7. 用PBS 3分钟3次，组画笔画圈，滴加双氧水，孵育20min<br>
            8. 用PBS 3分钟3次，滴加封闭血清封闭1h<br>
            9. 甩干 ，滴加适宜浓度的一抗置湿盒中4℃孵育过夜<br>
            10. 用PBS 3分钟×5次洗去一抗<br>
            11. 甩干，滴加二抗室温置孵育盒中孵育1小时（注意二抗种属，夏季30min，冬季1h）<br>
            12. 用PBS 3分钟×5次洗去二抗<br>
            13. 甩干，滴加DAB 显色，水冲<br>
            14. 苏木素染核5min (新配置的苏木素视情况而定)<br>
            15. 流水冲洗多余的苏木素，分化液中分化1秒<br>
            16. 流水冲洗5min<br>
            17. 梯度酒精复水：80%酒精5分钟，95%酒精5分钟，100%酒精5分钟，100%酒精5分钟，二甲苯Ⅱ透明5min，二甲苯Ⅰ透明5min（如为完全透明，可适当延长时间）<br>
            18. 用中性树胶封片<br>
            19. 镜检

          </div>
          <div style="margin:auto;">
              <img src="@/assets/img/product/product_4.png" class="service-page-little-img">
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
