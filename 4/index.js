const sleepyFn = require('./sleepy');
const { join } = require('path');

const file = join(__dirname, 'input.txt');

const start = Date.now();
const sleepy = sleepyFn(file);
const end = Date.now() - start;

console.log(`Sleepiest guard (took ${end}ms):`, sleepy);
