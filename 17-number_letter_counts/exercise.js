/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}

let current;
let total = '';

for (let index = 1; index <= 1000; index++) {
    if (index < 21)
        current = numbers[index];
    else if (index > 20 && index < 100)
        if (index.toString()[1] === '0') {
            current = numbers[index];
        } else  {
            current = numbers[Number(index.toString()[0] + '0')] 
            +
            numbers[index.toString()[1]];
        }
    else if (index >= 100 && index < 1000) {
        if (index.toString()[1] === '0' && index.toString()[2] === '0'){
            current = numbers[index.toString()[0]] + 'hundred';
        } else if (Number(index.toString()[1] + index.toString()[2]) > 20) {
            if (index.toString()[2] === '0') {
                current = numbers[index.toString()[0]] + 'hundredand' + numbers[Number(index.toString()[1] + index.toString()[2])]
            }
            else {              
                current = numbers[index.toString()[0]] + 'hundredand' + numbers[Number(index.toString()[1] + '0')] 
                +
                numbers[index.toString()[2]];
            }
        }
        else {
            current = numbers[index.toString()[0]] + 'hundredand' + numbers[Number(index.toString()[1] + index.toString()[2])];
        }
    } else {
        current = 'onethousand';
    }
    total+= current;
    console.log(current);        
}
//console.log(total);
console.log(total.length);