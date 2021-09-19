// home.jsx

import React, { useState } from 'react';
import s from '../../styles/layout/home.module.scss'
import Links from './comps/links'
import ScrollDown from './comps/scrollDown'
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
];

const aboutInfoList = [
	`I’m a diligent fifth year Computer Science student at UC Santa Barbara who is currently looking for software development engineering opportunities. View more info >`,
	`With a strong technical knowledge of data structures, CS fundamentals, and multiple programming languages and technologies, I can operate as a Full-Stack software developer.`,
	`Coming from an artistic background, I love UI/UX design but am also a capable back-end programmer.`,
	`Scroll to the bottom to send me an email or view the source code for this website, which was built using React, Next.js, and SASS.`,
	`Also check out my resume!`
]

export default function Home() {
	const [titleNum, setTitleNum] = useState(0);
	const [aboutInfoNum, setAboutInfoNum] = useState(0);
	const toggleTitle = ()=>{ setTitleNum(titleNum+1); }
	const toggleAboutInfo = ()=>{ setAboutInfoNum(aboutInfoNum+1); }
	const displayTitle = (titleNum)=>{
		const numberOfTitles = titles.length;
		const title = titles[titleNum%numberOfTitles];
		return <h3 onClick={toggleTitle}>{title}</h3>
	}
	const displayAboutInfo = (aboutInfoNum)=>{
		const numberOfAboutInfos = aboutInfoList.length;
		const aboutInfo = aboutInfoList[aboutInfoNum%numberOfAboutInfos];
		return <h4 className='description aboutInfo' onClick={toggleAboutInfo}>{aboutInfo}</h4>
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
						<h4 className='description' id={s.intro}>Hey what's up!</h4><br/>
						{ displayAboutInfo(aboutInfoNum) }
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
