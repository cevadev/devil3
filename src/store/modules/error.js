//El contenido que va a tener es muy simple, una variable error que por defecto sea null
//y una función (mutación) que se encargue de mutar el valor de error.

export default {
  namespaced: true,
  state: {
    error: null,
  },
  mutations: {
    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },
};
