// index.jsx

import Home from '../components/home/home'
import Projects from '../components/projects/projects'
import ProgLang from '../components/progLang/progLang'
// import ToolsTech from '../components/toolsTech/toolsTech'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'
import { projectsList } from '../assets/projectsList'  // this is the projects data
import { progLangList } from '../assets/progLangList'
// import { toolsTechList } from '../assets/toolsTechList'

export default function Index() {
	return (
		<div>
			<Home/>
			<Projects data={projectsList}/>
				<ProgLang data={progLangList}/>
			{/*
				<ToolsTech data={toolsTechList}/>
			*/}
			<Contact/>
			<Footer/>
		</div>
	);
}
