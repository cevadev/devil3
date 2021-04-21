<template>
  <div class="d-flex flex-column" :title="actTitle">
    <div class="boss-img pt-2">
      <div class="act" :class="actClass"></div>
    </div>
    <p class="d-block text-center m-0 lead font-weight-bold">{{ fullActName }}</p>
  </div>
</template>

<script>
const acts = {
  act1: 'I',
  act2: 'II',
  act3: 'III',
  act4: 'IV',
  act5: 'V'
}

export default {
  name: 'ProgressItem',
  props: {
    act: {
      required: true,
      type: Object,
      //funcion que valida que le numero de claves del objeto que recibe es igual a 2
      validator: (obj) => {
        return Object.keys(obj).length === 2
      }
    }
  },
  computed: {
    fullActName () {
      return `Act ${acts[this.act.actNum]}`
    },
    actClass () {
      const status = this.act.value ? 'done' : 'pending'
      return `${this.act.actNum} ${status}`
    },
    //retorna una string dependiendo del valor del act, es decir, si esta completado o no
    actTitle () {
      return this.act.value
        ? 'Act completed! 💃'
        : 'Act uncompleted 🙈'
    }
  }
}
</script>