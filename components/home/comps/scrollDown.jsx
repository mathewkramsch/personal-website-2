// scrollDown.jsx

import style from '../home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function ScrollDown() {
    return (
        <div className={style.scrollDown}>
            <p>view projects</p>
            <FontAwesomeIcon icon={faChevronDown} className={style.icon} id={style.down}/>
        </div>
    );
}
