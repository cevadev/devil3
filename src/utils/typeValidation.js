/**
 * Validamos un tipo (type) de objeto específico
 * Used for custom validations
 * HeroData -> tipo de dato
 * @param hero {String}
 * @param time {String}
 * @param classSlug {String}
 * @constructor
 */
function HeroData(hero, time, classSlug) {
  this.hero = hero;
  this.time = time;
  this.classSlug = classSlug;
}

export { HeroData };
