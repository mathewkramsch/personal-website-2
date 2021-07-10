// home.jsx

import style from './home.module.css'
import utilStyle from '../../styles/utils.module.css'
import Header from './comps/header'
import Links from './comps/links'
import ScrollDown from './comps/scrollDown'
import { aboutInfo } from '../../assets/aboutInfo'

export default function Home() {
	return (
		<div className={style.page}>
			<div className={style.pageContent}>
				<div className={style.leftContainer}>
					<Header/>
					<Links/>
				</div>
				<div className={style.rightContainer}>
					<p>{aboutInfo}</p>
				</div>
			</div>
			<div className={style.bottomMiddleContainer}>
				<ScrollDown/>
			</div>
		</div>
	);
}
