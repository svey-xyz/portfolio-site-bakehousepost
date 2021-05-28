import client from 'part:@sanity/base/client'
import SlugInput from 'sanity-plugin-better-slug'
import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments'
import { validateSlug } from '../../lib/validateSlug'

import { MdPermMedia } from 'react-icons/md';

export default {
		
	title: 'Projects',
	name: 'project',
	type: 'document',
	icon: MdPermMedia,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'Title of the project.',
			validation: Rule => Rule.required()
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			inputComponent: SlugInput,
			hidden: true,
			description: 'Set the projects root slug in the Site Navigation settings.',
			options: {
				source: 'title',
				isUnique: isUniqueAcrossAllDocuments,
				basePath: async (document) => {
					const projectsRoot = await client.fetch(`*[_id == "navigation"]{"archivePageSlug":archivePage->slug.current}[0].archivePageSlug`)

					return projectsRoot ? `/${projectsRoot}` : ' '
				}
			},
			// validation: Rule => Rule.custom((slug) => validateSlug(slug))
		},
		{
			title: 'Date',
			name: 'date',
			type: 'datetime',
			description: 'When was the project made, or launched.'
		},
		{
			title: 'Blurb',
			name:'blurb',
			type: 'string',
			hidden: true,
			description: 'A short blurb about the project.'
		},
		{
			title: 'Project Tags',
			name: 'projectTags',
			type: 'array',
			description: 'Select all applicable tags.',
			of: [{
				type: 'reference',
				to: [{ type: 'projectTag' }]
			}]
		},
		{
			title: 'Thumbnail Image',
			name: 'thumbnail',
			type: 'image',
			description: 'This will appear in project lists, but not in the project itself.',
			validation: Rule => Rule.required()
		},
		{
			title: 'Description',
			name: 'description',
			type: 'array',
			description: 'A more descriptive bit of text about the project.',
			of: [{ type: 'block' }]
		},
		{
			title: 'Client',
			name: 'client',
			type: 'reference',
			to: [{ type: 'client' }]
		},
		{
			title: 'Video',
			name: 'url',
			type: 'url',
			description: 'Link to the video to be embedded. Works with YouTube and Vimeo',
			validation: Rule => Rule.required()
		}
	]
}