const { readFileSync } = require('fs');

module.exports = (file = 'input.txt') => {
  const lines = readFileSync(file, 'utf-8').split('\n');
  let count = 0;
  const claims = new Map();

  lines.forEach(line => {
    if (line) {
      const parsed = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/.exec(line);

      const number = parseInt(parsed[1], 10);
      const coords = {
        x: parseInt(parsed[2], 10),
        y: parseInt(parsed[3], 10)
      };
      const dimensions = {
        width: parseInt(parsed[4], 10),
        height: parseInt(parsed[5], 10)
      };

      claims.set(number, {
        coords,
        dimensions
      });
    }
  });

  claims.forEach(claim => {
    count += 1;
  });

  return count;
};
