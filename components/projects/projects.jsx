// projects.jsx

import style from './projects.module.css'
import utilStyle from '../../styles/utils.module.css'
import ProjectCards from './comps/projectCards'

export default function Projects(props) {
	return (
		<div>
            <div className={utilStyle.header}>
                Projects
            </div>
			<div className={style.projectContainer}>
				<ProjectCards data={props.data}/>
			</div>
		</div>
	);
}
