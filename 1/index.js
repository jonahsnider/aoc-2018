const lineByLine = require('linebyline');
let result = 0;

lineByLine('input.txt')
  // Each line read triggers this event
  .on('line', change => {
    result += parseInt(change.replace('+', ''), 10);
  })
  // When all lines have been read this event is triggered
  .on('end', () => {
    console.log(`Finished! Final value is ${result}`);
  })
  .on('error', err => console.error('Error while reading in lines from input.txt', err));
