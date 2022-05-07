/*
    The prime factors of 13195 are 5, 7, 13 and 29.

    What is the largest prime factor of the number 600851475143 ?
*/
let primes = [];

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
        
        if (isPrime(actual))
            primes.push(actual)
        actual++;
    }
}

function maxPrimeFactor(n) {
    let maxPrime = -1;
    while(n % 2 == 0) {
        n = n / 2;
        maxPrime = 2;
    }
 
    while(n % 3 == 0) {
        n = n / 3;
        maxPrime = 3;
    }
 
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        while (n % i == 0) {
            maxPrime = i;
            n = n / i;
        }
        while (n % (i + 2) == 0) {
            maxPrime = i + 2;
            n = n / (i + 2);
        }
    }
     
    return n > 4 ? n : maxPrime;
}
 

//findAllPrimes(600851475143);
console.log(maxPrimeFactor(600851475143));
// 600851475143
//console.log(primes[primes.length - 1]);