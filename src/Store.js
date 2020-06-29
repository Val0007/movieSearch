
const state = {
    movies:[],
    name:'',
    page:1,
    slideshow:[],
    currentmovie:{},
    id:'tt0372784',
    key:'1a2b5f7e'
};
const getters={
 getMovies:(state)=>{
     return state.movies
 },
 getPages:(state)=>{
     return state.page
 },
 getCurrentMovies:(state)=>{
     return state.currentmovie
 }
 
}
const mutations = {
    'GET_MOVIES':(state,payload)=>{
        fetch(`http://www.omdbapi.com/?apikey=${state.key}&s=${payload}&page=${state.page}`).then(res=>res.json())
        .then(data=>{
            state.movies = data.Search;
            console.log(state.movies);

        })

    },
    'GET_MOVIE':(state)=>{
        fetch(`http://www.omdbapi.com/?apikey=${state.key}&i=${state.id}&type=movie`).then(res=>res.json())
        .then(data=>{
            console.log(data);
            state.currentmovie = data;
        })
    },
    'NEXT_PAGE':(state)=>{
        state.page += 1;
    },
    'PREVIOUS_PAGE':(state)=>{
        state.page -= 1;
    }
}
const actions={
    getMovies:({commit},payload)=>{
        commit('GET_MOVIES',payload);
    },
    getMovie:({commit})=>{
        commit('GET_MOVIE');
    },
    nextPage:({commit,state})=>{
        commit("NEXT_PAGE");
        commit('GET_MOVIES',state.name);
    },
    previousPage:({commit})=>{
        commit("PREVIOUS_PAGE");
        commit('GET_MOVIES',state.name);
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}