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
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  //get a random dish from a course on the menu, which will be necessary for generating a random meal.
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomDish = Math.floor(Math.random() * dishes.length);
    return dishes[randomDish];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your menu is:\n appetizers: ${appetizer.name}\n mains dish: ${main.name}\n desserts: ${dessert.name}\n The total price is ${totalPrice}`;
  },
};

menu.addDishToCourse('appetizers', 'mashrom', 3.00);
menu.addDishToCourse('mains', 'pizza', 12.00);
menu.addDishToCourse('desserts', 'Cola', 2.00);

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('mains', 'chicken', 15.00);
menu.addDishToCourse('desserts', 'Cheese cake', 5.00);

menu.addDishToCourse('appetizers', 'water', 1.00);
menu.addDishToCourse('mains', 'thrilled checken', 13.00);
menu.addDishToCourse('desserts', 'Cake', 5.00);
const meal = menu.generateRandomMeal();
console.log(meal);