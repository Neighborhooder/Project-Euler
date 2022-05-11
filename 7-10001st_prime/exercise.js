/*
    By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

    What is the 10 001st prime number?
*/

let primes = [];
let found = false;
let counter = 0;
let n = 1;

function findPrimes() {
    for (let val = 1; counter < 10002; val++) {
        for (let j = val - 1; j > 1; j--) {
            if (val % j === 0) {    
                    found = false;
                    break;
                }         
            found = true;        
        }
        if (found === true){
            counter++;
            console.log(counter + ' - ' + val);
        }
            
    }   
}
findPrimes();







// function isPrime (n) {
//     for (let index = 0; index < primes.length; index++) {
//         const prime = primes[index];
   
//         if (n % prime === 0) {
//             console.log(n);
//             return false
//         }
            
//     }
//     return true;
// }

// function findAllPrimes (n) {
//     let actual = 2;
//     while ( actual < n ) {
        
//         if (isPrime(actual))
//             primes.push(actual)
//         actual++;
//     }
// }


// function findPrime() {
//     while (!found) {        
//         if (isPrime(counter))
//             counter++;
//         if (counter === 1001)
//             found = true;
//         n++;      
//     }    
// }
// findAllPrimes(300);

// console.log(findPrime())