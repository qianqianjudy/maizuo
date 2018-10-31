<template>
      <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in imgs">
                    <img :src="item.imageUrl" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>                  
</div>
</template>

<script>
import Swiper from "swiper";
import Vuex from "vuex";
import "../../../../node_modules/swiper/dist/css/swiper.css";
export default {   
    computed:{
       ...Vuex.mapState({
           imgs:state=>state.movie.imgs
       }) 
    },
    methods:{
        ...Vuex.mapActions({
            getBanner:"movie/getBanner"
        })
    },
    watch:{
          imgs(){
              this.$nextTick(()=>{
                   //swiper的使用
                    var mySwiper = new Swiper ('.swiper-container', {
                        loop: true, 
                        autoplay:{
                            disableOnInteraction: false,
                        },
                        pagination: {
                        el: '.swiper-pagination',
                        },
                    })  
              })
           }
    },
    created(){
        
        this.getBanner();
    }
}
</script>

<style scoped>
    img{width:100%;}
</style>


