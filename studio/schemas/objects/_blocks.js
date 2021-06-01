import textSection from './blocks/textSection';
import projectsArchive from './blocks/projectsArchive'
import itemCard from './blocks/itemCard'
import simpleHero from './blocks/simpleHero'
import videoSection from './blocks/videoSection'
import aboutSection from './blocks/aboutSection'
import contactForm from './blocks/contactForm'


export default {
	title: 'Blocks',
	name: '_blocks',
	type: 'array',
	of: [simpleHero, textSection, videoSection, itemCard, projectsArchive, aboutSection, contactForm],
}