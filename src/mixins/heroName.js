/**
 * exponemos un metodo, cuando se importe el mixin en un componente
 * podremos acceder al este metodo classToName()
 */
import classes from "../utils/heroClasses";

export default {
  methods: {
    classToName(classSlug) {
      return classes[classSlug];
    },
  },
};
