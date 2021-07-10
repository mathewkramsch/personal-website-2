// backToTop.jsx

import style from '../footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function BackToTop() {
    return (
        <div className={style.backToTop}>
            <button>Back To Top</button>
            <FontAwesomeIcon icon={faChevronUp} className={style.icon} id='up'/>
        </div>
    );
}
