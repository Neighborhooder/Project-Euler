/*
    The sum of the squares of the first ten natural numbers is,
    1^2 + 2^2 + ... + 10^2 = 385

    The square of the sum of the first ten natural numbers is,
    ( 1 + 2 + ... + 10)^2 = 55^2 = 3025

    Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
    3025 - 385 = 2640

    Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

let sumOfSquares = 0;
let squareOfSums = 0;

for (let i = 1; i <= 100; i++) {
    sumOfSquares += Math.pow(i, 2);
}

for (let j = 1; j <= 100; j++) {
    squareOfSums += j;
}

squareOfSums = Math.pow(squareOfSums, 2);

const difference = squareOfSums - sumOfSquares;

console.log(sumOfSquares);
console.log(squareOfSums);
console.log('difference:', difference);


