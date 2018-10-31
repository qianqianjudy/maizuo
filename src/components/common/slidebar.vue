<template>
      <div class="slideBar">
           <ul>
               <li v-for="(item,index) in bar" :key="item.id" @click="handleHref()">
                   <router-link :to="item.name"> {{item.title}} </router-link>
                   <span class="iconfont">&#xe62d;</span>
               </li>
           </ul>
      </div>
</template>

<script>
import Vuex from "vuex"
export default {
    computed:{
        ...Vuex.mapState({
            bar:state=>state.bar
        })
    },
    methods:{
        handleHref(){
            this.$emit("handleMask",false)
        }
    }
}
</script>

<style scoped>
   .slideBar{
       width:75%;
       height:100%;
       background:#282828;
       position:fixed;
       left:0;
       top:1rem;
       z-index:5;
   }
   .slideBar>ul{
       width:100%;
   }
   .slideBar>ul>li{
       width:100%;
       line-height:1.02rem;
       border-bottom:2px dotted #333;
       padding:.32rem;
       font-size:.28rem;
   }
   .slideBar>ul>li>a{
       color:#9a9a9a;
   }
   .iconfont{
       color:#666;
       float:right;
       font-size:.28rem;
   }

   .slide-enter-active{
       animation:slideEnter 300ms;
   }

   .slide-leave-active{
        animation:slideLeave 300ms;
   }

   @keyframes slideEnter{
       0%{
           transform:translateX(-100%)
       }
       100%{
            transform:translateX(0%)
       }
   }
   @keyframes slideLeave{
       0%{
           transform:translateX(0%)
       }
       100%{
            transform:translateX(-100%)
       }
   }
</style>


