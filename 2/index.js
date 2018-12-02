const checksumFn = require('./checksum');
const idsFn = require('./ids');
const { join } = require('path');

const file = join(__dirname, 'input.txt');

const start = Date.now();

const { checksum, twice, thrice } = checksumFn(file);

const end = Date.now() - start;

console.log(`Checksum (took ${end}ms):`, checksum);
console.log('Twice occurrences:', twice);
console.log('Thrice occurrences:', thrice);

const common = idsFn(file);

console.log('Common letters:', common);
