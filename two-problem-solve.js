
/**-
 * --------------------------------------------
 * Problem Solving #01
 * ----------------------------------------------
 * নিচের সেন্টেন্স এ "aminul " শব্দটি ব্যবহার করা হয়েছে? এবং কত নাম্বার পসিশন এ পাওয়া গেছে ?
 *
 */

// const sentence = `I am Aminul Islam with a passionate Front-end software Engineer and working with a few languages like JavaScript, 
// react, PHP etc. My (Aminul Islam) main area of working is WordPress related, worked on developing premium themes and plugins.
// Currently working with a strong and expert team who are working in a "Gutenberg WooCommerce Builder Blocks for ShopEngine" plugins.`;



// const matches = sentence.match(/Aminul/gi);
// const occurances = matches ? matches.length : 0;


// let position = sentence.search(/Aminuls/i)
// position = position >= 0 ? position : "Not found"
// console.log(position);



/**-
 * --------------------------------------------
 * Problem Solving #02
 * ----------------------------------------------
 * input : linear Search(['a', 'b', 'c', 'd', 'c'], 'c')
 * output: 2 or "not Found"
 * Problem: linearSearch() function টি ইম্প্লিম্মেন্ট করে দেখান 
 */


// function linearSearch(arr, val){
//    const lengths = arr.length;
//    for (let index = 0; index < lengths; index++) {

//       if (arr[index]=== val) {
//          return index;
//       }
//    }
//    return "Not Found";
// }

// console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'd'));


/**-
 * --------------------------------------------
 * Problem Solving #03
 * ----------------------------------------------
 * কোনো array  থেকে কি ভাবে সব থেকে বোরো string খুঁজে বের করবেন এবং ইনডেক্স নম্বর কত ?
 * 
 */

// function longSentence(names){

//   let longWord = "";
//   for (const name of names) {
//    if (name.length > longWord.length) {
//       longWord = name;
//    }
//   }
//   return [longWord, names.indexOf(longWord)];
// }

// console.log(longSentence(['Aminul', 'Sahas', 'আমিনুল ইসলাম', 'আমিনা বিনতে আলম', 'Jaakir', 'Arafat Hasan']));



/**-
 * --------------------------------------------
 * Problem Solving #04
 * ----------------------------------------------
 * ১-১০০ পযন্ত কোন গুল ৩, ৫, এবং ৩ ও ৫ ঊভয় সংখ্যা দারা বিভাজ্য তা বের করুন।
 * 
 */

// function fizzBuss(number) {
//    for (let index = 1; index <= number; index++) {
//       if (index % 15 === 5) {
//          console.log(`${index} is FizzBuzz`);
//       } else if (index % 5 === 0) {
//          console.log(`${index}is Buzz`);
//       } else if (index % 3 === 0) {
//          console.log(`${index} is Fizz`);
//       } else {
//          console.log(index);
//       }
//    }
// }

// fizzBuss(20)




/**-
 * --------------------------------------------
 * Problem Solving #0৫
 * ----------------------------------------------
 * array থ্বেকে falsy value কিভাবে খুজে বের করে বাদ দিতে পারি?
 * 
 */


// const mixedArray = [
//    "Lws",
//    undefined,
//    "Code of Aminul",
//    false,
//    "",
//    "Apple",
//    40,
//    "Kasem Talukder",
//    true,
//    "Thanks All",
//    NaN,
//    0
// ]


// const trueArray = mixedArray.filter(function(el){
//    if (el) {
//       return true;
//    } else {
//       return false;
//    }

// })

// const trueArray = mixedArray.filter(Boolean)

// console.log(trueArray);


/**-
 * --------------------------------------------
 * Problem Solving #06
 * ----------------------------------------------
 * Object থ্বেকে falsy value কিভাবে খুজে বের করে বাদ দিতে পারি?
 * 
 */

// const mixedObject = {
//   a: "Lws",
//   b: undefined,
//   c: "Code of Aminul",
//   d: false,
//   e: "",
//   f: "Apple",
//   g: 40,
//   h: "Kasem Talukder",
//   i: true,
//   j: "Thanks All",
//   k: NaN
// }


// const trueObject = function(obj){
//    for (const key in obj) {
//       if (!obj[key]) {
//         delete obj[key]
//       }
//    }
//    return obj;

// }

// console.log(trueObject(mixedObject));


/**-
 * --------------------------------------------
 * Problem Solving #07
 * ----------------------------------------------
 * Daimonf Print Solve
 * 
 */

// // Prints diamond pattern with 2n rows
// function printDiamond(value) {
//    let number = value;
//    let space = " ";

//    // Upside pyramid
//    for (let fast_index = 1; fast_index <= number; fast_index++) {
//      // printing spaces
//      for (let j = number; j > fast_index; j--) space += " ";

//      // printing star
//      for (let k = 0; k < fast_index - 1; k++) space += " *";
//      space += "\n";
//    }

//    // downside pyramid
//    for (let fast_index = 1; fast_index <= number - 1; fast_index++) {
//      // printing spaces
//      for (let j = 0; j < fast_index; j++) space += " ";

//      // printing star
//      for (let k = (number - fast_index) - 1; k > 0; k--) space += " *";

//      space += "\n";
//    }
//    console.log(space);

//  }

//  //Your Limited number
//  printDiamond(5)


/**-
 * --------------------------------------------
 * Problem Solving #08
 * ----------------------------------------------
 * string to array convert and lowercase print
 * 
 */


// const lettersDuplicates = (string) => {

//    let convertLetters = Array.from(string.toLowerCase());
//    convertLetters.sort();



//    let numberOfLetters = []

//    for (let index = 0; index < convertLetters.length; index++) {
//      const lettersValue = convertLetters[index];
//      const numLetters = convertLetters.filter((val) => val === lettersValue ).length;
//    //   const results = [
//    //     lettersValue,
//    //     numLetters,
//    //   ];
//    //   numberOfLetters.push(results);
//      numberOfLetters.push(lettersValue + " : " + numLetters);
//      index += numLetters - 1;


//    }
//    console.log(numberOfLetters);

//    return numberOfLetters;

//  };

//  let duplicateResult = lettersDuplicates("lettersDuplicates");
//  document.getElementById('demo').innerHTML = duplicateResult;

//  console.log(duplicateResult);



