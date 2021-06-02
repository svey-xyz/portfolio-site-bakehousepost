const sanityFetch = require("../../lib/utils/sanityFetch");
const groq = require('groq')

const serializers = require('../../lib/utils/serializers')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../../lib/utils/sanityClient.js')

module.exports = async () => {
	const query = groq`{
		"work":*[_type == "project"]{
			...,
			"slug":slug.current,
			projectTags[]->,
			client->,
		} | order(date desc),
		"tags":*[_type == "projectTag"]{...}
	}`

	const data = await sanityFetch('projects', query)

	
	return data;
}