// Importamos nuestra función que obtiene el token
// @ es un alias para /src
import * as oauth from "../../api/oauth.js";

// Creamos el objeto con "Espacio de Nombres"
export default {
  namespaced: true,
  //state -> estado de nuestro modulo
  state: {
    //variable que guarda el token
    accessToken: null,
  },
  //mutations -> las mutaciones que mutaran nuestro estado
  mutations: {
    /**
     * SET_ACCESS_TOKEN funcion que cambia (mute) el estado que le estamos pasando
     * @param {*} state -> estado de nuestro modulo
     * @param {*} payload -> valor que queremos guardar
     */
    SET_ACCESS_TOKEN(state, payload) {
      //cambiamos el accesstoken con el payload, cuando queremos borrar pasamos null
      state.accessToken = payload;
    },
  },

  //actions-> las acciones que llamaran a nuestras mutaciones
  actions: {
    // Creamos la función getToken para obtener un token, que recibe como parámetro el objeto `context`
    // Gracias a la asignación de desestructuración de JavaScript, recogemos `commit` como argumento
    getToken({ commit }) {
      // Pasos:
      //  1 - Hacer llamada HTTP para obtener el token
      //  2 - Si va OK, guardar el token en 'accessToken'. Continuar el flujo normal
      //  3 - Si hay errror, limpiar el token de 'accessToken', mostrar log del error

      // Paso 1
      oauth
        .getToken()
        .then(({ data }) => {
          // Paso 2: Guardamos el valor del token llamando a nuestra mutación
          commit("SET_ACCESS_TOKEN", data.access_token);
        })
        .catch((err) => {
          // Paso 3: En caso de error limpiamos el token
          commit("SET_ACCESS_TOKEN", null);
          console.log("Error OAuth: ", err);
        })
        .finally(() => {
          // Por ahora no hacemos nada más aquí
          console.log("Done!");
        });
    },
  },
};
