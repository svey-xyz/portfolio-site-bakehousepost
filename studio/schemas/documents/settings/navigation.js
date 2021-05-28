export default {
	title: 'Site Navigation',
	name: 'navigation',
	type: 'document',
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fields: [
		{
			title: 'Primary Navigation',
			name: 'primaryNavigation',
			type: 'array',
			description: 'Site navigation, the Home Page does not need to be added here.',
			of: [{ type: 'navPage' }]
		},
		{
			title: 'Home Page',
			name: 'homePage',
			type: 'reference',
			description: 'Select the page to be used for the root of the site.',
			to: [{ type: 'page' }],
		},
		{
			title: 'Projects Archive Page',
			name: 'archivePage',
			type: 'reference',
			description: 'Select the page used as the Projects Archive.',
			hidden: true,
			to: [{ type: 'page' }],
		}
	],
}
