import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import weather from '@/components/grid/weather'
import hello from '@/components/hello'
import long from '@/components/grid/long'
import home2 from '@/components/home2'
import grid from '@/components/grid/grid'
import multifield from '@/components/grid/multifield'

Vue.use(Router)

export default new Router({
  routes: [
      {
      path: '/',
      name: 'home',
      component: home,
      //redirect: '/hello',//默认显示天气查询页
      children:[
        {
          path:'/weather',
          component:weather
        },
        {
          path:'/hello',
          component:hello
        },
        {
          path:'/long',
          component:long
        },
        {
          path:'/grid',
          component:grid
        },
        {
          path:'/multifield',
          component:multifield
        }
      ]
    },
    {
        path: '/home2',
        name: 'home2',
        component: home2,
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
  ]
})
