const lineByLine = require('linebyline');
let result = 0;
const seen = [0];
let twice;

lineByLine('input.txt')
  // Each line read triggers this event
  .on('line', frequency => {
    const change = parseInt(frequency, 10);
    result += change;

    if (seen.includes(change) && !twice) {
      twice = change;
    }

    seen.push(change);
  })
  // When all lines have been read this event is triggered
  .on('end', () => {
    console.log(`Finished! Final value is ${result}. First value reached twice is ${twice}`);
  })
  .on('error', err => console.error('Error while reading in lines from input.txt', err));
