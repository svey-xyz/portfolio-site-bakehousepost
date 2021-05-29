import { IoGrid } from "react-icons/io5";

export default {
	title: 'Projects Archive',
	name: 'projectsArchive',
	type: 'object',
	icon: IoGrid,
	fields: [
		{
			title: 'Client Logo',
			name: 'clientLogo',
			type: 'boolean',
			description: 'If true will show the client logo instead of their name.',
		},
		{
			title: 'Enable Tag Filtering',
			name: 'filterTags',
			type: 'boolean',
			description: 'Whether or not to enable tag filters.',
		},
		{
			title: 'Complete Archive',
			name: 'allTags',
			type: 'boolean',
			description: 'If this option is enabled the archive will show all projects regardless of the Tags setting below.',
		},
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			description: 'Select which tags to include in the archive.',
			of: [
				{
					type: 'reference',
					to: [{ type: 'projectTag' }]
				}
			]
		}
	],
	preview: {
		select: {
			filters: 'filterTags',
			allTags: 'allTags',
			tag0: 'tags.0.title',
			tag1: 'tags.1.title',
			tag2: 'tags.2.title',
		},
		prepare(value) {
			const tags = [value.tag0, value.tag1].filter(Boolean)
			const joinedTags = tags.length > 0 ? tags.join(', ') : 'no tags'
			const moreTags = Boolean(value.tag2) ? ', and more...' : ''

			const selectedTags = value.allTags ?
					'Archive of all projects.' :
					`Archive of: ${joinedTags}${moreTags}`

			return {
				title: 'Projects Archive',
				subtitle: selectedTags
			}
		}
	}
}