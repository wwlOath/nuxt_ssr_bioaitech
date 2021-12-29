<template>
  <div class="made-chip-container">
    <!--Header-->
    <CommonHeader/>

    <div :style="heightStyle">
      <div class="container" style="min-height:100vh;">
        <div class="content" >
          <Row>
            <h5 class="text-center title">组织芯片定制服务介绍</h5>
            <hr>
            <p><b>组织芯片定制</b> --- 亦称组织微阵列，tissu microarray，TMA，是将数十个、数百个组织标本整齐地排列在同一张载玻片上的微缩组织切片。可根据客户的实验需求，由专业的芯片设计师为您量身定制各种点样和病例数的TMA。</p>
          </Row>
          <Row>
            <div><Button type="primary" ghost>我们的特色</Button></div>
            <br>
            <div class="text-center">
            <div class="first" >
              <div class="second">
                <img src="@/assets/img/special.png" alt="" style="width: 600px">
              </div>
            </div>
            </div>
          </Row>
          <br>
          <Row class="step-content">
            <div><Button type="primary" ghost>服务流程</Button></div>
            <br>
            <div>
              <Steps :current="currentSteps">
                <Step title="告知我们">
                  <div slot="content">
                    <br>
                    <p>告知我们：</p>
                    <ul class='item'>
                      <li>需要哪个癌种。</li>
                      <li>需要癌组织样本多少例，需要正常组织多少例。</li>
                      <li>在芯片上的排布需求。</li>
                      <li>周期需求。</li>
                      <li>其他特殊需求。</li>
                    </ul>
                  </div>
                </Step>
                <Step title="芯片制作">
                  <div slot="content">
                    <br>
                    <p>芯片制作：</p>
                    <p class="info">一般样本收集周期为2周，制作周期为一周，特殊样本时间较长</p>
                  </div>
                </Step>
                <Step title="发货">
                  <div slot="content">
                    <br>
                    <p>发货：</p>
                    <p class="info">顺丰发货，款到当天或次日即可发货。</p>
                  </div>
                </Step>
              </Steps>
            </div>
          </Row>
          <br>
          <Row>
            <div><Button type="primary" ghost>产品示例</Button></div>
            <br>
            <div class="text-center">
              <div class="first">
                <div class="second">
                  <img src="@/assets/img/product-example.jpg" alt="" style="width: 600px">
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </div>

    <!--Footer-->
    <CommonFooter/>
  </div>
</template>

<style lang="less" scoped>
  .made-chip-container {
    .content {
      padding: 100px 0 30px;
      .title {
        margin-bottom: 20px;
      }

      .first {
        display: inline-block;
        padding: 5px;
        border-radius: 10px;
        border-color: rgb(102, 153, 153);
        box-shadow: rgb(123, 172, 163) 0px 0px 5px;

        .second {
          border-radius: 10px;
          border-color: rgb(62, 62, 62);
          box-shadow: rgb(173, 173, 173) 0px 0px 3px inset;
        }
      }
    }

    .step-content {
      .info {
        text-indent: 2em;
      }

      .item {
        list-style: decimal;
        margin-left: 30px
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        currentSteps: 0,
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
