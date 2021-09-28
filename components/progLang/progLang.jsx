// progLang.jsx

import s from '../../styles/layout/progLang.module.scss'
import ProgLangObjects from './comps/progLangObjects'

export default function ProgLang(props) {
	return (
		<div className={s.page}>
			<div className={s.pageContent}>
	            <div className={s.leftContainer}>
            		<h2>Programming and mark-up languages</h2>
	            </div>
				<div className={s.rightContainer}>
					<ProgLangObjects data={props.data}/>
				</div>
			</div>
		</div>
	);
}
