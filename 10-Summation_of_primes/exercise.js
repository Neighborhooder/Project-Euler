/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

let primes = [];
let sum = 1;

function isPrime (n) {
    for (let index = 0; index < primes.length; index++) {
        const prime = primes[index];
   
        if (n % prime === 0) {
            return false
        }
            
    }
    return true;
}

function findAllPrimes (n) {
    let actual = 2;
    while ( actual < n ) {
        if (actual > 2000000) break;
        if (isPrime(actual)){
            if (primes !== undefined) {
                primes.push(actual)
                sum = primes.reduce((partialSum, a) => partialSum + a, 0);
                console.log(actual);
                console.log('sum: ' , sum)
            }             
        }          
        actual++;
    }
}


findAllPrimes(5000000);