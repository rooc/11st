const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
	eleventyConfig.setUseGitIgnore(false);

	eleventyConfig.addWatchTarget("./static/img");
	eleventyConfig.addPassthroughCopy({"./static/img":"./img/"});
	
	eleventyConfig.addWatchTarget("./_tmp/styles.css");
	eleventyConfig.addPassthroughCopy({"./_tmp/styles.css": "./css/styles.css"});
	
	eleventyConfig.addWatchTarget("./static/js/");
	eleventyConfig.addPassthroughCopy({"./static/js/": "./js/"});
	
	eleventyConfig.addPassthroughCopy({"./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js",});

	eleventyConfig.addShortcode("version", function() {
		return String(Date.now());
	});

	eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
		if (
			process.env.ELEVENTY_PRODUCTION &&
			outputPath &&
			outputPath.endsWith(".html")
		) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified;
		}

		return content;
	});

	return {
		dir: {
			input: 'views',
			output: 'dist',
			data: '_data',
			includes: '_includes'

		},
		passthroughFileCopy: true,
		templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
		htmlTemplateEngine: 'njk'
	}
};