// Test related imports.
require('chai/register-expect');


// Package related imports.
const Sanctuary = require('sanctuary');
const { processP, env } = require('../index');


// Setup Sanctuary environment.
const S = Sanctuary.create({
	checkTypes: true,
	env: Sanctuary.env.concat(env)
});


// Setup tests.
describe('Test sanctuary-processP module', function() {
  it('tests synchronous execution', async function() {
    const tests = processP([
      S.add(1),
      S.add(2)
    ]);

    const result = await tests(1);

    expect(result).to.be.an('array');
    expect(result).to.deep.equal([2, 3]);
  });

  it('tests asynchronous execution', async function() {
    const tests = processP([
      (x => Promise.resolve(S.add(1)(x))),
      S.add(2),
    ]);

    const result = await tests(1);

    expect(result).to.be.an('array');
    expect(result).to.deep.equal([2, 3]);
  });

  it('tests asynchronous execution with map / chain', async function() {
    const tests = processP([
      S.map(x => Promise.resolve(S.add(1)(x))),
      S.map(S.add(2))
    ]);

    const result = await tests(S.Right(1));

    expect(result).to.be.an('array');
    expect(result).to.deep.equal([S.Right(2), S.Right(3)]);
  });
});