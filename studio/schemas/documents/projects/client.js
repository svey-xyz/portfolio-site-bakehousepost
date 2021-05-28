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
			description: 'Client logo, a white cut-out SVG or PNG works best.'
		},
	]
}