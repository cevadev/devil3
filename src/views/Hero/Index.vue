<template>
  <div>
    <h1>Hero View</h1>
  </div>
</template>

<script>
//import mixin que maneja erroes
import setError from '@/mixins/setError'
//import componente loading para qye se muestre hasta que se carguen los datos
import BaseLoading from '@/components/BaseLoading'
//importamos las funciones que hacen las llamada a la api de Blizzard
import { getApiHero, getApiDetailedHeroItems } from '@/api/search'

export default {
  name: 'HeroView',
  //si ocurre un error, se invoca al mixin, si tood va bien se alguarda la info la variable hero e items de data()
  mixins: [setError],
  components: { BaseLoading },
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
  computed: {},
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