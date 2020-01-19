# sanctuary-processP
Adds synchronous and async / await process functionality to sanctuary. A process waits for all of its tasks to be finished.

[![Actions Status](https://github.com/beesperester/sanctuary-processP/workflows/Node.js%20Package/badge.svg?branch=master)](https://github.com/beesperester/sanctuary-processP/actions)
[![Actions Status](https://github.com/beesperester/sanctuary-processP/workflows/Node%20CI/badge.svg?branch=master)](https://github.com/beesperester/sanctuary-processP/actions)
[![Run on Repl.it](https://repl.it/badge/github/beesperester/sanctuary-processP)](https://repl.it/github/beesperester/sanctuary-processP)

## Example
```javascript

// Import sanctuary.
const Sanctuary = require('sanctuary');

// Import processP and env from sanctuary-processP
const { processP, env } = require('sanctuary-processP');


// Setup Sanctuary environment to include sanctuary-processP Promise type.
const S = Sanctuary.create({
  checkTypes: true,
  env: Sanctuary.env.concat(env)
});


// create list of processes
const processes = processP([
  (x => Promise.resolve(x + 1)),
  S.add(2)
]);


// enjoy
processes(1).then(console.log); // should output [2, 3]
```
