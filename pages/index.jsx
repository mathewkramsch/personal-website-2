// index.jsx

import Home from '../components/home/home'
import Projects from '../components/projects/projects'
import ProgLang from '../components/progLang/progLang'
import Contact from '../components/contact/contact'
import { projectsList } from '../assets/projectsList'  // this is the projects data
import { progLangList } from '../assets/progLangList'

export default function Index() {
	return (
		<div>
			<Home/>
			<Projects data={projectsList}/>
			<ProgLang data={progLangList}/>
			<Contact/>
		</div>
	);
}
