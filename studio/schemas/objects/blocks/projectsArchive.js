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
			filters: 'filterTags'
		},
		prepare(value) {
			
			return {
				title: 'Projects Archive',
				subtitle: `Tag filtering is set to: ${value.filters}.`
			}
		}
	}
}