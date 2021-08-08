// lang.jsx

import s from '../progLang.module.scss'

function printSkillLevel(x) {
    let skillLevelBlocks = [];
    let block = <div className={s.block}></div>;
    let firstBlock = <div className={s.block} id={s.firstBlock}></div>
    let lastBlock = <div className={s.block} id={s.lastBlock}></div>
    for (let i=0; i<x; i++) {
        if (i==0) skillLevelBlocks.push(firstBlock);
        else if (i==x-1) skillLevelBlocks.push(lastBlock);
        else skillLevelBlocks.push(block);
    }
    return ( <div className={s.skillLevelBlocks}>{skillLevelBlocks}</div> );
}

export default function Lang(props) {
    return (
        <div className={s.card}>
            <div className={s.language}>
                <h4>{props.langData.language}</h4>
            </div>
            <div className={s.skillLevel}>
                { printSkillLevel(props.langData.skillLevel) }
            </div>
        </div>
    );
}
