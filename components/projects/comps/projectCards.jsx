// projectCards.jsx

import React from 'react'
import s from '../../../styles/layout/projects.module.scss'
import Card from './card'

export default class ProjectCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.projectCards}>
                {this.props.data.map(
                    (project)=>(
                        <Card key={project.title} projectData={project}/>
                    )
                )}
            </div>
        );
    }
}
