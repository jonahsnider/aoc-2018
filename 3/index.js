const nearbyFn = require('./nearby');
const { join } = require('path');

const file = join(__dirname, 'input.txt');

const start = Date.now();
const nearby = nearbyFn(file);
const end = Date.now() - start;

console.log(`Nearby fabric (took ${end}ms):`, nearby);
