/**-
 * --------------------------------------------
 * Class #63
 * ----------------------------------------------
 * JavaScript object
 *
 */

// const person = {
//     name: 'Aminul',
//     age: 25,
// };

// person.country = 'Bangladesh';

// const persion2 = person;

// person.age = 35;

// console.log(persion2);

/**-
 * --------------------------------------------
 * Class #64
 * ----------------------------------------------
 * JavaScript Object Properties
 *
 */

//  const person = {
//    age: 25,
//    name: 'Aminul',

// };

// person.country = 'Bangladesh';

// person.age = 35;
// let a = "age"

// console.log(person.age);
// console.log(person[a]);
// console.log(person['age']);

// let text = "";

// for (const key in person) {
//    text += person[key]
//    console.log(text)
// }

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {
//       name: "Ford",
//       models: ["Fiesta", "Focus", "Mustang"],
//     },
//     {
//       name: "BMW",
//       models: ["320", "X3", "X5"],
//     },
//     {
//       name: "Fiat",
//       models: ["500", "Panda"],
//     },
//   ],
// };

// let arr = ''
// for (const key in myObj.cars) {
//    arr += "<h2>" + myObj.cars[key].name + "</h2>";
//    for (index in myObj.cars[key].models){
//       arr += "<p>" + myObj.cars[key].models[index] + "</p>";
//    }
//    //  console.log(myObj.cars[key]);

// }
// console.log(arr);
// document.getElementById("demo").innerHTML = arr;

/**-
 * --------------------------------------------
 * Class #65
 * ----------------------------------------------
 * JavaScript Object Display
 *
 */

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// let txt = "";
// for (let x in person) {
//   txt += person[x] + " ";
// }

// document.getElementById("demo").innerHTML = txt;

// const person = {
//    name: "John",
//    age: 30,
//    city: "New York"
//  };

//  const myArray = Object.values(person);
// //  document.getElementById("demo").innerHTML = myArray;

// for (const iterator of myArray) {
//    console.log(iterator);
// }

/**-
 * --------------------------------------------
 * Class #66
 * ----------------------------------------------
 * JavaScript Object accessors
 *
 */

//  const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     // get fullName() {
//     //   return this.firstName + ' ' + this.lastName;
//     // }
// };


// Object.defineProperty(person, 'fullName',{
//     get () {
//         return this.firstName + ' ' + this.lastName;
//       }
// });
// console.log(person.fullName);


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     set lang(l) {
//       return this.language = l
//     }
// };

// person.lang = "bn"
// console.log(person);

/**-
 * --------------------------------------------
 * Class #67
 * ----------------------------------------------
 * JavaScript Object contactor
 *
 */


// function Persion(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.fullName = () => {
//         return this.firstName + " " + this.lastName;
//     }
//     // this.fullNmae = () => {
//     //     return this.firstName + ' ' + this.lastName;
//     // }
// }

// const aminul = new Persion('Aminul', 'Islam', 24);
// aminul.nationality = "English";


// console.log(aminul);

/**-
 * --------------------------------------------
 * Class #68
 * ----------------------------------------------
 * JavaScript Object prototypes
 *
 */

// function Persion(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.fullName = () => {
//         return this.firstName + " " + this.lastName;
//     }
//     // this.fullNmae = () => {
//     //     return this.firstName + ' ' + this.lastName;
//     // }
// }


// const aminul = new Persion('Aminul', 'Islam', 24);
// const sharif = new Persion('Aminul', 'Islam', 24);
// Persion.prototype.nationality = "English";
// console.log(sharif);
// console.dir(typeof sharif.nationality);



// String.prototype.helloOf = function () {
//     return this.toUpperCase()
// }

// let x = 'Bangladesh';

// console.log(x.helloOf());

// function Persion(name, age) {
//     let person = Object.create(Persion.prototype);

//     person.name = name;
//     person.age = age;

//     return person;
// };

// function Persion(name, age) {
//     this.name = name;
//     this.age = age;

// };
// Persion.prototype = {
//     eat() {
//         console.log('Person is eating');
//     },
//     sleep() {
//         console.log('Persion is sleeping');
//     },
//     play() {
//         console.log('Persion is playing');
//     }
// };

// const aminul = new  Persion('Aminul Islam', 24);
// const tamim = new Persion('Tamim Hossain', 23);
// aminul.play();
// aminul.sleep()


// const captain = {
//     name: "Aminul",
//     age: 24,
//     country: 'Bangladesh',
// }

// const player = Object.create(captain);
// console.log(player.country);


/**-
 * --------------------------------------------
 * Class #69
 * ----------------------------------------------
 * JavaScript Object Iterables
 *
 */

// let arr = { one : 1, two: 2, three: 3,}

// for (let index in arr) {
//    console.log(index.valueOf());
    
// }

// let arrs = [1, 2, 3, 4, 5]

// const myNumbers ={}

// myNumbers[Symbol.iterator] = function () {
//     let n = 0;
//     let done = false;

//     return {
//         next() {
//             n += 5;
//             if (n === 100) {
//                 done = true;
//             }
//             return {
//                 value: n,
//                 done: done
//             }
//         }
//     }
// }

// for (let num of myNumbers) {
//     console.log(num);
// }

/**-
 * --------------------------------------------
 * Class #70
 * ----------------------------------------------
 * JavaScript Sets
 *
 */

// const letters = new Set(["a", "b", "c", 'c']);

// console.log(letters.values());


/**-
 * --------------------------------------------
 * Class #72
 * ----------------------------------------------
 * JJavaScript Object Maps
 *
 */

// Set Map Values
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);


// console.log(fruits);


// Create Objects
// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};

// // Create a Map
// const fruits = new Map();

// // Add new Elements to the Map
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);

// console.log(fruits.get(apples));

/**-
 * --------------------------------------------
 * Class #72
 * ----------------------------------------------
 * JavaScript Function Definitions
 *
 */

