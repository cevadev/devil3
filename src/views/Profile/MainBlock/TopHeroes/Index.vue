/**
* Manejo del listado de heroes
*/
<template>
  <div class="top-heroes">
    <!-- Título con nuestra fuente Diablo-like -->
    <h2 class="my-4 font-diablo">Top Heroes</h2>
    <!-- 3 columnas, una para cada TopHero -->
    <b-row>
      <!-- No te olvides de poner el `key` cuando uses v-for -->
      <b-col sm="4" v-for="hero in heroes" :key="hero.id">
        <!-- TopHero con datos como prop -->
        <top-hero :hero="hero"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TopHero from './TopHero.vue';

export default {
  name: 'TopHeroes',
  props: {
    //Array requerido que va a recibir del componente padre MainBlock un listado de heroes el cual filtraremos
    //para obtener los 3 primeros elementos del array
    heroes: {
      required: true,
      type: Array
    }
  },
  components: {
      TopHero,
  }
}
</script>
