/**-
 * --------------------------------------------
 * Problem Solving #01
 * ----------------------------------------------
 * লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যার রেন্ডম নাম্বার প্রিন্ট করতে পারি ?
 *
 */

// function getRandomNumber(min, max) {
//    return Math.floor(Math.random() * (max + min + 1)) + min;
// }
// console.log(getRandomNumber(1, 6));

/**-
 * --------------------------------------------
 * Problem Solving #02
 * ----------------------------------------------
 * কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম আলফাবেটিক্যালি সাজাতে পারি ?
 *
 */

// const students = [
//   "Harry",
//   "Ross",
//   "Bruce",
//   "Cook",
//   "Carolyn",
//   "Morgan",
//   "Albert",
//   "Walker",
//   "Randy",
//   "Reed",
//   "Larry",
//   "Barnes",
//   "Lois",
//   "Wilson",
//   "Jesse",
//   "Campbell",
//   "Ernest",
//   "Rogers",
//   "Theresa",
//   "Patterson",
//   "Henry",
//   "Simmons",
//   "Michelle",
//   "Perry",
//   "Frank",
//   "Butler",
//   "Shirley",
// ];
// students.sort();
// console.log(students);



/**-
 * --------------------------------------------
 * Problem Solving #03
 * ----------------------------------------------
 * কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের রোল নাম্বার ক্রোম অনুযায়ী  সাজাতে পারি ?
 *
 */
// const rollNumber = [1, 2, 4, 23, 7, 39, 19, 0, 9, 14, 3]

// function getRollNumber(a , b) {
//    return a - b
// }
// let result = rollNumber.sort(getRollNumber)

// console.log(result);

// console.log(rollNumber);


/**-
 * --------------------------------------------
 * Problem Solving #04
 * ----------------------------------------------
 * কোন সাল লিপ ইয়ার কিনা তা বের করতে পারি কিভাবে ?
 *
 */

// function isLeapYear(year) {
//    if ((year % 400 === 0) || ((year % 4 === 0 ) && (year % 100 !== 0))) {
//       console.log(`${year} is a leap year!`);
//    }else{
//       console.log(`${year} is a not leap year!`);
//    }
// }
// isLeapYear(2027);


/**-
 * --------------------------------------------
 * Problem Solving #05
 * ----------------------------------------------
 * কোন সেন্টেন্স এ কতগুলো ভয়াল আছে তা নির্ণয় করা যায় কিভাবে ??
 *
 */

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
// function isCountOfVowels(sentence) {
//    // let count = 0;
//    const letters = Array.from(sentence)

//    letters.forEach(function (value) { 
//       if (vowels.includes(value)) {
//         console.log(value);
//       }  
//     })
//    //  return count;
// }

// let vowelsResult = isCountOfVowels("JavaScript Program to Count the Number of Vowels in a String")
// // console.log(vowelsResult);





/**-
 * --------------------------------------------
 * Problem Solving #06
 * ----------------------------------------------
 * আমরা কিভাবে ডুপ্লিকেট নাম্বার বের করে আনতে পারি ?
 *
 */

// const numbers = [1, 3, 3, 5 ,4 ,4, 6, 7,8, 10, 40, 40]

// const duplicates = numbers.filter(function (duplicate, index, array) { 
//    return array.indexOf(duplicate) !== index;
//  })

//  console.log(duplicates);


 /**-
 * --------------------------------------------
 * Problem Solving #07
 * ----------------------------------------------
 * আমরা কিভাবে uqniq নাম্বার বের করে আনতে পারি ?
 *
 */
//   const numbers = [1, 3, 3, 5 ,4 ,4, 6, 7,8, 10, 40, 40]

//   const duplicates = numbers.filter(function (duplicate, index, array) { 
//      return array.indexOf(duplicate) === index;
//    })
  
//    console.log(duplicates);

// const btn = document.getElementById("btn")
// btn.addEventListener("click", ()=>{
//    const musicTypes = document.selectForm.musicTypes
// })



 /**-
 * --------------------------------------------
 * Problem Solving #08
 * ----------------------------------------------
 * কিভাবে dynamically জাভাস্ক্রিপ্টে প্রেমিক বা বান্ধবী প্রেমময় উত্তর খুঁজে পেতে পারি ?
 *
 */


// let girlFriendFastName = "x";
// let girlFriendLastName = "y";

// let boyFriendFastName = "a";
// let boyFriendLastName = "z";

 
// const girlFriendFullName = girlFriendFastName + " " + girlFriendLastName;
// const boyFriendFullName = boyFriendFastName + " " + boyFriendLastName;



// const girlFriendFullName = "x";
// const boyFriendFullName = "y";

// const love = ["I", "LOVE", "YOU"];
// const noLove = ["I", "DON'T", "LOVE", "YOU"];


// // A boyfriend wants the girl to love me and respect the boyfriend a lot

// function boyFriendLoveResult() {
//    let isProposalSpecial = "";
//    love.forEach(isProposal);

//    function isProposal(loveResult) {
//       isProposalSpecial += loveResult + " "; 
//    }

//    isProposalAccept = isProposalSpecial + boyFriendFullName.toUpperCase();
//    console.log(isProposalAccept);
// }

// // A girlfriend wants the boy to leave my life, and remove the boy from life forever.

// function girlFriendLoveResult() {
//    let isProposalNoSpecial = "";
//    noLove.forEach(isProposal);

//    function isProposal(loveResult) {
//       isProposalNoSpecial += loveResult + " "; 
//    }

//    isProposalRejected = isProposalNoSpecial + girlFriendFullName.toUpperCase();
//    console.log(isProposalRejected);
// }


// // What can be the condition dynamically?
// // What could be the dynamic condition of [ if and else]?

// if (boyFriendFullName) {

//    girlFriendLoveResult()

   
// } else {

//    boyFriendLoveResult()

// }

