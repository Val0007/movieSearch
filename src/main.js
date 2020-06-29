import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes.js'
import stores from './Store.js'
import Vuex from  "vuex";

Vue.use(VueRouter);
 const router = new VueRouter({
  mode:'history',
  routes
});

Vue.use(Vuex);
const store = new Vuex.Store({
  modules:{
    stores
  }
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
