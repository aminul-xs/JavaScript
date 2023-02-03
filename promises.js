
/**-
* --------------------------------------------
* Class #81
* ----------------------------------------------
* JavaScript Callbacks
*
*/

// function myDisplayer(some) {
//     console.log(some);
// }

// function myCalculator(num1, num2, callback) {
//     let sum = num1 + num2;
//     if (callback) callback(sum)

//     return sum
// }

// let result = myCalculator(5, 5);


// myDisplayer(result);



/**-
* --------------------------------------------
* Class #82
* ----------------------------------------------
* Asynchronous JavaScript
*
*/


// setTimeout(function() { myFunction("I love You !!!"); }, 3000);

// function myFunction(value) {
//     ;console.log(value);
// }


/**-
* --------------------------------------------
* Class #83
* ----------------------------------------------
* JavaScript callback function
*
*/


// const paymentSuccess = true;
// const marks = 91;

// function enroll(callbacke) {
//     console.log('Course enrollment is in progress');

//     setTimeout(function () {
//         if (paymentSuccess) {
//             callbacke();
//         } else {
//             console.log('Payment Failed');
//         }
//     }, 2000)
// }


//    function progresss(callback) {
//     console.log('Course on Progress .......');
//     setTimeout(function () {
//     if (marks >= 80) {
//          callback()
//     } else {
//         console.log('You could get enough marks to get the certificated')
//     }
//     }, 5000)
// }

// function getCertificated(callback) {
//     console.log('Preparing your certificate');

//     setTimeout(function () {
//         if (marks >= 90) {
//             callback();
//         } else {
//             console.log('Congress!, You got the certificate');
//         }

//     }, 1000)
// }

// function readyToInternship() {
//     console.log('Process your internship .....');

//     setTimeout(function () {
//         console.log('Congress.!, You are selected 6 month internship');
//     }, 500)
// }



// enroll(function () {
//     progresss(function () {
//         getCertificated(function () {
//             readyToInternship()
//         })
//     })
// });
// progresss(getCertificated);
// getCertificated()



/**-
* --------------------------------------------
* Class #84
* ----------------------------------------------
* JavaScript Promises
*
*/

// console.log('task 1');

// let promise = new Promise(function (resolve, reject) {
//     let x = 1;

//     // The producing code (this may take some time)
//     setTimeout(function () {
//         if (x == 0) {
//             resolve("Task 2");
//         } else {
//             reject("Error");
//         }
//     }, 2000);
// });

// promise.then(
//     function (value) {
//         console.log(value);
//     },
//     function (error) {
//         console.log(error);
//     }
// );
// console.log('Task 3');



// const paymentSuccess = false;
// const marks = 91;

// function enroll() {
//     console.log('Course enrollment is in progress');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (paymentSuccess) {
//                 resolve();
//             } else {
//                 reject('Payment Failed');
//             }
//         }, 2000)
//     });
//     return promise;
// }


// function progresss() {
//     console.log('Course on Progress .......');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 80) {
//                 resolve()
//             } else {
//                 reject('You could get enough marks to get the certificated')
//             }
//         }, 5000)
//     });

//     return promise;
// }

// function getCertificated() {
//     console.log('Preparing your certificate');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 90) {
//                 resolve();
//             } else {
//                 reject('Congress!, You got the certificate');
//             }

//         }, 1000)
//     });
//     return promise;
// }

// function readyToInternship() {
//     console.log('Process your internship .....');

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve('Congress.!, You are selected 6 month internship');
//         }, 500)
//     });
//     return promise;

// }


// enroll()
//     .then(progresss)
//     .then(getCertificated)
//     .then(readyToInternship)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })



/**-
* --------------------------------------------
* Class #85
* ----------------------------------------------
* JavaScript Asynchronous 
*
*/


// const paymentSuccess = false;
// const marks = 91;

// function enroll() {
//     console.log('Course enrollment is in progress');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (paymentSuccess) {
//                 resolve();
//             } else {
//                 reject('Payment Failed');
//             }
//         }, 2000)
//     });
//     return promise;
// }


// function progresss() {
//     console.log('Course on Progress .......');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 80) {
//                 resolve()
//             } else {
//                 reject('You could get enough marks to get the certificated')
//             }
//         }, 5000)
//     });

//     return promise;
// }

// function getCertificated() {
//     console.log('Preparing your certificate');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 90) {
//                 resolve();
//             } else {
//                 reject('Congress!, You got the certificate');
//             }

//         }, 1000)
//     });
//     return promise;
// }

// function readyToInternship() {
//     console.log('Process your internship .....');

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve('Congress.!, You are selected 6 month internship');
//         }, 500)
//     });
//     return promise;
// }

// async function course() {
//     try {
//         await enroll();
//         await progresss();
//         await getCertificated();
//         const massage = await readyToInternship();
//         console.log(massage);

//     } catch (error) {
//         console.log(error);
//     }

//     // await enroll();
//     // await progresss();
//     // await getCertificated();
//     // const massage = await readyToInternship();
//     // console.log(massage);
// }
// course();

