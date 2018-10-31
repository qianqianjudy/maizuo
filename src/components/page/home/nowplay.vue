<template>
    <div class="nowplay">
        <div class="list_nowpaly">
          <ul>
              <li v-for="(item,index) in nowplay" :key="item.id" >
                 <div class="img_container">
                     <div class="img_list">
                          <img :src="item.cover.origin" alt="" @click="goDetail(item.id)">
                     </div>
                 </div>
                 <div class="movie_infro_container">
                     <div class="movie_left">
                            <div class="movie_name"> {{item.name}} </div>
                            <div class="movie_count">
                                <span> {{item.cinemaCount}} </span>
                                <span> 家影院上映 </span>
                                <span> {{item.watchCount}} </span>
                                <span> 人购票 </span>
                            </div>
                     </div>
                     <div class="movie_right">
                         <span> {{item.grade}} </span>
                     </div>
                 </div>
              </li>
          </ul> 
           
        </div>
        <div class="movie_more">更多热映电影</div>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    methods:{
        ...Vuex.mapActions({
            getnowPlayMovie:"movie/getnowPlayMovie"
        }),
        goDetail(val){
            this.$router.push({name:"detail",query:{val}})
        }
    },
    computed:{
        ...Vuex.mapState({
            nowplay:state=>state.movie.nowplay
        })
    },
    created(){
        this.getnowPlayMovie()
    }

}
</script>

<style>
   .nowplay{
       width:100%;
   }
   .nowplay>.list_nowpaly{
       width:100%;
   }
    .nowplay>.list_nowpaly>ul{
        padding-top:.36rem;
        padding-left:0;
        margin-bottom:.2rem;
        width:100%;
        height:100%;
    }
    .nowplay>.list_nowpaly>ul>li{
        margin:0 .34rem .34rem .34rem;       
    }
   .nowplay>.list_nowpaly>ul>li>.img_container{
       overflow:hidden;
       position:relative;
       width:100%;
       height:100%;
   }
   .nowplay>.list_nowpaly>ul>li>.img_container>.img_list{
       background-size:100%;
       background-image:url("http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png") no-repeat;
       width:100%;
       height:100%;
   } 
    .nowplay>.list_nowpaly>ul>li>.img_container>.img_list>img{
        width:100%;
        transition:all 1.2s ease 0s;
        opacity:1;
        vertical-align:middle;
    }
    .movie_infro_container{
        background:#fff;
        height:1rem;
    }
    .movie_left{
        height:1rem;
        padding:.26rem  0  0 .56rem;
        float:left;
    }
    .movie_left>.movie_name{
        font-size:.24rem;
        line-height:.3rem;
    }
    .movie_left>.movie_count{
        font-size:0.16rem;
        color:#9a9a9a;
        line-height:.3rem;
    }
    .movie_right{
        float:right;
    }
    .movie_right>span{
        color:#f78360;
        display:inline-block;
        line-height:1rem;
        margin-right:.3rem;
        font-size:.36rem;
    }
    .movie_more{
        width: 160px;
        height: 30px;
        border: 1px solid #aaa;
        border-radius: 15px;
        margin: 10px auto 30px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: #616161;
        cursor: pointer;
    }
</style>



