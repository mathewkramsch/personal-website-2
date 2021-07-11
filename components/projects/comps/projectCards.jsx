// projectCards.jsx

import Card from './card'
import style from '../projects.module.css'

export default function ProjectCards(props) {
    return (
        <div className={style.projectCards}>
            {props.data.map(
                (project)=>(
                    <Card key={project.title} projectData={project}/>
                )
            )}
        </div>
    );
}
