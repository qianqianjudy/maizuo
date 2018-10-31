<template>
                <div class="wrapper" ref="wrapper">
                    <ul class="content">
                        <li v-for="(item,index) in movies ">
                            <img :src="item.poster.origin" alt="">
                            <div class="movie_intro">
                                <h5>
                                    {{item.name}}
                                    <span> {{item.grade}} <i class="iconfont">&#xe62d;</i> </span> 
                                </h5>
                                <p class="intro"> {{item.intro}} </p>
                                <p class="movie_item"> {{item.cinemaCount}} 
                                    <span>家影院上映</span> 
                                    <span> {{item.watchCount}} <span>人购票</span> </span>
                                </p>
                                
                            </div>
                        </li>
                    </ul>
                </div>         
</template>


<script>
import Vuex from "vuex";
import Bscroll from "better-scroll";
export default {
    data(){
        return{
            page:2,
            timer:null
        }
    },
    computed:{
        ...Vuex.mapState({
            movies:state=>state.movie.movieMore
        })
    },
    methods:{
        ...Vuex.mapActions({
            updateMovie:"movie/updateMovie"
        })
    },
    created(){
        this. updateMovie()
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper);
    },
    updated(){
        setTimeout(()=>{
            this.scroll.refresh();
        },100)
        this.scroll.on("scrollEnd",()=>{
            if( this.page < 7 && !this.timer){
                this.updateMovie(this.page++);
                this.timer=null;
            }
        },200)
    }
}
</script>

<style scoped>
    .wrapper{
        height:100%;
        overflow:hidden;
    }
    .nowplay{
        width:100%;
        height:100%;
    }
    .wrapper{
      padding:0 .3rem;
    }
    .wrapper>ul{
       width:100%;
    }
    .wrapper>ul>li{
        width: 100%;
        padding: 20px 0;
        border-bottom: dashed 1px #c9c9c9;
        cursor: pointer;
        display:flex;
    }
    .wrapper>ul>li>img{
        width:1.2rem;
        height:1.65rem;
    }
    .wrapper>ul>li>.movie_intro{
        padding-left:.3rem;
        width:75%;
    }
    .wrapper>ul>li>.movie_intro>h5{
        font-size:.32rem;
        font-weight: normal;
        line-height:.64rem;
        color:#000;
        overflow:hidden;
        display: flex;
        justify-content: space-between;
    }
    .wrapper>ul>li>.movie_intro>h5>span{
        padding-left:.5rem;
        font-size:.32rem;
        color:#fc7103;
    }
    .wrapper>ul>li>.movie_intro>h5>span>i{
        font-size:.24rem;
    }
    .wrapper>ul>li>.movie_intro>.intro{
        height: .48rem;
        line-height: .48rem;
        color: #8e8e8e;
        font-size: .24rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        display: inline-block;
    }
    .wrapper>ul>li>.movie_intro>.movie_item{
        line-height:.48rem;
        color:#8e8e8e;
        font-size:.24rem;
    }
</style>
