const file = 'input.txt';

const { readFileSync } = require('fs');

const lines = readFileSync(file, 'utf-8').split('\n');

let twice = 0;
let thrice = 0;

lines.forEach(string => {
  const count = new Map();

  // Count how many times each letter appears
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);

    count.set(char, (count.get(char) || 0) + 1);
  }

  let foundTwice = false;
  let foundThrice = false;

  for (const occurrences of count.values()) {
    if (occurrences === 2 && !foundTwice) {
      twice++;
      foundTwice = true;
    }

    if (occurrences === 3 && !foundThrice) {
      thrice++;
      foundThrice = true;
    }
  }
});

const checksum = twice * thrice;

console.log('Finished! Checksum:', checksum);
console.log('Twice occurrences:', twice);
console.log('Thrice occurrences:', thrice);
