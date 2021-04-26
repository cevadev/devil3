/**Formulario de busqueda de personajes */
<template>
  <div class="search-form my-5">

    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <!-- Formulario -->
        <b-form @submit.prevent="onSubmit">

          <!-- Grupo 1 (Input texto) -->
          <b-form-group
            id="input-group-1"
            label="BattleTag:"
            label-for="input-text"
            description="Format: YourProfile#1234"
          >
            <!--v-focus es una directiva personalizada-->
            <b-form-input
              v-focus
              id="input-text"
              v-model="form.battleTag"
              type="text"
              size="lg"
              required
              placeholder="BattleTag"
            />
          </b-form-group>

          <!-- Grupo 2 (Selector de región) -->
          <b-form-group id="input-group-3" label="Region:" label-for="input-region">
            <b-form-select
              id="input-region"
              v-model="form.region"
              size="lg"
              :options="regions"
              required
            />
          </b-form-group>

          <!-- Botón envío -->
          <div class="d-flex justify-content-end mt-5">
            <b-button type="submit" variant="primary" size="lg">Submit</b-button>
          </div>

        </b-form>
      </div>
    </div>

  </div>
</template>

<script>
import { regions } from '../../utils/regions.js'
export default {
  name: 'MainForm',
  data () {
    return {
      form: {
        battleTag: '',
        region: 'eu'
      }
    }
  },
  computed: {
    //retornamos un objeto array con las regiones en minuscula como value y en mayusculas como texto a mostrar
    regions () {
      return regions.map(region => ({ value: region, text: region.toUpperCase() }))
    }
  },
  methods: {
    onSubmit () {
      const { region, battleTag } = this.form
      //cuando el formulario se envia, hacemos un cambio de ruta de nombre Profile, y pasamos como parametros params
      //los valores que acabamos de recuperar del formulario.
      this.$router.push({ name: 'Profile', params: { region, battleTag: battleTag.replace('#', '-') } })
    }
  }
}
</script>