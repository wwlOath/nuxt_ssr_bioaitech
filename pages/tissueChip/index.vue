<template>
  <div class="tissue-chip-container">
    <!--Header-->
    <CommonHeader/>

    <div class="content-style-top" :style="heightStyle">
      <div class="container">
        <div class="content">
          <div class="chilp-list">
            <table class="table table-bordered">
              <tbody>
              <tr>
                <td>价格:</td>
                <td>
                  <div v-if="Object.keys(selectedParams).length == 0">
                    <ul>
                      <li v-for="(item,index) in price" :key="index" @click="conditionalSearch(item)"
                          :class="item.selected ? 'currentActive': ''">{{ item.content }}
                      </li>
                    </ul>
                  </div>
                  <div v-else>
                    <ul>
                      <li v-for="(item,index) in selectedParams.price" :key="index" @click="conditionalSearch(item)"
                          :class="item.selected ? 'currentActive': ''">{{ item.content }}
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>点数:</td>
                <td>
                  <div v-if="Object.keys(selectedParams).length == 0">
                    <ul>
                      <li v-for="(item,index) in point" :key="index" @click="conditionalSearch(item)"
                          :class="item.selected ? 'currentActive': ''">{{ item.content }}
                      </li>
                    </ul>
                  </div>
                  <div v-else>
                    <ul>
                      <li v-for="(item,index) in selectedParams.point" :key="index" @click="conditionalSearch(item)"
                          :class="item.selected ? 'currentActive': ''">{{ item.content }}
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>例数:</td>
                <td>
                  <div v-if="Object.keys(selectedParams).length == 0">
                    <ul>
                      <li v-for="(item,index) in cases" :key="index" @click="conditionalSearch(item)"
                          :class="item.selected ? 'currentActive': ''">{{ item.content }}
                      </li>
                    </ul>
                  </div>
                  <div v-else>
                    <ul>
                      <li v-for="(item,index) in selectedParams.cases" :key="index" @click="conditionalSearch(item)"
                          :class="item.selected ? 'currentActive': ''">{{ item.content }}
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>取样方式:</td>
                <td>
                  <div v-if="Object.keys(selectedParams).length == 0">
                    <ul>
                      <li v-for="(item,index) in arrayTypingList" :id="item.id" @click="conditionalSearch(item)"
                          :class="item.selected ? 'currentActive': ''">{{ item.name }}
                      </li>
                    </ul>
                  </div>
                  <div v-else>
                    <ul>
                      <li v-for="(item,index) in selectedParams.categoryId" :id="item.id" @click="conditionalSearch(item)"
                          :class="item.selected ? 'currentActive': ''">{{ item.name }}
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>组织器官:</td>
                <td>
                  <div v-if="Object.keys(selectedParams).length == 0">
                    <ul>
                      <li v-for="(key,index) in tissueOrganList" :id="key.id" @click="conditionalSearch(key)"
                          :class="key.selected ? 'currentActive': ''">{{ key.name }} ({{ key.count }})
                      </li>
                    </ul>
                  </div>
                  <div v-else>
                    <ul>
                      <li v-for="(key,index) in selectedParams.arrayTyping" :id="key.id" @click="conditionalSearch(key)"
                          :class="key.selected ? 'currentActive': ''">{{ key.name }} ({{ key.count }})
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="table-content">
          <Row style="margin-bottom: 2vh" :gutter="8">
            <Col :xs="15" :sm="15" :md="13" :lg="13">
              <Input search placeholder="Search" size="large" enter-button v-model="searchContent"
                     @on-search="searchTissueChipList"/>
            </Col>

          </Row>

          <Row class="project-list-table">
            <div class="text-right" style="margin-top: -20px;padding-bottom: 5px;width: 100%">
              <Poptip placement="left" width="260" @on-popper-show="changeShareImgLink()">
                <a href="javascript:">
                  <img src="@/assets/img/barCode.png" style="width:28px;vertical-align: middle">
                </a>
                <div  slot="content" style="text-align: center" >
                  <img :src="shareImgLink" id="barCodeImg"></img>
                  <br>
                  <a href="javascript:" @click="copyLink()">点击下载二维码分享此页</a>
                </div>
              </Poptip>
             <!-- 库存:
              <Tag color="green">高</Tag>
              <Tag color="orange">低</Tag>
              <Tag color="red">无</Tag>-->
            </div>
            <Table :loading="loading" border :columns="columns" :data="data" ref="table"
                   @on-sort-change="changeSort"></Table>
          </Row>
          <Row type="flex" justify="end" style="margin-top: 2vh">
            <Page :current="page.page" :total="page.total" :page-size="page.limit" @on-change="changePage"
                  @on-page-size-change="changePageSize" :page-size-opts="[20,50,80,150]" size="small" show-total
                  show-sizer></Page>
          </Row>
        </div>
      </div>
    </div>

    <!--Footer-->
    <CommonFooter/>
  </div>
</template>

<style lang="less">
  .highlight {
    color: #a71d2a;
  }

  .tissue-chip-container {
    .content-style-top {
      padding-top: 50px;
    }

    .content {
      padding: 40px 0px 15px;

      .title {
        padding: 10px;
        background: #4aa6fc;
        color: #fff;
        border-radius: 4px 4px 0 0;
        font-size: 14px;
      }

      .chilp-list {
        .table {
          tr {
            td:nth-child(1) {
              width: 150px;
              font-size: 14px;
              background: #efefef;
              text-align: right;
            }

            td {
              padding: 7px;
            }

            ul {
              list-style: none;
              margin-bottom: 0;

              li {
                float: left;
                font-size: 14px;
                padding: 0 10px;
                color: #4aa6fc;
                cursor: pointer;
              }

              .currentActive {
                color: #f5222d;
                font-weight: bold;
              }
            }
          }
        }
      }
    }

    .table-content {
      padding: 0 0 40px;

      .ivu-table-cell {
        padding: 5px;
      }

      .ivu-row {
        padding: 5px 0;
      }
    }
    .ivu-table table {
      width: 100%;
    }
  }
</style>

<script>
  import config from '@/plugins/config';

  export default {
    name: 'tissue-chip',
    watch: {
      "$route": function(){
        //路由变化会触发
        //location.reload();
      }
    },
    /*key(route) {
      console.log(route)
      return route.fullPath
    },*/
    async asyncData (context) {
      let _this = this;
      let price = [
        {
          priceId: 0,
          content: '￥500以下',
          value: '0~500',
          selected: false
        },
        {
          priceId: 1,
          content: '￥501~1000',
          value: '501~1000',
          selected: false
        },
        {
          priceId: 2,
          content: '￥1001~1500',
          value: '1001~1500',
          selected: false
        },
        {
          priceId: 3,
          content: '￥1501~2000',
          value: '1501~2000',
          selected: false
        },
        {
          priceId: 4,
          content: '￥2001~2500',
          value: '2001~2500',
          selected: false
        },
        {
          priceId: 5,
          content: '￥2501~3000',
          value: '2501~3000',
          selected: false
        },
        {
          priceId: 6,
          content: '￥3000以上',
          value: '3000~',
          selected: false
        },
      ];
      let point = [
        {
          pointId: 0,
          content: '25点以下',
          value: '0~25',
          selected: false
        },
        {
          pointId: 1,
          content: '26~70点',
          value: '26~70',
          selected: false
        },
        {
          pointId: 2,
          content: '71~100点',
          value: '71~100',
          selected: false
        },
        {
          pointId: 3,
          content: '101~200点',
          value: '101~200',
          selected: false
        },
        {
          pointId: 4,
          content: '201~300点',
          value: '201~300',
          selected: false
        },
        {
          pointId: 5,
          content: '300点以上',
          value: '300~',
          selected: false
        },
      ];
      let cases = [
        {
          caseId: 0,
          content: '25例以下',
          value: '0~25',
          selected: false
        },
        {
          caseId: 1,
          content: '26~70例',
          value: '26~70',
          selected: false
        },
        {
          caseId: 2,
          content: '71~100例',
          value: '71~100',
          selected: false
        },
        {
          caseId: 3,
          content: '101~200例',
          value: '101~200',
          selected: false
        },
        {
          caseId: 4,
          content: '201~300例',
          value: '201~300',
          selected: false
        },
        {
          caseId: 5,
          content: '300例以上',
          value: '300~',
          selected: false
        },
      ];

      let share = null;
      let arrayTyping = null;
      let categoryId = null;
      let query = "";
      if (context.route.query.share) {
        let ui = context.route.query.share
        try {
          share = JSON.parse(decodeURI(ui));
          _this.query = share.query

          let price_tmp = {}
          share.prices.forEach(d => {
            price_tmp[d.from + "~" + d.to] = true
          })
          let point_tmp = {}
          share.points.forEach(d => {
            point_tmp[d.from + "~" + d.to] = true
          })
          let cases_tmp = {}
          share.cases.forEach(d => {
            cases_tmp[d.from + "~" + d.to] = true
          })

          price.forEach((d) => {
            if (price_tmp[d.value]) {
              _this.$set(d, "selected", true)
            }
          });
          point.forEach((d) => {
            if (point_tmp[d.value]) {
              d.selected = true
            }
          });
          cases.forEach((d) => {
            if (cases_tmp[d.value]) {
              d.selected = true
            }
          });

          arrayTyping = share.arrayTyping
          categoryId = share.categoryId
        } catch (err) {
          console.log(err)
        }
      }

      //获取芯片列表
      //this.getTissueChipList(share);

      let[res1,res2] = await Promise.all([
        context.app.api.querySampleMethodsList({}),
        context.app.api.queryTissueOrganList({type: 1})
      ])

      let arrayTypingList = [];
      let tissueOrganList = [];
      if (res1.code == 0) {
        let data = res1.data;
        let dataTransfrom = [];
        data.forEach((d) => {
          let obj = {};
          obj.name = d;
          if (arrayTyping && arrayTyping.indexOf(d) > -1) {
            obj.selected = true;
          } else {
            obj.selected = false;
          }
          dataTransfrom.push(obj);
        });
        let c = ["一例多点", "一例九点", "一例八点", "一例七点", "一例六点", "一例五点", "一例四点", "一例三点", "一例二点", "一例两点", "一例一点"]
        arrayTypingList = dataTransfrom.sort((a, b) => c.indexOf(b.name.substr(0, 4)) - c.indexOf(a.name.substr(0, 4)));
      }

      if (res2.code == 0) {
        let data = res2.category;
        data.forEach((d) => {
          if (categoryId && categoryId.indexOf(d.id) > -1) {
            d.selected = true;
          } else {
            d.selected = false;
          }

        });

        tissueOrganList = data;
      }

      let params = {}
      if (share) {
        params = share
      } else {
        let arrayTypingArr = []
        let tissueOrganArr = []
        let selected_prices = []
        let selected_points = []
        let selected_cases = [];
        let page = {
          page: 1,
          limit: 20,
          sidx: "", //
          order: "DESC",
          total: 0,
        };

        if(typeof(context.route.query.selected) == "undefined") {
          price.forEach((d) => {
            if (d.selected) {
              let values = d.value.split('~');
              selected_prices.push({from: values[0], to: values[1]})
            }
          });
          point.forEach((d) => {
            if (d.selected) {
              let values = d.value.split('~');
              selected_points.push({from: values[0], to: values[1]})
            }
          });
          cases.forEach((d) => {
            if (d.selected) {
              let values = d.value.split('~')
              selected_cases.push({from: values[0], to: values[1]})
            }
          });

          arrayTypingList.forEach((d) => {
            if (d.selected) {
              arrayTypingArr.push(d.name);
            }
          });

          tissueOrganList.forEach((d) => {
            if (d.selected) {
              tissueOrganArr.push(d.id);
            }
          });
          query = "";
        }else{
          let selectedList = JSON.parse(context.route.query.selected);
          selectedList.price.forEach((d) => {
            if (d.selected) {
              let values = d.value.split('~');
              selected_prices.push({from: values[0], to: values[1]})
            }
          });
          selectedList.point.forEach((d) => {
            if (d.selected) {
              let values = d.value.split('~');
              selected_points.push({from: values[0], to: values[1]})
            }
          });
          selectedList.cases.forEach((d) => {
            if (d.selected) {
              let values = d.value.split('~')
              selected_cases.push({from: values[0], to: values[1]})
            }
          });

          selectedList.categoryId.forEach((d) => {
            if (d.selected) {
              arrayTypingArr.push(d.name);
            }
          });

          selectedList.arrayTyping.forEach((d) => {
            if (d.selected) {
              tissueOrganArr.push(d.id);
            }
          });
          page = selectedList.page;
          query = selectedList.query;
        }

        //_this.loading = true;

        params = {
          page: page,
          prices: selected_prices,
          points: selected_points,
          cases: selected_cases,
          categoryId: tissueOrganArr,
          arrayTyping: arrayTypingArr,
          query: query
        };
      }
      let newPage = {};


      let organList = await context.app.api.searchTissueOrganList(params).then(res => {
        //_this.loading = false;
        if (res.code == 0) {
          return res;
        }
      });

      params.page.total = organList.page.recordCount;
      params.page.page = organList.page.currentPage
      newPage = params.page

      return{
        arrayTypingList: arrayTypingList,
        tissueOrganList: tissueOrganList,
        share: share,
        data: organList.page.recordList,
        page: newPage,
        price: price,
        point: point,
        cases: cases,
        searchContent: query,
        loading: false
      }
    },
    data() {
      return {
        shareLink: "",
        shareImgLink: "",
        arrayTypingList: [],
        tissueOrganList: [],
        price: [
          {
            priceId: 0,
            content: '￥500以下',
            value: '0~500',
            selected: false
          },
          {
            priceId: 1,
            content: '￥501~1000',
            value: '501~1000',
            selected: false
          },
          {
            priceId: 2,
            content: '￥1001~1500',
            value: '1001~1500',
            selected: false
          },
          {
            priceId: 3,
            content: '￥1501~2000',
            value: '1501~2000',
            selected: false
          },
          {
            priceId: 4,
            content: '￥2001~2500',
            value: '2001~2500',
            selected: false
          },
          {
            priceId: 5,
            content: '￥2501~3000',
            value: '2501~3000',
            selected: false
          },
          {
            priceId: 6,
            content: '￥3000以上',
            value: '3000~',
            selected: false
          },
        ],
        point: [
          {
            pointId: 0,
            content: '25点以下',
            value: '0~25',
            selected: false
          },
          {
            pointId: 1,
            content: '26~70点',
            value: '26~70',
            selected: false
          },
          {
            pointId: 2,
            content: '71~100点',
            value: '71~100',
            selected: false
          },
          {
            pointId: 3,
            content: '101~200点',
            value: '101~200',
            selected: false
          },
          {
            pointId: 4,
            content: '201~300点',
            value: '201~300',
            selected: false
          },
          {
            pointId: 5,
            content: '300点以上',
            value: '300~',
            selected: false
          },
        ],
        cases: [
          {
            caseId: 0,
            content: '25例以下',
            value: '0~25',
            selected: false
          },
          {
            caseId: 1,
            content: '26~70例',
            value: '26~70',
            selected: false
          },
          {
            caseId: 2,
            content: '71~100例',
            value: '71~100',
            selected: false
          },
          {
            caseId: 3,
            content: '101~200例',
            value: '101~200',
            selected: false
          },
          {
            caseId: 4,
            content: '201~300例',
            value: '201~300',
            selected: false
          },
          {
            caseId: 5,
            content: '300例以上',
            value: '300~',
            selected: false
          },
        ],
        searchContent: '',//搜索的字段值
        loading: true,
        imagesUrl: config.baseImagePath,
        columns: [
          {
            title: '芯片',
            key: 'img_id',
            align: 'center',
            sortable: true,
            minWidth: 100,
            render: (h, params) => {
              return h('Poptip', {
                    props: {
                      placement: "right-end",
                      width: "200",
                      trigger: "hover",
                      confirm: false,
                    }
                  }, [
                    h('img', {
                      attrs: {
                        src: this.imagesUrl + '/' + params.row.img_id
                      },
                      style: {
                        'cursor': 'pointer',
                        'height': '60px'
                      },
                      on: {
                        click: () => {
                          let routeUrl = this.$router.resolve({
                            path: "/tissueBigChipShow/" + params.row.img_id,
                          });
                          window.open(routeUrl.href, '_blank');
                        }
                      }
                    }),
                    h('span', {
                      slot: 'content',
                      style: {
                        whiteSpace: 'normal'
                      },
                      domProps: {
                        innerHTML: "<img src='" + this.imagesUrl + '/' + params.row.img_id + "' style='width:100%'>"
                      },
                    })]
              )
            }
          },
          {
            title: '编号',
            key: 'chip_id',
            align: 'center',
            sortable: true,
            minWidth: 100,
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    color: '#2d8cf0',
                    cursor: 'pointer'
                  },
                  on: {
                    click: () => {
                      this.$router.push({path: '/tissueChip/' + params.row.id});
                     // window.open(routeUrl.href, '_blank');
                    }
                  },
                  domProps: {
                    innerHTML: params.row.chip_id
                  }
                }),
              ]);
            }
          },
          {
            title: '芯片名称',
            key: 'chip_explanation',
            align: 'center',
            sortable: true,
            minWidth: 350,
            render: (h, params) => {
              return h('Poptip', {
                    props: {
                      placement: "right-end",
                      width: "300",
                      trigger: "hover",
                      confirm: false,
                    },
                    style: {
                      "width": '100%',
                      "padding": '0 3px 0 3px',
                      "text-align": 'left',
                    },
                  }, [
                    h('div', {
                      style: {
                        cursor: 'pointer'
                      },
                      on: {
                        click: () => {
                          let routeUrl = this.$router.resolve({path: '/tissueChipDetail/' + params.row.id + '/0'});
                          window.open(routeUrl.href, '_blank');
                        }
                      },
                      domProps: {
                        innerHTML: params.row.chip_explanation
                      }
                    }),
                    h('span', {
                      slot: 'content',
                      style: {
                        whiteSpace: 'normal'
                      },
                      domProps: {
                        innerHTML: params.row.sample_description
                      },
                    })]
              )
            }
          },
          {
            title: '点样直径',
            key: 'dot_diameter',
            align: 'center',
            sortable: true,
            minWidth: 87,
          },
          {
            title: '点数',
            key: 'points',
            align: 'center',
            sortable: true,
            minWidth: 69,
          },
          {
            title: '例数',
            key: 'cases_number',
            align: 'center',
            sortable: true,
            minWidth: 69,
          },
          {
            title: '价格 (￥)',
            align: 'center',
            children: [
              {
                title: '芯片',
                key: 'test_price',
                align: 'center',
                sortable: true,
                minWidth: 80,
                render: (h, params) => {
                  let price = params.row.test_inventory;
                  let color = '';

                  if (price == 0) {
                    color = 'red';
                  } else if (price > 0 && price <= 5) {
                    color = 'orange'
                  } else if (price > 5) {
                    color = 'green';
                  }
                  return h('div', [
                    h('Button', {
                      props: {
                        size: "small"
                      },
                      style: {
                        color: color,
                        fontSize: "10px"
                      },
                      on: {
                        "click": () => {
                          this.$router.push({
                            name: 'contactUs',
                            params: {
                              title: "芯片询价：" + params.row["chip_id"],
                              content: "芯片名称：<<" + params.row["chip_explanation"] + ">>"
                            }
                          });
                        }
                      }
                    }, "询价"),
                  ]);
                }
              },
              {
                title: '芯片实验',
                align: 'center',
                sortable: false,
                minWidth: 60,
                render: (h, params) => {
                  return h('div', [
                    h('a', {
                      style: {
                        'color': '#007bff',
                        'text-decoration': 'underline'
                      },
                      on: {
                        click: () => {
                          this.$router.push({
                            name: 'contactUs',
                            params: {
                              title: "芯片实验询价：" + params.row["chip_id"],
                              content: "芯片名称：<<" + params.row["chip_explanation"] + ">>"
                            }
                          });
                        }
                      }
                    }, '询价'),
                  ]);
                }
              }
            ]
          },
        ],
        //data: [],
        page: {
          page: 1,
          limit: 20,
          sidx: "", //
          order: "DESC",
          total: 0,
        },
        heightStyle: {},
        share: '',
        selectedParams: {}
      }
    },
    methods: {
      copyLink: function () {
        /*let _this = this
        _this.Clipboard.copy(_this.shareLink, () => {
          _this.$Message.success("分享链接拷贝成功"), () => {
            _this.$Message.warning("分享链接拷贝失败")
          }
        })*/
        //https://www.jianshu.com/p/cdbd87541b30 同源下载or不同源下载
        let oQrcode = document.querySelectorAll('#barCodeImg')
        let url = oQrcode[0].src;

        //不同源下载
        this.downloadImage(url);

        //同源下载
        /*let link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.setAttribute('download', 'code.png');
        document.body.appendChild(link);
        link.click();*/
      },
      downloadImage(imgsrc) {//下载图片地址和图片名
        let image = new Image();
        // 解决跨域 Canvas 污染问题
        image.setAttribute("crossOrigin", "anonymous");
        image.onload = function() {
          let canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          let context = canvas.getContext("2d");
          context.drawImage(image, 0, 0, image.width, image.height);
          let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据

          let a = document.createElement("a"); // 生成一个a元素
          let event = new MouseEvent("click"); // 创建一个单击事件
          a.download = "code"; // 设置图片名称
          a.href = url; // 将生成的URL设置为a.href属性
          a.dispatchEvent(event); // 触发a的单击事件
        };
        image.src = imgsrc;
      },
      changeShareImgLink: function () {
        let _this = this
        _this.shareImgLink = ""
        let arrayTypingArr = []
        let tissueOrganArr = []
        let selected_prices = []
        let selected_points = []
        let selected_cases = []

        _this.price.forEach((d) => {
          if (d.selected) {
            let values = d.value.split('~');
            selected_prices.push({from: values[0], to: values[1]})
          }
        });
        _this.point.forEach((d) => {
          if (d.selected) {
            let values = d.value.split('~');
            selected_points.push({from: values[0], to: values[1]})
          }
        });
        _this.cases.forEach((d) => {
          if (d.selected) {
            let values = d.value.split('~')
            selected_cases.push({from: values[0], to: values[1]})
          }
        });

        _this.arrayTypingList.forEach((d) => {
          if (d.selected) {
            arrayTypingArr.push(d.name);
          }
        });

        _this.tissueOrganList.forEach((d) => {
          if (d.selected) {
            tissueOrganArr.push(d.id);
          }
        });


        let params = {
          page: _this.page,
          prices: selected_prices,
          points: selected_points,
          cases: selected_cases,
          categoryId: tissueOrganArr,
          arrayTyping: arrayTypingArr,
          query: _this.searchContent
        };
        _this.shareLink = "http://www.bioaitech.com/bioaitech/tissueChip?share=" + encodeURI(JSON.stringify(params));
        _this.shareImgLink = config.shareLinkImage + "http://www.bioaitech.com/bioaitech/tissueChip?share=" + encodeURI(JSON.stringify(params))
      },
      getArrayTypingList(arrayTyping) {
        let _this = this;
        return querySampleMethodsList().then(res => {
          if (res.code == 0) {
            let data = res.data;
            let dataTransfrom = [];
            data.forEach((d) => {
              let obj = {};
              obj.name = d;
              if (arrayTyping && arrayTyping.indexOf(d) > -1) {
                obj.selected = true;
              } else {
                obj.selected = false;
              }
              dataTransfrom.push(obj);
            });
            let c = ["一例多点", "一例九点", "一例八点", "一例七点", "一例六点", "一例五点", "一例四点", "一例三点", "一例二点", "一例两点", "一例一点"]
            _this.arrayTypingList = dataTransfrom.sort((a, b) => c.indexOf(b.name.substr(0, 4)) - c.indexOf(a.name.substr(0, 4)));
          }
        });
      },
      getTissueOrganList(categoryId) {
        let _this = this;
        return queryTissueOrganList({
          type: 1
        }).then(res => {
          if (res.code == 0) {
            let data = res.category;
            data.forEach((d) => {
              if (categoryId && categoryId.indexOf(d.id) > -1) {
                d.selected = true;
              } else {
                d.selected = false;
              }

            });

            _this.tissueOrganList = data;
          }
        });
      },
      //选择过滤项
      conditionalSearch(data) {
        data.selected = !data.selected;
        this.page.page = 1;
        this.getTissueChipList();
      },
      //搜索
      searchTissueChipList() {
        this.page.page = 1;
        this.page.sidx = ""
        this.getTissueChipList();
      },
      changeSort(col) {
        this.page.sidx = col.key
        this.page.order = col.order
        this.getTissueChipList()
      },

      //表格分页---返回改变后的页码
      changePage(v) {
        this.page.page = v;
        this.getTissueChipList();
      },
      //返回切换后的每页条数
      changePageSize(v) {
        this.page.limit = v;
        this.getTissueChipList();
      },
      getTissueChipList(share) {
        let _this = this;
        let params = {}
        if (share) {
          params = share
        } else {
          if(Object.keys(this.selectedParams).length == 0) {
            params = {
              page: _this.page,
              price: _this.price,
              point: _this.point,
              cases: _this.cases,
              categoryId:  _this.arrayTypingList,
              arrayTyping: _this.tissueOrganList,
              query: _this.searchContent
            };
          }else{
            params = {
              page: _this.page,
              price: _this.selectedParams.price,
              point: _this.selectedParams.point,
              cases: _this.selectedParams.cases,
              categoryId:  _this.selectedParams.categoryId,
              arrayTyping: _this.selectedParams.arrayTyping,
              query: _this.searchContent
            };
          }
        }

        /*this.$router.push({
          path: '/tissueChip',
          query: {
            selected: JSON.stringify(params),
          }
        })*/
        this.$router.replace({
          path: '/empty',
          query: {
            selected: JSON.stringify(params),
            type: "tissueChip"
          }
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

      //计算手机端的高度
      this.calcWindowWidth();

      if(typeof(this.$route.query.selected) != "undefined") {
        this.selectedParams = JSON.parse(this.$route.query.selected);
      }
    }
  }
</script>
