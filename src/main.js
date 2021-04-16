import { library } from "@fortawesome/fontawesome-svg-core";
// Iconos de tipo "Solid"
import {
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
// Iconos de tipo "Brand" (marcas o logos de empresas)
import {
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet,
} from "@fortawesome/free-brands-svg-icons";
// El componente que vamos a utilizar
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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

//registramos nuestro archivo de css de forma global
import "./assets/css/main.styl";

// Le añadimos los iconos que acabamos de importar (todos, los de tipo solid y de tipo brand)
library.add(
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

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
