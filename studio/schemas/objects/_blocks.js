import embed from './blocks/embed';
import textSection from './blocks/textSection';
import interactiveSection from './blocks/interactiveSection'
import projectsArchive from './blocks/projectsArchive'
import itemCard from './blocks/itemCard'
import simpleHero from './blocks/simpleHero'
import video from './blocks/video'
import aboutSection from './blocks/aboutSection'
import contactForm from './blocks/contactForm'


export default {
	title: 'Blocks',
	name: '_blocks',
	type: 'array',
	of: [simpleHero, textSection, video, itemCard, projectsArchive, aboutSection, contactForm],
}