/*

randomly create a three-course meal based on what is available on a menu.

*/

const menu = {
  //contain a mapping between each course and the dishes available to order in that course.
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {
    return this._courses.appetizers = appetizer;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(main) {
    return this._courses.mains = main;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessert) {
    return this._courses.desserts = dessert;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  //used to add a new dish to the specified course on the menu.
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  //get a random dish from a course on the menu, which will be necessary for generating a random meal.
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomDish = Math.floor(Math.random() * dishes.length);
    return dishes[randomDish];
  },
};

