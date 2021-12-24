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
            <Col span="20">
              <div>
                <div class="layout-nav my-adjust-menu">
                  <MenuItem name="1">
                    <nuxt-link to="/Home">首页</nuxt-link>
                  </MenuItem>
                  <MenuItem name="2">
                    <nuxt-link to="/Home">组织芯片订制</nuxt-link>
                  </MenuItem>
                  <MenuItem name="3">
                    <nuxt-link to="/Home">组织库</nuxt-link>
                  </MenuItem>
                  <Submenu name="4">
                    <template slot="title">
                      技术服务
                    </template>

                    <MenuItem name="serviceCustomMadeChip"><nuxt-link to="/Home">组织芯片定制服务</nuxt-link></MenuItem>
                    <MenuItem name="serviceImmuneTumor"><nuxt-link to="/Home">免疫肿瘤学服务</nuxt-link></MenuItem>
                    <MenuItem name="serviceDigitalScanning"><nuxt-link to="/Home">切片数字化扫描服务</nuxt-link></MenuItem>
                    <MenuItem name="serviceGeneticTesting"><nuxt-link to="/Home">基因检测服务</nuxt-link></MenuItem>
                    <!--<MenuItem name="serviceImmunohistochemistry">形态病理学服务 - 免疫组化</MenuItem>
                    <MenuItem name="serviceHEStaining">形态病理学服务 - H&E染色</MenuItem>-->
                    <MenuItem name="serviceAI"><nuxt-link to="/Home">病理AI服务</nuxt-link></MenuItem>
                    <MenuItem name="serviceCompleteTechnology"><nuxt-link to="/Home">实验技术服务</nuxt-link></MenuItem>
                    <MenuItem name="serviceBasicResearch"><nuxt-link to="/Home">基础科研服务</nuxt-link></MenuItem>
                    <MenuItem name="serviceIntegrated"><nuxt-link to="/Home">高端一体化科研服务</nuxt-link></MenuItem>
                    <MenuItem name="askedQuestions"><nuxt-link to="/Home">常见问题解答</nuxt-link></MenuItem>
                  </Submenu>


                  <MenuItem name="5">
                    <nuxt-link to="/Home">联系我们</nuxt-link>
                  </MenuItem>
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
      if(path == 'home'){
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
  }
  .layout-nav{
    float: right;
    padding-right: 10px;
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
</style>
