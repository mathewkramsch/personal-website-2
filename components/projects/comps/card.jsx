// card.jsx

import React from 'react'
import s from '../../../styles/layout/projects.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { focus:false, imgHover:false }
        this.cardRef = React.createRef();
        this.printPos = this.printPos.bind(this);
        this.setView = this.setView.bind(this);
        this.toggleHoverImg = this.toggleHoverImg.bind(this);
    }

    printPos() {  // for debugging: put "onClick={this.printPos}" in card div
        const scrollPos = window.pageYOffset;
        const divPos = this.cardRef.current.offsetTop;
        const windowHeight = window.innerHeight;
        const divOffset = divPos - scrollPos;  // offset from scroll
        console.log('focus: ' + this.state.focus);
    }

    setView() {  // sets state = { focus: true } if object is in view (center of page)
        if (!this.cardRef.current) return;
        const scrollPos = window.pageYOffset;
        const divPos = this.cardRef.current.offsetTop;
        const windowHeight = window.innerHeight;
        const divOffset = divPos - scrollPos;  // offset from scroll
        const lowerBound = windowHeight/4 - windowHeight*0.03;  // top of page
        const upperBound = windowHeight/2;  // bottom of page
        const inView = (divOffset > lowerBound && divOffset < upperBound);
        if (inView !== this.state.focus) this.setState({ focus:inView });
    }

    toggleHoverImg() {  // reverses state of imgHover
        this.setState({ imgHover:!this.state.imgHover });
    }

    componentDidMount() {
        document.addEventListener('scroll', this.setView);
    }


    render() {
        return (
            <div className={this.state.focus ? 'projectCard-focus' : 'projectCard' }
                ref={this.cardRef}>
                <div className={this.state.focus ? 'cardImage cardImage-focus' : 'cardImage' }
                    onMouseEnter={this.toggleHoverImg} onMouseLeave={this.toggleHoverImg}>
                    { this.state.imgHover && <a href={this.props.projectData.link} id='openProject'>Open Project</a> }
                    <a href={this.props.projectData.link}>
                        <img src={this.props.projectData.imgSrc}/>
                    </a>
                </div>
                <div className='cardInfo'>
                    <a href={this.props.projectData.link}>
                        <h4 id='projectTitle'>
                            {this.props.projectData.title} &nbsp;
                            <FontAwesomeIcon icon={faExternalLinkAlt} id='externalLink'/>
                        </h4>
                    </a>
                    <p>{this.props.projectData.description}
						{ this.props.projectData.srcCode==='true' &&
							<a href={this.props.projectData.srcCodeLink} className='srcCodeLink'>
								View source code.
							</a>
						}
                    </p>
                </div>
            </div>
        );
    }
}
