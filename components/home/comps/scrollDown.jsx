// scrollDown.jsx

import React from 'react'
import s from '../../../styles/layout/home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

const scrollDown = ()=>{
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'  // or auto
    });
};

export default class ScrollDown extends React.Component {
    constructor() {
        super();
        this.state = { isHovered: false };
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() { this.setState(prevState => ({ isHovered: !prevState.isHovered })); }

    render() {
        return (
            <div className='scrollDown' onClick={scrollDown}
                onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <h4 className='button italic'>view projects</h4>
                { !this.state.isHovered ?
                    <FontAwesomeIcon icon={faChevronDown} className='icon' id='down'/> :
                    <FontAwesomeIcon icon={faChevronCircleDown} className='icon' id='circleDown'/>
                }
            </div>
        );
    }
}
