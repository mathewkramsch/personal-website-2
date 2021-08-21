// progrLangObjects.jsx

import React, { useState } from 'react';
import s from '../../../styles/layout/progLang.module.scss'
import Lang from './lang'

export default function ProjectCards(props) {
    const [view, setView] = useState('none');
    const toggleView = (thisCardLang)=>{
        if (view!=thisCardLang) setView(thisCardLang);
        else setView('none');
    }

    return (
        <div className={s.progLangObjects}>
            {props.data.map(
                (progLang)=>(
                    <Lang key={progLang.language} langData={progLang} cardView={view}
                        toggleView={toggleView}/>
                )
            )}
        </div>
    );
}
