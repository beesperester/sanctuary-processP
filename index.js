const $ = require('sanctuary-def');
const Sanctuary = require('sanctuary');

// PromiseType :: Type -> Type -> Type
const PromiseType = $.BinaryType
	('beesperester/sanctuary-processP')
	('https://github.com/beesperester/sanctuary-processP')
	([])
	(x => Object.prototype.toString.call(x) === '[object Promise]')
	(p => [])
	(p => []);

const env = [PromiseType($.Unknown)($.Unknown)];

const S = Sanctuary.create({
	checkTypes: true,
	env: Sanctuary.env.concat(env)
});

const processP = transforms => input => {
  return Promise.all(S.map(mapperP(input))(transforms));
}

const mapperP = input => f => {
  const context = this;
  

  return Promise.resolve(f.call(context, input)).then(x => {
    if (x.value) {
		  // is mappable
      return Promise.resolve(x.value).then(y => S.map(z => y)(x));
    } else {
      return x;
    }
  });
};

const process = transforms => input => {
  return S.map(mapper(input))(transforms);
};

const mapper = input => f => {
  const context = this;

  return f.call(context, input);
};

module.exports = {
  process: process,
  processP: processP,
  env: env
};