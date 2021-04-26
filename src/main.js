//paquetes de npm
import Vue from "vue";

//archivos locales de nuestra app
import App from "./App.vue";
import router from "./router";
import store from "./store";

//importamos el plugin de bootstrapVue
import "./plugins/BootstrapVue.js";

//importamos el plugin Vue Font-Awesome
import "./plugins/fontAwesome.js";

//registramos nuestro archivo de css de forma global
import "./assets/css/main.styl";

//informamos a Vue del uso de Directivas personalizadas
import "./directives";

//configuracion extra
Vue.config.productionTip = false;

//Instancia principal de vue
new Vue({
  router,
  store,

  methods: {
    //nuestra funcion
    init() {
      //llamamos a las actions (funciones) que estan Vuex a traves del metodo dispatch
      store.dispatch("oauth/getToken", null, { root: true });
    },
  },

  //Hook created
  created() {
    this.init();
  },

  render: (h) => h(App),
}).$mount("#app");
