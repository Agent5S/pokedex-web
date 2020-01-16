const path = require('path');

module.exports = {
	entry: './src/app.jsx',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public/nomodule'),
	},
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, exclude: /(node_modules)/, use: ['babel-loader'] },
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
