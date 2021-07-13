<template>
<div id="app">
    <navi />
    <router-view></router-view>
  </div>
</template>
<script>
import navi from './components/navi.vue'
export default {
  data(){
    return{
      
    }
  },
//   methods:{
//    resBgColor() {
//     // 当color值大于128时,color值偏向255,即#ffffff,此时字体颜色应为#000000
//     // 当color值小于128时,color值偏向0,即#000000,此时字体颜色应为#ffffff
//     var color = 0.213 * this.$refs.navi.[0] + 0.715 * [1] + 0.072 * rgbArr[2] > 255 / 2;
//     return color? '#000000': '#ffffff'
// }
//   },
  created(){
    
  },
  mounted(){
  },
  beforeDestroy(){},
  watch:{
    
  },
  components: {navi},
  name: 'App'
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  position: relative;
  border:solid,1px,white;
  color: white;
}
</style>
