<template>
  <div>
    <!--si la variable isLoading es true mostramos el componente BaseLoading-->
    <base-loading v-if="isLoading"/>
    <h1>Profile View</h1>
  </div>
</template>

<script>
//recuperamos el mixin
import setError from '../../mixins/setError.js';
import { getApiAccount } from '../../api/search.js';

//importamos nuestro componente loagind
import BaseLoading from '../../components/BaseLoading.vue';

export default {
  name: 'ProfileView',

  //damos de alta al mixin
  mixins: [
    setError
  ],

  components:{
    BaseLoading
  },

  data(){
    return{
      //variable para controlar la visualzacion del componente loading
      isLoading : false,
      profileData: null
    }
  },

  created () {
    // this.$route.params -> { region: "eu", battleTag: "SuperRambo-2613" }
    //cuando se crea el componente y mientras se hace la llamada a la api, mostramos el loading
    this.isLoading = true;
    // Destructuracion
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },
  methods: {
    fetchData (region, account) {
      // Llamamos a la API, por medio de la llamada de nuestra funcion
      //llamamos a la api, pasando un objeto con region y account como claves
      //retorna una promesa que puede ser exitos con then() o un error con catch()
      getApiAccount({ region, account })
        .then(({ data }) =>{
          //guardamos los datos en una variable local
          this.profileData = data
        })
        .catch((err) =>{
          this.profileData = nul;
          //creamos el objeto error
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
        	// Hacemos uso del Mixin
	        // Guardamos el objeto en el Store
          this.setApiErr(errObj)
	        // Navegamos a la ruta de nombre 'Error'
          this.$router.push({ name: 'Error' })
        })
        //cuando la llamada a la api termina, ocultamos el componente loading
        .finally(() =>{
          this.isLoading = false;
        });
    }
  }
}
</script>