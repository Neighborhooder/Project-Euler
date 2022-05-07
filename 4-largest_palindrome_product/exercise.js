/*    
    A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

    Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome (n) {
    const nString = String(n);
    for (let index = 0; index < nString.length/2; index++) {
        const firstPart = nString[index];
        const lastPart = nString[(nString.length - 1) - index];
        if (firstPart !== lastPart)
            return false;
    }
    return true;
}

function getHighestPalindromeProduct() {
    let highest = 0;

    for (let i = 999; i > 0; i--) {
        for (let j = 999; j > 0; j--) {
            if (isPalindrome(i * j)) {
                console.log(i * j);
                if (highest < i * j) 
                    highest = i * j;
            }
        }
    }
    return highest;
}

console.log('biggest palindrome: ', getHighestPalindromeProduct());