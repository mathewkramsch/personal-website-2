// progLang.jsx

import s from './progLang.module.scss'
import ProgLangObjects from './comps/progLangObjects'


export default function ProgLang(props) {
	return (
		<div className={s.page}>
			<div className={s.pageContent}>
	            <div className={s.leftContainer}>
                	<h3>programming languages</h3>
	            </div>
				<div className={s.rightContainer}>
					<ProgLangObjects data={props.data}/>
				</div>
			</div>
		</div>
	);
}
