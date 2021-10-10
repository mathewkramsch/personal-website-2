// extendedLangCard.jsx

import s from '../../../styles/layout/progLang.module.scss'

export default function extendedLangCard(props) {
    return (
        <div className='extendedLangCard'>
            <div className='proficiencyIndicator'>
                <p id='proficiency'>{ props.langData.skillLevel }/5 Proficiency</p>
            </div>
            <div className='langDescription'>
                <p>{ props.langData.langDescription }</p>
            </div>
        </div>
    );
}
