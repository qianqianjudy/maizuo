<template>
     <div>
                <!-- 头部 -->
            <div id="header">
                    <!-- 左侧头部 -->
                    <div class="header_l" @click="handleToggle()">
                        <a href="javascript:;" class="title-icon-container">
                            <div class="title-icon">
                                <i class="iconfont">&#xe60e;</i>
                            </div>                   
                            <h3 v-if="movieDetail.name">{{movieDetail.name}}</h3>
                             <h3 v-else>卖座电影</h3>
                        </a>
                        
                    </div>
                    <!-- 右侧头部 -->
                    <div class="header_r">
                        <a href="" class="city">
                            <span>北京</span>
                            <i class="iconfont">&#xe62e;</i>
                        </a>
                        <a href="" class="user">
                            <i class="iconfont">&#xe60d;</i>
                        </a>
                    </div>
            </div>
             <transition name="slide">
                <slidebar-com v-show="show_bar"  @handleMask="handleShowBar"></slidebar-com>
             </transition>     
             <transition name="fade">
                 <mask-com v-show="show_bar" @handleMask="handleShowBar"></mask-com>
             </transition>  
            
     </div>
</template>

<script>
import slidebar from "./slidebar.vue"
import mask from "./mask.vue"
import Vuex from "vuex"
export default {
    data(){
        return {
            show_bar:false,
        }
    },
    components:{
        "slidebar-com":slidebar,
        "mask-com":mask
    },
    methods:{
        handleToggle(){
            this.show_bar = !this.show_bar
        },
        handleShowBar(val){
            this.show_bar = val;
        },
         ...Vuex.mapActions({
            getMovieDetail:"movie/getMovieDetail"
        })
    },
   computed:{
        ...Vuex.mapState({
            movieDetail:state=>state.movie.movieDetail
        })
    }
}
</script>


<style scoped>
        #header{
            height:1rem;
            background:#282828;
            position:fixed;
            top:0;
            left:0;
            width:100%;
            line-height:1rem;
            overflow:hidden;
            z-index:2;
        }
        #header>.header_l{
            color:#fff;
            font-size:.32rem;
            line-height:1rem;
            text-align:left;
            width:auto;
            height:1rem;
            margin:0 auto;
            float:left;
        }
        #header>.header_l>.title-icon-container{
            font-size:.32rem;
            line-height:1rem;
            text-align:left;           
        }
         #header>.header_l>.title-icon-container>.title-icon{
             float:left;
             width:.96rem;
             text-align:center;
             border-right:2px solid #222;
             box-shadow:1px 0 2px #363636;
             color:#999;
         }
         #header>.header_l>.title-icon>i{
             font-size:.32rem;
             font-style:normal;
         }
          #header>.header_l>.title-icon-container>h3{
            padding:0 1em;
            float:left;
            font-size:.28rem;
            color:#efefef;
            text-overflow:ellipsis;
            white-space:nowrap;
            overflow:hidden;
         }
         #header>.header_r{
             float:right;
         }
          #header>.header_r>a{
              color:#999;
          }
         #header>.header_r>.city{
             float:left;
             font-size:.28rem;
             padding:0 .12rem;
         }
          #header>.header_r>.city>span{
              font-size:.28rem;
          }
         #header>.header_r>.city>i{
             font-family:"iconfont" !important;
             font-style:normal;
             font-size:.24rem;
         }
          #header>.header_r>.user{
              float:left;
              font-size:.32rem;
              width:.96rem;
              text-align:center;
          }
           #header>.header_r>.user>i{
               font-size:.32rem;
               font-style:normal;
           }
</style>

