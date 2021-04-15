import Vue from "vue";
import Vuex from "vuex";

//Damos de alta a nuestro modulo Oauth en Vuex
import oauth from "./modules/oauth.js";

Vue.use(Vuex);

export default new Vuex.Store({
  // Aquuí registramos todos los módulos
  modules: {
    oauth,
  },
});
