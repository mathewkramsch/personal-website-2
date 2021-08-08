// progrLangObjects.jsx

import s from '../progLang.module.scss'
import Lang from './lang'

export default function ProjectCards(props) {
    return (
        <div className={s.progLangObjects}>
            {props.data.map(
                (progLang)=>(
                    <Lang key={progLang.language} langData={progLang}/>
                )
            )}
        </div>
    );
}
