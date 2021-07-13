<template>
    <div id="navi">
    <div class="head" ref="navi" >
      <div class='head-left'>{{time|timepipe}}</div>
      <div class='head-right'><div id='innerRight' class='inner-right'></div>{{battery}}</div>
    </div>
    </div>
</template>
<script>
export default {
  name:'navi',
  data(){
    return{
      time:'',
      battery:100,
      p:2
    }
  },
  filters:{
    timepipe(value){
      var value=new Date();
      var hour=value.getHours();
      var minutes=value.getMinutes();
      minutes=minutes<10?'0'+minutes:minutes;
      //console.log(value);
      return hour+':'+minutes
    }
  },
  methods:{
    async getBattery(){
      const bat= await navigator.getBattery()
      this.battery=(bat.level*100).toFixed(0);
      return this.battery
    }
  },
  watch:{
    battery(val){
      var ir=document.getElementById('innerRight');
      ir.style.width=0.24*val+'px';
      if(val<=20)
      {ir.style.backgroundColor='red';
      document.body.style.filter='brightness(0.5)'
      alert('电量不足，赶紧找找你的电源');
      }
      else{
      document.body.style.filter='brightness(1)'
      ir.style.backgroundColor='green';
      }
      console.log(ir.style.width)
    }
  },
   mounted(){ 
    this.p=3;
    console.log(this.$el.textContent);
    this.$nextTick(()=>{console.log(this.$el.textContent)});
    this.j=setInterval(this.getBattery,0);
    console.log(this.battery);
    this.i = setInterval(()=>{
        this.time=new Date();
      },1000);
  },
  beforeDestroy()
  {

  }
}
</script>
<style scoped>
.inner-right{
  position: absolute;
  margin: 1px;
  background: red;
  width: 24px;
  height: 8px;
  border-radius: 5px 5px;
  z-index: -1;
}
#navi{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  width: 100%;
  height: 2rem;
}
.head{
  position: sticky;
  width: 100%;
  height: 100%;
 }
.head-left{
  position: absolute;
  display: inline-block;
  /* color: rgba(255, 251, 251, 0.918); */
  left:10px ;
  width: 43px;
  line-height: 28px;
}
.head-right{
  padding-top: 0px;
  text-align: center;
  border-radius: 6px 6px;
  border:1px solid white;
  font-size: 8px;
  margin:7px 5px 9px;
  position: absolute;
  display: inline-block;
  right: 10px;
  width: 25px;
  height: 10px;
  border:1px,solid,rgb(240, 233, 233);
  z-index: 999;
}
</style>