// projectCards.jsx

import s from '../projects.module.scss'
import Card from './card'

export default function ProjectCards(props) {
    return (
        <div className={s.projectCards}>
            {props.data.map(
                (project)=>(
                    <Card key={project.title} projectData={project}/>
                )
            )}
        </div>
    );
}
