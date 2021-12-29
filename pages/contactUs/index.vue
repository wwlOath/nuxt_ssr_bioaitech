<template>
  <div class="contact-us-container">
    <!--Header-->
    <CommonHeader/>

    <div class="content-style-top" :style="heightStyle">
      <div class="title-img">
        <img src="@/assets/img/contactus-slide.jpg" alt="">
      </div>
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="left">
              <h4 class="text-center">离线留言</h4>
              <br>
              <Form ref="contactForm" :model="contactForm" :rules="contactFormRules" label-position="right" label-colon :label-width="100">
                <FormItem label="邮箱" prop="email">
                  <Input v-model="contactForm.email"></Input>
                </FormItem>
                <FormItem label="姓名" prop="username">
                  <Input v-model="contactForm.username"></Input>
                </FormItem>
                <FormItem label="标题" prop="title">
                  <Input v-model="contactForm.title"></Input>
                </FormItem>
                <FormItem label="内容" prop="content">
                  <Input v-model="contactForm.content" type="textarea" :autosize="{minRows: 5,maxRows: 10}"></Input>
                </FormItem>
                <FormItem label="验证码" prop="code" class="code">
                  <Input v-model="contactForm.code" style="width: 70%"></Input>
                  <div class="login-code" @click="refreshCode">
                    <sidentify :identifyCode="identifyCode"></sidentify>
                  </div>
                </FormItem>
                <FormItem>
                  <Button type="primary" @click="handleSubmit('contactForm')" :loading="loading">离线留言</Button>
                </FormItem>
              </Form>
            </div>
            <div class="right">
              <div class="item">
                <br>
                <h6>其它联系方式：</h6>
                <b>电话</b>：029-88662595/18909275696<br>
                <b>网址</b>：http://bioaitech.com<br>
                <b>邮箱</b>：sales@bioaitech.com<br>
                <b>微信号</b>：18909275696<br>
                <b>QQ</b> ：1181745389<br>

                <br>
                <h6>工作时间：</h6>
                <p>周一到周五： 9:00-18:00<br>
                  其它时间 （365天/24小时）发送离线留言将得到及时回复和技术支持。下班期间您可以通过在线提交订单、发送邮件或者通过离线留言来提交您的需求。</p>
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
  .contact-us-container {
    .content-style-top {
      padding-top: 60px;
      .title-img {
        img {
          width: 100%;
          height: 280px;
        }
      }
    }
    .container {
      .content {
        padding: 40px 10px;
        .row {
          display: flex;
        }
        .left {
          width: 60%;
          padding: 0 10px;
        }
        .right {
          width: 40%;
          padding: 0 10px;
        }
        .code {
          .ivu-form-item-content {
            display: flex;
          }
        }

        .item {
          padding: 10px 20px;
          background: #4aa6fc;
          color: #fff;
          margin-top: 40px;
        }
      }
    }
  }
</style>

<script>
  export default {
    name: 'contact-us',
    data() {
      const validateCode = (rule, value, callback) => {
        if (this.identifyCode.toLowerCase() !== value.toLowerCase()) {
          this.contactForm.code = ''
          this.refreshCode()
          callback(new Error('请输入正确的验证码'))
        } else {
          callback()
        }
      };
      return {
        contactForm: {

        },
        identifyCodes: '1234567890abcdefjhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        identifyCode: '',
        contactFormRules: {
          email: [
            { required: true, message: '邮箱不能为空', trigger: 'submit' },
            { type: 'email', message: '请输入正确的邮箱', trigger: 'submit' }
          ],
          username: [
            { required: true, message: '姓名不能为空', trigger: 'submit' }
          ],
          title: [
            { required: true, message: '标题不能为空', trigger: 'submit' }
          ],
          content: [
            { required: true, message: '内容不能为空', trigger: 'submit' }
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'submit' },
            { validator: validateCode, trigger: 'submit' }
          ]
        },
        loading: false,
        heightStyle: {

        }
      }
    },
    methods: {
      init() {
        this.refreshCode()
      },
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode(){
        this.identifyCode = '';
        this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
              this.randomNum(0, this.identifyCodes.length)
              ]
        }
      },
      handleSubmit(name) {
        let _this = this;

        _this.$refs[name].validate((valid) => {
          if (valid) {
            _this.loading = true;
            _this.$api.contactUsInterface({
              email: _this.contactForm.email,
              contact: _this.contactForm.username,
              title: _this.contactForm.title,
              content: _this.contactForm.content
            }).then(res => {
              if(res.code == 0){
                _this.$Notice.success({
                  title: '邮件发送成功，请耐心等待...'
                });
              }
              setTimeout(() => {
                _this.loading = false;
              },2000);
              _this.refreshCode()
            })
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
      this.init();
      //计算手机端的高度
      this.calcWindowWidth();
      if(typeof(this.$route.params.title)!="undefined"){
        this.contactForm.title = this.$route.params.title
      }
      if(typeof(this.$route.params.content)!="undefined"){
        this.contactForm.content = this.$route.params.content
      }

    }
  }
</script>
