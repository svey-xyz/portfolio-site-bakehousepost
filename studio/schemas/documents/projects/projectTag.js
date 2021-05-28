import client from 'part:@sanity/base/client'

import { FaTags } from 'react-icons/fa';

export default {

	title: 'Tags',
	name: 'projectTag',
	type: 'document',
	icon: FaTags,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: Rule => [
				Rule.required().error("Tag needs a title!"),
				Rule.custom((title, context) => {
					const id = context.document._id.replace(/^drafts\./, '')
					const draftID = `drafts.${id}`

					return client.fetch(`count(*[_type == "projectTag" && title == "${title}" && !(_id == "${id}") && !(_id == "${draftID}")])`)
						.then(count => {
							if (count > 0) {
								return 'Tags need to be unique from one another.'
							} else {
								return true
							}
						})
				}).error()
			]
		},
		{
			title: 'Description',
			name: 'description',
			type: 'string'
		}
	]
}
