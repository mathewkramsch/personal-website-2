// projects.jsx

import s from './projects.module.scss'
import ProjectCards from './comps/projectCards'


export default function Projects(props) {
	return (
		<div className={s.page}>
			<div className={s.pageContent}>
	            <div className={s.leftContainer}>
                	<h3>projects</h3>
	            </div>
				<div className={s.rightContainer}>
					<ProjectCards data={props.data}/>
				</div>
			</div>
		</div>
	);
}
