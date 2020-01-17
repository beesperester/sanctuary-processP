const { evaluateP, env } = require('sanctuary-mapp');

const tests = [
  (x => x + 1)
];

evaluateP(tests)(1).then(console.log);