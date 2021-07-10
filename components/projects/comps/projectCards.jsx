// projectCards.jsx

import Card from './card'

export default function ProjectCards(props) {
    return (
        <div>
            {props.data.map(
                (project)=>(
                    <Card key={project.title} projectData={project}/>
                )
            )}
        </div>
    );
}
