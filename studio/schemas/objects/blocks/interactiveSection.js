import { HiCursorClick } from "react-icons/hi";


export default {
	name: 'interactiveSection',
	title: 'Interactive Section',
	type: 'object',
	icon: HiCursorClick,
	fields: [
		{
			name: 'interactiveScript',
			title: 'Section Type',
			type: 'string',
			options: {
				list: [
					{ title: 'Blobs', value: 'blobShader' }
				],
				// layout: 'radio',
			}
		}
	],
	preview: {
		select: {
			type: 'interactiveScript',
		},
		prepare(value) {
			return {
				title: 'Interactive Section',
				subtitle: 'Section Type: ' + value.type
			}
		}
	}
}