<template>
        <div class="home page">
            <banner-com></banner-com>
            <nowplay-com></nowplay-com>
            <upcom-com></upcom-com>
        </div>
  
</template>

<script>
import banner from "./banner.vue"
import nowplay from "./nowplay.vue"
import upcom from "./upcoming.vue"
export default {
    components:{
        "banner-com":banner,
        "nowplay-com":nowplay,
        "upcom-com":upcom
    }
}
</script>

<style scoped>
   .home{
       background:#e1e1e1;
   }
</style>


