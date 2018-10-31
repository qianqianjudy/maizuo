<template>
      <div class="movie page">
          <div class="movie_con">
               <div class="film_wrap">
                    <router-link  class="film_l" :to="{name:'nowplay'}">正在热映</router-link> 
                    <router-link class="film_r" :to="{name:'coming'}">即将上映</router-link>  
              </div>
          </div>
         <router-view></router-view>
      </div>
      
</template>

<script>
export default { 
    created(){   
            this.$router.push({name:"nowplay"})       
    }
}
</script>

<style scoped>
.movie_con{
    width:100%;
    padding:0 .3rem;

}
 .film_wrap{
     display:flex;
     width:100%;
     justify-content: space-between;
     height:.92rem;
     border-bottom:.02rem solid #fe6e00;
     color: #6a6a6a;
 }
 .film_wrap>.film_l{
     width:50%;
     text-align:center;
     font-size:.32rem;
     line-height:.92rem;
     cursor:pointer;  
 }
 .film_wrap>.film_r{
     width:50%;
     text-align:center;
     font-size:.32rem;
     line-height:.92rem;
     cursor:pointer;
 }
  .router-link-active{
      border-bottom:2px solid #fe6e00;
  }
</style>

