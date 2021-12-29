
<template>
  <div id="slide">
    <div :style="heightStyle">
      <iframe :style="heightStyle" :src="bdTokenUrl" frameborder="0" scrolling="no"  allowfullscreen mozallowfullscreen webkitallowfullscreen id="slideIframe">
      </iframe>
    </div>
  </div>
</template>

<script type="text/javascript">
  import config from '@/plugins/config';

  export default {
    name: 'slideView',
    data(){
      return{
        bdTokenUrl : '',
        heightStyle: {

        }
      }
    },
    created() {
      console.log('ddd')
    },
    mounted(){
      //将涉及window对象、FormData()等的时候放至mounted生命周期里。
      this.initUrl();
      const slideIframe = document.getElementById('slide');
      slideIframe.style.height = document.documentElement.clientHeight + 'px';
      //计算手机端的高度
      this.calcWindowWidth();
    },
    methods: {
      getQueryVariable(variable){
        if(window.location.search.length<1){
          return ""
        }
        let query = window.location.search.substring(1);
        console.log(query)
        let vars = query.split("&");
        for (let i=0;i<vars.length;i++) {
          let pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
        }
        return("");
      },
      initUrl() {
        let imageId = this.$route.params["id"]
        let code = this.getQueryVariable("code")
        let ext = ""
        if(imageId.length>35 ){
          let c = [5,9,17,30,25,34,20,25]
          for(let i=0;i<c.length;i++){
            ext += imageId.charAt(c[i])
          }
        }
        let hostname = "&extUrl="+document.location.protocol+"//"+document.location.host+"/proxy-api/front/bioaitech-api/unauth/SlideImage/extend"
        if(typeof(code)!="undefined" && code==ext){
          hostname =""
        }
        this.bdTokenUrl = config.slideViewerBaseUrl+"/MoticGallery/Slides/"+imageId+"?user=any&rc=1&style=2&rotate=1.5708&menu=0"+hostname
      },
      calcWindowWidth() {
        if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
          this.heightStyle = {
            'min-height': window.innerHeight+'px',
            width: '100%'
          }
        } else {
          this.heightStyle = {width:'100%',height:'100%'};
        }
      }
    }
  }
</script>

<style>

</style>

