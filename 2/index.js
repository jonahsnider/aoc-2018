const checksumFn = require('./checksum');
const idsFn = require('./ids');

const file = 'input.txt';

const { checksum, twice, thrice } = checksumFn(file);

console.log('Checksum:', checksum);
console.log('Twice occurrences:', twice);
console.log('Thrice occurrences:', thrice);

const common = idsFn(file);

console.log('Common letters:', common);
