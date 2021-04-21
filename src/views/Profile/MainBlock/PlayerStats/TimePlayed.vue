<template>
  <div class="time-played mt-3">
    <hr class="bg-white mt-5">
    <h2 class="font-diablo my-4">Time Played</h2>
    <div class="bg-dark p-3">
      <!--recorremos el array de elementos de tipo HeroData-->
      <div v-for="hero in timePlayed" :key="hero.classSlug">
        <!--propiedad hero-time de tipo HeroData-->
        <time-played-hero :hero-time="hero"/>
      </div>
    </div>
  </div>
</template>

<script>
import TimePlayedHero from './TimePlayedHero'

export default {
  name: 'TimePlayed',
  components: { TimePlayedHero },
  props: {
    timePlayed: {
      required: true,
      type: Array
    }
  }
}
</script>