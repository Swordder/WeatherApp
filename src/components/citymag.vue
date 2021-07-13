<template>
  <div id='citymag'>
    <div><i class="el-icon-back" style="width:20px" @click="getF"></i></div>
    <div>城市管理</div>
    <div>
    <el-input
    placeholder="搜索全球天气"
    prefix-icon="el-icon-search"  @click.native="gotoCityWeather">
    </el-input>
  </div>
  </div>
</template>
<script>
// import goBack from '../method/back.js'
export default {
  name:'citymag',
  data() {
    return {
      value:''
    }
  },
  methods:{
    getF(){
      this.$router.push('/weather')
    },
    gotoCityWeather(){
      this.$router.push('/cityweather')
    }
  },
  created(){
    
  },
  mounted(){
  },
  beforeDestroy(){},
  watch:{
    
  },
 
}
</script>

<style>
.el-icon-back{
  color: black;
}
#citymag{
background: grey;
height: 100%;
padding-top: 2rem;
}
#citymag div:nth-of-type(2){
  color: black;
  font-size: 2rem;
  padding-bottom: 1rem;
}


</style>
