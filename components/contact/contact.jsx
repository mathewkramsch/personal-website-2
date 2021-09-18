// contact.jsx

import s from '../../styles/layout/contact.module.scss'
import EmailInput from './comps/emailInput'
import Footer from './comps/footer'
import { Parallax } from 'react-scroll-parallax';

export default function Contact() {
    return (
        <div className={s.page}>
            <div className='rect-container-contact-page'>
                <Parallax x={[0,-40]}>
                    <div className='rect-contact-page-2'>
                        <Parallax x={[5,0]}>
                            <div className='rect-contact-page-1'></div>
                        </Parallax>
                    </div>
                </Parallax>
                <div className='rect-contact-page-3'></div>
            </div>
            <div className={s.pageContent}>
                <div className={s.leftContainer}>
                    <h2 id='contactme'>Send me an email -></h2>
                </div>
                <div className={s.rightContainer}>
                    <EmailInput/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
