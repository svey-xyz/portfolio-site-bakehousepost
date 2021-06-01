import { MdContactMail } from "react-icons/md";

export default {
	title: 'Contact Form',
	name: 'contactForm',
	type: 'object',
	icon: MdContactMail,
	fields: [
		{
			title: 'Form Name',
			name: 'formName',
			type: 'string',
			description: "Each form on your site should have a unique name (e.g. 'contact').",
			initialValue: 'Contact',
			validation: Rule => Rule.required()
		},
		{
			title: 'Success Message',
			name: 'successMessage',
			type: 'string',
			description: 'Message to display when form is submitted successfully.',
			initialValue: 'Message submitted successfully!',
			validation: Rule => Rule.required()
		}
	],
	preview: {
		select: {
			title: 'formName',
			message: 'successMessage'
		},
		prepare(value) {
			return {
				title: `Form: ${value.title}`,
				subtitle: `Success message: ${value.message}`
			}
		}
	}
}