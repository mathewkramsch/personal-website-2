// scrollDown.jsx

import s from '../home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const scrollDown = ()=>{
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'  // or auto
    });
};

export default function ScrollDown() {
    return (
        <div className={s.scrollDown} onClick={scrollDown}>
            <h4>view projects</h4>
            <FontAwesomeIcon icon={faChevronDown} className={s.icon} id={s.down}/>
        </div>
    );
}
