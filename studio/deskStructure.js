import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { GrNavigate } from 'react-icons/gr';

export default () =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Settings')
				.icon(MdSettings)
				.child(
					S.list()
						// Sets a title for our new list
						.title('Settings Documents')
						// Add items to the array
						// Each will pull one of our new singletons
						.items([
							S.listItem()
								.title('Site Settings')
								.icon(CgWebsite)
								.child(
									S.document()
										.schemaType('siteSettings')
										.documentId('siteSettings')
								),
							S.listItem()
								.title('Site Navigation')
								.icon(GrNavigate)
								.child(
									S.document()
										.title('Site Navigation')
										.schemaType('navigation')
										.documentId('navigation')
								),
							S.listItem()
								.title('About')
								.icon(BsFillPersonLinesFill)
								.child(
									S.document()
										.schemaType('about')
										.documentId('about')
								),	
						])
				),

			S.divider(),
			...S.documentTypeListItems().filter(
				listItem => !['siteSettings', 'about', 'navigation'].includes(listItem.getId())
			)
		])