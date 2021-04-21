<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <!--componente b-table de bootstrap
        forma larga:
        b-table :items="heroes" :fields="fields" :dark="true" :hover="true" :small="true" :striped="true" 
        stacked="sm"-->
        <b-table :items="heroes" :fields="fields" dark hover small striped stacked="sm">
            <!--conenido 1era columna: insertamos el componenten HeroIco
                indicamos que la columna name del objeto fields del funcion data mostrara el componente HeroIco
                en lugar del texto por defecto-->
            <template v-slot:cell(name)="data">
                <hero-ico :hero="data.item"/>
            </template>
            <template v-slot:cell(class)="data">
                <hero-class-level :hero="{ classSlug: data.item.classSlug, level: data.item.level }"/>
            </template>
            <!--en esta tercera columna no tenemos un componente sino que mostramos directamente el dato-->
            <template v-slot:cell(kills)="data">
                <span>{{ data.item.kills.elites | formatNumber}}</span>
            </template>
        </b-table>
  </div>
</template>

<script>
import HeroIco from './HeroIco'
import HeroClassLevel from './HeroClassLevel'

//importamos la funcion (filter) que dara formato a un numero
import { formatNumber } from '../../../../filters/numeral.js';

export default {
  name: 'HeroesList',
  components: {
      HeroIco,
      HeroClassLevel
  },
  props: {
    //Array requerido que va a recibir del componente padre MainBlock un listado de heroes el cual filtraremos
    //para obtener los heroes restantes sin incluir los 3 primero
    heroes: {
      required: true,
      type: Array
    }
  },
  //damos de alta los filters
  filters: {
      formatNumber
  },
  //no queremos mostrar todos los datos de array heroes, definimos que columnas vamos a mostrar, 
  //definimos la estructura en el objeto field
  data(){
      return {
    fields: [
      {
        key: 'name',
        label: 'Name',
      },
      {
        key: 'class',
        label: 'Class',
        sortable: true
      },
      {
        key: 'kills',
        label: 'Elite Kills',
        sortable: true
      }
    ]
  }
  }
}
</script>