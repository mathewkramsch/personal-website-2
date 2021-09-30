// footer.jsx

import React from 'react'
import s from '../../../styles/layout/contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

const scrollToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // or auto
    });
};

export default class Footer extends React.Component {
    constructor() {
        super();
        this.state = { isHovered: false };
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() { this.setState(prevState => ({ isHovered: !prevState.isHovered })); }

    render() {
        return (
            <div className={s.footer}>
                <div className={s.topFooter}>
                    <div className='backToTop' onClick={scrollToTop}
                        onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                        <h4 className='italic footerText'>back to top</h4>
                        { !this.state.isHovered ?
                            <FontAwesomeIcon icon={faChevronUp} className='icon' id='up'/> :
                            <FontAwesomeIcon icon={faChevronCircleUp} className='icon' id='circleUp'/>
                        }
                    </div>
                </div>
                <div className={s.bottomFooter}>
                    <h4 className='footerText'>
                        <div id='copyRight'>&copy;</div>2021 Mathew Kramsch
                    </h4>
                    <a href='https://github.com/mathewkramsch/personal-website-2' className='websiteSrcCode'>
                        <FontAwesomeIcon icon={faGithub} className='icon' id='githubContact'/>
                        <h4 className='footerText'>website source code</h4>
                    </a>
                </div>
            </div>
        );
    }
}
