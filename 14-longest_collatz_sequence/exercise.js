/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

1 -> 3*1 + 1 = 4
2 -> 2/2 = 1
3 -> 3*3 + 1 =  10
4 -> 4/2 = 2
5 -> 5*3 + 1 = 16
6 -> 6/2 = 3
7 -> 7*3 + 1 = 22
8 -> 8/2 = 4
9 -> 9*3 + 1 = 28
10 -> 10/2 = 5
11 -> 11*3 + 1 = 34
12 -> 12/2 = 6
13 -> 13*3 + 1 = 40 -> 40/2 = 20 -> 20/2 = 10 -> 10/2 = 5 -> 5*3 + 1 = 16 -> 16/2 = 8 -> 8/2 = 4 -> 4/2 = 2 -> 2/2 = 1   
*/

let next_value;
let max_sequence = 0;

for (let i = 1; i < 2000000; i++) {
    i % 2 == 0
        ? next_value = i / 2
        : next_value = (i * 3) + 1; 
    sequence(i); 
}

function sequence(number) {
    let current = number;
    let count = 0;
    while (current != 1) {
        current % 2 == 0
        ? current = current / 2
        : current = (current * 3) + 1; 
        count++;
    }
    if (count > max_sequence) {
        max_sequence = count;
        console.log(`${number} has a sequence of ${count} elements`);
    } 
}