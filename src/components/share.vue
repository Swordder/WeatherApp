<template>
      <div id="content" ref="sp">
        <!-- <span >我是待生成图片元素</span>
        <button type="button" class="shot-btn" @click="screenShot">截图</button> -->
        <img id="new_img" :src='keepa' style="height:699.2px;width:375.2px;transform:scale(0.7);bottom:100px"/>
        <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options"/>
      </div>
</template>
<script>
// import html2canvas from 'html2canvas'
import weather from './weather'
export default {
  data() {
    return {
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ]
      // img: ""
      // k:''
    }
  },
  components:{
    weather
  },
  computed:{
    keepa(){
      return this.$store.state.a
    }
  },
  methods: {
    // screenShot() {
    //   html2canvas(this.$refs.sp, {
    //     width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    //     height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    //     width:200,
    //     height:400
    //   }).then((canvas) => {// 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
    //     this.k = canvas.toDataURL('image/png');
    //   })
    // }
  },
  mounted(){
  },
  created() {
    document.title='html2canvas截图'
  }
}
</script>
 
<style scoped>
#content{
  height: 100%;
  padding-top: 2rem;
  background: rgb(187, 187, 236);
  text-align: center;
}
</style>
