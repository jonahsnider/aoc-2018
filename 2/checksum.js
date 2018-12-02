const { readFileSync } = require('fs');

module.exports = (file = 'input.txt') => {
  const lines = readFileSync(file, 'utf-8').split('\n');

  let twice = 0;
  let thrice = 0;

  lines.forEach(string => {
    const count = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0
    };

    // Count how many times each letter appears
    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      count[char] = (count[char] || 0) + 1;
    }

    let foundTwice = false;
    let foundThrice = false;

    for (const occurrences in count) {
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

  return {
    checksum,
    twice,
    thrice
  };
};
