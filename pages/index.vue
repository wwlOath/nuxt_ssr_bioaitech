<template>
  <div>
    <!--components里的组件可以直接引用，名称必须一样-->
    <!--Header-->
    <CommonHeader/>

    <!--content-->
    <div class="content">
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

          <Row :gutter="24">
            <Col :span="12" v-for="item in latestOffersList" :key="item.id">
              <div class="latest-post">
                <p class="text-center title"><b>{{item.title}}</b></p>
                <p class="content">{{item.content}}</p>
              </div>
              <div class="roted-around danger"><span></span></div>
            </Col>
          </Row>
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

                  <Row :gutter="24">
                    <Col :span="12" class="col-item">
                      <div class="item-info">
                        <nuxt-link to="/Home">
                          <h5 class="title text-left">组织芯片定制服务</h5>
                          <hr>
                          <div class="content-item-setting">
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
                        </nuxt-link>
                      </div>
                    </Col>
                    <Col :span="12" class="col-item">
                      <div class="item-info">
                        <nuxt-link to="/Home">
                          <h5 class="title text-left">免疫肿瘤学服务</h5>
                          <hr>
                          <div class="content-item-setting">
                            <div class="left">
                              <img src="@/assets/img/tumor.png">
                            </div>
                            <div class="right">
                              <p class="content">提供了大量的病理学家复查的石蜡包埋的组织（FFPE）块、切片和组织芯片，包含有侵袭性边缘及肿瘤组织。</p>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </Col>
                    <Col :span="12" class="col-item">
                      <div class="item-info">
                        <nuxt-link to="/Home">
                          <h5 class="title text-left">切片数字化扫描服务</h5>
                          <hr>
                          <div class="content-item-setting">
                            <div class="left">
                              <img src="@/assets/img/product/product_2.png">
                            </div>
                            <div class="right">
                              <p class="content">采用进口的高分辨率显微照相系统，对传统的切片、芯片进行高分辨率200倍的扫描，可提供多种存储格式，并可直接标记、分析使用。</p>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </Col>
                    <Col :span="12" class="col-item">
                      <div class="item-info">
                        <nuxt-link to="/Home">
                          <h5 class="title text-left">基因检测服务</h5>
                          <hr>
                          <div class="content-item-setting">
                            <div class="left">
                              <img src="@/assets/img/product/product_3.png">
                            </div>
                            <div class="right">
                              <p class="content">
                                利用高通量测序平台对人类个体或群体进行全基因组测序，并进行生物信息学相关分析，全面挖掘DNA水平的遗传变异，帅选疾病易感基因，剖析疾病遗传机制。主要包括：全基因组测序分析，全外显子组测序分析、目标区域捕获测序分析。</p>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </Col>
                    <Col :span="12" class="col-item">
                      <div class="item-info">
                        <nuxt-link to="/Home">
                          <h5 class="title text-left">病理AI服务</h5>
                          <hr>
                          <div class="content-item-setting">
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
                        </nuxt-link>
                      </div>
                    </Col>
                    <Col :span="12" class="col-item">
                      <div class="item-info">
                        <nuxt-link to="/Home">
                          <h5 class="title text-left">实验技术服务</h5>
                          <hr>
                          <div class="content-item-setting">
                            <div class="left">
                              <img src="@/assets/img/service/complete_12.png">
                            </div>
                            <div class="right">
                              <p class="content">
                                提供组织石蜡包埋、石蜡切片、冰冻切片、组织芯片蜡块制做、H&E染色、天狼猩红染色和WGA染色、细胞油红O染色、Masson染色、免疫组化（IHC）实验、荧光原位杂交（FISH）实验、免疫荧光(immunofluorescence，IF)、普通电泳PCR等实验技术服务。</p>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </Col>
                    <Col :span="12" class="col-item">
                      <div class="item-info">
                        <nuxt-link to="/Home">
                          <h5 class="title text-left">基础科研服务</h5>
                          <hr>
                          <div class="content-item-setting">
                            <div class="left">
                              <img src="@/assets/img/service/service-7.png">
                            </div>
                            <div class="right">
                              <p class="content">包括高通量测序、生物信息CRO等科研服务。</p>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </Col>
                    <Col :span="12" class="col-item">
                      <div class="item-info">
                        <nuxt-link to="/Home">
                          <h5 class="title text-left">高端一体化科研服务</h5>
                          <hr>
                          <div class="content-item-setting">
                            <div class="left">
                              <img src="@/assets/img/service/service-81.png">
                            </div>
                            <div class="right">
                              <p class="content">
                                围绕客户的研究需求，提供从课题设计、实验设计、数据产生和系统分析、到结果的整理、文章撰写和投稿、改稿和发表的一体化科研服务。其中，客户提供临床科学问题、实验中所需的样本，以及经费。万康源根据需求，提供课题方案、高质量数据、技术专家/团队，以及相应的SCI论文。</p>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col span="7">
              <!--新品发布-->
              <div>
                <div class="line-text-center text-center">
                  <span class="line-text-center-line"></span>
                  <span class="line-text-center-txt">最新发布</span>
                  <span class="line-text-center-line"></span>
                </div>
                <List>
                  <ListItem v-for="(item,index) in newList" :key="item.id" :style="{display: index+1 >= (newestPageNumber-1)*5+1 && index+1 <= newestPageNumber*5 ? 'block': 'none' }">
                    <ListItemMeta class="sideList">
                      <template slot="avatar">
                        <img :src="imgUrl+'/'+item.imgId" style="width: 75px">
                      </template>
                      <template slot="title">
                        <a @click="jumpToDetailRelease(item)">{{item.chipId}} </a>
                      </template>
                      <template slot="description">
                        <p class="text-ellipsis-two">{{item.chipExplanation}} </p>
                      </template>
                    </ListItemMeta>
                  </ListItem>
                </List>
                <div class="text-center mar_t_10" v-if="newList.length >5">
                  <Page :total="newList.length" :pageSize="5" @on-change="changeNewestPageNumber"
                        :current="newestPageNumber" size="small" simple/>
                </div>
              </div>

              <!--热卖产品-->
              <div>
                <div class="our-hot-deals">
                  <div class="container">
                    <div class="line-text-center text-center">
                      <span class="line-text-center-line"></span>
                      <span class="line-text-center-txt">热卖产品</span>
                      <span class="line-text-center-line"></span>
                    </div>
                    <List>

                      <ListItem v-for="(item, index) in hotDealsList" :key="item.id" :style="{display: index+1 >= (hotPageNumber-1)*5+1 && index+1 <= hotPageNumber*5 ? 'block': 'none' }">
                        <ListItemMeta class="sideList">
                          <template slot="avatar">
                            <img :src="imgUrl+'/'+item.imgId" style="width: 75px">
                          </template>
                          <template slot="title">
                            <a @click="jumpToDetailHot(item)">{{item.chipId}} </a>
                          </template>
                          <template slot="description">
                            <p class="text-ellipsis-two">{{item.chipExplanation}} </p>
                          </template>
                        </ListItemMeta>
                      </ListItem>
                    </List>

                    <div class="text-center mar_t_10" v-if="hotDealsList.length >5">
                      <Page :total="hotDealsList.length" :pageSize="5" @on-change="changeHotPageNumber"
                            :current="hotPageNumber" size="small" simple/>
                    </div>
                  </div>
                </div>
              </div>

            </Col>

          </Row>
        </div>
      </div>
    </div>

    <!--footer-->
    <CommonFooter/>
  </div>
</template>

<script>
  import config from '@/plugins/config';

  export default {
    name: 'index',
    async asyncData (context) {
      //这句话是在服务端执行的
      //console.log('asyncData')
      let[res1,res2,res3] = await Promise.all([
        context.app.api.newReleaseList({}),
        context.app.api.hotDealsList({}),
        context.app.api.latestOffersList({})
      ])

      return{
        newList: res1.list,
        hotDealsList: res2.list,
        latestOffersList: res3.list,
        imgUrl: config.baseImagePath
      }
    },
    data() {
      return {
        selectSlider: 0,
        newestPageNumber: 1,
        hotPageNumber: 1,
      }
    },
    methods: {
      changeNewestPageNumber(v) {
        this.newestPageNumber = v;
      },
      changeHotPageNumber(v) {
        this.hotPageNumber = v;
      },
      jumpToDetailRelease(data) {
        this.$router.push('/tissueChipDetail/' + data.id + '/0');
      },
      jumpToDetailHot(data) {
        this.$router.push('/tissueChipDetail/' + data.id + '/0');
      },
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .item a {
    color: #2c3e50;
    font-size: 14px;
    text-decoration: none;
  }

  .line-text-center {
    opacity: 0.9;
    margin-top: 14px;
    margin-bottom: 18px;
  }

  .roted-around span {
    position: relative;
    display: block;
    height: 100%;
  }

  .roted-around.danger span {
    -webkit-animation: rotation 4s infinite linear;
    animation: rotation 4s infinite linear;
  }

  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotateX(0deg)
    }
    to {
      -webkit-transform: rotateX(359deg)
    }
  }
  .roted-around {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .roted-around.danger span::before, .roted-around.danger span::after {
    background-image: linear-gradient(-45deg,#505eff 0,#03bdff 100%);
    background-image: -webkit-linear-gradient(-45deg,#505eff 0,#03bdff 100%);
    background-image: -ms-linear-gradient(-45deg,#505eff 0,#03bdff 100%);
  }

  .roted-around span::before {
    left: 5px;
    bottom: 0;
  }
  .roted-around span::after {
    right: 5px;
    top: -5px;
  }

  .roted-around span::before, .roted-around span::after {
    position: absolute;
    width: 20px;
    height: 20px;
    content: "";
    border-radius: 50%;
  }

  .text-ellipsis-two {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
    .col-item {
      margin-bottom: 10px;
      .item-info {
        padding: 20px;
        height: 100%;
        border-radius: 4px;
        box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 10%);
        -webkit-transition: transform 0.5s;
        -o-transition: transform 0.5s;
        transition: transform 0.5s;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
        border: 1px solid transparent;
        .title {
          font-size: 16px;
          margin-bottom: 10px;
          color: #686868;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }
        .content {
          color: #515a6e;
        }
      }
      .item-info:hover {
        -webkit-transition: transform 0.5s;
        -moz-transition: transform 0.5s;
        -o-transition: transform 0.5s;
        transition: transform 0.5s;
        -webkit-transform: translateY(-5px);
        -moz-transform: translateY(-5px);
        -o-transform: translateY(0);
        transform: translateY(-5px);
        border: 1px dotted #3085a3;
      }
    }
  }

  .our-service .item {
    margin: 5px 5px 2px 5px;
    width: 48%;
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
    padding: 20px;
    min-height: 180px;
    border-radius: 8px;
    box-shadow: 0px 0px 40px 0px rgb(0 0 0 / 10%);
    .title {
      margin-bottom: 10px;
    }
  }

  .latest-post .content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    overflow: hidden;
  }

  .content-item-setting {
    display: flex;
    justify-content: flex-start;
    img {
      width: 120px;
      height: 120px;
    }
    .left {
      margin-right: 10px;
    }
  }
</style>
