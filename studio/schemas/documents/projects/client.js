import { BsPersonBoundingBox } from 'react-icons/bs';


export default {
	title: 'Clients',
	name: 'client',
	type: 'document',
	icon: BsPersonBoundingBox,
	fields: [
		{
			title: 'Client Name',
			name: 'clientName',
			type: 'string',
			validation: Rule => Rule.required()

		},
		{
			title: 'Client Logo',
			name: 'clientLogo',
			type: 'image',
			description: 'White cut-out client logo, no larger than 128x128, PNG or SVG.',
			options: {
				accept: '.png,.svg'
			}
		},
	]
}