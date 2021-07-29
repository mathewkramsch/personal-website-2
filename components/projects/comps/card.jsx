// card.jsx

import s from '../projects.module.scss'

export default function Card(props) {
    return (
        <div className={s.card}>
            <div className={s.cardImage}>
                <a href={props.projectData.link}>
                    <img src={props.projectData.imgSrc}/>
                </a>
            </div>
            <div className={s.cardInfo}>
                <a href={props.projectData.link}>
                    <h4>{props.projectData.title}</h4>
                </a>
                <p>{props.projectData.description}
                    <a href={props.projectData.srcCodeLink}>
                        &nbsp;View source code.
                    </a>
                </p>
            </div>
        </div>
    );
}
