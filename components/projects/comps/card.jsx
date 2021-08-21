// card.jsx

import React from 'react'
import s from '../../../styles/layout/projects.module.scss'

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inView:'false' }
        this.cardRef = React.createRef();
        this.printPos = this.printPos.bind(this);
        this.setView = this.setView.bind(this);
    }

    printPos() {
        const scrollPos = window.pageYOffset;
        const divPos = this.cardRef.current.offsetTop;
        const windowHeight = window.innerHeight;
        const divOffset = divPos - scrollPos;  // offset from scroll
        console.log('inView: ' + this.state.inView);
    }

    setView() {
        if (!this.cardRef.current) return;
        const scrollPos = window.pageYOffset;
        const divPos = this.cardRef.current.offsetTop;
        const windowHeight = window.innerHeight;
        const divOffset = divPos - scrollPos;  // offset from scroll
        const lowerBound = windowHeight/4 - windowHeight*0.1;
        const upperBound = windowHeight/2;

        const inView = (divOffset > lowerBound && divOffset < upperBound);
        if (inView !== this.state.inView) this.setState({ inView });
    }

    componentDidMount() {
        document.addEventListener('scroll', this.setView);
    }


    render() {
        return (
            <div className={this.state.inView ? 'inView' : 'projectCard' }
                onClick={this.printPos} ref={this.cardRef}>
                <div className='cardImage'>
                    <a href={this.props.projectData.link}>
                        <img src={this.props.projectData.imgSrc}/>
                    </a>
                </div>
                <div className='cardInfo'>
                    <a href={this.props.projectData.link}>
                        <h4>{this.props.projectData.title}</h4>
                    </a>
                    <p>{this.props.projectData.description}
                        <a href={this.props.projectData.srcCodeLink} className='srcCodeLink'>
                            &nbsp;View source code.
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}
