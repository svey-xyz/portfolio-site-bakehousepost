
// Content modification tools
const slugify = require("slugify");
const markdownify = require("./lib/filters/markdownfilter")

// Sanity tools
const serializers = require('./lib/utils/serializers')
const client = require('./lib/utils/sanityClient')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const imageUrl = require('@sanity/image-url')

// Cache busting
const fs = require("fs");
const path = require("path");

const scriptManifestPath = path.resolve(__dirname, "www", "assets", "js", "manifest.json");
const scriptManifest = process.env.NODE_ENV === 'production' ?
	JSON.parse(fs.readFileSync(scriptManifestPath, { encoding: "utf8" })) :
	{ "main.js": "/assets/js/main.js", "runtime.js": "/assets/js/runtime.js" }

const styleManifestPath = path.resolve(__dirname, "www", "assets", "css", "manifest.json");
const styleManifest = process.env.NODE_ENV === 'production' ?
	JSON.parse(fs.readFileSync(styleManifestPath, { encoding: "utf8" })) :
	{ "style.css": "style.css" }

module.exports = (eleventyConfig) => {

	// all the minify code is enabled when set to 'production'
	eleventyConfig.setQuietMode(true);
	eleventyConfig.setWatchThrottleWaitTime(1000);

	eleventyConfig.setLibrary("md", markdownify.markdownLib);
	eleventyConfig.addFilter("markdownify", markdownify);

	eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addTransform("htmlmin", require("./lib/transforms/htmlmin"))

	// debugger
	eleventyConfig.addFilter("debugger", (...args) => {
		console.log(...args)
		debugger;
	});

	eleventyConfig.addFilter("sanityBlocksToMarkdown", (sanityBlcoks) => {
		return BlocksToMarkdown(sanityBlcoks, { serializers, ...client.config() })
	});

	eleventyConfig.addShortcode("sanityImageURL", function (sanityImage, size = 400) {
		const builder = imageUrl(client)
		return builder.image(sanityImage).width(size).url();
	});

	// Overwrite 11ty built in slug filter to allow for backslashes to remain
	eleventyConfig.addFilter("slug", (input) => {
		const options = {
			replacement: "-",
			remove: /[&,+()$~%.'":*?<>{}]/g,
			lower: true
		};
		return slugify(input, options);
	});

	eleventyConfig.addShortcode("bundledJS", function () {
		if (!scriptManifest["main.js"] || !scriptManifest["runtime.js"]) {
			console.log("Javascript bundle not found!")
			throw ("Javascript bundle not found!");
		};
		return `<script src="${scriptManifest["main.js"]}"></script><script src="${scriptManifest["runtime.js"]}"></script>`;
	});

	eleventyConfig.addShortcode("bundledCSS", function () {
		if (!styleManifest["style.css"]) {
			console.log("Style bundle not found!")
			throw ("Style bundle not found!");
		};

		return `<link rel="stylesheet" href="/assets/css/${styleManifest['style.css']}">`;
	});

	eleventyConfig.addShortcode("getMatchingProjects", function (projects, activeTags) {
		let activeProjects = [];

		projects.forEach(project => {
			let matchingTags = {};

			for (let i = 0; i < activeTags.length; i++) {
				if (!matchingTags[activeTags[i]._id]) {
					const element = activeTags[i]._id;
					matchingTags[element] = true;
				}
			}

			for (let j = 0; j < project.projectTags.length; j++) {
				if (matchingTags[project.projectTags[j]._id]) {
					activeProjects.push(project);
					break;
				}
			}
		});
		this.page.activeProjects = activeProjects;
		return activeProjects;
	});

	eleventyConfig.addShortcode("videoEmbed", function (url) {
		const video = getVideoProperties(url)

		const videoContainer =
			`<div class="video-embed-container z-10 absolute inset-0 hidden" data-embed-type="${video.type}" data-video-id="${video.ID}">
			<div id="${video.type}-container" class="absolute inset-0 z-10"></div>
			</div>`

		return videoContainer;
	});

	eleventyConfig.addShortcode("videoID", function (url) {
		return getVideoProperties(url).ID;
	});

	function getVideoProperties(url) {
		const vimeoIDPattern = /(?:https?:\/\/)?(?:w{3}\.)?(?:vimeo\.com)\/(\d+)(?:\S*)/
		const youtubeIDPattern = /(?:https?:\/\/)?(?:w{3}\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?([A-Za-z0-9-_]{11})(?:\S*)/;

		let vimeoMatch = vimeoIDPattern.exec(url)
		let youtubeMatch = youtubeIDPattern.exec(url)

		if (!vimeoMatch && !youtubeMatch) throw (new Error(`Video URL does not match any accepted embeds! Affected URL: ${url}`));
		let embedType = vimeoMatch ? 'vimeo' : 'youtube';
		let embed = vimeoMatch ? vimeoMatch : youtubeMatch;

		let video = {
			'type': embedType,
			'ID': embed[1]
		}

		return video;
	}

	eleventyConfig.addWatchTarget("./src/style/**/*"); // doesn't work with eleventy config not at root

	return {
		dir: {
			input: "src",
			output: "www"
		},
		// pathPrefix: "/subfolder/",
		templateFormats: ['md', 'njk', 'html'],
		dataTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk'
	};
};