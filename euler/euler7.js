"use strict";
function nthPrime(number) {
    if (number === 1) {
        return 2; //special case handled only here
    }

    let count = 2;
    let prime = 3;
    while (count < number) {
        prime = nextPrime(prime);
        count++;
    }
    // Good luck!
    return prime;
}

function nextPrime(n) {
    let next = nextOddNumber(n);

    while (true) {
        const ceiling = nextOddNumber(Math.floor((Math.sqrt(next)))); //FIXME: HOW TO CHAIN IN A BETTER WAY ??
        let i;
        for (i = ceiling; i > 1; i -= 2) {
            if (next % i === 0) {
                break;
            }
        }
        if (i === 1) {
            return next;
        }
        next += 2;
    }
}

const nextOddNumber = (n) => n % 2 === 0 ? n + 1 : n + 2;

console.time('time');
let result = nthPrime(10001); //104743
console.log(result);
console.timeEnd('time');

//const ceiling = nextOddNumber(Math.floor((Math.sqrt(5455)))); //FIXME: HOW TO CHAIN IN A BETTER WAY 
const ceiling = Math.sqrt(5455); //FIXME: HOW TO CHAIN IN A BETTER WAY 
console.log(ceiling);