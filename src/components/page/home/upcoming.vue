<template>
    <div class="upcom_movie">
        <div class="upcom_con">
            <div class="upcom_play">即将上映</div>
        </div>
        
        <div class="upcom_playMovie">
            <ul>
                <li v-for="(item,index) in upcom"> 
                        <div class="play_img">
                            <img :src="item.cover.origin" alt="" @click="goDetail(item.id)">
                        </div>
                        <div class="play_intro">
                            <span class="play_name"> {{item.name}} </span>
                            <span class="play_time"> {{item.date}} </span>
                        </div>
                 </li>
            </ul>
        </div>
        <div class="more">更多即将上映的电影</div>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    computed:{
        ...Vuex.mapState({
            upcom:state=>state.movie.upcom
        })
    },
    methods:{
        ...Vuex.mapActions({
            getUpMovie:"movie/getUpMovie"
        }),
        goDetail(val){
            this.$router.push({name:"detail",query:{val}})
        }
    },
    created(){
        this.getUpMovie()
    }
}
</script>


<style scoped>
    .upcom_con{
        position:relative;
        margin-top:.6rem;
        margin-bottom:.6rem;
        border-bottom:2px solid #a8a8a8;
    }
    .upcom_play{
        width: 65px;
        height: 20px;
        margin: 0 auto;
        margin-bottom: -10px;
        border-radius: 5px;
        font-size: 10px;
        line-height: 20px;
        text-align: center;
        color: #eee;
        background-color: #a7a7a7;
    }
   
    .upcom_playMovie{
        padding-top:.36rem;
    }
    .upcom_playMovie>ul{
        margin-top: 0;
        padding:0 .58rem .3rem; 
        
    }
    .play_img{
        overflow:hidden;
        position:relative;
    }
    .play_img>img{
        vertical-align: middle;
        transition: all 1.2s ease 0s;
        opacity: 1;
        width:6.82rem;
        height:3.82rem;
    }
    li{       
        background-color: #f9f9f9;
        cursor: pointer;
        margin-bottom:.34rem;
    }
    .play_intro{
        height:.7rem;
        background:#fff;
    }
     .play_intro>span:nth-child(1){
         float:left;
         display:inline-block;
         padding-top:.2rem;
         font-size:.24rem;
         line-height:.3rem;
         padding-left:.56rem;
     }
     .play_intro>span:nth-child(2){
         float:right;
         display:inline-block;
         padding-top:.2rem;
         padding-right:.56rem;
         color:rgb(245,162,125);
         font-size:.2rem;
         line-height:.3rem;      
     }
     .more{
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

