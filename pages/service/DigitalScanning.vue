<template>
  <div>
    <!--Header-->
    <CommonHeader/>

    <div :style="heightStyle">
      <div class="container" style="min-height:100vh;">
        <div style="margin-top:100px;text-align:center">
          <h5>切片数字化扫描服务</h5>
          <sub></sub>
          <hr>
          <div style="margin:auto;text-align: left;">
            <p>
              将整个载玻片全信息、全方位快速扫描，使传统物质化的载玻片变成新一代数字化病理切片。可建立超大容量的数字病理切片库，保存珍贵的病理切片资料，解决了玻璃切片不易储存保管、易褪色、易损坏、易丢片掉片和切片检索困难等问题。
            </p>

            <p><b>扫描性能</b></p>
            <ul style="margin-left: 40px">
              <li>高效光路达最大光通量</li>
              <li>德国蔡司高清物镜</li>
              <li>500万像素大靶面面阵相机</li>
              <li>自动识别组织区域</li>
              <li>扫描切片自动上传</li>
            </ul>

            <p><b>技术优势</b></p>
            <Row :gutter="16">
              <Col :span="12">
                <p>1、Z轴动态调整焦点，适用于扫描厚薄不均的病理切片</p>
                <img src="@/assets/img/service/service-scan-pic-1.png" class="service-page-little-img" >
              </Col>
              <Col :span="12">
                <p>2、适用于厚组织的多层融合专利扫描技术</p>
                <img src="@/assets/img/service/service-scan-pic-2.png" class="service-page-little-img">
              </Col>
              <Col :span="24">
                <p>3、3D扫描技术最清晰还原组织形态结构，适用于成团细胞的阅片诊断</p>
                <div class="text-center">
                  <img src="@/assets/img/service/service-scan-pic-3.png" style="width: 600px" class="service-page-little-img">
                </div>
              </Col>
            </Row>
            <br>
            <p><b>服务流程与周期</b></p>
            <div style=" margin:20px 0 20px 40px;">
              <Steps :current="0">
                <Step title="Step 1" content="与客户签订服务协议并付款"></Step>
                <Step title="Step 2" content="客户送交病理切片"></Step>
                <Step title="Step 3" content="病理切片数字化扫描"></Step>
                <Step title="Step 4" content="数据上传应用系统或交付原始数据"></Step>
              </Steps>

              <div style="margin:40px 0 40px 0">
                <p>自客户付款且送交病理切片次日起算，切片数量（<50张片子），扫描模式为快速模式可在3个工作日内扫描完成并上传应用系统或交付原始数据。样本量较大时或需要融合或3D模式时，另做沟通。</p>
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

<style scoped>
  .service-page-little-img {
    width: 400px;
    max-height:280px;
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
