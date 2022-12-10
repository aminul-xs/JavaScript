// const favMovies = [
//     'Begin Again', 'Soul',
//     ['Matrix', 'Matix Reloaded', 'Matrix Revolutions'],
//     ['Frozen', 'Frozen 2',
//         ['Tangled', 'Alladin']
//     ]
// ]

// let txt = "";
// favMovies.forEach(myFunction);
// favMovies[2].forEach(myFunction);
// favMovies[3].forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value + "\n";
// }
// console.log(txt);
// console.table(favMovies);
// let output = [];
// function arrayTr(array) {
//     array.forEach(element => {
//         if (Array.isArray(element)) {
//             arrayTr(element);
//         } else {
//             output.push(element);
//         }
//     });

//     return output;
// }

// console.log(arrayTr(favMovies));

// let hobbies = [
//     ['Reading', 4],
//     ['Gardening', 2],
//     ['Gaming', 1],
//     ['Painting', 8],
//     ['Cooking', 5]
// ];
// hobbies.push(['Cycling', 6]);
// hobbies.splice(1, 0, ['Singing', 3]);

// for (let i = 0; i < hobbies.length; i++) {
//     var innerArrayLength = hobbies[i].length;
//      for (let j = 0; j < innerArrayLength; j++) {
//         //  console.log('[' + i + ',' + j + '] = ' + hobbies[i][j]);
//     }
// }
// const flatArray = favMovies.flat(Infinity);
// console.log(flatArray);


// console.table(hobbies);
// console.log(hobbies[4][0]);


// function recursive_for(arr){
//    for(var key in arr){
//       if(arr[key] instanceof Array){
//          recursive_for(arr[key]);
//       }else{
//          console.log(arr[key]);
//       }
//    }
// }

// recursive_for(favMovies);


const symmetricDifference = (a, b) => {
   const sA = new Set(a),
      sB = new Set(b);
   return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];

};

// let printB = symmetricDifference([1, 2, 5], [1, 2, 10]);
let printA = symmetricDifference([1, 2, 5, 7], [1, 2, 5, 8]);

console.log(` Print A ${printA}`);




(function ($) {
   'use strict';

   var imJs = {
      m: function (e) {
         imJs.d();
         imJs.methods();
      },
      d: function (e) {
         this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
      },
      methods: function (e) {
         imJs.backToTopInit();
      },
      // done

      backToTopInit: function () {
         $(document).ready(function () {
            "use strict";

            var progressPath = document.querySelector('.progress-wrap path');
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            var updateProgress = function () {
               var scroll = $(window).scrollTop();
               var height = $(document).height() - $(window).height();
               var progress = pathLength - (scroll * pathLength / height);
               progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();
            $(window).scroll(updateProgress);
            var offset = 50;
            var duration = 550;
            jQuery(window).on('scroll', function () {
               if (jQuery(this).scrollTop() > offset) {
                  jQuery('.progress-wrap').addClass('active-progress');
               } else {
                  jQuery('.progress-wrap').removeClass('active-progress');
               }
            });
            jQuery('.progress-wrap').on('click', function (event) {
               event.preventDefault();
               jQuery('html, body').animate({ scrollTop: 0 }, duration);
               return false;
            })

         });

      },
   }
   imJs.m();
})(jQuery, window)
