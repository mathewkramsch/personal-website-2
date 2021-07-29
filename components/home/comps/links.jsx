// links.jsx

import s from '../home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Links() {
	return (
		<div className={s.links}>
            <a href='https://github.com/mathewkramsch' id={s.gitHub}>
                <FontAwesomeIcon icon={faGithub} className={s.icon}/>
				<h4>github</h4>
            </a>
            <a href='https://www.linkedin.com/in/mathew-kramsch/' id={s.linkedIn}>
                <FontAwesomeIcon icon={faLinkedin} className={s.icon}/>
                <h4>linkedin</h4>
            </a>
            <a href='/Resume.pdf' id={s.resume}>
				<FontAwesomeIcon icon={faFileAlt} className={s.icon}/>
				<h4>resume</h4>
			</a>
		</div>
	);
}
