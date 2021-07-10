// scrollDown.jsx

import style from '../home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function ScrollDown() {
    return (
        <div className={style.scrollDown}>
            <button>Scroll Down</button>
            <FontAwesomeIcon icon={faChevronDown} className={style.icon} id='down'/>
        </div>
    );
}
