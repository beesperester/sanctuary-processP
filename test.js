const { mapP, env } = require('sanctuary-mapp');

const tests = [
  (x => x + 1)
];

mapP(tests)(1).then(console.log);