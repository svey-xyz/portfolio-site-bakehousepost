/*
*  Dynamically load videos
*/

import VimeoPlayer from "@vimeo/player";

let player: any
let videoContainer: HTMLElement
let playerWrapper: HTMLElement

let featuredThumbs: NodeListOf<Element>

let vimeoOptions = {
	id: 0,
	loop: true,
	background: true,
	dnt: true
};

export const mount = (container: Element) => {
	videoContainer = container.querySelector('#featured-clip-container')!;
	playerWrapper = videoContainer.querySelector('#featured-clip-wrapper')!;
	featuredThumbs = container.querySelectorAll('.featured-clip-thumb')!;

	vimeoOptions.id = parseInt(videoContainer.getAttribute('data-video-id')!);
	player = new VimeoPlayer(playerWrapper, vimeoOptions);

	videoContainer.style.display = 'block';

	featuredThumbs.forEach(thumb => {
		thumb.addEventListener('click', changeVideo)
	});
}

function changeVideo(this:Element) {
	if (!player) loadVideo();

	const newID = parseInt(this.getAttribute('data-video-id')!);
	player.loadVideo(newID);
}

function loadVideo() {
	if (player) return;
	player = new VimeoPlayer(playerWrapper, vimeoOptions);
}