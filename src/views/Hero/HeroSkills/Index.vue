<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">

    <b-nav pills small>
      <b-nav-item :active="!isPassiveSkillsActive" v-on:click="changeComponent('ActiveSkills')">Active</b-nav-item>
      <b-nav-item :active="isPassiveSkillsActive" v-on:click="changeComponent('PassiveSkills')">Passive</b-nav-item>
    </b-nav>

    <!--cargamos el componente que necesitamos. Keep alive en este caso nos ayuda a evitar la renderizacion 
       del componente PassiveSkills -->
    <keep-alive>
      <component :is="activeComponent" :skills="componentProps"/>
    </keep-alive>


    <!--
    <active-skills :skills="skills.active"/>
    <hr>
    <passive-skills :skills="skills.passive"/>-->

  </div>
</template>

<script>
//cargamos los skills activos y pasivos
//import ActiveSkills from './ActiveSkills'
//import PassiveSkills from './PassiveSkills'

export default {
  name: 'HeroSkills',
  data(){
    //variable para controla que el componente este activo
    return{
      activeComponent: 'ActiveSkills'
    }
  },
  //cargamos los componentes de manera asincrona
  components: {
    ActiveSkills: ()=> import(/*webpackChunkName: "ActiveSkills"*/'./ActiveSkills'),
    PassiveSkills: ()=> import(/*webpackChunkName: "PassiveSkills"*/'./PassiveSkills')
  },
  props: {
    skills: {
      required: true,
      type: Object
    }
  },
  computed: {
    /**
   * Dinamyc props for async dynamic components
   * @returns {String}
   */
    // Con esto estamos generando "props" dinámicas
    // Si el componente es ActiveSkills pasa como props las activas, si no, las pasivas
    componentProps () {
      return this.activeComponent === 'ActiveSkills' ? this.skills.active : this.skills.passive
    },
    // Nos dice si el componente "HabilidadesPasivas" está activo o no
    isPassiveSkillsActive () {
      return this.activeComponent === 'PassiveSkills'
    }
  },
  methods:{
    changeComponent (component) {
      this.activeComponent = component
    }
  }
}
</script>