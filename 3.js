
import calculatedPrimes from './prime.json' assert {type: "json"}
import fs from 'fs';

const lff = 1e5;

// warning: this will error if there is no `prime.json`
// due to this function have NOT handled error about file system yet
const findNPrime = (n) => {
    let primes = calculatedPrimes;

    // look up if possible
    if (primes.length >= n - 1) {
        return primes[n - 1];
    }

    // set few initial-known-prime
    if (primes.length < 2) {
        primes = [2, 3];
    }

    let number = primes.at(-1) + 2;
    while (primes.length < n) {
        let isPrime = true;

        if (isPrime) {
            const root = parseInt(number ** 0.5 + 1, 10);
            for (const prime of primes) {
                if (prime > root) break;
                if (number % prime == 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primes.push(number);
        }

        
        // uncommend this below log to see progress when program is running
        // you might change tt factor to adjust log frequency
        !isPrime && number % lff == 1 && console.log(`${number} is not prime`);

        number += 2;
    }

    // write all primes we have calculated to file
    // to store answer to avoid unnecessary repeatly calculation
    fs.writeFileSync('./prime.json', `[${primes.join(',')}]`);
    return primes.at(-1);
};

console.log(findNPrime(2000));
console.log(findNPrime(50000));
console.log(findNPrime(1000000));
console.log(findNPrime(20000000));

// the 2,000 prime is 17389
// the 50,000 prime is 611953
// the 1,000,000 prime is 15485863
// the 20,000,000 prime is 373587883
