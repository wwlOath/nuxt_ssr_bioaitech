<template>
  <div class="layout">
    <div>
      <Header>
        <Row>
          <Menu mode="horizontal" theme="light" :active-name="activeName" style="width: 100%;display: flex;">
            <Col span="4">
              <div class="layout-logo">
                <img src="../assets/img/logo.png" style="height: 60px">
              </div>
            </Col>
            <Col span="20" style="position: initial;">
              <div>
                <div class="layout-nav my-adjust-menu">
                  <nuxt-link to="/">
                    <MenuItem name="1">
                      首页
                    </MenuItem>
                  </nuxt-link>
                  <nuxt-link to="/tissueChip">
                    <MenuItem name="2">
                      组织芯片订制
                    </MenuItem>
                  </nuxt-link>
                  <nuxt-link to="/organizationLibrary">
                    <MenuItem name="3">
                      组织库
                    </MenuItem>
                  </nuxt-link>
                  <Submenu name="4">
                    <template slot="title">
                      技术服务
                    </template>

                    <nuxt-link to="/service/CustomMadeChip"><MenuItem name="serviceCustomMadeChip">组织芯片定制服务</MenuItem></nuxt-link>
                    <nuxt-link to="/service/immuneTumor"><MenuItem name="serviceImmuneTumor">免疫肿瘤学服务</MenuItem></nuxt-link>
                    <nuxt-link to="/service/digitalScanning"><MenuItem name="serviceDigitalScanning">切片数字化扫描服务</MenuItem></nuxt-link>
                    <nuxt-link to="/service/GeneticTesting"><MenuItem name="serviceGeneticTesting">基因检测服务</MenuItem></nuxt-link>
                    <!--<nuxt-link to="/Immunohistochemistry"><MenuItem name="serviceImmunohistochemistry">形态病理学服务 - 免疫组化</MenuItem></nuxt-link>
                    <nuxt-link to="/HEStaining"><MenuItem name="serviceHEStaining">形态病理学服务 - H&E染色</MenuItem></nuxt-link>-->
                    <nuxt-link to="/service/AI"><MenuItem name="serviceAI">病理AI服务</MenuItem></nuxt-link>
                    <nuxt-link to="/service/completeTechnology"><MenuItem name="serviceCompleteTechnology">实验技术服务</MenuItem></nuxt-link>
                    <nuxt-link to="/service/basicResearch"><MenuItem name="serviceBasicResearch">基础科研服务</MenuItem></nuxt-link>
                    <nuxt-link to="/service/Integrated"><MenuItem name="serviceIntegrated">高端一体化科研服务</MenuItem></nuxt-link>
                    <nuxt-link to="/service/askedQuestions"><MenuItem name="askedQuestions">常见问题解答</MenuItem></nuxt-link>
                  </Submenu>
                  <Submenu name="5" class="submenu-service">
                    <template slot="title">
                      技术资料
                    </template>
                    <Row class="service-dropdown-style">
                      <Col :span="14">
                        <div class="content border-right-style">
                          <h4>参考技术资料</h4>
                          <Row>
                            <Col :span="6"><nuxt-link to="/doc/paraffin_section_suggestion"><MenuItem name="paraffin_section_suggestion"><Icon type="md-link" class="icon-link"/>石蜡切片操作建议</MenuItem></nuxt-link></Col>
                            <Col :span="6"><nuxt-link to="/doc/paraffin_section_remedy"><MenuItem name="paraffin_section_remedy"><Icon type="md-link" class="icon-link"/>石蜡切片问题及补救办法</MenuItem></nuxt-link></Col>
                            <Col :span="6"><nuxt-link to="/doc/frozen_section_experience"><MenuItem name="frozen_section_experience"><Icon type="md-link" class="icon-link"/>冰冻切片制作经验</MenuItem></nuxt-link></Col>
                            <Col :span="6"><nuxt-link to="/doc/ihc_if_difference"><MenuItem name="ihc_if_difference"><Icon type="md-link" class="icon-link"/>免疫组化与免疫荧光的区别</MenuItem></nuxt-link></Col>
                            <Col :span="6"><nuxt-link to="/doc/ihc_notice_and_suggest"><MenuItem name="ihc_notice_and_suggest"><Icon type="md-link" class="icon-link"/>组织芯片免疫组化操作建议</MenuItem></nuxt-link></Col>
                            <Col :span="6"><nuxt-link to="/doc/ihc_solve_native_false_result"><MenuItem name="ihc_solve_native_false_result"><Icon type="md-link" class="icon-link"/>如何解决免疫组化假阴性结果</MenuItem></nuxt-link></Col>
                            <Col :span="6"><nuxt-link to="/doc/masson_experiment_step_and_notice"><MenuItem name="masson_experiment_step_and_notice"><Icon type="md-link" class="icon-link"/>masson染色操作建议</MenuItem></nuxt-link></Col>
                            <Col :span="6"><nuxt-link to="/doc/osteosarcoma_section_experience"><MenuItem name="osteosarcoma_section_experience"><Icon type="md-link" class="icon-link"/>骨肉瘤组织芯片制作技巧</MenuItem></nuxt-link></Col>
                            <Col :span="6"><nuxt-link to="/doc/tissue_microarray"><MenuItem name="tissue_microarray"><Icon type="md-link" class="icon-link"/>组织微阵列的原理及应用</MenuItem></nuxt-link></Col>
                            <Col :span="6"><nuxt-link to="/doc/pathology_ai_experience_and_suggestion"><MenuItem name="pathology_ai_experience_and_suggestion"><Icon type="md-link" class="icon-link"/>病理AI制作组织芯片</MenuItem></nuxt-link></Col>
                            <Col :span="6"><nuxt-link to="/doc/digital_imaging_system_in_pathology"><MenuItem name="digital_imaging_system_in_pathology"><Icon type="md-link" class="icon-link"/>优质组织芯片制作应用</MenuItem></nuxt-link></Col>
                            <Col :span="6"><nuxt-link to="/doc/digital_pathology_platform"><MenuItem name="digital_pathology_platform"><Icon type="md-link" class="icon-link"/>数字化病理平台方案书</MenuItem></nuxt-link></Col>
                            <Col :span="6"><nuxt-link to="/doc/tissue_section_and_bioaitech"><MenuItem name="tissue_section_and_bioaitech"><Icon type="md-link" class="icon-link"/>组织芯片与中科光华</MenuItem></nuxt-link></Col>
                          </Row>
                        </div>
                      </Col>
                      <Col :span="5" class="content border-right-style">
                        <h4>常见问题解答</h4>
                        <nuxt-link to="/service/frequentQuestions"><MenuItem name="faq"><Icon type="md-link" class="icon-link"/>常见问题解答</MenuItem></nuxt-link>
                      </Col>
                      <Col :span="5" class="content">
                        <h4>组织芯片应用参考文献</h4>
                        <nuxt-link to="/contactUs"><MenuItem name="contactUs"><Icon type="md-link" class="icon-link"/>查询参考文献请咨询客服</MenuItem></nuxt-link>
                      </Col>
                    </Row>
                  </Submenu>
                  <nuxt-link to="/contactUs">
                    <MenuItem name="6">
                      联系我们
                    </MenuItem>
                  </nuxt-link>
                 <!-- <MenuItem name="7" v-if="showMenuLogin">
                    <Icon type="md-person" />
                    <nuxt-link to="/Home">登录</nuxt-link>
                  </MenuItem>
                  <MenuItem name="8" v-else>
                    <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                      <Dropdown transfer trigger="hover" @on-click="handleClickUserDropdown">
                        <a href="javascript:void(0)">
                          <span class="main-user-name">{{ userInfoMessage.username }}</span>
                          <Icon type="md-arrow-dropdown"/>
                        </a>
                        <DropdownMenu slot="list">
                          <DropdownItem name="ownSpace"><nuxt-link to="/Home">个人信息</nuxt-link></DropdownItem>
                          &lt;!&ndash;<DropdownItem name="changePass">修改密码</DropdownItem>&ndash;&gt;
                          <DropdownItem name="shoppingCart"><nuxt-link to="/Home">购物车</nuxt-link></DropdownItem>
                          <DropdownItem name="historyOrder"><nuxt-link to="/Home">历史订单</nuxt-link></DropdownItem>
                          <DropdownItem name="addressManager"><nuxt-link to="/Home">地址管理</nuxt-link></DropdownItem>
                          <DropdownItem name="loginout" divided>退出</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Row>
                  </MenuItem>
                  <div class="header-avator-con">
                    <div class="user-dropdown-menu-con">
                    </div>
                  </div>-->
                </div>
              </div>
            </Col>
          </Menu>
        </Row>
      </Header>
    </div>
  </div>
</template>

<script>
  import {mapActions} from "vuex";
  /*import {
    exitLoginInterface,
    queryUserMessage
  } from '@/api/index';*/
  import {getStore} from '@/libs/storage'

  export default {
    name: 'common-header',
    data () {
      return {
        activeName: '',
        userInfoMessage: '',
        showMenuLogin: true,
      }
    },
    methods: {
      ...mapActions("user", ["logout"]),
      handleClickUserDropdown(name) {
        if (name === "loginout") {
          /*exitLoginInterface({
            userId: this.userInfoMessage.userId
          }).then(res => {
            if(res.code == 0){
              this.$Notice.success({
                title: '退出登录成功'
              });
            }
          });*/
          // 退出登录
          this.logout(this);
          // 强制刷新页面 重新加载router
          location.reload();
        }
      },
      getUserMessage() {
        /*queryUserMessage().then(res => {
          if(res.code == 0){
            this.userInfoMessage = res.user;
          }
        });*/
      }
    },
    mounted(){
      let path = this.$route.name;
      if(path == "index"){
        this.activeName = '1';
      }else if(path == 'tissueChip'){
        this.activeName = '2';
      }else if(path == 'organizationLibrary'){
        this.activeName = '3';
      }else if(path.indexOf('service') == 0){
        this.activeName = path;
      }else if(path == 'contactUs'){
        this.activeName = '5';
      }else if(path == 'shoppingCart'){
        this.activeName = '6';
      }else if(path == 'login'){
        this.activeName = '7';
      }else if(path == 'submitOrder'){
        this.activeName = '6';
      }else if(path == 'tissueChipDetail'){
        this.activeName = '2';
      }else if(path == 'repeatChip'){
        this.activeName = '2';
      }

      //获取用户信息
      let userValue = JSON.parse(getStore("userInfo"));
      let token = getStore('Authorization');

      if(userValue != null && token != null && token != ''){
        this.getUserMessage();
        this.showMenuLogin = false
      }else{
        this.showMenuLogin = true;
      }
    }
  }
</script>
<style>

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ivu-layout-header {
    background: #fff;
  }
  .layout{
    /*position: relative;
    border-radius: 4px;
    overflow: hidden;*/
    min-width:1200px;
    margin-bottom: -59px;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  .my-adjust-menu .ivu-menu-item, .my-adjust-menu .ivu-menu-submenu {
    font-size:16px;
    font-weight: 500;
    line-height: 50px;
    margin-top: 12px;
    color:#535349;
    -webkit-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
  }

  .my-adjust-menu .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown {
    min-width: 200px;
  }

  .my-adjust-menu .ivu-menu-item:hover {
    padding-left: 20px;
    color: #4aa6fc;
    -webkit-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
    /* transform: scale(1.15);*/
  }
  .layout-nav{
    float: right;
    padding-right: 10px;
  }

  .submenu-service {
    position: static;
  }

  .ivu-layout-header {
    padding: 0;
    box-shadow: 0 0 4px rgba(0,0,0,.54);
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
    line-height: 50px;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item{
    line-height: 20px;
  }
  .ivu-menu-horizontal{
    height: 64px;
    line-height: 62px;
  }

  .ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
    padding: 0 15px;
  }

  .layout-logo{
    float: left;
    padding-left: 10px;
  }

  .mobile-menu .ivu-menu-item {
    font-size: 13px;
    display: block;
    color: #535349;
    font-weight: 600;
    /*text-transform: uppercase;*/
    line-height: 44px;
    position: relative;
    border-top: 1px solid #eeeeee;
    padding: 0 40px 0 20px;
    width: 80%;
    background-color: #fff
  }

  .main-user-name {
    font-size: 14px;
    display: inline-block;
    width: 100px;
    margin-right: 5px;
    word-break: keep-all;
    white-space: nowrap;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: right;
  }

  .ivu-select-dropdown ul {
    margin-bottom: 0;
    max-height: 300px
  }

  .user-dropdown-innercon {
    float: left;
  }

  /deep/ .ivu-menu-horizontal .ivu-menu-submenu.submenu-service .ivu-select-dropdown {
    width: 100%;
    left: 0;
    right: 0;
  }

  .service-dropdown-style {
    color: #535349;
  }

  .service-dropdown-style .content {
    padding: 15px;
  }

  .service-dropdown-style .content .icon-link {
    transform: rotate(-45deg);
    margin-right: 3px;
    font-size: 16px;
  }

  .service-dropdown-style .border-right-style {
    border-right: 1px solid #ddd;
  }
</style>
