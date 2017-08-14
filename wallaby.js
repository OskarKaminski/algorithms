var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {
	return {
		files: [
			{pattern: '**/*.js', load: false},
			{pattern: '**/*.spec.js', ignore: true},
		],

		tests: [
			{pattern: '**/*.spec.js', load: false}
		],

		postprocessor: wallabyPostprocessor,
		compilers: {
			'**/*.js': wallaby.compilers.babel({
				presets: ['es2015']
			})
		},

		setup: function () {
			// required to trigger test loading
			window.__moduleBundler.loadTests();
		}
	};
};