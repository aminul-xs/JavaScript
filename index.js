/**-
 * --------------------------------------------
 * Class #12
 * ----------------------------------------------
 * JavaScript Functions
 *
 */

// function sleep(name){
//    console.log(name + " is sleeping form in 10 PM");
// }

// sleep("Aminul");
// sleep("Amina");
// sleep("Farhan");

// function myFunction(a, b){
//    return a * b;
// }
// let x = myFunction(4, 4);

// console.log(x);

// function myFunction(){
//    let carName = "Volvo";
//    console.log(carName);
// }

// myFunction();
// console.log(carName);

/**-
 * --------------------------------------------
 * Class #13
 * ----------------------------------------------
 * JavaScript Objects
 *
 */
// const car ={
//    name: "Fiat",
//    model: 500,
//    weight: "550kg",
//    color: "white",
//    start: function () {
//       this.drive();
//       console.log("car has started");
//    },
//    drive: function () {
//       console.log("car is driveing");
//    },
// };

// console.log(car["weight"]);
// car.start()

// let x = 5;
// let z = new Number(5);

// console.log(typeof(x));
// console.log(typeof(z));

/**-
 * --------------------------------------------
 * Class #14
 * ----------------------------------------------
 * JavaScript Events
 *
 */

// function showDate() {
//    document.getElementById("date").innerHTML = Date()
// }
// console.log(showDate());

/**-
 * --------------------------------------------
 * Class #15
 * ----------------------------------------------
 * JavaScript Strings
 *
 */

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);

// let text = "Aminul Is Good Parsion \"Hello\" Amina Alom";
// console.log(text);

// let a = "John";
// let z = new String("John")
// let x = new String("John")

// console.log(typeof x);

// //Comparing two JavaScript objects always returns false.
// console.log( x == z);

/**-
 * --------------------------------------------
 * Class #16
 * ----------------------------------------------
 * JavaScript String Methods
 *
 */

// let  x = "Apple, Banana, Kiwi";

// let z = x.slice(7, 13);
// console.log(z);

// let amina = "I love Amina";
// let aminaAlom = amina.replace("Amina", "Amina Alom");

// console.log(aminaAlom);

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

/**-
 * --------------------------------------------
 * Class #17
 * ----------------------------------------------
 * JavaScript String Search
 *
 */
// let str = "Please locate where 'locate' occurs!";
// let z = str.lastIndexOf("!");
// console.log(z);

/**-
 * --------------------------------------------
 * Class #18
 * ----------------------------------------------
 * JavaScript Template Literals
 *
 */

// let country = "Bangladesh";

// let sentence = `I love ${country} and It's big country in ${country}`

// console.log(sentence);

/**-
 * --------------------------------------------
 * Class #18
 * ----------------------------------------------
 * JavaScript Numbers
 *
 */

//  let x = 123e5
//  console.log( typeof(x));

// let x = 0.2 + 0.10;

// console.log(x);

// let x = 10;
// let y = 20;
// let z = "Hello Bangladesh";
// let result = (x + y) + z;

// console.log(result);

// let x = 10;
// let y = "10";
// let result = x * y;

// if (x = y) {
//    console.log("Result is erorr");
// } else {
//    console.log(result);
// }
// https://www.bdtechcenter.com/2021/12/blog-post.html

/**-
 * --------------------------------------------
 * Class #19
 * ----------------------------------------------
 * JJavaScript Number Methods
 *
 */

// let x = 9.656;
// // x.toExponential(2);
// // x.toExponential(4);
// let y = x.toExponential(3);

// let x = 123;
// let z = x.toString();
// console.log(typeof z);

// let x = 9.656;
// console.log(x.toFixed(0));
// console.log(x.toFixed(2));
// console.log(x.toFixed(3));
// console.log(x.toFixed(4));
// console.log(x.toFixed(5));

// let x = 9.656;

// console.log(x.toPrecision());
// console.log(x.toPrecision(2));
// console.log(x.toPrecision(3));
// console.log(x.toPrecision(4));

// let x = new Date("2000-01-01");
// console.log(Number(x));
// console.log(typeof x);

// let x = Number.MAX_VALUE;
// let z = Number.MIN_VALUE;
// console.log(x);
// console.log(z);

/**-
 * --------------------------------------------
 * Class #20
 * ----------------------------------------------
 * JavaScript Arrays
 *
 */

//  const cars = [
//    "Saab",
//    "Volvo",
//    "BMW"
//  ];

//  console.log(cars);

// const cars = [];

// cars[0] = "Saab";
// cars[1] = "Volvo";
// cars[2] = "BMW";

// console.log(cars[1]);

// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Opel";
// document.getElementById("demo").innerHTML = cars;
// console.log(cars);

// const person = ["Aminul", "Islam", 24];

// console.log(person.length);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let word = fruits.length;
// console.log(word);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[5] = "Pineapple";
// console.log(fruits[fruits.length -1]);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for (i = 0; i < fruits.length; i++ ) {
//    console.log(i);
//    console.log(fruits[i]);
// }
// function myFunction(value){
// console.log(value);

// }

// fruits.forEach(myFunction);

// fruits.push("Hello")
// fruits[fruits.length] = "lemon"

// console.log(fruits);

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;

// console.log(person);

// let = numbers = [1, 2, 3] 
// let = person = {name: "Aminul", age: 24}

// console.log(numbers);
// console.log(Array.isArray(numbers));

// console.log(numbers instanceof Array);

/**-
 * --------------------------------------------
 * Class #21
 * ----------------------------------------------
 * JavaScript Array Methods 
 *
 */

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.toString());
// console.log(typeof(fruits.join(" ")));
// let a = fruits.pop()
// console.log(a);
// fruits.push("Pineapple")
// console.log(fruits);

// console.log(fruits.shift());
// console.log(fruits);


// console.log(fruits.unshift("Pineapple"));
// console.log(fruits);
// delete fruits[0]
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myFruits = ["Pineapple", "Strawberry"]
// fruits.splice(0, 0, "Pineapple", "Strawberry")
// console.log(fruits);


// console.log(fruits.concat(myFruits));
// console.log(fruits);
// console.log(myFruits);


// const fruits2 = fruits.concat(myFruits)
// const citrus = fruits2.slice(1, 3);
// console.log(citrus);




/**-
 * --------------------------------------------
 * Class #22
 * ----------------------------------------------
 * JavaScript Sorting Arrays
 *
 */






// const fruits = ["Banana", "Orange", "Mango"];
// const myFruits = ["Pineapple", "Strawberry", "Apple"]
// const result = fruits.concat(myFruits)


// const numbers = [30, 50, 10, 12, 59, 36];
// const fullResult = numbers.sort(function(b, c){
//    // return c - b
//    return 0.5 - Math.random()
// })
// console.log(fullResult);


/**-
 * --------------------------------------------
 * Class #23
 * ----------------------------------------------
 * JavaScript Array Iteration
 *
 */


// const numbers = [30, 50, 10, 12, 59, 36];
// function myFunction(value, index, array) {
//    console.log(value);
//    console.log(index);
//    console.log(array);
// }

// numbers.forEach(myFunction)


// const numbers = [30, 50, 10, 12, 59, 36];
// function myFunction(value, index, array) {
//   return value * 2;
// }

// const theNewNumbers = numbers.map(myFunction)
// console.log(theNewNumbers);


// const numbers = [30, 50, 10, 8, 59, 36];
// function myFunction(value, index, array) {
//    if (value > 10) {
//       return true
//    }
// }

// const theNewNumbers =numbers.filter(myFunction)
// console.log(theNewNumbers);

// const numbers = [30, 50, 10, 12, 59, 36];
// function myFunction(total, value, index, array) {
//    return total + value
// }

//  const theNewNumbers =  numbers.reduceRight(myFunction)
//  console.log(theNewNumbers);


// const numbers = [30, 50, 10, 12, 59, 36];
// function myFunction( value, index, array) {
//   return value > 18;
// }

//  const theNewNumbers =  numbers.find(myFunction)
//  console.log(theNewNumbers);



// const numbers = [30, 50, 10, 12, 59, 36];

//  console.log(Array.from("ABCDEFG"));



/**-
 * --------------------------------------------
 * Class #24
 * ----------------------------------------------
 * JavaScript date objects
 *
 */

//  const a = new Date();
//  const b = new Date(2018, 11, 24, 10, 33, 30, 0);
//  const c = new Date(0);
//  const d = new Date("October 13, 2014 11:13:00");

//  console.log(a);
//  console.log(b);
//  console.log(c);
//  console.log(d);


/**-
 * --------------------------------------------
 * Class #27
 * ----------------------------------------------
 * JavaScript Date Formats
 *
 */
//  const d = new Date("2015-03");
//  const d = new Date("2015-03-25T12:30:00Z");


// let msec = Date.parse("March 21, 2012");
// const d = new Date(msec);
// console.log(msec);



/**-
 * --------------------------------------------
 * Class #28
 * ----------------------------------------------
 * JavaScript Get Date Methods
 *
 */

//  const d = new Date();
//  const z = d.getDay();
//  console.log(z);


// const months =["January","February","March","April","May","June","July","August","September","October","November","December"];

// const d = new Date();
// console.log(d);
// let month = months[d.getMonth()];
// console.log(month);




/**-
 * --------------------------------------------
 * Class #29
 * ----------------------------------------------
 * JavaScript Set Date Methods
 *
 */

//  const today = new Date();
//  const someday = new Date();
//  someday.setFullYear(2023, 0, 14);

//  if (someday > today) {
//    text = "Today is before January 14, 2100.";
//    console.log(text);
//  } else {
//    text = "Today is after January 14, 2100.";
//    console.log(text);

//  }

//  console.log(today);
//  console.log(someday);


/**-
 * --------------------------------------------
 * Class #30
 * ----------------------------------------------
 * JavaScript Math Object
 *
 */

// let m = Math.PI;


// console.log(m);

// console.log(Math.E);
// console.log(Math.SQRT1_2);
// console.log(Math.SQRT2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG10E);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);


// console.log(Math.round(4.9));
// console.log(Math.round(4.8));
// console.log(Math.round(4.8));
// console.log(Math.round(4.5));
// console.log(Math.round(4.4));
// console.log(Math.round(4.3));
// console.log(Math.round(-4.1));



// console.log(Math.ceil(4.9));
// console.log(Math.ceil(4.8));
// console.log(Math.ceil(4.7));
// console.log(Math.ceil(4.5));
// console.log(Math.ceil(4.4));
// console.log(Math.ceil(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(-4.1));


// console.log(Math.floor(4.9));
// console.log(Math.floor(4.7));
// console.log(Math.floor(4.6));
// console.log(Math.floor(4.5));

// console.log(Math.floor(4.4));
// console.log(Math.floor(4.3));
// console.log(Math.floor(4.2));


// console.log(Math.random());

/**-
 * --------------------------------------------
 * Class #32
 * ----------------------------------------------
 * JavaScript boolean
 *
 */

// console.log(10> 9);



/**-
 * --------------------------------------------
 * Class #33
 * ----------------------------------------------
 * JavaScript Comparison and Logical Operators
 *
 */


// let z =  6;
// let x = "6"

// console.log(z === x);


// let z =  6;
// let x = "6"

// console.log(z === x);


// let age = 17;

// if (age >= 18) {
//    console.log('You are adult!');
// }else{
//    console.log('You are not adult!');
// }


// let x = 6;
// let y = 4;
// let age = 17;


// if (age >= 18) {
//    console.log('You are adult!');
// }else{
//    console.log('You are not adult!');
// }



// console.log(age >= 18 ? "You are Adult" : "You are not adult");

// let age = "17";

// age = Number(age);
// if (isNaN(age)) {
//   voteable = "Input is not a number";
// } else {
//   voteable = (age < 18) ? "Too young" : "Old enough";
// }

// console.log(voteable);

/**-
 * --------------------------------------------
 * Class #34
 * ----------------------------------------------
 * JavaScript Conditional Statements
 *
 */

// let age = "17";

// age = Number(age);
// if (isNaN(age)) {
//   voteable = "Input is not a number";
// } else {
//   //   voteable = (age < 18) ? "Too young" : "Old enough";
//    if (age < 18) {
//       voteable ="Too young";
//    }else{
//       voteable = "Old enough";
//    }
// }

// console.log(voteable);


/**-
 * --------------------------------------------
 * Class #34
 * ----------------------------------------------
 * JavaScript Switch Statement
 *
 */

//  let day;
// switch (new Date().getDay()) {
//    case 0:
//       day = "Sunday";
//       break;
//    case 1:
//       day = "Monday";
//       break;
//    case 2:
//       day = "Tuesday";
//       break;
//    case 3:
//       day = "Wednesday";
//       break;
//    case 4:
//       day = "Thursday";
//       break; 
//    case 5:
//       day = "Friday";
//       break;
//    case 6:
//       day = "Saturday";
//       break;
//    default:
//       day = "Looking forward to the Weekend";
// }
// console.log(`Today is ${day}`);


/**-
 * --------------------------------------------
 * Class #35
 * ----------------------------------------------
 * JavaScript For Loop
 *
 */

// const  cars = ["A", "B", "C", "D", "E"];

// for(let i = 0; i < cars.length; i++){
//    text = cars[i] + "\n";
//   console.log(text);
// }

