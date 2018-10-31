<template>
    <div class="mask" @click="handleShow()"></div>
</template>

<script>
export default {
     methods:{
         handleShow(){
             this.$emit("handleMask",false)
         }
     }
}
</script>

<style>
   .mask{
       width:100%;
       height:100%;
       position:absolute;
       background:rgba(0,0,0,.5);
       left:0;
       top:1rem;
       z-index:4;
   }
   .fade-enter-active{
       animation: fadeEnter 300ms;
   }
   .fade-leave-active{
       animation: fadeLeave 300ms;
   }

   @keyframes fadeEnter{
       0%{
            opacity:0
       }
        100%{
            opacity:.5
       }
   }
   @keyframes fadeLeave{
       0%{
            opacity:.5
       }
        100%{
            opacity:0
       }
   }
</style>

