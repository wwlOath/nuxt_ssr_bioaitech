<template>
  <div>
    <ContactSideBar/>
    <footer class="default-footer" style="min-width:1200px;">
    <div class="container">
      <div style="height:220px;text-align: center">
        <div style="width:30%;float:left">
          <div style="text-align: left">
            <a href="index.html">
              <img src="@/assets/img/logo.png" alt="Logo">
            </a>
            <hr>
            <span>电话：029-88662595/18909275696</span><br>
            <span>网址：http://bioaitech.com</span><br>
            <span>邮箱：sales@bioaitech.com</span><br>
            <span>微信号：18909275696</span><br>
            <span>QQ ：1181745389</span>
          </div>
        </div>
        <div class="text-left" style="margin-left:40px;width:65%;float:right">
          <p class="intro">中科光华（西安）智能生物科技有限公司，是一家专业为生命科学研究提供一站式服务的新型高科技企业。公司拥有独立的病理学实验平台、免疫学实验平台、生化实验平台和生物信息学分析等平台。提供各种组织生物样本技术服务、研发、产品开发、生产和销售。公司引进的全套先进设备仪器建立了一整套以生物组织为主的产品以及技术服务。与国家、省级公共实验平台及国内知名高校生命科学研究实验室建立了广泛的合作关系。 拥有庞大的石蜡、冰冻组织芯片及组织库，拥有专业的技术服务团队，无论是形态病理学服务还是分子生物学服务，尤其是具有丰富的免疫组化实验经验，公司技术团队由一批拥有生物医学背景、热爱生命科学研究的留美博士和国内知名高校的博士、硕士研究生、高级技师和经验丰富的实验操作技术人员组成，并由主任级病理医生出具实验报告，为客户提供最可靠最优质的服务体验。公司承接整体课题研究，可开展分子生物实验技术、细胞实验技术、病理实验技术、荧光原位杂交技术等服务，并提供有关技术攻关、研发等相关服务。我们将致力于全心全意为各大知名企业，高校，研究所及医院提供优质的服务。</p>
        </div>
      </div>
    </div>
    <div class="bottom-footer">
        <div class="wrapper clearfix">
          <p class="text-center">© 2019-2020  版权所有：中科光华（西安）智能生物科技有限公司  备案号：<a href="http://www.beian.miit.gov.cn/" target="_blank">陕ICP备19018838号-1</a></p>
          <p class="text-center"> 地址：陕西省西安市国家民用航天产业基地航创路1123号 </p>
      </div>
    </div>
  </footer>
  </div>
</template>

<style lang="less">
  .container {
    max-width: 1300px !important;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

  }

  .default-footer {
    margin-top: 100px;
    padding: 25px 0 0;
    position: relative;
    background: rgba(0,0,0,.7);
    z-index: 1;
    color: #fff;
  }

  .intro {
    font-size: 13px;
  }

  hr {
    border: 1px solid #fff;
  }

  .bottom-footer {
    background: #000;
    padding: 10px 0;
    a {
      color: #2d8cf0;
    }
  }
  .bottom-footer p {
    margin-bottom: 0;
  }
  .text-center {
    text-align: center;
  }
</style>

<script>
  export default {
    name: 'CommonFooter',
    data() {
      return {

      }
    },
    methods: {
      init() {

      }
    },
    mounted() {
      this.init();
    }
  }
</script>
