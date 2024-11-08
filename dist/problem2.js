"use strict";
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
function removeDuplicates(arr) {
    const uniqueArray = [...new Set(arr)];
    return uniqueArray;
}
console.log(removeDuplicates([1, 2, 3, 2, 3, 4, 5, 5, 4]));
