import { BiCard } from "react-icons/bi";

export default {
	title: 'Item Card',
	name: 'itemCard',
	type: 'object',
	icon: BiCard,
	fields: [
		{
			title: 'Heading',
			name: 'heading',
			type: 'string',
			description: 'The title of the item to be used as a heading on the card.',
		},
		{
			title: 'Blurb',
			name: 'blurb',
			type: 'array',
			of: [{ type: 'block' }],
			description: 'A little bit of text about the item. Keep it short (one or two sentences).',
			validation: Rule => [
				Rule.max(120).warning(`It's recommended that blurbs are short.`),
				Rule.max(150).error(`The blurb must be shorter.`),

			]
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
			description: 'The main image.',
			validation: Rule => Rule.required()
		},
		{
			title: 'Link',
			name: 'link',
			type: 'reference',
			description: 'Where the card will link to.',
			to: [{ type: 'page' }],
		}
	],
	preview: {
		select: {
			title: 'heading',
			blocks: 'blurb'
		},
		prepare(value) {
			const block = (value.blocks || []).find(block => block._type === 'block')
			return {
				title: value.title,
				subtitle: block ?
					block.children.filter(child => child._type === 'span').map(span => span.text).join('') :
					'No blurb!'
			}
		}
	}
}