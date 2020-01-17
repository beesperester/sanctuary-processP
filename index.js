const $ = require('sanctuary-def');
const Sanctuary = require('sanctuary');

// PromiseType :: Type -> Type -> Type
const PromiseType = $.BinaryType
	('beesperester/sanctuary-pipeP')
	('https://github.com/beesperester/sanctuary-pipeP')
	([])
	(x => Object.prototype.toString.call(x) === '[object Promise]')
	(p => [])
	(p => []);

const env = [PromiseType($.Unknown)($.Unknown)];

const S = Sanctuary.create({
	checkTypes: true,
	env: Sanctuary.env.concat(env)
});

const evaluateP = transforms => input => {
  return Promise.all(S.map(mapper(input))(transforms));
}

const mapper = input => f => {
  const context = this;

  return Promise.resolve(f.call(context, input));
};

module.exports = {
  evaluateP: evaluateP,
  env: env
};