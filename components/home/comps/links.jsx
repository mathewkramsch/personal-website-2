// links.jsx

import s from '../../../styles/layout/home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Links() {
	return (
		<div className={s.links}>
            <a href='https://github.com/mathewkramsch' className='linkButton'>
                <FontAwesomeIcon icon={faGithub} className='icon linkIcons' id='github'/>
				<h4 className='button'>github</h4>
            </a>
            <a href='https://www.linkedin.com/in/mathew-kramsch/' className='linkButton'>
                <FontAwesomeIcon icon={faLinkedin} className='icon linkIcons' id='linkedIn'/>
                <h4 className='button'>linkedin</h4>
            </a>
            <a href='/Resume.pdf' className='linkButton'>
				<FontAwesomeIcon icon={faFileAlt} className='icon linkIcons' id='resume'/>
				<h4 className='button'>resume</h4>
			</a>
		</div>
	);
}
