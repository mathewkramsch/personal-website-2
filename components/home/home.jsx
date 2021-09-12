// home.jsx

import s from '../../styles/layout/home.module.scss'
import Header from './comps/header'
import Links from './comps/links'
import ScrollDown from './comps/scrollDown'
import { aboutInfo } from '../../assets/aboutInfo'

export default function Home() {
	return (
		<div className={s.page}>
			<div></div>
			<div className={s.topContainer}>
				<div className={s.titleContainer}>
					<h1><div id='firstName'>Mathew</div>&nbsp;Kramsch</h1>
				</div>
				<div className={s.subHeader}>
					<div className={s.subHeaderLeft}>
						<h3>Full-stack Software Developer</h3>
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
	);
}
