// Test related imports.
require('chai/register-expect');


// Package related imports.
const Sanctuary = require('sanctuary');
const { process, env } = require('../index');


// Setup Sanctuary environment.
const S = Sanctuary.create({
	checkTypes: true,
	env: Sanctuary.env.concat(env)
});


// Setup tests.
describe('Test sanctuary-process module', function() {
  it('tests synchronous execution', async function() {
    const tests = process([
      S.add(1),
      S.add(2)
    ]);

    const result = await tests(1);

    expect(result).to.be.an('array');
    expect(result).to.deep.equal([2, 3]);
  });
});