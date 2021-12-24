<template>
  <div>
    <CommonHeader/>

    <div class="content-style-top">
      <Carousel autoplay v-model="selectSlider" :autoplay-speed="5000">
        <CarouselItem>
          <div class="carousel-img">
            <img src="@/assets/img/slider_3.png" alt="">
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="carousel-img">
            <img src="@/assets/img/tissue_chip.png" alt="">
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="carousel-img">
            <img src="@/assets/img/slider_12.png" alt="">
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <!--最新优惠-->
    <div class="our-latest-offers">
      <div class="container">
        <div class="line-text-center text-center">
          <span class="line-text-center-line"></span>
          <span class="line-text-center-txt">最新优惠</span>
          <span class="line-text-center-line"></span>
        </div>

        <div class="row">
          <div v-for="item in latestOffersList" :key="item.id" style="margin:5px 5px 2px 5px; width:48%">
            <div class="latest-post">
              <p class="text-center"><b>{{item.title}}</b></p>
              <p class="content">{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="style-top-content our-new-release">
      <div class="container">
        <Row>
          <Col span="17">

            <!--产品&服务-->
            <div class="our-service">
              <div class="container">
                <div class="line-text-center text-center">
                  <span class="line-text-center-line"></span>
                  <span class="line-text-center-txt">产品服务</span>
                  <span class="line-text-center-line"></span>
                </div>

                <div class="row">
                  <!--组织芯片定制服务-->
                  <div class="item">
                    <router-link to="/service/CustomMadeChip">
                      <div class="single-service tran4s">
                        <h5 class="title text-left">组织芯片定制服务</h5>
                        <hr>
                        <div class="row">
                          <div class="left">
                            <img src="@/assets/img/product/product_1.png">
                          </div>
                          <div class="right">
                            <p class="content">专业芯片设计师团队为您量身定制各种点样和病例的组织芯片。</p>
                            <p class="content">1.芯片内自设阴性对照组</p>
                            <p class="content">2.组织齐全，可提供配套的石蜡组织，冰冻组织及全血或血清样本</p>
                            <p class="content">3.样本新鲜，所有组织芯片采用最新样本，存储时间最晚不超过3年</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>

                  <!--免疫肿瘤学服务-->
                  <div class="item">
                    <router-link to="/service/ImmuneTumor">
                      <div class="single-service tran4s">
                        <h5 class="title text-left">免疫肿瘤学服务</h5>
                        <hr>
                        <div class="row">
                          <div class="left">
                            <img src="@/assets/img/tumor.png">
                          </div>
                          <div class="right">
                            <p class="content">提供了大量的病理学家复查的石蜡包埋的组织（FFPE）块、切片和组织芯片，包含有侵袭性边缘及肿瘤组织。</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>


                  <!--切片数字化扫描服务-->
                  <div class="item">
                    <router-link to="/service/DigitalScanning">
                      <div class="single-service tran4s">
                        <h5 class="title text-left">切片数字化扫描服务</h5>
                        <hr>
                        <div class="row">
                          <div class="left">
                            <img src="@/assets/img/product/product_2.png">
                          </div>
                          <div class="right">
                            <p class="content">采用进口的高分辨率显微照相系统，对传统的切片、芯片进行高分辨率200倍的扫描，可提供多种存储格式，并可直接标记、分析使用。</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>

                  <!--基因检测服务-->
                  <div class="item">
                    <router-link to="/service/GeneticTesting">
                      <div class="single-service tran4s">
                        <h5 class="title text-left">基因检测服务</h5>
                        <hr>
                        <div class="row">
                          <div class="left">
                            <img src="@/assets/img/product/product_3.png">
                          </div>
                          <div class="right">
                            <p class="content">
                              利用高通量测序平台对人类个体或群体进行全基因组测序，并进行生物信息学相关分析，全面挖掘DNA水平的遗传变异，帅选疾病易感基因，剖析疾病遗传机制。主要包括：全基因组测序分析，全外显子组测序分析、目标区域捕获测序分析。</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>

                  <!--病理AI服务-->
                  <div class="item">
                    <router-link to="/service/AI">
                      <div class="single-service tran4s">
                        <h5 class="title text-left">病理AI服务</h5>
                        <hr>
                        <div class="row">
                          <div class="left">
                            <img src="@/assets/img/product/product_6.png">
                          </div>
                          <div class="right">
                            <p class="content">病理AI/病理AI识别辅助癌症诊断</p>
                            <p class="content">病理诊断行业现状及面对的严峻问题：</p>
                            <p class="content">1.病理医生在我国显著缺乏</p>
                            <p class="content">2.病理医生诊断水平差异较大</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <!--可完成技术服务内容-->
                  <div class="item">
                    <router-link to="/service/completeTechnology">
                      <div class="single-service tran4s">
                        <h5 class="title text-left">实验技术服务</h5>
                        <hr>
                        <div class="row">
                          <div class="left">
                            <img src="@/assets/img/service/complete_12.png">
                          </div>
                          <div class="right">
                            <p class="content">
                              提供组织石蜡包埋、石蜡切片、冰冻切片、组织芯片蜡块制做、H&E染色、天狼猩红染色和WGA染色、细胞油红O染色、Masson染色、免疫组化（IHC）实验、荧光原位杂交（FISH）实验、免疫荧光(immunofluorescence，IF)、普通电泳PCR等实验技术服务。</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <!--基础科研服务-->
                  <div class="item">
                    <router-link to="/service/basicResearch">
                      <div class="single-service tran4s">
                        <h5 class="title text-left">基础科研服务</h5>
                        <hr>
                        <div class="row">
                          <div class="left">
                            <img src="@/assets/img/service/service-7.png">
                          </div>
                          <div class="right">
                            <p class="content">包括高通量测序、生物信息CRO等科研服务。</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>

                  <!--高端一体化科研服务-->
                  <div class="item">
                    <router-link to="/service/integrated">
                      <div class="single-service tran4s">
                        <h5 class="title text-left">高端一体化科研服务</h5>
                        <hr>
                        <div class="row">
                          <div class="left">
                            <img src="@/assets/img/service/service-81.png">
                          </div>
                          <div class="right">
                            <p class="content">
                              围绕客户的研究需求，提供从课题设计、实验设计、数据产生和系统分析、到结果的整理、文章撰写和投稿、改稿和发表的一体化科研服务。其中，客户提供临床科学问题、实验中所需的样本，以及经费。万康源根据需求，提供课题方案、高质量数据、技术专家/团队，以及相应的SCI论文。</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>


                </div>
              </div>
            </div>
          </Col>

          <Col span="7">
            <!--新品发布-->
            <Row>
              <div class="line-text-center text-center">
                <span class="line-text-center-line"></span>
                <span class="line-text-center-txt">最新发布</span>
                <span class="line-text-center-line"></span>
              </div>
              <List>

                <ListItem v-for="item in newReleaseListC" :key="item.id">
                  <ListItemMeta class="sideList">
                    <template slot="avatar">
                      <img :src="imgUrl+'/'+item.imgId" style="width: 75px">
                    </template>
                    <template slot="title">
                      <a @click="jumpToDetailRelease(item)">{{item.chipId}} </a>
                    </template>
                    <template slot="description">
                      <a @click="jumpToDetailRelease(item)" style="font-size:14px">{{item.chipExplanation}} </a>
                    </template>
                  </ListItemMeta>
                </ListItem>
              </List>
              <div style="text-align: center" v-if="newReleaseList.length >5">
                <Page :total="newReleaseList.length" :pageSize="5" @on-change="changeNewestPageNumber"
                      :current="newestPageNumber" size="small" simple/>
              </div>
            </Row>

            <!--热卖产品-->
            <Row>
              <div class="our-hot-deals">
                <div class="container">
                  <div class="line-text-center text-center">
                    <span class="line-text-center-line"></span>
                    <span class="line-text-center-txt">热卖产品</span>
                    <span class="line-text-center-line"></span>
                  </div>
                  <List>

                    <ListItem v-for="item in hotDealsListC" :key="item.id">
                      <ListItemMeta class="sideList">
                        <template slot="avatar">
                          <img :src="imgUrl+'/'+item.imgId" style="width: 75px">
                        </template>
                        <template slot="title">
                          <a @click="jumpToDetailHot(item)">{{item.chipId}} </a>
                        </template>
                        <template slot="description">
                          <a @click="jumpToDetailHot(item)" style="font-size:14px">{{item.chipExplanation}} </a>
                        </template>
                      </ListItemMeta>
                    </ListItem>
                  </List>

                  <div style="text-align: center" v-if="hotDealsList.length >5">
                    <Page :total="hotDealsList.length" :pageSize="5" @on-change="changeHotPageNumber"
                          :current="hotPageNumber" size="small" simple/>
                  </div>
                </div>
              </div>
            </Row>

          </Col>

        </Row>
      </div>
    </div>


    <CommonFooter/>
  </div>
</template>

<script>
 /* import {
    newReleaseList,
    hotDealsList,
    latestOffersList,
    baseImagePath
  } from '@/api/index';*/

  export default {
    name: 'home',
    data() {
      return {
        selectSlider: 0,
        newReleaseList: [],
        hotDealsList: [],
        latestOffersList: [],
        //imgUrl: baseImagePath,
        newestPageNumber: 1,
        hotPageNumber: 1,
      }
    },
    computed: {
      newReleaseListC() {
        return this.newReleaseList.slice((this.newestPageNumber - 1) * 5, this.newestPageNumber * 5)
      },
      hotDealsListC() {
        return this.hotDealsList.slice((this.hotPageNumber - 1) * 5, this.hotPageNumber * 5)
      }
    },
    methods: {
      changeNewestPageNumber(v) {
        this.newestPageNumber = v
      },
      changeHotPageNumber(v) {
        this.hotPageNumber = v
      },
      /*新品发布*/
      getNewRelease() {
        newReleaseList().then(res => {
          if (res.code == 0) {
            this.newReleaseList = res.list;
          }
        });
      },
      jumpToDetailRelease(data) {
        this.$router.push('/tissueChipDetail/' + data.id + '/0');
      },

      /*热卖产品*/
      getHotDeals() {
        hotDealsList().then(res => {
          if (res.code == 0) {
            this.hotDealsList = res.list;
          }
        });
      },
      jumpToDetailHot(data) {
        this.$router.push('/tissueChipDetail/' + data.id + '/0');
      },

      /*最新优惠*/
      getLatestOffers() {
        latestOffersList().then(res => {
          if (res.code == 0) {
            this.latestOffersList = res.list;
          }
        });
      },
    },
    mounted() {
      //this.getNewRelease();
      //this.getHotDeals();
      //this.getLatestOffers();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item a {
    color: #2c3e50;
    font-size: 14px;
    text-decoration: none;
  }

  .container {
    max-width: 1300px !important;
  }

  .line-text-center {
    opacity: 0.9;
    margin-top: 14px;
    margin-bottom: 8px;
  }

  .line-text-center .line-text-center-line {
    display: inline-block;
    width: 50px;
    border-top: 2px solid #3085a3;
  }

  .line-text-center .line-text-center-txt {
    padding-left: 5px;
    padding-right: 5px;
    color: #686868;
    font-size: 20px;
    line-height: 30px;
    vertical-align: middle;
  }

  .carousel-img {
    height: auto;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 20px;
  }

  .content-style-top {
    padding-top: 60px;
  }

  .carousel-img img {
    width: 100%;
  }

  .style-top-content {
    margin: 35px auto 0;
  }

  .our-service {
    margin-bottom: 30px;
  }

  .our-service .item {
    margin: 5px 5px 2px 5px;
    width: 48%;
  }

  .our-service .item .row {
    padding: 0 5px;
    min-height: 150px;
  }

  .our-service .item .row .left {
    margin: 2px 5px;
    width: 30%;
    text-align: center;
  }

  .our-service .item .row .right {
    margin: 2px 5px;
    width: 64%;
  }

  .ellipsis-item {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  .our-service .seo-title-one h4 span,
  .our-new-release .seo-title-one h4 span,
  .our-hot-deals .seo-title-one h4 span,
  .our-latest-offers .seo-title-one h4 span {
    padding: 10px;
    border-bottom: 3px solid #2d8cf0;
    margin-bottom: 15px;
    display: inline-block;
  }

  .our-service .single-service {
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    position: relative;
    margin-bottom: 30px;
    padding: 15px 10px;
    min-height: 220px;

  }

  .our-service .single-service:hover {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  .our-service .single-service img {
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
  }

  .our-service .single-service img {
    max-width: 100%;
    height: 120px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  .our-service .single-service .content {
    font-size: 14px;
    padding: 0px 10px 0 10px;
    text-align: left;
    margin-bottom: 0;
  }

  .our-service .single-service h2 {
    font-size: 45px;
    font-weight: 900;
    color: #f6f6f6;
    position: absolute;
    left: 35px;
    bottom: 20px;
  }

  /*新品发布*/
  .our-new-release img,
  .our-hot-deals img,
  .our-latest-offers img {
    width: 100%;
  }

  .latest-post {
    position: relative;
    margin-bottom: 5px;
    border: 1px dotted #ddd;
    padding: 10px 10px;
    min-height: 180px;
    border-radius: 8px;
  }

  .latest-post .content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    overflow: hidden;
  }

  figure {
    position: relative;
    float: left;
    overflow: hidden;
    margin: 10px 1%;
    height: 210px;
    background: #3085a3;
    text-align: center;
    cursor: pointer;
  }

  figure figcaption, figure figcaption > a {
    position: absolute;
    top: 0;
    left: 0;

  }

  figure figcaption {
    padding: 10px 10px;
    color: rgba(0, 0, 0, 0.8);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  figure figcaption .title {
    color: rgba(80, 80, 80, 0.85);
    line-height: 28px;
    font-weight: 500;
    font-size: 16px;
    padding: 20px 10px 1px;
    margin-bottom: 1px;
  }

  figure figcaption .title b, figure figcaption .subTitle {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  figure.effect-ming {
    background: #fff;
    border: 1px solid rgba(100, 100, 100, 0.4);
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 100%;
  }

  figure.effect-ming:hover {
    box-shadow: 2px 2px 3px rgba(74, 166, 252, 0.4);
  }

  figure.effect-ming img {
    /*opacity:.9;*/
    -webkit-transition: opacity .35s;
    transition: opacity .35s;
    padding: 1px 5px;
    vertical-align: middle;
    object-fit: cover
  }

  figure.effect-ming figcaption::before {
    position: absolute;
    top: 20px;
    right: 10px;
    bottom: 20px;
    left: 10px;
    border: 2px solid #fff;
    content: '';
    opacity: 0;
    -webkit-transition: opacity .35s, -webkit-transform .35s;
    transition: opacity .35s, transform .35s;
    -webkit-transform: scale3d(1.4, 1.4, 1);
    transform: scale3d(1.4, 1.4, 1);
    height: 240px
  }

  figure.effect-ming h5, figure figcaption .subTitle {
    -webkit-transform: translate(0, 100px);
    transform: translate(0, 100px);
    -webkit-transition: -webkit-transform .35s;
    transition: transform .35s
  }

  figure.effect-ming p {
    padding: 1em;
    opacity: 0;
    -webkit-transition: opacity .35s, -webkit-transform .35s;
    transition: opacity .35s, transform .35s;
    -webkit-transform: translate(0, 0) scale(1.5);
    transform: translate(0, 0) scale(1.5)
  }

  figure.effect-ming:hover h5, figure.effect-ming:hover .subTitle {
    -webkit-transform: translate(0, 0) scale(.95);
    transform: translate(0, 0) scale(.95)
  }

  figure.effect-ming:hover figcaption::before {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1)
  }

  figure.effect-ming:hover p {
    opacity: 1;
    -webkit-transform: translate(0, 0) scale3d(1, 1, 1);
    transform: translate(0, 0) scale3d(1, 1, 1);
    position: relative;
    max-height: 100px;
    overflow: hidden;
  }

  figure.effect-ming:hover figcaption {
    background-color: transparent
  }

  figure.effect-ming:hover img {
    opacity: .8
  }
</style>
