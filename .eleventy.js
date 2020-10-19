const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
	eleventyConfig.setUseGitIgnore(false);

	eleventyConfig.addWatchTarget("./static/img");
	eleventyConfig.addPassthroughCopy({"./static/img": "./img/"});

	eleventyConfig.addShortcode("version", function() {
		return String(Date.now());
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