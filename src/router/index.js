import Vue from 'vue'
import Router from 'vue-router'
import Loginpage from '../components/login.vue'
import Mainpage from '../components/mainpage.vue'
Vue.use(Router)

export default new Router({
    routes:[
      {
        path:'/',
        name: 'login',
        component: Loginpage
      },
      {
        path:'/mainpage',
        name: 'mainpage',
        component: Mainpage
      },
    ]
  })
