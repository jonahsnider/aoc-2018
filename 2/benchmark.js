const checksum = require('./checksum');
const ids = require('./ids');
const { Suite } = require('benchmark');
const suite = new Suite();

suite
  .add('Calculate checksum', checksum)
  .add('Find correct IDs', ids)
  .on('cycle', event => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`Fastest is ${suite.filter('fastest').map('name')}`);
  })
  .run({ async: true });

