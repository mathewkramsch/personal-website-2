// links.jsx

import style from '../home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Links() {
	return (
		<div className={style.links}>
            <a href='https://github.com/mathewkramsch' id='gitHub'>
                <FontAwesomeIcon icon={faGithub} className={style.icon}/>
                GitHub
            </a>
            <a href='https://www.linkedin.com/in/mathew-kramsch/' id='linkedIn'>
                <FontAwesomeIcon icon={faLinkedin} className={style.icon}/>
                LinkedIn
            </a>
            <a href='/Resume.pdf' id='resume'>
				<FontAwesomeIcon icon={faFileAlt} className={style.icon}/>
				Resume
			</a>
		</div>
	);
}
