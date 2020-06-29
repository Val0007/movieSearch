<template>
    <div class="movie__card" @click="specMov">
        
        <div class="movie__card__img">
            <img :src="movie.Poster" alt="" >
        </div>
        <div class="movie__card__content">
            <h3>{{movie.Title}}</h3>
            <h5>{{movie.Year}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    props:['movie'],
    methods:{
        specMov(){    
        this.$store.state.stores.id = this.movie.imdbID;
        var name  =this.movie.Title;
        this.$store.dispatch('getMovie');
        setTimeout(()=>{
            this.$router.push(`/${name}`);
        },2000)
        
        }
    }
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
.movie__card{
    height: 300px;
    width: 220px;
    background-color: transparent;
    border: 2px solid #3C3B3F;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    &__img{
        height: 68%;
        width: 100%;
        overflow: hidden;
    }
    &__img img{
        height: 100%;
        width: 100%;
        display: inline-block;
    }
    &__content{
        padding: 10px;
        text-align: center;
        color: #fcb045;
        height: 32%;
        width: 100%;
        font-family: "Questrial";
    }
}

</style>