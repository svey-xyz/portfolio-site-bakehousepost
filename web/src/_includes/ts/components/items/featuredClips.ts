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
	transparent: true,
	dnt: true
};

export const mount = (container: Element) => {
	videoContainer = container.querySelector('#featured-clip-container')!;
	playerWrapper = videoContainer.querySelector('#featured-clip-wrapper')!;
	featuredThumbs = container.querySelectorAll('.featured-clip-thumb')!;
	vimeoOptions.id = parseInt(videoContainer.getAttribute('data-video-id')!);
	player = new VimeoPlayer(playerWrapper, vimeoOptions);


	player.on('loaded', function (data) {
		videoContainer.style.display = 'block';
	});

	featuredThumbs[0].classList.add('active');
	featuredThumbs.forEach(thumb => {
		thumb.addEventListener('click', changeVideo)
	});
}

function changeVideo(this:Element) {
	featuredThumbs.forEach(thumb => {
		thumb.classList.remove('active');
	});

	this.classList.add('active');

	if (!player) loadVideo();

	const newID = parseInt(this.getAttribute('data-video-id')!);
	player.loadVideo(newID).catch(function (error) {
		switch (error.name) {
			case 'TypeError':
				// the id was not a number
				break;

			case 'PasswordError':
				// the video is password-protected and the viewer needs to enter the
				// password first
				break;

			case 'PrivacyError':
				// the video is password-protected or private
				break;

			default:
				// some other error occurred
				break;
		}
	});;
}

function loadVideo() {
	if (player) return;
	player = new VimeoPlayer(playerWrapper, vimeoOptions);
}