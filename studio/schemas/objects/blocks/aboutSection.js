import { BsFillPersonLinesFill } from 'react-icons/bs';

export default {
	title: 'About Section',
	name: 'aboutSection',
	type: 'object',
	description: 'This block uses the data provided in - Settings / About.',
	icon: BsFillPersonLinesFill,
	fields: [
		{
			title: 'Personal Info',
			name: 'personalInfo',
			type: 'boolean',
			description: 'Whether to include personal information.',
		},
		{
			title: 'Curriculum Vitae Download',
			name: 'downloadCV',
			type: 'string',
			description: 'The phrase used to link the CV, if none is provided the CV won\'t be included.',
		}
	],
	preview: {
		select: {
		},
		prepare(value) {
			return {
				title: "About Section",
				subtitle: "Data set in Settings / About"
			}
		}
	}
}