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
			<div className={s.pageContent}>
				<div className={s.leftContainer}>
					<Header/>
					<Links/>
				</div>
				<div className={s.rightContainer}>
					<h4 className='description' id={s.intro}>Hey what's up!</h4>
					<h4 className='description'>{aboutInfo}</h4>
				</div>
			</div>
			<div className={s.bottomMiddleContainer}>
				<ScrollDown/>
			</div>
		</div>
	);
}
