//paquetes de npm
import Vue from "vue";
//biblioteca BootstrapVue
import BootstrapVue from "bootstrap-vue";

//archivos locales de nuestra app
import App from "./App.vue";
import router from "./router";
import store from "./store";

//css global
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//damos de alta la biblioteca
Vue.use(BootstrapVue);
//configuracion extra
Vue.config.productionTip = false;

//Instancia principal de vue
new Vue({
  router,
  store,

  methods: {
    init() {
      //llamamos a las actions de Vuex a traves del metodo dispatch
      store.dispatch("oauth/getToken", null, { root: true });
    },
  },

  //Hook created
  created() {
    this.init();
  },

  render: (h) => h(App),
}).$mount("#app");
