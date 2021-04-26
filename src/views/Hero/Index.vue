<template>
  <div class="hero-view">
    <base-loading v-if="isLoadingHero"/>
    <hero-detail-header v-if="hero" :detail="detailHeader"/>

    <b-row>
      <!-- 12 columnas de 'xs' -> 'md', 8 columnas desde 'lg' hacia arriba  -->
      <!-- En 'lg' orden 2 -->
      <b-col md="12" lg="8" order-lg="2">
        <base-loading v-if="isLoadingItems"/>
        <!-- Componente de Items del personaje -->
        <hero-items v-if="items" :items="items"/>
      </b-col>

      <!-- 12 columnas de 'xs' -> 'md', 4 columnas desde 'lg' hacia arriba -->
      <!-- En 'lg' orden 1 -->
      <b-col md="12" lg="4" order-lg="1">
        <template v-if="hero">
          <hero-attributes :attributes="detailStats"/>
          <hero-skills :skills="hero.skills"/>
        </template>
      </b-col>

    </b-row>
  </div>
</template>

<script>
//import mixin que maneja erroes
import setError from '@/mixins/setError'
//import componente loading para qye se muestre hasta que se carguen los datos
import BaseLoading from '@/components/BaseLoading'
//importamos las funciones que hacen las llamada a la api de Blizzard
import { getApiHero, getApiDetailedHeroItems } from '@/api/search'

import HeroDetailHeader from './HeroDetailHeader.vue';

//Atributos del hero
import HeroAttributes from './HeroAttributes/Index.vue';
//avilidades del hero
import HeroSkills from './HeroSkills/Index.vue'
//items del hero
import HeroItems from './HeroItems/Index';

export default {
  name: 'HeroView',
  //si ocurre un error, se invoca al mixin, si tood va bien se alguarda la info la variable hero e items de data()
  mixins: [setError],
  components: { BaseLoading, HeroDetailHeader, HeroAttributes, HeroSkills, HeroItems },
  data () {
    return {
      //variable de control, para saber si estan loading o no
      isLoadingHero: false,
      isLoadingItems: false,
      //hero que recuperamos
      hero: null,
      //los items que posee el hero
      items: null
    }
  },
  computed: {
    detailStats () {
      // Devuelve el contenido de stats y agrega classSlug
      return { ...this.hero.stats, classSlug: this.hero.class }
    },

    detailHeader () {
    // Asignamos valores a través de 
      const {
        name,
        // valor: alias
        class: classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      } = this.hero

      return {
        name,
        classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      }
    }
  },
  created () {
    //cuando se crea el componente se realizan las llamadas a la api y true los componentes loading
    this.isLoadingHero = true
    this.isLoadingItems = true
    const { region, battleTag: account, heroId } = this.$route.params

    getApiHero({ region, account, heroId })
      .then(({ data }) => {
        //en caso de llamada exitosa a la api, guardamos la info en la variable hero
        this.hero = data
      })
      .catch((err) => {
        this.hero = null
        const errObj = {
          routeParams: this.$route.params,
          message: err.message
        }
        if (err.response) {
          errObj.data = err.response.data
          errObj.status = err.response.status
        }
        this.setApiErr(errObj)
        this.$router.push({ name: 'Error' })
      })
      .finally(() => {
        this.isLoadingHero = false
      })

    getApiDetailedHeroItems({ region, account, heroId })
      .then(({ data }) => {
        this.items = data
      })
      .catch((err) => {
        this.items = null
        console.log(err)
      })
      .finally(() => {
        this.isLoadingItems = false
      })
  }
}
</script>