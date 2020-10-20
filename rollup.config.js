import commonjs from '@rollup/plugin-commonjs';
import {	nodeResolve } from '@rollup/plugin-node-resolve';
import browsersync from 'rollup-plugin-browsersync';

export default {
	input: 'static/js/scripts.js',
	output: {
		file: 'dist/js/scripts.js',
		format: 'cjs'
	},
	plugins: [
		commonjs(),
		nodeResolve(),
		browsersync({
			server: 'dist',
			watch: true,
			port: 7000,
			open: false
		})
	],
};