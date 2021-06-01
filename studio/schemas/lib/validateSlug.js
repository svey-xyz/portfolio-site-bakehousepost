export function validateSlug(slug, slugRequired = true) {
	if (!slug && slugRequired) return "Slug is required."
	let errorMessage;

	if (slug.current.endsWith('/') || slug.current.endsWith('\\')) errorMessage = 'Cannot end with a slash';
	if (slug.current.startsWith('/') || slug.current.startsWith('\\')) errorMessage = 'Cannot start with a slash';

	return errorMessage ? errorMessage : true;
}