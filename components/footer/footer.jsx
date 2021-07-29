// footer.jsx

import s from './footer.module.scss'
import BackToTop from './comps/backToTop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className={s.page}>
            <div className={s.pageContent}>
                <BackToTop/>
                <a href='https://github.com/mathewkramsch/personal-website-2'>
                    <FontAwesomeIcon icon={faGithub} className={s.icon} id={s.github}/>
                    <h4>view source code</h4>
                </a>
                <h4>
                    copyright &copy; 2021 mathew kramsch. all rights reserved.
                </h4>
            </div>
        </div>
    );
}
