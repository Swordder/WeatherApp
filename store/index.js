import Vuex from 'vuex'
import Vue from 'vue'
import html2canvas from 'html2canvas'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    a: ''
  },
  mutations: {
    getScreenShotUrl (state, canvas) {
      state.a = canvas.toDataURL('image/png')
      console.log(state.a)
    }

  },
  actions: {
    // 将HTML节点转化为canvas
    getCanvas (context, dom) {
      html2canvas(dom, {
        //  y:this.$refs.weathershot.getBoundingClientRect().top+window.scrollY,
        height: 0.5 * dom.clientHeight, // canvas高
        width: 0.5 * dom.clientWidth, // canvas宽
        scale: 10,
        dpi: 10000
        // useCORS: true,
        // width: window.screen.availWidth,
        // height: window.screen.availHeight,
        // windowWidth:document.body.scrollWidth,
        // windowHeight:document.body.scrollHeight,
        // x:window.pageXOffset,
        // y:window.pageYOffset
      }).then(canvas => { context.commit('getScreenShotUrl', canvas) })
    }
  }
})
export default store
