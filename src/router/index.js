import Vue from 'vue'
import Router from 'vue-router'
import unmatched from '@/components/nomatchcity'
// import searchpage2 from '@/components/searchpage2.vue'
// import weather from '@/components/weather'
// import citymag from '@/components/citymag'
import cityweather from '@/components/cityweather'
Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/components/home.vue')
  },
  {
    path: '/weather',
    name: 'Weather',
    component: () => import('@/components/weather.vue')
  },
  {
    path: '/weather/:id',
    name: 'citymag',
    component: () => import('@/components/citymag.vue')
  },
  {
    path: '/share',
    name: 'citymag',
    component: () => import('@/components/share.vue')
  },
  {
    path: '/cityweather',
    name: 'cityweather',
    component: cityweather,
    // component: () => import('@/components/cityweather.vue'),
    children: [{
      path: '/',
      name: 'searchpage1',
      component: () => import('@/components/searchpage1.vue')
    },
    {path: 'searchpage2/:input2',
      name: 'searchpage2',
      component: () => import('@/components/searchpage2.vue'),
      props: true
    },
    {path: 'unmatched/:input3',
      name: 'unmatched',
      component: unmatched,
      // component: () => import('@/components/nomatchcity.vue'),
      props: true
    }
    ]
  }
  ]
})
// router.beforeEach((to, from, next) => { console.log('router1'); next() })
// router.beforeEach((to, from, next) => { console.log('router2'); next(false) })
export default router
