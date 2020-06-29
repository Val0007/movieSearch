<template>
    <div class="nav">
        <div class="nav__heading">
            <router-link tag="h2" to="/" ><a>movieSearch</a></router-link>
            
        </div>
        <div class="nav__input">
            <input type="text" placeholder="movie..." v-model="value" v-on:keyup.enter='searchMov'>
        </div>
        
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return {
            value:''
        }
    },
    methods:{
        ...mapActions(['getMovies']),
        searchMov(){
            this.getMovies(this.value);
            this.$store.state.stores.name = this.value;
            this.value="";
           this.$router.push('/movies');
        }

    }
    
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fascinate&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    color: inherit;
    text-decoration: none;
}
.nav{
    width: 100%;
    height: 50px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
     background-image: linear-gradient(to right bottom,rgb(0, 0, 0),#434343);
    
    &__heading{
        font-size: 25px;
        color: #ef473a;
        letter-spacing: 8px;
        font-family: "Fascinate";
    }
    &__input input{
       height: 30px;
       width: 250px;
       padding: 5px;
       font-size: 18px;
       border-radius: 2px;
       outline:none;
       border:2px solid rgba(0, 0, 0,0.2) ; 
       background-color: transparent;
       transition: all 1s;
       font-family: "Questrial";

       &:focus{
           background-color: white;
       }
    }


}
    
</style>