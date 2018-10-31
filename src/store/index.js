import Vue from "vue"
import Vuex from "vuex"
import movie from "./movie"
Vue.use(Vuex)

const state = {
    bar:[
        {
            name:"/home",
            title:"首页"
        },
        {
            name:"/movie",
            title:"影片"
        },
        {
            name:"/cinema",
            title:"影院"
        }
    ]
}
const mutations = {
    
}
const getters = {
    
}
const actions = {
    
}

const store = new Vuex.Store({
     state,
     mutations,
     getters,
     actions,
     modules:{
         movie
     }
})

export default store;