import { loadModules } from '../utilities/helpers'

/******** VARIABLES ********/
var ver = '0.1.2';
var mobile = false;
var height:number;
declare global {
	var vh:number;
	var prevPage:string;
}

/******** INITIALIZATION ********/
; (function () {
	if (/Mobi|Android/i.test(navigator.userAgent)) {
		mobile = true;
	}

	height = window.innerHeight;
	global.vh = height * 0.01;
	global.prevPage = document.referrer.indexOf(window.location.protocol + "//" + window.location.host) === 0 ? document.referrer : '/';

	window.addEventListener("resize", resize);
	resize();

	console.log(`JS Version is: ${ver}`);

})();

function resize() {
	if (!mobile) { 
		height = window.innerHeight;
		global.vh = height * 0.01;
	}

	document.documentElement.style.setProperty('--vh', `${global.vh}px`);
}

/******** LOAD BLOCK SCRIPTS ********/
document.addEventListener(
	'DOMContentLoaded',
	() => {
		loadModules([
			{
				selector: '#header',
				scriptPath: 'components/headers/header'
			},
			{
				selector: '.projectsArchive > [data-filterable="true"]', // don't bother loading script if not filterable
				scriptPath: 'components/blocks/projectsArchive/projectsArchive'
			},
			{
				selector: '.video-utility',
				scriptPath: 'utilities/video'
			},
			{
				selector: '#homePageWrapper',
				scriptPath: 'components/items/featuredClips'
			},
			{
				selector: '.contactForm #formContainer',
				scriptPath: 'components/blocks/contactForm/contactForm'
			},
			{
				selector: '.scroll-indicator',
				scriptPath: 'utilities/smoothScroll'
			},
			{
				selector: '#returnTo',
				scriptPath: 'utilities/returnTo'
			},
		])
	}
)