// index.jsx

import style from '../styles/utils.module.css'
import Home from '../components/home/home'
import Projects from '../components/projects/projects'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'


export default function Index() {

	const IVHousing = {  // object
		title: 'IV Housing Web Application',
		description: 'shit'
	}
	const EtchASketch = {
		title: 'JavaScript Etch-a-Sketch',
		description: 'shit'
	}
	const projectsList = [  // array of housing objects
		IVHousing,
		EtchASketch
	]

	return (
		<div>
			<Home/>
			<Projects data={projectsList}/>
			{/*
			<Contact/>
			<Footer/>
			*/}
		</div>
	);
}
