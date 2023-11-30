module.exports = function (eleventyConfig) {
	eleventyConfig.addCollection("posts", (collectionApi) => {
		return collectionApi.getFilteredByGlob("./src/posts/**/*.md");
	});

	return {
		dir: {
			input: "src",
			includes: "_includes",
			data: "_data",
			output: "dist",
		},
	};
};
