import Vue from "vue";
import Vuex from "vuex";

//Damos de alta a nuestro modulo Oauth y loading en Vuex
import oauth from "./modules/oauth.js";
import loading from "./modules/loading.js";
import error from "./modules/error.js";

Vue.use(Vuex);

export default new Vuex.Store({
  // Aquuí registramos todos los módulos
  modules: {
    oauth,
    loading,
    error,
  },
});
