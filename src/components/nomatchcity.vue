<template>
  <div id='unmatched'>
    <div>无匹配城市</div>
    </div>
</template>

<script>
export default {
props:['input3'],
name:'unmatched',
beforeRouteEnter (to, from, next) {
  next( vm =>{console.log(vm)} )
}
}
</script>

<style scoped>
#unmatched{
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}
</style>