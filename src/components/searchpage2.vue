<template>
  <div id="searchpage2">
  <ul><li >{{input2}}</li></ul>
  </div>
</template>
<script>
export default {
  props:['input2'],
  name:'searchpage2',
data(){
  return{
   // citylist:[]
  }
  },
  created() {
  console.log(this.input2);
  console.log(this.$parent);
  }


}
</script>

<style scoped>
#searchpage{
 padding-top: 2rem;
  background: grey;
  padding-left:4vw;
  height:100vh
  }
</style>