// contact.jsx

import s from '../../styles/layout/contact.module.scss'
import EmailInput from './comps/emailInput'
import Footer from './comps/footer'

export default function Contact() {
    return (
        <div className={s.page}>
            <div className='rect-container-contact-page'>
                <div className='rect-contact-page-1'></div>
                <div className='rect-contact-page-2'></div>
                <div className='rect-contact-page-3'></div>
            </div>
            <div className={s.pageContent}>
                <div className={s.leftContainer}>
                    <h2 id='contactme'>contact me</h2>
                </div>
                <div className={s.rightContainer}>
                    <EmailInput/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
