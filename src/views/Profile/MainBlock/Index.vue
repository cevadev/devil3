<template>
  <div class="grid-container">
    <div class="grid-item item-left">
      <!--<h1>Izquierda</h1>
          validamos si el array de horoes tiene heroes, si es asi nos quedamos con los tres primero heroes-->
      <top-heroes v-if="hasHeroes" :heroes="topHeroes" />
    </div>
    <div class="grid-item item-right">
      <h1>Derecha</h1>
    </div>
  </div>
</template>

<script>

//importamos el componente hijo TopHeroes/Index.vue qe va a recibir el array de heroes
import TopHeroes from './TopHeroes/Index.vue';

export default {
  name: 'MainBlock',
  //recibimos los datos profileData (objeto donde se guarda datos de la api) del componente padre Profile/Index.vue
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },
  components: {
      TopHeroes,
  },
  computed: {
      //comprobamos que el array profileData contenga heroes
      hasHeroes(){
          return this.profileData.heroes.length > 0;
      },
      //devolvemos los 3 primeros heroes
      topHeroes(){
          return this.profileData.heroes.slice(0,3);
      }
  },
}
</script>

<style lang="stylus">
 .grid-container
    display grid
    grid-template-columns 1fr

    .grid-item
      &.item-left
        grid-column span 1

      &.item-right
        grid-column span 1
    /*a partir de 992px tendremos 6 columnas, 4 columnas a la izquierda y 2 columnas a a derecha*/
  @media (min-width: 992px)
    .grid-container
      display grid
      grid-template-columns repeat(6, 1fr)

      .grid-item
        &.item-left
          grid-column span 4

        &.item-right
          grid-column span 2
</style>