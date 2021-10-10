// lang.jsx

import React, { useState } from 'react';
import s from '../../../styles/layout/progLang.module.scss'
import ExtendedLangCard from './extendedLangCard'

function getSkillLevelBar(skillLevel) {
    const parentWidth = 30;  // this is hardcoded
    const blockWidth = parentWidth/5;  // width of a single block (in vw)
    const skillLevelWidth = blockWidth*skillLevel;
    let skillLevelBar = <div className='skillLevelBar' style={{width:skillLevelWidth + 'vw'}}></div>
    return skillLevelBar;
}

function simplify(text) {
    // returns 'text' in all lowercase, no symbols
    let newString = '';
    for (let i=0; i<text.length; i++) {
        if (text[i].toUpperCase()!==text[i].toLowerCase())
            newString += text[i].toLowerCase();
    }
    return newString;
}

export default function Lang(props) {
    const [focus, setFocus] = useState(false);
    const toggle = ()=>{ props.toggleView(props.langData.language); }

    return (
        <div
            className={props.cardView==props.langData.language?'progLangCard-focus':'progLangCard'}
            onClick={toggle}>
            <div className='collapsedLangCard'>
                <div className='language'>
                    <img src={props.langData.iconSrc} id={simplify(props.langData.language)}
                        className='langIcons'/>
                    <h4 className='langText'>{props.langData.language}</h4>
                </div>
                <div className='skillLevelOutline'>
                    { getSkillLevelBar(props.langData.skillLevel) }
                </div>
                <div className='proficiencyIndicatorAlt'>
                    <p id='proficiency'>{ props.langData.skillLevel }/5 Proficiency</p>
                </div>

            </div>
            { props.cardView==props.langData.language &&
                <ExtendedLangCard langData={props.langData}/> }
        </div>
    );
}
