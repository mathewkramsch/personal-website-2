// home.jsx

import React, { useState } from 'react';
import s from '../../styles/layout/home.module.scss'
import Links from './comps/links'
import ScrollDown from './comps/scrollDown'
import { aboutInfo } from '../../assets/aboutInfo'
import { Parallax } from 'react-scroll-parallax';

const titles = [
	'Full-Stack Software Developer',
	'5th Year UCSB Student',
	'Computer Science Major',
	'Software Engineer',
	'Web Developer',
	'Programmer',
	'Wanna-be Hacker',
	'Cool Person',
	'Hireable Candidate',
	'Your next employee',
	'Check out my resume ;)'
];

export default function Home() {
	const [titleNum, setTitleNum] = useState(0);
	const toggleTitle = ()=>{ setTitleNum(titleNum+1); }
	const displayTitle = (titleNum)=>{
		const numberOfTitles = titles.length;
		const title = titles[titleNum%numberOfTitles];
		return <h3 onClick={toggleTitle}>{title}</h3>
	}

	return (
		<div className='bg-home-page-email-pattern'>
		<div className={s.page}>
			<div></div>
			<div className={s.topContainer}>
				<div className={s.titleContainer}>
					<h1><div id='firstName'>Mathew</div>&nbsp;Kramsch</h1>
				</div>
				<div className={s.subHeader}>
					<div className={s.subHeaderLeft}>
						{ displayTitle(titleNum) }
						<Links/>
					</div>
					<div className={s.subHeaderRight}>
						<h4 className='description' id={s.intro}>Hey what's up!</h4>
						<h4 className='description'>{aboutInfo}</h4>
					</div>
				</div>
			</div>
			<div className={s.bottomContainer}>
				<ScrollDown/>
			</div>
		</div>
		</div>
	);
}
