import Vue from 'vue'
import rt from 'vue-router'
import menu from '../components/menu'

import find from '../view/find'
//import find from '../view/find.vue'
//import my from '../view/my.vue'
//const find =resolve=>require(["../view/find"],resolve)
Vue.use(rt)

export default new rt({
  routes: [
    {
      path: '/',
      component: index,
      
    },
  
     {
      path:'/find',
      component:find
    }
  
  ],mode:'history'
})
