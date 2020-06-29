<template>
    <div class='spec__container'>
        <div class="spec__container__heading">
            <h2 class="title">{{obj.Title}} ({{obj.Year}})</h2>
            <h4 class="rating">{{obj.Metascore}}</h4>
        </div>
        <div class="spec__container__features">
            <h4>{{obj.Rated}}</h4>
            <h4>{{obj.Runtime}}</h4>
            <h4>{{obj.Genre}}</h4>
            <h4>{{obj.Released}}</h4>
        </div>
        <div class="spec__container__img">
            <img :src="obj.Poster" alt="">
        </div>
        <div class="spec__container__plot">
            {{obj.Plot}}
        </div>
        <div class="spec__container__info">
            <h4>Director : {{obj.Director}}</h4>
            <h4>Actor : {{obj.Actors}}</h4>
            <h4>BoxOffice : {{obj.BoxOffice}} </h4>
            <h4>imdb votes : {{obj.imdbVotes}}</h4>
        </div>
        <div class="spec__container__button">
            <button class="spec__container__button__button" @click="back" >Back</button>
        </div>
    </div>
</template>



<script>
import {mapGetters} from 'vuex';
export default {
    data(){
      return{
          obj:null
      }
    },
    computed:{
        ...mapGetters([
            'getCurrentMovies'
        ]),
        value(){
            return this.getCurrentMovies;
        }
        
    },
    methods:{
        back(){
            this.$router.push('/movies');
        }
       
    },
    created(){
        this.obj = this.value;
        
    }
    
    
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
body{
    font-family: "Questrial";
}
.rating{
    position: absolute;
    right: 5px;
    top: 15px;
    font-size: 22px;
    opacity: 0.8;
    font-style: italic;
}
.title{
    position: absolute;
    left:40%;
    top: 15px;
     opacity: 0.9;
}
.spec__container{
    color:white;
    height: 97%;
    width: 100%;
    background-color: black;
    &__heading{
        position: relative;
        width: 100%;
        padding: 14px 0;
        margin-bottom: 35px;
       
    }
    &__features{
        opacity: 0.6;
        margin: 20px 0;
        padding: 5px 20px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        padding-left: 100px;
        // grid-gap: 30px;
    }
    &__img{
        
        margin-top: 20px;
        height: 250px;
        width: 250px;
        margin: 0 auto;
        border-radius: 4px;
        border:2px solid #3C3B3F;
        margin-bottom: 20px;
    }
    &__img img{
        display: inline-block;
        height: 100%;
        width:100% ;
    }
    &__plot{
        height: 100px;
        width: 100%;
        margin-top: 20px;
        padding: 20px;
        text-align: center;
        font-size: 20px;
         opacity: 0.8;
    }
    &__info{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 15px;
        height: 120px;
        padding: 30px;
        width: 100%;
        font-size: 18px;
         opacity: 0.6;
        
    }
    &__button{
        height: 100px;
        width: 100%;
        text-align: center;
        padding: 10px;
        &__button{
            margin-top: 10px;
            margin-right: 20px;
            display: inline-block;
            height: 30px;
            width: 140px;
            border:2px solid aqua;
            color:aquamarine;
            font-family: "Questrial";
            outline:none;
            background-color: transparent;
            cursor: pointer;
        }
    }


}
    
</style>