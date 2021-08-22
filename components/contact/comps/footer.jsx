// footer.jsx

import s from '../../../styles/layout/contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const scrollToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // or auto
    });
};

export default function Footer() {
    return (
        <div className={s.footer}>
            <h4 className='footerText'>
                <div id='copyRight'>&copy;</div>2021 Mathew Kramsch
            </h4>
            <div className='backToTop' onClick={scrollToTop}>
                <h4 className='italic footerText'>back to top</h4>
                <FontAwesomeIcon icon={faChevronUp} className='icon' id='up'/>
            </div>
            <a href='https://github.com/mathewkramsch/personal-website-2' className='viewSrcCode'>
                <FontAwesomeIcon icon={faGithub} className='icon' id='githubContact'/>
                <h4 className='footerText'>view source code</h4>
            </a>
        </div>
    );
}
