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
			description: 'Client logo, no larger than 128x128.',
			options: {
				accept: '.png,.svg'
			}
		},
	]
}