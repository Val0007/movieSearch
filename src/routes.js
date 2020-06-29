import Movies from './components/Movies.vue';
import Movie from './components/Movie.vue';
import Home from './components/Home.vue';
import SpecMovie from './components/SpecMovie.vue';


export const routes = [
    {path:"/movies",component:Movies},
    {path:"/",component:Home},
    {path:'/:name',component:SpecMovie}

]