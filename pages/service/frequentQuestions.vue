<template>
  <div >
    <!--Header-->
    <CommonHeader/>

    <div :style="heightStyle">
      <div class="container" style="min-height:100vh;">
        <div style="margin-top:100px;">

          <h5 class="text-center">常见问题解答</h5>
          <div class="question-content">
            <div class="item">
              <p class="title"><b>1、组织芯片查询方法和订购流程是怎样的？</b></p>
              <div class="content">
                答：可以登录官方网站查询, 正式官网地址：<a href="http://www.bioaitech.com/" target="_blank">http://www.bioaitech.com/</a>点击组织芯片定制按钮，
                <img src="@/assets/img/question/question_1.png" style="width: 220px">进入组织芯片产品页，点击亚分类按钮，
                <img src="@/assets/img/question/question_2.png" style="width: 350px">找到您所需要的芯片，点击芯片编号按钮，
                <img src="@/assets/img/question/question_3.png" style="width: 350px">可以查看病例详细资料：点击图像，可以查看芯片图像，
                <img src="@/assets/img/question/question_4.png" style="width: 350px">。确定需要哪类芯片后，请留下单位名称、联系人，并来信告知芯片编码和数量，我为您做一份报价单，里面有我们公司账户信息，我们是款到发货，对于库存产品，一般款到后当天或第二天发货和发票；如果是售罄产品，新做替代产品会在1周内发货和发票。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>2、组织芯片购买有没有数量限制？</b></p>
              <div class="content">
                答：我们没有捆绑销售-无论购买单张或多张，白片或是H&E染色片，均由您选择。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>3、发货快递是什么？</b></p>
              <div class="content">
                答：我们采用顺丰快递，免费递送，为您节省时间。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>4、组织芯片保存条件？</b></p>
              <div class="content">
                答：组织芯片置于4℃冰箱中保存，保质期：暂定一年。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>5、如果您对产品质检有疑问？</b></p>
              <div class="content">
                答：每一个病例，组织点都根据各器官WHO分类和病理分级标准，由专业病理医生进行显微镜下诊断，出具病理学确认报告和获取数码图像。在每张芯片出厂之前，均通过标准免疫组化染色实验证实组织抗原的有效性。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>6、IHC服务，流程和注意事项以及周期服务费用等怎样的？</b></p>
              <div class="content">
                <div class="info">答:您需要的在XXX芯片上IHC报价单在附件，请查看。若是自制抗体，预实验费用略高于商品化抗体。最近做技术服务，我们还可以免费提供扫描图像服务。确定开展，附件有实验委托申请表，请您填写一下。</div>
                <div class="info">实验流程和注意事项如下，请仔细阅读。</div>
                <ul class="note">
                  <li>如果您提供的一抗是鼠抗或兔抗，则不需要提供二抗。如果是其他一抗，要将所对应的二抗一并寄来。若是商品化抗体，最好是该抗体有进行过IHC（人或某种动物的石蜡或冰冻组织）验证。（当然也有抗体没有进行过IHC的验证数据，但有WB/ICC/IF的结果也是可以进行IHC实验的。）</li>
                  <li>一抗寄来后，首先开展预实验，每个抗体做完预实验，我们随机给您提供3张预实验结果数码照片（最佳抗体浓度结果），让您确认是否开展正式实验。预实验过程中的芯片最终是不寄回给您的，只寄正式实验后芯片。正式实验完成后，出具实验报告。</li>
                  <li>附件有实验报告样本，试验周期：一般2周之内可以出预实验结果，若您时间紧迫，我们也可优先进行。我们是款到开展试验，确定需要开展后，请汇款并来信告知发票抬头、收货人详细地址及联系方式，以便将随后将试验后芯片和发票快递给您。</li>
                  <li>发票提供的是3%普通发票。</li>
                  <li>抗体的量根据效价决定，一般情况下，每个抗体寄40微升原液，若整个实验未用尽我们会回寄给您（冰袋回寄免快递费）。</li>
                </ul>
                <div class="info"><b>收件地址：陕西省西安市国家民用航天产业基地航创路1123号</b></div>
                <div class="info"><b>收件人：刘女士 18909275696</b></div>
                <div class="info">备注：请把抗体管子用封口膜封好、包装严实，若为分装抗体请在管上标记清楚抗体名称，以免混淆，严格按抗体运输条件，用顺丰快递邮寄。我们周末休息，无人接收快递，请安排好寄送时间。寄送后，请告知。</div>
              </div>
            </div>

            <div class="item">
              <p class="title"><b>7、如何查询免疫组化预实验结果？</b></p>
              <div class="content">
                答：您的预实验已经完成后，我们会及时告知，病理医生认为是该抗体最佳实验结果，发给您，请您确认，决定我们是否进行下一步的正式实验？照片在附件，请查看。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>8、如何保存实验报告？</b></p>
              <div class="content">
                答：您的实验已经完成，现将实验报告邮件发送给您，同时会为您免费扫描实验后芯片，并保存于专业平台内，您可以通过您专属的用户名和密码登录访问，如有疑问，敬请联系！
              </div>
            </div>

            <div class="item">
              <p class="title"><b>9、如何查询H&E扫描图像和产品说明书？</b></p>
              <div class="content">
                答：每张组织芯片都有未染色片（白片）和H&E染色片，网上只是部分内容显示，订购后会有专人为您提供H&E扫描图像和每一点的详细说明书。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>10、中科光华产品的售后，退换货问题是怎样的？</b></p>
              <div class="content">
                答：产品以快递到货并签收日期开始，如果有质量问题，收到货后两周内请与我们联系，保退换。无质量问题不退换产品。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>11、组织芯片产品质量标准是什么？</b></p>
              <div class="content">
                答：我公司组织芯片的质控标准：最严格的质量控制-芯片上任何一点都是完整的、有效的、一致的，无效（包含缺失）点数少于5%（极少数粘膜类或空腔脏器的组织少于10%）。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>12、为什么有些组织芯片上的点不圆？</b></p>
              <div class="content">
                答：对于某些正常粘膜或腺体（例如消化道粘膜，皮肤，乳腺腺泡，肺泡或前列腺上皮等）组织，某些粘膜或腺体等非实体肿瘤组织异质性生长特性，很难保证组织有效点完全与设计一致。这是组织本身的特性决定的，敬请理解。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>13、网站内的芯片没有符合要求的，可以根据自己的要求订制一款芯片吗？</b></p>
              <div class="content">
                答：可以定制。订制组织芯片：可以购买整个阵列块，这样价格昂贵，只适用于需要大量同一芯片的客户；也可以不购买整个阵列块，只需要按照同类芯片的价格，一次性购买10张或以上张即可。剩余的组织芯片将作为产品在我们公司的网站上销售，优点是价格合理，适用于一次性用片量不是很大的客户，便于和其他客户共享资源，分摊费用。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>14、如果您担心脱片，抗原丢失，实验结果不理想？</b></p>
              <div class="content">
                答：组织芯片脱片有很多原因导致：1、实验过程操作不当；2、修复条件不当；3、组织本身特性（如骨、软骨组织和和其相应的肿瘤，在实验过程中最好选用PH6.0 CB修复液，震荡、洗涤轻柔操作）。我们公司实验室技术文件参考内的微波修复的时间参考是医用IHC微波炉，不同于普通的微波炉，请客户在实验时明确，普通微波炉的修复时间、温度等请自行摸索或请假有此经验的老师。我们进口载玻片，保证组织牢固地固定在载玻片上。芯片内抗原保存的优劣和该样本前期的及时固定、时间、处理条件关系密切，我们的产品有着严格的质检体系进行保障。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>15、如何查看扫描图像？</b></p>
              <div class="content">
                答：我公司提供全新的全组织点H&E高分辨扫描图像技术，使得国内客户直接在我们独立服务器上的公司网页上：<a href="http://pathomics.banlan.cloud/MoticGallery/" target="_blank">http://pathomics.banlan.cloud/MoticGallery/</a>通过Flash可以看到100x-400x的显微镜放大图像，也可根据客户的需要，提供存储空间，供客户随时随地浏览和编辑。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>16、我公司的病理取材处理是否专业？</b></p>
              <div class="content">
                答：我公司拥有一批高素质、高水平的病理医生队伍，不仅对人类的各种活检组织进行取材，而且还能熟练解剖、取材、处理和包埋其他动物，如，小鼠、大鼠等。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>17、如何确定芯片上的病理类型？</b></p>
              <div class="content">
                答：每十张组织微阵列切片取一张进行HE染色，由专业病理医生检查，确保病理诊断是更新的。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>18、做石蜡切片实验项目，组织固定的方法是怎样，怎样运输？</b></p>
              <div class="content">
                答：取材后的组织放在中性福尔马林内固定，固定液一定要淹没组织，一般固定组织时间是24-48小时，最好用小瓶按器官单独固定，写清楚编号，密封后邮寄。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>19、做冰冻切片，怎样处理组织，可以固定后运输吗？</b></p>
              <div class="content">
                答：冰冻芯片一般是用OCT包埋后进行切片，切片后立即用冰丙酮或AAF液（客户可选择固定方式）固定10-20分钟后，密封在-20度内暂时保存，运输时用干冰运输，保证组织在低温环境下。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>20、骨肉瘤芯片没有TNM分期？</b></p>
              <div class="content">
                答:是的，临床上有些肿瘤根据其分级或生长方式等去判读其预后，或者有单独的分期标准，不统一使用TNM分期，比如骨肉瘤、淋巴瘤、脑瘤等。
              </div>
            </div>

            <div class="item">
              <p class="title"><b>21、组织芯片加工的周期是怎样的？</b></p>
              <div class="content">
                答:组织芯片的加工周期一般在1-2周时间，个别加急处理的也可在1周内完成。
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
  .question-content {
    margin-top: 25px;
    .item {
      .title {
        margin-bottom: 5px;
      }
    }
  }
  .content {
    line-height: 26px;
    margin-bottom: 1rem;
  }

  .note {
    list-style: decimal;
    margin-left: 30px;
    margin-bottom: 0;
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
