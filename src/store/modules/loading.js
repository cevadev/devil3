//modulo que gestiona el estado Loading de inicial de la app
export default {
  namespaced: true,
  state: {
    //variable de estado
    isLoading: false,
  },
  mutations: {
    //funcion que modifica la variable de estado
    SET_LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
};
