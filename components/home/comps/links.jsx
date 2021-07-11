// links.jsx

import style from '../home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Links() {
	return (
		<div className={style.links}>
            <a href='https://github.com/mathewkramsch' id={style.gitHub}>
                <FontAwesomeIcon icon={faGithub} className={style.icon}/>
                github
            </a>
            <a href='https://www.linkedin.com/in/mathew-kramsch/' id={style.linkedIn}>
                <FontAwesomeIcon icon={faLinkedin} className={style.icon}/>
                linkedin
            </a>
            <a href='/Resume.pdf' id={style.resume}>
				<FontAwesomeIcon icon={faFileAlt} className={style.icon}/>
				resume
			</a>
		</div>
	);
}
