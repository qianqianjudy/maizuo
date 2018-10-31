import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/page/home/home.vue"
import movie from "../components/page/movie/movie.vue"
import cinema from "../components/page/cinema/cinema.vue"
import nowplay from "../components/page/movie/nowplay.vue"
import coming from "../components/page/movie/coming.vue"
import detail from "../components/common/detail.vue"
Vue.use(Router)
Vue.prototype.common = new Vue();
export default new Router({
  mode:"history",
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      name:"home",
      component:home
    },
    {
      path:"/movie",
      name:"movie",
      component:movie,
      redirect:"/movie/nowplay",
      children:[
        {
          path:"nowplay",
          name:"nowplay",
          component:nowplay
        },
        {
          path:"coming",
          name:"coming",
          component:coming
        }
      ]
    },
    {
      path:"/cinema",
      name:"cinema",
      component:cinema
    },
    {
      path:"/detail",
      name:"detail",
      component:detail
    }
  ]
})
