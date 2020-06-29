<template>
    <div class="movies__container">
        <div class="movies__container__heading">
            <h2> Search Results for {{getName}}</h2>
        </div>
        <div class="movies__container__display" >
            <app-card v-for=' m in getMovies' :movie="m"   :style="{'cursor':'pointer'}"></app-card>
        </div>
        <div class="movies__container__button">
            
            <button class="movies__container__button__button" @click="next" >Next Page</button>
            <button class="movies__container__button__button" @click="previous">Previous Page</button>

        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Card from './Movie.vue';
export default {
    components:{
        'app-card':Card
    },
    computed:{
        ...mapGetters([
            'getMovies'
        ]),
        getName(){
            return this.$store.state.stores.name;
        }
    },
    methods:{
        next(){
            this.$store.dispatch('nextPage');
            console.log(this.$store.state.stores.page)
        },
        previous(){
            this.$store.dispatch('previousPage');
            console.log(this.$store.state.stores.page)
        },
        
    }
    
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
.movies__container{
    // margin-bottom: -5px;
    height: 93%;
    width: 100%;
    background-color: black;
   

    &__heading{
        text-align: center;
        color: white;
        padding-top: 10px;
        font-family: "Questrial";
    }
    &__display{
         padding: 20px;
         height: 85%;
         width: 100%;
         margin-top: 10px;
         display: grid;
         grid-template-columns: repeat(4,1fr);
         grid-column-gap: 20px;
         grid-row-gap: 30px;
         overflow-y: scroll;

         &::-webkit-scrollbar{
             width: 12px;
             background-color: black;
         }
         &::-webkit-scrollbar-track{
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
             border-radius: 10px;
             background-color: #555;
        }
        &::-webkit-scrollbar-thumb{
         border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
             background-color: #ef473a;
        }
        
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