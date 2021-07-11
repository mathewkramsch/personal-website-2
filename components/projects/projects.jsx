// projects.jsx

import style from './projects.module.css'
import utilStyle from '../../styles/utils.module.css'
import ProjectCards from './comps/projectCards'

export default function Projects(props) {
	return (
		<div className={style.page}>
			<div className={style.pageContent}>
	            <div className={style.leftContainer}>
	                <h1>projects</h1>
	            </div>
				<div className={style.rightContainer}>
					<ProjectCards data={props.data}/>
				</div>
			</div>
		</div>
	);
}
