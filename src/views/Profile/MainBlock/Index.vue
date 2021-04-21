<template>
  <div class="grid-container">
    <div class="grid-item item-left">
      <!--<h1>Izquierda</h1>
          validamos si el array de horoes tiene heroes, si es asi nos quedamos con los tres primero heroes-->
      <top-heroes v-if="hasHeroes" :heroes="topHeroes" />
      <!--validamos si el array de heroes posee mas de 3 heroes-->
      <heroes-list v-if="hasHeroesList" :heroes="heroesList" />

      <progress-list :acts="profileData.progression" />
      
    </div>
    <!-- Right Bar-->
    <div class="grid-item item-right">

      <player-stats :stats="statsData"/>

    </div>
  </div>
</template>

<script>

//importamos el componente hijo TopHeroes/Index.vue qe va a recibir el array de heroes
import TopHeroes from './TopHeroes/Index.vue';

//importamos el componente hijo HeroesList
import HeroesList from './HeroesList/Index.vue';

import ProgressList from './ProgressList/Index.vue';

import PlayerStats from './PlayerStats/Index.vue';

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
      HeroesList,
      ProgressList,
      PlayerStats,
  },
  computed: {
      //comprobamos que el array profileData contenga heroes
      hasHeroes(){
          return this.profileData.heroes.length > 0;
      },
      //devolvemos los 3 primeros heroes
      topHeroes(){
          return this.profileData.heroes.slice(0,3);
      },
      //comprobamos que el array heroes contenga mas de 3 elementos
      hasHeroesList(){
        return this.profileData.heroes.length > 3;
      },
      //retornamos los heroes restantes sin incluir los 3 primeros
      heroesList(){
        return this.profileData.heroes.slice(3, this.profileData.heroes.length);
      },
      statsData () {
        //paragonLevel -> nivel de leyenda
        //kills -> monstruos y élites
        //Time played -> tiempo jugado por heroe en porcentaje
        const { paragonLevel, kills, timePlayed } = this.profileData
        return { paragonLevel, kills, timePlayed }
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