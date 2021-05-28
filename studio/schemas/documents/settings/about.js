export default {
	title: 'About',
	name: 'about',
	type: 'document',
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Description',
			name: 'description',
			description: 'A detailed about section.',
			type: 'array',
			of: [{ type: 'block' }]
		},
		{
			title: 'Curriculum Vitae',
			name: 'curriculumVitae',
			type: 'file'
		},
		{
			title: 'Avatar',
			name: 'avatar',
			type: 'image',
			description: 'Portrait orientation works best.'
		},
		{
			title: 'Email',
			name: 'email',
			type: 'string'
		},
		{
			title: 'Phone Number',
			name: 'phoneNumber',
			type: 'string'
		},
		{
			title: 'Socials',
			name: 'social',
			description: 'A list of all related social media accounts. The first social is treated as the primary.',
			type: 'array',
			of: [{ type: 'socialSite' }]
		}
	]
}
