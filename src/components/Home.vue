<template>
    <div class="home__container">
       
           <div class="home__container__img" >
              <transition name="slide" appear mode="out-in" v-if="show"> 
            <img :src="img[number]" alt="">
            </transition> 
            <h2>Search any movie <br> and get<br> Instant Results</h2>
           </div>
       
       
        
        
    </div>
</template>


<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return{
            img:[require('./Train.jpg'),require('./Ozark.jpg'),require('./Martian.jpg')],
            number:0,
            show:true
        
        }
       
    },
    methods:{
        alternate(){
            setInterval(()=>{
               if(this.number<2){
                   this.number++
               } 
               else{
                   this.number = 0;
               }
            },2000)
        }
    },
    created(){
        this.alternate();
        
    }
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
.home__container{
    overflow: hidden;
    height: 97%;
    width: 100%;
    background-color: black;
}

.home__container__img{
    height: 100%;
    width: 100%;
    background-color: #555;
    position: relative;
}
.home__container__img img {
    opacity: 0.6;
    height: 100%;
    width: 100%;
    display: inline-block;
    
}
.home__container__img h2 {
    color: rgb(239, 71, 58);
    opacity: 1.3;
    box-shadow: 1px 2px 40px rgba(239, 71, 58,1);
    font-family: "Questrial";
    font-size: 35px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
}
h2{
    color: white;
}
.slide-enter{
    
}
.slide-enter-active{
    animation: slide-in 1s ease-in forwards;
}
.slide-leave{
    animation: slide-out 1s ease-in forwards;
    
}
.slide-leave-active{
    
}
@keyframes slide-in{
    from{
        transform: translateX(100%);
        opacity: 0;

    }
    to{
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes slide-out{
    from{
        transform: translateX(0%);
        opacity: 1;

    }
    to{
        transform: translateX(100%);
        opacity: 0;
    }
}
    
</style>

