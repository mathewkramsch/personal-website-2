// home.jsx

import style from './home.module.css'
import utilStyle from '../../styles/utils.module.css'
import Header from './comps/header'
import ScrollDown from './comps/scrollDown'

export default function Home() {
	return (
		<div>
			<Header/>
			<div className={style.about}>
				shit
			</div>
			<ScrollDown/>
		</div>
	);
}
