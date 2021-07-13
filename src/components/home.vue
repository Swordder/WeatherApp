<template>
    <div class='container'>
      <div class='app'><img @click="goToWeather" src="../../static/img/天气.png" alt=""></div>
    </div>
</template>

<script>
import citymag from './citymag'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods: {
    goToWeather () {
      this.$router.push('/weather')
    }
  },
  components: {
    citymag
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
    background-image: url('../../static/img/IU2.jpg');
  background-size:cover;
}
.app{
  position: absolute;
  bottom: 20%;
}
.container .app img{

  width:50px;
  height:50px
}
</style>
