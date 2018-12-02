const { readFileSync } = require('fs');

// module.exports = (file = 'input.txt') => {
module.exports = (file = 'input.txt') => {
  const lines = readFileSync(file, 'utf-8').split('\n');

  let final = '';
  let differentIndex;

  // lines.forEach(cur => {
  for (let i = 0; i < lines.length - 1; i++) {
    if (final) break;

    const cur = lines[i];

    for (let j = lines.indexOf(cur) + 1; j < lines.length; j++) {
      const next = lines[j];
      let matches = 0;

      for (let k = 0; k < cur.length; k++) {
        if (cur[k] !== next[k]) {
          differentIndex = k;
          matches++;
          if (matches > 1) break;
        }
      }

      if (matches === 1) {
        for (let l = 0; l < cur.length; l++) {
          if (l === differentIndex) continue;
          final += cur[l];
        }
        break;
      }
    }
  }

  return final;
};
