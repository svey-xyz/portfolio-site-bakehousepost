export default {

	title: 'Home Page Template',
	name: 'homePage',
	type: 'object',
	fields: [
		{
			title: 'Blocks',
			name: 'blocks',
			type: '_blocks',
			description: 'Blocks that will appear before the contact forum.',
		}
	],
	preview: {
		select: {
			title: 'title'
		}
	}
}