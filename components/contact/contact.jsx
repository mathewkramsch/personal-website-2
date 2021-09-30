// contact.jsx

import s from '../../styles/layout/contact.module.scss'
import EmailInput from './comps/emailInput'
import Footer from './comps/footer'

export default function Contact() {
    return (
        <div className={s.page}>
            <div className={s.pageContent}>
                <div className={s.leftContainer}>
                    <h2 id='contactme'>Send me an email -></h2>
                    <img src='/illustrations/email.svg'/>
                </div>
                <div className={s.rightContainer}>
                    <EmailInput/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
