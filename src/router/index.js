import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//array de routes con las opciones
const routerOptions = [
  { path: "/", name: "Home" },
  { path: "/region/:region/profile/:battleTag", name: "Profile" },
  { path: "/region/:region/profile/:battleTag/hero/:heroId", name: "Hero" },
  { path: "/about", name: "About" },
  { path: "/error", name: "Error" },
  { path: "*", redirect: { name: "Home" } },
];

//array de objetos con el mismo numero de elementos que routerOptions, cada elemento sera un objeto primitivo
//que tendrá path, name y component
const routes = routerOptions.map((r) => {
  return {
    //accedemos al elemento del routerOptions
    ...r,
    //cargamos el componente de manera lazy load es decir dividimos nuestro codigo en pequeñas partes
    //solo se cargara la parte correspondiente a la ruta que estamos visitando.
    //la funcion en component se encarga de traer el componente cuando sea necesario
    component: () => import(`@/views/${r.name}/Index.vue`),
  };
});

const router = new VueRouter({
  routes,
});

export default router;
