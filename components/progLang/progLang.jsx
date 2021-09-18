// progLang.jsx

import s from '../../styles/layout/progLang.module.scss'
import ProgLangObjects from './comps/progLangObjects'
import { Parallax } from 'react-scroll-parallax';

export default function ProgLang(props) {
	return (
		<div className={s.page}>
			<div className={s.pageContent}>
	            <div className={s.leftContainer}>
					<Parallax y={[-40,40]}>
                		<h2>Programming and mark-up languages</h2>
					</Parallax>
	            </div>
				<div className={s.rightContainer}>
					<ProgLangObjects data={props.data}/>
				</div>
			</div>
		</div>
	);
}
