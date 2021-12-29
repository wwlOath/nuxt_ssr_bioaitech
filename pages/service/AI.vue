<template>
  <div>
    <!--Header-->
    <CommonHeader/>

    <div :style="heightStyle">
      <div class="container" style="min-height:100vh;">
        <div style="margin-top:100px;">
          <div class="text-center">
            <h5>病理AI服务</h5>
            <sub>提供专业人工智能与数字病理服务及合作</sub>
          </div>
          <hr>
          <div style="margin:auto">
            <ul style="margin-left: 30px">
              <li>病理人工智能识别辅助癌症诊断</li>
              <li>解决病理诊断行业现状及面对的严峻问题：
                <ul style="margin-left: 30px">
                  <li>病理医生在我国显著缺乏</li>
                  <li>病理医生诊断水平差异较大</li>
                </ul>
              </li>
              <li>
                解决方案：
                <ul style="margin-left: 30px">
                  <li>基于人工智能的数字病理图像辅助诊断技术可以解决病理癌症诊断的市场需求</li>
                  <li>以特定癌症为对象，开发基于人工智能的辅助诊断系统。</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="text-center">
            <img src="@/assets/img/service/service-ai-pic1.jpg" class="service-page-little-img">
          </div>
          <div>
            <p>目前服务内容：切片扫描服务</p>
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
    width: 800px;
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
