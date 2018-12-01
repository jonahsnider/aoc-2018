const start = Date.now();

const lineByLine = require('linebyline');
const { oneLine } = require('common-tags');

const input = [];
let result = 0;
let index = 0;
const seen = [0];
let twice = 'g';

const tally = change => {
  index++;

  result += change;

  console.log(oneLine`
    [${index}] Current frequency \`${result - change}\`,
    change of ${change};
    resulting frequency of ${result}`);

  if (seen.includes(result) && twice === 'g') {
    twice = result;
    console.log(`First value reached twice is ${twice}.`);
  } else {
    seen.push(result);
  }
};

lineByLine('input.txt')
  .on('line', line => {
    input.push(parseInt(line, 10));
  })
  .on('end', () => {
    // eslint-disable-next-line no-unmodified-loop-condition
    while (twice === 'g') {
      input.forEach(number => tally(number));
    }
    console.log(`Finished! First value reached twice is ${twice}. Took ${Date.now() - start}ms`);
  })
  .on('error', err => console.error('Error while reading in lines from input.txt', err));

