<!--Colocamos un componente spinner de bootstrap en la página
    cuando se realice una peticion http para obtener el token, mostraremos el spinner
    lo ocultaremos cuando se haya obtenido el token-->
<template>
  <!--Clases CSS de Bootstrap-->
  <div class="loading-wrapper text-center py-5">
    <div class="spinner-wrapper w-100">
      <!--Componente Spinner de Bootstrap 🔄-->
      <b-spinner class="spinner" label="Loading..." :type="type" :variant="variant"/>
    </div>
    <h1 class="my-5">Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  // Propiedades que soporta nuestro componente: variant y type
  props: {
    //variant -> es el color del spinner, si no se le pasa valor por defecto es info
    variant: {
      required: false,
      type: String,
      // Valor por defecto, en caso de que no le pasemos esta prop
      default: 'info',
      validator: (value) => {
        // Función validadora:
        // El valor de la cadena de texto (prop) debe coincidir con una de estas palabras
        return [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark'
        ].indexOf(value) !== -1
      }
    },
    //tipo de spinner, pudiendo ser grow (un circulo que crece) o border (un spinner que gira sobre si mismo)
    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => {
        // Función validadora:
        // El valor de la cadena (prop) debe coincidir con una de estas palabras
        return ['border', 'grow'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="stylus">
  .spinner-wrapper
    .spinner
      width 4rem
      height 4rem
</style>