<template>
  <div>
    <!--Header-->
    <CommonHeader/>

    <div :style="heightStyle">
      <div class="container" style="min-height:100vh;">
        <div style="margin-top:100px;">
          <div class="text-center">
            <h5>高端一体化科研服务</h5>
          </div>
          <hr>
          <div style="margin:auto">
            <div class="item">
              <p><b>定义：</b>围绕客户的研究需求，提供从课题设计、实验设计、数据产生和系统分析、到结果的整理、文章撰写和投稿、改稿和发表的一体化科研服务。其中，客户提供临床科学问题、实验中所需的样本，以及经费。万康源根据需求，提供课题方案、高质量数据、技术专家/团队，以及相应的SCI论文。</p>
              <p><b>联合PI模式：“基础+临床+执行”三位一体的科研模式：</b></p>
              <ul class="list">
                <li>按照独立科研立项，整合包括研究人员在内的资源，共同完成。</li>
                <li>我们按照科研论文产生的过程，评估每一个有需求的临床研究人员专家，看他缺什么，我们给补充什么。并帮助他完成整个可言的过程。</li>
              </ul>
              <p><b>我们的独特性：</b></p>
              <ul class="list">
                <li>科研论文产生中最稀缺的要素，科研原创想法，大数据实现可行性方案， 这些要素，我们都可以高质量提供。</li>
                <li>为科研中的大专家，提供体系化的研究支持，更具有科研整体性和长期稳定性。</li>
                <li>高价值产品产出，真实性保证。</li>
              </ul>
              <p><b>产品优势：</b></p>
              <ul class="list">
                <li>
                  契合客户需求
                  <ul class="info">
                    <li>针对客户的科学问题提供解决方案。</li>
                  </ul>
                </li>
                <li>
                  产品完整
                  <ul class="info">
                    <li>从课题设计到文章投稿相关工作的一体化科研服务。</li>
                  </ul>
                </li>
                <li>
                  技术有保障
                  <ul class="info">
                    <li>技术团队都经历了较严格的科研训练。</li>
                  </ul>
                </li>
                <li>
                  无售后烦恼
                  <ul class="info">
                    <li>提供该项目内的所有售后技术服务</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <br>
          <div class="text-center">
            <img src="@/assets/img/service/service-81.png" class="service-page-little-img">
          </div>
        </div>
      </div>
    </div>
    <!--Footer-->
    <CommonFooter/>
  </div>
</template>

<style scoped lang="less">
  .service-page-little-img {
    width: 400px;
    margin-bottom: 10px;
    border-radius: 8px;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
  }
  .item {
    .list {
      list-style: decimal;
      margin-left: 30px;
      .info {
        margin-left: 30px;
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
