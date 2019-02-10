let path = require('path');

// Create some object: this will be configuration of Webpack 4
let conf = {
	// Source entry point
	entry: './src/index.js',
	// Output point
	output: {
		// Must be absolute path; may be with __dirname, concatenation or you can use "path" module
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js'
	}
};

module.exports = conf;