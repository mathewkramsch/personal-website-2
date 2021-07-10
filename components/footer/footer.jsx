// footer.jsx

import style from './footer.module.css'
import utilStyle from '../../styles/utils.module.css'
import BackToTop from './comps/backToTop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className={style.page}>
            <div className={style.pageContent}>
                <BackToTop/>
                <a href='https://github.com/mathewkramsch/personal-website-2'>
                    <FontAwesomeIcon icon={faGithub} className={style.icon}/>
                    Source code on Github
                </a>
                <p>
                    Copyright &copy; 2021 Mathew Kramsch. All rights reserved.
                </p>
            </div>
        </div>
    );
}
