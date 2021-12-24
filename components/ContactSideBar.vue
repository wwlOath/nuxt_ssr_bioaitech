<template>   
  <div>
    <div class="misc">
      <ul class="clearfix">
        <li id="event-monitor-consultation" class="item" @mouseleave="mLeave(consultation,'consultationContent')" @mouseenter="mEnter(consultation,'consultationContent')">
          <a :class="consultation['icon']" href="https://wpa.qq.com/msgrd?v=3&uin=1181745389&site=qq&Menu=yes" target="_blank"><span class="icon"><icon name="brands/qq"></icon></span></a>
          <a :class="consultation['text']" href="https://wpa.qq.com/msgrd?v=3&uin=1181745389&site=qq&Menu=yes" target="_blank"><span class="text">在线客服</span></a>
        </li>
        <li id="event-monitor-introduction" class="item" @mouseenter="mEnter(introduction,'introductionContent')" @mouseleave="mLeave(introduction,'introductionContent')">
          <a :class="introduction['icon']" href="javascript:void(0)"><span class="icon"><icon name="brands/weixin"></icon></span></a>
          <a :class="introduction['text']" href="javascript:void(0)"> <span class="text">关注微信</span>
          </a>
        </li>
        <li id="event-monitor-telephone" class="item" @mouseenter="mEnter(telephone,'telephoneContent')" @mouseleave="mLeave(telephone,'telephoneContent')">
          <a :class="telephone['icon']" href="javascript:void(0)"><span class="icon"><Icon type="ios-call" :size="18"/></span></a>
          <a :class="telephone['text']" href="javascript:void(0)"> <span class="text">电话号码</span>
          </a>
        </li>
        <li class="item" id="back-to-top" v-show="scrollToTop" @mouseenter="mEnter(backToTop,'')" @mouseleave="mLeave(backToTop,'')" @click="backTop">
          <a :class="backToTop['icon']" href="javascript:void(0)"><span class="icon"><icon name="arrow-circle-up"></icon></span></span></a>
          <a :class="backToTop['text']" href="javascript:void(0)"><span class="text">返回顶部</span></a>
        </li>
      </ul>
    </div>
    <div class="misc-body">
      <a href="javascript:void(0)" class="misc-body-item hm-dropdown-shadow"  v-show="consultationContent">
        <div class="hm-dropdown-shadow-con">
          <Avatar><icon name="brands/qq"></icon></Avatar>
          <p></p>
          <p style="font-size:12px">1181745389</p>
        </div>
      </a>
      <a href="javascript:void(0)" class="misc-body-item hm-dropdown-shadow"  v-show="introductionContent">
        <img src="@/assets/img/footer.png" alt="关注中科光华微信公众号" width="100px">
      </a>
      <a href="javascript:void(0)" class="misc-body-item hm-dropdown-shadow"  v-show="telephoneContent">
        <div class="hm-dropdown-shadow-con-telephone">
          <div style="font-size:12px;margin-bottom: 5px">座机<Icon type="ios-call" />：<br>029-88662595</div>
          <div style="font-size:12px">手机<Icon type="md-phone-portrait" />：<br>18909275696</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contactSideBar',
    data() {
      return {
        consultation: {
          "icon": {"consultation": true, "item-icon": true, "icon-font": true, "item-show": true},
          "text": {"consultation-text": true, "item-text": true, "item-text-hidden": true}
        },
        introduction: {
          "icon": {"introduction": true, "item-icon": true, "icon-font": true, "item-show": true},
          "text": {"introduction-text": true, "item-text": true, "item-text-hidden": true}
        },
        telephone: {
          "icon": {"telephone": true, "item-icon": true, "icon-font": true, "item-show": true},
          "text": {"telephone-text": true, "item-text": true, "item-text-hidden": true}
        },
        backToTop: {
          "icon": {"top": true, "item-icon": true, "icon-font": true,"item-show": true},
          "text": {"top-text": true, "item-text": true,"item-text-hidden": true}
        },
        scrollToTop: false,
        introductionContent:false,
        consultationContent:false,
        telephoneContent: false
      }
    },
    methods: {
      mLeave(tc, content) {
        tc["icon"]["item-show"] = true
        tc["icon"]["item-icon-hidden"] = false
        tc["text"]["item-text-hidden"] = true
        tc["text"]["item-show"] = false
        this[content] = false
      },
      mEnter(tc, content) {
        tc["icon"]["item-show"] = false
        tc["icon"]["item-icon-hidden"] = true
        tc["text"]["item-text-hidden"] = false
        tc["text"]["item-show"] = true
        this[content] = true
      },
      backTop () {
        if(window.all){
          document.documentElement.scrollTop = 0;
        }else{
          window.scrollTo(0, 0);
        }
      },
      mscroll() {
        let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        this.scrollToTop = top > 0 ? true : false
      }
    },
    mounted() {
      window.addEventListener("scroll", this.mscroll)
      window.addEventListener("resize", this.mscroll)
    },
    destroyed() {
      window.removeEventListener("scroll", this.mscroll)
      window.removeEventListener("resize", this.mscroll)
    },
    created() {

    },
  }

</script>


<style>
  .misc {
    position: fixed;
    right: 0;
    bottom: 20px;
    z-index: 999;
    width: 36px;
    background-color: #4aa6fc;
    -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, .2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, .2);
    border-radius: 2px
  }
  .misc ul{
    margin-bottom: 0rem
  }
  .misc .item-text {
    background-color: #fff
  }


  .misc .item {
    position: relative;
    float: left;
    width: 36px;
    height: 36px;
    text-align: center;
    overflow: hidden;
    list-style: none;
  }

  .misc a {
    position: absolute;
    top: 0;
    left: 0;
    width: 36px;
    height: 100%;
    padding-left: 3px;
    padding-right: 3px;
    line-height: 1.2;
    color: #323437
  }

  .misc a.item-text-hidden {
    top: 39px
  }

  .misc a.item-icon-hidden {
    top: -39px
  }

  .misc a.item-show {
    top: 0
  }

  .misc .item-text {
    top: 39px
  }

  .misc .item-icon {
    display: inline-block
  }

  .misc .icon {
    float: left;
    width: 18px;
    height: 18px;
    margin-top: 10px;
    margin-left: 6px;
    color: white
  }

  .misc .text {
    float: left;
    padding-top: 4px
  }

  .misc-body .misc-body-item {
    position: fixed;
    right: 40px
  }

  .misc-body {
    position:relative;
    background-color: white;
    bottom: 55px;
    z-index: 99999;

  }

  .misc-body .hm-dropdown-shadow {
    -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, .8);
    bottom: 20px;
  }
  .misc-body .hm-dropdown-shadow-con{
    width:100px;
    height:100px;
    background-color: white;
    text-align: center;
    padding: 15px 10px 15px 10px;
  }

  .misc-body .hm-dropdown-shadow-con-telephone {
    color: #000;
    text-align: left;
    width:100px;
    height:100px;
    background-color: white;
    padding: 15px 10px 15px 10px;
  }
</style>
