/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

for (let i = 500; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        for (let k = j; k > 0; k--) {
            if ((k + j + i === 1000) && ((k * k) + (j * j) === (i * i))) {
                console.log("Encontrei!!");
                console.log(`a: ${i}, b: ${j}, c: ${k}`);
                break;
            }
        }
    }
}