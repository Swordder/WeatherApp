<template>
    <div id="weather" ref="weathershot">
      <div id="weather-nav">
        <button id="bt1" @click="changeSite">+</button>
        <span>{{city}}徐汇区 虹梅路</span>
        <button id="bt2" @click="show=!show">...</button>
        </div>
        <div class="conceal" v-show="show" data-html2canvas-ignore>
          <button class='ss' @click="gotoshare">分享天气</button>
          <button class="ss">设置</button>
        </div>
        <div id="middlebox">
        <div class='tem'>14℃</div>
        <div>
        <div class='temdsp'>晴</div>
        <button class='smallbutton'></button>
        </div>
        </div>
        <div id='secmiddlebox'>
          <div style="position:relative;">
          <button class='smallbutton'></button>
          <span>空气良52</span>
          <button class='smallbutton'></button>
          <span>降水概率0%</span>
          </div>
          <ul id="weather-list">
            <li  v-for="(item,index) in week" :key="index"><img :src="changePath" alt="">{{item}}&nbsp;&nbsp;良<span>16℃/9℃</span></li>
          </ul>
           <button class="bigbutton">查看近15日天气</button>
        </div>
        <img :src='this.$store.state.a' alt="" v-if="false||this.$store.state.a" style="height:699.2px;width:375.2px">
    </div>
</template>
<script>
import axios from 'axios'
import html2canvas from 'html2canvas'
export default {
  name: 'weather',
  data () {
    return {
      // temperature,
      show: false,
      weekday: 2,
      week: ['今天', '明天', ''],
      currentday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      city: '',
      info: '',
      path: '',
      pic: ['晴天', '多云', '阴', '阵雨'],
      weather: '晴天',
      pic2: {}

    }
  },
  beforeCreate () {

  },
  /* directives:{
    changeListStyle:{
     inserted:function(el,binding) {el.style.listStyleImage='url('+binding.value+')';}
    }
  }, */
  created () {
    this.weekday = new Date().getDay()
    console.log(this.weekday)
    if (this.weekday === 5) { this.$set(this.week, 2, '周日') } else if (this.weekday === 6) { this.$set(this.week, 2, '周一') } else { this.$set(this.week, 2, this.currentday[this.weekday + 2]) }
    console.log(this.week[2])
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(res => {
      console.log(res)
      this.info = res.data.bpi; /* this.temperature = res.data.list; this.city = res.data.area; */ console.log(res.data)
    })
    console.log(this.changePath)
    console.log(this.$data)
    console.log(this.$parent)
  },
  mounted () {

  },
  methods: {
    changeSite () {
      this.$router.push({name: 'citymag', params: {id: 123}})
    },
    gotoshare () {
      this.$store.dispatch('getCanvas', this.$refs.weathershot)
      this.$router.push('/share')
    }
  },
  watch: {

  },
  computed: {
    changeWeekday () {
      return this.week[2]
    },

    changePath () {
      this.path = '../../static/icon/icon/day/' + this.pic.indexOf(this.weather) + '.png'
      return this.path
    }
  },
  provide: {
    a: this.a
  },
  components: {html2canvas}
}
</script>
<style lang="scss" scoped>
$bak:white;
.conceal{
  position: absolute;
  width: 30vw;
  height: 10vh;
  clear: both;
  border-radius: 1vw;
  background:$bak;
  right: 0px;

}
.ss{
  width: 30vw;
  height: 5vh;
  display: block;
  border: none;
  background: transparent;
  border-radius: 1vw;
  &:nth-of-type(1){
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
  &:nth-of-type(2){
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
  &:hover{
  background: rgb(214, 211, 211);
}
  }
// button.ss:nth-of-type(1){
//   border-bottom-left-radius: 0;
//   border-bottom-right-radius: 0;
// }
// button.ss:nth-of-type(2){
//   border-top-left-radius: 0;
//   border-top-right-radius: 0;
// }
// .ss:hover{
//   background: rgb(214, 211, 211);
// }
#secmiddlebox{
  height: 40vh;
  button:nth-of-type(2){
  margin-left: 132px;
}
  .smallbutton{
margin-left: 20px;
position: relative;
}

}
// #secmiddlebox{
//   height: 40vh;
// }
// #secmiddlebox button:nth-of-type(2){
//   margin-left: 132px;
// }
// #secmiddlebox .smallbutton{
// margin-left: 20px;
// position: relative;
// }
#weather{
  color:white;
  background: gray;
  height: 100%;
  padding-top: 2rem;
}
.smallbutton{
  border-radius: 50%;
  width: 17px;
  height: 17px;
  border-width: 0;
  background-color: rgb(240, 221, 221);
  padding: 2px 5px;
}
.bigbutton{
  @extend .smallbutton;
  margin: 0 auto;
  display: block;
  width: 290px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
}
.tem{
margin:0  auto;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 50px;
padding: 70px 0 0;
}
.temdsp{
  display: inline-block;
}
#weather-nav{
display: flex;
}
#weather-nav span{
  flex: 1;
  text-align: center;
}
#middlebox::before{
  clear: both;
}
#middlebox{
  text-align: center;
  height: 250px;
}
#weather-list{
  padding-left:10px;
}
#weather-list li{
  list-style-type: none;
  font-size: 10px;
  position: relative;
}
#weather-list li span{
  position: absolute;
  right: 20px;
  line-height:40px;
}
#weather-list img{
  left: 0;
  vertical-align: middle;
  width: 40px;
  height: 40px;
}
#test{
  border: 1px,solid,red;
}
// @mixin bt12{
// margin: 0;
// padding: 0;
// border: 1px solid transparent;
// outline: none;
// background: transparent;
// color: white;
// font-size: 20px;
// }
@import 'css/bt12.scss';
#bt1{
  @include bt12;
  float: left;
  width: 20px;
}
#bt2{
  @include bt12;
  width: 20px;
  float: right;
  transform:rotate(90deg)
}
</style>
