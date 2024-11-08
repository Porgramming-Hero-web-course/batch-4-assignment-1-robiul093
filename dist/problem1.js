"use strict";
{
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    function sumArray(arr) {
        const sum = arr.reduce((total, currentNumber) => {
            return total + currentNumber;
        }, 0);
        return sum;
    }
    console.log(sumArray([1, 2, 3, 4,]));
}
