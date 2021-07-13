// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../store/index.js'
import {Button, Icon, Input} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { ShareSheet } from 'vant'
// Vue.use(ShareSheet)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Button)
Vue.config.productiWonTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  components: {App},
  template: '<App/>'
})
