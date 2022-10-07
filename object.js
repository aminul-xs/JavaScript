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
 * JavaScript Object Display
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
 * JavaScript Object Display
 *
 */


// Write Javascript code here
// var arr = [
//     { name: "ram", age: "20" },
//     { name: "sam", age: "21" },
//     { name: "tom", age: "19" },
//     { name: "harry", age: "19" }
// ];
  
// var index;

// arr.some(function (entry, i) {
//     if (entry.name == "ram") {
//         index = i;
//         return true;
//     }
// });
  
// console.log(index);


let number = [12, 13, 14, 15, 16];


// let largest = number.sort((a, b) => a - b).reverse()[0];
// console.log(largest);


function checkPalindrome(inputString) {
    if(inputString.length == 1){
        return true;
    }else{
        var i = 0;
        var j = inputString.length -1;
        while(i < j){
            if(inputString[i] != inputString[j]){
                return 'No';
            }
            i++;
            j--;
        }
    }
    return 'Yes';
}

console.log(checkPalindrome('number'));
console.log(checkPalindrome('rebmun'));
console.log(checkPalindrome('noon'));
console.log(checkPalindrome('moom'));

