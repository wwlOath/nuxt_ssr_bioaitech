<template>
  <div>
    <!--Header-->
    <CommonHeader/>

    <div class="content-style-top" :style="heightStyle">
      <div class="repeat-chip-container">

        <div class="container">
          <Row>
            <p>当前芯片：<b color='blue'>{{chipName}}</b></p>
          </Row>
          <Row :gutter="16">
            <Col span="12">
              <Select v-model="currentRepeatId">
                <Option v-for="item in repeatChipData" :value="item.id" :key="item.id">{{ item.chipId }} {{item.chipExplanation}}</Option>
              </Select>
            </Col>
            <Col span="12">
              <Button type="primary" @click="compareRepeatChipSubmit">
                <Icon type="md-done-all"/>
                提交
              </Button>
              <Button type="primary" @click="goBackTo">
                <Icon type="md-undo"/>
                返回
              </Button>
            </Col>
          </Row>

          <br>
          <div>
            <div v-if="overlapLength > 0">
              <p><b>{{chipName}}</b>与<b>{{rechipName}}</b>比较结果:</p>
              <p><b>{{chipName}}</b>共{{chipLength}}例，其中<b>{{overlapLength}}</b>例与<b>{{rechipName}}</b>相同。</p>

              <div v-if="repeatDataList.length > 1">
                <table id="tb" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>{{chipName}}</th>
                    <th>{{rechipName}}</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="it in repeatDataList">
                    <td>{{it[0]}}</td>
                    <td>{{it[1]}}</td>
                  </tr>

                  </tbody>
                </table>
              </div>
            </div>
            <div v-else-if="isSubmit">
              <p><b>{{chipName}}</b>与<b>{{rechipName}}</b>对比阵列不存在重复病例！</p>
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
  .content-style-top {
    padding-top: 60px;
  }

  .repeat-chip-container {
    padding: 30px 0;
    min-height: 700px;

    .ivu-select-dropdown {
      ul {
        margin-bottom: 0;
      }
    }
  }
</style>

<script>

  export default {
    name: '',
    async asyncData(context) {
      let result = await context.app.api.queryRepeatChipList({tissueChipId: context.route.params.id}).then(res => {
        if(res.code == 0) {
          return res;
        }
      });

      let repeatChipData = result.list;
      repeatChipData = repeatChipData.sort((a,b) => {
        let value1 = a['chipId'];
        let value2 = b['chipId'];
        if (value1 < value2) {
          return -1;
        } else if (value1 > value2) {
          return 1;
        } else {
          return 0;
        }
      });
      let currentRepeatId = result.list[0]['id'];

      let compare = await context.app.api.compareRepeatChipList({
        id: context.route.params.id,
        reId: currentRepeatId
      }).then(res => {
        if (res.code == 0) {
          return res;
        }else {
          return null;
        }
      });

      if(compare == null) {
        return {
          repeatChipData: repeatChipData,
          currentRepeatId: currentRepeatId
        }
      }else{
        return {
          repeatChipData: repeatChipData,
          currentRepeatId: currentRepeatId,
          overlapLength: compare.overlapLength,
          reChipLength: compare.reChipLength,
          rechipName: compare.reChipId,
          chipName: compare.chipId,
          repeatDataList: compare.list,
          chipLength: compare.chipLength,
          isSubmit: true
        }
      }
    },
    data() {
      return {
        id: '',
        chipName: '',
        rechipName: '',
        repeatChipData: [],
        currentRepeatId: '',
        repeatDataList: [],
        resulteData: [],
        chipLength: 0,
        reChipLength: 0,
        overlapLength: 0,
        heightStyle: {},
        isSubmit: false
      }
    },
    methods: {
      init() {
        this.id = this.$route.params.id;
        this.chipName = this.$route.params.chipName;
      },
/*      getRepeatChipList() {
        queryRepeatChipList({
          tissueChipId: this.id
        }).then(res => {
          if (res.code == 0) {
            this.repeatChipData = res.list;
            this.repeatChipData = this.repeatChipData.sort(this.compare('chipId'));
            this.currentRepeatId = this.repeatChipData[0]['id'];
          }
        });
      },
      compare(data) {
        return function (a, b) {
          let value1 = a[data];
          let value2 = b[data];
          if (value1 < value2) {
            return -1;
          } else if (value1 > value2) {
            return 1;
          } else {
            return 0;
          }
        }
      },*/
      //确认提交
      compareRepeatChipSubmit() {
        let _this = this;

        this.$api.compareRepeatChipList({
          id: _this.id,
          reId: _this.currentRepeatId
        }).then(res => {
          if (res.code == 0) {
            _this.overlapLength = res.overlapLength
            _this.reChipLength = res.reChipLength;
            _this.rechipName = res.reChipId;
            _this.chipName = res.chipId;
            _this.repeatDataList = res.list;
            _this.chipLength = res.chipLength;
            _this.isSubmit = true;
          }
        });
      },
      //返回上一页
      goBackTo() {
        this.$router.go(-1);
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
      this.init();
      //this.getRepeatChipList();
      //计算手机端的高度
      this.calcWindowWidth();
    }
  }

</script>
