<template>
  <div class="organization-container">
    <!--Header-->
    <CommonHeader/>

    <div class="content-style-top" :style="heightStyle">
      <div class="container">
        <div class="content">
          <div class="chilp-list">
            <table class="table table-bordered">
              <tbody>
              <tr>
                <td>组织器官:</td>
                <td>
                  <div v-if="Object.keys(selectedParams).length == 0">
                    <ul>
                      <li v-for="(item,index) in origanizationOrgonList" :id="item.id" @click="conditionalSearch(item)" :class="item.selected ? 'currentActive': ''">{{item.name}} ({{item.count}})</li>
                    </ul>
                  </div>
                  <div v-else>
                    <ul>
                      <li v-for="(item,index) in selectedParams.tissueOrgans" :id="item.id" @click="conditionalSearch(item)" :class="item.selected ? 'currentActive': ''">{{item.name}} ({{item.count}})</li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>组织类型:</td>
                <td>
                  <div v-if="Object.keys(selectedParams).length == 0">
                    <ul>
                      <li v-for="(key,index) in origanizationTypeList" :id="key.id" @click="conditionalSearch(key)" :class="key.selected ? 'currentActive': ''">{{key.name}} ({{key.count}})</li>
                    </ul>
                  </div>
                  <div v-else>
                    <ul>
                      <li v-for="(key,index) in selectedParams.categoryId" :id="key.id" @click="conditionalSearch(key)" :class="key.selected ? 'currentActive': ''">{{key.name}} ({{key.count}})</li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>规格:</td>
                <td>
                  <div v-if="Object.keys(selectedParams).length == 0">
                    <ul>
                      <li v-for="(key,index) in specificationList" :id="key.id" @click="conditionalSearch(key)" :class="key.selected ? 'currentActive': ''">{{key.name}}</li>
                    </ul>
                  </div>
                  <div v-else>
                    <ul>
                      <li v-for="(key,index) in selectedParams.specification" :id="key.id" @click="conditionalSearch(key)" :class="key.selected ? 'currentActive': ''">{{key.name}}</li>
                    </ul>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="table-content">
          <Row style="margin-bottom: 2vh" :gutter="12">
            <Col :xs="24" :sm="12" :md="12" :lg="12">
              <Input search enter-button placeholder="Search" v-model="searchContent" @on-search="searchTissueChipList"/>
            </Col>
            <Col :xs="24" :sm="12" :md="12" :lg="12">
              <!-- <Button type="primary" @click="clearAllChoice">清除选择</Button> -->
            </Col>
          </Row>
          <Row class="project-list-table">
            <Table :loading="loading" border :columns="columns" :data="data" ref="table" @on-sort-change="changeSort"></Table>
          </Row>
          <Row type="flex" justify="end" style="margin-top: 2vh">
            <Page :current="page.page" :total="page.total" :page-size="page.limit" @on-change="changePage" @on-page-size-change="changePageSize" :page-size-opts="[20,50,80,150]" size="small" show-total show-sizer></Page>
          </Row>
        </div>
      </div>
    </div>

    <!--Footer-->
    <CommonFooter/>
  </div>
</template>

<style lang="less">
  .organization-container {
    .content-style-top {
      padding-top: 50px;
    }
    .content {
      padding: 40px 0px 20px;
      .title {
        padding: 10px;
        background: #4aa6fc;
        color: #fff;
        border-radius: 4px 4px 0 0;
        font-size: 14px;
      }

      .chilp-list {
        .table {
          tr{
            td:nth-child(1){
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
      padding: 0 0 60px;
      .ivu-table-cell {
        padding: 5px;
      }
      .ivu-row {
        padding: 5px 0;
        .item {
          padding-left: 10px;
        }
        .red-tag {
          width: 13px;
          height: 13px;
          background: #ed4014;
          display: inline-block;
        }

        .orange-tag {
          width: 13px;
          height: 13px;
          background: #f90;
          display: inline-block;
        }

        .green-tag {
          width: 13px;
          height: 13px;
          background: #19be6b;
          display: inline-block;
        }
      }
    }
    .ivu-table table {
      width: 100%;
    }
  }
</style>

<script>

  export default {
    name: 'organization-library',
    async asyncData(context) {
      let [res1, res2] = await Promise.all([
        context.app.api.queryTissueOrganList({type: 2}),
        context.app.api.queryOrganizationOrganList({type: 2})
      ]);
      let origanizationTypeList = [];
      let origanizationOrgonList = [];
      let specificationList = [
        {
          name: '块'
        },
        {
          name: '切片'
        }
      ];
      let page = {
        page: 1,
        limit: 20,
        sidx: "sectionId", //
        order: "DESC",
        total: 0,
      };
      let query = "";

      //组织类型
      if(res1.code == 0){
        let data = res1.category;
        data.forEach((d)=> {
          d.selected = false;
        });
        origanizationTypeList = data;
      }

      //组织器官
      if(res2.code == 0){
        let data = res2.tissue;
        data.forEach((d)=> {
          d.selected = false;
        });

        origanizationOrgonList = data;
      }

      //芯片列表
      let organs = [];
      let types = [];
      let specification = [];

      if(typeof(context.route.query.selected) == "undefined") {
        //组织类型
        origanizationTypeList.forEach((d) => {
          if (d.selected) {
            types.push(d.id);
          }
        });

        //组织器官
        origanizationOrgonList.forEach((d) => {
          if (d.selected) {
            organs.push(d.name);
          }
        });

        //规格
        specificationList.forEach((d) => {
          if (d.selected) {
            specification.push(d.name);
          }
        });
        query = "";
      }else{
        let selectedList = JSON.parse(context.route.query.selected);
        //组织类型
        selectedList.categoryId.forEach((d) => {
          if (d.selected) {
            types.push(d.id);
          }
        });

        //组织器官
        selectedList.tissueOrgans.forEach((d) => {
          if (d.selected) {
            organs.push(d.name);
          }
        });

        //规格
        selectedList.specification.forEach((d) => {
          if (d.selected) {
            specification.push(d.name);
          }
        });

        page = selectedList.page;
        query = selectedList.query;
      }
      //_this.loading = true;

      let params = {
        page: page,
        categoryId: types,
        tissueOrgans: organs,
        specification: specification,
        query: query
      };
      console.log(params)

      let organization = await context.app.api.searchOrganizationList(params).then(res => {
        console.log(res)
        //_this.loading = false;
        if(res.code == 0){
          return res;
        }
      });
      //console.log(organization)
      page.total = organization.page.totalCount;

      return {
        origanizationTypeList: origanizationTypeList,
        origanizationOrgonList: origanizationOrgonList,
        data: organization.page.list,
        page: page,
        searchContent: query,
        specificationList: specificationList,
        loading: false
      }
    },
    data() {
      return {
        searchContent: '',//搜索的字段值
        loading: true,
        columns: [
          {
            title: '编号',
            key: 'sectionId',
            align: 'center',
            sortable: true,
          },
          {
            title: '组织器官',
            key: 'tissuesOrgans',
            align: 'center',
            sortable: true,
          },
          {
            title: '病理诊断',
            key: 'pathologicDiagnosis',
            align: 'center',
            sortable: true,
            render: (h,params) => {
              let pathologicDiagnosis = params.row.pathologicDiagnosis == null ? '无' : params.row.pathologicDiagnosis;
              return h('div', pathologicDiagnosis);
            }
          },
          {
            title: '组织类型',
            key: 'category',
            align: 'center',
            sortable: true,
          },
          {
            title: '规格',
            key: 'specification',
            align: 'center',
            sortable: true,
          },
          {
            title: '购买',
            key: 'action',
            align: 'center',
            sortable: false,
            render: (h,params) => {
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
                          title: "组织询价：" + params.row.tissuesOrgans + "(" + params.row.specification + "/" + params.row.category + ")",
                        }
                      });
                    }
                  }
                }, '询价'),
              ]);
            }
          },
        ],
        data: [],
        page: {
          page: 1,
          limit: 10,
          sidx: "sectionId", //
          order: "DESC",
          total: 0,
        },

        pageNumber: 1, // 当前页数
        pageSize: 20, // 页面大小
        total: 0, // 表单数据总数
        heightStyle: {
          minHeight: "100vh"
        },
        selectedParams: {}
      }
    },
    methods: {
      getOrganizationTypeList(context) {
        this.$api.queryTissueOrganList({
          type: 2
        }).then(res => {
          if(res.code == 0){
            let data = res.category;

            data.forEach((d)=> {
              d.selected = false;
            });

            this.origanizationTypeList = data;
          }
        })
      },
      getTissueOrganList() {
        this.$api.queryOrganizationOrganList({
          type: 2
        }).then(res => {
          if(res.code == 0){
            let data = res.tissue;

            data.forEach((d)=> {
              d.selected = false;
            });

            this.origanizationOrgonList = data;
          }
        })
      },
      //选择过滤项
      conditionalSearch(data) {
        data.selected = !data.selected;
        this.page.page = 1;
        this.getOrganizationList();
      },
      //搜索
      searchTissueChipList() {
        this.page.page = 1;
        this.getOrganizationList();
      },
      //表格分页---返回改变后的页码
      changePage(v) {
        this.page.page = v;
        this.getOrganizationList();
      },
      changeSort(col) {
        this.page.sidx = col.key
        this.page.order = col.order
        this.getOrganizationList();
      },
      //返回切换后的每页条数
      changePageSize(v) {
        this.page.limit = v;
        this.getOrganizationList();
      },
      getOrganizationList() {
        let _this = this;

        _this.loading = true;
        let params = {};

        if(Object.keys(_this.selectedParams).length == 0) {
          params = {
            page: _this.page,
            categoryId: _this.origanizationTypeList,
            tissueOrgans: _this.origanizationOrgonList,
            specification: _this.specificationList,
            query: _this.searchContent
          };
        }else{
          params = {
            page: _this.page,
            categoryId: _this.selectedParams.categoryId,
            tissueOrgans: _this.selectedParams.tissueOrgans,
            specification: _this.selectedParams.specification,
            query: _this.searchContent
          };
        }

        this.$router.replace({
          path: '/empty',
          query: {
            selected: JSON.stringify(params),
            type: "organization"
          }
        })
      },
      calcWindowWidth() {
        if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
          this.heightStyle = {
            'min-height': window.innerHeight+'px'
          }
        } else {
          this.heightStyle = {minHeight: "100vh"};
        }
      }
    },
    mounted() {
      if(typeof(this.$route.query.selected) != "undefined") {
        this.selectedParams = JSON.parse(this.$route.query.selected);
      }

      //计算手机端的高度
      this.calcWindowWidth();
    }
  }
</script>
