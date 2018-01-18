import Vue from 'vue'
import rt from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import menu from '../components/menu'
import index from '../index'
import find from '../view/find'
import my from '../view/my.vue'

Vue.use(rt)

export default new rt({
  routes: [
    {
      path: '/',
      component: index,
      children:[
      {
        path:'/find',
       component:find
      },
      {
       path:'/my',
       component:my
       }
      ]
    },
    {
    	path:'/menu',
    	component:menu
    },
     
    
  ],mode:'history'
})
