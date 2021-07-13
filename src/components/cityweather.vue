<template>
  <div id='cityweather'>
  <div>
  <el-input
    prefix-icon="el-icon-search"
    v-model="input1" style="width:75vw;margin-right:5vw">
  </el-input>
  <span style="color:blue" @click="tomag">取消</span>
  </div>
  <router-view :input2='input1' :input3='input1'></router-view>
  <!-- <div style="padding-top:3vh">
    <span>热门城市</span>
    <ul style="margin-top:2vh">
      <li icon="el-icon-icon"><button>定位</button></li>
      <li v-for='(item,index) in hot' :key="index"><button>{{item}}</button></li>
    </ul>
  </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import searchpage2 from './searchpage2'
import unmatched from './nomatchcity'
var vm = this
// import goBack from '../method/back.js'
export default {
  name: 'cityweather',
  data () {
    return {
      input1: '',
      allcity: {},
      NAMECNList: []
    }
  },
  methods: {
    tomag () {
      this.$router.push({name: 'citymag', params: {id: 123}})
    }
  },

  watch: {
    input1 (val) {
      if (this.NAMECNList.includes(val)) { this.$router.push('/cityweather/searchpage2/' + this.input1) } else if (val == '') { this.$router.push('/cityweather') } else { this.$router.push('/cityweather/unmatched/' + this.input1) }
    }
  },
  computed: {

  },
  components: {searchpage2, unmatched},
  created () {
    axios.get('../../static/json/citydata.json').then(res => {
      this.allcity = res.data
      for (var i = 0; i < res.data.length; i++) {
        this.NAMECNList.push(res.data[i].NAMECN)
      }
      console.log(this.NAMECNList)
    })
    console.log(vm)
  },
  mounted () {

  }
}
</script>

<style scoped>
#cityweather{
  padding-top: 2rem;
  background: grey;
  padding-left:4vw;
  height:100vh
}
</style>
