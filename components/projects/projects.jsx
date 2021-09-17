// projects.jsx

import s from '../../styles/layout/projects.module.scss'
import ProjectCards from './comps/projectCards'
import { Parallax } from 'react-scroll-parallax';

export default function Projects(props) {
	return (
		<div className={s.page}>
			<div className='rect-container-project-page'>
				<div className='rect-project-page-1'></div>
				<div className='rect-project-page-2'></div>
			</div>

			<div className={s.pageContent}>
	            <div className={s.leftContainer}>
                	<h2>My personal projects</h2>
	            </div>
				<div className={s.rightContainer}>
					<ProjectCards data={props.data}/>
				</div>
			</div>
		</div>
	);
}
