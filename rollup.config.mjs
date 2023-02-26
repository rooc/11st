import commonjs from '@rollup/plugin-commonjs';
import {	nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: 'static/js/scripts.js',
	output: {
		file: 'dist/js/scripts.js'
	},
	plugins: [
		commonjs(),
		nodeResolve()		
	],
};