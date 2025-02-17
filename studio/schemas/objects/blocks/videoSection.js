import { IoFilm } from "react-icons/io5";

export default {
	title: 'Video',
	name: 'videoSection',
	type: 'object',
	description: 'Showcase a YouTube or Vimeo video.',
	icon: IoFilm,
	fields: [
		{
			title: 'Video Title',
			name: 'title',
			type: 'string',
			description: 'The heading to be used with the video.',
		},
		{
			title: 'Thumbnail',
			name: 'thumbnail',
			type: 'image',
			description: 'A thumbnail is required!',
			validation: Rule => Rule.required()
		},
		{
			title: 'Link',
			name: 'url',
			type: 'url',
			description: 'Link to the video to be embedded.',
			validation: Rule => Rule.required()
		},
		{
			title: 'Highlighted Video',
			name: 'highlighted',
			type: 'boolean',
			description: 'Whether to apply more emphasis to this video.',
		}
	],
	preview: {
		select: {
			title: 'title',
			highlighted: 'highlighted'
		},
		prepare(value) {
			return {
				title: value.title,
				subtitle: `Highlighted Video is: ${value.highlighted}`
			}
		}
	}
}