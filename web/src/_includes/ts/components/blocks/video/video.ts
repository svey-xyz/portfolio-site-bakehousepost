/*
*  Enable playing video when overlay is clicked
*/

// import * as Player from "@vimeo/player";
import Player from "@vimeo/player";
import { smoothScroll } from '../../../utilities/scrollIntoView'

let player:any
let overlay:HTMLElement

export const mount = (container: Element) => {
	var vimeoContainer = <HTMLElement>container.querySelector('.eleventy-plugin-vimeo-embed')!;
	overlay = <HTMLElement>container.querySelector('#video-overlay')!;
	player = new Player(vimeoContainer);

	player.on('play', function () {
		// console.log('Played the video');
	});

	player.getVideoTitle().then(function (title:any) {
		// console.log('title:', title);
	});

	overlay.addEventListener('click', playVideo);

	if (container.querySelector('[data-highlighted="true"]')) {
		let scrollIndicator = <HTMLElement>container.querySelector('.scroll-indicator')!;
		scrollIndicator.addEventListener('click', smoothScroll);
	}
}

function playVideo() {
	overlay.style.display = 'none';
	player.play()
}