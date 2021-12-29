<template>
  <div class="tissue-chip-detail-content">
    <!--Header-->
    <CommonHeader/>

    <div class="content-style-top" :style="heightStyle">

      <div v-if="notExitTip">
        <div class="tissue-chip-content-detail">
          <div class="container">
            <Alert show-icon style="margin-top: 100px">
              提示
              <template slot="desc">
                该芯片已删除，请去组织芯片定制页面<a href="../../tissueChip">查看</a>。
              </template>
            </Alert>
          </div>
        </div>
      </div>
      <div v-else>
        <Spin fix v-if="spinShow">
          <Icon type="ios-loading" size=24 class="demo-spin-icon-load"></Icon>
          <div>加载中...</div>
        </Spin>

        <div v-else>
          <div class="tissue-chip-content-detail">
            <div class="container">
              <Row :gutter="24">
                <Col span="12">
                  <table class="table table-bordered">
                    <tbody>
                    <tr>
                      <th>{{ tissueChipDataList.chipId }}</th>
                      <td colspan="3">{{ tissueChipDataList.chipExplanation }}</td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div v-if="isChipImageId" class="text-center">
                          <router-link target="_blank" :to="'/tissueBigChipShow/'+tissueChipDataList.imgId"><img
                            :src="imageUrl+'/' + tissueChipDataList.imgId" style="max-width: 100%"></router-link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>点数</th>
                      <td>{{ tissueChipDataList.points }}</td>
                      <th>例数</th>
                      <td>{{ tissueChipDataList.casesNumber }}</td>
                    </tr>
                    <tr>
                      <th>行数</th>
                      <td>{{ tissueChipDataList.rowNumber }}</td>
                      <th>列数</th>
                      <td>{{ tissueChipDataList.colNumber }}</td>
                    </tr>
                    <tr>
                      <th>点样直径</th>
                      <td>{{ tissueChipDataList.dotDiameter }}</td>
                      <th>组织固定方式</th>
                      <td>{{ tissueChipDataList.organizationalFixation }}</td>
                    </tr>
                    <tr>
                      <th>QA/QC</th>
                      <td colspan="3">{{ tissueChipDataList.qaQc }}</td>
                    </tr>
                    </tbody>
                  </table>
                </Col>
                <Col span="12">
                  <div class="item">
                    <h4>{{ tissueChipDataList.chipId }}</h4>
                    <hr>
                    <p>{{ tissueChipDataList.sampleDescription }}</p>
                    <hr>
                    <Row class="price-info">
                      <Col span="4">价格</Col>
                      <Col class="current-price">
                        <a @click="xunjia(1)">询价</a></Col>
                    </Row>
                    <Row class="type-info">
                      <Col span="24">
                        请选择芯片类型：
                      </Col>
                      <Col>
                        <ul>
                          <li class="currentActive" @click="xunjia(1)"><a>芯片（询价）</a></li>
                          <li @click="xunjia(2)"><a>芯片实验(询价)</a></li>
                        </ul>
                      </Col>
                    </Row>
                   <!-- <Row class="shopping-cart-info" :gutter="16">
                      <Col span="24">
                        请选择购买数量：
                      </Col>
                      <Col span="7" class="info">
                        <Input v-model="purchaseNumber" @on-keyup="purchaseFocus">
                          <Button slot="prepend" icon="md-remove" @click="removeCartNumber"></Button>
                          <Button slot="append" icon="md-add" @click="addCartNumber"></Button>
                        </Input>
                      </Col>
                     <Col span="5" class="info">
                        <Button type="primary" @click="addShoppingCart" :disabled="currentShoppingStatus || isShow == 1"
                                :title="isActive == -1 ? '请选择芯片类型' : ''">
                          <Icon type="md-cart"/>
                          加入购物车
                        </Button>
                      </Col>
                    </Row>-->
                    <Divider />
                    <Row>
                      <Button type="primary" @click="jumpToRepeatChip" style="margin-right: 10px">
                        <Icon type="md-repeat"/>
                        重复病历比较
                      </Button>
                      <Button type="primary" @click="downloadInstructionManual">
                        <Icon type="md-cloud-download"/>
                        下载说明书
                      </Button>
                    </Row>
                  </div>
                </Col>
              </Row>

              <br>
              <div v-if="null != chipDataList && chipDataList.length > 0">
                <div style="display: table-row">
                  <div style="float: left;display: table-cell;">
                    <table border="0" cellpadding="0" cellspacing="0" style="display: block;">
                      <tbody>
                      <tr>
                        <td class="chip-tissue-table-t1">
                          <div class="chip-title-xuanzhuan">
                            <img src="@/assets/img/logo-rotate.png" alt="Logo">
                            <!--<span>{{tissueChipDataList.chipExplanation}}({{tissueChipDataList.chipId}})</span>-->
                          </div>
                        </td>
                        <td height="100%" class="chip-tissue-table-t2">
                          <table cellpadding="3" cellspacing="0" style="border-spacing: 0px; border: 0px;">
                            <tbody>
                            <tr>
                              <th></th>
                              <th style="text-align: center" v-for="col in chipTissueMatrix['col']">{{ col }}</th>
                            </tr>
                            <tr v-for="row in chipTissueMatrix['row']">
                              <th align="right">{{ row }}</th>
                              <td v-for="col in chipTissueMatrix['col']" align="center" style="padding: 0.1em 0.4em;">
                                <div v-if="typeof(chipTissueMatrix['data'][row+col]) != 'undefined'"
                                     class="chip-tissue-matrix-cell"
                                     :style="{height:chipTissueMatrix['circleSize'] +'px',width:chipTissueMatrix['circleSize'] +'px','background-color':chipTissueMatrix['data'][row+col]['organizationType_stage']['color']}"
                                     @mouseover="showChipTissueContent(chipTissueMatrix['data'][row+col])">
                                  <div class="chip-tissue-matrix-cell-c"
                                       :style="{'font-size': chipTissueMatrix['circleFontSize'] + 'px'}">
                                    {{ chipTissueMatrix["data"][row + col]['organ'] }}
                                  </div>
                                </div>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                        <transition name="fade">
                          <td v-if="currentChipPoint != null"
                              style="background-color: #4aa6fc; color:#fff; padding: 5px 16px;min-width: 180px;vertical-align: top">
                            <div>
                              <div class="paper-clip-icon"></div>
                              <div style="float:left">
                                <strong>{{ tissueChipDataList.chipId }} {{
                                  currentChipPoint["position"] || ""
                                  }}</strong>
                                <br/>
                                <div style="font-size: 12px">
                                  <br/>年龄:{{ currentChipPoint["age"] }}
                                  <br/>性别:{{ currentChipPoint["sex"] }}
                                  <br/>器官:{{ currentChipPoint["organ"] }}
                                  <br/>病理诊断:{{ currentChipPoint["pathologicalDiagnosis"] }}
                                  <br/>TNM:{{ currentChipPoint["tnm"] }}
                                  <br/>Grade:{{ currentChipPoint["grade"] }}
                                  <br/>Stage:{{ currentChipPoint["stage"] }}
                                  <br/>组织类型:{{ currentChipPoint["organizationType"] }}
                                  <br/>临床诊断:{{ currentChipPoint["clinicalDiagnosis"] }}
                                  <br/>肿块来自原发/转移:{{ currentChipPoint["tumorFrom"] }}
                                  <br/>肿块大小:{{ currentChipPoint["tumorSize"] }}
                                  <br/>淋巴结转移情况:{{ currentChipPoint["lymphNodeMetastasis"] }}
                                  <br/>远处转移部位:{{ currentChipPoint["distantMetastasis"] }}
                                </div>
                              </div>
                            </div>
                          </td>
                        </transition>
                      </tr>
                      </tbody>
                    </table>


                    <table style="margin: 10px 0">
                      <tbody>
                      <tr>
                        <td style="vertical-align: top"><strong>Legend: </strong></td>
                        <td>
                        <span v-for="(tissueStage,index) in chipTissueMatrix['tissueTypes']" :key="index"><span
                          :style="{'background-color':tissueStage['color'] }" class="chip-tissue-legend-block"></span> {{ tissueStage.type }}({{ tissueStage.stage }})</span>
                        </td>
                      </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>

              <br>
              <div v-show="null != chipDataList  && chipDataList.length >0">
                <Row class="project-list-table">
                  <Table max-height="500" size="small" :loading="loading" border :columns="columns" :data="chipDataList"
                         ref="table"></Table>
                </Row>

                <br>
                <Row>
                  <p><b>应用：</b> {{ tissueChipDataList.useTo }}</p>
                  <b>注意事项：</b>
                  <pre>{{ tissueChipDataList.precautions }}</pre>

                  <div v-if="tissueChipDataList.tnmDescription != '' && tissueChipDataList.tnmDescription != null">
                    <b>TNM说明：</b>
                    <pre>{{ tissueChipDataList.tnmDescription }}</pre>

                  </div>
                </Row>
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

<style lang="less">

  .demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
  }

  @keyframes ani-demo-spin {
    from {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .demo-spin-col {
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }

  .tissue-chip-detail-content {
    .ivu-table-cell {
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  .paper-clip-icon,
  .paper-clip-icon::after,
  .paper-clip-icon::before {
    border-color: rgba(255, 153, 0, 1) !important;
  }

  pre {
    color: #2c3e50;
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
    margin: 5px 0;
  }

  .paper-clip-icon {
    margin-top: -12px;
    width: 23px;
    height: 8px;
    border-bottom: none;
    border-left: 2px solid;
    border-right: 2px solid;
    border-top: none;
    position: relative;
    margin-left: 100px;
    z-index: 5;
    -webkit-box-shadow: 2px 0px 0px rgba(255, 153, 0, 0.1);
    -moz-box-shadow: 2px 0px 0px rgba(255, 153, 0, 0.1);
    box-shadow: 2px 0px 0px rgba(255, 153, 0, 0.1);
  }

  .paper-clip-icon::before {
    position: absolute;
    content: "";
    top: -13px;
    right: -2px;
    width: 17px;
    height: 13px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom: none;
    border-left: 2px solid;
    border-right: 2px solid;
    border-top: 2px solid;
    -webkit-box-shadow: 2px 0px 0px rgba(255, 153, 0, 0.1);
    -moz-box-shadow: 2px 0px 0px rgba(255, 153, 0, 0.1);
    box-shadow: 2px 0px 0px rgba(255, 153, 0, 0.1);
  }

  .paper-clip-icon::after {
    position: absolute;
    content: "";
    bottom: -20px;
    right: 1px;
    width: 14px;
    height: 30px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top: none;
    border-left: 2px solid;
    border-right: 2px solid;
    border-bottom: 2px solid;
    -webkit-box-shadow: 2px 0px 0px rgba(255, 153, 0, 0.1);
    -moz-box-shadow: 2px 0px 0px rgba(255, 153, 0, 0.1);
    box-shadow: 2px 0px 0px rgba(255, 153, 0, 0.1);
  }

  .chip-tissue-table-t1 {
    background-color: #fff;
    text-align: left;
    width: 8em;
    border-color: black;
    border-style: solid;
    border-width: 2px 1px 2px 2px;
    padding-left: 0.5em;
    padding-bottom: 0px;
    min-width: 120px;
  }

  .chip-tissue-table-t2 {
    border-color: black;
    border-style: solid;
    border-width: 2px 2px 2px 0;
    background-color: #eef5ee;
    padding: 0.6em
  }

  .chip-title-xuanzhuan {
    display: block;
    text-align: center;
    width: 8em;
  }

  .chip-title-xuanzhuan img {
    max-width: 100%;
    height: auto;
  }

  .chip-tissue-legend-block {
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-left: 15px;
  }

  .chip-tissue-matrix-cell {
    border-radius: 50%;
    background-color: #ccc;
    padding: 10px;
    vertical-align: middle;
    text-align: center;
    display: table;
    margin: 1px;
    color: white;
    cursor: pointer;
  }

  .chip-tissue-matrix-cell .chip-tissue-matrix-cell-c {
    display: table-cell;
    vertical-align: middle;
  }

  .content-style-top {
    padding-top: 60px;
  }

  .tissue-chip-content-detail {
    padding: 50px 0;

    .item {

      .price-info {
        line-height: 30px;

        .current-price {
          color: #2d8cf0;
          font-size: 22px;
          font-weight: bolder;
        }

      }

      .shopping-cart-info {

        .info {
          margin-top: 5px;
        }

      }

      .type-info {
        line-height: 30px;

        ul {
          list-style: none;
          float: left;

          li {
            float: left;
            position: relative;
            margin: 0 4px 4px 0;
            line-height: 20px;
            vertical-align: middle;
            padding: 1px;

            a {
              float: left;
              width: auto !important;
              min-width: 10px;
              padding: 6px 12px;
              text-align: center;
              border: 1px solid #b8b7bd;
              text-decoration: none;
            }

            a:hover {
              border: 1px solid #2d8cf0;
            }

          }

          li.currentActive {
            background: #2d8cf0;
            color: #fff;

            a {
              border: 1px solid #2d8cf0;
              color: #fff;
            }

          }
        }
      }
    }
  }
</style>

<script>
  /*
  // startColor：开始颜色hex
  // endColor：结束颜色hex
  // step:几个阶级（几步）
  */
  function gradientColor(startColor, endColor, step) {
    let startRGB = this.colorRgb(startColor);//转换为rgb数组模式
    let startR = startRGB[0];
    let startG = startRGB[1];
    let startB = startRGB[2];

    let endRGB = this.colorRgb(endColor);
    let endR = endRGB[0];
    let endG = endRGB[1];
    let endB = endRGB[2];

    let sR = (endR - startR) / step;//总差值
    let sG = (endG - startG) / step;
    let sB = (endB - startB) / step;

    let colorArr = [];
    for (var i = 0; i < step; i++) {
      //计算每一步的hex值
      let hex = this.colorHex('rgb(' + parseInt((sR * i + startR)) + ',' + parseInt((sG * i + startG)) + ',' + parseInt((sB * i + startB)) + ')');
      colorArr.push(hex);
    }
    return colorArr;
  }

  // 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
  gradientColor.prototype.colorRgb = function (sColor) {
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (typeof (sColor) != 'undefined') {
      sColor = sColor.toLowerCase();
      if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
          let sColorNew = "#";
          for (let i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }
          sColor = sColorNew;
        }
        //处理六位的颜色值
        let sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return sColorChange;
      } else {
        return sColor;
      }
    }
  };

  // 将rgb表示方式转换为hex表示方式
  gradientColor.prototype.colorHex = function (rgb) {
    let _this = rgb;
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      let aColor = _this.replace(/(?:(|)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = hex < 10 ? 0 + '' + hex : hex;// 保证每个rgb的值为2位
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    } else if (reg.test(_this)) {
      let aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      } else if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += (aNum[i] + aNum[i]);
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }

  import config from '@/plugins/config';

  export default {
    name: 'tissue-detail',
    async asyncData(context) {
      let notExitTip = false;
      let result = await context.app.api.queryTissueOrganDetailList(context.route.params.id).then(res => {
        if (res.code == 0) {
          notExitTip = false;
          return res;
        }else {
          notExitTip = true;
          return null;
        }
      });

      let chipTissueMatrix = {
        col: [],
        row: [],
        data: {},
        circleSize: 10,
        tissueTypes: {}
      };
      let chipTissueTypeColorSet = [
        "#ff7f0e",
        "#2ca02c",
        "#d62728",
        "#1f77b4",
        "#ff9896",
        "#8c564b",
        "#e377c2",
        "#FFD700",
        "#7f7f7f",
        "#FF1493",
        "#bcbd22",
        "#0000FF",
        "#ADFF2F",
        "#8B668B",
        "#00FFFF",
        "#20B2AA",
        "#ffbb78",
        "#98df8a",
        "#FFBBFF",
        "#BFEFFF",
        "#9932CC",
        "#DAA520",
        "#7FFF00",
        "#4169E1",
        "#708090"
      ];
      //格式化数据格式，使能通过A12能够快速索引到对应数据
      let data = result.tissueChip;
        let medicalRecords = data.medicalRecords;
        if (null == medicalRecords) {
          return false;
        }
        chipTissueMatrix["col"] = Array.from({length: data["colNumber"]}, (_, index) => index + 1)
        chipTissueMatrix["row"] = Array.from({length: data["rowNumber"]}, (_, index) => String.fromCharCode(65 + index))
        let maxSize = 0;
        let organizationType = [];
        let arrs = [];
        medicalRecords.map((x) => {
          if (typeof (x["pathologicalDiagnosis"]) != "undefined" && typeof (x["stage"]) != "undefined") {
            let name = {
              type: x["pathologicalDiagnosis"].replace(/\(.+?\)|\（.+?\）/g, "").trim(),
              stage: x["stage"].toUpperCase().trim(),
              color: ''
            };
            if (organizationType.indexOf(name.type) == -1) {
              organizationType.push(name)
            }

            x["organizationType_stage"] = name
          } else {
            x["organizationType_stage"] = ""
          }

          organizationType.forEach((d) => {
            if (JSON.stringify(arrs).indexOf(JSON.stringify(d)) == -1) {
              arrs.push(d);
            }
          })

          if (typeof (x["position"] != "undefined")) {
            chipTissueMatrix["data"][x["position"].toUpperCase().trim()] = x
            if (x['organ'].length > maxSize) {
              maxSize = x['organ'].length
            }
          }
        });


      //start 格式化数据
      let map = {}, dest = [];
      for (let i = 0; i < arrs.length; i++) {
        let typesValue = arrs[i];
        if (!map[typesValue.type]) {
          dest.push({
            type: typesValue.type,
            stage: typesValue.stage,
            data: [typesValue],
          });
          map[typesValue.type] = typesValue;
        } else {
          for (let j = 0; j < dest.length; j++) {
            let dj = dest[j];
            if (dj.type == typesValue.type) {
              dj.data.push(typesValue);
              break;
            }
          }
        }
      }

      dest.forEach(d => {
        d['number'] = typeof (d.data) != 'undefined' ? d.data.length : 1
      });
      //end 终止


      let colors = [];
      for (let i = 0; i < dest.length; i++) {
        let colorArr = new gradientColor(chipTissueTypeColorSet[i % chipTissueTypeColorSet.length], '#cccccc', dest[i]['number']);
        colors.push(colorArr)
      }

      colors = colors.reduce(function (a, b) {
        return a.concat(b)
      });

      let datas = [];
      dest.forEach((k) => {
        k.data.forEach((v) => {
          datas.push(v);
        })
      })

      datas.forEach((r, i) => {
        r.color = colors[i];
      })

      let colorObj = {};
      datas.forEach((d) => {
        colorObj[d.type + '_' + d.stage] = d.color;
      })

      let transformData = [];
      organizationType.forEach((d) => {
        transformData.push({type: d.type, stage: d.stage, color: colorObj[d.type + '_' + d.stage]});
      });

      medicalRecords.map((x, i) => {
        if (typeof (x["pathologicalDiagnosis"]) != "undefined" && typeof (x["stage"]) != "undefined") {
          let name = {
            type: x["pathologicalDiagnosis"].replace(/\(.+?\)|\（.+?\）/g, "").trim(),
            stage: x["stage"].toUpperCase().trim(),
            color: transformData[i]['color']
          };

          if (organizationType.indexOf(name.type) == -1) {
            organizationType.push(name)
          }

          x["organizationType_stage"] = name
        } else {
          x["organizationType_stage"] = ""
        }
      });

      chipTissueMatrix["tissueTypes"] = datas;
      chipTissueMatrix["circleSize"] = 25 + Math.sqrt(maxSize * 2) * 6
      chipTissueMatrix["circleFontSize"] = 16 - Math.sqrt(maxSize) * 2

      if(result != null) {
        return {
          tissueChipDataList: result.tissueChip,
          tissueChipPriceList: result.tissueChip.attributes,
          chipDataList: result.tissueChip.medicalRecords,
          spinShow: false,
          loading: false,
          notExitTip: notExitTip,
          chipTissueMatrix: chipTissueMatrix
        }
      }else{
        return {
          spinShow: false,
          loading: false,
          notExitTip: notExitTip
        }
      }
    },
    data() {
      return {
        //tissueChipDataList: '',
        imageUrl: config.slideLabelPath,
        id: '',
        //tissueChipPriceList: [],
        currentChipPrice: '',
        isActive: -1,
        purchaseNumber: 1,
        currentChipTypeId: '',
        loading: true,
        columns: [
          {
            title: '位置',
            key: 'position',
            align: 'center',
            sortable: true,
            width: 60,
            sortType: 'asc',
            fixed: 'left',
            sortMethod: (a, b, type) => {
              let reChart = /[^a-zA-Z]/g;
              let reNumber = /[^0-9]/g;
              let chartAValue = a.replace(reChart, "");
              let chartBValue = b.replace(reChart, "");
              let numberAValue = parseInt(a.replace(reNumber, ""), 10);
              let numberBValue = parseInt(b.replace(reNumber, ""), 10);

              if (type == 'asc') {
                if (chartAValue === chartBValue) {
                  return numberAValue === numberBValue ? 0 : numberAValue > numberBValue ? 1 : -1;
                } else {
                  return chartAValue > chartBValue ? 1 : -1;
                }
              } else {
                if (chartAValue === chartBValue) {
                  return numberAValue === numberBValue ? 0 : numberAValue < numberBValue ? 1 : -1;
                } else {
                  return chartAValue < chartBValue ? 1 : -1;
                }
              }
            }
          },
          {
            title: '年龄',
            key: 'age',
            align: 'center',
            sortable: true,
            width: 60,
            render: (h, params) => {
              return h('div', Number(params.row.age));
            }
          },
          {
            title: '性别',
            key: 'sex',
            align: 'center',
            sortable: true,
            width: 60
          },
          {
            title: '器官',
            key: 'organ',
            align: 'center',
            sortable: true,
            width: 60
          },
          {
            title: '病理诊断',
            key: 'pathologicalDiagnosis',
            align: 'center',
            sortable: true,
            minWidth: 190
          },
          {
            title: 'Grade',
            key: 'grade',
            align: 'center',
            sortable: true,
            width: 70
          },
          {
            title: 'TNM',
            key: 'tnm',
            align: 'center',
            sortable: true,
            width: 80
          },
          {
            title: 'Stage',
            key: 'stage',
            align: 'center',
            sortable: true,
            width: 70
          },
          {
            title: '组织类型',
            key: 'organizationType',
            align: 'center',
            sortable: true,
            width: 80
          },
          {
            title: '临床诊断',
            align: "center",
            key: 'clinicalDiagnosis',
            width: 80,
            sortable: true
          },
          {
            title: '肿块来自原发/转移',
            align: "center",
            key: 'tumorFrom',
            width: 130,
            sortable: true
          },
          {
            title: '肿块大小',
            align: "center",
            key: 'tumorSize',
            width: 80,
            sortable: true
          },
          {
            title: '淋巴结转移情况',
            align: "center",
            key: 'lymphNodeMetastasis',
            width: 120,
            sortable: true
          },
          {
            title: '远处转移部位',
            align: "center",
            key: 'distantMetastasis',
            width: 110,
            sortable: true
          },
          {
            title: 'IHC1',
            align: "center",
            key: 'ihcMarker1',
            width: 120,
            sortable: true
          },
          {
            title: 'IHC2',
            align: "center",
            key: 'ihcMarker2',
            width: 120,
            sortable: true
          },
          {
            title: 'IHC3',
            align: "center",
            key: 'ihcMarker3',
            width: 120,
            sortable: true
          },
          {
            title: 'IHC4',
            align: "center",
            key: 'ihcMarker4',
            width: 120,
            sortable: true
          },
          {
            title: 'IHC5',
            align: "center",
            key: 'ihcMarker5',
            width: 120,
            sortable: true
          },
        ],
        //chipDataList: [],
        chipTissueMatrix: {
          col: [],
          row: [],
          data: {},
          circleSize: 10,
          tissueTypes: {}
        },
        chipTissueTypeColorSet: [
          "#ff7f0e",
          "#2ca02c",
          "#d62728",
          "#1f77b4",
          "#ff9896",
          "#8c564b",
          "#e377c2",
          "#FFD700",
          "#7f7f7f",
          "#FF1493",
          "#bcbd22",
          "#0000FF",
          "#ADFF2F",
          "#8B668B",
          "#00FFFF",
          "#20B2AA",
          "#ffbb78",
          "#98df8a",
          "#FFBBFF",
          "#BFEFFF",
          "#9932CC",
          "#DAA520",
          "#7FFF00",
          "#4169E1",
          "#708090"
        ], //预置的颜色
        currentChipPoint: null,
        isShow: '',
        currentShoppingStatus: true,
        heightStyle: {},
        spinShow: true,
        notExitTip: false
      }
    },
    computed: {
      isChipImageId() {
        //判断是否有图像及图像id是否正确
        if (this.tissueChipDataList != "" && typeof (this.tissueChipDataList["imgId"]) != "undefined") {
          return /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(this.tissueChipDataList["imgId"].trim())
        }
        return false
      }
    },
    methods: {
      showChipTissueContent(chip) {
        this.currentChipPoint = chip
      },
      //格式化数据格式，使能通过A12能够快速索引到对应数据
      transform_chip_data_info(data) {
        let that = this
        let medicalRecords = data.medicalRecords;
        if (null == medicalRecords) {
          return false;
        }
        that.chipTissueMatrix["col"] = Array.from({length: data["colNumber"]}, (_, index) => index + 1)
        that.chipTissueMatrix["row"] = Array.from({length: data["rowNumber"]}, (_, index) => String.fromCharCode(65 + index))
        let maxSize = 0;
        let organizationType = [];
        let arrs = [];
        medicalRecords.map((x) => {
          if (typeof (x["pathologicalDiagnosis"]) != "undefined" && typeof (x["stage"]) != "undefined") {
            let name = {
              type: x["pathologicalDiagnosis"].replace(/\(.+?\)|\（.+?\）/g, "").trim(),
              stage: x["stage"].toUpperCase().trim(),
              color: ''
            };
            if (organizationType.indexOf(name.type) == -1) {
              organizationType.push(name)
            }

            x["organizationType_stage"] = name
          } else {
            x["organizationType_stage"] = ""
          }

          organizationType.forEach((d) => {
            if (JSON.stringify(arrs).indexOf(JSON.stringify(d)) == -1) {
              arrs.push(d);
            }
          })

          if (typeof (x["position"] != "undefined")) {
            that.chipTissueMatrix["data"][x["position"].toUpperCase().trim()] = x
            if (x['organ'].length > maxSize) {
              maxSize = x['organ'].length
            }
          }
        });

        arrs = that.getWordCnt(arrs)

        let colors = [];
        for (let i = 0; i < arrs.length; i++) {
          let colorArr = new gradientColor(that.chipTissueTypeColorSet[i % that.chipTissueTypeColorSet.length], '#cccccc', arrs[i]['number']);
          colors.push(colorArr)
        }

        colors = colors.reduce(function (a, b) {
          return a.concat(b)
        });

        let datas = [];
        arrs.forEach((k) => {
          k.data.forEach((v) => {
            datas.push(v);
          })
        })

        datas.forEach((r, i) => {
          r.color = colors[i];
        })

        let colorObj = {};
        datas.forEach((d) => {
          colorObj[d.type + '_' + d.stage] = d.color;
        })

        let transformData = [];
        organizationType.forEach((d) => {
          transformData.push({type: d.type, stage: d.stage, color: colorObj[d.type + '_' + d.stage]});
        });

        medicalRecords.map((x, i) => {
          if (typeof (x["pathologicalDiagnosis"]) != "undefined" && typeof (x["stage"]) != "undefined") {
            let name = {
              type: x["pathologicalDiagnosis"].replace(/\(.+?\)|\（.+?\）/g, "").trim(),
              stage: x["stage"].toUpperCase().trim(),
              color: transformData[i]['color']
            };

            if (organizationType.indexOf(name.type) == -1) {
              organizationType.push(name)
            }

            x["organizationType_stage"] = name
          } else {
            x["organizationType_stage"] = ""
          }
        });

        that.chipTissueMatrix["tissueTypes"] = datas;
        that.chipTissueMatrix["circleSize"] = 25 + Math.sqrt(maxSize * 2) * 6
        that.chipTissueMatrix["circleFontSize"] = 16 - Math.sqrt(maxSize) * 2
      },

      //统计相同类型的数量
      getWordCnt(types) {
        let map = {}, dest = [];
        for (let i = 0; i < types.length; i++) {
          let typesValue = types[i];
          if (!map[typesValue.type]) {
            dest.push({
              type: typesValue.type,
              stage: typesValue.stage,
              data: [typesValue],
            });
            map[typesValue.type] = typesValue;
          } else {
            for (let j = 0; j < dest.length; j++) {
              let dj = dest[j];
              if (dj.type == typesValue.type) {
                dj.data.push(typesValue);
                break;
              }
            }
          }
        }

        dest.forEach(d => {
          d['number'] = typeof (d.data) != 'undefined' ? d.data.length : 1
        });

        return dest;
      },
      //选择芯片类型切换价格
      changeCurrentChipPrice(data, index) {
        this.currentChipPrice = '¥' + data.price;
        this.isActive = index;
        this.currentChipTypeId = data.id;
        if (data.inventory > 0) {
          this.purchaseNumber = 1;
          this.currentShoppingStatus = false;
        } else {
          this.purchaseNumber = 1;
          this.currentShoppingStatus = true;
        }
      },
      xunjia(type) {
        let con = ""
        if (type == 1) {
          con = "芯片"
        } else {
          con = "芯片实验"
        }
        this.$router.push({
          name: 'contactUs',
          params: {
            title: con + "询价：" + this.tissueChipDataList["chipId"],
            content: "芯片名称：<<" + this.tissueChipDataList["chipExplanation"] + ">>"
          }
        });
      },
      //重复病历跳转页面
      jumpToRepeatChip() {
        this.$router.push('/repeatChip/' + this.id + '/' + this.tissueChipDataList.chipId);
      },
      //下载说明书
      downloadInstructionManual() {
        let _this = this;
        this.$api.downloadInstructionManualFile(_this.id).then(res => {
          if (!res) {
            return
          }
          let url = window.URL.createObjectURL(new Blob([res]));
          let link = document.createElement('a');
          link.style.display = 'none';
          link.href = url;
          link.setAttribute('download', _this.tissueChipDataList.chipId + '.xlsx');
          document.body.appendChild(link);
          link.click();
        })
      },
      calcWindowWidth() {
        if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
          this.heightStyle = {
            'min-height': window.innerHeight + 'px'
          }
        } else {
          this.heightStyle = {minHeight: "100vh"};
        }
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      /*if(typeof(this.tissueChipDataList) != "undefined" && this.tissueChipDataList.length != 0) {
        this.transform_chip_data_info(this.tissueChipDataList);
      }*/
      this.isShow = this.$route.params.isShow;
      //计算手机端的高度
      this.calcWindowWidth();
    }
  }

</script>
