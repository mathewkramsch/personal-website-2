// scrollDown.jsx

import s from '../../../styles/layout/home.module.scss'
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
        <div className='scrollDown' onClick={scrollDown}>
            <h4 className='button italic'>view projects</h4>
            <FontAwesomeIcon icon={faChevronDown} className='icon' id='down'/>
        </div>
    );
}
