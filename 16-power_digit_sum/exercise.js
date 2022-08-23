/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

const power = Math.pow(2, 1000);

let sum = 0;

for (let index = 0; index < (BigInt(power).toString()).length; index++) {
    const element = Number(BigInt(power).toString()[index]);
    console.log(element);
    sum += element;
}

console.log(sum);
console.log(BigInt(power));