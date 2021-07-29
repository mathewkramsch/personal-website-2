// backToTop.jsx

import s from '../footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const scrollToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // or auto
    });
};

export default function BackToTop() {
    return (
        <div className={s.backToTop} onClick={scrollToTop}>
            <h4>back to top</h4>
            <FontAwesomeIcon icon={faChevronUp} className={s.icon} id={s.up}/>
        </div>
    );
}
