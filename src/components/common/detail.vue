<template>
   
    <div class="detail page" v-if="movieDetail.id"> 
       <div class="detail_img">
           <img :src="movieDetail.cover.origin" alt="">
        </div>   
        <ul class="movie_infro">
           <li class="detail_movieInfro">影片简介</li> 
           <li class="director">导     演：<span>{{movieDetail.director}}</span></li> 
           <li class="main-actor">主 演 : {{movieDetail.actors[0].name}}</li>     
           <li>地区语言： <span>{{movieDetail.nation}}</span>  <span>{{movieDetail.language}}</span> </li>
           <li>类型： {{movieDetail.category}}</li>
           <li>上映时期：{{movieDetail.premiereAt}}</li>
           <li class="list">
               {{movieDetail.synopsis}}
           </li>
        </ul> 
        <div class="buy_movie">
            <button>立即购票</button>
        </div>                
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    data(){
        return {
            val:""
        }
    },
    created(){
        
         this.getMovieDetail(this.$route.query.val);
         
    },
    computed:{
        ...Vuex.mapState({
            movieDetail:state=>state.movie.movieDetail
        })
    },
    methods:{
        ...Vuex.mapActions({
            getMovieDetail:"movie/getMovieDetail"
        })
    }
}
</script>

<style scoped>
        .detail{
           background:#e1e1e1; 
           width:100%;
           height:8.8rem;
        }
        .page{
            background:#e1e1e1; 
        }
       .detail_img>img{
           width:100%;
       }
       .detail_movieInfro{
                margin: .32rem auto;
                border-left: .32rem solid RGB(228, 200, 156);
                font-size: .32rem;
                padding-left: .6rem;
       }
       ul{
           background:#e1e1e1;
           height:100%;
       }
       li{
            height: .36rem;
            margin-bottom: .35rem;
            margin-left: .2rem;
         }
        .buy_movie{
             position: fixed;
             left: 0;
             bottom: .2rem;
             width: 100%;
             text-align: center;
        }
        .buy_movie>button{
            font-size: 14px;
            min-width: 156px;
            height: 36px;
            line-height: 36px;
            border: none;
            background-color: #fe8233;
            padding: 0;
            margin: 0;
            border-radius: 18px;
            color: #fff;
            -webkit-transition: 0.5s ease;
        }
        .list{
            text-overflow: ellipsis;
            margin-bottom: 1.6rem;
            line-height:.34rem;
            background:#e1e1e1;
        }
       
</style>


