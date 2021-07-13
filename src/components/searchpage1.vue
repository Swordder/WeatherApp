<template>
  <div style="padding-top:3vh">
    <span>热门城市</span>
    <ul style="margin-top:2vh">
      <li icon="el-icon-icon"><button>定位</button></li>
      <li v-for='(item,index) in hot' :key="index"><button>{{item}}</button></li>
    </ul>
  </div>
</template>

<script>
export default {
data(){
  return{
      hot:['北京市','上海市','广州市','深圳市','珠海市','佛山市','南京市','苏州市']
  }
}
}
</script>

<style scoped>
ul{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
}
li{
  list-style: none;
  margin: 2vh;
}
button{
  width: 10vh;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  border-width: 0;
  background-color: rgba(240, 221, 221, 0.918);
}

</style>