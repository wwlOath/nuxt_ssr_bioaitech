<template>
  <div>
    <!--Header-->
    <CommonHeader/>

    <div :style="heightStyle">
      <div class="container" style="min-height:100vh;">
        <div style="margin-top:100px;">
          <div class="text-center">
            <h5>基础科研服务</h5>
          </div>
          <hr>
          <div style="margin:auto">
            <div class="item">
              <p><b>(1) 高通量测序：</b></p>
              <p>第二代测序技术凭借高通量和较高的准确率，成为目前主流的基因测序技术。</p>
              <p><b>产品优势：</b></p>
              <ul style="list-style: circle;margin-left:30px">
                <li>专注单细胞、转录和表观领域，有丰富的项目经验</li>
                <li>分析内容更灵活（轻量化、定制化），较好的性价比</li>
                <li>分析服务更主动，沟通效率更高</li>
              </ul>
            </div>
            <div class="item">
              <p><b>(2) 生物信息CRO</b></p>
              <div>
                <div class="ivu-table-wrapper ivu-table-wrapper-with-border">
                  <div class="ivu-table ivu-table-default ivu-table-border">
                    <div class="ivu-table-body">
                      <table style="width:100%">
                        <thead>
                        <tr class="ivu-table-header">
                          <th rowspan="1" colspan="1" class="text-center">
                            <div class="ivu-table-cell">
                              产品名称
                            </div>
                          </th>
                          <th rowspan="1" colspan="4" class="text-center">
                            <div class="ivu-table-cell">
                              生物信息CRO
                            </div>
                          </th>
                        </tr>
                        </thead>
                        <tbody class="ivu-table-tbody">
                          <tr>
                            <td rowspan="1" colspan="1" class="text-center">
                              <div class="ivu-table-cell">
                                目标客户
                              </div>
                            </td>
                            <td rowspan="1" colspan="4">
                              <div class="ivu-table-cell">
                                有数据分析/科研需求的临床医生、研究所和高校老师、药企科研人员等
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              <div class="ivu-table-cell">类型</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">子产品</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">产品内容</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">客户细分/特点</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">斑斓平台</div>
                            </td>
                          </tr>
                          <tr>
                            <td rowspan="2" class="text-center">
                              <div class="ivu-table-cell">项目外包</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">客户主导型科研</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">基础科研服务</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">经费少、科研思路明确或有自主科研能力</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell"><Icon type="md-checkmark" /></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="ivu-table-cell">万康源主导型科研</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">大PI科研服务</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">经费多或无较强科研能力</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell"><Icon type="md-checkmark" /></div>
                            </td>
                          </tr>

                          <tr>
                            <td rowspan="2" class="text-center">
                              <div class="ivu-table-cell">技术外包</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">平台、网页开发</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">门户网站、搜索查询网站、宣传网站等</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">大科室/中心，大课题组</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell"></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="ivu-table-cell">数据库开发</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">稀有数据存储和管理库、分析结果的查询数据库等</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">大科室/中心，大课题组</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell"></div>
                            </td>
                          </tr>

                          <tr>
                            <td rowspan="2" class="text-center">
                              <div class="ivu-table-cell">人员外包</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">技术咨询/支持</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">方案设计、数据分析、报告解读、作图等</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">经科研人员/CRO/药厂</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell"><Icon type="md-checkmark" /></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="ivu-table-cell">技术人员外包</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">数据分析范畴</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell">有不足的生物/生信成员的课题组/科研人员</div>
                            </td>
                            <td>
                              <div class="ivu-table-cell"><Icon type="md-checkmark" /></div>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="text-center">
            <img src="@/assets/img/service/service-7.png" class="service-page-little-img">
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
    margin-bottom: 10px;
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
