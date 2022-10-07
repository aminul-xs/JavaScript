const sortArray = (array) => {
    let temp = false;
    for (let index = 0; index <= array.length; index++) {
        for (let sub = index; sub <= array.length; sub++) {
            /**
             * Descending means largest to smallest - for example 9 to 0 or Z to A
             *  Print the Descending order
             */

            if (array[sub] >= array[index]) {
                resultStore();
            }

            /**
             * Ascending means smallest to largest - for example 0 to 9 or A to Z
             * Print the Ascending order
             */

            if (array[sub] <= array[index]) {
                resultStore();
            }

            function resultStore() {
                temp = array[sub];
                array[sub] = array[index];
                array[index] = temp;
            }
        }
    }
    return array;
};

let string = "herea";
const usingSpread = [...string]; // string to array convert
const Result = sortArray(usingSpread); // Array Descending or Ascending stores
let result = Result.join("");
console.log(result);
