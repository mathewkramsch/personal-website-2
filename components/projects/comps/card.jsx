// card.jsx

import style from '../projects.module.css'

export default function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.cardImage}>
                <a href={props.projectData.link}>
                    <img src={props.projectData.imgSrc}/>
                </a>
            </div>
            <div className={style.cardInfo}>
                <a href={props.projectData.link}>
                    <h3>{props.projectData.title}</h3>
                </a>
                <p>{props.projectData.description}</p>
                <a href={props.projectData.srcCodeLink}>
                    <p>&nbsp;View source code.</p>
                </a>
            </div>
        </div>
    );
}
