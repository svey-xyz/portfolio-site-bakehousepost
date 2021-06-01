
/*
*	Smooth scroll behaviour
*/

export const mount = (container: Element) => {
	container.addEventListener('click', smoothScroll);
}

function smoothScroll(this:HTMLElement, err: any) {
	const destination = this.getAttribute('data-scroll-destination')!;
	
	const e = document.getElementById(destination)!;

	e.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
		inline: 'start'
	});
}