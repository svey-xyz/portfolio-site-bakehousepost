import featuredClip from '../../../objects/utilities/items/featuredClip'


export default {

	title: 'Home Page Template',
	name: 'homePage',
	type: 'object',
	fields: [
		{
			title: 'Featured Clips',
			name: 'featuredClips',
			type: 'array',
			description: 'Add some featured clips to the homepage.',
			of: [featuredClip],
			validation: Rule => [
				Rule.required(),
				Rule.min(1),
				Rule.max(5)
			]
		}
	]
}