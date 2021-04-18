/**
 * En el caso de un error al llamar la API, el error se almacena en el store y nos redirecciona
 * a la pagina de error
 *
 * Esta funcionalidad de guardar los datos que se mostraran en la pagina de error, lo podemos
 * usar cafa vez que llamemos a un api y nos da error.
 *
 * Los mixinson codigos que pueden ser reutilizados, asi cuando querramos esta funcionalidad
 * poderemos reutilizar el codigo en vez de duplicarlo.
 */

//importamos mapMutations para trabajar con las mutaciones del store en nuestros componentes
import { mapMutations } from "vuex";

export default {
  methods: {
    //error -> es el bloque al que hacemos refrencia, que se llama error
    //ojbeto {} -> objeto con las funciones que queremos mapear, es decir,la mutacion SET_ERROR se convierta
    //en un metodo de nombre setError en nuestro componente
    ...mapMutations("error", {
      //ahora podemos usarlo como un componente local con la sintaxis this.setError()
      setError: "SET_ERROR",
    }),
    /**
     * API response error. exponemos el metodo setApiErr, este metodo llama a nuestra funcion mapeada de Vuex
     * que equivale a llamar a la mutacion del Store SET_ERROR
     * @param params {Object || null} Error Object
     */
    setApiErr(params) {
      this.setError(params);
    },
  },
};
