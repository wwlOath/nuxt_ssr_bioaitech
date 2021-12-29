<template>
  <div class="tumor-container">
    <!--Header-->
    <CommonHeader/>

    <div :style="heightStyle">
      <div class="container" style="min-height:100vh;">
        <div class="content">
          <Row>
            <h5 class="text-center title">免疫肿瘤学服务</h5>
            <hr>
            <p>我们知道并非所有组织都适合进行免疫肿瘤学研究。 为了支持免疫肿瘤学项目的特殊组织需求，我们提供了大量的病理学家复查的石蜡包埋的组织（FFPE）块、切片和组织芯片，这些 FFPE 切片包含有侵袭性边缘及肿瘤组织：</p>
          </Row>

          <div>
            <ul>
              <li>1）伴随 PD-L1检测指标（Ventana SP-263)和评分结果(高 / 中 / 低)。</li>
              <li>2）伴随结直肠癌（colorectal cancer， CRC）的分子分型结果，包括最 常 见 的 基 因 途 径 是 CIN， 又 称 MSS（微卫星稳定），其次是 MSI（微卫星不稳定）。</li>
              <li>3）乳腺癌的ER、PR、Her-2和Ki67的IHC结果，三阴乳腺癌以及Luminal分型结果。</li>
            </ul>
          </div>
          <div>
            <p>配图：</p>
            <div class="text-center">
              <div class="first">
                <div class="second">
                  <img src="@/assets/img/tumor.png" alt="" style="width: 600px">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Footer-->
    <CommonFooter/>
  </div>
</template>

<style scoped lang="less">
  .tumor-container {
    .content {
      padding: 100px 0 30px;
      ul {
        list-style: none;
        li {
          line-height: 24px;
        }
      }
    }
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
