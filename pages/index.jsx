// index.jsx

import style from '../styles/utils.module.css'
import Home from '../components/home/home'
import Projects from '../components/projects/projects'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'
import { projectsList } from '../assets/projectsList'  // this is the projects data

export default function Index() {
	return (
		<div className={style.sitePages}>
			<Home/>
			<Projects data={projectsList}/>
			<Contact/>
			<Footer/>
		</div>
	);
}
