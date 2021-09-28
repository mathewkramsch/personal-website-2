// home.jsx

import React, { useState, useEffect } from 'react';
import s from '../../styles/layout/home.module.scss'
import Links from './comps/links'
import ScrollDown from './comps/scrollDown'
import { Parallax } from 'react-scroll-parallax';
import FadeIn from 'react-fade-in';

const titles = [
	'Full-Stack Software Developer',
	'5th Year UCSB Student',
	'Computer Science Major',
	'Software Engineer',
	'Web Developer'
];

const aboutInfoList = [
	`I’m a diligent fifth year Computer Science student at UC Santa Barbara who is currently looking for software development engineering opportunities.`,
	`With a strong technical knowledge of data structures, CS fundamentals, and multiple programming languages and technologies, I can operate as a Full-Stack software developer.`,
	`Coming from an artistic background, I love UI/UX design but am also a capable back-end programmer.`,
	`Scroll to the bottom to send me an email or view the source code for this website, which was built using React, Next.js, and SASS.`,
	`Check out my resume!`
]

export default function Home() {
	const [titleNum, setTitleNum] = useState(0);
	const [aboutInfoNum, setAboutInfoNum] = useState(0);

	const toggleTitle = ()=>setTitleNum(titleNum+1);
	const toggleAboutInfo = ()=>setAboutInfoNum(aboutInfoNum+1);

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

	const delay = 7000;
	useEffect(()=>{
		const aboutTimeout = setTimeout(toggleAboutInfo, delay);
		return ()=>clearTimeout(aboutTimeout);
	}, [aboutInfoNum]);

	return (
		<div className='bg-home-page-email-pattern'>
		<div className={s.page}>
			<div></div>
			<div className={s.topContainer}>
				<div className={s.titleContainer}>
					<FadeIn><h1><div id='firstName'>Mathew</div>&nbsp;Kramsch</h1></FadeIn>
				</div>
				<div className={s.subHeader}>
					<div className={s.subHeaderLeft}>
						<FadeIn>
							{ displayTitle(titleNum) }
							<Links/>
						</FadeIn>
					</div>
					<div className={s.subHeaderRight}>
						<FadeIn>
							<h4 className='description' id={s.intro}>Hey what's up!</h4>
							{ displayAboutInfo(aboutInfoNum) }
						</FadeIn>
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
