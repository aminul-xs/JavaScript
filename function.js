/**-
 * --------------------------------------------
 * Class #72
 * ----------------------------------------------
 * JavaScript Function Definitions
 *
 */
// console.log(myFunction(5));

// function myFunction(y) {
//   return y * y;
// }

// var x = function(x, y) {
//     return x * y;
// }
// x(5, 5);

/**-
 * --------------------------------------------
 * Class #73
 * ----------------------------------------------
 * JavaScript Function paramiter
 *
 */

// function a(x, y) {
//     return arguments[1] * arguments[3];
// }

// console.log(a(3, 8, 4, 2));


// x = findMax(1, 123, 500, 115, 44, 88);

// function findMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }

// console.log(x);

/**-
 * --------------------------------------------
 * Class #74
 * ----------------------------------------------
 * JavaScript Function Invocation
 *
 */

// This is a function constructor:
// function myFunction(arg1, arg2) {
//     this.firstName = arg1;
//     this.lastName = arg2;
// }

// // This creates a new object
// const myObj = new myFunction("John", "Doe");

// // This will return "John"
// console.log(myObj.firstName);

// //call for invocation
//myFunction()
//new myFunction()
//myObj.myFunction()





/**-
 * --------------------------------------------
 * Class #75
 * ----------------------------------------------
 * JavaScript Function call
 *
 */
// const ax = {
//    firstName: 'Aminul',
//    sleep: function (){
//       console.log(`${this.firstName} is sleeping`);
//    }
// }
// console.log(ax.sleep());


// function sleep (){
//    console.log(`${this.firstName} is sleeping`);
// }
// window.sleep()

// const person = {
//    fullName: function () {
//       return this.fistName + '' + this.lastName
//    }
// }


// const person1 = {
//    fistName : 'Aminul',
//    lastName: 'Islam',
// }

// const person2 = {
//    fistName : 'Amina',
//    lastName: ' Alom',
// }

// console.log(person.fullName.call(person2));

/**-
 * --------------------------------------------
 * Class #76
 * ----------------------------------------------
 * JavaScript Function apply
 *
 */

//  const person = {
//    fullName: function(city, country) {
//      return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//    }
//  }

//  const person1 = {
//    firstName:"John",
//    lastName: "Doe"
//  }

// result = person.fullName.apply(person1, ["Oslo", "Norway"]);

//  console.log(result);

/**-
* --------------------------------------------
* Class #77
* ----------------------------------------------
* JavaScript Function apply
*
*/

// Initiate counter
// let counter = 0;

// Function to increment counter
// function add() {
// 	let counter = 0;
// 	counter += 1;

// 	return counter;
// }

// Call add() 3 times

// add();
// add()
// console.log(add());
// console.log(add());

// The counter should now be 3

// counter = 5;
// console.log(counter);

/**-
* --------------------------------------------
* Class #78
* ----------------------------------------------
* JavaScript class inro
*
*/

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age() {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }
// const bmw = new Car('Aminul Islam', 1996)
// console.log(bmw.name + " old is " + bmw.age() + " years.");



/**-
* --------------------------------------------
* Class #79
* --------------------------------------------
* JavaScript class  Inheritance
*
*/

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");
// console.dir(myCar.show());


// class Car {
//     constructor(brand) {
//         this._carname = brand;
//     }
//     get carname() {
//         return this._carname;
//     }
//     set carname(x) {
//         this._carname = x;
//     }
// }

// let myCar = new Car("Ford");
// console.log(myCar.carname );


/**-
* --------------------------------------------
* Class #80
* ----------------------------------------------
* JavaScript Static Methods
*
*/

// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     static hello(x) {
//         return "Hello " + x.name;
//     }
// }

// let myCar = new Car("Ford");
// console.log(Car.hello(myCar));
