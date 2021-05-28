import conditionalFields from "../../lib/conditionalFields";
import SlugInput from 'sanity-plugin-better-slug'
import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments'
import { validateSlug } from '../../lib/validateSlug'

import client from 'part:@sanity/base/client'

import defaultPage from './templates/defaultPage';
import homePage from './templates/homePage';

import { RiPagesFill } from 'react-icons/ri';


export default {
	title: "Pages",
	name: "page",
	type: 'document',
	icon: RiPagesFill,
	fieldsets: [
		{ 
			name: 'pageSettings',
			title: 'Page Settings',
			options: {
				collapsible: true,
				collapsed: false
			}
		}
	],
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			fieldset: 'pageSettings',
			description: 'Title of the page.',
			validation: Rule => [
				Rule.required().error("Page needs a title!"),
				Rule.custom((title, context) => {
					const id = context.document._id.replace(/^drafts\./, '')
					const draftID = `drafts.${id}`

					return client.fetch(`count(*[_type == "page" && title == "${title}" && !(_id == "${id}") && !(_id == "${draftID}")])`)
						.then(count => {
							if (count > 0) {
								return 'This might be confusing, page titles should be unique.'
							} else {
								return true
							}
						})
				}).warning()
			]
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			inputComponent: SlugInput,
			fieldset: 'pageSettings',
			description: 'Custom slugs are generally not recommended, use the generate option.',
			options: {
				source: 'title',
				isUnique: isUniqueAcrossAllDocuments,
				basePath: ' '
			},
			validation: Rule => Rule.custom((slug) => validateSlug(slug))
		},
		{
			title: 'Blurb',
			name: 'blurb',
			type: 'string',
			fieldset: 'pageSettings',
			description: 'A short blurb about the page.'
		},
		{
			title: "Page Content",
			name: 'pageContent',
			type: 'object',
			inputComponent: conditionalFields,
			fields: [
				
				{
					type: 'object',
					name: 'input',
					fields: [
						{
							name: 'condition',
							title: 'Template Select',
							type: 'string',
							options: {
								list: [
									{ title: 'Blocks', value: 'defaultPage' },
									{ title: 'Home', value: 'homePage' }
								],
								// layout: 'radio',
							}
						}
					]
				},
				{
					type: 'object',
					name: 'options',
					fields: [defaultPage, homePage ]
				}
			]
		},
	]
};
