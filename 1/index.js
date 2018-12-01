const start = Date.now();

const lineByLine = require('linebyline');

const input = [];
let result = 0;

const tally = change => {
  result += change;
};

lineByLine('input.txt')
  .on('line', line => {
    input.push(parseInt(line, 10));
  })
  .on('end', () => {
    input.forEach(number => tally(number));
    console.log(`Finished! Final value is ${result}. Took ${Date.now() - start}ms`);
  })
  .on('error', err => console.error('Error while reading in lines from input.txt', err));

