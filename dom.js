/**-
* --------------------------------------------
* Class #86
* ----------------------------------------------
* JavaScript dom inro
*
*/

// const x = document.forms["frm1"];

// console.dir(x);
// let text = "";
// for (let i = 0; i < x.length; i++) {
//     text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;



// console.dir("The title of this document is: " + document.title);


/**-
* --------------------------------------------
* Class #90
* ----------------------------------------------
* JavaScript dom inro
*
*/


// const doms = document.getElementById("myImage")
// // doms.src = 'landscape.jpg'
// console.dir(doms);


/**-
* --------------------------------------------
* Class #9\1
* ----------------------------------------------
* JavaScript form
*
*/

// function validateForm() {
//     const form = document.forms['myForm'];
//     const value = form["fname"].value;

//     if (value === '') {
//         alert('You Must type Name')
//         return false
//     }

// }



/**-
* --------------------------------------------
* Class #95
* ----------------------------------------------
* JavaScript form
*
*/

// document.getElementById("myBtn").addEventListener("mouseover", displayDate);

// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }


/**-
* --------------------------------------------
* Class #96
* ----------------------------------------------
* JavaScript form
*
*/

// let myTitle = document.getElementById("demo").childNodes[4].cloneNode

// console.log(myTitle);

/**
* --------------------------------------------
* Class #97
* ----------------------------------------------
* JavaScript form
*
*/


// const pera = document.createElement('p');
// const node = document.createTextNode('Hello World');
// pera.appendChild(node); // <p> </p> tag create kora holo

// const element = document.getElementById('demo_one');
// const child = document.getElementById('p2');
// // element.appendChild(pera)

// element.insertBefore(pera, child);


//



// api url
// const apiUrl = "http://openapi.programming-hero.com/api/course/curriculum";

// async function dataCollection(url) {
//     // read our JSON
//     const apiResponse = await fetch(url);
//     const jasonData = await apiResponse.json();
//     return jasonData.data;
// }
// const courseData = dataCollection(apiUrl).then(result => {
//     return result;
// });

