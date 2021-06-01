import { MdFeaturedVideo } from 'react-icons/md';

export default {

	title: 'Featured Clip',
	name: 'featuredClip',
	type: 'object',
	icon: MdFeaturedVideo,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'Title of the clip.',
			validation: Rule => Rule.required()
		},
		{
			title: 'Thumbnail Image',
			name: 'thumbnail',
			type: 'image',
			description: 'Thumbnail used for the clip.',
			validation: Rule => Rule.required()
		},
		{
			title: 'Client',
			name: 'client',
			type: 'reference',
			description: 'Client logo will be used if available.',
			to: [{ type: 'client' }]
		},
		{
			title: 'Clip',
			name: 'clip',
			type: 'url',
			description: 'Link to a clip on Vimeo. Designed for 16/9 content.',
			validation: Rule => Rule.required()
		}
	],
	preview: {
		select: {
			title: 'title',
			thumbnail: 'thumbnail',
		},
		prepare(value) {
			return {
				title: value.title,
				media: value.thumbnail,
			}
		}
	}
}