/*
    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function dividedByAll (n) {
    for (let i = 1; i < 20; i++){
        if (n % i !== 0){
            return false;
        } else
        console.log(n + ' is divided by: ' + i);
    }
    return true;
}

function smallest(n) {
    while (true) {
        if (n > 0) {
            if (dividedByAll(n)) 
            return n;
        }
        n = n + 20;    
    }
}

console.log(smallest(0));
