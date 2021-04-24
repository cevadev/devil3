export default {
  methods: {
    /**
     * Metodo que navega hasta la vista Hero
     * Go to hero Id
     * @param heroId {String | Number}
     */
    goToHero(heroId) {
      // Sacar los datos de la URL
      const { region, battleTag } = this.$route.params;
      // Navegar a la ruta "Hero"
      this.$router.push({
        name: "Hero",
        params: { region, battleTag, heroId },
      });
    },
  },
};
