import { MdContactMail } from "react-icons/md";

export default {
	title: 'Contact Form',
	name: 'contactForm',
	type: 'object',
	icon: MdContactMail,
	fields: [
		{
			title: 'Contact Email',
			name: 'contactEmail',
			type: 'string',
			description: 'The email to send contact messages to.'
		}
	],
	preview: {
		select: {
			email: 'contactEmail'
		},
		prepare(value) {
			return {
				title: "Contact Form",
				subtitle: `Emails are sent to: ${value.email}`
			}
		}
	}
}